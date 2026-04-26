"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["747030"], {
948441(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avsession_kit_local_avsession_using_ohavsession_developer_using_ohavsession_developer_md_a73_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avsession-kit-local-avsession-using-ohavsession-developer-using-ohavsession-developer-md-a73.json
var site_docs_avsession_kit_local_avsession_using_ohavsession_developer_using_ohavsession_developer_md_a73_namespaceObject = JSON.parse('{"id":"avsession-kit/local-avsession/using-ohavsession-developer/using-ohavsession-developer","title":"媒体会话提供方(C/C++)","description":"OHAVSession系统提供的通过使用C API实现媒体会话提供方，从而在媒体会话控制方（例如播控中心）中展示媒体相关信息，及响应媒体会话控制方下发的播控命令。","source":"@site/docs/avsession-kit/local-avsession/using-ohavsession-developer/using-ohavsession-developer.md","sourceDirName":"avsession-kit/local-avsession/using-ohavsession-developer","slug":"/avsession-kit/local-avsession/using-ohavsession-developer/","permalink":"/harmonyos-docs-site/avsession-kit/local-avsession/using-ohavsession-developer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"媒体会话提供方(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ohavsession-developer","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"媒体会话提供方","permalink":"/harmonyos-docs-site/avsession-kit/local-avsession/using-avsession-developer/"},"next":{"title":"应用接入AVSession场景介绍","permalink":"/harmonyos-docs-site/avsession-kit/local-avsession/avsession-access-scene/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avsession-kit/local-avsession/using-ohavsession-developer/using-ohavsession-developer.md


const frontMatter = {
	title: '媒体会话提供方(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-ohavsession-developer',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '媒体会话提供方(C/C++)';

const assets = {

};



const toc = [{
  "value": "使用入门",
  "id": "使用入门",
  "level": 2
}, {
  "value": "在 CMake 脚本中链接动态库",
  "id": "在-cmake-脚本中链接动态库",
  "level": 3
}, {
  "value": "添加头文件",
  "id": "添加头文件",
  "level": 3
}, {
  "value": "开发步骤及注意事项",
  "id": "开发步骤及注意事项",
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
        id: "媒体会话提供方cc",
        children: "媒体会话提供方(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OHAVSession系统提供的通过使用C API实现媒体会话提供方，从而在媒体会话控制方（例如播控中心）中展示媒体相关信息，及响应媒体会话控制方下发的播控命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用入门",
      children: "使用入门"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-c/avsession-headerfile/capi-native-avsession-h/capi-native-avsession-h",
        children: "native_avsession.h"
      }), "实现媒体会话，需要添加对应的头文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libohavsession.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加头文件",
      children: "添加头文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <multimedia/av_session/native_avmetadata.h>\n#include <multimedia/av_session/native_avsession.h>\n#include <multimedia/av_session/native_avsession_errors.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过以下几个步骤在NDK接入本地会话。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建会话并激活媒体，需要传入会话类型AVSession_Type，自定义的TAG，以及应用的包名、ability名字。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVSession* avsession;\nOH_AVSession_Create(SESSION_TYPE_AUDIO, \"testsession\", \"com.example.application\", \"MainAbility\", &avsession);\nOH_AVSession_Activate(avsession);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AVSession_Type包含如下四种类型："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SESSION_TYPE_AUDIO"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SESSION_TYPE_VIDEO"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SESSION_TYPE_VOICE_CALL"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SESSION_TYPE_VIDEO_CALL"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用内播放对应的媒体资源时，同步设置媒体元数据信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "要设置元数据，需使用OH_AVMetadataBuilder构造具体的数据，生成一个OH_AVMetadata。生成OH_AVMetadata后，使用OH_AVMetadata的各个功能接口进行资源的设置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用OH_AVMetadataBuilder构造元数据示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建OH_AVMetadataBuilder构造器。\nOH_AVMetadataBuilder* builder;\nOH_AVMetadataBuilder_Create(&builder);\n    \nOH_AVMetadata* ohMetadata;\nOH_AVMetadataBuilder_SetTitle(builder, \"Anonymous title\");\nOH_AVMetadataBuilder_SetArtist(builder, \"Anonymous artist\");\nOH_AVMetadataBuilder_SetAuthor(builder, \"Anonymous author\");\nOH_AVMetadataBuilder_SetAlbum(builder, \"Anonymous album\");\nOH_AVMetadataBuilder_SetWriter(builder, \"Anonymous writer\");\nOH_AVMetadataBuilder_SetComposer(builder, \"Anonymous composer\");\nOH_AVMetadataBuilder_SetDuration(builder, DURATION_TIME); // DURATION_TIME = 3600\n// MediaImageUri只支持网络地址。\nOH_AVMetadataBuilder_SetMediaImageUri(builder, \"https://xxx.xxx.xx\");\nOH_AVMetadataBuilder_SetSubtitle(builder, \"Anonymous subtitle\");\nOH_AVMetadataBuilder_SetDescription(builder, \"For somebody\");\n// Lyric只支持媒体歌词内容（应用需将歌词内容拼接为一个字符串传入）。\nOH_AVMetadataBuilder_SetLyric(builder, \"balabala\");\nOH_AVMetadataBuilder_SetAssetId(builder, \"000\");\nOH_AVMetadataBuilder_SetSkipIntervals(builder, SECONDS_30);\nOH_AVMetadataBuilder_SetDisplayTags(builder,  AVSESSION_DISPLAYTAG_AUDIO_VIVID);\n\n/**\n * generate an AVMetadata 构造AVMetadata对象\n */\nOH_AVMetadataBuilder_GenerateAVMetadata(builder, &ohMetadata);\n    \n/**\n * set AVMetadata 设置AVMetadata对象\n */\nOH_AVSession_SetAVMetadata(avsession, ohMetadata);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在不使用AVMetadata之后，开发者应该执行OH_AVMetadataBuilder_Destroy接口来销毁元数据，且不要继续使用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVMetadata_Destroy(ohMetadata);\nOH_AVMetadataBuilder_Destroy(builder);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "跟随媒体播放状态的变化，及时更新媒体播放状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "媒体播放状态，包含状态值、播放位置、播放速度、收藏状态等，可以按需使用对应的接口进行设置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AVSession_ErrCode ret = AV_SESSION_ERR_SUCCESS;\n    \n// 设置播放状态，其中state范围应为[0,11]。\nAVSession_PlaybackState state = PLAYBACK_STATE_PREPARING;\nret = OH_AVSession_SetPlaybackState(avsession, state);\n// ...\n    \n// 设置播放位置。\nAVSession_PlaybackPosition* playbackPosition = new AVSession_PlaybackPosition;\nplaybackPosition->elapsedTime = ELAPSED_TIME; // ELAPSED_TIME = 1000\nplaybackPosition->updateTime = UPDATE_TIME; // UPDATE_TIME = 16111150\nret = OH_AVSession_SetPlaybackPosition(avsession, playbackPosition);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册播控命令事件监听，便于响应用户通过媒体会话控制方，例如播控中心下发的播控命令。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(764098)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "媒体会话提供方在注册相关固定播控命令事件监听时，监听的事件会在媒体会话控制方的getValidCommands()方法中体现，即媒体会话控制方认为该方法有效，因此在需要时会触发相应的事件。为了保证媒体会话控制方下发的播控命令可以被正常执行，媒体会话提供方请勿进行无逻辑的空实现监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用注册接口后，在业务结束时需要调用取消注册接口，避免出现异常。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Session侧目前支持的播控命令包括："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "播放"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "暂停"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "停止"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "上一首"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "下一首"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "快退"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "快进"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "设置进度"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "设置收藏"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置播放/暂停/停止/上一首/下一首回调。\n// CONTROL_CMD_PLAY = 0; 播放。\n// CONTROL_CMD_PAUSE = 1; 暂停。\n// CONTROL_CMD_STOP = 2;  停止。\n// CONTROL_CMD_PLAY_NEXT = 3; 下一首。\n// CONTROL_CMD_PLAY_PREVIOUS = 4; 上一首。\nAVSession_ControlCommand command = CONTROL_CMD_PLAY;\nOH_AVSessionCallback_OnCommand commandCallback = [](OH_AVSession* session, AVSession_ControlCommand command,\n    void* userData) -> AVSessionCallback_Result {\n    return AVSESSION_CALLBACK_RESULT_SUCCESS;\n};\nint userData = 0;\nOH_AVSession_RegisterCommandCallback(avsession, command, commandCallback, (void *)(&userData));\n    \n// 设置快进回调。\nOH_AVSessionCallback_OnFastForward fastForwardCallback = [](OH_AVSession* session, uint32_t seekTime,\n    void* userData) -> AVSessionCallback_Result {\n    return AVSESSION_CALLBACK_RESULT_SUCCESS;\n};\nOH_AVSession_RegisterForwardCallback(avsession, fastForwardCallback, (void *)(&userData));\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "相关回调接口如下："
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
                children: "OH_AVSession_RegisterCommandCallback(OH_AVSession* avsession, AVSession_ControlCommand command, OH_AVSessionCallback_OnCommand callback, void* userData)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "注册通用播控的回调，支持：播放、暂停、停止、上一首、下一首回调。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AVSession_RegisterForwardCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnFastForward callback, void* userData)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "注册快进的回调。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AVSession_RegisterRewindCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnRewind callback, void* userData)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "注册快退的回调。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AVSession_RegisterSeekCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnSeek callback, void* userData)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "注册跳转的回调。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OH_AVSession_RegisterToggleFavoriteCallback(OH_AVSession* avsession, OH_AVSessionCallback_OnToggleFavorite callback, void* userData)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "注册收藏的回调。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音视频应用在退出，并且不需要继续播放时，及时取消监听以及销毁媒体会话释放资源。示例代码如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_AVSession_Destroy(avsession);\n"
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
764098(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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