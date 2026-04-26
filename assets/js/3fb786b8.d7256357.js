"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["852770"], {
19865(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_recording_camera_recording_md_3fb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-recording-camera-recording-md-3fb.json
var site_docs_camera_kit_camera_dev_arkts_camera_recording_camera_recording_md_3fb_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-recording/camera-recording","title":"录像(ArkTS)","description":"在开发相机应用时，需要先申请相关权限。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-recording/camera-recording.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-recording","slug":"/camera-kit/camera-dev-arkts/camera-recording/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-recording/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"录像(ArkTS)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-recording","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"拍照实践(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-shooting-case/"},"next":{"title":"录像实践(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-recording-case/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-recording/camera-recording.md


const frontMatter = {
	title: '录像(ArkTS)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-recording',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '录像(ArkTS)';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "状态监听",
  "id": "状态监听",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "录像arkts",
        children: "录像(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发相机应用时，需要先", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-preparation",
        children: "申请相关权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机应用可通过调用和控制相机设备，完成预览、拍照和录像等基础操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["录像也是相机应用的最重要功能之一，录像是循环帧的捕获。对于录像的自定义配置，开发者可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-arkts/camera-shooting",
        children: "拍照"
      }), "中的步骤4，设置分辨率、闪光灯、焦距、照片质量及旋转角度等信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera/arkts-apis-camera",
        children: "@ohos.multimedia.camera (相机管理)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入media模块。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建录像输出流的SurfaceId以及录像输出的数据，都需要用到系统提供的media接口", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media/arkts-apis-media",
            children: "@ohos.multimedia.media (媒体服务)"
          }), "能力，导入media接口的方法如下。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { camera } from '@kit.CameraKit';\nimport { media } from '@kit.MediaKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建Surface。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["系统提供的media接口可以创建一个录像", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder",
            children: "AVRecorder"
          }), "实例，通过该实例的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#getinputsurface9",
            children: "getInputSurface"
          }), "方法获取SurfaceId，与录像输出流做关联，处理录像输出流输出的数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function getVideoSurfaceId(aVRecorderConfig: media.AVRecorderConfig): Promise<string | undefined> {  // aVRecorderConfig可参考步骤3.创建录像输出流。\n  let avRecorder: media.AVRecorder | undefined = undefined;\n  let videoSurfaceId: string | undefined = undefined;\n  try {\n    avRecorder = await media.createAVRecorder();\n    if (avRecorder === undefined) {\n      return videoSurfaceId;\n    }\n    await avRecorder.prepare(aVRecorderConfig);\n    videoSurfaceId = await avRecorder.getInputSurface();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`createAVRecorder call failed. error code: ${err.code}`);\n  }\n  return videoSurfaceId;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建录像输出流。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#cameraoutputcapability",
            children: "CameraOutputCapability"
          }), "中的videoProfiles属性，可获取当前设备支持的录像输出流。然后，定义创建录像的参数，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#createvideooutput",
            children: "createVideoOutput"
          }), "方法创建录像输出流。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(658653)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "1.预览流与录像输出流的分辨率的宽高比要保持一致，如示例代码中宽高比为640:480 = 4:3，则需要预览流中的分辨率的宽高比也为4:3，如分辨率选择640:480，或960:720，或1440:1080，以此类推。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["2.在设置预览输出流的分辨率宽高前，需要先通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-i/arkts-apis-media-i#avrecorderprofile9",
            children: "AVRecorderProfile"
          }), "查询视频帧支持可配置的宽高范围。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["3.获取录像旋转角度的方法：通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-videooutput/arkts-apis-camera-videooutput",
            children: "VideoOutput"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-videooutput/arkts-apis-camera-videooutput#getvideorotation12",
            children: "getVideoRotation"
          }), "方法获取rotation实际的值。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["4.录像输出流帧率通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#cameraoutputcapability",
            children: "CameraOutputCapability"
          }), "中的videoProfiles属性，选择", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#videoprofile",
            children: "VideoProfile"
          }), "中", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#frameraterange",
            children: "frameRateRange"
          }), "满足实际业务需求的录像输出流videoProfile。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function getVideoOutput(cameraManager: camera.CameraManager, videoSurfaceId: string, cameraOutputCapability: camera.CameraOutputCapability): Promise<camera.VideoOutput | undefined> {\n  if (!cameraManager || !videoSurfaceId || !cameraOutputCapability || !cameraOutputCapability.videoProfiles) {\n    return;\n  }\n  let videoProfilesArray: Array<camera.VideoProfile> = cameraOutputCapability.videoProfiles;\n  if (!videoProfilesArray || videoProfilesArray.length === 0) {\n    console.error(\"videoProfilesArray is null or []\");\n    return undefined;\n  }\n  // AVRecorderProfile。\n  let aVRecorderProfile: media.AVRecorderProfile = {\n    fileFormat : media.ContainerFormatType.CFT_MPEG_4, // 视频文件封装格式，只支持MP4。\n    videoBitrate : 100000, // 视频比特率。\n    videoCodec : media.CodecMimeType.VIDEO_AVC, // 视频文件编码格式，支持avc格式。\n    videoFrameWidth : 640,  // 视频分辨率的宽。\n    videoFrameHeight : 480, // 视频分辨率的高。\n    videoFrameRate : 30 // 视频帧率。\n  };\n  // 创建视频录制的参数，预览流与录像输出流的分辨率的宽(videoFrameWidth)高(videoFrameHeight)比要保持一致。\n  let avMetadata: media.AVMetadata = {\n   videoOrientation: '90' // rotation的值90，是通过getVideoRotation接口获取到的值，具体请参考说明中获取录像旋转角度的方法。\n  }\n  \n  let aVRecorderConfig: media.AVRecorderConfig = {\n    videoSourceType: media.VideoSourceType.VIDEO_SOURCE_TYPE_SURFACE_YUV,\n    profile: aVRecorderProfile,\n    url: 'fd://35', // 此处为样例示范，需要根据开发需求填写实际的路径。\n    metadata: avMetadata\n  };\n  // 创建avRecorder，设置视频录制的参数。\n  let avRecorder: media.AVRecorder | undefined = undefined;\n  try {\n    avRecorder = await media.createAVRecorder();\n    if (avRecorder === undefined) {\n      return undefined;\n    }\n    await avRecorder.prepare(aVRecorderConfig);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`createAVRecorder call failed. error code: ${err.code}`);\n    await avRecorder?.release();\n    return;\n  }\n\n  // 创建VideoOutput对象。\n  let videoOutput: camera.VideoOutput | undefined = undefined;\n  // createVideoOutput传入的videoProfile对象的宽高需要和aVRecorderProfile保持一致。\n  let videoProfile: undefined | camera.VideoProfile = videoProfilesArray.find((profile: camera.VideoProfile) => {\n    return profile.size.width === aVRecorderProfile.videoFrameWidth && profile.size.height === aVRecorderProfile.videoFrameHeight;\n  });\n  if (!videoProfile) {\n    console.error('videoProfile is not found');\n    await avRecorder.release();\n    return undefined;\n  }\n  try {\n    videoOutput = cameraManager.createVideoOutput(videoProfile, videoSurfaceId);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error('Failed to create the videoOutput instance. errorCode = ' + err.code);\n    await avRecorder.release();\n  }\n  return videoOutput;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开始录像。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(477017)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在设置预览流帧率时，需要先通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-previewoutput/arkts-apis-camera-previewoutput#getactiveframerate12",
              children: "getActiveFrameRate"
            }), "查询当前录像流的帧率。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当录像流已设置过范围帧率时，预览流帧率必须设置与其相同的范围帧率。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当录像流已设置过固定帧率时，预览流帧率要设置成录像帧率的约数，且必须也为固定帧率。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["先通过videoOutput的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-videooutput/arkts-apis-camera-videooutput#start-1",
            children: "start"
          }), "方法启动录像输出流，再通过avRecorder的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#start9",
            children: "start"
          }), "方法开始录像。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function startVideo(videoOutput: camera.VideoOutput, avRecorder: media.AVRecorder): Promise<void> {\n try {\n   await videoOutput.start();\n } catch (error) {\n   let err = error as BusinessError;\n   console.error(`start videoOutput failed, error: ${err.code}`);\n }\n avRecorder.start(async (err: BusinessError) => {\n if (err) {\n   console.error(`Failed to start the video output ${err.message}`);\n   return;\n }\n console.info('Callback invoked to indicate the video output start success.');\n });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止录像。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["先通过avRecorder的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-arkts/js-apis-media/arkts-apis-media-avrecorder/arkts-apis-media-avrecorder#stop9-1",
            children: "stop"
          }), "方法停止录像，再通过videoOutput的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-videooutput/arkts-apis-camera-videooutput#stop-1",
            children: "stop"
          }), "方法停止录像输出流。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function stopVideo(videoOutput: camera.VideoOutput, avRecorder: media.AVRecorder): Promise<void> {\n  avRecorder.stop((err: BusinessError) => {\n  if (err) {\n    console.error(`Failed to stop the video output ${err.message}`);\n    return;\n  }\n  console.info('Callback invoked to indicate the video output stop success.');\n  });\n  await videoOutput.stop();\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态监听",
      children: "状态监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在相机应用开发过程中，可以随时监听录像输出流状态，包括录像开始、录像结束、录像流输出的错误。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过注册固定的frameStart回调函数获取监听录像开始结果，videoOutput创建成功时即可监听，录像第一次曝光时触发，有该事件返回结果则认为录像开始。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function onVideoOutputFrameStart(videoOutput: camera.VideoOutput): void {\n  videoOutput.on('frameStart', (err: BusinessError) => {\n    if (err !== undefined && err.code !== 0) {\n      return;\n    }\n    console.info('Video frame started');\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过注册固定的frameEnd回调函数获取监听录像结束结果，videoOutput创建成功时即可监听，录像完成最后一帧时触发，有该事件返回结果则认为录像流已结束。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function onVideoOutputFrameEnd(videoOutput: camera.VideoOutput): void {\n  videoOutput.on('frameEnd', (err: BusinessError) => {\n    if (err !== undefined && err.code !== 0) {\n      return;\n    }\n    console.info('Video frame ended');\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过注册固定的error回调函数获取监听录像输出错误结果，callback返回预览输出接口使用错误时对应的错误码，错误码类型参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#cameraerrorcode",
            children: "CameraErrorCode"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function onVideoOutputError(videoOutput: camera.VideoOutput): void {\n  videoOutput.on('error', (error: BusinessError) => {\n    console.error(`Video output error code: ${error.code}`);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/camera-kit-avrecorder",
          children: "基于CameraKit通过AVRecorder录像"
        })
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
658653(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
477017(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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