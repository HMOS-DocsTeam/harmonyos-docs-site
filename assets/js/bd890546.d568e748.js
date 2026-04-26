"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["885596"], {
448357(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_audio_kit_audio_call_audio_call_development_audio_call_development_md_bd8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-audio-kit-audio-call-audio-call-development-audio-call-development-md-bd8.json
var site_docs_audio_kit_audio_call_audio_call_development_audio_call_development_md_bd8_namespaceObject = JSON.parse('{"id":"audio-kit/audio-call/audio-call-development/audio-call-development","title":"开发音频通话功能","description":"在音频通话场景下，音频输出（播放对端声音）和音频输入（录制本端声音）会同时进行，应用可以通过使用AudioRenderer来实现音频输出，通过使用AudioCapturer来实现音频输入，同时使用AudioRenderer和AudioCapturer即可实现音频通话功能。","source":"@site/docs/audio-kit/audio-call/audio-call-development/audio-call-development.md","sourceDirName":"audio-kit/audio-call/audio-call-development","slug":"/audio-kit/audio-call/audio-call-development/","permalink":"/harmonyos-docs-site/audio-kit/audio-call/audio-call-development/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"开发音频通话功能","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-call-development","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"音频通话开发概述","permalink":"/harmonyos-docs-site/audio-kit/audio-call/audio-call-overview/"},"next":{"title":"提升音频性能体验","permalink":"/harmonyos-docs-site/audio-kit/audio-performance-optimization/audio-performance/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/audio-kit/audio-call/audio-call-development/audio-call-development.md


const frontMatter = {
	title: '开发音频通话功能',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/audio-call-development',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '开发音频通话功能';

const assets = {

};



const toc = [{
  "value": "使用AudioRenderer播放对端的通话声音",
  "id": "使用audiorenderer播放对端的通话声音",
  "level": 2
}, {
  "value": "使用AudioCapturer录制本端的通话声音",
  "id": "使用audiocapturer录制本端的通话声音",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "开发音频通话功能",
        children: "开发音频通话功能"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在音频通话场景下，音频输出（播放对端声音）和音频输入（录制本端声音）会同时进行，应用可以通过使用AudioRenderer来实现音频输出，通过使用AudioCapturer来实现音频输入，同时使用AudioRenderer和AudioCapturer即可实现音频通话功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在音频通话开始和结束时，应用可以自行检查当前的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-call/audio-call-overview#%E9%9F%B3%E9%A2%91%E5%9C%BA%E6%99%AF%E6%A8%A1%E5%BC%8F",
        children: "音频场景模式"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-call/audio-call-overview#%E9%93%83%E5%A3%B0%E6%A8%A1%E5%BC%8F",
        children: "铃声模式"
      }), "，以便采取合适的音频管理及提示策略。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下代码示范了同时使用AudioRenderer和AudioCapturer实现音频通话功能的基本过程，其中未包含音频通话数据的传输过程，实际开发中，需要将网络传输来的对端通话数据解码播放，此处仅以读取音频文件的数据代替；同时需要将本端录制的通话数据编码打包，通过网络发送给对端，此处仅以将数据写入音频文件代替。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例为片段代码，可通过点击示例代码右下方的链接获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/Media/Audio/VoipCallSampleJS",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用audiorenderer播放对端的通话声音",
      children: "使用AudioRenderer播放对端的通话声音"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该过程与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-playback/using-audiorenderer-for-playback",
        children: "使用AudioRenderer开发音频播放功能(ArkTs)"
      }), "过程相似，关键区别在于audioRendererInfo参数和音频数据来源。audioRendererInfo参数中，音频流使用类型usage需设置为VoIP通话：STREAM_USAGE_VOICE_COMMUNICATION。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit'; // 导入audio模块。\nimport { BusinessError } from '@kit.BasicServicesKit'; // 导入BusinessError。\nimport { fileIo as fs } from '@kit.CoreFileKit'; // 导入文件操作模块。\nimport { common } from '@kit.AbilityKit'; // 导入UIAbilityContext。\n\n// 与使用AudioRenderer开发音频播放功能过程相似,关键区别在于audioRendererInfo参数和音频数据来源。\nconst TAG = 'VoIPDemoForAudioRenderer';\n\nclass Options {\n  public offset?: number;\n  public length?: number;\n}\n\nlet bufferSize: number = 0;\nlet audioRenderer: audio.AudioRenderer | undefined = undefined;\nlet audioStreamInfo: audio.AudioStreamInfo = {\n  samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // 采样率。\n  channels: audio.AudioChannel.CHANNEL_2, // 通道。\n  sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // 采样格式。\n  encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // 编码格式。\n};\nlet audioRendererInfo: audio.AudioRendererInfo = {\n  // 需使用通话场景相应的参数。\n  usage: audio.StreamUsage.STREAM_USAGE_VOICE_COMMUNICATION, // 音频流使用类型:VoIP通话。\n  rendererFlags: 0 // 音频渲染器标志:默认为0即可。\n};\nlet audioRendererOptions: audio.AudioRendererOptions = {\n  streamInfo: audioStreamInfo,\n  rendererInfo: audioRendererInfo\n};\nlet file: fs.File;\nlet writeDataCallback: audio.AudioRendererWriteDataCallback;\n// ...\nasync function initArguments(context: common.UIAbilityContext) {\n  let path = context.cacheDir;\n  // 此处仅作示例,实际使用时需要将文件替换为应用要播放的PCM文件。\n  let filePath = path + '/StarWars10s-2C-48000-4SW.pcm';\n  file = fs.openSync(filePath, fs.OpenMode.READ_ONLY);\n  writeDataCallback = (buffer: ArrayBuffer) => {\n    let options: Options = {\n      offset: bufferSize,\n      length: buffer.byteLength\n    };\n\n    try {\n      let bufferLength = fs.readSync(file.fd, buffer, options);\n      bufferSize += buffer.byteLength;\n      // 如果当前回调传入的数据不足一帧,空白区域需要使用静音数据填充,否则会导致播放出现杂音。\n      if (bufferLength < buffer.byteLength) {\n        let view = new DataView(buffer);\n        for (let i = bufferLength; i < buffer.byteLength; i++) {\n          // 空白区域填充静音数据。当使用音频采样格式为SAMPLE_FORMAT_U8时0x7F为静音数据,使用其他采样格式时0为静音数据。\n          view.setUint8(i, 0);\n        }\n      }\n      // API version 11不支持返回回调结果,从API version 12开始支持返回回调结果。\n      // 如果开发者不希望播放某段buffer,返回audio.AudioDataCallbackResult.INVALID即可。\n      return audio.AudioDataCallbackResult.VALID;\n    } catch (error) {\n      console.error('Error reading file:', error);\n\n      if (globalLogUpdate) {\n        globalLogUpdate(`Error reading file: ${error}`, true);\n      }\n      // API version 11不支持返回回调结果,从API version 12开始支持返回回调结果。\n      return audio.AudioDataCallbackResult.INVALID;\n    }\n  };\n}\n\n// 初始化,创建实例,设置监听事件。\nasync function init() {\n  audio.createAudioRenderer(audioRendererOptions, (err, renderer) => { // 创建AudioRenderer实例。\n    if (!err) {\n      console.info(`${TAG}: creating AudioRenderer success`);\n      // ...\n      audioRenderer = renderer;\n      if (audioRenderer !== undefined) {\n        audioRenderer.on('writeData', writeDataCallback);\n      }\n    } else {\n      console.info(`${TAG}: creating AudioRenderer failed, error: ${err.message}`);\n      // ...\n    }\n  });\n}\n\n// 开始一次音频渲染。\nasync function start() {\n  if (audioRenderer !== undefined) {\n    let stateGroup = [audio.AudioState.STATE_PREPARED, audio.AudioState.STATE_PAUSED, audio.AudioState.STATE_STOPPED];\n    if (stateGroup.indexOf(audioRenderer.state.valueOf()) === -1) { // 当且仅当状态为prepared、paused和stopped之一时才能启动渲染。\n      console.error(TAG + 'start failed');\n      // ...\n      return;\n    }\n    // 启动渲染。\n    audioRenderer.start((err: BusinessError) => {\n      if (err) {\n        console.error('Renderer start failed.');\n        // ...\n      } else {\n        console.info('Renderer start success.');\n        // ...\n      }\n    });\n  }\n}\n\n// 暂停渲染。\nasync function pause() {\n  if (audioRenderer !== undefined) {\n    // 只有渲染器状态为running的时候才能暂停。\n    if (audioRenderer.state.valueOf() !== audio.AudioState.STATE_RUNNING) {\n      console.info('Renderer is not running');\n      // ...\n      return;\n    }\n    // 暂停渲染。\n    audioRenderer.pause((err: BusinessError) => {\n      if (err) {\n        console.error('Renderer pause failed.');\n        // ...\n      } else {\n        console.info('Renderer pause success.');\n        // ...\n      }\n    });\n  }\n}\n\n// 停止渲染。\nasync function stop() {\n  if (audioRenderer !== undefined) {\n    // 只有渲染器状态为running或paused的时候才可以停止。\n    if (audioRenderer.state.valueOf() !== audio.AudioState.STATE_RUNNING &&\n      audioRenderer.state.valueOf() !== audio.AudioState.STATE_PAUSED) {\n      console.info('Renderer is not running or paused.');\n      // ...\n      return;\n    }\n    // 停止渲染。\n    audioRenderer.stop((err: BusinessError) => {\n      if (err) {\n        console.error('Renderer stop failed.');\n        // ...\n      } else {\n        fs.close(file);\n        console.info('Renderer stop success.');\n        // ...\n      }\n    });\n  }\n}\n\n// 销毁实例,释放资源。\nasync function release() {\n  if (audioRenderer !== undefined) {\n    // 渲染器状态不是released状态,才能release。\n    if (audioRenderer.state.valueOf() === audio.AudioState.STATE_RELEASED) {\n      console.info('Renderer already released');\n      // ...\n      return;\n    }\n    // 释放资源。\n    audioRenderer.release((err: BusinessError) => {\n      if (err) {\n        console.error('Renderer release failed.');\n        // ...\n      } else {\n        console.info('Renderer release success.');\n        // ...\n      }\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用audiocapturer录制本端的通话声音",
      children: "使用AudioCapturer录制本端的通话声音"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该过程与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/audio-kit/audio-recording/using-audiocapturer-for-recording",
        children: "使用AudioCapturer开发音频录制功能(ArkTs)"
      }), "过程相似，关键区别在于audioCapturerInfo参数和音频数据流向。audioCapturerInfo参数中音源类型source需设置为语音通话：SOURCE_TYPE_VOICE_COMMUNICATION。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["所有录制均需要申请麦克风权限：ohos.permission.MICROPHONE，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
        children: "向用户申请授权"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { audio } from '@kit.AudioKit'; // 导入audio模块。\nimport { BusinessError } from '@kit.BasicServicesKit'; // 导入BusinessError。\nimport { fileIo as fs } from '@kit.CoreFileKit'; // 导入文件操作模块。\nimport { common, abilityAccessCtrl, PermissionRequestResult } from '@kit.AbilityKit'; // 导入UIAbilityContext。\n// 与使用AudioCapturer开发音频录制功能过程相似,关键区别在于audioCapturerInfo参数和音频数据流向。\nconst TAG = 'VoIPDemoForAudioCapturer';\n\nclass Options {\n  public offset?: number;\n  public length?: number;\n}\n\nlet bufferSize: number = 0;\nlet audioCapturer: audio.AudioCapturer | undefined = undefined;\nlet audioStreamInfo: audio.AudioStreamInfo = {\n  samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // 采样率。\n  channels: audio.AudioChannel.CHANNEL_2, // 通道。\n  sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // 采样格式。\n  encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // 编码格式。\n};\nlet audioCapturerInfo: audio.AudioCapturerInfo = {\n  // 需使用通话场景相应的参数。\n  source: audio.SourceType.SOURCE_TYPE_VOICE_COMMUNICATION, // 音源类型:语音通话。\n  capturerFlags: 0 // 音频采集器标志:默认为0即可。\n};\nlet audioCapturerOptions: audio.AudioCapturerOptions = {\n  streamInfo: audioStreamInfo,\n  capturerInfo: audioCapturerInfo\n};\nlet file: fs.File;\nlet readDataCallback: Callback<ArrayBuffer>;\n\n// ...\n\nasync function initArguments(context: common.UIAbilityContext) {\n  let path = context.cacheDir;\n  let filePath = path + '/StarWars10s-2C-48000-4SW.pcm';\n  file = fs.openSync(filePath, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);\n  console.info(`File opened: ${filePath}`);\n\n  readDataCallback = (buffer: ArrayBuffer) => {\n    let options: Options = {\n      offset: bufferSize,\n      length: buffer.byteLength\n    }\n    fs.writeSync(file.fd, buffer, options);\n    bufferSize += buffer.byteLength;\n  }\n}\n\n// 初始化,创建实例,设置监听事件。\nasync function init() {\n  audio.createAudioCapturer(audioCapturerOptions, (err, capturer) => { // 创建AudioCapturer实例。\n    if (err) {\n      console.error(`Invoke createAudioCapturer failed, code is ${err.code}, message is ${err.message}`);\n      // ...\n      return;\n    }\n    console.info(`${TAG}: create AudioCapturer success`);\n    // ...\n    audioCapturer = capturer;\n    if (audioCapturer !== undefined) {\n      audioCapturer.on('readData', readDataCallback);\n    }\n  });\n}\n\n// 开始一次音频采集。\nasync function start() {\n  if (audioCapturer !== undefined) {\n    let stateGroup = [audio.AudioState.STATE_PREPARED, audio.AudioState.STATE_PAUSED, audio.AudioState.STATE_STOPPED];\n    if (stateGroup.indexOf(audioCapturer.state.valueOf()) === -1) {\n      // 当且仅当状态为STATE_PREPARED、STATE_PAUSED和STATE_STOPPED之一时才能启动采集。\n      console.error(`${TAG}: start failed`);\n      // ...\n      return;\n    }\n\n    // 启动采集。\n    audioCapturer.start((err: BusinessError) => {\n      if (err) {\n        console.error('Capturer start failed.');\n        // ...\n      } else {\n        console.info('Capturer start success.');\n        // ...\n      }\n    });\n  }\n}\n\n// 停止采集。\nasync function stop() {\n  if (audioCapturer !== undefined) {\n    // 只有采集器状态为STATE_RUNNING或STATE_PAUSED的时候才可以停止。\n    if (audioCapturer.state.valueOf() !== audio.AudioState.STATE_RUNNING &&\n      audioCapturer.state.valueOf() !== audio.AudioState.STATE_PAUSED) {\n      console.info('Capturer is not running or paused');\n      // ...\n      return;\n    }\n\n    // 停止采集。\n    audioCapturer.stop((err: BusinessError) => {\n      if (err) {\n        console.error('Capturer stop failed.');\n        // ...\n      } else {\n        fs.close(file);\n        console.info('Capturer stop success.');\n        // ...\n      }\n    });\n  }\n}\n\n// 销毁实例,释放资源。\nasync function release() {\n  if (audioCapturer !== undefined) {\n    // 采集器状态不是STATE_RELEASED或STATE_NEW状态,才能release。\n    if (audioCapturer.state.valueOf() === audio.AudioState.STATE_RELEASED ||\n      audioCapturer.state.valueOf() === audio.AudioState.STATE_NEW) {\n      console.info('Capturer already released');\n      // ...\n      return;\n    }\n\n    // 释放资源。\n    audioCapturer.release((err: BusinessError) => {\n      if (err) {\n        console.error('Capturer release failed.');\n        // ...\n      } else {\n        console.info('Capturer release success.');\n        // ...\n      }\n    });\n  }\n}\n"
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