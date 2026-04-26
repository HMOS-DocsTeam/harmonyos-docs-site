"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["500194"], {
965217(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_native_image_receiving_c_image_receiver_c_image_receiver_c_md_432_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-native-image-receiving-c-image-receiver-c-image-receiver-c-md-432.json
var site_docs_image_kit_image_native_image_receiving_c_image_receiver_c_image_receiver_c_md_432_namespaceObject = JSON.parse('{"id":"image-kit/image-native/image-receiving-c/image-receiver-c/image-receiver-c","title":"使用Image_NativeModule完成图片接收","description":"图像接收类，用于获取组件的surfaceId、接收最新的图片、读取下一张图片以及释放ImageReceiver实例。结合camera API实现的相机预览示例代码可参考预览流二次处理(C/C++)。","source":"@site/docs/image-kit/image-native/image-receiving-c/image-receiver-c/image-receiver-c.md","sourceDirName":"image-kit/image-native/image-receiving-c/image-receiver-c","slug":"/image-kit/image-native/image-receiving-c/image-receiver-c/","permalink":"/harmonyos-docs-site/image-kit/image-native/image-receiving-c/image-receiver-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用Image_NativeModule完成图片接收","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-receiver-c","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Image_NativeModule编辑图片Exif信息","permalink":"/harmonyos-docs-site/image-kit/image-native/image-editing-c/image-tool-c/"},"next":{"title":"如何处理HEIF图片","permalink":"/harmonyos-docs-site/image-kit/image-faqs/heif-adapter-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-native/image-receiving-c/image-receiver-c/image-receiver-c.md


const frontMatter = {
	title: '使用Image_NativeModule完成图片接收',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-receiver-c',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Image_NativeModule完成图片接收';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "添加依赖",
  "id": "添加依赖",
  "level": 3
}, {
  "value": "Native接口调用",
  "id": "native接口调用",
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
        id: "使用image_nativemodule完成图片接收",
        children: "使用Image_NativeModule完成图片接收"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["图像接收类，用于获取组件的surfaceId、接收最新的图片、读取下一张图片以及释放ImageReceiver实例。结合camera API实现的相机预览示例代码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-native/native-camera-preview-imagereceiver",
        children: "预览流二次处理(C/C++)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(903599)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ImageReceiver只作为图片的接收方、消费者，在ImageReceiver设置的size、format等属性实际上并不会生效。图片属性需要在发送方、生产者进行设置，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-native/native-camera-preview",
        children: "预览(C/C++)"
      }), "设置previewProfiles。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加依赖",
      children: "添加依赖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行应用开发之前，开发者需要打开native工程的src/main/cpp/CMakeLists.txt，在target_link_libraries依赖中添加libohimage.so、libimage_receiver.so、libnative_image.so以及日志依赖libhilog_ndk.z.so。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libhilog_ndk.z.so libohimage.so libimage_receiver.so libnative_image.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "native接口调用",
      children: "Native接口调用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-module/capi-image-nativemodule/capi-image-nativemodule",
        children: "Image_NativeModule"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下述代码主要演示了Receiver的初始化、相机预览流的创建以及获取图像的信息和Receiver的释放等相关功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(587793)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分接口在API version 20以后才支持，需要开发者在进行开发时选择合适的API版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <hilog/log.h>\n#include \"napi/native_api.h\"\n#include <string>\n#include <multimedia/image_framework/image/image_native.h>\n#include <multimedia/image_framework/image/image_receiver_native.h>\n\n#include \"ohcamera/camera.h\"\n#include \"ohcamera/camera_input.h\"\n#include \"ohcamera/capture_session.h\"\n#include \"ohcamera/photo_output.h\"\n#include \"ohcamera/preview_output.h\"\n#include \"ohcamera/video_output.h\"\n#include \"ohcamera/camera_manager.h\"\n\n#include <mutex>\n#include <shared_mutex> // C++17以上使用\n#include <condition_variable>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "常量定义。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#undef LOG_DOMAIN\n#define LOG_DOMAIN 0x3200\n\n#undef LOG_TAG\n#define LOG_TAG \"MY_TAG\"\n\n#define IMAGE_WIDTH 320\n#define IMAGE_HEIGHT 480\n#define IMAGE_CAPACITY 2\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义全局变量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static OH_ImageReceiverNative* g_receiver = nullptr;\n\nstatic std::mutex g_mutex;\nstatic std::shared_mutex shared_receiver_mutex;\nstatic std::condition_variable g_condVar;\nstatic bool g_imageReady = false;\nstatic OH_ImageNative* g_imageInfoResult = nullptr;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义一些工具类函数，用来处理napi的返回值和参数类型的转换。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 处理napi返回值。\nnapi_value GetJsResultDemo(napi_env env, int result)\n{\n    napi_value resultNapi = nullptr;\n    napi_create_int32(env, result, &resultNapi);\n    return resultNapi;\n}\n\n// 将uint64_t转换为一个以null结尾的char数组。\nstd::unique_ptr<char[]> ConvertUint64ToCharTemp(uint64_t value)\n{\n    std::string strValue = std::to_string(value);\n    auto charBuffer = std::make_unique<char[]>(strValue.size() + 1);\n    std::copy(strValue.begin(), strValue.end(), charBuffer.get());\n    charBuffer[strValue.size()] = '\\0';\n\n    return charBuffer;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化Receiver。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "创建并设置ReceiverOptions。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "static Image_ErrorCode CreateAndConfigOptions(OH_ImageReceiverOptions** options)\n{\n    Image_ErrorCode errCode = OH_ImageReceiverOptions_Create(options);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"Create image receiver options failed, errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n    Image_Size imgSize = {IMAGE_WIDTH, IMAGE_HEIGHT};\n    errCode = OH_ImageReceiverOptions_SetSize(*options, imgSize);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"Set image receiver options size failed, errCode: %{public}d.\", errCode);\n        OH_ImageReceiverOptions_Release(*options);\n        return errCode;\n    }\n    errCode = OH_ImageReceiverOptions_SetCapacity(*options, IMAGE_CAPACITY);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"Set image receiver options capacity failed, errCode: %{public}d.\", errCode);\n        OH_ImageReceiverOptions_Release(*options);\n        return errCode;\n    }\n    return IMAGE_SUCCESS;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "获取ReceiverOptions。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "static Image_ErrorCode ValidateOptions(OH_ImageReceiverOptions* options)\n{\n    Image_Size imgSizeRead;\n    Image_ErrorCode errCode = OH_ImageReceiverOptions_GetSize(options, &imgSizeRead);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"Get image receiver options size failed, errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n    if (imgSizeRead.width != IMAGE_WIDTH || imgSizeRead.height != IMAGE_HEIGHT) {\n        OH_LOG_ERROR(LOG_APP, \"Get image receiver options size failed,\"\n                     \"width: %{public}d, height: %{public}d.\", imgSizeRead.width, imgSizeRead.height);\n        return IMAGE_BAD_PARAMETER;\n    }\n    int32_t capacity = 0;\n    errCode = OH_ImageReceiverOptions_GetCapacity(options, &capacity);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"Get image receiver options capacity failed, errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n    if (capacity != IMAGE_CAPACITY) {\n        OH_LOG_ERROR(LOG_APP, \"Get image receiver options capacity failed, capacity: %{public}d.\", capacity);\n        return IMAGE_BAD_PARAMETER;\n    }\n    return IMAGE_SUCCESS;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "创建Receiver对象。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "static Image_ErrorCode CreateReceiver(OH_ImageReceiverOptions* options, OH_ImageReceiverNative** receiver)\n{\n    Image_ErrorCode errCode = OH_ImageReceiverNative_Create(options, receiver);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"Create image receiver failed, errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n    return IMAGE_SUCCESS;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "定义获取下一张图片的callback函数。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "static void OnCallback(OH_ImageReceiverNative* receiver)\n{\n    OH_LOG_INFO(LOG_APP, \"ImageReceiverNativeCTest buffer available.\");\n\n    // 共享锁（读）\n    std::shared_lock<std::shared_mutex> lock(shared_receiver_mutex);\n    OH_ImageNative* image = nullptr;\n    Image_ErrorCode errCode = OH_ImageReceiverNative_ReadNextImage(receiver, &image);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"ImageReceiverNativeCTest get image receiver next image failed,\"\n                     \"errCode: %{public}d.\", errCode);\n        OH_ImageNative_Release(image);\n        return;\n    } else {\n        std::lock_guard<std::mutex> lock(g_mutex);\n        g_imageInfoResult = image;\n        g_imageReady = true;\n    }\n    g_condVar.notify_one();\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "注册callback。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "static Image_ErrorCode RegisterCallbackAndQuery(OH_ImageReceiverNative* receiver)\n{\n    uint64_t surfaceID = 0;\n    Image_ErrorCode errCode = OH_ImageReceiverNative_On(receiver, OnCallback);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"Image receiver on failed, errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n    errCode = OH_ImageReceiverNative_GetReceivingSurfaceId(receiver, &surfaceID);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"Get image receiver surfaceID failed, errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n    OH_LOG_INFO(LOG_APP, \"Get image receiver surfaceID: %{public}lu.\", surfaceID);\n    Image_Size imgSizeRead;\n    errCode = OH_ImageReceiverNative_GetSize(receiver, &imgSizeRead);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"Get image receiver size failed, errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n    OH_LOG_INFO(LOG_APP, \"Get image receiver size: width = %{public}d, height = %{public}d.\",\n                imgSizeRead.width, imgSizeRead.height);\n    int32_t capacity = 0;\n    errCode = OH_ImageReceiverNative_GetCapacity(receiver, &capacity);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"Get image receiver capacity failed, errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n    OH_LOG_INFO(LOG_APP, \"Get image receiver capacity: %{public}d.\", capacity);\n    return IMAGE_SUCCESS;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "初始化Receiver的整体流程。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "static napi_value ImageReceiverNativeCTest(napi_env env, napi_callback_info info)\n{\n    if (g_receiver != nullptr) {\n        OH_ImageReceiverNative_Off(g_receiver);\n        OH_ImageReceiverNative_Release(g_receiver);\n        g_receiver = nullptr;\n    }\n\n    OH_ImageReceiverOptions* options = nullptr;\n    Image_ErrorCode errCode = CreateAndConfigOptions(&options);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"CreateAndConfigOptions failed errCode=%{public}d\", errCode);\n        return GetJsResultDemo(env, errCode);\n    }\n    errCode = ValidateOptions(options);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"ValidateOptions failed errCode=%{public}d\", errCode);\n        OH_ImageReceiverOptions_Release(options);\n        return GetJsResultDemo(env, errCode);\n    }\n    errCode = CreateReceiver(options, &g_receiver);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"CreateReceiver failed errCode=%{public}d\", errCode);\n        OH_ImageReceiverOptions_Release(options);\n        return GetJsResultDemo(env, errCode);\n    }\n    errCode = RegisterCallbackAndQuery(g_receiver);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"RegisterCallbackAndQuery failed errCode=%{public}d\", errCode);\n        OH_ImageReceiverOptions_Release(options);\n        OH_ImageReceiverNative_Release(g_receiver);\n        g_receiver = nullptr;\n        return GetJsResultDemo(env, errCode);\n    }\n    OH_LOG_INFO(LOG_APP, \"ImageReceiverNativeCTest create and config success.\");\n    OH_ImageReceiverOptions_Release(options);\n    return GetJsResultDemo(env, IMAGE_SUCCESS);\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用相机拍照流进行拍照，触发回调。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "创建一个CameraManager实例。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Camera_ErrorCode InitCameraManagerAndInput(Camera_Manager*& cameraManager,\n                                           Camera_Device*& cameras,\n                                           uint32_t& size,\n                                           Camera_Input*& cameraInput)\n{\n    cameraManager = nullptr;\n    cameras = nullptr;\n    size = 0;\n    cameraInput = nullptr;\n    Camera_ErrorCode ret = OH_Camera_GetCameraManager(&cameraManager);\n    if (cameraManager == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_Camera_GetCameraManager failed.\");\n        return ret;\n    }\n    ret = OH_CameraManager_GetSupportedCameras(cameraManager, &cameras, &size);\n    if (cameras == nullptr || size < 1 || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_GetSupportedCameras failed.\");\n        return ret;\n    }\n\n    for (uint32_t i = 0; i < size; ++i) {\n        OH_LOG_INFO(LOG_APP, \"Camera[%{public}u]: id=%{public}s, position=%{public}d, type=%{public}d, \"\n            \"connectionType=%{public}d\", i, cameras[i].cameraId, cameras[i].cameraPosition, cameras[i].cameraType,\n            cameras[i].connectionType);\n    }\n\n    ret = OH_CameraManager_CreateCameraInput(cameraManager, &cameras[0], &cameraInput);\n    if (cameraInput == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_CreateCameraInput failed.ret:%{public}d\", ret);\n        return ret;\n    }\n    return CAMERA_OK;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "获取相机输出能力。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Camera_ErrorCode GetCameraOutputCapability(Camera_Manager* cameraManager,\n                                           Camera_Device* cameras,\n                                           uint32_t cameraDeviceIndex,\n                                           Camera_OutputCapability*& capability)\n{\n    capability = nullptr;\n    Camera_ErrorCode ret = OH_CameraManager_GetSupportedCameraOutputCapability(cameraManager,\n                                                                               &cameras[cameraDeviceIndex],\n                                                                               &capability);\n    if (capability == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_GetSupportedCameraOutputCapability failed.\");\n    }\n    return ret;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "创建相机捕获会话，用于捕获相机拍摄的照片。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Camera_CaptureSession* CreateAndStartSession(Camera_Manager* cameraManager, Camera_Input* cameraInput, int sessionMode)\n{\n    Camera_CaptureSession* captureSession = nullptr;\n    Camera_ErrorCode ret = OH_CameraManager_CreateCaptureSession(cameraManager, &captureSession);\n    if (captureSession == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_CreateCaptureSession failed.\");\n        return nullptr;\n    }\n    ret = OH_CaptureSession_SetSessionMode(captureSession, static_cast<Camera_SceneMode>(sessionMode));\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_SetSessionMode failed.\");\n        return nullptr;\n    }\n    ret = OH_CaptureSession_BeginConfig(captureSession);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_BeginConfig failed.\");\n        return nullptr;\n    }\n    ret = OH_CaptureSession_AddInput(captureSession, cameraInput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddInput failed.\");\n        return nullptr;\n    }\n    return captureSession;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "开启捕获会话。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "static Camera_ErrorCode StartCaptureSession(Camera_Manager* mgr, Camera_Input* input,\n                                            Camera_PreviewOutput* previewOutput,\n                                            Camera_CaptureSession** sessionOut)\n{\n    *sessionOut = CreateAndStartSession(mgr, input, NORMAL_PHOTO);\n    if (*sessionOut == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"CreateAndStartSession failed.\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n\n    Camera_ErrorCode ret = OH_CaptureSession_AddPreviewOutput(*sessionOut, previewOutput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddPreviewOutput failed.\");\n        return ret;\n    }\n\n    ret = OH_CaptureSession_CommitConfig(*sessionOut);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_CommitConfig failed.\");\n        return ret;\n    }\n\n    ret = OH_CaptureSession_Start(*sessionOut);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_Start failed.\");\n    }\n    \n    return ret;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "创建相机拍照流。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Camera_ErrorCode StartTakePhoto(char* str)\n{\n    char* photoSurfaceId = str;\n    Camera_Manager* cameraManager = nullptr;\n    Camera_Device* cameras = nullptr;\n    uint32_t size = 0;\n    Camera_Input* cameraInput = nullptr;\n    Camera_ErrorCode ret = InitCameraManagerAndInput(cameraManager, cameras, size, cameraInput);\n    if (ret != CAMERA_OK) return ret;\n\n    Camera_OutputCapability* cameraOutputCapability = nullptr;\n    ret = GetCameraOutputCapability(cameraManager, cameras, 0, cameraOutputCapability);\n    if (ret != CAMERA_OK) return ret;\n    \n    const Camera_Profile* photoProfile = cameraOutputCapability->previewProfiles[0];\n    Camera_PreviewOutput* previewOutput = nullptr;\n    ret = OH_CameraManager_CreatePreviewOutput(cameraManager, photoProfile, photoSurfaceId, &previewOutput);\n    if (photoProfile == nullptr || previewOutput == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_CreatePreviewOutput failed.\");\n        return ret;\n    }\n\n    ret = OH_CameraInput_Open(cameraInput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraInput_open failed.\");\n        return ret;\n    }\n\n    Camera_CaptureSession* captureSession = nullptr;\n    ret = StartCaptureSession(cameraManager, cameraInput, previewOutput, &captureSession);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"StartCaptureSession failed.\");\n        return ret;\n    }\n    \n    return CAMERA_OK;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "调用相机拍照的整体流程。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "static napi_value TakePhoto(napi_env env, napi_callback_info info)\n{\n    if (g_receiver == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"ImageReceiver not initialized.\");\n        return GetJsResultDemo(env, IMAGE_BAD_PARAMETER);\n    }\n    uint64_t surfaceId = 0;\n    Image_ErrorCode errCode = OH_ImageReceiverNative_GetReceivingSurfaceId(g_receiver, &surfaceId);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"Get surfaceId failed.\");\n        return GetJsResultDemo(env, errCode);\n    }\n\n    auto surfaceId_c = ConvertUint64ToCharTemp(surfaceId);\n    Camera_ErrorCode photoRet = StartTakePhoto(surfaceId_c.get());\n    return GetJsResultDemo(env, photoRet);\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取Receiver接收到的图片信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "等待OnCallback回调通知。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 同步等待。\nstatic OH_ImageNative* NotifyJsImageInfoSync()\n{\n    std::unique_lock<std::mutex> lock(g_mutex);\n    g_imageReady = false;\n    g_imageInfoResult = nullptr;\n\n    // 等待OnCallback回调通知。\n    bool ret = g_condVar.wait_for(lock, std::chrono::seconds(1), [] {\n        OH_LOG_INFO(LOG_APP, \"NotifyJsImageInfoSync: wait_for wakeup, g_imageReady=%{public}d\", g_imageReady);\n        return g_imageReady;\n    });\n    if (!ret) {\n        OH_LOG_ERROR(LOG_APP, \"NotifyJsImageInfoSync: wait_for timeout.\");\n        return nullptr;\n    }\n    return g_imageInfoResult;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "获取图片大小。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 获取图片大小。\nstatic napi_value GetImageSizeInfo(napi_env env, OH_ImageNative* image)\n{\n    OH_LOG_INFO(LOG_APP, \"GetImageSizeInfo: enter, image=%{public}p\", image);\n\n    Image_Size imgSizeRead;\n    Image_ErrorCode errCode = OH_ImageNative_GetImageSize(image, &imgSizeRead);\n    OH_LOG_INFO(LOG_APP, \"GetImageSizeInfo: GetImageSize errCode=%{public}d, width=%{public}d, height=%{public}d\",\n                errCode, imgSizeRead.width, imgSizeRead.height);\n\n    if (errCode == IMAGE_SUCCESS) {\n        napi_value resultObj;\n        napi_create_object(env, &resultObj);\n\n        napi_value width;\n        napi_value height;\n        napi_create_int32(env, imgSizeRead.width, &width);\n        napi_create_int32(env, imgSizeRead.height, &height);\n\n        napi_set_named_property(env, resultObj, \"width\", width);\n        napi_set_named_property(env, resultObj, \"height\", height);\n\n        OH_LOG_INFO(LOG_APP, \"GetImageSizeInfo: exit\");\n        return resultObj;\n    }\n\n    OH_LOG_ERROR(LOG_APP, \"GetImageSizeInfo: Failed to get image size\");\n    return nullptr;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "获取组件类型。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 获取组件类型。\nstatic size_t GetComponentTypeSize(OH_ImageNative* image, size_t& componentTypeSize)\n{\n    OH_LOG_INFO(LOG_APP, \"GetComponentTypeSize: enter, image=%{public}p\", image);\n    // 获取组件类型的大小。\n    Image_ErrorCode errCode = OH_ImageNative_GetComponentTypes(image, nullptr, &componentTypeSize);\n    OH_LOG_INFO(LOG_APP, \"GetComponentTypeSize: GetComponentTypes (query size) errCode=%{public}d,\"\n                \"componentTypeSize=%{public}zu\", errCode, componentTypeSize);\n    return componentTypeSize;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "获取组件信息。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 获取组件信息。\nstatic napi_value GetComponentInfo(napi_env env, size_t componentTypeSize, OH_ImageNative* image, napi_value resultObj)\n{\n    if (componentTypeSize > 0) {\n        uint32_t* components = new uint32_t[componentTypeSize];\n        Image_ErrorCode errCode = OH_ImageNative_GetComponentTypes(image, &components, &componentTypeSize);\n        OH_LOG_INFO(LOG_APP, \"GetImageInfoObject: GetComponentTypes (get types) errCode=%{public}d,\"\n                    \"firstComponent=%{public}u\", errCode, componentTypeSize > 0 ? components[0] : 0);\n        if (errCode != IMAGE_SUCCESS) {\n            OH_LOG_ERROR(LOG_APP, \"GetImageInfoObject: GetComponentTypes (get types) failed\");\n            delete [] components;\n            return resultObj;\n        }\n        \n        OH_NativeBuffer* nativeBuffer = nullptr;\n        errCode = OH_ImageNative_GetByteBuffer(image, components[0], &nativeBuffer);\n        if (errCode == IMAGE_SUCCESS) {\n            OH_LOG_INFO(LOG_APP, \"Get native buffer success.\");\n        }\n    \n        size_t nativeBufferSize = 0;\n        errCode = OH_ImageNative_GetBufferSize(image, components[0], &nativeBufferSize);\n        OH_LOG_INFO(LOG_APP, \"GetImageInfoObject: GetBufferSize errCode=%{public}d, nativeBufferSize=%{public}zu\",\n                    errCode, nativeBufferSize);\n        if (errCode == IMAGE_SUCCESS) {\n            napi_value bufSize;\n            napi_create_int32(env, static_cast<int32_t>(nativeBufferSize), &bufSize);\n            napi_set_named_property(env, resultObj, \"bufferSize\", bufSize);\n        }\n    \n        int32_t rowStride = 0;\n        errCode = OH_ImageNative_GetRowStride(image, components[0], &rowStride);\n        OH_LOG_INFO(LOG_APP, \"GetImageInfoObject: GetRowStride errCode=%{public}d,\"\n                    \"rowStride=%{public}d\", errCode, rowStride);\n        if (errCode == IMAGE_SUCCESS) {\n            napi_value jsRowStride;\n            napi_create_int32(env, rowStride, &jsRowStride);\n            napi_set_named_property(env, resultObj, \"rowStride\", jsRowStride);\n        }\n    \n        int32_t pixelStride = 0;\n        errCode = OH_ImageNative_GetPixelStride(image, components[0], &pixelStride);\n        OH_LOG_INFO(LOG_APP, \"GetImageInfoObject: GetPixelStride errCode=%{public}d, pixelStride=%{public}d\",\n                    errCode, pixelStride);\n        if (errCode == IMAGE_SUCCESS) {\n            napi_value jsPixelStride;\n            napi_create_int32(env, pixelStride, &jsPixelStride);\n            napi_set_named_property(env, resultObj, \"pixelStride\", jsPixelStride);\n        }\n        delete [] components;\n    }\n    return resultObj;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "获取图片属性并封装为napi对象。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 获取图像属性并封装为napi对象。\nstatic napi_value GetImageInfoObject(napi_env env, OH_ImageNative* image)\n{\n    OH_LOG_INFO(LOG_APP, \"GetImageInfoObject: enter, image=%{public}p\", image);\n    napi_value resultObj;\n    napi_create_object(env, &resultObj);\n    resultObj = GetImageSizeInfo(env, image);\n    \n    size_t componentTypeSize = 0;\n    componentTypeSize = GetComponentTypeSize(image, componentTypeSize);\n    if (componentTypeSize > 0) {\n        resultObj = GetComponentInfo(env, componentTypeSize, image, resultObj);\n    }\n\n    int64_t timestamp = 0;\n    Image_ErrorCode errCode = OH_ImageNative_GetTimestamp(image, &timestamp);\n    OH_LOG_INFO(LOG_APP, \"GetImageInfoObject: GetTimestamp errCode=%{public}d, timestamp=%{public}ld\",\n                errCode, timestamp);\n    if (errCode == IMAGE_SUCCESS) {\n        napi_value jsTimestamp;\n        napi_create_int64(env, timestamp, &jsTimestamp);\n        napi_set_named_property(env, resultObj, \"timestamp\", jsTimestamp);\n    }\n\n    OH_LOG_INFO(LOG_APP, \"GetImageInfoObject: exit\");\n    return resultObj;\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "获取ReceiverImageInfo的整体流程。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "static napi_value GetReceiverImageInfo(napi_env env, napi_callback_info info)\n{\n    OH_ImageNative* image = NotifyJsImageInfoSync();\n    if (!image) {\n        napi_value undefined;\n        napi_get_undefined(env, &undefined);\n        return undefined;\n    }\n    napi_value resultObj = GetImageInfoObject(env, image);\n    OH_ImageNative_Release(image);\n    return resultObj;\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放receiver。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value ReleaseImageReceiver(napi_env env, napi_callback_info info)\n{\n    if (g_receiver == nullptr) {\n        OH_LOG_INFO(LOG_APP, \"No image receiver to release.\");\n        return nullptr;\n    }\n\n    Image_ErrorCode errCode = OH_ImageReceiverNative_Off(g_receiver);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"ImageReceiverNativeCTest image receiver off failed, errCode: %{public}d.\", errCode);\n    }\n\n    // 独占锁（写）\n    std::unique_lock<std::shared_mutex> lock(shared_receiver_mutex);\n    errCode = OH_ImageReceiverNative_Release(g_receiver);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"Release image receiver failed, errCode: %{public}d.\", errCode);\n    }\n    \n    g_receiver = nullptr;\n    return GetJsResultDemo(env, errCode);\n}\n"
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
903599(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
587793(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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