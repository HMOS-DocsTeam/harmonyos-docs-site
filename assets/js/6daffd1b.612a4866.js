"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["471484"], {
936321(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_device_audio_output_device_change_audio_output_device_change_md_6da_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-device-audio-output-device-change-audio-output-device-change-md-6da.json
var site_docs_audio_kit_audio_device_audio_output_device_change_audio_output_device_change_md_6da_namespaceObject = JSON.parse('{"id":"audio-kit/audio-device/audio-output-device-change/audio-output-device-change","title":"响应输出设备变更时合理暂停","description":"开发者可以了解音频流输出设备变更信息，并完成相应适配，比如：应用在播放音乐时发现输出设备下线，为避免打扰用户，应该立即暂停音乐。","source":"@site/docs/audio-kit/audio-device/audio-output-device-change/audio-output-device-change.md","sourceDirName":"audio-kit/audio-device/audio-output-device-change","slug":"/audio-kit/audio-device/audio-output-device-change/","permalink":"/harmonyos-docs-site/audio-kit/audio-device/audio-output-device-change/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"响应输出设备变更时合理暂停","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-output-device-change","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"实现音频输出设备路由切换","permalink":"/harmonyos-docs-site/audio-kit/audio-device/audio-output-device-switcher/"},"next":{"title":"音频通话开发概述","permalink":"/harmonyos-docs-site/audio-kit/audio-call/audio-call-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-device/audio-output-device-change/audio-output-device-change.md


const frontMatter = {
	title: '响应输出设备变更时合理暂停',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-output-device-change',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '响应输出设备变更时合理暂停';

const assets = {

};



const toc = [{
  "value": "音频流输出设备信息",
  "id": "音频流输出设备信息",
  "level": 2
}, {
  "value": "音频流输出设备变更原因",
  "id": "音频流输出设备变更原因",
  "level": 2
}, {
  "value": "参考示例",
  "id": "参考示例",
  "level": 2
}, {
  "value": "AudioRenderer示例",
  "id": "audiorenderer示例",
  "level": 3
}, {
  "value": "AudioSessionManager示例",
  "id": "audiosessionmanager示例",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "响应输出设备变更时合理暂停",
        children: "响应输出设备变更时合理暂停"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以了解音频流输出设备变更信息，并完成相应适配，比如：应用在播放音乐时发现输出设备下线，为避免打扰用户，应该立即暂停音乐。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可使用AudioRenderer的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#onoutputdevicechangewithinfo11",
        children: "on('outputDeviceChangeWithInfo')"
      }), "或AudioSessionManager的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#oncurrentoutputdevicechanged20",
        children: "on('currentOutputDeviceChanged')"
      }), "，用于监听音频流输出设备变化及原因。当系统出现音频输出设备的上下线、用户强选、设备抢占或设备选择策略变更等情况，导致音频流输出设备变更时，系统将通过该接口通知应用当前音频流设备变更信息，包含当前音频流输出设备信息和设备变更原因。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "音频流输出设备信息",
      children: "音频流输出设备信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在AudioRenderer的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#onoutputdevicechangewithinfo11",
        children: "on('outputDeviceChangeWithInfo')"
      }), "或AudioSessionManager的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#oncurrentoutputdevicechanged20",
        children: "on('currentOutputDeviceChanged')"
      }), "返回的音频流设备变更信息中，包含当前音频流输出设备信息，以数组形式发送，一般该列表仅包含一个设备信息，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-t/arkts-apis-audio-t#audiodevicedescriptors",
        children: "AudioDeviceDescriptors"
      }), "（设备信息列表）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "音频流输出设备变更原因",
      children: "音频流输出设备变更原因"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(512111)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当发生下述四种情况（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#audiostreamdevicechangereason11",
        children: "AudioStreamDeviceChangeReason"
      }), "）时，系统将向应用发送设备变更回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "REASON_NEW_DEVICE_AVAILABLE"
            })
          }), "：新设备可用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "触发场景："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "普通蓝牙设备（耳机、眼镜、音箱、车机等）连接、支持佩戴检测的蓝牙设备（耳机、眼镜等）佩戴、有线设备（3.5mm耳机、Type-C耳机、USB耳机、USB音箱等）插入、分布式设备上线等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "REASON_OLD_DEVICE_UNAVAILABLE"
            })
          }), "：旧设备不可用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当报告此原因时，应用程序应考虑暂停音频播放。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "触发场景："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "普通蓝牙设备（耳机、眼镜、音箱、车机等）断开、支持佩戴检测的蓝牙耳机双耳摘下、支持佩戴检测的蓝牙眼镜摘下、有线设备（3.5mm耳机、Type-C耳机、USB耳机、USB音箱等）拔出、分布式设备下线等。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["针对此场景，常用业务场景的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "处理建议"
            })
          }), "如下："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "游戏场景：不暂停"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "听书场景：暂停"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "音乐场景：暂停"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "视频场景：暂停"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "REASON_OVERRODE"
            })
          }), "：用户强制选择设备。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "触发场景："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户从界面选择切换音频流输出设备、从外设选择接听蜂窝或VoIP来电。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "REASON_UNKNOWN"
            })
          }), "：未知原因。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参考示例",
      children: "参考示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下各步骤示例为片段代码，可通过示例代码右下方链接获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioRoutingManagerSampleJS",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "audiorenderer示例",
      children: "AudioRenderer示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nlet audioRenderer: audio.AudioRenderer | undefined = undefined;\nlet audioStreamInfo: audio.AudioStreamInfo = {\n  samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // 采样率。\n  channels: audio.AudioChannel.CHANNEL_2, // 通道。\n  sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // 采样格式。\n  encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // 编码格式。\n};\nlet audioRendererInfo: audio.AudioRendererInfo = {\n  usage: audio.StreamUsage.STREAM_USAGE_MUSIC, // 音频流使用类型:音乐。根据业务场景配置,参考StreamUsage。\n  rendererFlags: 0 // 音频渲染器标志。\n};\nlet audioRendererOptions: audio.AudioRendererOptions = {\n  streamInfo: audioStreamInfo,\n  rendererInfo: audioRendererInfo\n};\n// ...\n\n  // 创建AudioRenderer实例。\n  audio.createAudioRenderer(audioRendererOptions).then((data) => {\n    audioRenderer = data;\n    console.info('AudioFrameworkRenderLog: AudioRenderer Created : Success : Stream Type: SUCCESS');\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`AudioFrameworkRenderLog: AudioRenderer Created : ERROR : ${err}`);\n    // ...\n  });\n\n  if (audioRenderer) {\n    // 订阅监听音频流输出设备变化及原因。\n    (audioRenderer as audio.AudioRenderer).on('outputDeviceChangeWithInfo', async (deviceChangeInfo: audio\n    .AudioStreamDeviceChangeInfo) => {\n      switch (deviceChangeInfo.changeReason) {\n        case audio.AudioStreamDeviceChangeReason.REASON_OLD_DEVICE_UNAVAILABLE:\n          // 响应设备不可用事件,如果应用处于播放状态,应暂停播放,更新UX界面。\n          // await audioRenderer.pause();\n          break;\n        case audio.AudioStreamDeviceChangeReason.REASON_NEW_DEVICE_AVAILABLE:\n          // 应用根据业务情况响应设备可用事件。\n          break;\n        case audio.AudioStreamDeviceChangeReason.REASON_OVERRODE:\n          // 应用根据业务情况响应设备强选事件。\n          break;\n        case audio.AudioStreamDeviceChangeReason.REASON_UNKNOWN:\n          // 应用根据业务情况响应未知原因事件。\n          break;\n      }\n    });\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "audiosessionmanager示例",
      children: "AudioSessionManager示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet audioRenderer: audio.AudioRenderer | undefined = undefined;\nlet audioStreamInfo: audio.AudioStreamInfo = {\n  samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // 采样率。\n  channels: audio.AudioChannel.CHANNEL_2, // 通道。\n  sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // 采样格式。\n  encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // 编码格式。\n};\nlet audioRendererInfo: audio.AudioRendererInfo = {\n  usage: audio.StreamUsage.STREAM_USAGE_MUSIC, // 音频流使用类型：音乐。根据业务场景配置，参考StreamUsage。\n  rendererFlags: 0 // 音频渲染器标志。\n};\nlet audioRendererOptions: audio.AudioRendererOptions = {\n  streamInfo: audioStreamInfo,\n  rendererInfo: audioRendererInfo\n};\n\n// 创建AudioRenderer实例。\naudio.createAudioRenderer(audioRendererOptions).then((data) => {\n  audioRenderer = data;\n  console.info('AudioFrameworkRenderLog: AudioRenderer Created : Success : Stream Type: SUCCESS');\n}).catch((err: BusinessError) => {\n  console.error(`AudioFrameworkRenderLog: AudioRenderer Created : ERROR : ${err}`);\n});\n\nif (audioRenderer) {\n  try {\n    let sessionManager = audio.getAudioManager().getSessionManager();\n    sessionManager.activateAudioSession({ concurrencyMode: audio.AudioConcurrencyMode.CONCURRENCY_MIX_WITH_OTHERS });\n    // 订阅监听音频流输出设备变化及原因。\n    sessionManager.on('currentOutputDeviceChanged', async (deviceChangeInfo: audio.CurrentOutputDeviceChangedEvent) => {\n      switch (deviceChangeInfo.changeReason) {\n        case audio.AudioStreamDeviceChangeReason.REASON_OLD_DEVICE_UNAVAILABLE:\n          // 响应设备不可用事件，如果应用处于播放状态，应暂停播放，更新UX界面。\n          // await audioRenderer.pause();\n          console.info('REASON_OLD_DEVICE_UNAVAILABLE, pause audio is recommended');\n          break;\n        case audio.AudioStreamDeviceChangeReason.REASON_NEW_DEVICE_AVAILABLE:\n          // 应用根据业务情况响应设备可用事件。\n          break;\n        case audio.AudioStreamDeviceChangeReason.REASON_OVERRODE:\n          // 应用根据业务情况响应设备强选事件。\n          break;\n        case audio.AudioStreamDeviceChangeReason.REASON_UNKNOWN:\n          // 应用根据业务情况响应未知原因事件。\n          break;\n      }\n    });\n  } catch (err) {\n    console.error(`on sessionManager#currentOutputDeviceChanged fail: ${err}`);\n  }\n}\n"
      })
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
512111(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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