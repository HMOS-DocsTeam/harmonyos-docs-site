"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["910659"], {
821890(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_playback_using_audiohaptic_for_playback_using_audiohaptic_for_playback_md_da4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-playback-using-audiohaptic-for-playback-using-audiohaptic-for-playback-md-da4.json
var site_docs_audio_kit_audio_playback_using_audiohaptic_for_playback_using_audiohaptic_for_playback_md_da4_namespaceObject = JSON.parse('{"id":"audio-kit/audio-playback/using-audiohaptic-for-playback/using-audiohaptic-for-playback","title":"使用AudioHaptic开发音振协同播放功能(ArkTs)","description":"AudioHaptic提供音频与振动协同播放及管理的方法，适用于需要在播放音频时同步发起振动的场景，如来电铃声随振、键盘按键反馈、消息通知反馈等。","source":"@site/docs/audio-kit/audio-playback/using-audiohaptic-for-playback/using-audiohaptic-for-playback.md","sourceDirName":"audio-kit/audio-playback/using-audiohaptic-for-playback","slug":"/audio-kit/audio-playback/using-audiohaptic-for-playback/","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/using-audiohaptic-for-playback/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"使用AudioHaptic开发音振协同播放功能(ArkTs)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-audiohaptic-for-playback","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"低功耗音频播放","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/power-saving-for-playback/"},"next":{"title":"播放音量管理","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/volume-management/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-playback/using-audiohaptic-for-playback/using-audiohaptic-for-playback.md


const frontMatter = {
	title: '使用AudioHaptic开发音振协同播放功能(ArkTs)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-audiohaptic-for-playback',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AudioHaptic开发音振协同播放功能(ArkTs)';

const assets = {

};



const toc = [{
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}, {
  "value": "权限申请",
  "id": "权限申请",
  "level": 3
}, {
  "value": "开发步骤及注意事项",
  "id": "开发步骤及注意事项",
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
        id: "使用audiohaptic开发音振协同播放功能arkts",
        children: "使用AudioHaptic开发音振协同播放功能(ArkTs)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AudioHaptic提供音频与振动协同播放及管理的方法，适用于需要在播放音频时同步发起振动的场景，如来电铃声随振、键盘按键反馈、消息通知反馈等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用AudioHaptic播放音频并同步开启振动，涉及到音频及振动资源的管理、音频时延模式及音频流使用类型的配置、音振播放器的创建及管理等。本开发指导将以一次音振协同播放的过程为例，向开发者讲解如何使用AudioHaptic进行音振协同播放，建议配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audiohaptic/js-apis-audiohaptic",
        children: "audioHaptic"
      }), "的API说明阅读。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "权限申请",
      children: "权限申请"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果应用创建的AudioHapticPlayer需要触发振动，则需要校验应用是否拥有该权限：ohos.permission.VIBRATE。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
          children: "声明权限"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
          children: "向用户申请授权"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下各步骤示例为片段代码，可通过示例代码右下方链接获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioRendererSampleJS",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取音振管理器实例，并注册音频及振动资源，资源支持情况可以查看", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audiohaptic/js-apis-audiohaptic#audiohapticmanager",
            children: "AudioHapticManager"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(127947)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可通过如下两种方式注册资源："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["方式1：使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-arkts/js-apis-audiohaptic/js-apis-audiohaptic#registersource",
              children: "registerSource"
            }), "接口，通过文件URI来注册资源。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["方式2（推荐）：从API version 20开始，支持使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/audio-api/audio-arkts/js-apis-audiohaptic/js-apis-audiohaptic#registersourcefromfd20",
              children: "registerSourceFromFd"
            }), "接口，通过文件描述符来注册资源，更便于开发者使用。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { audio, audioHaptic } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\nlet audioHapticManagerInstance: audioHaptic.AudioHapticManager = audioHaptic.getAudioHapticManager();\n\n// 单个应用最多支持同时注册128个资源，超过之后将会注册失败（返回注册的资源ID为负数）。\n// 推荐应用合理控制注册资源数量，对于不再需要使用的资源，建议及时取消注册。\n\n// ...\n  // 方法1：使用registerSource接口注册资源。\n  let audioUri = 'data/audioTest.wav'; // 此处仅作示例，实际使用时需要将文件替换为应用目标音频资源的Uri。\n  let hapticUri = 'data/hapticTest.json'; // 此处仅作示例，实际使用时需要将文件替换为应用目标振动资源的Uri。\n  let idForUri = 0;\n\n  audioHapticManagerInstance.registerSource(audioUri, hapticUri).then((value: number) => {\n    console.info(`Promise returned to indicate that the source id of the registered source ${value}.`);\n    idForUri = value;\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to register source ${err}`);\n    // ...\n  });\n  // ...\n  // 方法2:使用registerSourceFromFd接口注册资源。\n  // 此处仅作示例,实际使用时需要将文件替换为应用rawfile目录下的对应文件。\n  let audioFile = context.resourceManager.getRawFdSync('audioTest.ogg');\n  let audioFd: audioHaptic.AudioHapticFileDescriptor = {\n    fd: audioFile.fd,\n    offset: audioFile.offset,\n    length: audioFile.length,\n  };\n  // 此处仅作示例,实际使用时需要将文件替换为应用rawfile目录下的对应文件。\n  let hapticFile = context.resourceManager.getRawFdSync('hapticTest.json');\n  let hapticFd: audioHaptic.AudioHapticFileDescriptor = {\n    fd: hapticFile.fd,\n    offset: hapticFile.offset,\n    length: hapticFile.length,\n  };\n  audioHapticManagerInstance.registerSourceFromFd(audioFd, hapticFd).then((value: number) => {\n    console.info('Succeeded in doing registerSourceFromFd.');\n    idForFd = value;\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to registerSourceFromFd. Code: ${err.code}, message: ${err.message}`);\n    // ...\n  });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置音振播放器参数，各参数作用可以查看", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audiohaptic/js-apis-audiohaptic#audiohapticmanager",
            children: "AudioHapticManager"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let latencyMode: audioHaptic.AudioLatencyMode = audioHaptic.AudioLatencyMode.AUDIO_LATENCY_MODE_FAST;\naudioHapticManagerInstance.setAudioLatencyMode(idForFd, latencyMode);\n\nlet usage: audio.StreamUsage = audio.StreamUsage.STREAM_USAGE_NOTIFICATION;\naudioHapticManagerInstance.setStreamUsage(idForFd, usage);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audiohaptic/js-apis-audiohaptic#createplayer",
            children: "createPlayer"
          }), "方法，创建AudioHapticPlayer实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let options: audioHaptic.AudioHapticPlayerOptions = {muteAudio: false, muteHaptics: false};\nlet audioHapticPlayer: audioHaptic.AudioHapticPlayer | undefined = undefined;\n// ...\n  audioHapticManagerInstance.createPlayer(idForFd, options).then((value: audioHaptic.AudioHapticPlayer) => {\n    console.info(`Create the audio haptic player successfully.`);\n    audioHapticPlayer = value;\n    // ...\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to create player ${err}`);\n    // ...\n  });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audiohaptic/js-apis-audiohaptic#start",
            children: "start"
          }), "方法，开启音频播放并同步开启振动。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "audioHapticPlayer.start().then(() => {\n  console.info(`Promise returned to indicate that start playing successfully.`);\n  // ...\n}).catch((err: BusinessError) => {\n  console.error(`Failed to start playing. ${err}`);\n  // ...\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audiohaptic/js-apis-audiohaptic#stop",
            children: "stop"
          }), "方法，停止音频播放并同步停止振动。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "audioHapticPlayer.stop().then(() => {\n  console.info(`Promise returned to indicate that stop playing successfully.`);\n  // ...\n}).catch((err: BusinessError) => {\n  console.error(`Failed to stop playing. ${err}`);\n  // ...\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audiohaptic/js-apis-audiohaptic#release",
            children: "release"
          }), "方法，释放AudioHapticPlayer实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "audioHapticPlayer.release().then(() => {\n  console.info(`Promise returned to indicate that release the audio haptic player successfully.`);\n  // ...\n}).catch((err: BusinessError) => {\n  console.error(`Failed to release the audio haptic player. ${err}`);\n  // ...\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/audio-api/audio-arkts/js-apis-audiohaptic/js-apis-audiohaptic#unregistersource",
            children: "unregisterSource"
          }), "方法，将已注册的音频及振动资源移除注册。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 对于不再需要使用的资源，建议应用及时取消注册，避免出现资源泄漏或资源数量超上限等问题。\naudioHapticManagerInstance.unregisterSource(idForFd).then(() => {\n  console.info(`Promise returned to indicate that unregister source successfully`);\n  // ...\n}).catch((err: BusinessError) => {\n  console.error(`Failed to unregister source ${err}`);\n  // ...\n});\n"
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
127947(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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