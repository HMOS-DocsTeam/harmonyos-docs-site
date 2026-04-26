"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["748061"], {
367160(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_device_audio_output_device_switcher_audio_output_device_switcher_md_d52_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-device-audio-output-device-switcher-audio-output-device-switcher-md-d52.json
var site_docs_audio_kit_audio_device_audio_output_device_switcher_audio_output_device_switcher_md_d52_namespaceObject = JSON.parse('{"id":"audio-kit/audio-device/audio-output-device-switcher/audio-output-device-switcher","title":"实现音频输出设备路由切换","description":"当应用进行音频输出时，系统会根据音频流类型选择对应的输出设备（STREAM\\\\USAGE\\\\MUSIC：扬声器发声；STREAM\\\\USAGE\\\\VOICE\\\\_COMMUNICATION：听筒发声）。如果系统提供的默认输出设备不满足应用需求，应用可通过AVCastPicker或setDefaultOutputDevice实现音频输出设备路由切换。","source":"@site/docs/audio-kit/audio-device/audio-output-device-switcher/audio-output-device-switcher.md","sourceDirName":"audio-kit/audio-device/audio-output-device-switcher","slug":"/audio-kit/audio-device/audio-output-device-switcher/","permalink":"/harmonyos-docs-site/audio-kit/audio-device/audio-output-device-switcher/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"实现音频输出设备路由切换","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-output-device-switcher","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"实现音频输入设备路由切换","permalink":"/harmonyos-docs-site/audio-kit/audio-device/audio-input-device-switcher/"},"next":{"title":"响应输出设备变更时合理暂停","permalink":"/harmonyos-docs-site/audio-kit/audio-device/audio-output-device-change/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-device/audio-output-device-switcher/audio-output-device-switcher.md


const frontMatter = {
	title: '实现音频输出设备路由切换',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-output-device-switcher',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '实现音频输出设备路由切换';

const assets = {

};



const toc = [{
  "value": "媒体类应用实现输出设备路由切换",
  "id": "媒体类应用实现输出设备路由切换",
  "level": 2
}, {
  "value": "通话类应用实现输出设备路由切换",
  "id": "通话类应用实现输出设备路由切换",
  "level": 2
}, {
  "value": "外接设备路由切换",
  "id": "外接设备路由切换",
  "level": 3
}, {
  "value": "内置听筒和扬声器路由切换",
  "id": "内置听筒和扬声器路由切换",
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
        id: "实现音频输出设备路由切换",
        children: "实现音频输出设备路由切换"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用进行音频输出时，系统会根据音频流类型选择对应的输出设备（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#streamusage",
        children: "STREAM_USAGE_MUSIC"
      }), "：扬声器发声；", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#streamusage",
        children: "STREAM_USAGE_VOICE_COMMUNICATION"
      }), "：听筒发声）。如果系统提供的默认输出设备不满足应用需求，应用可通过AVCastPicker或setDefaultOutputDevice实现音频输出设备路由切换。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下各步骤示例为片段代码，可通过示例代码右下方链接获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioRoutingManagerSampleJS",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "媒体类应用实现输出设备路由切换",
      children: "媒体类应用实现输出设备路由切换"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-comp/ohos-multimedia-avcastpicker/ohos-multimedia-avcastpicker#avcastpicker",
        children: "AVCastPicker"
      }), "投播组件进行媒体类应用输出设备路由切换。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通话类应用实现输出设备路由切换",
      children: "通话类应用实现输出设备路由切换"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "外接设备路由切换",
      children: "外接设备路由切换"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avsession-kit/distributed-avsession/using-switch-call-devices",
        children: "使用通话设备切换组件"
      }), "进行通话类应用外接输出设备路由切换。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "内置听筒和扬声器路由切换",
      children: "内置听筒和扬声器路由切换"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果未连接外设，语音通话场景系统默认听筒发声，其他场景系统默认扬声器发声；如果连接了外设，系统默认通过外接设备发声。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用setDefaultOutputDevice设置音频输出设备后，如需取消，可将参数设为audio.DeviceType.DEFAULT，将音频输出设备选择权交还给系统。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 12开始，应用可使用AudioRenderer的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#setdefaultoutputdevice12",
            children: "setDefaultOutputDevice"
          }), "设置听筒和扬声器路由切换，调用前需要先获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-f/arkts-apis-audio-f#audiocreateaudiorenderer8",
            children: "AudioRenderer"
          }), "实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(266198)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "由于AudioRenderer是流级别，调用本接口设置的默认音频输出设备仅对当前流生效。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["本接口优先级低于AudioSessionManager的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#setdefaultoutputdevice20",
              children: "setDefaultOutputDevice"
            }), "。如果使用AudioSessionManager的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#setdefaultoutputdevice20",
              children: "setDefaultOutputDevice"
            }), "设置了默认音频输出设备，本接口的设置将不会生效。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { audio } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n    // 设置默认输出设备为本机扬声器。\n    audioRenderer.setDefaultOutputDevice(audio.DeviceType.SPEAKER).then(() => {\n      console.info('Succeeded in setting default output device.');\n      // ...\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to set default output device. Code: ${err.code}, message: ${err.message}`);\n      // ...\n    });\n    // ...\n    // 设置默认输出设备为系统默认输出设备,即取消应用设置的默认设备,交由系统选择设备。\n    audioRenderer.setDefaultOutputDevice(audio.DeviceType.DEFAULT).then(() => {\n      console.info('Succeeded in setting default output device.');\n      // ...\n    }).catch((err: BusinessError) => {\n      console.error(`Failed to set default output device. Code: ${err.code}, message: ${err.message}`);\n      // ...\n    });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，应用可使用AudioSessionManager的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#setdefaultoutputdevice20",
            children: "setDefaultOutputDevice"
          }), "设置听筒和扬声器路由切换。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(218424)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["由于AudioSessionManager是应用级设置，调用本接口设置默认音频输出设备，会对当前应用所有适用范围内的音频流生效，且会覆盖AudioRenderer的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#setdefaultoutputdevice12",
            children: "setDefaultOutputDevice"
          }), "接口设置的默认音频输出设备信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { audio } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n\nlet audioManager = audio.getAudioManager();\n// 创建音频会话管理器。\nlet audioSessionManager: audio.AudioSessionManager = audioManager.getSessionManager();\n// ...\n\n  // 设置音频并发模式。\n  let strategy: audio.AudioSessionStrategy = {\n    concurrencyMode: audio.AudioConcurrencyMode.CONCURRENCY_MIX_WITH_OTHERS\n  };\n\n  // 激活音频会话。\n  audioSessionManager.activateAudioSession(strategy).then(() => {\n    console.info('Succeeded in activating audio session.');\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to activate audio session. Code: ${err.code}, message: ${err.message}`);\n    // ...\n  });\n\n  // ...\n  // 设置默认输出设备为听筒。\n  audioSessionManager.setDefaultOutputDevice(audio.DeviceType.EARPIECE).then(() => {\n    console.info('Succeeded in setting default output device.');\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to set default output device. Code: ${err.code}, message: ${err.message}`);\n    // ...\n  });\n  // ...\n\n  // 设置默认输出设备为默认设备,即取消应用设置的默认设备,交由系统选择设备。\n  audioSessionManager.setDefaultOutputDevice(audio.DeviceType.DEFAULT).then(() => {\n    console.info('Succeeded in setting default output device.');\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to set default output device. Code: ${err.code}, message: ${err.message}`);\n  });\n"
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
266198(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
218424(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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