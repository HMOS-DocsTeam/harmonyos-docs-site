"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["512343"], {
764461(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_media_kit_media_kit_dev_arkts_media_playback_arkts_using_soundpool_for_playback_using_soundpool_for_playback_md_60c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-media-kit-media-kit-dev-arkts-media-playback-arkts-using-soundpool-for-playback-using-soundpool-for-playback-md-60c.json
var site_docs_media_kit_media_kit_dev_arkts_media_playback_arkts_using_soundpool_for_playback_using_soundpool_for_playback_md_60c_namespaceObject = JSON.parse('{"id":"media-kit/media-kit-dev--arkts/media-playback-arkts/using-soundpool-for-playback/using-soundpool-for-playback","title":"使用SoundPool播放短音频(ArkTS)","description":"使用SoundPool（音频池）提供的接口，可以实现低时延短音播放。","source":"@site/docs/media-kit/media-kit-dev--arkts/media-playback-arkts/using-soundpool-for-playback/using-soundpool-for-playback.md","sourceDirName":"media-kit/media-kit-dev--arkts/media-playback-arkts/using-soundpool-for-playback","slug":"/media-kit/media-kit-dev--arkts/media-playback-arkts/using-soundpool-for-playback/","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-playback-arkts/using-soundpool-for-playback/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"使用SoundPool播放短音频(ArkTS)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-soundpool-for-playback","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用AVPlayer添加视频外挂字幕(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-playback-arkts/video-subtitle/"},"next":{"title":"使用AVRecorder录制音频(ArkTS)","permalink":"/harmonyos-docs-site/media-kit/media-kit-dev--arkts/media-recording-arkts/using-avrecorder-for-recording/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/media-kit/media-kit-dev--arkts/media-playback-arkts/using-soundpool-for-playback/using-soundpool-for-playback.md


const frontMatter = {
	title: '使用SoundPool播放短音频(ArkTS)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-soundpool-for-playback',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用SoundPool播放短音频(ArkTS)';

const assets = {

};



const toc = [{
  "value": "开发步骤及注意事项",
  "id": "开发步骤及注意事项",
  "level": 2
}, {
  "value": "运行示例工程",
  "id": "运行示例工程",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用soundpool播放短音频arkts",
        children: "使用SoundPool播放短音频(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/media-kit/media-kit-intro#soundpool",
        children: "SoundPool"
      }), "（音频池）提供的接口，可以实现低时延短音播放。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用开发时，经常需要使用一些急促简短的音效（如相机快门音效、系统通知音效等），此时建议调用SoundPool，实现一次加载，多次低时延播放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SoundPool当前支持播放解码后1MB以下的音频资源，解码后大小超过1MB的长音频将截取前面的1MB大小数据进行播放，这相当于44.1kHz的16bit位深的立体声下约5.6秒的音频时长（在较低采样率或单声道配置下，持续时间会相应延长）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本开发指导将以SoundPool进行一次低时延播放音频的过程为例，向开发者讲解如何使用SoundPool。详细的API声明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/media-api/media-arkts/media-multimedia-arkts/js-apis-inner-multimedia-soundpool/js-apis-inner-multimedia-soundpool",
        children: "SoundPool (音频池)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["过程包括：创建SoundPool实例，加载音频资源（包括资源的解封装与解码：解码格式参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/avcodec-kit/audio-video-codec/audio-decoding",
        children: "音频解码支持"
      }), "），设置播放参数（循环模式/播放优先级等），播放控制（播放/停止），释放资源。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用开发过程中，开发者应通过监听方法检查当前播放状态并按照一定顺序调用接口，执行对应操作，否则系统可能会抛出异常或生成其他未定义的行为。具体顺序可参考下列开发步骤及对应说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(347700)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用SoundPool播放短音频时，涉及音频焦点管控策略的问题，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-session/audio-playback-concurrency",
        children: "音频焦点指南"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤及注意事项",
      children: "开发步骤及注意事项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-f/arkts-apis-media-f#mediacreatesoundpool10-1",
            children: "createSoundPool"
          }), "方法创建SoundPool实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { media } from '@kit.MediaKit';\nimport { audio } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nprivate soundPool: media.SoundPool | undefined = undefined;\n// audioRenderInfo中的参数usage取值为STREAM_USAGE_UNKNOWN，STREAM_USAGE_MUSIC，STREAM_USAGE_MOVIE。\n// STREAM_USAGE_AUDIOBOOK时，SoundPool播放短音时为混音模式，不会打断其他音频播放。\nlet audioRendererInfo: audio.AudioRendererInfo = {\n  usage: audio.StreamUsage.STREAM_USAGE_MUSIC, // 音频流使用类型：音乐。根据业务场景配置，参考StreamUsage。\n  rendererFlags: 1 // 音频渲染器标志。\n};\n\n// 创建soundPool实例。\nthis.soundPool = await media.createSoundPool(14, audioRendererInfo); // 最大播放的流数为14。\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/media-multimedia-arkts/js-apis-inner-multimedia-soundpool/js-apis-inner-multimedia-soundpool#onloadcomplete",
            children: "on('loadComplete')"
          }), "方法，用于监听“资源加载完成”。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private soundId: number = 0;\n// 加载完成回调。\nthis.soundPool!.on('loadComplete', (soundId_: number) => {\n  this.soundId = soundId_;\n  console.info('loadComplete soundId: ' + soundId_);\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用on('playFinished')或者on('playFinishedWithStreamId')方法，用于监听“播放完成”。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当仅单独注册'playFinished'事件回调或者'playFinishedWithStreamId'事件回调时，当音频播放完成的时候，都会触发注册的回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当同时注册'playFinished'事件回调和'playFinishedWithStreamId'事件回调时，当音频播放完成的时候，仅会触发'playFinishedWithStreamId'事件回调，不会触发'playFinished'事件回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.soundPool!.on('playFinished', () => {\n  console.info(\"receive play finished message\");\n  // 可进行下次播放。\n});\nthis.soundPool!.on('playFinishedWithStreamId', (streamId) => {\n  console.info(\"receive play finished message, streamId: \" + streamId);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用on('error')方法，设置错误类型监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.soundPool!.on('error', (error: BusinessError) => {\n  console.error('error happened,message is :' + error.code);\n  console.error('error happened,message is :' + error.message);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用load方法进行音频资源加载。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可以传入uri或fd加载资源，此处使用传入fd的方式为例，更多方法请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/media-multimedia-arkts/js-apis-inner-multimedia-soundpool/js-apis-inner-multimedia-soundpool#load",
            children: "API文档"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当系统加载完毕音频资源文件的时候，会通过loadComplete回调，通知用户资源加载完成，请在收到回调之后，再进行后续的play操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n\nprivate soundId: number = 0;\n// 获取当前组件所在Ability的Context，以通过Context获取应用文件路径。\nlet context = this.getUIContext().getHostContext();\n// 获取输入文件fd，test.ogg为rawfile目录下的预置资源，需要开发者根据实际情况进行替换。\nlet fileDescriptor = await context!.resourceManager.getRawFd('test.ogg');\nthis.soundId = await this.soundPool!.load(fileDescriptor.fd, fileDescriptor.offset, fileDescriptor.length);\nconsole.info(`load soundPool soundId: ${this.soundId}`)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置播放参数PlayParameters，并在收到loadComplete回调通知之后，调用play方法播放音频。多次调用play播放同一个soundID，只会播放一次。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private soundId: number = 0;\nprivate streamId: number = 0;\nlet playParameters: media.PlayParameters = {\n  loop: 1, // 循环1次，即播放2次。\n  rate: 1, // 2倍速播放。\n  leftVolume: 0.5, // 取值范围0.0-1.0。\n  rightVolume: 0.5, // 取值范围0.0-1.0。\n  priority: 0, // 最低优先级。\n};\n// 开始播放，调用play可携带播放参数PlayParameters。请在音频资源加载完毕，即收到loadComplete回调之后再执行play操作。\nthis.soundPool!.play(this.soundId, playParameters, (error, streamID: number) => {\n  if (error) {\n    console.error(`play sound Error: errCode is ${error.code}, errMessage is ${error.message}`)\n  } else {\n    this.streamId = streamID;\n    console.info('play success soundId:' + this.streamId);\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用setLoop方法设置循环次数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置循环播放次数。\nawait this.soundPool!.setLoop(this.streamId, 2); // 播放3次。\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用setPriority方法设置优先级。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置对应流的优先级。\nawait this.soundPool!.setPriority(this.streamId, 1);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用setVolume方法设置音量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置音量。\nawait this.soundPool!.setVolume(this.streamId, 0.5, 0.5);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用stop方法终止指定流的播放。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 终止指定流的播放。\nawait this.soundPool!.stop(this.streamId);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用unload方法卸载音频资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 卸载音频资源。\nawait this.soundPool!.unload(this.soundId);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用off('loadComplete')方法注销加载完成监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "await this.soundPool!.off('loadComplete');\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用off('playFinished')方法注销播放完成监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "await this.soundPool!.off('playFinished');\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用off('error')方法注销错误类型监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "await this.soundPool!.off('error');\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用release方法释放SoundPool实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 释放SoundPool。\nawait this.soundPool!.release();\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行示例工程",
      children: "运行示例工程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参考以下示例，使用SoundPool进行低时延播放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新建工程，下载", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/Media/SoundPool/SoundPoolArkTS",
            children: "完整示例工程"
          }), "，并将示例工程的资源复制到对应目录。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "SoundPoolArkTS\nentry/src/main/ets/\n└── pages\n    └── Index.ets (播放界面)\nentry/src/main/resources/\n├── base\n│   ├── element\n│   │   ├── color.json\n│   │   ├── float.json\n│   │   └── string.json\n│   └── media\n│\n└── rawfile\n    └── test.ogg (音频资源)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编译新建工程并运行。"
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
347700(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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