"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["877870"], {
144481(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_native_native_camera_concurrent_open_native_camera_concurrent_open_md_2b4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-native-native-camera-concurrent-open-native-camera-concurrent-open-md-2b4.json
var site_docs_camera_kit_camera_dev_native_native_camera_concurrent_open_native_camera_concurrent_open_md_2b4_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-native/native-camera-concurrent-open/native-camera-concurrent-open","title":"多摄同开(C/C++)","description":"从API version 18开始支持多摄同开，即应用同时开启前置/后置相机进行预览和录像（前置/后置相机同时拍照功能待开放）。","source":"@site/docs/camera-kit/camera-dev-native/native-camera-concurrent-open/native-camera-concurrent-open.md","sourceDirName":"camera-kit/camera-dev-native/native-camera-concurrent-open","slug":"/camera-kit/camera-dev-native/native-camera-concurrent-open/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-concurrent-open/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"多摄同开(C/C++)","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-concurrent-open","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"微距能力设置(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-macro/"},"next":{"title":"对焦(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/camera-focus-native/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-native/native-camera-concurrent-open/native-camera-concurrent-open.md


const frontMatter = {
	title: '多摄同开(C/C++)',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-concurrent-open',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '多摄同开(C/C++)';

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
        id: "多摄同开cc",
        children: "多摄同开(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始支持多摄同开，即应用同时开启前置/后置相机进行预览和录像（前置/后置相机同时拍照功能待开放）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(87044)/* ["default"] */.A) + "",
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
        href: "/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera",
        children: "Camera"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入NDK接口，接口中提供了相机相关的属性和方法，导入方法如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstdint>\n#include <unistd.h>\n#include <string>\n#include <thread>\n#include <cstdio>\n#include <fcntl.h>\n#include <map>\n#include <vector>\n#include <native_buffer/native_buffer.h>\n#include \"iostream\"\n#include \"mutex\"\n#include \"hilog/log.h\"\n#include \"ohcamera/camera.h\"\n#include \"ohcamera/camera_input.h\"\n#include \"ohcamera/capture_session.h\"\n#include \"ohcamera/photo_output.h\"\n#include \"ohcamera/preview_output.h\"\n#include \"ohcamera/video_output.h\"\n#include \"napi/native_api.h\"\n#include \"ohcamera/camera_manager.h\"\n#include \"common/log_common.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在CMake脚本中链接相关动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC\n   libohcamera.so\n   libace_napi.z.so\n   libnative_buffer.so\n   libhilog_ndk.z.so\n   librawfile.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_getcameradevice",
            children: "OH_CameraManager_GetCameraDevice"
          }), "方法获取对应的前置相机和后置相机。如果接口返回值为CAMERA_SERVICE_FATAL_ERROR，基于示例中的配置信息，表示当前设备不支持指定位置（前置/后置）的默认类型相机，无法实现多摄同开功能。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void GetSupportedCameras(Camera_Manager *cameraManager)\n{\n    Camera_Device *cameras;\n    uint32_t size = 0;\n    Camera_ErrorCode ret = OH_CameraManager_GetSupportedCameras(cameraManager, &cameras, &size);\n    if (cameras == nullptr || &size == nullptr || ret != CAMERA_OK) {\n        return;\n    }\n\n    // 获取后置相机。\n    ret = OH_CameraManager_GetCameraDevice(cameraManager, Camera_Position::CAMERA_POSITION_BACK, Camera_Type::CAMERA_TYPE_DEFAULT, &cameras[0]);\n\n    // 获取前置相机。\n    ret = OH_CameraManager_GetCameraDevice(cameraManager, Camera_Position::CAMERA_POSITION_FRONT, Camera_Type::CAMERA_TYPE_DEFAULT, &cameras[1]);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["获取对应的并发能力集。通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_getcameraconcurrentinfos",
            children: "OH_CameraManager_GetCameraConcurrentInfos"
          }), "方法，获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-concurrentinfo/capi-oh-camera-camera-concurrentinfo",
            children: "Camera_ConcurrentInfo"
          }), "相机并发能力集对象数组，数组包含了前置和后置同时开启的相机在指定多摄同开模式下支持的相机模式和相机输出能力，", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "在多摄同开场景下设置的模式和输出能力必须在并发能力集的范围之内"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void GetSupportedOutputCapability(Camera_Manager *cameraManager, Camera_Device *cameras)\n{\n    Camera_ConcurrentInfo* cameraConcurrentInfo;\n    uint32_t infoSize = 0;\n    Camera_ErrorCode ret = OH_CameraManager_GetCameraConcurrentInfos(cameraManager, cameras, 2, &cameraConcurrentInfo, &infoSize);\n    if (cameraConcurrentInfo == nullptr || cameraConcurrentInfo->outputCapabilities == nullptr\n        || cameraConcurrentInfo->outputCapabilities->previewProfiles == nullptr || ret != CAMERA_OK) {\n        return;\n   }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对应并发能力集创建PreviewOutput对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void CreatePreviewOutput(Camera_Manager *cameraManager, Camera_ConcurrentInfo* cameraConcurrentInfo, char* previewSurfaceId)\n{\n    Camera_Profile *profile = cameraConcurrentInfo->outputCapabilities->previewProfiles[0];\n    if (profile == nullptr) {\n        return;\n    }\n    Camera_PreviewOutput *previewOutput;\n    Camera_ErrorCode ret = OH_CameraManager_CreatePreviewOutput(cameraManager, profile, previewSurfaceId, &previewOutput);\n    if (previewOutput == nullptr || ret != CAMERA_OK) {\n        return;\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打开相机。通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-input-h/capi-camera-input-h#oh_camerainput_openconcurrentcameras",
            children: "OH_CameraInput_OpenConcurrentCameras"
          }), "以并发状态打开指定相机，在使用该接口前，请先查询接口是否支持并发能力集，并优先调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_getcameraconcurrentinfos",
            children: "OH_CameraManager_GetCameraConcurrentInfos"
          }), "方法，获取多摄同开状态下的相机并发能力集。请勿在未查询并发能力集的情况下使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-input-h/capi-camera-input-h#oh_camerainput_openconcurrentcameras",
            children: "OH_CameraInput_OpenConcurrentCameras"
          }), "，否则会导致打开相机失败。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void CameraInputOpen(Camera_Manager *cameraManager, Camera_Device *cameras)\n{\n    Camera_Input *cameraInput;\n    Camera_ErrorCode ret = OH_CameraManager_CreateCameraInput(cameraManager, &cameras[0], &cameraInput);\n    if (cameraInput == nullptr || ret != CAMERA_OK) {\n        return;\n    }\n    // 当前版本只支持CAMERA_CONCURRENT_TYPE_LIMITED_CAPABILITY模式并发打开。\n    ret = OH_CameraInput_OpenConcurrentCameras(cameraInput, Camera_ConcurrentType::CAMERA_CONCURRENT_TYPE_LIMITED_CAPABILITY);\n    if (ret != CAMERA_OK) {\n        return;\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["会话流程。配置对应的相机输入流", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-input/capi-oh-camera-camera-input",
            children: "Camera_Input"
          }), "和需要的相机输出流，此处以预览输出流", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-previewoutput/capi-oh-camera-camera-previewoutput",
            children: "Camera_PreviewOutput"
          }), "为例 。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void SessionFlowFn(Camera_CaptureSession *captureSession, Camera_Input *cameraInput, Camera_PreviewOutput *previewOutput)\n{\n    // 开始配置会话。\n    Camera_ErrorCode ret = OH_CaptureSession_BeginConfig(captureSession);\n\n    // 向会话中添加相机输入流。\n    ret = OH_CaptureSession_AddInput(captureSession, cameraInput);\n\n    // 向会话中添加预览输出流。\n    ret = OH_CaptureSession_AddPreviewOutput(captureSession, previewOutput);\n \n    // 提交配置信息。\n    ret = OH_CaptureSession_CommitConfig(captureSession);\n\n    // 开始会话。\n    ret = OH_CaptureSession_Start(captureSession);\n \n    return;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在多摄同开状态下，前/后置相机可配置的能力示例如下（当前版本仅支持本文开头部分所示的七项基础功能）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 闪光灯能力。\nvoid HasFlashFn(uint32_t mode, Camera_CaptureSession *captureSession)\n{\n    Camera_FlashMode flashMode = static_cast<Camera_FlashMode>(mode);\n    // 检查闪光灯。\n    bool hasFlash = false;\n    Camera_ErrorCode ret = OH_CaptureSession_HasFlash(captureSession, &hasFlash);\n    if (captureSession == nullptr || ret != CAMERA_OK || !hasFlash) {\n        return;\n    }\n\n    // 检查闪光灯模式是否支持。\n    bool isSupported = false;\n   ret = OH_CaptureSession_IsFlashModeSupported(captureSession, flashMode, &isSupported);\n    if (ret != CAMERA_OK || !isSupported) {\n        return;\n    }\n\n    // 设置闪光灯模式。\n    ret = OH_CaptureSession_SetFlashMode(captureSession, flashMode);\n    if (ret != CAMERA_OK) {\n        return;\n    }\n\n    // 获取当前设备的闪光灯模式。\n    ret = OH_CaptureSession_GetFlashMode(captureSession, &flashMode);\n }\n\n// 曝光。\nvoid IsExposureModeSupportedFn(uint32_t mode, Camera_CaptureSession *captureSession)\n{\n    Camera_ExposureMode exposureMode = static_cast<Camera_ExposureMode>(mode);\n    bool isExposureModeSupported = false;\n    Camera_ErrorCode ret = OH_CaptureSession_IsExposureModeSupported(captureSession, exposureMode, &isExposureModeSupported);\n    if (&isExposureModeSupported == nullptr || ret != CAMERA_OK) {\n        return;\n    }\n    ret = OH_CaptureSession_SetExposureMode(captureSession, exposureMode);\n    if (ret != CAMERA_OK) {\n        return;\n    }\n    ret = OH_CaptureSession_GetExposureMode(captureSession, &exposureMode);\n}\n"
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
87044(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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