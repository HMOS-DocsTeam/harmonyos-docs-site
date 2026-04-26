"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["550940"], {
96538(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_native_native_camera_preview_native_camera_preview_md_299_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-native-native-camera-preview-native-camera-preview-md-299.json
var site_docs_camera_kit_camera_dev_native_native_camera_preview_native_camera_preview_md_299_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-native/native-camera-preview/native-camera-preview","title":"预览(C/C++)","description":"预览是启动相机后看见的画面，通常在拍照和录像前执行。","source":"@site/docs/camera-kit/camera-dev-native/native-camera-preview/native-camera-preview.md","sourceDirName":"camera-kit/camera-dev-native/native-camera-preview","slug":"/camera-kit/camera-dev-native/native-camera-preview/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-preview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"预览(C/C++)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-preview","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"会话管理(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native-mandatory/native-camera-session-management/"},"next":{"title":"预览流二次处理(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-preview-imagereceiver/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-native/native-camera-preview/native-camera-preview.md


const frontMatter = {
	title: '预览(C/C++)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-preview',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '预览(C/C++)';

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
        id: "预览cc",
        children: "预览(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预览是启动相机后看见的画面，通常在拍照和录像前执行。"
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
            children: "target_link_libraries(entry PUBLIC\n    libace_napi.z.so\n    libohcamera.so\n    libhilog_ndk.z.so\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取SurfaceId。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["XComponent组件为预览流提供的SurfaceId，而XComponent的能力由UI提供，相关介绍可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
            children: "XComponent组件参考"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据传入的SurfaceId，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_getsupportedcameraoutputcapability",
            children: "OH_CameraManager_GetSupportedCameraOutputCapability()"
          }), "方法获取当前设备支持的预览能力。通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_createpreviewoutput",
            children: "OH_CameraManager_CreatePreviewOutput()"
          }), "方法创建预览输出流，其中，OH_CameraManager_CreatePreviewOutput()方法中的参数分别是cameraManager指针，previewProfiles数组中的第一项，步骤三中获取的surfaceId，以及返回的previewOutput指针。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode NDKCamera::CreatePreviewOutput(void)\n{\n    if (previewProfile_ == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"Get previewProfiles failed.\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n    ret_ = OH_CameraManager_CreatePreviewOutput(cameraManager_, previewProfile_, previewSurfaceId_, &previewOutput_);\n    OH_LOG_ERROR(LOG_APP, \"create preview width: %{public}d, height: %{public}d, format: %{public}d\",\n        previewProfile_->size.width, previewProfile_->size.height, previewProfile_->format);\n    if (previewSurfaceId_ == nullptr || previewOutput_ == nullptr || ret_ != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"CreatePreviewOutput failed.\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n    return ret_;\n    PreviewOutputRegisterCallback();\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使能。当session完成CommitConfig后通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_start",
            children: "OH_CaptureSession_Start()"
          }), "方法输出预览流，接口调用失败会返回相应错误码，错误码类型参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode",
            children: "Camera_ErrorCode"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode NDKCamera::SessionStart(void)\n{\n    Camera_ErrorCode ret = OH_CaptureSession_Start(captureSession_);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_Start success.\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_Start failed. %d \", ret);\n    }\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_stop",
            children: "OH_CaptureSession_Stop()"
          }), "方法停止预览流，接口调用失败会返回相应错误码，错误码类型参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode",
            children: "Camera_ErrorCode"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode NDKCamera::SessionStop(void)\n{\n    Camera_ErrorCode ret = OH_CaptureSession_Stop(captureSession_);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_Stop success.\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_Stop failed. %d \", ret);\n    }\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态监听",
      children: "状态监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在相机应用开发过程中，可以随时监听预览输出流状态，包括预览流启动、预览流结束、预览流输出错误。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过注册固定的frameStart回调函数获取监听预览启动结果，previewOutput创建成功时即可监听，预览第一次曝光时触发，有该事件返回结果则认为预览流已启动。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void PreviewOutputOnFrameStart(Camera_PreviewOutput *previewOutput)\n{\n    OH_LOG_INFO(LOG_APP, \"PreviewOutputOnFrameStart\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过注册固定的frameEnd回调函数获取监听预览结束结果，previewOutput创建成功时即可监听，预览完成最后一帧时触发，有该事件返回结果则认为预览流已结束。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void PreviewOutputOnFrameEnd(Camera_PreviewOutput *previewOutput, int32_t frameCount)\n{\n    OH_LOG_INFO(LOG_APP, \"PreviewOutput frameCount = %{public}d\", frameCount);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过注册固定的error回调函数获取监听预览输出错误结果，callback返回预览输出接口使用错误时对应的错误码，错误码类型参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode",
            children: "Camera_ErrorCode"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void PreviewOutputOnError(Camera_PreviewOutput *previewOutput, Camera_ErrorCode errorCode)\n{\n    OH_LOG_INFO(LOG_APP, \"PreviewOutput errorCode = %{public}d\", errorCode);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PreviewOutput_Callbacks *NDKCamera::GetPreviewOutputListener(void)\n{\n    static PreviewOutput_Callbacks previewOutputListener = {\n        .onFrameStart = PreviewOutputOnFrameStart,\n        .onFrameEnd = PreviewOutputOnFrameEnd,\n        .onError = PreviewOutputOnError\n    };\n    return &previewOutputListener;\n}\n\nCamera_ErrorCode NDKCamera::PreviewOutputRegisterCallback(void)\n{\n    ret_ = OH_PreviewOutput_RegisterCallback(previewOutput_, GetPreviewOutputListener());\n    if (ret_ != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_PreviewOutput_RegisterCallback failed.\");\n    }\n    return ret_;\n}\n"
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