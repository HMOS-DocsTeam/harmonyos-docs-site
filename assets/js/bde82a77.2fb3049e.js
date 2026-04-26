"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["457036"], {
510496(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_c_media_info_c_using_ndk_avmetadataextractor_for_media_using_ndk_avmetadataextractor_for_media_md_bde_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-c-media-info-c-using-ndk-avmetadataextractor-for-media-using-ndk-avmetadataextractor-for-media-md-bde.json
var site_docs_media_kit_media_kit_dev_c_media_info_c_using_ndk_avmetadataextractor_for_media_using_ndk_avmetadataextractor_for_media_md_bde_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--c/media-info-c/using-ndk-avmetadataextractor-for-media/using-ndk-avmetadataextractor-for-media","title":"使用AVMetadataExtractor获取元数据(C/C++)","description":"使用AVMetadataExtractor可以实现从原始媒体资源中获取元数据，本开发指导将以获取一个媒体资源的元数据作为示例，向开发者讲解AVMetadataExtractor元数据相关功能。","source":"@site/docs/media-kit/media-kit-dev--c/media-info-c/using-ndk-avmetadataextractor-for-media/using-ndk-avmetadataextractor-for-media.md","sourceDirName":"media-kit/media-kit-dev--c/media-info-c/using-ndk-avmetadataextractor-for-media","slug":"/media-kit/media-kit-dev--c/media-info-c/using-ndk-avmetadataextractor-for-media/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-info-c/using-ndk-avmetadataextractor-for-media/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用AVMetadataExtractor获取元数据(C/C++)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ndk-avmetadataextractor-for-media","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"屏幕录制支持矩形区域录制","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-recording-c/video-supports-rectangular-area-recording/"},"next":{"title":"使用AVImageGenerator获取视频帧(C/C++)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--c/media-info-c/using-ndk-avimagegenerator-for-video/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--c/media-info-c/using-ndk-avmetadataextractor-for-media/using-ndk-avmetadataextractor-for-media.md


const frontMatter = {
	title: '使用AVMetadataExtractor获取元数据(C/C++)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ndk-avmetadataextractor-for-media',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AVMetadataExtractor获取元数据(C/C++)';

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
        id: "使用avmetadataextractor获取元数据cc",
        children: "使用AVMetadataExtractor获取元数据(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用AVMetadataExtractor可以实现从原始媒体资源中获取元数据，本开发指导将以获取一个媒体资源的元数据作为示例，向开发者讲解AVMetadataExtractor元数据相关功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取媒体资源的元数据的全流程包含：创建AVMetadataExtractor、设置资源、获取元数据、销毁资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在CMake脚本中链接动态库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libavmetadata_extractor.so libace_napi.z.so )\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h",
        children: "OH_AVFormat"
      }), "相关接口时，需引入如下头文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <multimedia/player_framework/native_avformat.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并在CMake脚本中链接如下动态库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libnative_media_core.so)\n"
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
      children: "并在CMake脚本中链接如下动态库。"
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
      children: "并需要在CMake脚本中链接如下动态库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libhilog_ndk.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者通过引入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h",
        children: "avmetadata_extractor.h"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-base-h/capi-avmetadata-extractor-base-h",
        children: "avmetadata_extractor_base.h"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-averrors-h/capi-native-averrors-h",
        children: "native_averrors.h"
      }), "头文件，使用获取元数据相关API。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-c/media-module/capi-avmetadataextractor/capi-avmetadataextractor",
        children: "AVMetadataExtractor API参考"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h#oh_avmetadataextractor_create",
            children: "OH_AVMetadataExtractor_Create()"
          }), "创建实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/player_framework/avmetadata_extractor.h>\n// 创建OH_AVMetadataExtractor实例。\nOH_AVMetadataExtractor* mainExtractor = OH_AVMetadataExtractor_Create();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置媒体资源的文件描述符：调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h#oh_avmetadataextractor_setfdsource",
            children: "OH_AVMetadataExtractor_SetFDSource()"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["不同AVMetadataExtractor或者", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-module/capi-avimagegenerator/capi-avimagegenerator",
            children: "AVImageGenerator"
          }), "实例，如果需要操作同一资源，需要多次打开文件描述符，不要共用同一文件描述符。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include <multimedia/player_framework/avmetadata_extractor.h>\nint64_t offset = 0; // 媒体源在文件描述符中的偏移量。\nint32_t fileDescribe = -1; // 媒体文件描述符。\nint32_t fileSize = 0; // 媒体文件大小。\n\n// GetInputParams为辅助函数，用于获取FetchAlbumCover、FetchMetadata的输入参数，实现见完整示例。\nif (!GetInputParams(env, info, offset, fileDescribe, fileSize)) {\n    return nullptr;\n}\n // 设置媒体资源的文件描述符。\nOH_AVErrCode avErrCode = OH_AVMetadataExtractor_SetFDSource(mainExtractor, fileDescribe, offset, fileSize);\n// 异常处理。\nif (avErrCode != AV_ERR_OK) {\n    OH_AVMetadataExtractor_Release(mainExtractor);\n    napi_throw_error(env, \"EFAILED\", \"SetFDSource for metadata extractor failed\");\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取元数据：调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h#oh_avmetadataextractor_fetchmetadata",
            children: "OH_AVMetadataExtractor_FetchMetadata()"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["需要先调用OH_AVFormat_Create()函数创建一个OH_AVFormat对象，通过访问该对象的各个键值对，可以获取到元数据。使用完成需要调用OH_AVFormat_Destroy销毁该对象，防止产生内存泄漏，详细使用方法请参阅", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avformat-h/capi-native-avformat-h",
            children: "OH_AVFormat"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取元数据。\navErrCode = OH_AVMetadataExtractor_FetchMetadata(mainExtractor, avMetadata);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于视频资源：可以通过OH_AVMetadataExtractor_FetchMetadata设置的OH_AVFormat对象，根据每种元信息的类型，通过OH_AVFormat_GetIntValue、GetStringValueFromAVFormat等函数获取宽、高等数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 从OH_AVFormat对象中解析出int32_t类型的视频资源宽高信息。\nint32_t width = 0;\nint32_t height = 0;\nOH_AVFormat_GetIntValue(avMetadata, OH_AVMETADATA_EXTRACTOR_VIDEO_WIDTH, &width);\nOH_AVFormat_GetIntValue(avMetadata, OH_AVMETADATA_EXTRACTOR_VIDEO_HEIGHT, &height);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对于音频资源而言，除了可以通过OH_AVFormat对象来获取音频资源的标题、时长等元数据外，还可以获取专辑封面（例如，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h#oh_avmetadataextractor_fetchalbumcover",
            children: "OH_AVMetadataExtractor_FetchAlbumCover()"
          }), "，可以获取到专辑封面）。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用完成需要调用OH_PixelmapNative_Release释放OH_PixelmapNative对象资源，详细使用方法请参阅", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_release",
            children: "Image_NativeModule"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/image_framework/image/pixelmap_native.h>\n#include <multimedia/player_framework/avmetadata_extractor.h>\n\n#include <hilog/log.h>\n// 获取专辑封面。\nOH_PixelmapNative* pixelMap = nullptr;\navErrCode = OH_AVMetadataExtractor_FetchAlbumCover(mainExtractor, &pixelMap);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["释放资源：调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avmetadata-extractor-h/capi-avmetadata-extractor-h#oh_avmetadataextractor_release",
            children: "OH_AVMetadataExtractor_Release()"
          }), "销毁实例，释放资源。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 释放OH_AVMetadataExtractor资源。\nOH_AVMetadataExtractor_Release(mainExtractor);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行示例工程",
      children: "运行示例工程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例，获取一个音频的元数据和专辑封面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新建工程，下载", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/Media/AVMetadataExtractor/AVMetadataExtractorNDK",
            children: "完整示例工程"
          }), "，并将示例工程的资源复制到对应目录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AVMetadataExtractorNDK\nentry/src/main/ets/\n└── pages\n    └── Index.ets (获取元数据界面)\nentry/src/main/\n├── cpp\n│   ├── types\n│   │   └── libentry\n│   │       └── Index.d.ts (NDK函数对应的js映射)\n│   ├── CMakeLists.txt (CMake脚本)\n│   └── napi_init.cpp (NDK函数)\n└── resources\n    ├── base\n    │   ├── element\n    │   │   ├── color.json\n    │   │   ├── float.json\n    │   │   └── string.json\n    │   └── media\n    │\n    └── rawfile\n        └── test.mp3 (音频资源)\n"
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