"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["378276"], {
443160(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_native_native_camera_recording_case_native_camera_recording_case_md_ccb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-native-native-camera-recording-case-native-camera-recording-case-md-ccb.json
var site_docs_camera_kit_camera_dev_native_native_camera_recording_case_native_camera_recording_case_md_ccb_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-native/native-camera-recording-case/native-camera-recording-case","title":"录像实践(C/C++)","description":"在开发相机应用时，需要先申请相关权限。","source":"@site/docs/camera-kit/camera-dev-native/native-camera-recording-case/native-camera-recording-case.md","sourceDirName":"camera-kit/camera-dev-native/native-camera-recording-case","slug":"/camera-kit/camera-dev-native/native-camera-recording-case/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-recording-case/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"录像实践(C/C++)","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-recording-case","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"录像(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-recording/"},"next":{"title":"元数据(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-metadata/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-native/native-camera-recording-case/native-camera-recording-case.md


const frontMatter = {
	title: '录像实践(C/C++)',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-recording-case',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '录像实践(C/C++)';

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
        id: "录像实践cc",
        children: "录像实践(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发相机应用时，需要先", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-preparation",
        children: "申请相关权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前示例提供完整的录像流程及其接口调用顺序的介绍。对于单个流程（如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-native-mandatory/native-camera-device-input",
        children: "设备输入"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-native-mandatory/native-camera-session-management",
        children: "会话管理"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-native/native-camera-recording",
        children: "录像"
      }), "）的介绍请参考具体章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在获取到相机支持的输出流能力后，开始创建录像流，开发流程如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(410326)/* ["default"] */.A) + "",
        width: "3683",
        height: "4096"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在CMake脚本中链接相关动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC\n    libace_napi.z.so\n    libohcamera.so\n    libhilog_ndk.z.so\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建头文件ndk_camera.h。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"ohcamera/camera.h\"\n#include \"ohcamera/camera_input.h\"\n#include \"ohcamera/capture_session.h\"\n#include \"ohcamera/photo_output.h\"\n#include \"ohcamera/preview_output.h\"\n#include \"ohcamera/video_output.h\"\n#include \"ohcamera/camera_manager.h\"\n\nclass NDKCamera {\npublic:\n    ~NDKCamera();\n    NDKCamera(char* previewId, char* videoId);\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "cpp侧导入NDK接口，并根据传入的SurfaceId进行录像。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"hilog/log.h\"\n#include <cmath>\n\nbool IsAspectRatioEqual(float videoAspectRatio, float previewAspectRatio)\n{\n    float epsilon = 1e-6f;\n    return fabsf(videoAspectRatio - previewAspectRatio) <= epsilon;\n}\n\nvoid OnCameraInputError(const Camera_Input* cameraInput, Camera_ErrorCode errorCode)\n{\n    OH_LOG_INFO(LOG_APP, \"OnCameraInput errorCode = %{public}d\", errorCode);\n}\n\nCameraInput_Callbacks* GetCameraInputListener(void)\n{\n    static CameraInput_Callbacks cameraInputCallbacks = {\n        .onError = OnCameraInputError\n    };\n    return &cameraInputCallbacks;\n}\n\nvoid CaptureSessionOnFocusStateChange(Camera_CaptureSession* session, Camera_FocusState focusState)\n{\n    OH_LOG_INFO(LOG_APP, \"CaptureSessionOnFocusStateChange\");\n}\n\nvoid CaptureSessionOnError(Camera_CaptureSession* session, Camera_ErrorCode errorCode)\n{\n    OH_LOG_INFO(LOG_APP, \"CaptureSessionOnError = %{public}d\", errorCode);\n}\n\nCaptureSession_Callbacks* GetCaptureSessionRegister(void)\n{\n    static CaptureSession_Callbacks captureSessionCallbacks = {\n        .onFocusStateChange = CaptureSessionOnFocusStateChange,\n        .onError = CaptureSessionOnError\n    };\n    return &captureSessionCallbacks;\n}\n\nvoid VideoOutputOnFrameStart(Camera_VideoOutput* videoOutput)\n{\n    OH_LOG_INFO(LOG_APP, \"VideoOutputOnFrameStart\");\n}\n\nvoid VideoOutputOnFrameEnd(Camera_VideoOutput* videoOutput, int32_t frameCount)\n{\n    OH_LOG_INFO(LOG_APP, \"VideoOutput frameCount = %{public}d\", frameCount);\n}\n\nvoid VideoOutputOnError(Camera_VideoOutput* videoOutput, Camera_ErrorCode errorCode)\n{\n    OH_LOG_INFO(LOG_APP, \"VideoOutput errorCode = %{public}d\", errorCode);\n}\n\nVideoOutput_Callbacks* GetVideoOutputListener(void)\n{\n    static VideoOutput_Callbacks videoOutputListener = {\n        .onFrameStart = VideoOutputOnFrameStart,\n        .onFrameEnd = VideoOutputOnFrameEnd,\n        .onError = VideoOutputOnError\n    };\n    return &videoOutputListener;\n}\n\nvoid CameraManagerStatusCallback(Camera_Manager* cameraManager, Camera_StatusInfo* status)\n{\n    OH_LOG_INFO(LOG_APP, \"CameraManagerStatusCallback is called\");\n}\n\nCameraManager_Callbacks* GetCameraManagerListener()\n{\n    static CameraManager_Callbacks cameraManagerListener = {\n        .onCameraStatus = CameraManagerStatusCallback\n    };\n    return &cameraManagerListener;\n}\n\nNDKCamera::NDKCamera(char* previewId, char* videoId)\n{\n    Camera_Manager* cameraManager = nullptr;\n    Camera_Device* cameras = nullptr;\n    Camera_CaptureSession* captureSession = nullptr;\n    Camera_OutputCapability* cameraOutputCapability = nullptr;\n    Camera_VideoOutput* videoOutput = nullptr;\n    const Camera_Profile* previewProfile = nullptr;\n    const Camera_Profile* photoProfile = nullptr;\n    const Camera_VideoProfile* videoProfile = nullptr;\n    Camera_PreviewOutput* previewOutput = nullptr;\n    Camera_PhotoOutput* photoOutput = nullptr;\n    Camera_Input* cameraInput = nullptr;\n    uint32_t size = 0;\n    uint32_t cameraDeviceIndex = 0;\n    char* videoSurfaceId = videoId;\n    char* previewSurfaceId = previewId;\n    // 创建CameraManager对象。\n    Camera_ErrorCode ret = OH_Camera_GetCameraManager(&cameraManager);\n    if (cameraManager == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_Camera_GetCameraManager failed.\");\n        return;\n    }\n    // 监听相机状态变化。\n    ret = OH_CameraManager_RegisterCallback(cameraManager, GetCameraManagerListener());\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_RegisterCallback failed.\");\n        return;\n    }\n\n    // 获取相机列表。\n    ret = OH_CameraManager_GetSupportedCameras(cameraManager, &cameras, &size);\n    if (cameras == nullptr || size <= 0 || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_GetSupportedCameras failed.\");\n        return;\n    }\n\n    for (int index = 0; index < size; index++) {\n        OH_LOG_ERROR(LOG_APP, \"cameraId  =  %{public}s \", cameras[index].cameraId);              // 获取相机ID。\n        OH_LOG_ERROR(LOG_APP, \"cameraPosition  =  %{public}d \", cameras[index].cameraPosition);  // 获取相机位置。\n        OH_LOG_ERROR(LOG_APP, \"cameraType  =  %{public}d \", cameras[index].cameraType);          // 获取相机类型。\n        OH_LOG_ERROR(LOG_APP, \"connectionType  =  %{public}d \", cameras[index].connectionType);  // 获取相机连接类型。\n    }\n\n    if (size < cameraDeviceIndex + 1) {\n        OH_LOG_ERROR(LOG_APP, \"cameraDeviceIndex is invalid.\");\n        return;\n    }\n\n    // 获取相机设备支持的输出流能力。\n    ret = OH_CameraManager_GetSupportedCameraOutputCapability(cameraManager, &cameras[cameraDeviceIndex],\n                                                            &cameraOutputCapability);\n    if (cameraOutputCapability == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_GetSupportedCameraOutputCapability failed.\");\n        return;\n    }\n\n    if (cameraOutputCapability->previewProfiles == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"previewProfiles == null\");\n        return;\n    }\n    previewProfile = cameraOutputCapability->previewProfiles[0];\n    OH_LOG_INFO(LOG_APP, \"previewProfile width: %{public}d, height: %{public}d.\", previewProfile->size.width,\n        previewProfile->size.height);\n    if (cameraOutputCapability->photoProfiles == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"photoProfiles == null\");\n        return;\n    }\n    photoProfile = cameraOutputCapability->photoProfiles[0];\n\n    if (cameraOutputCapability->videoProfiles == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"videoProfiles == null\");\n        return;\n    }\n    // 预览流宽高比要与录像流的宽高比一致，如果录制的是hdr视频，请筛选支持hdr的Camera_VideoProfile。\n    Camera_VideoProfile** videoProfiles = cameraOutputCapability->videoProfiles;\n    for (int index = 0; index < cameraOutputCapability->videoProfilesSize; index++) {\n        bool isEqual = IsAspectRatioEqual((float)videoProfiles[index]->size.width / videoProfiles[index]->size.height,\n            (float)previewProfile->size.width / previewProfile->size.height);\n        // 默认筛选CAMERA_FORMAT_YUV_420_SP的profile。\n        if (isEqual && videoProfiles[index]->format == Camera_Format::CAMERA_FORMAT_YUV_420_SP) {\n            videoProfile = videoProfiles[index];\n            OH_LOG_INFO(LOG_APP, \"videoProfile width: %{public}d, height: %{public}d.\", videoProfile->size.width,\n                videoProfile->size.height);\n            break;\n        }\n    }\n    if (videoProfile == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"Get videoProfile failed.\");\n        return;\n    }\n    // 创建VideoOutput对象。\n    ret = OH_CameraManager_CreateVideoOutput(cameraManager, videoProfile, videoSurfaceId, &videoOutput);\n    if (videoOutput == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_CreateVideoOutput failed.\");\n        return;\n    }\n\n    // 监听视频输出错误信息。\n    ret = OH_VideoOutput_RegisterCallback(videoOutput, GetVideoOutputListener());\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_VideoOutput_RegisterCallback failed.\");\n    }\n\n    // 创建会话。\n    ret = OH_CameraManager_CreateCaptureSession(cameraManager, &captureSession);\n    if (captureSession == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_CreateCaptureSession failed.\");\n        return;\n    }\n    // 监听session错误信息。\n    ret = OH_CaptureSession_RegisterCallback(captureSession, GetCaptureSessionRegister());\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_RegisterCallback failed.\");\n    }\n\n    // 开始配置会话。\n    ret = OH_CaptureSession_BeginConfig(captureSession);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_BeginConfig failed.\");\n        return;\n    }\n\n    // 创建相机输入流。\n    ret = OH_CameraManager_CreateCameraInput(cameraManager, &cameras[cameraDeviceIndex], &cameraInput);\n    if (cameraInput == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_CreateCameraInput failed.\");\n        return;\n    }\n\n    // 监听cameraInput错误信息。\n    ret = OH_CameraInput_RegisterCallback(cameraInput, GetCameraInputListener());\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraInput_RegisterCallback failed.\");\n    }\n\n    // 打开相机。\n    ret = OH_CameraInput_Open(cameraInput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraInput_Open failed.\");\n        return;\n    }\n\n    // 向会话中添加相机输入流。\n    ret = OH_CaptureSession_AddInput(captureSession, cameraInput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddInput failed.\");\n        return;\n    }\n\n    // 创建预览输出流,其中参数 surfaceId 参考下面 XComponent 组件，预览流为XComponent组件提供的surface。\n    ret = OH_CameraManager_CreatePreviewOutput(cameraManager, previewProfile, previewSurfaceId, &previewOutput);\n    if (previewProfile == nullptr || previewOutput == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_CreatePreviewOutput failed.\");\n        return;\n    }\n\n    // 向会话中添加预览输出流。\n    ret = OH_CaptureSession_AddPreviewOutput(captureSession, previewOutput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddPreviewOutput failed.\");\n        return;\n    }\n\n    // 向会话中添加录像输出流。\n    ret = OH_CaptureSession_AddVideoOutput(captureSession, videoOutput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddVideoOutput failed.\");\n        return;\n    }\n\n    // 提交会话配置。\n    ret = OH_CaptureSession_CommitConfig(captureSession);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_CommitConfig failed.\");\n        return;\n    }\n\n    // 启动会话。\n    ret = OH_CaptureSession_Start(captureSession);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_Start failed.\");\n        return;\n    }\n\n    // 启动录像输出流。\n    ret = OH_VideoOutput_Start(videoOutput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_VideoOutput_Start failed.\");\n        return;\n    }\n\n    // 开始录像 ts侧调用avRecorder.start()。\n\n    // 停止录像输出流。\n    ret = OH_VideoOutput_Stop(videoOutput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_VideoOutput_Stop failed.\");\n    }\n\n    // 停止录像 ts侧调用avRecorder.stop()。\n\n    // 停止当前会话。\n    ret = OH_CaptureSession_Stop(captureSession);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_Stop success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_Stop failed. %d \", ret);\n    }\n\n    // 释放相机输入流。\n    ret = OH_CameraInput_Close(cameraInput);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CameraInput_Close success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraInput_Close failed. %d \", ret);\n    }\n\n    // 释放预览输出流。\n    ret = OH_PreviewOutput_Release(previewOutput);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_PreviewOutput_Release success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_PreviewOutput_Release failed. %d \", ret);\n    }\n\n    // 释放录像输出流。\n    ret = OH_VideoOutput_Release(videoOutput);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_VideoOutput_Release success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_VideoOutput_Release failed. %d \", ret);\n    }\n\n    // 释放会话。\n    ret = OH_CaptureSession_Release(captureSession);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_Release success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_Release failed. %d \", ret);\n    }\n\n    // 资源释放。\n    ret = OH_CameraManager_DeleteSupportedCameras(cameraManager, cameras, size);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Delete Cameras failed.\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_DeleteSupportedCameras. ok\");\n    }\n    ret = OH_CameraManager_DeleteSupportedCameraOutputCapability(cameraManager, cameraOutputCapability);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Delete Cameras failed.\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_DeleteSupportedCameraOutputCapability success\");\n    }\n    ret = OH_Camera_DeleteCameraManager(cameraManager);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Delete Cameras failed.\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_Camera_DeleteCameraManager success\");\n    }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["录像示例代码请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/CameraKit/NDKPhotoVideoSample",
          children: "NDKPhotoVideoSample(C/C++)"
        }), "。"]
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
410326(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798934-76b42b23b12be963423a1f8813f04707.png");

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