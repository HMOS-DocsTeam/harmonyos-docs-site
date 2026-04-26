"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["672724"], {
483958(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_native_native_camera_shooting_native_camera_shooting_md_c9b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-native-native-camera-shooting-native-camera-shooting-md-c9b.json
var site_docs_camera_kit_camera_dev_native_native_camera_shooting_native_camera_shooting_md_c9b_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-native/native-camera-shooting/native-camera-shooting","title":"拍照(C/C++)","description":"概述","source":"@site/docs/camera-kit/camera-dev-native/native-camera-shooting/native-camera-shooting.md","sourceDirName":"camera-kit/camera-dev-native/native-camera-shooting","slug":"/camera-kit/camera-dev-native/native-camera-shooting/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-shooting/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"拍照(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-shooting","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"预览流二次处理(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-preview-imagereceiver/"},"next":{"title":"拍照实践(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-shooting-case/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-native/native-camera-shooting/native-camera-shooting.md


const frontMatter = {
	title: '拍照(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-shooting',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '拍照(C/C++)';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "高性能拍照",
  "id": "高性能拍照",
  "level": 2
}, {
  "value": "画质优先策略",
  "id": "画质优先策略",
  "level": 3
}, {
  "value": "如何正确设置画质优先策略",
  "id": "如何正确设置画质优先策略",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
  "level": 3
}, {
  "value": "状态监听",
  "id": "状态监听",
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
    ol: "ol",
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
        id: "拍照cc",
        children: "拍照(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拍照是相机的重要功能之一，拍照模块基于相机复杂的逻辑，为了保证用户拍出的照片质量，在中间步骤可以设置分辨率、闪光灯、焦距、照片质量及旋转角度等信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["目前相机开发有两种相机拍照方案，分别是相机", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-native/native-camera-deferred-capture",
        children: "分段式拍照"
      }), "和相机单段式拍照（", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "本文将以单段式拍照为基础进行说明"
        })
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分段式拍照是指相机拍照既可以输出低质量图用作缩略图，提升用户感知拍照速度，也可以使用高质量图保证最后的成图质量达到系统相机的水平。满足了图像处理算法的需求的同时，又不会阻塞前台的拍照速度，构筑相机性能竞争力，提升用户体验。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["单段式拍照是指在拍照过程中通过多帧融合以及多个底层算法处理之后返回一张高质量图片，所以Shot2See（用户点击拍照控件到在缩略图显示区域显示缩略图的过程）完成时延较长。此外，单段式拍照支持通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E9%AB%98%E6%80%A7%E8%83%BD%E6%8B%8D%E7%85%A7",
          children: "高性能拍照"
        }), "功能调整", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%94%BB%E8%B4%A8%E4%BC%98%E5%85%88%E7%AD%96%E7%95%A5",
          children: "画质优先策略"
        }), "，以加快出图速度或提升图片质量。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera",
        children: "OH_Camera"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入NDK接口，接口中提供了相机相关的属性和方法，导入方法如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstdint>\n#include <native_buffer/buffer_common.h>\n#include <unistd.h>\n#include <string>\n#include <thread>\n#include <cstdio>\n#include <fcntl.h>\n#include <map>\n#include <string>\n#include <vector>\n#include <native_buffer/native_buffer.h>\n#include \"iostream\"\n#include \"mutex\"\n\n#include \"hilog/log.h\"\n#include \"ohcamera/camera.h\"\n#include \"ohcamera/camera_input.h\"\n#include \"ohcamera/capture_session.h\"\n#include \"ohcamera/photo_output.h\"\n#include \"ohcamera/preview_output.h\"\n#include \"ohcamera/video_output.h\"\n#include \"napi/native_api.h\"\n#include \"ohcamera/camera_manager.h\"\n#include <window_manager/oh_display_info.h>\n#include <window_manager/oh_display_manager.h>\n\nnamespace OHOS_CAMERA_SAMPLE {\nclass NDKCamera {\n  public:\n    struct CameraBuildingConfig {\n        char *str;\n        uint32_t focusMode;\n        uint32_t cameraDeviceIndex;\n        bool isVideo;\n        bool isHdr;\n        char *videoId;\n    };\n    ~NDKCamera();\n    explicit NDKCamera(CameraBuildingConfig config);\n    // ...\n};\n} // namespace OHOS_CAMERA_SAMPLE\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在CMake脚本中链接相关动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC\n    libace_napi.z.so\n    libhilog_ndk.z.so\n    libnative_buffer.so\n    libohcamera.so\n    libohimage.so\n    libohfileuri.so\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建并打开相机设备，参考 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-native-mandatory/native-camera-device-input",
            children: "设备输入(C/C++)"
          }), "步骤3-5。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择设备支持的输出流能力，创建拍照输出流。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_createphotooutputwithoutsurface",
            children: "OH_CameraManager_CreatePhotoOutputWithoutSurface()"
          }), "方法创建拍照输出流。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode NDKCamera::CreatePhotoOutputWithoutSurfaceId()\n{\n    OH_LOG_ERROR(LOG_APP, \"CreatePhotoOutputWithoutSurfaceId enter.\");\n    profile_ = cameraOutputCapability_->photoProfiles[0];\n    Camera_Profile* profile = cameraOutputCapability_->photoProfiles[0];\n    profile->size.width = NUM_1920;\n    profile->size.height = NUM_1080;\n    profile_ = profile;\n    if (profile_ == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"Get photoProfiles failed.\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n    ret_ = OH_CameraManager_CreatePhotoOutputWithoutSurface(cameraManager_, profile_, &photoOutput_);\n    if (photoOutput_ == nullptr || ret_ != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"CreatePhotoOutputWithoutSurfaceId failed.\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n// ...\n    return ret_;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["注册单段式(PhotoAvailable)拍照回调，若应用希望快速得到回图，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-native/native-camera-deferred-capture",
            children: "分段式拍照回调(PhotoAssetAvailable)"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(77165)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果已经注册了PhotoAssetAvailable回调，并且在Session开始之后又注册了PhotoAvailable回调，PhotoAssetAvailable和PhotoAvailable同时注册，会导致流被重启，仅PhotoAssetAvailable生效。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不建议开发者同时注册PhotoAssetAvailable和PhotoAvailable。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "单段式拍照开发流程（PhotoAvailable）"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在会话commitConfig前注册单段式拍照回调。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在单段式拍照回调函数中获取图片信息，解析出buffer数据，做自定义业务处理。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "将处理完的buffer通过回调传给ArkTS侧，做图片显示或通过安全控件写文件保存图片。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "使用完后解注册单段式拍照回调函数。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 保存NAPI侧注册的buffer处理回调函数。\nCamera_ErrorCode NDKCamera::RegisterBufferCb(void *cb)\n{\n    OH_LOG_INFO(LOG_APP, \" RegisterBufferCb start\");\n    if (cb == nullptr) {\n        OH_LOG_INFO(LOG_APP, \" RegisterBufferCb invalid error\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n    g_bufferCb = cb;\n    return CAMERA_OK;\n}\n\nstatic bool ProcessImageNative(OH_ImageNative* imageNative, uint32_t** components,\n                               OH_NativeBuffer** nativeBuffer, size_t* nativeBufferSize)\n{\n    if (imageNative == nullptr || components == nullptr || nativeBuffer == nullptr || nativeBufferSize == nullptr) {\n        return false;\n    }\n\n    Image_Size size;\n    Image_ErrorCode imageErr = OH_ImageNative_GetImageSize(imageNative, &size);\n    if (imageErr != IMAGE_SUCCESS) {\n        return false;\n    }\n\n    size_t componentTypeSize = 0;\n    imageErr = OH_ImageNative_GetComponentTypes(imageNative, nullptr, &componentTypeSize);\n    if (imageErr != IMAGE_SUCCESS || componentTypeSize == 0) {\n        OH_LOG_ERROR(LOG_APP, \"GetComponentTypes failed: %{public}d, size: %{public}zu\",\n            imageErr, componentTypeSize);\n        return false;\n    }\n\n    if (componentTypeSize > (SIZE_MAX / sizeof(uint32_t))) {\n        OH_LOG_ERROR(LOG_APP, \"componentTypeSize too large: %{public}zu\", componentTypeSize);\n        return false;\n    }\n\n    uint32_t* compArray = new (std::nothrow) uint32_t[componentTypeSize];\n    if (!compArray) {\n        return false;\n    }\n\n    size_t tempSize = componentTypeSize;\n    imageErr = OH_ImageNative_GetComponentTypes(imageNative, &compArray, &tempSize);\n    if (imageErr != IMAGE_SUCCESS) {\n        delete[] compArray;\n        return false;\n    }\n    *components = compArray;\n\n    imageErr = OH_ImageNative_GetByteBuffer(imageNative, compArray[0], nativeBuffer);\n    if (imageErr != IMAGE_SUCCESS) {\n        delete[] compArray;\n        return false;\n    }\n\n    imageErr = OH_ImageNative_GetBufferSize(imageNative, compArray[0], nativeBufferSize);\n    if (imageErr != IMAGE_SUCCESS) {\n        delete[] compArray;\n        return false;\n    }\n\n    int32_t rowStride = 0;\n    int32_t pixelStride = 0;\n    OH_ImageNative_GetRowStride(imageNative, compArray[0], &rowStride);\n    OH_ImageNative_GetPixelStride(imageNative, compArray[0], &pixelStride);\n    OH_LOG_INFO(LOG_APP, \"Buffer size: %{public}zu, strides: %{public}d/%{public}d\",\n        *nativeBufferSize, rowStride, pixelStride);\n\n    return true;\n}\n\n\nstatic void CleanupResources(OH_ImageNative* imageNative, uint32_t* components,\n                             OH_NativeBuffer* nativeBuffer, void* virAddr)\n{\n    if (components) {\n        delete[] components;\n    }\n\n    if (imageNative) {\n        int32_t ret = OH_ImageNative_Release(imageNative);\n        if (ret != 0) {\n            OH_LOG_ERROR(LOG_APP, \"Release image failed: %{public}d\", ret);\n        }\n    }\n\n    if (nativeBuffer && virAddr) {\n        int32_t ret = OH_NativeBuffer_Unmap(nativeBuffer);\n        if (ret != 0) {\n            OH_LOG_ERROR(LOG_APP, \"Unmap buffer failed: %{public}d\", ret);\n        }\n    }\n}\n\nvoid OnPhotoAvailable(Camera_PhotoOutput *photoOutput, OH_PhotoNative *photo)\n{\n    OH_LOG_INFO(LOG_APP, \"OnPhotoAvailable start!\");\n\n    OH_ImageNative *imageNative = nullptr;\n    Camera_ErrorCode errCode = OH_PhotoNative_GetMainImage(photo, &imageNative);\n    if (errCode != CAMERA_OK || !imageNative) {\n        OH_LOG_ERROR(LOG_APP, \"GetMainImage failed: %{public}d\", errCode);\n        return;\n    }\n\n    uint32_t* components = nullptr;\n    OH_NativeBuffer* nativeBuffer = nullptr;\n    size_t nativeBufferSize = 0;\n\n    if (!ProcessImageNative(imageNative, &components, &nativeBuffer, &nativeBufferSize)) {\n        CleanupResources(imageNative, components, nullptr, nullptr);\n        return;\n    }\n\n    void* virAddr = nullptr;\n    int32_t ret = OH_NativeBuffer_Map(nativeBuffer, &virAddr);\n    if (ret != 0 || !virAddr) {\n        OH_LOG_ERROR(LOG_APP, \"Map buffer failed: %{public}d\", ret);\n        CleanupResources(imageNative, components, nativeBuffer, nullptr);\n        return;\n    }\n\n    auto cb = (void (*)(void *, size_t))(g_bufferCb);\n    if (cb && virAddr && nativeBufferSize > 0) {\n        cb(virAddr, nativeBufferSize);\n        OH_LOG_INFO(LOG_APP, \"Buffer callback called\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"Invalid callback parameters\");\n    }\n\n    CleanupResources(imageNative, components, nativeBuffer, virAddr);\n\n    OH_LOG_INFO(LOG_APP, \"OnPhotoAvailable end\");\n}\n\nCamera_ErrorCode NDKCamera::PhotoOutputRegisterPhotoAvailableCallback(void)\n{\n    OH_LOG_INFO(LOG_APP, \"NDKCamera::PhotoOutputRegisterPhotoAvailableCallback start!\");\n    Camera_ErrorCode ret = OH_PhotoOutput_RegisterPhotoAvailableCallback(photoOutput_, OnPhotoAvailable);\n    if (ret != CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"NDKCamera::PhotoOutputRegisterPhotoAvailableCallback failed.\");\n    }\n    OH_LOG_INFO(LOG_APP, \"NDKCamera::PhotoOutputRegisterPhotoAvailableCallback return with ret code: %{public}d!\",\n        ret_);\n    return ret;\n}\n\n// 解注册单段式拍照回调。\nCamera_ErrorCode NDKCamera::PhotoOutputUnRegisterPhotoAvailableCallback()\n{\n    OH_LOG_INFO(LOG_APP, \"PhotoOutputUnRegisterPhotoAvailableCallback start!\");\n    Camera_ErrorCode ret = OH_PhotoOutput_UnregisterPhotoAvailableCallback(photoOutput_, OnPhotoAvailable);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"PhotoOutputUnRegisterPhotoAvailableCallback failed.\");\n    }\n    OH_LOG_INFO(LOG_APP, \"PhotoOutputUnRegisterPhotoAvailableCallback return with ret code: %{public}d!\", ret);\n    return ret;\n}\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "NAPI层buffer回调处理参考示例代码："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// NAPI层buffer回调方法。\nstatic void BufferCb(void* buffer, size_t size)\n{\n    OH_LOG_INFO(LOG_APP, \"BufferCb size:%{public}zu\", size);\n    g_size = size;\n    napi_value asyncResource = nullptr;\n    napi_value asyncResourceName = nullptr;\n    napi_async_work work;\n\n    if (size == 0 || size > SIZE_MAX) {\n        OH_LOG_ERROR(LOG_APP, \"BufferCb size is invalid\");\n        return;\n    }\n    void* copyBuffer = malloc(size);\n    if (copyBuffer == nullptr) {\n        return;\n    }\n    OH_LOG_INFO(LOG_APP, \"BufferCb copyBuffer:%{public}p\", copyBuffer);\n    // 使用std::memcpy复制buffer的内容到copyBuffer。\n    std::memcpy(copyBuffer, buffer, size);\n    napi_create_string_utf8(env_, \"BufferCb\", NAPI_AUTO_LENGTH, &asyncResourceName);\n    napi_status status = napi_create_async_work(\n        env_, asyncResource, asyncResourceName, [](napi_env env, void* copyBuffer) {},\n        [](napi_env env, napi_status status, void* copyBuffer) {\n            napi_value retVal;\n            napi_value callback = nullptr;\n            void* data = nullptr;\n            napi_value arrayBuffer = nullptr;\n            size_t bufferSize = g_size;\n            napi_create_arraybuffer(env, bufferSize, &data, &arrayBuffer);\n            std::memcpy(data, copyBuffer, bufferSize);\n            OH_LOG_INFO(LOG_APP, \"BufferCb g_size: %{public}zu\", g_size);\n            napi_get_reference_value(env, bufferCbRef_, &callback);\n            if (callback) {\n                OH_LOG_INFO(LOG_APP, \"BufferCb callback is full\");\n            } else {\n                OH_LOG_ERROR(LOG_APP, \"BufferCb callback is null\");\n            }\n            // 调用ArkTS的buffer处理回调函数，将图片arrayBuffer传给页面做显示或保存。\n            napi_call_function(env, nullptr, callback, 1, &arrayBuffer, &retVal);\n        },\n        copyBuffer, &work);\n    // 错误检查：创建异步工作失败时释放内存。\n    if (status != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \"Failed to create async work\");\n        free(copyBuffer); // 释放分配的内存。\n        return;\n    }\n    napi_queue_async_work_with_qos(env_, work, napi_qos_user_initiated);\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建拍照类型会话，参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-native-mandatory/native-camera-session-management",
            children: "会话管理(C/C++)"
          }), "，开启会话，准备拍照。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置拍照参数（可选）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置相机的参数可以调整拍照的一些功能，包括闪光灯、变焦、焦距等。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode NDKCamera::HasFlashFn(uint32_t mode)\n{\n    Camera_FlashMode flashMode = static_cast<Camera_FlashMode>(mode);\n    // 检查闪光灯。\n    bool hasFlash = false;\n    Camera_ErrorCode ret = OH_CaptureSession_HasFlash(captureSession_, &hasFlash);\n    if (captureSession_ == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_HasFlash failed.\");\n    }\n    if (hasFlash) {\n        OH_LOG_INFO(LOG_APP, \"hasFlash success-----\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"hasFlash fail-----\");\n    }\n\n    // 查询闪光灯模式是否支持。\n    bool isSupported = false;\n    ret = OH_CaptureSession_IsFlashModeSupported(captureSession_, flashMode, &isSupported);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_IsFlashModeSupported failed.\");\n    }\n    if (isSupported) {\n        OH_LOG_INFO(LOG_APP, \"isFlashModeSupported success-----\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"isFlashModeSupported fail-----\");\n    }\n\n    // 设置闪光灯模式。\n    ret = OH_CaptureSession_SetFlashMode(captureSession_, flashMode);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_SetFlashMode success.\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_SetFlashMode failed. %{public}d \", ret);\n    }\n\n    // 获取当前设备的闪光灯模式。\n    ret = OH_CaptureSession_GetFlashMode(captureSession_, &flashMode);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_GetFlashMode success. flashMode：%{public}d \", flashMode);\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_GetFlashMode failed. %d \", ret);\n    }\n    return ret;\n}\n\n// 对焦模式。\nCamera_ErrorCode NDKCamera::IsFocusModeSupported(uint32_t mode)\n{\n    Camera_FocusMode focusMode = static_cast<Camera_FocusMode>(mode);\n    ret_ = OH_CaptureSession_IsFocusModeSupported(captureSession_, focusMode, &isFocusModeSupported_);\n    if (&isFocusModeSupported_ == nullptr || ret_ != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"IsFocusModeSupported failed.\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n    return ret_;\n}\n\nCamera_ErrorCode NDKCamera::IsFocusMode(uint32_t mode)\n{\n    OH_LOG_INFO(LOG_APP, \"IsFocusMode start.\");\n    Camera_FocusMode focusMode = static_cast<Camera_FocusMode>(mode);\n    ret_ = OH_CaptureSession_IsFocusModeSupported(captureSession_, focusMode, &isFocusModeSupported_);\n    if (&isFocusModeSupported_ == nullptr || ret_ != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"IsFocusModeSupported failed.\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n    ret_ = OH_CaptureSession_SetFocusMode(captureSession_, focusMode);\n    if (ret_ != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"SetFocusMode failed.\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n    ret_ = OH_CaptureSession_GetFocusMode(captureSession_, &focusMode);\n    if (&focusMode == nullptr || ret_ != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"GetFocusMode failed.\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n    OH_LOG_INFO(LOG_APP, \"IsFocusMode end.\");\n    return ret_;\n}\n\nCamera_ErrorCode NDKCamera::setZoomRatioFn(uint32_t zoomRatio)\n{\n    float zoom = float(zoomRatio);\n    // 获取支持的缩放范围。\n    float minZoom;\n    float maxZoom;\n    Camera_ErrorCode ret = OH_CaptureSession_GetZoomRatioRange(captureSession_, &minZoom, &maxZoom);\n    if (captureSession_ == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_GetZoomRatioRange failed.\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_GetZoomRatioRange success. minZoom: %{public}f, maxZoom:%{public}f\",\n            minZoom, maxZoom);\n    }\n\n    // 设置缩放比例。\n    ret = OH_CaptureSession_SetZoomRatio(captureSession_, zoom);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_SetZoomRatio success.\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_SetZoomRatio failed. %{public}d \", ret);\n    }\n\n    // 获取当前设备的缩放比例。\n    ret = OH_CaptureSession_GetZoomRatio(captureSession_, &zoom);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_GetZoomRatio success. zoom：%{public}f \", zoom);\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_GetZoomRatio failed. %{public}d \", ret);\n    }\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "触发拍照。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-photo-output-h/capi-photo-output-h#oh_photooutput_capture_withcapturesetting",
            children: "OH_PhotoOutput_Capture_WithCaptureSetting()"
          }), "方法，执行拍照任务。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode NDKCamera::TakePicture(int32_t degree)\n{\n    Camera_ErrorCode ret = CAMERA_OK;\n    Camera_ImageRotation imageRotation;\n    bool isMirSupported;\n    OH_PhotoOutput_IsMirrorSupported(photoOutput_, &isMirSupported);\n    OH_PhotoOutput_GetPhotoRotation(photoOutput_, degree, &imageRotation);\n\n    Camera_PhotoCaptureSetting curPhotoSetting = {\n        quality : QUALITY_LEVEL_HIGH,\n        rotation : imageRotation,\n        mirror : isMirSupported\n    };\n    ret = OH_PhotoOutput_Capture_WithCaptureSetting(photoOutput_, curPhotoSetting);\n    OH_LOG_INFO(LOG_APP, \"TakePicture get quality %{public}d, rotation %{public}d, mirror %{public}d\",\n        curPhotoSetting.quality, curPhotoSetting.rotation, curPhotoSetting.mirror);\n    OH_LOG_INFO(LOG_APP, \"TakePicture ret = %{public}d.\", ret);\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "高性能拍照",
      children: "高性能拍照"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 21开始支持高性能拍照功能，即在进行单段式拍照时设置明确的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%94%BB%E8%B4%A8%E4%BC%98%E5%85%88%E7%AD%96%E7%95%A5",
        children: "画质优先策略"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单段式拍照的体验主要由出图速度和最终图片质量衡量。因此，为满足开发者在不同场景下的差异化需求，对这两项指标的侧重也不同。例如，街头抓拍要求快速捕捉瞬间，而风景或人像拍摄则更追求极致的画质。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(525766)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅单段式拍照支持设置画质优先策略。若在分段式拍照中设置画质优先策略，该设置将无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "画质优先策略",
      children: "画质优先策略"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用单段式拍照时，支持设置速度优先和画质优先两种画质优先策略类型，并且分别对应着不同的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_photoqualityprioritization",
        children: "Camera_PhotoQualityPrioritization"
      }), "枚举类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_photoqualityprioritization",
          children: "CAMERA_PHOTO_QUALITY_PRIORITIZATION_SPEED"
        }), "对应着速度优先，表示降低画质来提升拍照的速度。如果开发者在进行单段式拍照时没有设置明确的画质优先策略，", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "单段式拍照就默认为速度优先状态"
          })
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_photoqualityprioritization",
          children: "CAMERA_PHOTO_QUALITY_PRIORITIZATION_HIGH_QUALITY"
        }), "对应着画质优先，表示通过较长的耗时来得到画质更高的图片。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "如何正确设置画质优先策略",
      children: "如何正确设置画质优先策略"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了正确的在单段式拍照中设置画质优先策略，高性能拍照功能提供了如下两个接口："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-c/camera-headerfile/capi-photo-output-h/capi-photo-output-h#oh_photooutput_isphotoqualityprioritizationsupported",
          children: "OH_PhotoOutput_IsPhotoQualityPrioritizationSupported"
        }), "：查询当前设备是否支持指定的画质优先策略。返回true表示支持，返回false表示不支持。在进行设置画质优先策略之前，必须先查询将要设置的画质优先策略在当前设备上是否可用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-c/camera-headerfile/capi-photo-output-h/capi-photo-output-h#oh_photooutput_setphotoqualityprioritization",
          children: "OH_PhotoOutput_SetPhotoQualityPrioritization"
        }), "：画质优先策略设置接口，通过该接口设置对应的画质优先策略，实现高性能拍照。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["高性能拍照相关接口需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-native-mandatory/native-camera-session-management",
        children: "会话管理(C/C++)"
      }), "流程的使能步骤中进行调用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体调用时机如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-native-mandatory/native-camera-session-management",
            children: "会话管理(C/C++)"
          }), "流程中的使能步骤中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_commitconfig",
            children: "OH_CaptureSession_CommitConfig()"
          }), "结束之后进行调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode StartSession(Camera_CaptureSession* captureSession, Camera_Input* cameraInput,\n  Camera_PreviewOutput* previewOutput, Camera_PhotoOutput* photoOutput)\n{\n  // 向会话中添加相机输入流。\n  Camera_ErrorCode ret = OH_CaptureSession_AddInput(captureSession, cameraInput);\n  if (ret != CAMERA_OK) {\n    OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddInput failed.\");\n    return ret;\n  }\n\n  // 向会话中添加预览输出流。\n  ret = OH_CaptureSession_AddPreviewOutput(captureSession, previewOutput);\n  if (ret != CAMERA_OK) {\n    OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddPreviewOutput failed.\");\n    return ret;\n  }\n\n  // 向会话中添加拍照输出流。\n  ret = OH_CaptureSession_AddPhotoOutput(captureSession, photoOutput);\n  if (ret != CAMERA_OK) {\n    OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddPhotoOutput failed.\");\n    return ret;\n  }\n\n  // 提交会话配置。\n  ret = OH_CaptureSession_CommitConfig(captureSession);\n  if (ret != CAMERA_OK) {\n    OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_CommitConfig failed.\");\n    return ret;\n  }\n\n  // 启动会话。\n  ret = OH_CaptureSession_Start(captureSession);\n  if (ret != CAMERA_OK) {\n    OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_Start failed.\");\n  }\n\n  SetHighQualityPhotoQualityPrioritization(photoOutput);\n  return ret;\n}\n\nvoid SetHighQualityPhotoQualityPrioritization(Camera_PhotoOutput* photoOutput)\n{\n  Camera_PhotoQualityPrioritization quality = Camera_PhotoQualityPrioritization::CAMERA_PHOTO_QUALITY_PRIORITIZATION_HIGH_QUALITY;\n  bool isSupported = false;\n  Camera_ErrorCode ret = OH_PhotoOutput_IsPhotoQualityPrioritizationSupported(photoOutput, quality, isSupported);\n  if (isSupported) {\n    ret = OH_PhotoOutput_SetPhotoQualityPrioritization(photoOutput, quality);\n    if (ret != 0) {\n      OH_LOG_ERROR(LOG_APP, \"OH_PhotoOutput_SetPhotoQualityPrioritization failed.\");\n    }\n  } else {\n    OH_LOG_ERROR(LOG_APP, \"OH_PhotoOutput_IsPhotoQualityPrioritizationSupported not supported.\");\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-native-mandatory/native-camera-session-management",
            children: "会话管理(C/C++)"
          }), "流程中的使能步骤中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_commitconfig",
            children: "OH_CaptureSession_CommitConfig()"
          }), "之前调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode StartSession(Camera_CaptureSession* captureSession, Camera_Input* cameraInput,\n  Camera_PreviewOutput* previewOutput, Camera_PhotoOutput* photoOutput)\n{\n  // 向会话中添加相机输入流。\n  Camera_ErrorCode ret = OH_CaptureSession_AddInput(captureSession, cameraInput);\n  if (ret != CAMERA_OK) {\n    OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddInput failed.\");\n    return ret;\n  }\n\n  // 向会话中添加预览输出流。\n  ret = OH_CaptureSession_AddPreviewOutput(captureSession, previewOutput);\n  if (ret != CAMERA_OK) {\n    OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddPreviewOutput failed.\");\n    return ret;\n  }\n\n  // 向会话中添加拍照输出流。\n  ret = OH_CaptureSession_AddPhotoOutput(captureSession, photoOutput);\n  if (ret != CAMERA_OK) {\n    OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddPhotoOutput failed.\");\n    return ret;\n  }\n\n  SetHighQualityPhotoQualityPrioritization(photoOutput);\n  \n  // 提交会话配置。\n  ret = OH_CaptureSession_CommitConfig(captureSession);\n  if (ret != CAMERA_OK) {\n    OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_CommitConfig failed.\");\n    return ret;\n  }\n\n  // 启动会话。\n  ret = OH_CaptureSession_Start(captureSession);\n  if (ret != CAMERA_OK) {\n    OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_Start failed.\");\n  }\n\n  return ret;\n}\n\nvoid SetHighQualityPhotoQualityPrioritization(Camera_PhotoOutput* photoOutput)\n{\n  Camera_PhotoQualityPrioritization quality = Camera_PhotoQualityPrioritization::CAMERA_PHOTO_QUALITY_PRIORITIZATION_HIGH_QUALITY;\n  bool isSupported = false;\n  Camera_ErrorCode ret = OH_PhotoOutput_IsPhotoQualityPrioritizationSupported(photoOutput, quality, isSupported);\n  if (isSupported) {\n    ret = OH_PhotoOutput_SetPhotoQualityPrioritization(photoOutput, quality);\n    if (ret != 0) {\n      OH_LOG_ERROR(LOG_APP, \"OH_PhotoOutput_SetPhotoQualityPrioritization failed.\");\n    }\n  } else {\n    OH_LOG_ERROR(LOG_APP, \"OH_PhotoOutput_IsPhotoQualityPrioritizationSupported not supported.\");\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态监听",
      children: "状态监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在相机应用开发过程中，可以随时监听拍照输出流状态，包括拍照流开始、拍照帧的开始与结束、拍照输出流的错误。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过注册固定的onFrameStart回调函数获取监听拍照开始结果，photoOutput创建成功时即可监听，拍照第一次曝光时触发。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// PhotoOutput Callback\nvoid PhotoOutputOnFrameStart(Camera_PhotoOutput *photoOutput)\n{\n    OH_LOG_INFO(LOG_APP, \"PhotoOutputOnFrameStart\");\n}\n\nvoid PhotoOutputOnFrameShutter(Camera_PhotoOutput *photoOutput, Camera_FrameShutterInfo *info)\n{\n    OH_LOG_INFO(LOG_APP, \"PhotoOutputOnFrameShutter\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过注册固定的onFrameEnd回调函数获取监听拍照结束结果，photoOutput创建成功时即可监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void PhotoOutputOnFrameEnd(Camera_PhotoOutput *photoOutput, int32_t frameCount)\n{\n    OH_LOG_INFO(LOG_APP, \"PhotoOutput frameCount = %{public}d\", frameCount);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过注册固定的onError回调函数获取监听拍照输出流的错误结果。callback返回拍照输出接口使用错误时的对应错误码，错误码类型参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode",
            children: "Camera_ErrorCode"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void PhotoOutputOnError(Camera_PhotoOutput *photoOutput, Camera_ErrorCode errorCode)\n{\n    OH_LOG_INFO(LOG_APP, \"PhotoOutput errorCode = %{public}d\", errorCode);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PhotoOutput_Callbacks *NDKCamera::GetPhotoOutputListener(void)\n{\n    static PhotoOutput_Callbacks photoOutputListener = {\n        .onFrameStart = PhotoOutputOnFrameStart,\n        .onFrameShutter = PhotoOutputOnFrameShutter,\n        .onFrameEnd = PhotoOutputOnFrameEnd,\n        .onError = PhotoOutputOnError\n    };\n    return &photoOutputListener;\n}\n\nCamera_ErrorCode NDKCamera::PhotoOutputRegisterCallback(void)\n{\n    ret_ = OH_PhotoOutput_RegisterCallback(photoOutput_, GetPhotoOutputListener());\n    if (ret_ != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_PhotoOutput_RegisterCallback failed.\");\n    }\n    return ret_;\n}\n"
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
525766(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
77165(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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