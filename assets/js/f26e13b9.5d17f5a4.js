"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["205084"], {
2092(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_playback_volume_management_volume_management_md_f26_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-playback-volume-management-volume-management-md-f26.json
var site_docs_audio_kit_audio_playback_volume_management_volume_management_md_f26_namespaceObject = JSON.parse('{"id":"audio-kit/audio-playback/volume-management/volume-management","title":"播放音量管理","description":"本模块提供播放音量管理能力，包括对*系统音量、应用音量和音频流音量*的管理。","source":"@site/docs/audio-kit/audio-playback/volume-management/volume-management.md","sourceDirName":"audio-kit/audio-playback/volume-management","slug":"/audio-kit/audio-playback/volume-management/","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/volume-management/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"播放音量管理","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/volume-management","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AudioHaptic开发音振协同播放功能(ArkTs)","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/using-audiohaptic-for-playback/"},"next":{"title":"空间音频能力查询和状态订阅","permalink":"/harmonyos-docs-site/audio-kit/audio-playback/public-audio-spatialization-management/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-playback/volume-management/volume-management.md


const frontMatter = {
	title: '播放音量管理',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/volume-management',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '播放音量管理';

const assets = {

};



const toc = [{
  "value": "系统音量",
  "id": "系统音量",
  "level": 2
}, {
  "value": "获取音量信息",
  "id": "获取音量信息",
  "level": 3
}, {
  "value": "监听系统音量变化",
  "id": "监听系统音量变化",
  "level": 3
}, {
  "value": "使用音量面板调节系统音量",
  "id": "使用音量面板调节系统音量",
  "level": 3
}, {
  "value": "应用音量",
  "id": "应用音量",
  "level": 2
}, {
  "value": "调节应用音量",
  "id": "调节应用音量",
  "level": 3
}, {
  "value": "音频流音量",
  "id": "音频流音量",
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
        id: "播放音量管理",
        children: "播放音量管理"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块提供播放音量管理能力，包括对", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统音量"
        })
      }), "、", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用音量"
        })
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "音频流音量"
        })
      }), "的管理。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统音量"
        })
      }), "是由HarmonyOS系统全局管理的音量设置，适用于所有应用程序和设备。HarmonyOS系统将音频分为不同的流类型，每种流类型有独立的系统音量控制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(853038)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统音量可以通过物理音量按键或系统设置界面调节。在设置界面中，用户可以单独调整上述每种系统音量的大小。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常见的流类型以及对应的系统音量如下所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "媒体音量：用于音乐、视频、游戏等媒体播放。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通话音量：用于语音通话。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "铃声音量：用于来电铃声。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "闹钟音量：用于闹钟提醒。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用音量"
        })
      }), "是HarmonyOS提供给三方应用用来控制该应用下所有音频流音量的一种音量类型。三方应用设置应用音量之后，该应用中起的所有音频流默认使用该音量大小。另外具有系统应用权限的应用可以通过UID单独调整指定应用的音量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "音频流音量"
        })
      }), "是由应用独立控制的音量设置，仅影响该应用中指定的音频流输出音量大小。例如：媒体播放器可以独立控制其播放音量，而不影响系统音量以及该应用中的其他类型流音量。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统音量、应用音量和音频流音量的关系如下所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "层级关系：系统音量是全局的，应用音量和音频流音量是局部的。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用音量和音频流音量的调整范围受系统音量的限制。例如：系统媒体音量设置为50%，应用音量设置为100%，应用程序的最终输出音量只能达到50%（50% * 100%）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "音频流音量是对应用音量的更精细化控制。设置了应用音量的三方应用，还可以继续通过音频流音量对指定的音频流进行更加精细化的控制。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "协同关系：应用最终的输出音量是由系统音量、应用音量和音频流音量共同决定的。例如：系统媒体音量设置为50%，应用音量设置为50%，应用程序中对媒体音频流设置音频流音量为100%，则该音频流最终输出的音量为25%（50% * 50% * 100%）。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS通过系统音量，应用音量和音频流音量协同的方式实现应用对音量的精确控制。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下各步骤示例为片段代码，可通过示例代码右下方链接获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/AudioRendererSampleJS",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "系统音量",
      children: "系统音量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["管理系统音量的接口由AudioVolumeManager提供，在使用之前，需要使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiomanager/arkts-apis-audio-audiomanager#getvolumemanager9",
        children: "getVolumeManager"
      }), "获取AudioVolumeManager实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过AudioVolumeManager只能获取音量信息及监听音量变化，不能主动调节系统音量。如果应用需要调节系统音量，可以", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BD%BF%E7%94%A8%E9%9F%B3%E9%87%8F%E9%9D%A2%E6%9D%BF%E8%B0%83%E8%8A%82%E7%B3%BB%E7%BB%9F%E9%9F%B3%E9%87%8F",
        children: "使用音量面板调节系统音量"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\n// ...\nlet audioManager = audio.getAudioManager();\nlet audioVolumeManager = audioManager.getVolumeManager();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取音量信息",
      children: "获取音量信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["管理系统音量的接口由AudioVolumeManager提供，在使用之前，需要使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiomanager/arkts-apis-audio-audiomanager#getvolumemanager9",
        children: "getVolumeManager"
      }), "获取AudioVolumeManager实例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\n// ...\nlet audioManager = audio.getAudioManager();\nlet audioVolumeManager = audioManager.getVolumeManager();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiovolumemanager/arkts-apis-audio-audiovolumemanager",
        children: "AudioVolumeManager"
      }), "获取指定流类型的音量信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// ...\n  // 获取指定流的音量。\n  audioVolumeManager.getVolumeByStream(audio.StreamUsage.STREAM_USAGE_MUSIC);\n  // ...\n  // 获取指定流的最小音量。\n  audioVolumeManager.getMinVolumeByStream(audio.StreamUsage.STREAM_USAGE_MUSIC);\n\n  // 获取指定流的最大音量。\n  audioVolumeManager.getMaxVolumeByStream(audio.StreamUsage.STREAM_USAGE_MUSIC);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "监听系统音量变化",
      children: "监听系统音量变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置监听事件，可以监听系统音量的变化："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\n// ...\n  audioVolumeManager.on('streamVolumeChange', audio.StreamUsage.STREAM_USAGE_MUSIC,\n    (streamVolumeEvent: audio.StreamVolumeEvent) => {\n    console.info(`StreamUsagem: ${streamVolumeEvent.streamUsage} `);\n    console.info(`Volume level: ${streamVolumeEvent.volume} `);\n    console.info(`Whether to updateUI: ${streamVolumeEvent.updateUi} `);\n    // ...\n  });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用音量面板调节系统音量",
      children: "使用音量面板调节系统音量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用无法直接调节系统音量，可以通过系统音量面板，让用户通过界面操作来调节音量。当用户通过应用内音量面板调节音量时，系统会展示音量提示界面，显性地提示用户系统音量发生改变。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统提供了ArkTS组件AVVolumePanel（音量面板），应用可以创建该组件，具体样例和介绍请查看参考文档：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-comp/ohos-multimedia-avvolumepanel/ohos-multimedia-avvolumepanel",
        children: "avVolumePanel"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用音量",
      children: "应用音量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["管理应用音量的接口由AudioVolumeManager提供，在使用之前，需要使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiomanager/arkts-apis-audio-audiomanager#getvolumemanager9",
        children: "getVolumeManager"
      }), "获取AudioVolumeManager实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-e/arkts-apis-audio-e#audiovolumemode19",
        children: "音量模式"
      }), "设置为APP_INDIVIDUAL时，可通过下面示例接口设置、查询应用音量。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调节应用音量",
      children: "调节应用音量"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit';\n// ...\nlet audioManager = audio.getAudioManager();\nlet audioVolumeManager = audioManager.getVolumeManager();\n// ...\n  // 设置应用的音量（范围为0到100）。\n  audioVolumeManager.setAppVolumePercentage(20).then(() => {\n    console.info(`set app volume success.`);\n    // ...\n  });\n\n  // 查询应用音量。\n  audioVolumeManager.getAppVolumePercentage().then((value: number) => {\n    console.info(`app volume is ${value}.`);\n    // ...\n  });\n\n  // 监听应用音量变化，on方法和off方法传入callback参数一致，off方法取消对应on方法订阅的监听。\n  let appVolumeChangeCallback = (volumeEvent: audio.VolumeEvent) => {\n    console.info(`VolumeType of stream: ${volumeEvent.volumeType} `);\n    console.info(`Volume level: ${volumeEvent.volume} `);\n    console.info(`Whether to updateUI: ${volumeEvent.updateUi} `);\n    // ...\n  };\n  audioVolumeManager.on('appVolumeChange', appVolumeChangeCallback);\n  audioVolumeManager.off('appVolumeChange', appVolumeChangeCallback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "音频流音量",
      children: "音频流音量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["管理音频流音量的接口是AVPlayer或AudioRenderer的setVolume()方法，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-f/arkts-apis-media-f#mediacreateavplayer9",
        children: "AVPlayer"
      }), "设置音频流音量的示例代码如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let volume = 1.0;  // 指定的音量大小，取值范围为[0.00-1.00]，1表示最大音量。\navPlayer.setVolume(volume);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-f/arkts-apis-audio-f#audiocreateaudiorenderer8",
        children: "AudioRenderer"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#setvolume9",
        children: "setVolume"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/audio-api/audio-arkts/js-apis-audio/arkts-apis-audio-audiorenderer/arkts-apis-audio-audiorenderer#getvolume12",
        children: "getVolume"
      }), "接口分别完成音频流音量的设置和获取。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BusinessError } from '@kit.BasicServicesKit';\n// ...\n    // 设置音频流音量。\n    audioRenderer.setVolume(0.5).then(() => {  // 音量范围为[0.0-1.0]。\n      console.info('Invoke setVolume succeeded.');\n      // ...\n    }).catch((err: BusinessError) => {\n      console.error(`Invoke setVolume failed, code is ${err.code}, message is ${err.message}`);\n      // ...\n    });\n\n    // 获取音频流音量。\n    try {\n      let value: number = audioRenderer.getVolume();\n      console.info(`Indicate that the volume is obtained ${value}.`);\n      // ...\n    } catch (err) {\n      let error = err as BusinessError;\n      console.error(`Failed to obtain the volume, error ${error}.`);\n      // ...\n    }\n"
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
853038(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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