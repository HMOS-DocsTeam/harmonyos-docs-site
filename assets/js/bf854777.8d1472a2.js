"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["756988"], {
325284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_device_audio_input_device_switcher_audio_input_device_switcher_md_bf8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-device-audio-input-device-switcher-audio-input-device-switcher-md-bf8.json
var site_docs_audio_kit_audio_device_audio_input_device_switcher_audio_input_device_switcher_md_bf8_namespaceObject = JSON.parse('{"id":"audio-kit/audio-device/audio-input-device-switcher/audio-input-device-switcher","title":"实现音频输入设备路由切换","description":"从API version 21开始，支持音频输入设备路由切换。","source":"@site/docs/audio-kit/audio-device/audio-input-device-switcher/audio-input-device-switcher.md","sourceDirName":"audio-kit/audio-device/audio-input-device-switcher","slug":"/audio-kit/audio-device/audio-input-device-switcher/","permalink":"/harmonyos-docs-site/audio-kit/audio-device/audio-input-device-switcher/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"实现音频输入设备路由切换","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-input-device-switcher","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"查询和监听音频输出设备","permalink":"/harmonyos-docs-site/audio-kit/audio-device/audio-output-device-management/"},"next":{"title":"实现音频输出设备路由切换","permalink":"/harmonyos-docs-site/audio-kit/audio-device/audio-output-device-switcher/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-device/audio-input-device-switcher/audio-input-device-switcher.md


const frontMatter = {
	title: '实现音频输入设备路由切换',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-input-device-switcher',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '实现音频输入设备路由切换';

const assets = {

};



const toc = [{
  "value": "选择使用蓝牙或者星闪设备进行录音",
  "id": "选择使用蓝牙或者星闪设备进行录音",
  "level": 2
}, {
  "value": "选择任意设备进行录音",
  "id": "选择任意设备进行录音",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "实现音频输入设备路由切换",
        children: "实现音频输入设备路由切换"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 21开始，支持音频输入设备路由切换。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用进行音频输入时，系统会根据音频流类型选择对应的输入设备（SOURCE_TYPE_MIC：内置MIC录音；SOURCE_TYPE_VOICE_COMMUNICATION：跟随当前输出设备）。若默认输入设备不满足应用需求，应用可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#setbluetoothandnearlinkpreferredrecordcategory21",
        children: "setBluetoothAndNearlinkPreferredRecordCategory"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#selectmediainputdevice21",
        children: "selectMediaInputDevice"
      }), "实现音频输入设备路由切换。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下各步骤示例为片段代码，可通过示例代码右下方链接获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioRoutingManagerSampleJS",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选择使用蓝牙或者星闪设备进行录音",
      children: "选择使用蓝牙或者星闪设备进行录音"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可使用AudioSessionManager的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#setbluetoothandnearlinkpreferredrecordcategory21",
        children: "setBluetoothAndNearlinkPreferredRecordCategory"
      }), "设置应用程序的输入设备选择偏好，当蓝牙或星闪设备上线时生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(964825)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通话场景下，如果蓝牙或星闪设备在线，系统默认使用蓝牙或星闪设备作为输入设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';  // 导入audio模块。\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet audioManager = audio.getAudioManager();  // 需要先创建AudioManager实例。\n\nlet audioSessionManager = audioManager.getSessionManager();  // 再调用AudioManager的方法创建AudioSessionManager实例.\n\n// ...\n  audioSessionManager.setBluetoothAndNearlinkPreferredRecordCategory(audio.BluetoothAndNearlinkPreferredRecordCategory\n    .PREFERRED_LOW_LATENCY).then(() => {\n    console.info('Succeeded in setting bluetooth and nearlink preferred record category.');\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to set bluetooth and nearlink preferred record category. Code: ${err.code},\n      message: ${err.message}`);\n    // ...\n  });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选择任意设备进行录音",
      children: "选择任意设备进行录音"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可使用AudioSessionManager的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiosessionmanager/arkts-apis-audio-audiosessionmanager#selectmediainputdevice21",
        children: "selectMediaInputDevice"
      }), "选择输入设备。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(931725)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通话场景下，输入设备跟随当前输出设备，此时其他与通话并发的录音流也会跟随通话输入设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';  // 导入audio模块。\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet audioManager = audio.getAudioManager();  // 需要先创建AudioManager实例。\n\nlet audioSessionManager = audioManager.getSessionManager();  // 再调用AudioManager的方法创建AudioSessionManager实例.\n\n// ...\n// 监听音频可选输入设备连接状态变化事件,当有输入设备上下线时会收到回调通知。\nlet availableDeviceChangeCallback = (deviceChanged: audio.DeviceChangeAction) => {\n  let data: audio.AudioDeviceDescriptors = deviceChanged.deviceDescriptors;\n  console.info(`Succeeded in using on or off function, AudioDeviceDescriptors: ${data}.`);\n  // ...\n};\n\n// 监听当前输入设备变化事件,当选择输入设备成功后会触发该回调。\nlet currentInputDeviceChangedCallback = (currentInputDeviceChangedEvent: audio.CurrentInputDeviceChangedEvent) => {\n  console.info(`Succeeded in using on or off function, CurrentInputDeviceChangedEvent:\n   ${currentInputDeviceChangedEvent}.`);\n  // ...\n};\n\n// ...\n  audioSessionManager.on('availableDeviceChange', audio.DeviceUsage.MEDIA_INPUT_DEVICES, availableDeviceChangeCallback);\n  // ...\n  audioSessionManager.on('currentInputDeviceChanged', currentInputDeviceChangedCallback);\n  // ...\n  // 取消监听音频可选输入设备连接状态变化事件\n  audioSessionManager.off('availableDeviceChange', availableDeviceChangeCallback);\n  // ...\n  // 取消监听当前输入设备变化事件\n  audioSessionManager.off('currentInputDeviceChanged', currentInputDeviceChangedCallback);\n  // ...\n  try {\n    // 获取当前可选的音频输入设备列表。\n    let data: audio.AudioDeviceDescriptors =\n      audioSessionManager.getAvailableDevices(audio.DeviceUsage.MEDIA_INPUT_DEVICES);\n    console.info(`Succeeded in getting available devices, AudioDeviceDescriptors: ${data}.`);\n\n    // ...\n\n    // 当前可选音频输入设备列表不为空时,可进行选择。\n    if (data[0]) {\n      // 选择输入设备。\n      await audioSessionManager.selectMediaInputDevice(data[0]).then(() => {\n        console.info('Succeeded in selecting media input device.');\n        // ...\n      }).catch((err: BusinessError) => {\n        console.error(`Failed to select media input device. Code: ${err.code}, message: ${err.message}`);\n        // ...\n      });\n    }\n  } catch (err) {\n    let error = err as BusinessError;\n    console.error(`Failed to select media input device. Code: ${err.code}, message: ${err.message}`);\n    // ...\n  }\n  // ...\n  // 可通过该接口查询选择输入设备是否成功。\n  try {\n    let device: audio.AudioDeviceDescriptor = audioSessionManager.getSelectedMediaInputDevice();\n    console.info(`Succeeded in getting selected media input device: ${JSON.stringify(device)}`);\n\n    // ...\n  } catch (err) {\n    let error = err as BusinessError;\n    console.error(`Failed to get selected media input device. Code: ${error.code}, message: ${error.message}`);\n    // ...\n  }\n  // ...\n  // 清空通过selectMediaInputDevice选择的输入设备。\n  audioSessionManager.clearSelectedMediaInputDevice().then(() => {\n    console.info('Succeeded in clearing selected media input device.');\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to clear selected media input device. Code: ${err.code}, message: ${err.message}`);\n    // ...\n  });\n"
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
931725(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
964825(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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