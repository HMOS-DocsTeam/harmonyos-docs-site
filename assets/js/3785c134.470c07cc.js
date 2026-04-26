"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["339534"], {
273643(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avsession_kit_distributed_avsession_using_switch_call_devices_using_switch_call_devices_md_378_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avsession-kit-distributed-avsession-using-switch-call-devices-using-switch-call-devices-md-378.json
var site_docs_avsession_kit_distributed_avsession_using_switch_call_devices_using_switch_call_devices_md_378_namespaceObject = JSON.parse('{"id":"avsession-kit/distributed-avsession/using-switch-call-devices/using-switch-call-devices","title":"使用通话设备切换组件","description":"切换通话输出设备","source":"@site/docs/avsession-kit/distributed-avsession/using-switch-call-devices/using-switch-call-devices.md","sourceDirName":"avsession-kit/distributed-avsession/using-switch-call-devices","slug":"/avsession-kit/distributed-avsession/using-switch-call-devices/","permalink":"/harmonyos-docs-site/avsession-kit/distributed-avsession/using-switch-call-devices/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用通话设备切换组件","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-switch-call-devices","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"后台播放","permalink":"/harmonyos-docs-site/avsession-kit/local-avsession/avsession-background-scene/"},"next":{"title":"播控特性简介","permalink":"/harmonyos-docs-site/avsession-kit/distributed-avsession/distributed-playback/distributed-playback-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avsession-kit/distributed-avsession/using-switch-call-devices/using-switch-call-devices.md


const frontMatter = {
	title: '使用通话设备切换组件',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-switch-call-devices',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用通话设备切换组件';

const assets = {

};



const toc = [{
  "value": "切换通话输出设备",
  "id": "切换通话输出设备",
  "level": 2
}, {
  "value": "默认样式实现",
  "id": "默认样式实现",
  "level": 3
}, {
  "value": "自定义样式实现",
  "id": "自定义样式实现",
  "level": 3
}, {
  "value": "切换通话输入设备（仅在PC/2in1设备可用）",
  "id": "切换通话输入设备仅在pc2in1设备可用",
  "level": 2
}, {
  "value": "默认实现方式",
  "id": "默认实现方式",
  "level": 3
}, {
  "value": "自定义实现方式",
  "id": "自定义实现方式",
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
        id: "使用通话设备切换组件",
        children: "使用通话设备切换组件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "切换通话输出设备",
      children: "切换通话输出设备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文主要介绍AVCastPicker组件接入，实现通话设备切换功能。相关参数可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-comp/ohos-multimedia-avcastpicker/ohos-multimedia-avcastpicker",
        children: "@ohos.multimedia.avCastPicker(投播组件)"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-arkts/js-apis-avcastpickerparam/js-apis-avcastpickerparam",
        children: "@ohos.multimedia.avCastPickerParam（投播组件参数）"
      }), "。如果希望实现音频输出设备路由切换的效果，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-device/audio-output-device-switcher",
        children: "实现音频输出设备路由切换"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前系统支持两种组件样式的显示方式：默认样式显示和自定义样式显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果应用选择显示默认样式，当设备切换时，系统将根据当前选择的设备显示系统默认的组件样式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果应用选择显示自定义样式，那么需要应用根据设备的变化刷新自己定义的样式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "默认样式实现",
      children: "默认样式实现"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建voice_call类型的AVSession，AVSession在构造方法中支持不同的类型参数，由AVSessionType定义，voice_call表示通话类型，如果不创建，将显示空列表。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AVCastPicker, AVCastPickerState, AVInputCastPicker, avSession } from '@kit.AVSessionKit';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = '模拟通话';\n  @State session: avSession.AVSession | undefined = undefined;\n  @State context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  // ...\n\n  async init() {\n    try {\n      let context = this.getUIContext().getHostContext() as Context;\n      // 通话开始时创建voice_call类型的avsession。\n      this.session = await avSession.createAVSession(context, 'voiptest', 'voice_call');\n    } catch (err) {\n      console.error(`AVSession create :  Error: Code: ${err.code}, message: ${err.message}`);\n    }\n    // ...\n  }\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在需要切换设备的通话界面创建AVCastPicker组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AVCastPicker } from '@kit.AVSessionKit';\n\n@Entry\n@Component\nstruct OutputCastPicker {\n  @State normalColor:Color = Color.White;\n  @State activeColor:Color = Color.Blue;\n  @State pickerImage: ResourceStr = $r('app.media.sound'); // 自定义资源。\n  // ...\n  // 创建组件，并设置大小。\n  build() {\n    Row() {\n      Column() {\n        AVCastPicker({\n          normalColor: this.normalColor,\n          activeColor: this.activeColor,\n          customPicker: this.ImageBuilder.bind(this), // 新增自定义参数。\n        })\n          .size({ width: '50%', height: '20%' })\n          .id('AVCastPicker')\n        // ...\n      }\n      .width('100%')\n      .alignItems(HorizontalAlign.Center)\n    }\n    .alignItems(VerticalAlign.Center)\n    .width('100%')\n    .height('100%')\n  }\n\n  // 自定义内容。\n  @Builder\n  ImageBuilder() {\n    Text($r('app.string.switch_OutputDevice'))\n    Image(this.pickerImage)\n      .size({ width: '100%', height: '100%' })\n      .backgroundColor('#00000000')\n      .fillColor(Color.Black)\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "或者创建AVCastPickerHelper组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { avSession } from '@kit.AVSessionKit';\n\nclass MyPage {\n  private avCastPicker: avSession.AVCastPickerHelper;\n\n  constructor(context: common.UIAbilityContext) {\n    this.avCastPicker = new avSession.AVCastPickerHelper(context);\n  }\n\n  async selectCastDevice() {\n    const avCastPickerOptions: avSession.AVCastPickerOptions = {\n      sessionType: 'video',\n    };\n\n    this.avCastPicker.select(avCastPickerOptions).then(() => {\n      console.info('select successfully');\n    }).catch((err: BusinessError) => {\n      console.error('AVCastPicker.select failed with err: ${err.code}, ${err.message}');\n    });\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建VOICE_COMMUNICATION类型的AudioRenderer，并开始播放。具体通话音频播放等实现，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/audio-kit/audio-call/audio-call-development",
            children: "开发音频通话功能"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { audio } from '@kit.AudioKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\nimport { resourceManager } from '@kit.LocalizationKit';\nimport { fileIo } from '@kit.CoreFileKit';\n\nclass Options {\n  public offset: number = 0;\n  public length: number = 0;\n}\nexport default class AudioRenderer {\n  private audioRenderer: audio.AudioRenderer | undefined = undefined;\n  private audioStreamInfo: audio.AudioStreamInfo = {\n    // 请按照实际场景设置，当前参数仅参考。\n    samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // 采样率。\n    channels: audio.AudioChannel.CHANNEL_2, // 通道。\n    sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // 采样格式。\n    encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // 编码格式。\n  }\n  public appContext?: common.UIAbilityContext | undefined = undefined;\n  private audioSource = 'test1.wav';\n  private fileDescriptor?: resourceManager.RawFileDescriptor | undefined = undefined;\n  // ...\n  async getStageFileDescriptor(fileName: string): Promise<resourceManager.RawFileDescriptor | undefined> {\n    let fileDescriptor: resourceManager.RawFileDescriptor | undefined = undefined;\n    if (this.appContext) {\n      let mgr = this.appContext.resourceManager;\n      this.fileDescriptor = mgr.getRawFdSync(fileName);\n      await mgr.getRawFd(fileName).then(value => {\n        fileDescriptor = value;\n        console.info('case getRawFileDescriptor success fileName: ' + fileName);\n      }).catch((error: BusinessError) => {\n        console.error('case getRawFileDescriptor err: ' + error);\n      });\n    }\n    return fileDescriptor;\n  }\n\n  async startRenderer(): Promise<void> {\n    if (this.audioRenderer !== undefined) {\n      return;\n    }\n    this.getStageFileDescriptor(this.audioSource).then((res) => {\n      this.fileDescriptor = res;\n    });\n    if (!this.fileDescriptor) {\n      return;\n    }\n    let file: resourceManager.RawFileDescriptor = this.fileDescriptor;\n    try {\n      this.audioRenderer = await audio.createAudioRenderer(this.audioRendererOption);\n    } catch (error) {\n      console.error(`audioRenderer create : Error: ${JSON.stringify(error)}`);\n      return;\n    }\n    let bufferSize: number = this.fileDescriptor.offset;\n    let writeDataCallback = (buffer: ArrayBuffer) => {\n      let options: Options = {\n        offset: bufferSize,\n        length: buffer.byteLength\n      }\n      fileIo.readSync(file.fd, buffer, options);\n      bufferSize += buffer.byteLength;\n    };\n    this.audioRenderer.on('writeData', writeDataCallback);\n    await this.audioRenderer.start();\n  }\n\n  async stopRenderer(): Promise<void> {\n    if (this.audioRenderer) {\n      await this.audioRenderer.release();\n      this.audioRenderer = undefined;\n    }\n    if (this.fileDescriptor) {\n      this.closeResource(this.audioSource);\n      this.fileDescriptor = undefined;\n    }\n  }\n\n  async closeResource(fileName: string): Promise<void> {\n    if (this.appContext) {\n      let mgr = this.appContext.resourceManager;\n      await mgr.closeRawFd(fileName).then(() => {\n        console.info('case closeRawFd success fileName: ' + fileName);\n      }).catch((error: BusinessError) => {\n        console.error('case closeRawFd err: ' + error);\n      });\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）如果应用想知道设备切换情况，可以监听当前发声设备切换回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { audio } from '@kit.AudioKit';\n// ...\nexport default class AudioRenderer {\n  // ...\n  private audioManager: audio.AudioManager | undefined = undefined;\n  private audioRoutingManager: audio.AudioRoutingManager | undefined = undefined;\n  private audioRendererInfo: audio.AudioRendererInfo = {\n    // 需使用通话场景相应的参数。\n    usage: audio.StreamUsage.STREAM_USAGE_VIDEO_COMMUNICATION, // 音频流使用类型：VOIP视频通话，默认为扬声器。\n    rendererFlags: 0 // 音频渲染器标志：默认为0即可。\n  }\n  private  audioRendererOption: audio.AudioRendererOptions = {\n    streamInfo: this.audioStreamInfo,\n    rendererInfo: this.audioRendererInfo\n  };\n\n  async observerDevices() {\n    this.audioManager = audio.getAudioManager(); // 先创建audiomanager。\n    if (!this.audioManager) {\n      console.error('get audioManager failed');\n      return;\n    }\n    // 再调用AudioManager的方法创建AudioRoutingManager实例。\n    this.audioRoutingManager = this.audioManager.getRoutingManager();\n    if(!this.audioRoutingManager) {\n      return;\n    }\n    // 可选监听当前发声设备切换回调。\n    this.audioRoutingManager.on('preferOutputDeviceChangeForRendererInfo', this.audioRendererInfo, (desc: audio.AudioDeviceDescriptors) => {\n      console.info(`device change to: ${desc[0].deviceType}`); // 设备类型。\n    });\n  }\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通话结束后，销毁会话。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通话结束销毁第一步创建的session。\nthis.session?.destroy((err) => {\n  if (err) {\n    console.error(`Failed to destroy session. Code: ${err.code}, message: ${err.message}`);\n  } else {\n    console.info(`Destroy : SUCCESS `);\n  }\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义样式实现",
      children: "自定义样式实现"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义样式通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
        children: "CustomBuilder"
      }), "类型的参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-comp/ohos-multimedia-avcastpicker/ohos-multimedia-avcastpicker#avcastpicker",
        children: "customPicker"
      }), "实现。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["实现自定义样式的步骤与实现默认样式基本相同，开发者可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F%E5%AE%9E%E7%8E%B0",
        children: "默认样式实现"
      }), "，完成创建AVSession、实现音频播放等步骤。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "存在差异的步骤如下所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建自定义AVCastPicker，需要新增自定义参数（对应默认样式实现步骤2）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AVCastPicker } from '@kit.AVSessionKit';\n// ...\n\n@Entry\n@Component\nstruct SelfCastPicker {\n  @State pickerImage: ResourceStr = $r('app.media.earpiece'); // 自定义资源。\n  // ...\n  build() {\n    Row() {\n      Column() {\n        AVCastPicker(\n          {\n            customPicker: (): void => this.ImageBuilder() // 新增自定义参数。\n          }\n        ).size({ height: 45, width: 45 })\n      }\n    }\n  }\n\n  // 自定义内容。\n  @Builder\n  ImageBuilder() {\n    Image(this.pickerImage)\n      .size({ width: '100%', height: '100%' })\n      .backgroundColor('#00000000')\n      .fillColor(Color.Black)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果应用要根据出声设备变化而改变自定义样式，必须监听设备切换，然后实时刷新自定义样式（对应默认样式实现步骤4）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { audio } from '@kit.AudioKit';\n\n@Entry\n@Component\nstruct SelfCastPicker {\n  // ...\n  async selfObserverDevices() {\n    let audioManager = audio.getAudioManager();\n    let audioRoutingManager = audioManager.getRoutingManager();\n\n    // 初次拉起AVCastPicker时需获取当前设备,刷新显示。\n    this.changePickerShow(audioRoutingManager.getPreferredOutputDeviceForRendererInfoSync(this.audioRendererInfo));\n\n    // 监听当前发声设备切换，及时根据不同设备类型显示不同的样式。\n    audioRoutingManager.on('preferOutputDeviceChangeForRendererInfo', this.audioRendererInfo, (desc: audio.AudioDeviceDescriptors) => {\n      this.changePickerShow(audioRoutingManager.getPreferredOutputDeviceForRendererInfoSync(this.audioRendererInfo));\n    });\n  }\n\n  // 设备更新后刷新自定义资源pickerImage。\n  private changePickerShow(desc: audio.AudioDeviceDescriptors) {\n    if(!desc || !desc.length || !desc[0]) {\n      return;\n    }\n    if (desc[0].deviceType === 2) {\n      this.pickerImage = $r('app.media.sound');\n    } else if (desc[0].deviceType === 7) {\n      this.pickerImage = $r('app.media.bluetooth');\n    } else {\n      this.pickerImage = $r('app.media.earpiece');\n    }\n  }\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "切换通话输入设备仅在pc2in1设备可用",
      children: "切换通话输入设备（仅在PC/2in1设备可用）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统不再提供音频输入设备切换的API，如果需要在应用内切换音频输入设备，并实现AVInputCastPicker组件，相关参数可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-comp/ohos-multimedia-avinputcastpicker/ohos-multimedia-avinputcastpicker",
        children: "@ohos.multimedia.avInputCastPicker"
      }), " 和 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-arkts/js-apis-avcastpickerparam/js-apis-avcastpickerparam",
        children: "@ohos.multimedia.avCastPickerParam"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文将主要介绍AVInputCastPicker组件接入，实现通话输入设备切换功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前系统支持两种组件样式的显示方式：默认样式显示和自定义样式显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果应用选择显示默认样式，当设备切换时，系统将根据当前选择的设备显示系统默认的组件样式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果应用选择显示自定义样式，那么需要应用根据设备的变化刷新自己定义的样式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "默认实现方式",
      children: "默认实现方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在需要切换设备的通话界面创建AVInputCastPicker组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AVCastPickerState, AVInputCastPicker } from '@kit.AVSessionKit';\n\n// ...\n  // 设备列表显示状态变化回调（可选）。\n  private onStateChange(state: AVCastPickerState) {\n    if (state === AVCastPickerState.STATE_APPEARING) {\n      console.info('The picker starts showing.');\n    } else if (state === AVCastPickerState.STATE_DISAPPEARING) {\n      console.info('The picker finishes presenting.');\n    }\n  }\n\n  // 创建组件，并设置大小。\n  build() {\n    Row() {\n      Column() {\n        AVInputCastPicker(\n          {\n            onStateChange: this.onStateChange\n          }\n        ).size({ height: 45, width: 45 })\n      }\n    }\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["实现通话功能，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/audio-kit/audio-call/audio-call-development",
            children: "开发音频通话功能"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义实现方式",
      children: "自定义实现方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义样式通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/avsession-api/avsession-comp/ohos-multimedia-avinputcastpicker/ohos-multimedia-avinputcastpicker#avinputcastpicker",
        children: "AVInputCastPicker"
      }), "中的参数customPicker实现。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建自定义AVInputCastPicker，需要新增自定义参数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AVCastPickerState, AVInputCastPicker } from '@kit.AVSessionKit';\n\n@Entry\n@Component\nstruct InputCastPicker {\n  @State pickerImage: ResourceStr = $r('app.media.sound'); // 自定义资源。\n  // ...\n\n  // 设备列表显示状态变化回调（可选）。\n  private onStateChange(state: AVCastPickerState) {\n    if (state === AVCastPickerState.STATE_APPEARING) {\n      console.info('The picker starts showing.');\n    } else if (state === AVCastPickerState.STATE_DISAPPEARING) {\n      console.info('The picker finishes presenting.');\n    }\n  }\n\n  build() {\n    Row() {\n      Column() {\n        AVInputCastPicker(\n          {\n            customPicker: this.ImageBuilder.bind(this), // 新增自定义参数。\n            onStateChange: this.onStateChange\n          }\n        )\n          .size({ width: '50%', height: '20%' })\n          .id('AVInputCastPicker')\n        // ...\n      }\n      .width('100%')\n      .alignItems(HorizontalAlign.Center)\n    }\n    .alignItems(VerticalAlign.Center)\n    .width('100%')\n    .height('100%')\n  }\n\n  // 自定义内容。\n  @Builder\n  ImageBuilder() {\n    Text($r('app.string.switch_InputDevice'))\n    Image(this.pickerImage)\n      .size({ width: '100%', height: '100%' })\n      .backgroundColor('#00000000')\n      .fillColor(Color.Black)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["实现通话功能，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/audio-kit/audio-call/audio-call-development",
            children: "开发音频通话功能"
          }), "。"]
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