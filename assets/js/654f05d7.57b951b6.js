"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["290697"], {
614973(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_native_native_camera_shooting_case_native_camera_shooting_case_md_654_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-native-native-camera-shooting-case-native-camera-shooting-case-md-654.json
var site_docs_camera_kit_camera_dev_native_native_camera_shooting_case_native_camera_shooting_case_md_654_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-native/native-camera-shooting-case/native-camera-shooting-case","title":"拍照实践(C/C++)","description":"在开发相机应用时，需要先申请相关权限。","source":"@site/docs/camera-kit/camera-dev-native/native-camera-shooting-case/native-camera-shooting-case.md","sourceDirName":"camera-kit/camera-dev-native/native-camera-shooting-case","slug":"/camera-kit/camera-dev-native/native-camera-shooting-case/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-shooting-case/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"拍照实践(C/C++)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-shooting-case","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"拍照(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-shooting/"},"next":{"title":"分段式拍照(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-deferred-capture/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-native/native-camera-shooting-case/native-camera-shooting-case.md


const frontMatter = {
	title: '拍照实践(C/C++)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-shooting-case',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '拍照实践(C/C++)';

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
        id: "拍照实践cc",
        children: "拍照实践(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发相机应用时，需要先", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-preparation",
        children: "申请相关权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前示例提供完整的拍照流程及其接口调用顺序的介绍。对于单个流程（如设备输入、会话管理、拍照）的介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-native-mandatory/native-camera-device-management",
        children: "相机开发指导(Native)"
      }), "的具体章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在获取到相机支持的输出流能力后，开始创建拍照流，开发流程如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(797217)/* ["default"] */.A) + "",
        width: "3588",
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
            children: "target_link_libraries(entry PUBLIC\n    libace_napi.z.so\n    libhilog_ndk.z.so\n    libnative_buffer.so\n    libohcamera.so\n    libohimage.so\n    libohfileuri.so\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建头文件ndk_camera.h。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"ohcamera/camera.h\"\n#include \"ohcamera/camera_input.h\"\n#include \"ohcamera/capture_session.h\"\n#include \"ohcamera/photo_output.h\"\n#include \"ohcamera/preview_output.h\"\n#include \"ohcamera/video_output.h\"\n#include \"ohcamera/camera_manager.h\"\n\nclass NDKCamera {\npublic:\n    ~NDKCamera();\n    NDKCamera(char* previewId);\n    Camera_ErrorCode RegisterBufferCb(void* cb);\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "cpp侧导入NDK接口，并根据传入的SurfaceId进行拍照。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"hilog/log.h\"\n\nvoid CaptureSessionOnFocusStateChange(Camera_CaptureSession* session, Camera_FocusState focusState)\n{\n    OH_LOG_INFO(LOG_APP, \"CaptureSessionOnFocusStateChange\");\n}\n\nvoid CaptureSessionOnError(Camera_CaptureSession* session, Camera_ErrorCode errorCode)\n{\n    OH_LOG_INFO(LOG_APP, \"CaptureSessionOnError = %{public}d\", errorCode);\n}\n\nCaptureSession_Callbacks* GetCaptureSessionRegister(void)\n{\n    static CaptureSession_Callbacks captureSessionCallbacks = {\n        .onFocusStateChange = CaptureSessionOnFocusStateChange,\n        .onError = CaptureSessionOnError\n    };\n    return &captureSessionCallbacks;\n}\n\nvoid PreviewOutputOnFrameStart(Camera_PreviewOutput* previewOutput)\n{\n    OH_LOG_INFO(LOG_APP, \"PreviewOutputOnFrameStart\");\n}\n\nvoid PreviewOutputOnFrameEnd(Camera_PreviewOutput* previewOutput, int32_t frameCount)\n{\n    OH_LOG_INFO(LOG_APP, \"PreviewOutputOnFrameEnd = %{public}d\", frameCount);\n}\n\nvoid PreviewOutputOnError(Camera_PreviewOutput* previewOutput, Camera_ErrorCode errorCode)\n{\n    OH_LOG_INFO(LOG_APP, \"PreviewOutputOnError = %{public}d\", errorCode);\n}\n\nPreviewOutput_Callbacks* GetPreviewOutputListener(void)\n{\n    static PreviewOutput_Callbacks previewOutputListener = {\n        .onFrameStart = PreviewOutputOnFrameStart,\n        .onFrameEnd = PreviewOutputOnFrameEnd,\n        .onError = PreviewOutputOnError\n    };\n    return &previewOutputListener;\n}\n\nvoid OnCameraInputError(const Camera_Input* cameraInput, Camera_ErrorCode errorCode)\n{\n    OH_LOG_INFO(LOG_APP, \"OnCameraInput errorCode = %{public}d\", errorCode);\n}\n\nCameraInput_Callbacks* GetCameraInputListener(void)\n{\n    static CameraInput_Callbacks cameraInputCallbacks = {\n        .onError = OnCameraInputError\n    };\n    return &cameraInputCallbacks;\n}\n\nvoid CameraManagerStatusCallback(Camera_Manager* cameraManager, Camera_StatusInfo* status)\n{\n    OH_LOG_INFO(LOG_APP, \"CameraManagerStatusCallback is called\");\n}\n\nCameraManager_Callbacks* GetCameraManagerListener()\n{\n    static CameraManager_Callbacks cameraManagerListener = {\n        .onCameraStatus = CameraManagerStatusCallback\n    };\n    return &cameraManagerListener;\n}\n\nstatic void* bufferCb = nullptr;\nCamera_ErrorCode NDKCamera::RegisterBufferCb(void* cb) {\n    OH_LOG_INFO(LOG_APP, \" RegisterBufferCb start\");\n    if (cb == nullptr) {\n        OH_LOG_INFO(LOG_APP, \" RegisterBufferCb invalid error\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n    bufferCb = cb;\n\n    return CAMERA_OK;\n}\nvoid OnPhotoAvailable(Camera_PhotoOutput* photoOutput, OH_PhotoNative* photo) {\n    OH_LOG_INFO(LOG_APP, \"OnPhotoAvailable start!\");\n    OH_ImageNative* imageNative;\n    Camera_ErrorCode errCode = OH_PhotoNative_GetMainImage(photo, &imageNative);\n    OH_LOG_INFO(LOG_APP, \"OnPhotoAvailable errCode:%{public}d imageNative:%{public}p\", errCode, imageNative);\n    // 读取 OH_ImageNative 的 size 属性。\n    Image_Size size;\n    Image_ErrorCode imageErr = OH_ImageNative_GetImageSize(imageNative, &size);\n    OH_LOG_INFO(LOG_APP, \"OnPhotoAvailable imageErr:%{public}d width:%{public}d height:%{public}d\", imageErr,\n        size.width, size.height);\n    // 读取 OH_ImageNative 的组件列表的元素个数。\n    size_t componentTypeSize = 0;\n    imageErr = OH_ImageNative_GetComponentTypes(imageNative, nullptr, &componentTypeSize);\n    OH_LOG_INFO(LOG_APP, \"OnPhotoAvailable imageErr:%{public}d componentTypeSize:%{public}zu\", imageErr,\n        componentTypeSize);\n    // 读取 OH_ImageNative 的组件列表。\n    uint32_t* components = new uint32_t[componentTypeSize];\n    imageErr = OH_ImageNative_GetComponentTypes(imageNative, &components, &componentTypeSize);\n    OH_LOG_INFO(LOG_APP, \"OnPhotoAvailable OH_ImageNative_GetComponentTypes imageErr:%{public}d\", imageErr);\n    // 读取 OH_ImageNative 的第一个组件所对应的缓冲区对象。\n    OH_NativeBuffer* nativeBuffer = nullptr;\n    imageErr = OH_ImageNative_GetByteBuffer(imageNative, components[0], &nativeBuffer);\n    OH_LOG_INFO(LOG_APP, \"OnPhotoAvailable OH_ImageNative_GetByteBuffer imageErr:%{public}d\", imageErr);\n    // 读取 OH_ImageNative 的第一个组件所对应的缓冲区大小。\n    size_t nativeBufferSize = 0;\n    imageErr = OH_ImageNative_GetBufferSize(imageNative, components[0], &nativeBufferSize);\n    OH_LOG_INFO(LOG_APP, \"OnPhotoAvailable imageErr:%{public}d nativeBufferSize:%{public}zu\", imageErr,\n         nativeBufferSize);\n    // 读取 OH_ImageNative 的第一个组件所对应的像素行宽。\n    int32_t rowStride = 0;\n    imageErr = OH_ImageNative_GetRowStride(imageNative, components[0], &rowStride);\n    OH_LOG_INFO(LOG_APP, \"OnPhotoAvailable imageErr:%{public}d rowStride:%{public}d\", imageErr, rowStride);\n    // 读取 OH_ImageNative 的第一个组件所对应的像素大小。\n    int32_t pixelStride = 0;\n    imageErr = OH_ImageNative_GetPixelStride(imageNative, components[0], &pixelStride);\n    OH_LOG_INFO(LOG_APP, \"OnPhotoAvailable imageErr:%{public}d pixelStride:%{public}d\", imageErr, pixelStride);\n    // 将ION内存映射到进程空间。\n    void* virAddr = nullptr; // 指向映射内存的虚拟地址，解除映射后这个指针将不再有效。\n    int32_t ret = OH_NativeBuffer_Map(nativeBuffer, &virAddr); // 映射后通过第二个参数virAddr返回内存的首地址。\n    OH_LOG_INFO(LOG_APP, \"OnPhotoAvailable OH_NativeBuffer_Map err:%{public}d\", ret);\n    // 通过回调函数，将处理完的buffer传给ArkTS侧做显示或通过安全控件写文件保存，参考拍照(C/C++)开发指导。\n    if (bufferCb == nullptr) {\n        OH_LOG_INFO(LOG_APP, \"Current bufferCb invalid error\");\n        return;\n    }\n    auto cb = (void (*)(void *, size_t))(bufferCb);\n    cb(virAddr, nativeBufferSize);\n    // 在处理完之后，解除映射并释放缓冲区。\n    ret = OH_NativeBuffer_Unmap(nativeBuffer);\n    if (ret != 0) {\n        OH_LOG_ERROR(LOG_APP, \"OnPhotoAvailable OH_NativeBuffer_Unmap error:%{public}d\", ret);\n    }\n}\n\nNDKCamera::NDKCamera(char* previewId)\n{\n    Camera_Manager* cameraManager = nullptr;\n    Camera_Device* cameras = nullptr;\n    Camera_CaptureSession* captureSession = nullptr;\n    Camera_OutputCapability* cameraOutputCapability = nullptr;\n    const Camera_Profile* previewProfile = nullptr;\n    const Camera_Profile* photoProfile = nullptr;\n    Camera_PreviewOutput* previewOutput = nullptr;\n    Camera_PhotoOutput* photoOutput = nullptr;\n    Camera_Input* cameraInput = nullptr;\n    uint32_t size = 0;\n    uint32_t cameraDeviceIndex = 0;\n    char* previewSurfaceId = previewId;\n    // 创建CameraManager对象。\n    Camera_ErrorCode ret = OH_Camera_GetCameraManager(&cameraManager);\n    if (cameraManager == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_Camera_GetCameraManager failed.\");\n        return;\n    }\n    // 监听相机状态变化。\n    ret = OH_CameraManager_RegisterCallback(cameraManager, GetCameraManagerListener());\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_RegisterCallback failed.\");\n    }\n\n    // 获取相机列表。\n    ret = OH_CameraManager_GetSupportedCameras(cameraManager, &cameras, &size);\n    if (cameras == nullptr || size <= 0 || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_GetSupportedCameras failed.\");\n        return;\n    }\n\n    if (size < cameraDeviceIndex + 1) {\n        OH_LOG_ERROR(LOG_APP, \"cameraDeviceIndex is invalid.\");\n        return;\n    }\n\n    // 创建相机输入流。\n    ret = OH_CameraManager_CreateCameraInput(cameraManager, &cameras[cameraDeviceIndex], &cameraInput);\n    if (cameraInput == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_CreateCameraInput failed.\");\n        return;\n    }\n\n    // 监听cameraInput错误信息。\n    ret = OH_CameraInput_RegisterCallback(cameraInput, GetCameraInputListener());\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraInput_RegisterCallback failed.\");\n        return;\n    }\n\n    // 打开相机。\n    ret = OH_CameraInput_Open(cameraInput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraInput_Open failed.\");\n        return;\n    }\n\n    // 获取相机设备支持的输出流能力。\n    ret = OH_CameraManager_GetSupportedCameraOutputCapability(cameraManager, &cameras[cameraDeviceIndex],\n                                                              &cameraOutputCapability);\n    if (cameraOutputCapability == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_GetSupportedCameraOutputCapability failed.\");\n        return;\n    }\n\n    if (cameraOutputCapability->previewProfiles == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"previewProfiles == null\");\n        return;\n    }\n    // 根据所需从cameraOutputCapability->previewProfiles中选择合适的预览分辨率\n    previewProfile = cameraOutputCapability->previewProfiles[0];\n\n    if (cameraOutputCapability->photoProfiles == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"photoProfiles == null\");\n        return;\n    }\n    // 根据所需从cameraOutputCapability->photoProfiles中选择合适的拍照分辨率\n    photoProfile = cameraOutputCapability->photoProfiles[0];\n\n    // 创建预览输出流,其中参数 previewSurfaceId 参考上文 XComponent 组件，预览流为XComponent组件提供的surface。\n    ret = OH_CameraManager_CreatePreviewOutput(cameraManager, previewProfile, previewSurfaceId, &previewOutput);\n    if (previewProfile == nullptr || previewOutput == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_CreatePreviewOutput failed.\");\n        return;\n    }\n\n    // 监听预览输出错误信息。\n    ret = OH_PreviewOutput_RegisterCallback(previewOutput, GetPreviewOutputListener());\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_PreviewOutput_RegisterCallback failed.\");\n    }\n\n    // 创建拍照输出流。\n    ret = OH_CameraManager_CreatePhotoOutputWithoutSurface(cameraManager, photoProfile, &photoOutput);\n\n    // 监听单段式拍照回调。\n    ret = OH_PhotoOutput_RegisterPhotoAvailableCallback(photoOutput, OnPhotoAvailable);\n\n    // 创建会话。\n    ret = OH_CameraManager_CreateCaptureSession(cameraManager, &captureSession);\n    if (captureSession == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_CreateCaptureSession failed.\");\n        return;\n    }\n\n    // 监听session错误信息。\n    ret = OH_CaptureSession_RegisterCallback(captureSession, GetCaptureSessionRegister());\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_RegisterCallback failed.\");\n    }\n\n    // 开始配置会话。\n    ret = OH_CaptureSession_BeginConfig(captureSession);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_BeginConfig failed.\");\n        return;\n    }\n\n    // 向会话中添加相机输入流。\n    ret = OH_CaptureSession_AddInput(captureSession, cameraInput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddInput failed.\");\n        return;\n    }\n\n    // 向会话中添加预览输出流。\n    ret = OH_CaptureSession_AddPreviewOutput(captureSession, previewOutput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddPreviewOutput failed.\");\n        return;\n    }\n\n    // 向会话中添加拍照输出流。\n    ret = OH_CaptureSession_AddPhotoOutput(captureSession, photoOutput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddPhotoOutput failed.\");\n        return;\n    }\n\n    // 提交会话配置。\n    ret = OH_CaptureSession_CommitConfig(captureSession);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_CommitConfig failed.\");\n        return;\n    }\n\n    // 启动会话。\n    ret = OH_CaptureSession_Start(captureSession);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_Start failed.\");\n        return;\n    }\n\n    // 判断设备是否支持闪光灯。\n    Camera_FlashMode flashMode = FLASH_MODE_AUTO;\n    bool hasFlash = false;\n    ret = OH_CaptureSession_HasFlash(captureSession, &hasFlash);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_HasFlash failed.\");\n    }\n    if (hasFlash) {\n        OH_LOG_INFO(LOG_APP, \"hasFlash success\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"hasFlash fail\");\n    }\n    \n    // 检测闪光灯模式是否支持。\n    bool isSupported = false;\n    ret = OH_CaptureSession_IsFlashModeSupported(captureSession, flashMode, &isSupported);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_IsFlashModeSupported failed.\");\n    }\n    if (isSupported) {\n        OH_LOG_INFO(LOG_APP, \"isFlashModeSupported success\");\n\n        // 设置闪光灯模式。\n        ret = OH_CaptureSession_SetFlashMode(captureSession, flashMode);\n        if (ret == CAMERA_OK) {\n            OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_SetFlashMode success.\");\n        } else {\n            OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_SetFlashMode failed. ret : %{public}d \", ret);\n        }\n\n        // 获取当前设备的闪光灯模式。\n        ret = OH_CaptureSession_GetFlashMode(captureSession, &flashMode);\n        if (ret == CAMERA_OK) {\n            OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_GetFlashMode success. flashMode：%{public}d \", flashMode);\n        } else {\n            OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_GetFlashMode failed. ret : %{public}d \", ret);\n        }\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"isFlashModeSupported fail\");\n    }\n\n    // 判断是否支持连续自动变焦模式。\n    Camera_FocusMode focusMode = FOCUS_MODE_CONTINUOUS_AUTO;\n    bool isFocusModeSupported = false;\n    ret = OH_CaptureSession_IsFocusModeSupported(captureSession, focusMode, &isFocusModeSupported);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_IsFocusModeSupported failed.\");\n    }\n    if (isFocusModeSupported) {\n        OH_LOG_INFO(LOG_APP, \"isFocusModeSupported success\");\n        ret = OH_CaptureSession_SetFocusMode(captureSession, focusMode);\n        if (ret != CAMERA_OK) {\n            OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_SetFocusMode failed. ret : %{public}d \", ret);\n        }\n        ret = OH_CaptureSession_GetFocusMode(captureSession, &focusMode);\n        if (ret == CAMERA_OK) {\n            OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_GetFocusMode success. focusMode%{public}d \", focusMode);\n        } else {\n            OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_GetFocusMode failed. ret : %{public}d \", ret);\n        }\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"isFocusModeSupported fail\");\n    }\n\n    // 获取相机支持的可变焦距比范围。\n    float minZoom;\n    float maxZoom;\n    ret = OH_CaptureSession_GetZoomRatioRange(captureSession, &minZoom, &maxZoom);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_GetZoomRatioRange failed.\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_GetZoomRatioRange success. minZoom: %{public}f, maxZoom:%{public}f\",\n            minZoom, maxZoom);\n    }\n\n    // 设置变焦。\n    ret = OH_CaptureSession_SetZoomRatio(captureSession, maxZoom);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_SetZoomRatio success.\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_SetZoomRatio failed. ret : %{public}d \", ret);\n    }\n\n    // 获取当前设备的变焦值。\n    ret = OH_CaptureSession_GetZoomRatio(captureSession, &maxZoom);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_GetZoomRatio success. zoom：%{public}f \", maxZoom);\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_GetZoomRatio failed. ret : %{public}d \", ret);\n    }\n\n    // 无拍照设置进行拍照。\n    ret = OH_PhotoOutput_Capture(photoOutput);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_PhotoOutput_Capture success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_PhotoOutput_Capture failed. ret : %{public}d \", ret);\n    }\n\n    // 停止当前会话。\n    ret = OH_CaptureSession_Stop(captureSession);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_Stop success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_Stop failed. ret : %{public}d \", ret);\n    }\n\n    // 释放相机输入流。\n    ret = OH_CameraInput_Close(cameraInput);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CameraInput_Close success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraInput_Close failed. ret : %{public}d \", ret);\n    }\n\n    // 释放预览输出流。\n    ret = OH_PreviewOutput_Release(previewOutput);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_PreviewOutput_Release success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_PreviewOutput_Release failed. ret : %{public}d \", ret);\n    }\n\n    // 释放拍照输出流。\n    ret = OH_PhotoOutput_Release(photoOutput);\n    if (ret == CAMERA_OK) {\n      OH_LOG_INFO(LOG_APP, \"OH_PhotoOutput_Release success \");\n    } else {\n      OH_LOG_ERROR(LOG_APP, \"OH_PhotoOutput_Release failed. ret : %{public}d \", ret);\n    }\n\n    // 释放会话。\n    ret = OH_CaptureSession_Release(captureSession);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_Release success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_Release failed. ret : %{public}d \", ret);\n    }\n\n    // 资源释放。\n    ret = OH_CameraManager_DeleteSupportedCameras(cameraManager, cameras, size);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Delete Cameras failed.\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_DeleteSupportedCameras. ok\");\n    }\n    ret = OH_CameraManager_DeleteSupportedCameraOutputCapability(cameraManager, cameraOutputCapability);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Delete Cameras failed.\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_DeleteSupportedCameraOutputCapability. ok\");\n    }\n    ret = OH_Camera_DeleteCameraManager(cameraManager);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"Delete Cameras failed.\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_Camera_DeleteCameraManager. ok\");\n    }\n}\n"
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
797217(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478583-ddb1220589b7c2bc56bf28ada3354cfe.png");

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