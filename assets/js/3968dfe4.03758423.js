"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["439389"], {
256068(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_playback_public_audio_spatialization_management_public_audio_spatialization_management_md_396_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-playback-public-audio-spatialization-management-public-audio-spatialization-management-md-396.json
var site_docs_audio_kit_audio_playback_public_audio_spatialization_management_public_audio_spatialization_management_md_396_namespaceObject = JSON.parse('{"id":"audio-kit/audio-playback/public-audio-spatialization-management/public-audio-spatialization-management","title":"空间音频能力查询和状态订阅","description":"从API version 18开始，支持空间音频能力查询和状态订阅。","source":"@site/docs/audio-kit/audio-playback/public-audio-spatialization-management/public-audio-spatialization-management.md","sourceDirName":"audio-kit/audio-playback/public-audio-spatialization-management","slug":"/audio-kit/audio-playback/public-audio-spatialization-management/","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/public-audio-spatialization-management/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"空间音频能力查询和状态订阅","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/public-audio-spatialization-management","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"播放音量管理","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/volume-management/"},"next":{"title":"音频播放流管理","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/audio-playback-stream-management/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-playback/public-audio-spatialization-management/public-audio-spatialization-management.md


const frontMatter = {
	title: '空间音频能力查询和状态订阅',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/public-audio-spatialization-management',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '空间音频能力查询和状态订阅';

const assets = {

};



const toc = [{
  "value": "使用说明",
  "id": "使用说明",
  "level": 2
}, {
  "value": "创建空间音频示例",
  "id": "创建空间音频示例",
  "level": 3
}, {
  "value": "查询设备是否支持空间音频渲染能力",
  "id": "查询设备是否支持空间音频渲染能力",
  "level": 3
}, {
  "value": "查询当前发声设备的空间音频渲染效果开关状态",
  "id": "查询当前发声设备的空间音频渲染效果开关状态",
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
        id: "空间音频能力查询和状态订阅",
        children: "空间音频能力查询和状态订阅"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持空间音频能力查询和状态订阅。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "空间音频是一种能够将传统立体声体验扩展到三维空间的音频技术，在单声道、立体声、环绕声的基础上，增加高度感知，营造全方位的听音体验。空间音频为用户提供沉浸的、有互动的、有空间感的“声”临其境的音频体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Audio Vivid是基于AI技术的音频编解码标准，由世界超高清视频产业联盟（UWA）与数字音视频编解码技术标准工作组（AVS）联合制定，共同发布。包含音频PCM数据以及元数据的音频格式，相比传统立体声音源，Audio Vivid包含音频内容源的元数据信息，能够还原物理和感知世界中的真实听感，打造极致的沉浸式听觉体验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["空间音频支持播放多声道、立体声、Audio Vivid等格式音源，并在耳机实现双耳空间音频渲染重放。搭配Audio Vivid格式音源的空间音频渲染，能够将音乐中的人声和各种乐器作为独立的声音对象，重新定义各种声音对象的位置、移动轨迹和声音大小、远近等要素，实现声音在听众四周及上方全面萦绕，实现更佳的空间音频沉浸式体验，获得影院、音乐厅等的临场感与艺术体验。当设备支持空间音频且空间音频开关被打开时，下发Audio Vivid格式音源可以得到更加沉浸的音频体验。关于如何播放Audio Vivid音源，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-playback/using-ohaudio-for-playback#%E6%92%AD%E6%94%BEaudio-vivid%E6%A0%BC%E5%BC%8F%E9%9F%B3%E6%BA%90",
        children: "播放Audio Vivid格式音源"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下各步骤示例为片段代码，可通过示例代码右下方链接获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioRendererSampleJS",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用说明",
      children: "使用说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于播放音频类的应用，开发者可以查询到设备是否有支持空间音频的能力，以及当前设备空间音频的开关状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建空间音频示例",
      children: "创建空间音频示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用开发者在使用AudioSpatializationManager的接口前，需要先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiomanager/arkts-apis-audio-audiomanager#getspatializationmanager18",
        children: "getSpatializationManager"
      }), "创建AudioSpatializationManager实例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\n// ...\nlet audioManager = audio.getAudioManager();\n// ...\nlet audioSpatializationManager = audioManager.getSpatializationManager();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询设备是否支持空间音频渲染能力",
      children: "查询设备是否支持空间音频渲染能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-i/arkts-apis-audio-i#audiodevicedescriptor",
        children: "AudioDeviceDescriptor"
      }), "的spatializationSupported属性获取指定设备是否具有空间音频渲染的能力，需要通过音频框架中其他接口来获取当前已连接设备或当前发声设备的AudioDeviceDescriptor。例如，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiomanager/arkts-apis-audio-audiomanager#getroutingmanager9",
        children: "getRoutingManager"
      }), "创建的AudioRoutingManager实例的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audioroutingmanager/arkts-apis-audio-audioroutingmanager#getdevicessync10",
        children: "getDevicesSync"
      }), "接口获取。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\n// ...\nlet audioRoutingManager = audioManager.getRoutingManager();\n// ...\n  let deviceDescriptors = audioRoutingManager.getDevicesSync(audio.DeviceFlag.OUTPUT_DEVICES_FLAG);\n  console.info(`Succeeded in getting devices, AudioDeviceDescriptors: ${JSON.stringify(deviceDescriptors)}.`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询当前发声设备的空间音频渲染效果开关状态",
      children: "查询当前发声设备的空间音频渲染效果开关状态"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiospatializationmanager/arkts-apis-audio-audiospatializationmanager#isspatializationenabledforcurrentdevice18",
        children: "isSpatializationEnabledForCurrentDevice"
      }), "接口查询当前设备的空间音频渲染效果开关状态。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该接口返回true表示当前设备空间音频渲染开启，返回false表示当前设备空间音频渲染关闭。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该状态仅为开关状态，实际是否生效还需依赖当前设备是否支持空间音频渲染。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\n// ...\n  let isSpatializationEnabledForCurrentDevice = audioSpatializationManager.isSpatializationEnabledForCurrentDevice();\n  console.info(`Succeeded in using isSpatializationEnabledForCurrentDevice function,\n    IsSpatializationEnabledForCurrentDevice: ${isSpatializationEnabledForCurrentDevice}.`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "订阅当前发声设备空间音频渲染效果的开关状态变化事件"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiospatializationmanager/arkts-apis-audio-audiospatializationmanager#onspatializationenabledchangeforcurrentdevice18",
        children: "on('spatializationEnabledChangeForCurrentDevice')"
      }), "接口订阅当前空间音频渲染效果的开关状态变化事件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口返回true表示空间音频渲染被开启，返回false表示空间音频渲染被关闭。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\n// ...\n  audioSpatializationManager.on('spatializationEnabledChangeForCurrentDevice',\n    (isSpatializationEnabledForCurrentDevice: boolean) => {\n    console.info(`Succeeded in using on function, IsSpatializationEnabledForCurrentDevice:\n      ${isSpatializationEnabledForCurrentDevice}.`);\n    // ...\n  });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "取消订阅当前发声设备空间音频渲染效果的开关状态变化事件"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiospatializationmanager/arkts-apis-audio-audiospatializationmanager#offspatializationenabledchangeforcurrentdevice18",
        children: "off('spatializationEnabledChangeForCurrentDevice')"
      }), "接口取消订阅空间音频渲染效果的开关状态变化事件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\n// ...\n  audioSpatializationManager.off('spatializationEnabledChangeForCurrentDevice');\n"
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