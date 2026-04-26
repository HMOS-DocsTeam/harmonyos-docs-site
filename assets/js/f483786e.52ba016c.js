"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["722101"], {
348507(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_file_muxing_demuxing_audio_video_demuxer_audio_video_demuxer_md_f48_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-file-muxing-demuxing-audio-video-demuxer-audio-video-demuxer-md-f48.json
var site_docs_avcodec_kit_file_muxing_demuxing_audio_video_demuxer_audio_video_demuxer_md_f48_namespaceObject = JSON.parse('{"id":"avcodec-kit/file-muxing-demuxing/audio-video-demuxer/audio-video-demuxer","title":"媒体数据解析","description":"开发者可以调用本模块的Native API接口，完成媒体数据的解封装相关操作，即从比特流数据中取出音频、视频、字幕等媒体sample，获得DRM相关信息。","source":"@site/docs/avcodec-kit/file-muxing-demuxing/audio-video-demuxer/audio-video-demuxer.md","sourceDirName":"avcodec-kit/file-muxing-demuxing/audio-video-demuxer","slug":"/avcodec-kit/file-muxing-demuxing/audio-video-demuxer/","permalink":"/harmonyos-docs-site/avcodec-kit/file-muxing-demuxing/audio-video-demuxer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"媒体数据解析","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-video-demuxer","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"媒体数据封装","permalink":"/harmonyos-docs-site/avcodec-kit/file-muxing-demuxing/audio-video-muxer/"},"next":{"title":"AVSession Kit简介","permalink":"/harmonyos-docs-site/avsession-kit/avsession-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/file-muxing-demuxing/audio-video-demuxer/audio-video-demuxer.md


const frontMatter = {
	title: '媒体数据解析',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-video-demuxer',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '媒体数据解析';

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
}, {
  "value": "附表",
  "id": "附表",
  "level": 2
}, {
  "value": "文件级别属性支持范围",
  "id": "文件级别属性支持范围",
  "level": 3
}, {
  "value": "轨道级别属性支持范围",
  "id": "轨道级别属性支持范围",
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
        id: "媒体数据解析",
        children: "媒体数据解析"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以调用本模块的Native API接口，完成媒体数据的解封装相关操作，即从比特流数据中取出音频、视频、字幕等媒体sample，获得DRM相关信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持的数据输入类型有：远程连接(http协议)和文件描述符(fd)。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前支持的解封装格式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/avcodec-support-formats#%E5%AA%92%E4%BD%93%E6%95%B0%E6%8D%AE%E8%A7%A3%E6%9E%90",
        children: "AVCodec支持的格式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "适用场景"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "播放"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "播放媒体文件时，需要先对媒体流进行解封装，然后使用解封装获取的sample进行解码和播放。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音视频编辑"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编辑媒体文件时，需要先对媒体流进行解封装，获取到指定sample进行编辑。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "媒体文件格式转换（转封装）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "媒体文件格式转换时，需要先对媒体流进行解封装，然后按需将媒体流封装至新的格式文件内。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-module/capi-avdemuxer/capi-avdemuxer",
        children: "AVDemuxer"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-module/capi-avsource/capi-avsource",
        children: "AVSource"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(551979)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用解封装能力解析网络播放路径，需要", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
          children: "声明权限"
        }), "：ohos.permission.INTERNET"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用解封装能力解析本地文件，需要", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
          children: "向用户申请授权"
        }), "：ohos.permission.READ_MEDIA"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果使用ResourceManager.getRawFd打开HAP资源文件描述符，使用方法请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager#getrawfd9",
          children: "ResourceManager API参考"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libnative_media_codecbase.so)\ntarget_link_libraries(sample PUBLIC libnative_media_avdemuxer.so)\ntarget_link_libraries(sample PUBLIC libnative_media_avsource.so)\ntarget_link_libraries(sample PUBLIC libnative_media_core.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(703956)/* ["default"] */.A) + "",
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
            children: "#include <multimedia/player_framework/native_avdemuxer.h>\n#include <multimedia/player_framework/native_avsource.h>\n#include <multimedia/player_framework/native_avcodec_base.h>\n#include <multimedia/player_framework/native_avformat.h>\n#include <multimedia/player_framework/native_avbuffer.h>\n#include <fcntl.h>\n#include <sys/stat.h>\n#include <string>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建资源管理实例。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者HAP中使用open获取fd时，filepath需要转换为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/core-file-kit/app-file/app-sandbox-directory#%E5%BA%94%E7%94%A8%E6%B2%99%E7%AE%B1%E8%B7%AF%E5%BE%84%E5%92%8C%E7%9C%9F%E5%AE%9E%E7%89%A9%E7%90%86%E8%B7%AF%E5%BE%84%E7%9A%84%E5%AF%B9%E5%BA%94%E5%85%B3%E7%B3%BB",
            children: "沙箱路径"
          }), "，才能获取沙盒资源。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建文件操作符 fd，打开时对文件实例必须有读权限（filePath 为待解封装文件路径，需预置文件，保证路径指向的文件存在）。\nstd::string filePath = \"test.mp4\";\nint32_t fd = open(filePath.c_str(), O_RDONLY);\nstruct stat fileStatus {};\nint64_t fileSize = 0;\nif (stat(filePath.c_str(), &fileStatus) == 0) {\n   fileSize = static_cast<int64_t>(fileStatus.st_size);\n} else {\n   printf(\"get stat failed\");\n   return;\n}\n// 注意：offset（文件起始偏移）、fileSize（文件大小）需与待解析文件匹配。\n// fd 指向单个资源文件时，offset为0、fileSize为资源文件大小。\n// fd 指向多个连续拼接的资源文件时（如多个mp3二进制拼接）：offset、fileSize 按待解析文件实际偏移和大小设置。\nOH_AVSource *source = OH_AVSource_CreateWithFD(fd, 0, fileSize);\nif (source == nullptr) {\n   printf(\"create source failed\");\n   return;\n}\n// 为 uri 资源文件创建 source 资源实例（可选）。\n// OH_AVSource *source = OH_AVSource_CreateWithURI(uri);\n\n// 为自定义数据源创建 source 资源实例（可选）。使用该方式前，需要先实现AVSourceReadAt接口函数实现。\n// 当使用OH_AVSource_CreateWithDataSource时需要补充g_filePath。\n// g_filePath = filePath ;\n// OH_AVDataSource dataSource = {fileSize, AVSourceReadAt};\n// OH_AVSource *source = OH_AVSource_CreateWithDataSource(&dataSource);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AVSourceReadAt接口函数，需要放在创建资源管理实例前实现："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 添加头文件。\n#include <fstream>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static std::string g_filePath;\n\nenum MediaDataSourceError : int32_t {\n   SOURCE_ERROR_IO = -2,\n   SOURCE_ERROR_EOF = -1\n};\n\nint32_t AVSourceReadAt(OH_AVBuffer *data, int32_t length, int64_t pos)\n{\n   if (data == nullptr) {\n      printf(\"AVSourceReadAt : data is nullptr!\\n\");\n      return MediaDataSourceError::SOURCE_ERROR_IO;\n   }\n\n   std::ifstream infile(g_filePath, std::ofstream::binary);\n   if (!infile.is_open()) {\n      printf(\"AVSourceReadAt : open file failed! file:%s\\n\", g_filePath.c_str());\n      return MediaDataSourceError::SOURCE_ERROR_IO;  // 打开文件失败。\n   }\n\n   infile.seekg(0, std::ios::end);\n   int64_t fileSize = infile.tellg();\n   if (pos >= fileSize) {\n      printf(\"AVSourceReadAt : pos over or equals file size!\\n\");\n      return MediaDataSourceError::SOURCE_ERROR_EOF;  // pos已经是文件末尾位置，无法读取。\n   }\n\n   if (pos + length > fileSize) {\n      length = fileSize - pos;    // pos+length长度超过文件大小时，读取从pos到文件末尾的数据。\n   }\n\n   infile.seekg(pos, std::ios::beg);\n   if (length <= 0) {\n      printf(\"AVSourceReadAt : read length less than zero!\\n\");\n      return MediaDataSourceError::SOURCE_ERROR_IO;\n   }\n   char* buffer = new char[length];\n   infile.read(buffer, length);\n   infile.close();\n\n   memcpy(reinterpret_cast<char *>(OH_AVBuffer_GetAddr(data)),\n      buffer, length);\n   delete[] buffer;\n\n   return length;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建解封装器实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 为资源实例创建对应的解封装器。\nOH_AVDemuxer *demuxer = OH_AVDemuxer_CreateWithSource(source);\nif (demuxer == nullptr) {\n   printf(\"create demuxer failed\");\n   return;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["注册", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/avcodec-api/avcodec-c/avcodec-headerfile/capi-native-avdemuxer-h/capi-native-avdemuxer-h#demuxer_mediakeysysteminfocallback",
            children: "DRM信息监听函数"
          }), "（可选，若非DRM码流或已获得", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/drm-api/drm-c/drm-struct/capi-drm-drm-mediakeysysteminfo/capi-drm-drm-mediakeysysteminfo",
            children: "DRM信息"
          }), "，可跳过此步）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置DRM信息监听的接口，回调函数支持返回解封装器实例，适用于多个解封装器场景。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// DRM信息监听回调OnDrmInfoChangedWithObj实现。\nstatic void OnDrmInfoChangedWithObj(OH_AVDemuxer *demuxer, DRM_MediaKeySystemInfo *drmInfo)\n{\n   // 解析DRM信息，包括数量、DRM类型及对应pssh。\n}\n\nDemuxer_MediaKeySystemInfoCallback callback = &OnDrmInfoChangedWithObj;\nDrm_ErrCode ret = OH_AVDemuxer_SetDemuxerMediaKeySystemInfoCallback(demuxer, callback);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在监听到DRM信息后，也可主动调用获取DRM信息(uuid及对应pssh)接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "DRM_MediaKeySystemInfo mediaKeySystemInfo;\nOH_AVDemuxer_GetMediaKeySystemInfo(demuxer, &mediaKeySystemInfo);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在获取、解析DRM信息后，需创建对应DRM解决方案的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/drm-kit/drm-c-dev-guide",
            children: "MediaKeySystem、MediaKeySession"
          }), "，获取DRM许可证等。并根据需要设置音频解密配置(详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/audio-decoding#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
            children: "音频解码开发指南开发步骤"
          }), "第4步)、设置视频解密配置（详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-decoding#surface%E6%A8%A1%E5%BC%8F",
            children: "视频解码开发指南开发步骤Surface模式"
          }), "第5步或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/avcodec-kit/audio-video-codec/video-decoding#buffer%E6%A8%A1%E5%BC%8F",
            children: "Buffer模式"
          }), "第4步），实现DRM内容解密。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取文件信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取文件用户自定义属性（可选，若用户无需获取自定义属性，可跳过此步）。\n// 从文件 source 获取用户自定义属性信息。\nOH_AVFormat *customMetadataFormat = OH_AVSource_GetCustomMetadataFormat(source);\nif (customMetadataFormat == nullptr) {\n   // 需释放前置流程资源，参考第10步。\n   printf(\"get custom metadata format failed\");\n   return;\n}\n// 注意事项：\n// 1. customKey需与封装时写入的key完全一致（含完整命名层级），\n// 示例key仅为演示，实际应替换为用户自定义的字符串。\n// 例：封装时写入key为\"com.openharmony.custom.meta.abc.efg\"，\n// 获取时必须使用完整key，截断使用\"com.openharmony.custom.meta.abc\"会失败。\n// 2. value类型需与封装时数据类型匹配，示例为string类型。其余类型需调用对应接口，支持int/float类型；API version 20起，支持buffer类型。\nconst char *customKey = \"com.openharmony.custom.meta.string\"; // 替换为实际封装时使用的完整key。\nconst char *customValue;\nif (!OH_AVFormat_GetStringValue(customMetadataFormat, customKey, &customValue)) {\n   printf(\"get custom metadata from custom metadata format failed\");\n}\nOH_AVFormat_Destroy(customMetadataFormat);\ncustomMetadataFormat = nullptr;\n\n// 获取文件轨道数（可选，若用户已知轨道信息，可跳过此步）。\n// 从文件 source 信息获取文件轨道数，用户可通过该接口获取文件级别属性，具体支持信息参考附表 1。\nOH_AVFormat *sourceFormat = OH_AVSource_GetSourceFormat(source);\nif (sourceFormat == nullptr) {\n   // 需释放前置流程资源，参考第10步。\n   printf(\"get source format failed\");\n   return;\n}\nint32_t trackCount = 0;\nif (!OH_AVFormat_GetIntValue(sourceFormat, OH_MD_KEY_TRACK_COUNT, &trackCount)) {\n   printf(\"get track count from source format failed\");\n}\nif (trackCount == 0) {\n   // 文件中无轨道，需根据业务做其他处理。\n   printf(\"no track\");\n}\nOH_AVFormat_Destroy(sourceFormat);\nsourceFormat = nullptr;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取轨道index及信息（可选，若用户已知轨道信息，可跳过此步）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "uint32_t audioTrackIndex = 0;\nuint32_t videoTrackIndex = 0;\nint32_t w = 0;\nint32_t h = 0;\nint64_t bitRate = 0; // 配置比特率，单位为bps。\ndouble frameRate = 0.0;\nconst char* mimetype = nullptr;\nuint8_t *codecConfig = nullptr;\nsize_t bufferSize = 0;\nint32_t trackType = -1;\nfor (uint32_t index = 0; index < (static_cast<uint32_t>(trackCount)); index++) {\n   // 获取轨道信息，用户可通过该接口获取对应轨道级别属性，具体支持信息参考附表 2。\n   OH_AVFormat *trackFormat = OH_AVSource_GetTrackFormat(source, index);\n   if (trackFormat == nullptr) {\n      printf(\"get track format failed\");\n      return;\n   }\n   // 获取轨道类型, 不支持的类型不会修改trackType的值。\n   // 注意trackType初始值建议设为非有效值（如-1），避免误用。\n   if (!OH_AVFormat_GetIntValue(trackFormat, OH_MD_KEY_TRACK_TYPE, &trackType)) {\n      printf(\"get track type from track format failed\");\n      return;\n   }\n   if (trackType == OH_MediaType::MEDIA_TYPE_AUXILIARY) {\n      const char *referenceType;\n      if (!OH_AVFormat_GetStringValue(trackFormat, OH_MD_KEY_TRACK_REFERENCE_TYPE, &referenceType)) {\n         printf(\"get reference type from auxiliary track failed\");\n      }\n      int32_t* referenceIds;\n      size_t referenceIdsCount;\n      if (!OH_AVFormat_GetIntBuffer(trackFormat, OH_MD_KEY_TRACK_REFERENCE_TYPE, &referenceIds, &referenceIdsCount)) {\n         printf(\"get reference track ids from auxiliary track failed\");\n      }\n      // 根据辅助轨类型处理轨道参考关系。\n   }\n   static_cast<OH_MediaType>(trackType) == OH_MediaType::MEDIA_TYPE_AUD ? audioTrackIndex = index : videoTrackIndex = index;\n   // 获取视频轨宽高。\n   if (trackType == OH_MediaType::MEDIA_TYPE_VID) {\n      if (!OH_AVFormat_GetIntValue(trackFormat, OH_MD_KEY_WIDTH, &w)) {\n         printf(\"get track width from track format failed\");\n         return;\n      }\n      if (!OH_AVFormat_GetIntValue(trackFormat, OH_MD_KEY_HEIGHT, &h)) {\n         printf(\"get track height from track format failed\");\n         return;\n      }\n      if (!OH_AVFormat_GetLongValue(trackFormat, OH_MD_KEY_BITRATE, &bitRate)) {\n         printf(\"get track bitRate from track format failed\");\n         return;\n      }\n      if (!OH_AVFormat_GetDoubleValue(trackFormat, OH_MD_KEY_FRAME_RATE, &frameRate)) {\n         printf(\"get track frameRate from track format failed\");\n         return;\n      }\n      if (!OH_AVFormat_GetStringValue(trackFormat, OH_MD_KEY_CODEC_MIME, &mimetype)) {\n         printf(\"get track mimetype from track format failed\");\n         return;\n      }\n      if (!OH_AVFormat_GetBuffer(trackFormat, OH_MD_KEY_CODEC_CONFIG, &codecConfig, &bufferSize)) {\n         printf(\"get track codecConfig from track format failed\");\n         return;\n      }\n      printf(\" track width%d, track height：%d, track bitRate：%ld, track frameRate：%f, track mimetype：%s\\n\", w, h, bitRate, frameRate, mimetype);\n   }\n   OH_AVFormat_Destroy(trackFormat);\n   trackFormat = nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加解封装轨道。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if(OH_AVDemuxer_SelectTrackByID(demuxer, audioTrackIndex) != AV_ERR_OK){\n   printf(\"select audio track failed: %d\", audioTrackIndex);\n   return;\n}\nif(OH_AVDemuxer_SelectTrackByID(demuxer, videoTrackIndex) != AV_ERR_OK){\n   printf(\"select video track failed: %d\", videoTrackIndex);\n   return;\n}\n// 取消选择轨道（可选）。\n// OH_AVDemuxer_UnselectTrackByID(demuxer, audioTrackIndex);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调整轨道到指定时间点（可选）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 调整轨道到指定时间点，后续从该时间点进行解封装。\n// 注意：\n// 1. mpegts、mpg 格式文件使用OH_AVDemuxer_SeekToTime功能时，跳转到的位置可能为非关键帧。可在跳转后调用OH_AVDemuxer_ReadSampleBuffer，通过获取到的OH_AVCodecBufferAttr判断当前帧是否为关键帧。若非关键帧影响应用侧显示等功能，可在跳转后循环读取，获取到后续第一帧关键帧后，再进行解码等处理。\n// 2. ogg格式文件使用OH_AVDemuxer_SeekToTime功能时，会跳转到传入时间millisecond所在时间间隔(秒)的起始处，可能会导致一定数量的帧误差。\n// 3. demuxer的seek处理只针对解码行为一致的码流进行处理，如果seek后需要解码器重新配置参数，或者需要重新送入参数集的数据才可以正确解码的码流，seek后可能会出现花屏、解码卡死等问题。\nOH_AVDemuxer_SeekToTime(demuxer, 0, OH_AVSeekMode::SEEK_MODE_CLOSEST_SYNC);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开始解封装，循环获取sample（以含音频、视频两轨的文件为例）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BufferAttr包含的属性："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "size：sample尺寸；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "offset：数据在AVBuffer中的偏移，一般为0；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "pts：文件封装的显示时间戳；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "flags：sample属性。"
          }), "\n"]
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "flag"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AVCODEC_BUFFER_FLAGS_NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "默认。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AVCODEC_BUFFER_FLAGS_EOS"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "结尾sample，数据为空。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AVCODEC_BUFFER_FLAGS_SYNC_FRAME"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "IDR帧或I帧。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AVCODEC_BUFFER_FLAGS_INCOMPLETE_FRAME"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "非完整的sample，一般由于buffer过小，无法拷贝完整的sample。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AVCODEC_BUFFER_FLAGS_CODEC_DATA"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "含参数集信息的帧。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "AVCODEC_BUFFER_FLAGS_DISCARD"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可丢弃的帧。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OH_AVDemuxer_ReadSampleBuffer接口本身可能存在耗时久，取决于文件IO，建议以异步方式进行调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 为每个线程定义处理函数。\nvoid ReadTrackSamples(OH_AVDemuxer *demuxer, uint32_t trackIndex, int32_t buffer_size,\n                      std::atomic<bool>& isEnd, std::atomic<bool>& threadFinished)\n{\n   // 创建缓冲区。\n   OH_AVBuffer *buffer = OH_AVBuffer_Create(buffer_size);\n   if (buffer == nullptr) {\n      printf(\"Create buffer failed for track %d\\n\", trackIndex);\n      threadFinished.store(true);\n      return;\n   }\n   OH_AVCodecBufferAttr info;\n   int32_t ret;\n\n   while (!isEnd.load()) {\n      // 在调用OH_AVDemuxer_ReadSampleBuffer接口获取数据前，需要先调用OH_AVDemuxer_SelectTrackByID选中需要获取数据的轨道。\n      // 注意：\n      // 在avi、mpg、wmv格式下，由于容器标准不支持封装时间戳信息，所以demuxer解出的帧中不含pts信息，需要调用方根据帧率及解码出帧后的显示顺序自行计算显示时间戳信息。\n      ret = OH_AVDemuxer_ReadSampleBuffer(demuxer, trackIndex, buffer);\n      if (ret == AV_ERR_OK) {\n            OH_AVBuffer_GetBufferAttr(buffer, &info);\n            printf(\"Track %d sample size: %d\\n\", trackIndex, info.size);\n            // 检查EOS标志。\n            if (info.flags == OH_AVCodecBufferFlags::AVCODEC_BUFFER_FLAGS_EOS) {\n               isEnd.store(true);\n            }\n            // 处理缓冲区数据（这里可以根据需要实现解码逻辑）。\n      } else {\n            printf(\"Read sample failed for track %d\\n\", trackIndex);\n            break;\n      }\n   }\n   // 销毁缓冲区。\n   OH_AVBuffer_Destroy(buffer);\n   buffer = nullptr;\n   threadFinished.store(true);\n}\n\n// 根据需求计算合适的缓冲区大小。\nint32_t audioBufferSize = 4096;  // 典型音频缓冲区大小。\nint32_t videoBufferSize = w * h * 3 >> 1;  // 原始视频缓冲区大小。\n\n// 创建原子变量用于线程通信。\nstd::atomic<bool> audioIsEnd{false}, videoIsEnd{false}; // 表示流是否结束。\nstd::atomic<bool> audioThreadFinished{false}, videoThreadFinished{false}; // 表示线程是否暂停。\n\n// 创建线程。\nstd::thread audioThread(ReadTrackSamples, demuxer, audioTrackIndex, audioBufferSize,\n                        std::ref(audioIsEnd), std::ref(audioThreadFinished));\nstd::thread videoThread(ReadTrackSamples, demuxer, videoTrackIndex, videoBufferSize,\n                        std::ref(videoIsEnd), std::ref(videoThreadFinished));\naudioThread.join();\nvideoThread.join();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "销毁解封装实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 需要用户调用 OH_AVSource_Destroy 接口成功后，手动将实例置为nullptr，对同一实例重复调用 OH_AVSource_Destroy 会导致程序错误。\nif (OH_AVSource_Destroy(source) != AV_ERR_OK) {\n   printf(\"destroy source pointer error\");\n}\nsource = nullptr;\n// 需要用户调用 OH_AVDemuxer_Destroy 接口成功后，手动将实例置为nullptr，对同一实例重复调用 OH_AVDemuxer_Destroy 会导致程序错误。\nif (OH_AVDemuxer_Destroy(demuxer) != AV_ERR_OK) {\n   printf(\"destroy demuxer pointer error\");\n}\ndemuxer = nullptr;\nclose(fd);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "附表",
      children: "附表"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文件级别属性支持范围",
      children: "文件级别属性支持范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(676300)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "正常解析时才可以获取对应属性数据，如果文件信息错误或缺失，将导致解析异常，无法获取数据。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当前GBK格式字符集数据会转换为UTF8提供，其他类型字符集如果需要转换为UTF8格式使用，需要调用方自行转换，参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/icu4c/icu4c",
          children: "icu4c"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 23开始，部分OGG格式资源，如OH_MD_KEY_TITLE、OH_MD_KEY_ARTIST和OH_MD_KEY_ALBUM存在于轨道属性中，可从轨道级别属性中获取。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["数据类型及详细取值范围参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/avcodec-api/avcodec-c/avcodec-module/capi-codecbase/capi-codecbase#%E5%AA%92%E4%BD%93%E6%95%B0%E6%8D%AE%E9%94%AE%E5%80%BC%E5%AF%B9",
          children: "媒体数据键值对"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 文件级别属性支持范围"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_TITLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件标题的键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_ARTIST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件艺术家的键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_ALBUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件专辑的键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_ALBUM_ARTIST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件专辑艺术家的键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_DATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件日期的键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_COMMENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件注释的键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_GENRE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件流派的键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_COPYRIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件版权的键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_LANGUAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件语言的键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_DESCRIPTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件描述的键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_LYRICS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件歌词的键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_TRACK_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件轨道数量的键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_DURATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件时长的键"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_START_TIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件起始时间的键"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "轨道级别属性支持范围",
      children: "轨道级别属性支持范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(388976)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正常解析时才可以获取对应属性数据；如果文件信息错误或缺失，将导致解析异常，无法获取数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "辅助轨属性范围与实际媒体类型（音频、视频）保持一致。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["数据类型及详细取值范围参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-module/capi-codecbase/capi-codecbase#%E5%AA%92%E4%BD%93%E6%95%B0%E6%8D%AE%E9%94%AE%E5%80%BC%E5%AF%B9",
        children: "媒体数据键值对"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 轨道级别属性支持范围"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "视频轨支持"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "音频轨支持"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "字幕轨支持"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "辅助轨支持"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CODEC_MIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "码流编解码器类型的键。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_TRACK_TYPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "码流媒体类型的键。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_TRACK_START_TIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "码流起始时间的键。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_BITRATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "码流比特率的键。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_LANGUAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "码流语言类型的键。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CODEC_CONFIG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编解码器特定数据的键，视频中表示传递参数集，音频中表示传递解码器的参数配置信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_WIDTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频流宽度的键。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_HEIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频流高度的键。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_FRAME_RATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频流帧率的键。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_ROTATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频流旋转角度的键。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_SAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频流样本长宽比的键。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_PROFILE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频流编码档次，只针对h265码流使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_RANGE_FLAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频流视频YUV值域标志的键，只针对h265码流使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_COLOR_PRIMARIES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频流视频色域的键，只针对h265码流使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_TRANSFER_CHARACTERISTICS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频流视频传递函数的键，只针对h265码流使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_MATRIX_COEFFICIENTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频矩阵系数的键，只针对h265码流使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_VIDEO_IS_HDR_VIVID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "视频流标记是否为HDR Vivid的键，只针对HDR Vivid码流使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_SAMPLE_RATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频流采样率的键。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUD_CHANNEL_COUNT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频流通道数的键。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_CHANNEL_LAYOUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频流所需编码通道布局的键。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AUDIO_SAMPLE_FORMAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频流样本格式的键。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_AAC_IS_ADTS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "aac格式的键，只针对aac码流使用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_BITS_PER_CODED_SAMPLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "音频流每个编码样本位数的键。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_REFERENCE_TRACK_IDS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件轨道间参考、被参考关系。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_TRACK_REFERENCE_TYPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件辅助轨类型。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_MD_KEY_TRACK_DESCRIPTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "媒体文件辅助轨描述信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√"
          })]
        })]
      })]
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
676300(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
388976(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
703956(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
551979(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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