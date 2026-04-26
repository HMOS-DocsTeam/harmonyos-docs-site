"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["295305"], {
6510(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avcodec_kit_audio_video_codec_audiovivid_audiovivid_audiorenderer_audiovivid_audiorenderer_md_99d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avcodec-kit-audio-video-codec-audiovivid-audiovivid-audiorenderer-audiovivid-audiorenderer-md-99d.json
var site_docs_avcodec_kit_audio_video_codec_audiovivid_audiovivid_audiorenderer_audiovivid_audiorenderer_md_99d_namespaceObject = JSON.parse('{"id":"avcodec-kit/audio-video-codec/audiovivid/audiovivid-audiorenderer/audiovivid-audiorenderer","title":"Audio Vivid播放","description":"在获取到解码后的Audio Vivid的PCM数据和元数据之后，可以调用OHAudio的相关播放接口，进行Audio Vivid格式音源的渲染播放。详细的API说明请参考OHAudio API参考。","source":"@site/docs/avcodec-kit/audio-video-codec/audiovivid/audiovivid-audiorenderer/audiovivid-audiorenderer.md","sourceDirName":"avcodec-kit/audio-video-codec/audiovivid/audiovivid-audiorenderer","slug":"/avcodec-kit/audio-video-codec/audiovivid/audiovivid-audiorenderer/","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/audiovivid/audiovivid-audiorenderer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Audio Vivid播放","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audiovivid-audiorenderer","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Audio Vivid解码","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/audiovivid/audiovivid-audiodecoder/"},"next":{"title":"HDR Vivid视频播放","permalink":"/harmonyos-docs-site/avcodec-kit/audio-video-codec/hdr-vivid-capability/hdr-vivid-video-player/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avcodec-kit/audio-video-codec/audiovivid/audiovivid-audiorenderer/audiovivid-audiorenderer.md


const frontMatter = {
	title: 'Audio Vivid播放',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audiovivid-audiorenderer',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'Audio Vivid播放';

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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "audio-vivid播放",
        children: "Audio Vivid播放"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在获取到解码后的Audio Vivid的PCM数据和元数据之后，可以调用OHAudio的相关播放接口，进行Audio Vivid格式音源的渲染播放。详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-c/audio-module/capi-ohaudio/capi-ohaudio",
        children: "OHAudio API参考"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在cmake脚本中链接到动态库",
      children: "在CMake脚本中链接到动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(sample PUBLIC libohaudio.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加头文件",
      children: "添加头文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <ohaudio/native_audiorenderer.h>\n#include <ohaudio/native_audiostreambuilder.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过以下几个步骤来实现一个简单的播放功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建构造器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OHAudio提供OH_AudioStreamBuilder接口，遵循构造器设计模式，用于构建音频流。在Audio Vivid播放场景下，需要选择OH_AudioStream_Type为AUDIOSTREAM_TYPE_RENDERER，创建一个渲染播放类型的音频构造器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AudioStreamBuilder* builder;\nOH_AudioStreamBuilder_Create(&builder, AUDIOSTREAM_TYPE_RENDERER);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置音频流参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建音频播放构造器后，可以设置音频流所需要的参数，可以参考以下案例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Audio Vivid音源搭配系统空间音频渲染算法，播放效果和体验最佳。系统会根据输出音频流的工作场景（OH_AudioStream_Usage），选择使用对应的空间音频渲染效果，当前支持的工作场景包括音乐、电影和有声读物。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置音频采样率为48000Hz\nOH_AudioStreamBuilder_SetSamplingRate(builder, 48000);\n// 设置音频声道为10 （假定输入Audio Vivid音源是5.1.2声床 + 2对象格式）\nOH_AudioStreamBuilder_SetChannelCount(builder, 10);\n// 设置音频声道布局为5.1.2 （声道布局只考虑声床，若想使用默认声道布局，可以传入 CH_LAYOUT_UNKNOWN 参数）\nOH_AudioStreamBuilder_SetChannelLayout(builder, CH_LAYOUT_5POINT1POINT2);\n// 设置音频采样格式\nOH_AudioStreamBuilder_SetSampleFormat(builder, AUDIOSTREAM_SAMPLE_S16LE);\n// 设置音频流的编码类型为Audio Vivid编码类型\nOH_AudioStreamBuilder_SetEncodingType(builder, AUDIOSTREAM_ENCODING_TYPE_AUDIOVIVID);\n// 设置输出音频流的工作场景，根据实际工作场景选择音乐、电影、有声读物等类型\nOH_AudioStreamBuilder_SetRendererInfo(builder, AUDIOSTREAM_USAGE_MUSIC);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置音频回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OHAudio使用回调模式进行音频流数据的写入，以及各种音频事件的上报，应用可以按需选择需要监听的音频事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 自定义音频流事件函数\nint32_t MyOnStreamEvent(\n    OH_AudioRenderer* renderer,\n    void* userData,\n    OH_AudioStream_Event event)\n{\n    // 根据event表示的音频流事件信息，更新播放器状态和界面\n    return 0;\n}\n// 自定义音频中断事件函数\nint32_t MyOnInterruptEvent(\n    OH_AudioRenderer* renderer,\n    void* userData,\n    OH_AudioInterrupt_ForceType type,\n    OH_AudioInterrupt_Hint hint)\n{\n    // 根据type和hint表示的音频中断信息，更新播放器状态和界面\n    return 0;\n}\n// 自定义异常回调函数\nint32_t MyOnError(\n    OH_AudioRenderer* renderer,\n    void* userData,\n    OH_AudioStream_Result error)\n{\n    // 根据error表示的音频异常信息，做出相应的处理\n    return 0;\n}\n// 自定义同时写入PCM数据和元数据函数\nint32_t MyOnWriteDataWithMetadata(\n    OH_AudioRenderer* renderer,\n    void* userData,\n    void* audioData,\n    int32_t audioDataSize,\n    void* metadata,\n    int32_t metadataSize)\n{\n    // 将待播放的PCM数据和元数据，分别按audioDataSize和metadataSize写入buffer\n    return 0;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用系统的注册监听接口，将上述定义好的回调函数进行配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为了避免不可预期的行为，在设置音频回调函数时，请确认OH_AudioRenderer_Callbacks的每一个回调都被自定义的回调方法或空指针初始化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于Audio Vivid播放场景，需要另外使用OH_AudioRenderer_WriteDataWithMetadataCallback进行PCM和元数据写入。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 配置回调函数\nOH_AudioRenderer_Callbacks callbacks;\n// Audio Vivid播放时，该回调可以置空，使用元数据回调方式进行数据写入\ncallbacks.OH_AudioRenderer_OnWriteData = nullptr;\n// 对音频流事件进行监听，如果不需要，可以使用 nullptr 赋值\ncallbacks.OH_AudioRenderer_OnStreamEvent = MyOnStreamEvent;\n// 对音频中断事件进行监听，如果不需要，可以使用 nullptr 赋值\ncallbacks.OH_AudioRenderer_OnInterruptEvent = MyOnInterruptEvent;\n// 对音频异常事件进行监听，如果不需要，可以使用 nullptr 赋值\ncallbacks.OH_AudioRenderer_OnError = MyOnError;\n\n//设置输出音频流的回调\nOH_AudioStreamBuilder_SetRendererCallback(builder, callbacks, nullptr);\n\n// 配置回调函数\nOH_AudioRenderer_WriteDataWithMetadataCallback metadataCallback = MyOnWriteDataWithMetadata;\n// 设置同时写入PCM数据和元数据的回调\nOH_AudioStreamBuilder_SetWriteDataWithMetadataCallback(builder, metadataCallback, nullptr);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用配置好的构造器，构造播放音频流。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AudioRenderer* audioRenderer;\nOH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用音频流。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以使用以下接口，实现对音频流的控制，完成开始播放、暂停播放、停止播放、清除缓存等基本操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在不再使用该条音频流时，可以释放播放实例，以便更好地管理内存。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "接口"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AudioRenderer_Start"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "开始播放"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AudioRenderer_Pause"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "暂停播放"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AudioRenderer_Stop"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "停止播放"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AudioRenderer_Flush"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "释放缓存数据"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AudioRenderer_Release"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "释放播放实例"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放构造器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当构造器不再使用时，需要释放相关资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AudioStreamBuilder_Destroy(builder);\n"
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