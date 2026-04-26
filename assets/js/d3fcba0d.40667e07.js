"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["495387"], {
153574(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_concurrent_open_camera_concurrent_open_md_d3f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-concurrent-open-camera-concurrent-open-md-d3f.json
var site_docs_camera_kit_camera_dev_arkts_camera_concurrent_open_camera_concurrent_open_md_d3f_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-concurrent-open/camera-concurrent-open","title":"多摄同开(ArkTS)","description":"从API version 18开始支持多摄同开，即应用同时开启前置/后置相机进行预览和录像（前置/后置相机同时拍照功能待开放）。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-concurrent-open/camera-concurrent-open.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-concurrent-open","slug":"/camera-kit/camera-dev-arkts/camera-concurrent-open/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-concurrent-open/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":22,"frontMatter":{"title":"多摄同开(ArkTS)","sidebar_position":22,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-concurrent-open","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"微距能力设置(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-macro/"},"next":{"title":"对焦(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-focus/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-concurrent-open/camera-concurrent-open.md


const frontMatter = {
	title: '多摄同开(ArkTS)',
	sidebar_position: 22,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-concurrent-open',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '多摄同开(ArkTS)';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
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
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "多摄同开arkts",
        children: "多摄同开(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始支持多摄同开，即应用同时开启前置/后置相机进行预览和录像（前置/后置相机同时拍照功能待开放）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(109555)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于多摄同开需要前置/后置相机同时运行，所以对于相机功能有较大限制。当前版本仅支持以下七项基础功能，请勿对多摄同开开启的相机进行超出以下七种基础功能范围之外的查询、设置和使能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "闪光灯。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "曝光。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "变焦。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "曝光补偿。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对焦。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "防抖。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "色彩空间。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera/arkts-apis-camera",
        children: "Camera"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Context获取方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
        children: "获取UIAbility的上下文信息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要导入相机框架、媒体库、图片等相关领域依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { camera } from '@kit.CameraKit';\nimport { media } from '@kit.MediaKit';\nimport { fileIo } from '@kit.CoreFileKit';\nimport { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#getcameradevice18",
            children: "getCameraDevice"
          }), "获取对应的前置和后置相机。如果接口返回undefined，基于示例中的配置信息，表示当前设备不支持指定位置（前置/后置）的默认类型相机，无法实现多摄同开功能。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getSupportedCamerasFn(cameraManager: camera.CameraManager)\n{\n  let cameras = cameraManager.getSupportedCameras();\n\n  // 如果相机数量少于2，说明只存在单侧相机，返回。\n  if (cameras.length < 2) {\n   return;\n  }\n\n  // 获取逻辑后置和逻辑前置。\n  let curCameraDeviceBack = cameraManager.getCameraDevice(camera.CameraPosition.CAMERA_POSITION_BACK, camera.CameraType.CAMERA_TYPE_DEFAULT);\n  let curCameraDeviceFront = cameraManager.getCameraDevice(camera.CameraPosition.CAMERA_POSITION_FRONT, camera.CameraType.CAMERA_TYPE_DEFAULT);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取对应的并发能力集。通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#getcameraconcurrentinfos18",
            children: "getCameraConcurrentInfos"
          }), "获取相机的输出并发能力信息数组", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#cameraconcurrentinfo18",
            children: "CameraConcurrentInfo"
          }), "，数组内部包含相机在对应并发模式下支持的模式和输出能力，", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "在多摄同开场景下设置的模式和输出能力必须在并发能力集的范围之内"
            })
          }), "。若", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#getcameraconcurrentinfos18",
            children: "getCameraConcurrentInfos"
          }), "接口返回空数组，则表明当前设备不支持并发功能。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getSupportedOutputCapabilityFn(cameraManager: camera.CameraManager, curCameraDeviceFront: camera.CameraDevice, curCameraDeviceBack: camera.CameraDevice)\n{\n  // 检查当前相机是否支持拍照模式，获取原始能力集。\n  let sceneModes = cameraManager.getSupportedSceneModes(curCameraDeviceFront);\n  if (sceneModes === undefined) {\n    return;\n  }\n  let isSupported = sceneModes.findIndex((sceneMode: camera.SceneMode) => {\n    return sceneMode === camera.SceneMode.NORMAL_PHOTO;\n  });\n  if (!isSupported) {\n    return;\n  }\n  let cameraOutputCapability = cameraManager.getSupportedOutputCapability(curCameraDeviceFront, camera.SceneMode.NORMAL_PHOTO);\n\n  let deviceArray: Array<camera.CameraDevice> = [curCameraDeviceFront, curCameraDeviceBack];\n\n  // 获取并发能力集。\n  let concurrentInfo: Array<camera.CameraConcurrentInfo> = cameraManager.getCameraConcurrentInfos(deviceArray);\n\n  if (concurrentInfo.length === 0) {\n   return;\n  }\n\n  // 用并发能力集替换原始能力集。\n  for (let i = 0; i < concurrentInfo.length; i++) {\n    if (concurrentInfo[i].device.cameraPosition == camera.CameraPosition.CAMERA_POSITION_FRONT) {\n      cameraOutputCapability = concurrentInfo[i].outputCapabilities[0];\n      break;\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "确定预览输出流。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getPreviewOutputFn(cameraManager: camera.CameraManager, cameraOutputCapability: camera.CameraOutputCapability, surfaceId: string)\n{\n  // 此处创建预览输出流以format：1003，size：1920*1080的previewProfile为例。\n  let previewProfileObj: camera.Profile = {\n    format: 1003,\n    size: {\n      width: 1920,\n      height: 1080\n    }\n  };\n  // 查询对应previewProfile是否存在，对应的previewProfile必须在getCameraConcurrentInfos获取到的并发能力信息数组范围内。\n  let previewProfiles = cameraOutputCapability.previewProfiles;\n  if (previewProfiles.length < 1) {\n    return;\n  }\n  let index = previewProfiles.findIndex((previewProfile: camera.Profile) => {\n    return previewProfile.size.width === previewProfileObj.size.width &&\n    previewProfile.size.height === previewProfileObj.size.height &&\n    previewProfile.format === previewProfileObj.format;\n  });\n  if (index === -1) {\n    return;\n  }\n\n  // 创建previewOutput输出对象。\n  let previewOutput = cameraManager.createPreviewOutput(previewProfileObj, surfaceId);\n  if (previewOutput === undefined) {\n    return;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "确定拍照输出流。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getPhotoOutputFn(cameraManager: camera.CameraManager, cameraOutputCapability: camera.CameraOutputCapability)\n{\n // 此处创建拍照输出流以format：2000，size：1920*1080的photoProfile为例。\n  let photoProfileObj: camera.Profile = {\n    format: 2000,\n    size: {\n      width: 1920,\n      height: 1080\n    }\n  };\n  // 查询对应photoProfile是否存在，对应的photoProfile必须在getCameraConcurrentInfos获取到的并发能力信息数组范围内。\n  let photoProfiles = cameraOutputCapability.photoProfiles;\n  if (photoProfiles.length < 1) {\n   return;\n  }\n  let index = photoProfiles.findIndex((photoProfile: camera.Profile) => {\n    return photoProfile.size.width === photoProfileObj.size.width &&\n    photoProfile.size.height === photoProfileObj.size.height &&\n    photoProfile.format === photoProfileObj.format;\n  });\n  if (index === -1) {\n    return;\n  }\n  let photoOutput = cameraManager.createPhotoOutput(photoProfileObj);\n  if (photoOutput === undefined) {\n    return;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "确定录像输出流。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function createAVRecorder(): Promise<media.AVRecorder | undefined> {\n  let avRecorder: media.AVRecorder | undefined = undefined;\n  try {\n    avRecorder = await media.createAVRecorder();\n  } catch (error) {\n  console.error('createAVRecorder error')\n  }\n  return avRecorder;\n}\n\nfunction initFd(context: common.Context): number {\n  let filesDir = context.filesDir;\n  let filePath = filesDir + `/${Date.now()}.mp4`;\n  AppStorage.setOrCreate<string>('filePath', filePath);\n  let file: fileIo.File = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n  return file.fd;\n}\n\nasync function prepareAVRecorder(videoProfileObj: camera.VideoProfile, curCameraDevice: camera.CameraDevice, avRecorder: media.AVRecorder, context: common.Context): Promise<void> {\n  let fd = initFd(context);\n  let videoConfig: media.AVRecorderConfig = {\n    audioSourceType: media.AudioSourceType.AUDIO_SOURCE_TYPE_MIC,\n    videoSourceType: media.VideoSourceType.VIDEO_SOURCE_TYPE_SURFACE_YUV,\n    profile: {\n      audioBitrate: 48000,\n      audioChannels: 2,\n      audioCodec: media.CodecMimeType.AUDIO_AAC,\n      audioSampleRate: 48000,\n      fileFormat: media.ContainerFormatType.CFT_MPEG_4,\n      videoBitrate: 512000,\n      videoCodec: media.CodecMimeType.VIDEO_AVC,\n      videoFrameWidth: videoProfileObj.size.width,\n      videoFrameHeight: videoProfileObj.size.height,\n      videoFrameRate: videoProfileObj.frameRateRange.min\n    },\n    url: `fd://${fd.toString()}`,\n    rotation: curCameraDevice?.cameraOrientation\n  };\n  await avRecorder?.prepare(videoConfig).catch((err: BusinessError): void => {\n    console.error(`prepareAVRecorder prepare err`);\n  });\n}\n\nasync function getVideoOutputFn(cameraManager: camera.CameraManager, cameraOutputCapability: camera.CameraOutputCapability, concurrentInfo: Array<camera.CameraConcurrentInfo>, curCameraDeviceFront: camera.CameraDevice, context: common.Context)\n{\n // 此处创建录像输出流以format：1003，size：1920*1080的videoProfile为例，对应的videoProfile必须在getCameraConcurrentInfos获取到的并发能力信息数组范围内。\n  let videoProfileObj: camera.VideoProfile = {\n    format: 1003,\n    size: {\n      width: 1920,\n      height: 1080\n    },\n    frameRateRange: {\n      min: 30,\n      max: 60\n    }\n  };\n\n  // 替换相应能力集。\n  for (let i = 0; i < concurrentInfo.length; i++) {\n    if (concurrentInfo[i].device.cameraPosition == camera.CameraPosition.CAMERA_POSITION_FRONT) {\n      cameraOutputCapability = concurrentInfo[i].outputCapabilities[1];\n      break;\n    }\n  }\n  let videoProfiles = cameraOutputCapability.videoProfiles;\n  if (videoProfiles.length < 1) {\n    return;\n  }\n  let index = videoProfiles.findIndex((videoProfile: camera.VideoProfile) => {\n    return videoProfile.size.width === videoProfileObj.size.width &&\n      videoProfile.size.height === videoProfileObj.size.height &&\n      videoProfile.format === videoProfileObj.format &&\n      videoProfile.frameRateRange.min <= 60 &&\n      videoProfile.frameRateRange.max <= 60;\n  });\n  if (index === -1) {\n    return;\n  }\n  videoProfileObj = videoProfiles[index];\n  let avRecorder = await createAVRecorder();\n  if (avRecorder === undefined) {\n    return;\n  }\n  await prepareAVRecorder(videoProfileObj, curCameraDeviceFront, avRecorder, context);\n  let videoSurfaceId = await avRecorder.getInputSurface();\n  let videoOutput = cameraManager.createVideoOutput(videoProfileObj, videoSurfaceId);\n  if (videoOutput === undefined) {\n    return;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打开相机。通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-camerainput/arkts-apis-camera-camerainput#open18",
            children: "open"
          }), "以多摄同开状态打开指定相机。在使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-camerainput/arkts-apis-camera-camerainput#open18",
            children: "open"
          }), "接口前，请先查询接口是否支持并发能力集，并优先调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#getcameraconcurrentinfos18",
            children: "getCameraConcurrentInfos"
          }), "方法，获取多摄同开状态下的相机并发能力集。请勿在未查询并发能力集的情况下使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-camerainput/arkts-apis-camera-camerainput#open18",
            children: "open"
          }), "，否则会导致打开相机失败。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function initCamera(cameraManager: camera.CameraManager, cameraDevice: camera.CameraDevice) {\n  let cameraInput: camera.CameraInput | undefined = undefined;\n  try {\n    cameraInput = cameraManager.createCameraInput(cameraDevice);\n    console.info('createCameraInputFn success');\n  } catch (error) {\n    console.error(`createCameraInputFn failed`);\n  }\n  if (cameraInput === undefined) {\n    return;\n  }\n  let isOpenSuccess = false;\n  try {\n\n    // 当前版本支持camera.CameraConcurrentType.CAMERA_LIMITED_CAPABILITY模式并发打开相机。\n    await cameraInput.open(camera.CameraConcurrentType.CAMERA_LIMITED_CAPABILITY);\n    isOpenSuccess = true;\n  } catch (error) {\n    console.error(`createCameraInput failed`);\n  }\n  if (!isOpenSuccess) {\n    return;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "会话流程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " // 监听捕获会话错误变化。\nfunction onSessionErrorChange(session: camera.PhotoSession | camera.VideoSession): void {\n  try {\n    session.on('error', (captureSessionError: BusinessError): void => {\n    });\n  } catch (error) {\n    console.error('onCaptureSessionErrorChange error');\n  }\n}\n\nlet handlePhotoAssetCb: (photoAsset: photoAccessHelper.PhotoAsset) => void = () => {\n};\n\n// 监听拍照事件。\nfunction photoOutputCallBack(photoOutput: camera.PhotoOutput): void {\n  try {\n\n    // 监听拍照开始。\n    photoOutput.on('captureStartWithInfo', (err: BusinessError, captureStartInfo: camera.CaptureStartInfo): void => {\n  });\n\n  // 监听拍照帧输出捕获。\n  photoOutput.on('frameShutter', (err: BusinessError, frameShutterInfo: camera.FrameShutterInfo): void => {\n  });\n\n // 监听拍照结束。\n  photoOutput.on('captureEnd', (err: BusinessError, captureEndInfo: camera.CaptureEndInfo): void => {\n  });\n\n  // 监听拍照异常。\n  photoOutput.on('error', (data: BusinessError): void => {\n  });\n  photoOutput.on('photoAssetAvailable', (err: BusinessError, photoAsset: photoAccessHelper.PhotoAsset) => {\n    if (photoAsset === undefined) {\n      return;\n    }\n    handlePhotoAssetCb(photoAsset);\n  });\n  } catch (err) {\n  }\n}\n\n// 会话流程。\nasync function sessionFlowFn(cameraManager: camera.CameraManager, cameraInput: camera.CameraInput,\n  previewOutput: camera.PreviewOutput, photoOutput: camera.PhotoOutput | undefined, videoOutput: camera.VideoOutput | undefined, curSceneMode: camera.SceneMode): Promise<void> {\n  let session: camera.PhotoSession | camera.VideoSession | undefined = undefined;\n  try {\n\n    // 创建CaptureSession实例。\n    if (curSceneMode === camera.SceneMode.NORMAL_PHOTO) {\n      session = cameraManager.createSession(curSceneMode) as camera.PhotoSession;\n    } else if (curSceneMode === camera.SceneMode.NORMAL_VIDEO) {\n      session = cameraManager.createSession(curSceneMode) as camera.VideoSession;\n    }\n    if (session === undefined) {\n      return;\n    }\n    onSessionErrorChange(session);\n\n    // 开始配置会话。\n    session.beginConfig();\n\n    // 向会话中添加相机输入流。\n    session.addInput(cameraInput);\n\n    // 向会话中添加预览输出流。\n    session.addOutput(previewOutput);\n\n    if (curSceneMode === camera.SceneMode.NORMAL_PHOTO) {\n      if (photoOutput === undefined) {\n        return;\n      }\n\n      // 拍照监听事件。\n      photoOutputCallBack(photoOutput);\n\n      // 向会话中添加拍照输出流。\n      session.addOutput(photoOutput);\n    } else if (curSceneMode === camera.SceneMode.NORMAL_VIDEO) {\n      if (videoOutput === undefined) {\n        return;\n      }\n\n      // 向会话中添加录像输出流。\n      session.addOutput(videoOutput);\n    }\n\n    // 提交配置信息。\n    await session.commitConfig();\n  } catch (error) {\n    console.error(`sessionFlowFn fail`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拍照，通过步骤8中配置的photoOutput使用前置或后置相机进行拍照，多摄同开状态下不支持前后相机同时拍照。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function takePicture(photoOutput: camera.PhotoOutput): Promise<void> {\n  if (photoOutput === undefined) {\n    return;\n  }\n  if (photoOutput === null) {\n    return;\n  }\n\n  if (photoOutput) {\n    await photoOutput.capture();\n  } else {\n    console.info('photoOutput is undefined or null');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "录制。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let isRecording = false;\n\n// 启动录制。\nasync function startVideo(videoOutput: camera.VideoOutput, avRecorder: media.AVRecorder): Promise<void> {\n  try {\n    await videoOutput?.start();\n    await avRecorder?.start();\n  } catch (error) {\n    console.error(`startVideo err`);\n  }\n}\n\n// 停止录制。\nasync function stopVideo(videoOutput: camera.VideoOutput, avRecorder: media.AVRecorder): Promise<void> {\n  if (isRecording) {\n    return;\n  }\n  try {\n    if (avRecorder) {\n      await avRecorder.stop();\n    }\n    if (videoOutput) {\n      await videoOutput.stop();\n    }\n    isRecording = false;\n  } catch (error) {\n    console.error(`stopVideo err`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在多摄同开状态下，前/后置相机可配置的能力示例如下（当前版本仅支持本文开头部分所示的七项基础功能）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 闪光灯。\nfunction hasFlashFn(flashMode: camera.FlashMode, session: camera.PhotoSession | camera.VideoSession | undefined = undefined): void {\n\n  // 检测是否有闪光灯。\n  let hasFlash = session?.hasFlash();\n\n  // 检测闪光灯模式是否支持。\n  let isFlashModeSupported = session?.isFlashModeSupported(flashMode);\n\n  // 设置闪光灯模式。\n  if (isFlashModeSupported) {\n    session?.setFlashMode(flashMode);\n  }\n}\n\n// 曝光。\nfunction hasExposureFn(ExposureMode: camera.ExposureMode, session: camera.PhotoSession | camera.VideoSession | undefined = undefined): void {\n\n  // 检测曝光模式是否支持。\n  let hasFlash = session?.isExposureModeSupported(ExposureMode);\n\n  // 设置曝光模式。\n  if (hasFlash) {\n    session?.setExposureMode(ExposureMode);\n  }\n}\n\n// 获取可变焦距范围。\nfunction getZoomRatioRange(session: camera.PhotoSession | camera.VideoSession | undefined = undefined): Array<number> {\n  let zoomRatioRange: Array<number> = [];\n  if (session !== undefined) {\n    zoomRatioRange = session.getZoomRatioRange();\n  }\n  return zoomRatioRange;\n}\n\n// 变焦。\nfunction setZoomRatioFn(zoomRatio: number, session: camera.PhotoSession | camera.VideoSession | undefined = undefined): void {\n\n  // 获取支持的变焦范围。\n  let zoomRatioRange = getZoomRatioRange();\n  try {\n    session?.setZoomRatio(zoomRatio);\n  } catch (error) {\n    console.error(`setZoomRatioFn fail`);\n  }\n}\n\n// 曝光补偿。\nfunction setExposureBiasFn(exposureBias: number, session: camera.PhotoSession | camera.VideoSession | undefined = undefined): void {\n\n  // 查询曝光补偿范围。\n  let biasRangeArray: Array<number> | undefined = [];\n  biasRangeArray = session?.getExposureBiasRange();\n\n  // 设置曝光补偿。\n  session?.setExposureBias(exposureBias);\n}\n\n// 对焦模式。\nfunction setFocusMode(focusMode: camera.FocusMode, session: camera.PhotoSession | camera.VideoSession | undefined = undefined): void {\n\n  // 检测对焦模式是否支持。\n  let isSupported = session?.isFocusModeSupported(focusMode);\n\n  // 设置对焦模式。\n  if (!isSupported) {\n    return;\n  }\n  session?.setFocusMode(focusMode);\n}\n"
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
109555(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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