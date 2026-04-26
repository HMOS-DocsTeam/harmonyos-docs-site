"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["329407"], {
583268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_native_native_camera_metadata_native_camera_metadata_md_96b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-native-native-camera-metadata-native-camera-metadata-md-96b.json
var site_docs_camera_kit_camera_dev_native_native_camera_metadata_native_camera_metadata_md_96b_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-native/native-camera-metadata/native-camera-metadata","title":"元数据(C/C++)","description":"元数据（Metadata）是对相机返回的图像信息的描述和上下文。针对图像信息，提供更详细的数据，如照片或视频中，识别人像的取景框坐标等信息。","source":"@site/docs/camera-kit/camera-dev-native/native-camera-metadata/native-camera-metadata.md","sourceDirName":"camera-kit/camera-dev-native/native-camera-metadata","slug":"/camera-kit/camera-dev-native/native-camera-metadata/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-metadata/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"元数据(C/C++)","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-metadata","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"录像实践(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-recording-case/"},"next":{"title":"手电筒使用(C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-torch-use/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-native/native-camera-metadata/native-camera-metadata.md


const frontMatter = {
	title: '元数据(C/C++)',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-metadata',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '元数据(C/C++)';

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
        id: "元数据cc",
        children: "元数据(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "元数据（Metadata）是对相机返回的图像信息的描述和上下文。针对图像信息，提供更详细的数据，如照片或视频中，识别人像的取景框坐标等信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Metadata主要是通过一个TAG（Key），去找对应的Data（Value），用于传递参数和配置信息，减少内存拷贝操作。"
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
          children: "导入NDK接口，导入方法如下。"
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
            children: "target_link_libraries(entry PUBLIC\n    libace_napi.z.so\n    libohcamera.so\n    libhilog_ndk.z.so\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用OH_CameraManager_GetSupportedCameraOutputCapability()方法，获取当前设备支持的元数据类型metaDataObjectType，并通过OH_CameraManager_CreateMetadataOutput()方法创建元数据输出流。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode NDKCamera::CreateMetadataOutput(void)\n{\n    metaDataObjectType_ = cameraOutputCapability_->supportedMetadataObjectTypes[0];\n    if (metaDataObjectType_ == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"Get metaDataObjectType failed.\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n    ret_ = OH_CameraManager_CreateMetadataOutput(cameraManager_, metaDataObjectType_, &metadataOutput_);\n    if (metadataOutput_ == nullptr || ret_ != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"CreateMetadataOutput failed.\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n    MetadataOutputRegisterCallback();\n    return ret_;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_createcapturesession",
            children: "OH_CameraManager_CreateCaptureSession()"
          }), "方法创建一个会话。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ret = OH_CameraManager_CreateCaptureSession(cameraManager_, &captureSession_);\nif (captureSession_ == nullptr || ret != CAMERA_OK) {\n    OH_LOG_ERROR(LOG_APP, \"Create captureSession failed.\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置session，完成后通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_start",
            children: "OH_CaptureSession_Start()"
          }), "方法输出metadata数据。接口调用失败会返回相应错误码，错误码类型参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode",
            children: "Camera_ErrorCode"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 开始配置会话。\nCamera_ErrorCode ret = OH_CaptureSession_BeginConfig(captureSession_);\n\n// 将相机输入流加入会话。\nret = OH_CaptureSession_AddInput(captureSession_, cameraInput_);\n\n// 将相机预览流加入会话。\nret = OH_CaptureSession_AddPreviewOutput(captureSession_, previewOutput_);\n\nif (isVideo_) {\n    // 将相机录像流加入会话。\n    AddVideoOutput();\n    if (isHdrVideo) {\n        // HDR Vivid视频需要设置色彩空间为OH_COLORSPACE_BT2020_HLG_LIMIT。\n        OH_NativeBuffer_ColorSpace colorSpace = OH_NativeBuffer_ColorSpace::OH_COLORSPACE_BT2020_HLG_LIMIT;\n        SetColorSpace(colorSpace);\n    }\n} else {\n    // 将相机拍照流加入会话。\n    AddPhotoOutput();\n    ret = CreateMetadataOutput();\n    ret = OH_CaptureSession_AddMetadataOutput(captureSession_, metadataOutput_);\n    OH_NativeBuffer_ColorSpace colorSpace = OH_NativeBuffer_ColorSpace::OH_COLORSPACE_P3_FULL;\n    SetColorSpace(colorSpace);\n}\n\n// 提交会话配置信息。\nret = OH_CaptureSession_CommitConfig(captureSession_);\n// ...\n\nInitPreviewRotation();\n// 开始会话。\nOH_LOG_INFO(LOG_APP, \"session start\");\nret = OH_CaptureSession_Start(captureSession_);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用stop()方法停止输出metadata数据，接口调用失败会返回相应错误码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode StopMetadataOutput(Camera_MetadataOutput* metadataOutput)\n{\n    Camera_ErrorCode ret = OH_MetadataOutput_Stop(metadataOutput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_MetadataOutput_Stop failed.\");\n    }\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态监听",
      children: "状态监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在相机应用开发过程中，可以随时监听metadata数据以及输出流的状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过注册监听获取metadata对象，监听事件固定为metadataObjectsAvailable。检测到有效metadata数据时，callback返回相应的metadata数据信息，metadataOutput创建成功时可监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void OnMetadataObjectAvailable(Camera_MetadataOutput *metadataOutput, Camera_MetadataObject *metadataObject,\n    uint32_t size)\n{\n    OH_LOG_INFO(LOG_APP, \"size = %{public}d\", size);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(827996)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前的元数据类型仅支持人脸检测（FACE_DETECTION）功能。元数据信息对象为识别到的人脸区域的矩形信息（Rect），包含矩形区域的左上角x坐标、y坐标和矩形的宽高数据。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过注册回调函数，获取监听metadata流的错误结果，callback返回metadata输出接口使用错误时返回的错误码，错误码类型参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode",
            children: "Camera_ErrorCode"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void OnMetadataOutputError(Camera_MetadataOutput *metadataOutput, Camera_ErrorCode errorCode)\n{\n    OH_LOG_INFO(LOG_APP, \"OnMetadataOutput errorCode = %{public}d\", errorCode);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "MetadataOutput_Callbacks *NDKCamera::GetMetadataOutputListener(void)\n{\n    static MetadataOutput_Callbacks metadataOutputListener = {\n        .onMetadataObjectAvailable = OnMetadataObjectAvailable,\n        .onError = OnMetadataOutputError\n    };\n    return &metadataOutputListener;\n}\n\nCamera_ErrorCode NDKCamera::MetadataOutputRegisterCallback(void)\n{\n    ret_ = OH_MetadataOutput_RegisterCallback(metadataOutput_, GetMetadataOutputListener());\n    if (ret_ != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_MetadataOutput_RegisterCallback failed.\");\n    }\n    return ret_;\n}\n"
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
827996(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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