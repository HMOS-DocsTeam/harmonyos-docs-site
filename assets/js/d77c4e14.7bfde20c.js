"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["433757"], {
470469(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_native_mandatory_native_camera_device_input_native_camera_device_input_md_d77_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-native-mandatory-native-camera-device-input-native-camera-device-input-md-d77.json
var site_docs_camera_kit_camera_dev_native_mandatory_native_camera_device_input_native_camera_device_input_md_d77_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-native-mandatory/native-camera-device-input/native-camera-device-input","title":"设备输入(C/C++)","description":"在开发相机应用时，需要先申请相关权限。","source":"@site/docs/camera-kit/camera-dev-native-mandatory/native-camera-device-input/native-camera-device-input.md","sourceDirName":"camera-kit/camera-dev-native-mandatory/native-camera-device-input","slug":"/camera-kit/camera-dev-native-mandatory/native-camera-device-input/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native-mandatory/native-camera-device-input/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"设备输入(C/C++)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-device-input","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"相机管理 (C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native-mandatory/native-camera-device-management/"},"next":{"title":"会话管理(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native-mandatory/native-camera-session-management/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-native-mandatory/native-camera-device-input/native-camera-device-input.md


const frontMatter = {
	title: '设备输入(C/C++)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-device-input',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '设备输入(C/C++)';

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
        id: "设备输入cc",
        children: "设备输入(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发相机应用时，需要先", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-preparation",
        children: "申请相关权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机应用通过调用和控制相机设备，完成预览、拍照和录像等基础操作。"
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
          children: "导入NDK接口。选择系统提供的NDK接口能力，导入NDK接口的方法如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入NDK接口头文件。\n#include \"hilog/log.h\"\n#include \"ohcamera/camera.h\"\n#include \"ohcamera/camera_input.h\"\n#include \"ohcamera/capture_session.h\"\n#include \"ohcamera/photo_output.h\"\n#include \"ohcamera/preview_output.h\"\n#include \"ohcamera/video_output.h\"\n#include \"ohcamera/camera_manager.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在CMake脚本中链接相关动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC\n    libace_napi.z.so\n    libohcamera.so\n    libhilog_ndk.z.so\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_createcamerainput",
            children: "OH_CameraManager_CreateCameraInput()"
          }), "方法，获取cameraInput对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 监听cameraInput错误信息。\nvoid OnCameraInputError(const Camera_Input* cameraInput, Camera_ErrorCode errorCode)\n{\n   OH_LOG_INFO(LOG_APP, \"OnCameraInput errorCode: %{public}d\", errorCode);\n}\n\nCameraInput_Callbacks* GetCameraInputListener(void)\n{\n   static CameraInput_Callbacks cameraInputCallbacks = {\n      .onError = OnCameraInputError\n   };\n   return &cameraInputCallbacks;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 监听cameraStatus信息。\nvoid CameraManagerStatusCallback(Camera_Manager* cameraManager, Camera_StatusInfo* status)\n{\n    OH_LOG_INFO(LOG_APP, \"CameraManagerStatusCallback is called\");\n}\n\nCameraManager_Callbacks* GetCameraManagerListener()\n{\n    static CameraManager_Callbacks cameraManagerListener = {\n        .onCameraStatus = CameraManagerStatusCallback\n    };\n    return &cameraManagerListener;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void CreateAndOpenCamera()\n{\n    Camera_Manager* cameraManager = nullptr;\n    Camera_Input* cameraInput = nullptr;\n    Camera_Device* cameras = nullptr;\n    uint32_t size = 0;\n    uint32_t cameraDeviceIndex = 0;\n    // 创建CameraManager对象。\n    Camera_ErrorCode ret = OH_Camera_GetCameraManager(&cameraManager);\n    if (cameraManager == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_Camera_GetCameraManager failed.\");\n        return;\n    }\n    // 监听相机状态变化。\n    ret = OH_CameraManager_RegisterCallback(cameraManager, GetCameraManagerListener());\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_RegisterCallback failed.\");\n    }\n    // 获取相机列表。\n     ret = OH_CameraManager_GetSupportedCameras(cameraManager, &cameras, &size);\n     if (cameras == nullptr || size == 0 || ret != CAMERA_OK) {\n         OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_GetSupportedCameras failed.\");\n         return;\n     }\n    // 创建相机输入流。\n    ret = OH_CameraManager_CreateCameraInput(cameraManager, &cameras[cameraDeviceIndex], &cameraInput);\n    if (cameraInput == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_CreateCameraInput failed.\");\n        return;\n    }\n    ret = OH_CameraInput_RegisterCallback(cameraInput, GetCameraInputListener());\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraInput_RegisterCallback failed.\");\n    }\n    // 打开相机。\n    ret = OH_CameraInput_Open(cameraInput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraInput_open failed.\");\n        return;\n    }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(953446)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在相机设备输入之前需要先完成相机管理，详细开发步骤请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-native-mandatory/native-camera-device-management",
            children: "相机管理"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_getsupportedscenemodes",
            children: "OH_CameraManager_GetSupportedSceneModes()"
          }), "方法，获取当前相机设备支持的模式列表，列表中存储了相机设备支持的所有模式", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_scenemode",
            children: "Camera_SceneMode"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool IsSupportedSceneMode(Camera_Device camera, Camera_SceneMode sceneMode)\n{\n    Camera_SceneMode* sceneModes = nullptr;\n    uint32_t sceneModeSize = 0;\n    Camera_ErrorCode ret = OH_CameraManager_GetSupportedSceneModes(&camera, &sceneModes, &sceneModeSize);\n    if (sceneModes == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_GetSupportedSceneModes failed.\");\n        return false;\n    }\n    for (uint32_t index = 0; index < sceneModeSize; index++) {\n        OH_LOG_INFO(LOG_APP, \"scene mode = %{public}u \", sceneModes[index]);    // 获取相机指定模式。\n        if (sceneModes[index] == sceneMode) {\n            return true;\n        }\n    }\n    return false;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_getsupportedcameraoutputcapabilitywithscenemode",
            children: "OH_CameraManager_GetSupportedCameraOutputCapabilityWithSceneMode()"
          }), "方法，获取当前设备在当前模式下支持的所有输出流，如预览流、拍照流等。输出流在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-outputcapability/capi-oh-camera-camera-outputcapability",
            children: "Camera_OutputCapability"
          }), "中的各个profile字段中。根据相机设备指定模式", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_scenemode",
            children: "Camera_SceneMode"
          }), "的不同，需要向Session中添加对应类型的输出流，请参考会话管理", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-native-mandatory/native-camera-session-management#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
            children: "开发步骤"
          }), "中的第6步。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_OutputCapability* GetSupportedCameraOutputCapability(Camera_Manager* cameraManager, Camera_Device &camera)\n{\n    Camera_OutputCapability* cameraOutputCapability = nullptr;\n    // 示例代码以NORMAL_PHOTO模式为例，查询NORMAL_PHOTO在camera中是否支持。\n    bool isSupported = IsSupportedSceneMode(camera, Camera_SceneMode::NORMAL_PHOTO);\n    if (!isSupported) {\n        OH_LOG_ERROR(LOG_APP, \"NORMAL_PHOTO is not supported.\");\n        return cameraOutputCapability;\n    }\n    // 获取相机设备支持的输出流能力。\n    const Camera_Profile* previewProfile = nullptr;\n    const Camera_Profile* photoProfile = nullptr;\n    Camera_ErrorCode ret = OH_CameraManager_GetSupportedCameraOutputCapabilityWithSceneMode(cameraManager, &camera,\n        Camera_SceneMode::NORMAL_PHOTO, &cameraOutputCapability);\n    if (cameraOutputCapability == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_GetSupportedCameraOutputCapability failed.\");\n        return cameraOutputCapability;\n    }\n    // 以NORMAL_PHOTO模式为例，需要添加预览流、拍照流。\n    if (cameraOutputCapability->previewProfiles == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"previewProfiles == null\");\n    } else {\n        // 根据所需从cameraOutputCapability->previewProfiles中选择合适的预览分辨率。\n        previewProfile = cameraOutputCapability->previewProfiles[0];\n    }\n    if (cameraOutputCapability->photoProfiles == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"photoProfiles == null\");\n    } else {\n        // 根据所需从cameraOutputCapability->photoProfiles中选择合适的拍照分辨率。\n        photoProfile = cameraOutputCapability->photoProfiles[0];\n    }\n    return cameraOutputCapability;\n}\n"
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
953446(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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