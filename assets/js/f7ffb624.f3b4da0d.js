"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["932521"], {
688863(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_recording_case_camera_recording_case_md_f7f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-recording-case-camera-recording-case-md-f7f.json
var site_docs_camera_kit_camera_dev_arkts_camera_recording_case_camera_recording_case_md_f7f_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-recording-case/camera-recording-case","title":"录像实践(ArkTS)","description":"在开发相机应用时，需要先申请相关权限。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-recording-case/camera-recording-case.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-recording-case","slug":"/camera-kit/camera-dev-arkts/camera-recording-case/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-recording-case/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"录像实践(ArkTS)","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-recording-case","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"录像(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-recording/"},"next":{"title":"元数据(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-metadata/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-recording-case/camera-recording-case.md


const frontMatter = {
	title: '录像实践(ArkTS)',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-recording-case',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '录像实践(ArkTS)';

const assets = {

};



const toc = [{
  "value": "开发流程",
  "id": "开发流程",
  "level": 2
}, {
  "value": "完整示例",
  "id": "完整示例",
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
        id: "录像实践arkts",
        children: "录像实践(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发相机应用时，需要先", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-preparation",
        children: "申请相关权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前示例提供完整的录像流程介绍，方便开发者了解完整的接口调用顺序。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在参考以下示例前，建议开发者查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-arkts-mandatory/camera-device-management",
        children: "相机开发指导(ArkTS)"
      }), "的具体章节，了解", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-arkts-mandatory/camera-device-input",
        children: "设备输入"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-arkts-mandatory/camera-session-management",
        children: "会话管理"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-arkts/camera-recording",
        children: "录像"
      }), "等单个流程。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如需要将视频保存到媒体库中可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/medialibrary-kit/photoaccesshelper-savebutton",
        children: "保存媒体库资源"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在获取到相机支持的输出流能力后，开始创建录像流，开发流程如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(739586)/* ["default"] */.A) + "",
        width: "830",
        height: "1398"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Context获取方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
        children: "获取UIAbility的上下文信息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { camera } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { media } from '@kit.MediaKit';\nimport { common } from '@kit.AbilityKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { JSON } from '@kit.ArkTS';\n\ninterface RecordingResources {\n  avRecorder?: media.AVRecorder;\n  videoOutput?: camera.VideoOutput;\n  cameraInput?: camera.CameraInput;\n  previewOutput?: camera.PreviewOutput;\n  videoSession?: camera.VideoSession;\n  file?: fileIo.File;\n}\n\n// 全局资源跟踪。\nconst resources: RecordingResources = {};\n\nasync function releaseResources(): Promise<void> {\n  const releaseSteps = [\n  // 停止录像。\n    async () => await resources.avRecorder?.stop().catch((e: BusinessError) => console.error('停止录像失败:', e)),\n    // 停止视频输出。\n    async () => await resources.videoOutput?.stop().catch((e: BusinessError) => console.error('停止视频输出失败:', e)),\n    // 停止会话。\n    async () => await resources.videoSession?.stop().catch((e: BusinessError) => console.error('停止会话失败:', e)),\n    // 释放录像器。\n    async () => await resources.avRecorder?.release().catch((e: BusinessError) => console.error('释放录像器失败:', e)),\n    // 关闭相机输入。\n    async () => await resources.cameraInput?.close().catch((e: BusinessError) => console.error('关闭相机输入失败:', e)),\n    // 释放视频输出。\n    async () => await resources.videoOutput?.release().catch((e: BusinessError) => console.error('释放视频输出失败:', e)),\n    // 释放预览输出。\n    async () => await resources.previewOutput?.release().catch((e: BusinessError) => console.error('释放预览输出失败:', e)),\n    // 释放会话。\n    async () => await resources.videoSession?.release().catch((e: BusinessError) => console.error('释放会话失败:', e)),\n    // 关闭文件。\n    async () => {\n      if (resources.file) {\n        try {\n          await fileIo.close(resources.file);\n        } catch (e) {\n          console.error('Failure to close file');\n        }\n      }\n    },\n  ];\n\n  // 按顺序执行释放步骤。\n  for (const step of releaseSteps) {\n    await step();\n  }\n  // 清空资源引用。\n  resources.avRecorder = undefined;\n  resources.videoOutput = undefined;\n  resources.cameraInput = undefined;\n  resources.previewOutput = undefined;\n  resources.videoSession = undefined;\n  resources.file = undefined;\n}\n\nasync function videoRecording(context: common.Context, surfaceId: string): Promise<void> {\n  // 创建CameraManager对象。\n  let cameraManager: camera.CameraManager | undefined = undefined;\n  try {\n    cameraManager = camera.getCameraManager(context);\n  } catch (error) {\n    console.error(`getCameraManager call failed, error: ${JSON.stringify(error)}`);\n  }\n\n  if (!cameraManager) {\n    console.error(\"cameraManager is null\");\n    return;\n  }\n\n  // 获取相机列表。\n  let cameraArray: Array<camera.CameraDevice> = [];\n  try {\n    cameraArray = cameraManager.getSupportedCameras();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`getSupportedCameras call failed. error code: ${JSON.stringify(err)}`);\n  }\n\n  if (!cameraArray || cameraArray.length <= 0) {\n    console.error(\"cameraManager.getSupportedCameras error\");\n    return;\n  }\n\n  // 获取支持的模式类型。\n  let sceneModes: Array<camera.SceneMode> = cameraManager.getSupportedSceneModes(cameraArray[0]);\n  let isSupportVideoMode: boolean = sceneModes.indexOf(camera.SceneMode.NORMAL_VIDEO) >= 0;\n  if (!isSupportVideoMode) {\n    console.error('video mode not support');\n    return;\n  }\n\n  // 示例代码默认选择第一个镜头，实际开发需根据所需镜头。\n  const cameraDevice: camera.CameraDevice = cameraArray[0];\n\n  // 获取相机设备支持的输出流能力。\n  let cameraOutputCap: camera.CameraOutputCapability = cameraManager.getSupportedOutputCapability(cameraDevice,\n    camera.SceneMode.NORMAL_VIDEO);\n  if (!cameraOutputCap) {\n    console.error(\"cameraOutputCap is null\");\n    return;\n  }\n  console.info(\"outputCapability: \" + JSON.stringify(cameraOutputCap));\n\n  let videoProfilesArray: Array<camera.VideoProfile> = cameraOutputCap.videoProfiles;\n  if (!videoProfilesArray || videoProfilesArray.length === 0) {\n    console.error(\"videoProfilesArray is null or []\");\n    return;\n  }\n\n  // videoProfile的宽高需要与AVRecorderProfile的宽高保持一致，并且需要使用AVRecorderProfile所支持的宽高。\n  // 示例代码默认选择第一个videoProfile，实际开发需根据所需筛选videoProfile。\n  const videoProfile: camera.VideoProfile = cameraOutputCap.videoProfiles[0];\n  let videoUri: string = context.filesDir + '/' + 'VIDEO_' + Date.parse(new Date().toString()) + '.mp4'; // 本地沙箱路径。\n  try {\n    resources.file = fileIo.openSync(videoUri, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n  } catch (error) {\n    console.error(`openSync call failed, error: ${JSON.stringify(error)}`);\n    return;\n  }\n\n  // 创建并配置AVRecorder。\n  const isHdr: boolean = [\n    camera.CameraFormat.CAMERA_FORMAT_YCBCR_P010,\n    camera.CameraFormat.CAMERA_FORMAT_YCRCB_P010\n  ].includes(videoProfile.format);\n  // 配置参数以实际硬件设备支持的范围为准。\n  let aVRecorderProfile: media.AVRecorderProfile = {\n    audioBitrate: 48000,\n    audioChannels: 2,\n    audioCodec: media.CodecMimeType.AUDIO_AAC,\n    audioSampleRate: 48000,\n    fileFormat: media.ContainerFormatType.CFT_MPEG_4,\n    videoBitrate: 2000000,\n    videoCodec: isHdr ? media.CodecMimeType.VIDEO_HEVC : media.CodecMimeType.VIDEO_AVC,\n    videoFrameWidth: videoProfile.size.width,\n    videoFrameHeight: videoProfile.size.height,\n    videoFrameRate: 30,\n    isHdr: isHdr\n  };\n\n  let avMetadata: media.AVMetadata = {\n    videoOrientation: '0', // 合理值0、90、180、270，非合理值prepare接口将报错。\n    location: { latitude: 30, longitude: 130 }\n  }\n  let aVRecorderConfig: media.AVRecorderConfig = {\n    audioSourceType: media.AudioSourceType.AUDIO_SOURCE_TYPE_MIC,\n    videoSourceType: media.VideoSourceType.VIDEO_SOURCE_TYPE_SURFACE_YUV,\n    profile: aVRecorderProfile,\n    url: `fd://${resources.file.fd.toString()}`, // 文件需先由调用者创建，赋予读写权限，将文件fd传给此参数，eg.fd://45--file:///data/media/01.mp4\n    rotation: 0, // 合理值0、90、180、270，非合理值prepare接口将报错。\n    metadata: avMetadata\n  };\n\n  try {\n    resources.avRecorder = await media.createAVRecorder();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`createAVRecorder call failed. error code: ${JSON.stringify(err)}`);\n    return;\n  }\n\n  if (!resources.avRecorder) {\n    console.error(`avRecorder is null`);\n    return;\n  }\n\n  try {\n    await resources.avRecorder.prepare(aVRecorderConfig);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`prepare call failed. error code: ${JSON.stringify(err)}`);\n    await releaseResources();\n    return;\n  }\n\n  // 获取视频输入surface。\n  let videoSurfaceId: string | undefined = undefined; // 该surfaceID用于传递给相机接口创造videoOutput。\n  try {\n    videoSurfaceId = await resources.avRecorder.getInputSurface();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`getInputSurface call failed. error code: ${JSON.stringify(err)}`);\n    await releaseResources();\n    return;\n  }\n\n  if (!videoSurfaceId) {\n    await releaseResources();\n    return;\n  }\n\n  // 创建VideoOutput对象。\n  try {\n    resources.videoOutput = cameraManager.createVideoOutput(videoProfile, videoSurfaceId);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to create the videoOutput instance. error: ${JSON.stringify(err)}`);\n    await releaseResources();\n    return;\n  }\n  if (!resources.videoOutput) {\n    console.error('videoOutput is null');\n    await releaseResources();\n    return;\n  }\n\n  let previewProfilesArray: Array<camera.Profile> = cameraOutputCap.previewProfiles;\n  if (!previewProfilesArray || previewProfilesArray.length === 0) {\n    console.error(\"previewProfilesArray is null or []\");\n    return;\n  }\n\n  // 创建预览输出流，其中参数surfaceId是由XComponent组件提供的。\n  const previewProfile = previewProfilesArray.find((previewProfile: camera.Profile) => {\n    return Math.abs((previewProfile.size.width / previewProfile.size.height) - (videoProfile.size.width / videoProfile.size.height)) < Number.EPSILON;\n  }); // 筛选与录像分辨率宽高比一致的预览分辨率。\n  if (!previewProfile) {\n    console.error('No preview resolution found that matches the aspect ratio of the video resolution');\n    await releaseResources();\n    return;\n  }\n\n  try {\n    resources.previewOutput = cameraManager.createPreviewOutput(previewProfile, surfaceId);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`createPreviewOutput call failed. error: ${JSON.stringify(err)}`);\n    await releaseResources();\n    return;\n  }\n  if (!resources.previewOutput) {\n    console.error('previewOutput is null');\n    await releaseResources();\n    return;\n  }\n\n  // 创建相机输入流。\n  try {\n    resources.cameraInput = cameraManager.createCameraInput(cameraDevice);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to createCameraInput. error: ${JSON.stringify(err)}`);\n    await releaseResources();\n    return;\n  }\n  if (!resources.cameraInput) {\n    console.error('cameraInput is null');\n    await releaseResources();\n    return;\n  }\n\n  // 监听cameraInput错误信息。\n  resources.cameraInput!.on('error', cameraDevice, (error: BusinessError) => {\n    console.error(`Camera input error code: ${error.code}`);\n  });\n\n  // 打开相机。\n  try {\n    await resources.cameraInput!.open();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to open cameraInput. error: ${err}`);\n  }\n\n  // 创建会话。\n  try {\n    resources.videoSession = cameraManager.createSession(camera.SceneMode.NORMAL_VIDEO) as camera.VideoSession;\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to create the session instance. error: ${JSON.stringify(err)}`);\n    await releaseResources();\n    return;\n  }\n  if (!resources.videoSession) {\n    console.error('videoSession is null');\n    await releaseResources();\n    return;\n  }\n  // 监听session错误信息。\n  resources.videoSession!.on('error', (error: BusinessError) => {\n    console.error(`Video session error code: ${error.code}`);\n  });\n\n  // 开始配置会话。\n  try {\n    resources.videoSession!.beginConfig();\n    resources.videoSession!.addInput(resources.cameraInput!);\n    resources.videoSession!.addOutput(resources.videoOutput!);\n    resources.videoSession!.addOutput(resources.previewOutput!);\n    await resources.videoSession!.commitConfig();\n    await resources.videoSession!.start();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Session Configuration Failure. error: ${err}`);\n    await releaseResources();\n    return;\n  }\n\n  // 启动录像。\n  try {\n    await resources.videoOutput!.start();\n    await resources.avRecorder!.start();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`avRecorder start error: ${err}`);\n  }\n\n  // 停止录像。\n  try {\n    await resources.avRecorder!.stop();\n    await resources.videoOutput!.stop();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`avRecorder stop error: ${err}`);\n  }\n  \n  // 停止当前会话。\n  await resources.videoSession.stop();\n\n  // 关闭文件。\n  try {\n    fileIo.closeSync(resources.file);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`closeSync failed, error: ${err}`);\n  }\n\n\n  // 释放相机输入流。\n  await resources.cameraInput.close();\n\n  // 释放预览输出流。\n  try {\n    await resources.previewOutput.release();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`release previewOutput failed, error: ${err.code}`);\n  }\n\n\n  // 释放录像输出流。\n  try {\n    await resources.videoOutput.release();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`release videoOutput failed, error: ${err.code}`);\n  }\n\n  // 释放会话。\n  try {\n    await resources.videoSession.release();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`release videoSession failed, error: ${err.code}`);\n  }\n\n  // 会话置空。\n  resources.videoSession = undefined;\n}\n"
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
739586(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478567-b3dcd29b387d81d4945471cec7cb00d3.png");

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