"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["238911"], {
264145(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_recording_audio_recording_stream_management_audio_recording_stream_management_md_07c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-recording-audio-recording-stream-management-audio-recording-stream-management-md-07c.json
var site_docs_audio_kit_audio_recording_audio_recording_stream_management_audio_recording_stream_management_md_07c_namespaceObject = JSON.parse('{"id":"audio-kit/audio-recording/audio-recording-stream-management/audio-recording-stream-management","title":"查询和监听其他应用录制状态","description":"对于录制音频类的应用，开发者需要关注该应用的音频流的状态以做出相应的操作，比如监听到状态为结束时，及时提示用户录制已结束。","source":"@site/docs/audio-kit/audio-recording/audio-recording-stream-management/audio-recording-stream-management.md","sourceDirName":"audio-kit/audio-recording/audio-recording-stream-management","slug":"/audio-kit/audio-recording/audio-recording-stream-management/","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/audio-recording-stream-management/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"查询和监听其他应用录制状态","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-recording-stream-management","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"管理麦克风静音状态","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/mic-management/"},"next":{"title":"录音并发策略说明","permalink":"/harmonyos-docs-site/audio-kit/audio-recording/audio-recording-concurrency/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-recording/audio-recording-stream-management/audio-recording-stream-management.md


const frontMatter = {
	title: '查询和监听其他应用录制状态',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-recording-stream-management',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '查询和监听其他应用录制状态';

const assets = {

};



const toc = [{
  "value": "读取或监听应用内音频流状态变化",
  "id": "读取或监听应用内音频流状态变化",
  "level": 2
}, {
  "value": "读取或监听所有录制流的变化",
  "id": "读取或监听所有录制流的变化",
  "level": 2
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
        id: "查询和监听其他应用录制状态",
        children: "查询和监听其他应用录制状态"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于录制音频类的应用，开发者需要关注该应用的音频流的状态以做出相应的操作，比如监听到状态为结束时，及时提示用户录制已结束。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下各步骤示例为片段代码，可通过示例代码右下方链接获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioCaptureSampleJS",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "读取或监听应用内音频流状态变化",
      children: "读取或监听应用内音频流状态变化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-recording/using-audiocapturer-for-recording",
        children: "使用AudioCapturer开发音频录制功能(ArkTs)"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-f/arkts-apis-audio-f#audiocreateaudiocapturer8",
        children: "audio.createAudioCapturer"
      }), "，先完成AudioCapturer的创建，再通过以下两种方法查看音频流状态的变化。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["方法1：直接查看AudioCapturer的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiocapturer/arkts-apis-audio-audiocapturer#%E5%B1%9E%E6%80%A7",
            children: "属性"
          }), "state："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let audioCapturerState: audio.AudioState = audioCapturer.state;\nconsole.info(`Current state is: ${audioCapturerState }`)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "方法2：注册stateChange监听AudioCapturer的状态变化："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "audioCapturer.on('stateChange', (capturerState: audio.AudioState) => {\n  console.info(`State change to: ${capturerState}`)\n  // ...\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取state后可对照", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#audiostate8",
        children: "AudioState"
      }), "来进行相应的操作，比如显示录制结束的提示等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "读取或监听所有录制流的变化",
      children: "读取或监听所有录制流的变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果部分应用需要查询获取所有音频流的变化信息，可以通过AudioStreamManager读取或监听所有音频流的变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下为音频流管理调用关系图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(633539)/* ["default"] */.A) + "",
        width: "1872",
        height: "704"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在进行应用开发的过程中，开发者需要先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiomanager/arkts-apis-audio-audiomanager#getstreammanager9",
        children: "getStreamManager"
      }), "创建AudioStreamManager实例，进而通过该实例管理音频流。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细API含义可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiostreammanager/arkts-apis-audio-audiostreammanager",
        children: "AudioStreamManager"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建AudioStreamManager实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { audio } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet audioManager = audio.getAudioManager();\nlet audioStreamManager = audioManager.getStreamManager();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiostreammanager/arkts-apis-audio-audiostreammanager#onaudiocapturerchange9",
            children: "on('audioCapturerChange')"
          }), "监听音频录制流更改事件。 如果音频流监听应用需要在音频录制流状态变化、设备变化时获取通知，可以订阅该事件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "audioStreamManager.on('audioCapturerChange', (audioCapturerChangeInfoArray: audio.AudioCapturerChangeInfoArray) =>  {\n  // ...\n  for (let i = 0; i < audioCapturerChangeInfoArray.length; i++) {\n    console.info(`## CapChange on is called for element ${i} ##`);\n    console.info(`StreamId for ${i} is: ${audioCapturerChangeInfoArray[i].streamId}`);\n    console.info(`Source for ${i} is: ${audioCapturerChangeInfoArray[i].capturerInfo.source}`);\n    console.info(`Flag  ${i} is: ${audioCapturerChangeInfoArray[i].capturerInfo.capturerFlags}`);\n\n    // ...\n\n    let devDescriptor: audio.AudioDeviceDescriptors = audioCapturerChangeInfoArray[i].deviceDescriptors;\n    for (let j = 0; j < audioCapturerChangeInfoArray[i].deviceDescriptors.length; j++) {\n      console.info(`Id: ${i} : ${audioCapturerChangeInfoArray[i].deviceDescriptors[j].id}`);\n      console.info(`Type: ${i} : ${audioCapturerChangeInfoArray[i].deviceDescriptors[j].deviceType}`);\n      console.info(`Role: ${i} : ${audioCapturerChangeInfoArray[i].deviceDescriptors[j].deviceRole}`);\n      console.info(`Name: ${i} : ${audioCapturerChangeInfoArray[i].deviceDescriptors[j].name}`);\n      console.info(`Address: ${i} : ${audioCapturerChangeInfoArray[i].deviceDescriptors[j].address}`);\n      console.info(`SampleRates: ${i} : ${audioCapturerChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]}`);\n      console.info(`ChannelCounts ${i} : ${audioCapturerChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]}`);\n      console.info(`ChannelMask: ${i} : ${audioCapturerChangeInfoArray[i].deviceDescriptors[j].channelMasks}`);\n    }\n  }\n  // ...\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiostreammanager/arkts-apis-audio-audiostreammanager#offaudiocapturerchange9",
            children: "off('audioCapturerChange')"
          }), "取消监听音频录制流变化。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "audioStreamManager.off('audioCapturerChange');\nconsole.info('CapturerChange Off is called');\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["（可选）使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiostreammanager/arkts-apis-audio-audiostreammanager#getcurrentaudiocapturerinfoarray9",
            children: "getCurrentAudioCapturerInfoArray"
          }), "获取当前音频录制流的信息。该接口可获取音频录制流唯一ID、音频采集器信息以及音频录制设备信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(114850)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对所有音频流状态进行监听的应用需要", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          }), "ohos.permission.USE_BLUETOOTH，否则无法获得实际的设备名称和设备地址信息，查询到的设备名称和设备地址（蓝牙设备的相关属性）将为空字符串。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，通常在音频录制启动前调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiostreammanager/arkts-apis-audio-audiostreammanager#isrecordingavailable20",
            children: "isRecordingAvailable"
          }), "，判断当前传入的音频采集器信息中音源类型的录制是否可以启动成功。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function getCurrentAudioCapturerInfoArray(updateCallback?:\n  (msg: string, isError: boolean) => void): Promise<void>{\n  // ...\n\n  await audioStreamManager.getCurrentAudioCapturerInfoArray()\n    .then((audioCapturerChangeInfoArray: audio.AudioCapturerChangeInfoArray) => {\n      console.info('getCurrentAudioCapturerInfoArray Get Promise Called');\n      let detailInfo = 'getCurrentAudioCapturerInfoArray Get Promise Called\\n';\n      if (audioCapturerChangeInfoArray != null) {\n        for (let i = 0; i < audioCapturerChangeInfoArray.length; i++) {\n          console.info(`StreamId for ${i} is: ${audioCapturerChangeInfoArray[i].streamId}`);\n          console.info(`Source for ${i} is: ${audioCapturerChangeInfoArray[i].capturerInfo.source}`);\n          console.info(`Flag  ${i} is: ${audioCapturerChangeInfoArray[i].capturerInfo.capturerFlags}`);\n\n          detailInfo += `StreamId for ${i} is: ${audioCapturerChangeInfoArray[i].streamId}\\n`;\n          detailInfo += `Source for ${i} is: ${audioCapturerChangeInfoArray[i].capturerInfo.source}\\n`;\n          detailInfo += `Flag ${i} is: ${audioCapturerChangeInfoArray[i].capturerInfo.capturerFlags}\\n`;\n\n          for (let j = 0; j < audioCapturerChangeInfoArray[i].deviceDescriptors.length; j++) {\n            console.info(`Id: ${i} : ${audioCapturerChangeInfoArray[i].deviceDescriptors[j].id}`);\n            console.info(`Type: ${i} : ${audioCapturerChangeInfoArray[i].deviceDescriptors[j].deviceType}`);\n            console.info(`Role: ${i} : ${audioCapturerChangeInfoArray[i].deviceDescriptors[j].deviceRole}`);\n            console.info(`Name: ${i} : ${audioCapturerChangeInfoArray[i].deviceDescriptors[j].name}`);\n            console.info(`Address: ${i} : ${audioCapturerChangeInfoArray[i].deviceDescriptors[j].address}`);\n            console.info(`SampleRates: ${i} : ${audioCapturerChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]}`);\n            console.info(`ChannelCounts ${i} : ${audioCapturerChangeInfoArray[i]\n              .deviceDescriptors[j].channelCounts[0]}`);\n            console.info(`ChannelMask: ${i} : ${audioCapturerChangeInfoArray[i].deviceDescriptors[j].channelMasks}`);\n          }\n        }\n      }\n      if (updateCallback) {\n        updateCallback(detailInfo, false);\n      }\n    }).catch((err: BusinessError) => {\n      console.error(`Invoke getCurrentAudioCapturerInfoArray failed, code is ${err.code}, message is ${err.message}`);\n      const errorMsg = `Invoke getCurrentAudioCapturerInfoArray failed, code is ${err.code}, message is ${err.message}`;\n      if (updateCallback) {\n        updateCallback(errorMsg, true);\n      }\n    });\n  // 获取后取消监听\n  cancelListenAudioStreamManager();\n}\n"
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
114850(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
633539(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798882-d0b98c6c9bd1fa27cd707491b20c2d0f.png");

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