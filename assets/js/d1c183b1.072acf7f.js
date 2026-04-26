"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["235099"], {
910192(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_audio_video_codec_audiovivid_audiovivid_avdemuxer_audiovivid_avdemuxer_md_d1c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-audio-video-codec-audiovivid-audiovivid-avdemuxer-audiovivid-avdemuxer-md-d1c.json
var site_docs_avcodec_kit_audio_video_codec_audiovivid_audiovivid_avdemuxer_audiovivid_avdemuxer_md_d1c_namespaceObject = JSON.parse('{"id":"avcodec-kit/audio-video-codec/audiovivid/audiovivid-avdemuxer/audiovivid-avdemuxer","title":"Audio Vivid解封装","description":"获取到Audio Vivid封装的mp4文件后，先调用解封装相关接口，选中音频轨，读取每一帧Audio Vivid，送入解码器中（可参考Audio Vivid解码）。详细的API请参考AVDemuxer模块。","source":"@site/docs/avcodec-kit/audio-video-codec/audiovivid/audiovivid-avdemuxer/audiovivid-avdemuxer.md","sourceDirName":"avcodec-kit/audio-video-codec/audiovivid/audiovivid-avdemuxer","slug":"/avcodec-kit/audio-video-codec/audiovivid/audiovivid-avdemuxer/","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/audiovivid/audiovivid-avdemuxer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Audio Vivid解封装","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audiovivid-avdemuxer","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Audio Vivid能力介绍","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/audiovivid/audiovivid-intro/"},"next":{"title":"Audio Vivid解码","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/audiovivid/audiovivid-audiodecoder/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/audio-video-codec/audiovivid/audiovivid-avdemuxer/audiovivid-avdemuxer.md


const frontMatter = {
	title: 'Audio Vivid解封装',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audiovivid-avdemuxer',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'Audio Vivid解封装';

const assets = {

};



const toc = [{
  "value": "在CMake脚本中链接到动态库",
  "id": "在cmake脚本中链接到动态库",
  "level": 2
}, {
  "value": "添加头文件",
  "id": "添加头文件",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "audio-vivid解封装",
        children: "Audio Vivid解封装"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取到Audio Vivid封装的mp4文件后，先调用解封装相关接口，选中音频轨，读取每一帧Audio Vivid，送入解码器中（可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/audiovivid/audiovivid-audiodecoder",
        children: "Audio Vivid解码"
      }), "）。详细的API请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avcodec-api/avcodec-c/avcodec-module/capi-avdemuxer/capi-avdemuxer",
        children: "AVDemuxer模块"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在cmake脚本中链接到动态库",
      children: "在CMake脚本中链接到动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC\nlibnative_media_codecbase.so libnative_media_core.so\nlibnative_media_acodec.so libnative_media_avdemuxer.so libnative_media_avsource.so\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加头文件",
      children: "添加头文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "//解封装头文件\n#include \"multimedia/player_framework/native_avdemuxer.h\"\n#include <string.h>\n\n// 解封装解码传递信息结构体\nstruct AudioSampleInfo {\nstd::string audioCodecMime = \"\";\nint32_t audioSampleFormat = 0;\nint32_t audioSampleRate = 0;\nint32_t audioChannelCount = 0;\nint64_t audioChannelLayout = 0;\nuint8_t audioCodecConfig[100] = {0};\nsize_t audioCodecSize = 0;\n};\n\nAudioSampleInfo  info;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建解封装实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ts code获取fd和size\nlet inputFile = fs.openSync(filepath,fs.OpenMode.READ_ONLY);\nif (inputFile) {\n    let inputFileState = fs.statSync(inputFile.fd);\n    let inputFileSize = inputFileState.size;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//C++ code\nOH_AVSource *source = OH_AVSource_CreateWithFD(inputFd,0,inputFileSize);\nOH_AVDemuxer *demuxer = OH_AVDemuxer_CreateWithSource(source);\nauto sourceFormat = std::shared_ptr<OH_AVFormat>(OH_AVSource_GetSourceFormat(source_), OH_AVFormat_Destroy);\nint32_t trackCount = 0;\nOH_AVFormat_GetIntValue(sourceFormat.get(), OH_MD_KEY_TRACK_COUNT, &trackCount);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选中音频轨。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t trackCount = 0;\nOH_AVFormat_GetIntValue(sourceFormat.get(), OH_MD_KEY_TRACK_COUNT, &trackCount);\nfor (int32_t index = 0; index < trackCount; index++) {\nint trackType = -1;\nauto trackFormat =\n    std::shared_ptr<OH_AVFormat>(OH_AVSource_GetTrackFormat(source_, index), OH_AVFormat_Destroy);\n// 获取轨道类型\nOH_AVFormat_GetIntValue(trackFormat.get(), OH_MD_KEY_TRACK_TYPE, &trackType);\n// 判断当前轨道为音频轨\nif (trackType == MEDIA_TYPE_AUD) {\n    // 选中音频轨\n    OH_AVDemuxer_SelectTrackByID(demuxer, index);\n    // 获取位深\n    OH_AVFormat_GetIntValue(trackFormat.get(), OH_MD_KEY_AUDIO_SAMPLE_FORMAT, &info.audioSampleFormat);\n    // 获取声道数\n    OH_AVFormat_GetIntValue(trackFormat.get(), OH_MD_KEY_AUD_CHANNEL_COUNT, &info.audioChannelCount);\n    // 获取声道布局\n    OH_AVFormat_GetLongValue(trackFormat.get(), OH_MD_KEY_CHANNEL_LAYOUT, &info.audioChannelLayout);\n    // 获取采样率\n    OH_AVFormat_GetIntValue(trackFormat.get(), OH_MD_KEY_AUD_SAMPLE_RATE, &info.audioSampleRate);\n    // 获取额外配置信息\n    uint8_t *addr = nullptr;\n    OH_AVFormat_GetBuffer(trackFormat.get(), OH_MD_KEY_CODEC_CONFIG, &addr, &info.audioCodecSize);\n    memcpy((void *)info.audioCodecConfig, (void *)addr, info.audioCodecSize);\n    // 获取解码器类型\n    char *audioCodecMime;\n    OH_AVFormat_GetStringValue(trackFormat.get(), OH_MD_KEY_CODEC_MIME, const_cast<char const **>(&audioCodecMime));\n    info.audioCodecMime = audioCodecMime;\n    int32_t trackId = index;\n    break;\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "读取每一帧数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVBuffer *buffer;\nint32_t ret = OH_AVDemuxer_ReadSampleBuffer(demuxer, trackId, buffer);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放解封装实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t Release()\n{\n    if (demuxer != nullptr) {\n        OH_AVDemuxer_Destroy(demuxer);\n        demuxer = nullptr;\n    }\n    if (source != nullptr) {\n        OH_AVSource_Destroy(source);\n        source = nullptr;\n    }\n    return AVCODEC_SAMPLE_ERR_OK;\n}\n"
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