"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["955619"], {
311147(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_hdr_recording_camera_hdr_recording_md_54a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-hdr-recording-camera-hdr-recording-md-54a.json
var site_docs_camera_kit_camera_dev_arkts_camera_hdr_recording_camera_hdr_recording_md_54a_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-hdr-recording/camera-hdr-recording","title":"HDR Vivid相机录像(ArkTS)","description":"HarmonyOS支持调用接口，录制HDR Vivid视频，可以拍出层次表现更细腻、光影细节更丰富的画面，提升画面质感，呈现更卓越的视觉效果。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-hdr-recording/camera-hdr-recording.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-hdr-recording","slug":"/camera-kit/camera-dev-arkts/camera-hdr-recording/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-hdr-recording/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":29,"frontMatter":{"title":"HDR Vivid相机录像(ArkTS)","sidebar_position":29,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-hdr-recording","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"HDR Vivid相机拍照(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-hdr-shooting/"},"next":{"title":"相机管理 (C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native-mandatory/native-camera-device-management/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-hdr-recording/camera-hdr-recording.md


const frontMatter = {
	title: 'HDR Vivid相机录像(ArkTS)',
	sidebar_position: 29,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-hdr-recording',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'HDR Vivid相机录像(ArkTS)';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "hdr-vivid相机录像arkts",
        children: "HDR Vivid相机录像(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS支持调用接口，录制HDR Vivid视频，可以拍出层次表现更细腻、光影细节更丰富的画面，提升画面质感，呈现更卓越的视觉效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前示例提供完整的HDR Vivid录像开发步骤，方便开发者实现录制HDR Vivid视频的功能。更多HDR Vivid的开发指导，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/multimedia-hdr-vivid",
        children: "使用HDR Vivid特性开发媒体应用"
      }), "。"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { camera } from '@kit.CameraKit';\nimport { colorSpaceManager } from '@kit.ArkGraphics2D';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { media } from '@kit.MediaKit';\nimport { common } from '@kit.AbilityKit';\nimport { photoAccessHelper } from '@kit.MediaLibraryKit';\nimport { fileIo } from '@kit.CoreFileKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取预览、录像的配置项。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["HDR录像的输出格式需要设置成10bit的CAMERA_FORMAT_YCRCB_P010。具体参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-colormanagement/arkts-apis-camera-colormanagement#setcolorspace12",
            children: "setColorSpace"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(60381)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "预览流与录像输出流的分辨率的宽高比要保持一致，如果设置XComponent组件中的Surface显示区域宽高比为1920:1080 = 16:9，则需要预览流中的分辨率的宽高比也为16:9，如分辨率选择640:360，或960:540，或1920:1080，以此类推。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getPreviewProfile(previewProfiles: Array<camera.Profile>, size: camera.Size): undefined | camera.Profile {\n  let previewProfile: undefined | camera.Profile = previewProfiles.find((profile: camera.Profile) => {\n    return profile.format === camera.CameraFormat.CAMERA_FORMAT_YCRCB_P010 &&\n      profile.size.width === size.width && profile.size.height == size.height\n  });\n  return previewProfile;\n}\n\nfunction getVideoProfile(videoProfiles: Array<camera.VideoProfile>, size: camera.Size): undefined | camera.VideoProfile {\n  let videoProfile: undefined | camera.VideoProfile = videoProfiles.find((profile: camera.VideoProfile) => {\n    return profile.format === camera.CameraFormat.CAMERA_FORMAT_YCRCB_P010 &&\n      profile.size.width === size.width && profile.size.height == size.height\n  });\n  return videoProfile;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询是否支持视频防抖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HDR录像需要支持视频防抖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function isVideoStabilizationModeSupported(session: camera.VideoSession, mode: camera.VideoStabilizationMode): boolean {\n  let isSupported: boolean = false;\n  try {\n    isSupported = session.isVideoStabilizationModeSupported(mode);\n  } catch (error) {\n    // 失败返回错误码error.code并处理\n    let err = error as BusinessError;\n    console.error(`The isVideoStabilizationModeSupported call failed. error code: ${err.code}`);\n  }\n  return isSupported;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置视频防抖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function setVideoStabilizationMode(session: camera.VideoSession): void {\n  let mode: camera.VideoStabilizationMode = camera.VideoStabilizationMode.AUTO;\n  // 查询是否支持视频防抖\n  let isSupported: boolean = isVideoStabilizationModeSupported(session, mode);\n  if (isSupported) {\n    console.info(`setVideoStabilizationMode: ${mode}`);\n    // 设置视频防抖\n    try {\n      session.setVideoStabilizationMode(mode);\n    } catch (error) {\n      // 失败返回错误码error.code并处理\n      let err = error as BusinessError;\n      console.error(`setVideoStabilizationMode call failed. error code: ${err.code}`);\n    }\n    let activeVideoStabilizationMode = session.getActiveVideoStabilizationMode();\n    console.info(`activeVideoStabilizationMode: ${activeVideoStabilizationMode}`);\n  } else {\n    console.info(`videoStabilizationMode: ${mode} is not support`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询支持的色彩空间。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getSupportedColorSpaces(session: camera.VideoSession): Array<colorSpaceManager.ColorSpace> {\n  let colorSpaces: Array<colorSpaceManager.ColorSpace> = [];\n  try {\n    colorSpaces = session.getSupportedColorSpaces();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`The getSupportedColorSpaces call failed. error code: ${err.code}`);\n  }\n  return colorSpaces;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置色彩空间。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果是SDR录像色彩空间需要设置为BT709_LIMIT，如果是HDR录像色彩空间需要设置为BT2020_HLG_LIMIT。具体参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-colormanagement/arkts-apis-camera-colormanagement#setcolorspace12",
            children: "setColorSpace"
          }), "。建议在提交会话配置之前调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-colormanagement/arkts-apis-camera-colormanagement#setcolorspace12",
            children: "setColorSpace"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function setColorSpaceBeforeCommitConfig(session: camera.VideoSession, isHdr: boolean): void {\n  let colorSpace: colorSpaceManager.ColorSpace = isHdr? colorSpaceManager.ColorSpace.BT2020_HLG_LIMIT : colorSpaceManager.ColorSpace.BT709_LIMIT;\n  let colorSpaces: Array<colorSpaceManager.ColorSpace> = session.getSupportedColorSpaces();\n  let isSupportedColorSpaces = colorSpaces.indexOf(colorSpace) >= 0;\n  if (isSupportedColorSpaces) {\n    console.info(`setColorSpace: ${colorSpace}`);\n    try {\n      session.setColorSpace(colorSpace);\n    } catch (error) {\n      // 失败返回错误码error.code并处理\n      let err = error as BusinessError;\n      console.error(`setColorSpace call failed. error code: ${err.code}`);\n    }\n    let activeColorSpace:colorSpaceManager.ColorSpace = session.getActiveColorSpace();\n    console.info(`activeColorSpace: ${activeColorSpace}`);\n  } else {\n    console.info(`colorSpace: ${colorSpace} is not support`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现HDR录像。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在创建预览输出、录像输出前执行步骤2获取配置项，提交会话配置前执行步骤6设置色彩空间，提交会话配置后执行步骤4设置视频防抖，其余流程按照正常录像流程开发。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(347352)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如需在提交会话配置后，设置视频防抖模式和色彩空间，为避免相机输出流配置异常，请先通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-stabilization/arkts-apis-camera-stabilization#setvideostabilizationmode11",
            children: "setVideoStabilizationMode"
          }), "方法4. 设置视频防抖后，再通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-colormanagement/arkts-apis-camera-colormanagement#setcolorspace12",
            children: "setColorSpace"
          }), "方法完成6.设置色彩空间。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function cameraHdrRecordingCase(context: common.Context, surfaceId: string): Promise<void> {\n  // 创建CameraManager对象\n  let cameraManager: camera.CameraManager = camera.getCameraManager(context);\n  if (!cameraManager) {\n    console.error(\"camera.getCameraManager error\");\n    return;\n  }\n\n  // 监听相机状态变化\n  cameraManager.on('cameraStatus', (err: BusinessError, cameraStatusInfo: camera.CameraStatusInfo) => {\n    if (err !== undefined && err.code !== 0) {\n      console.error('cameraStatus with errorCode = ' + err.code);\n      return;\n    }\n    console.info(`camera : ${cameraStatusInfo.camera.cameraId}`);\n    console.info(`status: ${cameraStatusInfo.status}`);\n  });\n\n  // 获取相机列表\n  let cameraArray: Array<camera.CameraDevice> = [];\n  try {\n    cameraArray = cameraManager.getSupportedCameras();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`getSupportedCameras call failed. error code: ${err.code}`);\n  }\n\n  if (cameraArray.length <= 0) {\n    console.error(\"cameraManager.getSupportedCameras error\");\n    return;\n  }\n\n  // 获取支持的模式类型\n  let sceneModes: Array<camera.SceneMode> = cameraManager.getSupportedSceneModes(cameraArray[0]);\n  let isSupportVideoMode: boolean = sceneModes.indexOf(camera.SceneMode.NORMAL_VIDEO) >= 0;\n  if (!isSupportVideoMode) {\n    console.error('video mode not support');\n    return;\n  }\n\n  // 获取相机设备支持的输出流能力\n  let cameraOutputCap: camera.CameraOutputCapability = cameraManager.getSupportedOutputCapability(cameraArray[0], camera.SceneMode.NORMAL_VIDEO);\n  if (!cameraOutputCap) {\n    console.error(\"cameraManager.getSupportedOutputCapability error\")\n    return;\n  }\n  console.info(\"outputCapability: \" + JSON.stringify(cameraOutputCap));\n\n  let previewProfilesArray: Array<camera.Profile> = cameraOutputCap.previewProfiles;\n  if (!previewProfilesArray) {\n    console.error(\"createOutput previewProfilesArray == null || undefined\");\n    return;\n  }\n\n  let videoProfilesArray: Array<camera.VideoProfile> = cameraOutputCap.videoProfiles;\n  if (!videoProfilesArray) {\n    console.error(\"createOutput videoProfilesArray == null || undefined\");\n    return;\n  }\n  // videoProfile的宽高需要与AVRecorderProfile的宽高保持一致，并且需要使用AVRecorderProfile所支持的宽高\n  let videoSize: camera.Size = {\n    width: 640,\n    height: 480\n  }\n  let previewProfile: undefined | camera.Profile = getPreviewProfile(previewProfilesArray, videoSize);\n  if (!previewProfile) {\n    console.error('previewProfile is not found');\n    return;\n  }\n  let videoProfile: undefined | camera.VideoProfile = getVideoProfile(videoProfilesArray, videoSize);\n  if (!videoProfile) {\n    console.error('videoProfile is not found');\n    return;\n  }\n  // 配置参数以实际硬件设备支持的范围为准\n  let aVRecorderProfile: media.AVRecorderProfile = {\n    audioBitrate: 48000,\n    audioChannels: 2,\n    audioCodec: media.CodecMimeType.AUDIO_AAC,\n    audioSampleRate: 48000,\n    fileFormat: media.ContainerFormatType.CFT_MPEG_4,\n    videoBitrate: 2000000,\n    videoCodec: media.CodecMimeType.VIDEO_HEVC,\n    videoFrameWidth: videoSize.width,\n    videoFrameHeight: videoSize.height,\n    videoFrameRate: 30,\n    isHdr: true\n  };\n  let options: photoAccessHelper.CreateOptions = {\n    title: Date.now().toString()\n  };\n  let accessHelper: photoAccessHelper.PhotoAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);\n  let videoUri: string = await accessHelper.createAsset(photoAccessHelper.PhotoType.VIDEO, 'mp4', options);\n  let file: fileIo.File = fileIo.openSync(videoUri, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);\n  let aVRecorderConfig: media.AVRecorderConfig = {\n    audioSourceType: media.AudioSourceType.AUDIO_SOURCE_TYPE_MIC,\n    videoSourceType: media.VideoSourceType.VIDEO_SOURCE_TYPE_SURFACE_YUV,\n    profile: aVRecorderProfile,\n    url: `fd://${file.fd.toString()}`, // 文件需先由调用者创建，赋予读写权限，将文件fd传给此参数，eg.fd://45--file:///data/media/01.mp4\n    rotation: 0, // 合理值0、90、180、270，非合理值prepare接口将报错\n    location: { latitude: 30, longitude: 130 }\n  };\n\n  let avRecorder: media.AVRecorder | undefined = undefined;\n  try {\n    avRecorder = await media.createAVRecorder();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`createAVRecorder call failed. error code: ${err.code}`);\n  }\n\n  if (avRecorder === undefined) {\n    return;\n  }\n\n  try {\n    await avRecorder.prepare(aVRecorderConfig);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`prepare call failed. error code: ${err.code}`);\n  }\n\n  let videoSurfaceId: string | undefined = undefined; // 该surfaceID用于传递给相机接口创建videoOutput\n  try {\n    videoSurfaceId = await avRecorder.getInputSurface();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`getInputSurface call failed. error code: ${err.code}`);\n  }\n  if (videoSurfaceId === undefined) {\n    return;\n  }\n  // 创建VideoOutput对象\n  let videoOutput: camera.VideoOutput | undefined = undefined;\n  try {\n    videoOutput = cameraManager.createVideoOutput(videoProfile, videoSurfaceId);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to create the videoOutput instance. error: ${JSON.stringify(err)}`);\n  }\n  if (videoOutput === undefined) {\n    return;\n  }\n  // 监听视频输出错误信息\n  videoOutput.on('error', (error: BusinessError) => {\n    console.error(`Preview output error code: ${error.code}`);\n  });\n\n  // 创建会话\n  let videoSession: camera.VideoSession | undefined = undefined;\n  try {\n    videoSession = cameraManager.createSession(camera.SceneMode.NORMAL_VIDEO) as camera.VideoSession;\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to create the session instance. error: ${JSON.stringify(err)}`);\n  }\n  if (videoSession === undefined) {\n    return;\n  }\n  // 监听session错误信息\n  videoSession.on('error', (error: BusinessError) => {\n    console.error(`Video session error code: ${error.code}`);\n  });\n\n  // 开始配置会话\n  try {\n    videoSession.beginConfig();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to beginConfig. error: ${JSON.stringify(err)}`);\n  }\n\n  // 创建相机输入流\n  let cameraInput: camera.CameraInput | undefined = undefined;\n  try {\n    cameraInput = cameraManager.createCameraInput(cameraArray[0]);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to createCameraInput. error: ${JSON.stringify(err)}`);\n  }\n  if (cameraInput === undefined) {\n    return;\n  }\n  // 监听cameraInput错误信息\n  let cameraDevice: camera.CameraDevice = cameraArray[0];\n  cameraInput.on('error', cameraDevice, (error: BusinessError) => {\n    console.error(`Camera input error code: ${error.code}`);\n  });\n\n  // 打开相机\n  try {\n    await cameraInput.open();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to open cameraInput. error: ${JSON.stringify(err)}`);\n  }\n\n  // 向会话中添加相机输入流\n  try {\n    videoSession.addInput(cameraInput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to add cameraInput. error: ${JSON.stringify(err)}`);\n  }\n\n  // 创建预览输出流，其中参数 surfaceId 参考下面 XComponent 组件，预览流为XComponent组件提供的surface\n  let previewOutput: camera.PreviewOutput | undefined = undefined;\n  try {\n    previewOutput = cameraManager.createPreviewOutput(previewProfile, surfaceId);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to create the PreviewOutput instance. error: ${JSON.stringify(err)}`);\n  }\n\n  if (previewOutput === undefined) {\n    return;\n  }\n  // 向会话中添加预览输出流\n  try {\n    videoSession.addOutput(previewOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to add previewOutput. error: ${JSON.stringify(err)}`);\n  }\n\n  // 向会话中添加录像输出流\n  try {\n    videoSession.addOutput(videoOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to add videoOutput. error: ${JSON.stringify(err)}`);\n  }\n\n  // 设置色彩空间\n  setColorSpaceBeforeCommitConfig(videoSession, true);\n\n  // 提交会话配置\n  try {\n    await videoSession.commitConfig();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`videoSession commitConfig error: ${JSON.stringify(err)}`);\n  }\n\n  // 设置视频防抖\n  setVideoStabilizationMode(videoSession);\n\n  // 启动会话\n  try {\n    await videoSession.start();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`videoSession start error: ${JSON.stringify(err)}`);\n  }\n\n  // 启动录像输出流\n  videoOutput.start((err: BusinessError) => {\n    if (err) {\n      console.error(`Failed to start the video output. error: ${JSON.stringify(err)}`);\n      return;\n    }\n    console.info('Callback invoked to indicate the video output start success.');\n  });\n\n  // 开始录像\n  try {\n    await avRecorder.start();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`avRecorder start error: ${JSON.stringify(err)}`);\n  }\n\n  // 停止录像输出流\n  videoOutput.stop((err: BusinessError) => {\n    if (err) {\n      console.error(`Failed to stop the video output. error: ${JSON.stringify(err)}`);\n      return;\n    }\n    console.info('Callback invoked to indicate the video output stop success.');\n  });\n\n  // 停止录像\n  try {\n    await avRecorder.stop();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`avRecorder stop error: ${JSON.stringify(err)}`);\n  }\n\n  // 停止当前会话\n  await videoSession.stop();\n\n  // 关闭文件\n  fileIo.closeSync(file);\n\n  // 释放相机输入流\n  await cameraInput.close();\n\n  // 释放预览输出流\n  await previewOutput.release();\n\n  // 释放录像输出流\n  await videoOutput.release();\n\n  // 释放会话\n  await videoSession.release();\n\n  // 会话置空\n  videoSession = undefined;\n}\n"
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
347352(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
60381(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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