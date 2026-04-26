"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["417481"], {
786526(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_c_media_info_c_using_ndk_avimagegenerator_for_video_using_ndk_avimagegenerator_for_video_md_95f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-c-media-info-c-using-ndk-avimagegenerator-for-video-using-ndk-avimagegenerator-for-video-md-95f.json
var site_docs_media_kit_media_kit_dev_c_media_info_c_using_ndk_avimagegenerator_for_video_using_ndk_avimagegenerator_for_video_md_95f_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--c/media-info-c/using-ndk-avimagegenerator-for-video/using-ndk-avimagegenerator-for-video","title":"使用AVImageGenerator获取视频帧(C/C++)","description":"使用AVImageGenerator可以实现从原始媒体资源中获取指定时间的视频帧，本开发指导将以获取视频帧作为示例，向开发者讲解AVImageGenerator相关功能。","source":"@site/docs/media-kit/media-kit-dev--c/media-info-c/using-ndk-avimagegenerator-for-video/using-ndk-avimagegenerator-for-video.md","sourceDirName":"media-kit/media-kit-dev--c/media-info-c/using-ndk-avimagegenerator-for-video","slug":"/media-kit/media-kit-dev--c/media-info-c/using-ndk-avimagegenerator-for-video/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-info-c/using-ndk-avimagegenerator-for-video/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用AVImageGenerator获取视频帧(C/C++)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ndk-avimagegenerator-for-video","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AVMetadataExtractor获取元数据(C/C++)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-info-c/using-ndk-avmetadataextractor-for-media/"},"next":{"title":"使用AVTranscoder实现视频转码(C/C++)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-transcoder-c/using-ndk-avtranscoder-for-transcodering/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--c/media-info-c/using-ndk-avimagegenerator-for-video/using-ndk-avimagegenerator-for-video.md


const frontMatter = {
	title: '使用AVImageGenerator获取视频帧(C/C++)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ndk-avimagegenerator-for-video',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AVImageGenerator获取视频帧(C/C++)';

const assets = {

};



const toc = [{
  "value": "开发步骤及注意事项",
  "id": "开发步骤及注意事项",
  "level": 2
}, {
  "value": "运行示例工程",
  "id": "运行示例工程",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用avimagegenerator获取视频帧cc",
        children: "使用AVImageGenerator获取视频帧(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用AVImageGenerator可以实现从原始媒体资源中获取指定时间的视频帧，本开发指导将以获取视频帧作为示例，向开发者讲解AVImageGenerator相关功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取视频帧的全流程包含：创建AVImageGenerator对象、设置资源、获取视频帧、销毁资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在 CMake 脚本中链接动态库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libavimage_generator.so libace_napi.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_convertpixelmapnativetonapi",
        children: "OH_PixelmapNative_ConvertPixelmapNativeToNapi()"
      }), "接口将nativePixelMap对象转换为PixelMapnapi对象、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_release",
        children: "OH_PixelmapNative_Release()"
      }), "接口释放OH_PixelmapNative对象资源，需引入如下头文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <multimedia/image_framework/image/pixelmap_native.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并在 CMake 脚本中链接如下动态库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libpixelmap.so libpixelmap_ndk.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者使用系统日志能力时，需引入如下头文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <hilog/log.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并需要在 CMake 脚本中链接如下动态库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libhilog_ndk.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["（可选）开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h#oh_avmetadataextractor_fetchmetadata",
        children: "OH_AVMetadataExtractor_FetchMetadata()"
      }), "获取媒体资源时长信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-base-h/capi-avmetadata-extractor-base-h#%E5%8F%98%E9%87%8F",
        children: "OH_AVMETADATA_EXTRACTOR_DURATION"
      }), "，进而选择获取视频帧的时间。使用需引入如下头文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"multimedia/player_framework/avmetadata_extractor.h\"\n#include \"multimedia/player_framework/avmetadata_extractor_base.h\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并需要在 CMake 脚本中链接如下动态库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libavmetadata_extractor.so libnative_media_core.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者通过引入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avimage-generator-h/capi-avimage-generator-h",
        children: "avimage_generator.h"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avimage-generator-base-h/capi-avimage-generator-base-h",
        children: "avimage_generator_base.h"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h",
        children: "native_averrors.h"
      }), "头文件，使用获取视频帧相关API。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-module/capi-avimagegenerator/capi-avimagegenerator",
        children: "AVImageGenerator API参考"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avimage-generator-h/capi-avimage-generator-h#oh_avimagegenerator_create",
            children: "OH_AVImageGenerator_Create()"
          }), "创建实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/player_framework/avimage_generator.h>\n// 创建OH_AVImageGenerator实例。\nOH_AVImageGenerator* generator = OH_AVImageGenerator_Create();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置视频资源的文件描述符：调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avimage-generator-h/capi-avimage-generator-h#oh_avimagegenerator_setfdsource",
            children: "OH_AVImageGenerator_SetFDSource()"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include <multimedia/player_framework/avimage_generator.h>\n#include <multimedia/player_framework/native_averrors.h>\n\nint64_t offset = 0; // 媒体源在文件描述符中的偏移量。\nint32_t fileDescribe = -1; // 媒体文件描述符。\nint32_t fileSize = 0; // 媒体文件大小。\n    \n// 设置视频资源的文件描述符。\nOH_AVErrCode avErrCode = OH_AVImageGenerator_SetFDSource(generator, fileDescribe, offset, fileSize);\n// 异常处理。\nif (avErrCode != AV_ERR_OK) {\n    OH_AVImageGenerator_Release(generator);\n    napi_throw_error(env, \"EFAILED\", \"SetFDSource failed\");\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）获取媒体资源时长信息，并指定获取视频帧的时间。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include \"multimedia/player_framework/avmetadata_extractor.h\"\n#include \"multimedia/player_framework/avmetadata_extractor_base.h\"\nstatic napi_value OhAVMetadataExtractorGetDuration(napi_env env, napi_callback_info info)\n{\n    int64_t offset = 0;\n    int32_t fileDescribe = -1;\n    int64_t fileSize = 0;\n    // 通过辅助函数，获取输入参数，实现见完整示例。\n    if (!GetGetDurationParams(env, info, offset, fileDescribe, fileSize)) {\n        return nullptr;\n    }\n    OH_AVMetadataExtractor* mainExtractor = OH_AVMetadataExtractor_Create();\n    if (!mainExtractor) {\n        napi_throw_error(env, \"EFAILED\", \"Create metadata extractor failed\");\n        return nullptr;\n    }\n    OH_AVErrCode avErrCode = OH_AVMetadataExtractor_SetFDSource(mainExtractor, fileDescribe, offset, fileSize);\n    if (avErrCode != AV_ERR_OK) {\n        OH_AVMetadataExtractor_Release(mainExtractor);\n        napi_throw_error(env, \"EFAILED\", \"SetFDSource for metadata extractor failed\");\n        return nullptr;\n    }\n    OH_AVFormat* avMetadata = OH_AVFormat_Create();\n    // 获取资源文件的元数据信息。\n    avErrCode = OH_AVMetadataExtractor_FetchMetadata(mainExtractor, avMetadata);\n    if (avErrCode != AV_ERR_OK) {\n        OH_AVFormat_Destroy(avMetadata);\n        OH_AVMetadataExtractor_Release(mainExtractor);\n        napi_throw_error(env, \"EFAILED\", \"Fetch metadata failed\");\n        return nullptr;\n    }\n    int64_t out;\n    // 从元数据中获取资源文件的时长。\n    if (!OH_AVFormat_GetLongValue(avMetadata, OH_AVMETADATA_EXTRACTOR_DURATION, &out)) {\n        OH_AVFormat_Destroy(avMetadata);\n        OH_AVMetadataExtractor_Release(mainExtractor);\n        napi_throw_error(env, \"EFAILED\", \"Get duration failed\");\n        return nullptr;\n    }\n    napi_value duration;\n    napi_create_int64(env, out, &duration);\n    OH_AVFormat_Destroy(avMetadata);\n    OH_AVMetadataExtractor_Release(mainExtractor);\n    return duration;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取指定时间的视频帧：调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avimage-generator-h/capi-avimage-generator-h#oh_avimagegenerator_fetchframebytime",
            children: "OH_AVImageGenerator_FetchFrameByTime()"
          }), "，可以获取到一个OH_PixelmapNative对象，该对象可用于图片显示。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用完成需要调用OH_PixelmapNative_Release释放OH_PixelmapNative对象资源，详细使用方法请参阅", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_release",
            children: "Image_NativeModule"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include <multimedia/image_framework/image/pixelmap_native.h>\n#include <multimedia/player_framework/avimage_generator.h>\n#include <multimedia/player_framework/avimage_generator_base.h>\n#include <multimedia/player_framework/native_averrors.h>\n\n// FetchFrameByTime的输入参数。\nstruct FetchFrameParams {\n    int64_t timeUs = 0; // 指定的时间（单位us）。\n    int64_t offset = 0; // 媒体源在文件描述符中的偏移量。\n    int32_t fileDescribe = -1; // 媒体文件描述符。\n    int32_t fileSize = 0; // 媒体文件大小。\n    int32_t options = OH_AVIMAGE_GENERATOR_QUERY_CLOSEST; // OH_AVIMAGE_GENERATOR_QUERY_CLOSEST表示选取离传入时间点最近的关键帧。\n};\n\nstatic napi_value OhAvImageGeneratorFetchFrameByTime(napi_env env, napi_callback_info info)\n{\n    FetchFrameParams fetchFrameParams;\n    // 通过辅助函数，获取输入参数，实现见完整示例。\n    if (!GetFetchFrameByTimeParams(env, info, fetchFrameParams)) {\n        return nullptr;\n    }\n    int64_t timeUs = fetchFrameParams.timeUs;\n    int64_t offset = fetchFrameParams.offset;\n    int32_t fileDescribe = fetchFrameParams.fileDescribe;\n    int32_t fileSize = fetchFrameParams.fileSize;\n    int32_t options = fetchFrameParams.options;\n    // 创建OH_AVImageGenerator实例。\n    OH_AVImageGenerator* generator = OH_AVImageGenerator_Create();\n    // 异常处理。\n    if (!generator) {\n        napi_throw_error(env, \"EFAILED\", \"Create generator failed\");\n        return nullptr;\n    }\n    // 设置视频资源的文件描述符。\n    OH_AVErrCode avErrCode = OH_AVImageGenerator_SetFDSource(generator, fileDescribe, offset, fileSize);\n    // 异常处理。\n    if (avErrCode != AV_ERR_OK) {\n        OH_AVImageGenerator_Release(generator);\n        napi_throw_error(env, \"EFAILED\", \"SetFDSource failed\");\n        return nullptr;\n    }\n    // 取指定时间的视频帧。\n    OH_PixelmapNative* pixelMap = nullptr;\n    avErrCode = OH_AVImageGenerator_FetchFrameByTime(generator, timeUs,\n        (OH_AVImageGenerator_QueryOptions)options, &pixelMap);\n    // 异常处理。\n    if (avErrCode != AV_ERR_OK || !pixelMap) {\n        OH_AVImageGenerator_Release(generator);\n        napi_throw_error(env, \"EFAILED\", \"FetchFrameByTime failed\");\n        return nullptr;\n    }\n    // 将nativePixelMap对象转换为PixelMapnapi对象。\n    napi_value pixelmapNapi = nullptr;\n    Image_ErrorCode errCode = OH_PixelmapNative_ConvertPixelmapNativeToNapi(env, pixelMap, &pixelmapNapi);\n    // 释放OH_PixelmapNative资源。\n    OH_PixelmapNative_Release(pixelMap);\n    // 释放OH_AVImageGenerator资源。\n    OH_AVImageGenerator_Release(generator);\n    // 异常处理。\n    if (errCode != IMAGE_SUCCESS) {\n        napi_throw_error(env, \"EFAILED\", \"Convert PixelMap failed\");\n        return nullptr;\n    }\n    return pixelmapNapi;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["释放资源：调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avimage-generator-h/capi-avimage-generator-h#oh_avimagegenerator_release",
            children: "OH_AVImageGenerator_Release()"
          }), "销毁实例，释放资源。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 释放OH_AVImageGenerator资源。\nOH_AVImageGenerator_Release(generator);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行示例工程",
      children: "运行示例工程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例，获取一个视频指定时间的视频帧。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新建工程，下载", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/Media/AVImageGenerator/AVImageGeneratorNDK",
            children: "完整示例工程"
          }), "，并将示例工程的资源复制到对应目录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AVImageGeneratorNDK\nentry/src/main/ets/\n└── pages\n    └── Index.ets (获取缩略图界面)\nentry/src/main/\n├── cpp\n│   ├── types\n│   │   └── libentry\n│   │       └── Index.d.ts (NDK函数对应的js映射)\n│   ├── CMakeLists.txt (CMake脚本)\n│   └── napi_init.cpp (NDK函数)\n└── resources\n    ├── base\n    │   ├── element\n    │   │   ├── color.json\n    │   │   ├── float.json\n    │   │   └── string.json\n    │   └── media\n    │\n    └── rawfile\n        └── H264_AAC.mp4 (视频资源)\n"
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