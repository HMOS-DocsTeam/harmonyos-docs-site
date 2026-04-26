"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["170436"], {
914179(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_native_camera_rotation_native_camera_rotation_angle_adaptation_native_camera_rotation_angle_adaptation_native_md_c7b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-native-camera-rotation-native-camera-rotation-angle-adaptation-native-camera-rotation-angle-adaptation-native-md-c7b.json
var site_docs_camera_kit_camera_dev_native_camera_rotation_native_camera_rotation_angle_adaptation_native_camera_rotation_angle_adaptation_native_md_c7b_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-angle-adaptation-native/camera-rotation-angle-adaptation-native","title":"适配相机旋转角度(C/C++)","description":"屏幕处于不同的屏幕状态时，原始图像需旋转不同的角度，以确保图像在合适的方向显示，效果如图所示。","source":"@site/docs/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-angle-adaptation-native/camera-rotation-angle-adaptation-native.md","sourceDirName":"camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-angle-adaptation-native","slug":"/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-angle-adaptation-native/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-angle-adaptation-native/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"适配相机旋转角度(C/C++)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-rotation-angle-adaptation-native","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"对焦(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/camera-focus-native/"},"next":{"title":"相机旋转角度的术语","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-term-native/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-angle-adaptation-native/camera-rotation-angle-adaptation-native.md


const frontMatter = {
	title: '适配相机旋转角度(C/C++)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-rotation-angle-adaptation-native',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '适配相机旋转角度(C/C++)';

const assets = {

};



const toc = [{
  "value": "创建会话",
  "id": "创建会话",
  "level": 2
}, {
  "value": "预览",
  "id": "预览",
  "level": 2
}, {
  "value": "拍照",
  "id": "拍照",
  "level": 2
}, {
  "value": "录像",
  "id": "录像",
  "level": 2
}, {
  "value": "计算设备旋转角度",
  "id": "计算设备旋转角度",
  "level": 2
}, {
  "value": "视频通话送远端场景",
  "id": "视频通话送远端场景",
  "level": 2
}, {
  "value": "实现相机无损出图",
  "id": "实现相机无损出图",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "适配相机旋转角度cc",
        children: "适配相机旋转角度(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "屏幕处于不同的屏幕状态时，原始图像需旋转不同的角度，以确保图像在合适的方向显示，效果如图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(518193)/* ["default"] */.A) + "",
        width: "400",
        height: "269"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本开发指导将指导开发者在预览、拍照、录像等不同场景下，如何适配相机的旋转角度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在预览时，图像旋转角度与屏幕显示旋转角度（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-info-h/capi-oh-display-info-h#nativedisplaymanager_rotation",
            children: "NativeDisplayManager_Rotation"
          }), "）相关。具体开发指导：", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%88%9B%E5%BB%BA%E4%BC%9A%E8%AF%9D",
            children: "创建会话"
          }), " > ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E9%A2%84%E8%A7%88",
            children: "预览"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在拍照、录像时，图像旋转角度与设备重力方向（即", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%AE%A1%E7%AE%97%E8%AE%BE%E5%A4%87%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
            children: "设备旋转角度"
          }), "）相关。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["拍照开发指导：", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%88%9B%E5%BB%BA%E4%BC%9A%E8%AF%9D",
            children: "创建会话"
          }), " > ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%AE%A1%E7%AE%97%E8%AE%BE%E5%A4%87%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
            children: "计算设备旋转角度"
          }), " > ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E6%8B%8D%E7%85%A7",
            children: "拍照"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["录像开发指导：", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%88%9B%E5%BB%BA%E4%BC%9A%E8%AF%9D",
            children: "创建会话"
          }), " > ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%AE%A1%E7%AE%97%E8%AE%BE%E5%A4%87%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
            children: "计算设备旋转角度"
          }), " > ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%BD%95%E5%83%8F",
            children: "录像"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API参考说明，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera",
        children: "Camera API文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建会话",
      children: "创建会话"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相机等相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"hilog/log.h\"\n#include \"ohcamera/camera.h\"\n#include \"ohcamera/camera_manager.h\"\n#include \"ohcamera/capture_session.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建Session会话。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["相机使用预览等功能前，均需创建相机会话，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h",
            children: "camera_manager.h"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_createcapturesession",
            children: "OH_CameraManager_CreateCaptureSession"
          }), "方法创建一个会话，创建会话时需指定创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_scenemode",
            children: "Camera_SceneMode"
          }), "为NORMAL_PHOTO或NORMAL_VIDEO，创建的session处于拍照或者录像模式。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void createPhotosession(Camera_Manager *cameraManager) {\n    Camera_CaptureSession *captureSession;\n    Camera_SceneMode sceneMode = NORMAL_PHOTO;\n    Camera_ErrorCode ret = OH_CameraManager_CreateCaptureSession(cameraManager, &captureSession);\n    if (captureSession == nullptr || ret != CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"Create captureSession failed.\");\n    }\n    ret = OH_CaptureSession_SetSessionMode(captureSession, sceneMode);\n    if (ret != CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_SetSessionMode failed.\");\n    }\n}\n\nvoid createVideosession(Camera_Manager *cameraManager) {\n    Camera_CaptureSession *captureSession;\n    Camera_SceneMode sceneMode = NORMAL_VIDEO;\n    Camera_ErrorCode ret = OH_CameraManager_CreateCaptureSession(cameraManager, &captureSession);\n    if (captureSession == nullptr || ret != CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"Create captureSession failed.\");\n    }\n    ret = OH_CaptureSession_SetSessionMode(captureSession, sceneMode);\n    if (ret != CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_SetSessionMode failed.\");\n    }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "预览",
      children: "预览"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完成", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%88%9B%E5%BB%BA%E4%BC%9A%E8%AF%9D",
        children: "会话创建"
      }), "后，开发者可根据实际需求，配置输出流。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-preview-output-h/capi-preview-output-h",
            children: "preview_output.h"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-preview-output-h/capi-preview-output-h#oh_previewoutput_getpreviewrotation",
            children: "OH_PreviewOutput_GetPreviewRotation"
          }), "接口，获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-term-native#%E9%A2%84%E8%A7%88%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
            children: "预览旋转角度"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["displayRotation：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-term-native#%E5%B1%8F%E5%B9%95%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
            children: "显示设备的屏幕旋转角度"
          }), "，可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-display-manager-h/capi-oh-display-manager-h#oh_nativedisplaymanager_getdefaultdisplayrotation",
            children: "OH_NativeDisplayManager_GetDefaultDisplayRotation"
          }), "获取默认屏幕的顺时针旋转角度，并将对应角度填入。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例：OH_NativeDisplayManager_GetDefaultDisplayRotation获取结果为1，表示显示设备屏幕顺时针旋转为90°，此处imageRotation填入90。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"hilog/log.h\"\n#include \"ohcamera/camera.h\"\n#include \"ohcamera/preview_output.h\"\n#include <window_manager/oh_display_info.h>\n#include <window_manager/oh_display_manager.h>\n\nint32_t GetDefaultDisplayRotation() {\n    int32_t imageRotation = 0;\n    NativeDisplayManager_Rotation displayRotation = DISPLAY_MANAGER_ROTATION_0;\n    int32_t ret = OH_NativeDisplayManager_GetDefaultDisplayRotation(&displayRotation);\n    if (ret != DISPLAY_MANAGER_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_NativeDisplayManager_GetDefaultDisplayRotation failed.\");\n    }\n    imageRotation = displayRotation * IAMGE_ROTATION_90;\n    return imageRotation;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["该接口需要在session调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_commitconfig",
            children: "OH_CaptureSession_CommitConfig"
          }), "完成配流后调用，如果存在异步执行的情况，previewOutput未添加到session里或者已调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_release",
            children: "OH_CaptureSession_Release"
          }), "，导致两者关系未绑定，此时调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-preview-output-h/capi-preview-output-h#oh_previewoutput_getpreviewrotation",
            children: "OH_PreviewOutput_GetPreviewRotation"
          }), "，则会调用失败，并抛出错误码", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts-errcode/errorcode-camera/errorcode-camera#section7400201-%E7%9B%B8%E6%9C%BA%E6%9C%8D%E5%8A%A1%E5%BC%82%E5%B8%B8",
            children: "CAMERA_SERVICE_FATAL_ERROR"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ImageRotation GetPreviewRotation(Camera_PreviewOutput* previewOutput, int32_t imageRotation) {\n    Camera_ImageRotation previewRotation = IAMGE_ROTATION_0;\n    Camera_ErrorCode ret = OH_PreviewOutput_GetPreviewRotation(previewOutput, imageRotation, &previewRotation);\n    if (ret != CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_PreviewOutput_GetPreviewRotation failed.\");\n    }\n    return previewRotation;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-preview-output-h/capi-preview-output-h",
            children: "preview_output.h"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-preview-output-h/capi-preview-output-h#oh_previewoutput_setpreviewrotation",
            children: "OH_PreviewOutput_SetPreviewRotation"
          }), "，设置图像的预览旋转角度。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["该接口需要在session调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_commitconfig",
            children: "OH_CaptureSession_CommitConfig"
          }), "完成配流后调用，如果多次调用，以最新调用设置的图像预览旋转角度为准。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["previewRotation：预览旋转角度，取上一步", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-preview-output-h/capi-preview-output-h#oh_previewoutput_getpreviewrotation",
              children: "OH_PreviewOutput_GetPreviewRotation"
            }), "的返回值。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["isDisplayLocked：Surface在屏幕旋转时是否锁定方向。当设置为false，即屏幕方向未锁定，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-term-native#%E9%A2%84%E8%A7%88%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
              children: "预览旋转角度"
            }), "将根据", (0,jsx_runtime.jsx)(_components.a, {
              href: "/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-term-native#%E7%9B%B8%E6%9C%BA%E9%95%9C%E5%A4%B4%E5%AE%89%E8%A3%85%E8%A7%92%E5%BA%A6",
              children: "相机镜头角度"
            }), "+", (0,jsx_runtime.jsx)(_components.a, {
              href: "/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-term-native#%E5%B1%8F%E5%B9%95%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
              children: "屏幕显示旋转角度"
            }), "的值计算；当设置为true，Surface旋转锁定，不跟随窗口变化，旋转角度仅取相机镜头角度计算。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void SetPreviewRotation(Camera_PreviewOutput* previewOutput, Camera_ImageRotation previewRotation, bool isDisplayLocked) {\n    Camera_ErrorCode ret = OH_PreviewOutput_SetPreviewRotation(previewOutput, previewRotation, isDisplayLocked);\n    if (ret != CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_PreviewOutput_SetPreviewRotation failed.\");\n    }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "预览流旋转接口适配场景及示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-native-mandatory/native-camera-session-management",
            children: "会话管理"
          }), "过程中调用预览旋转接口，即：使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_commitconfig",
            children: "OH_CaptureSession_CommitConfig"
          }), "接口提交相关配置后调用，建议在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_start",
            children: "OH_CaptureSession_Start"
          }), "起流前调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"hilog/log.h\"\n#include \"ohcamera/camera.h\"\n#include \"ohcamera/preview_output.h\"\n#include <window_manager/oh_display_info.h>\n#include <window_manager/oh_display_manager.h>\n\nint32_t GetDefaultDisplayRotation() {\n    int32_t imageRotation = 0;\n    NativeDisplayManager_Rotation displayRotation = DISPLAY_MANAGER_ROTATION_0;\n    int32_t ret = OH_NativeDisplayManager_GetDefaultDisplayRotation(&displayRotation);\n    if (ret != DISPLAY_MANAGER_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_NativeDisplayManager_GetDefaultDisplayRotation failed.\");\n    }\n    imageRotation = displayRotation * IAMGE_ROTATION_90;\n    return imageRotation;\n}\n\nvoid InitPreviewRotation(Camera_PreviewOutput* previewOutput) {\n    // previewOutput是创建的预览输出\n    Camera_ImageRotation previewRotation = IAMGE_ROTATION_0;\n    int32_t imageRotation = GetDefaultDisplayRotation();\n    Camera_ErrorCode ret = OH_PreviewOutput_GetPreviewRotation(previewOutput, imageRotation, &previewRotation);\n    if (ret != CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_PreviewOutput_GetPreviewRotation failed.\");\n    }\n    ret = OH_PreviewOutput_SetPreviewRotation(previewOutput, previewRotation, false);\n    if (ret != CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_PreviewOutput_SetPreviewRotation failed.\");\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用使用相机时，通过监听", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/display-manager/native-display-manager",
            children: "监听屏幕状态变化"
          }), "，感知窗口当前状态，如当前相机窗口发生旋转时，需对预览流进行角度修正。推荐在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-native-mandatory/native-camera-session-management",
            children: "会话管理"
          }), "中完成调用预览旋转接口后，直接创建监听。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"hilog/log.h\"\n#include \"ohcamera/camera.h\"\n#include \"ohcamera/preview_output.h\"\n#include <window_manager/oh_display_info.h>\n#include <window_manager/oh_display_manager.h>\n\nint32_t GetDefaultDisplayRotation() {\n    int32_t imageRotation = 0;\n    NativeDisplayManager_Rotation displayRotation = DISPLAY_MANAGER_ROTATION_0;\n    int32_t ret = OH_NativeDisplayManager_GetDefaultDisplayRotation(&displayRotation);\n    if (ret != DISPLAY_MANAGER_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_NativeDisplayManager_GetDefaultDisplayRotation failed.\");\n    }\n    imageRotation = displayRotation * IAMGE_ROTATION_90;\n    return imageRotation;\n}\n\n// 应用需监听屏幕状态变化，使用如下回调函数对预览流进行角度修正\nvoid DisplayChangeCallback(uint64_t displayId)\n{\n    // previewOutput是创建的预览输出\n    OH_LOG_INFO(LOG_APP, \"DisplayChangeCallback displayId=%{public}lu.\", displayId);\n    Camera_ImageRotation previewRotation = IAMGE_ROTATION_0;\n    int32_t imageRotation = GetDefaultDisplayRotation();\n    Camera_ErrorCode ret = OH_PreviewOutput_GetPreviewRotation(previewOutput, imageRotation, &previewRotation);\n    if (ret != CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_PreviewOutput_GetPreviewRotation failed.\");\n    }\n    ret = OH_PreviewOutput_SetPreviewRotation(previewOutput, previewRotation, false);\n    if (ret != CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_PreviewOutput_SetPreviewRotation failed.\");\n    }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拍照",
      children: "拍照"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完成", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%88%9B%E5%BB%BA%E4%BC%9A%E8%AF%9D",
        children: "会话创建"
      }), "后，开发者可根据实际需求，配置输出流。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-photo-output-h/capi-photo-output-h",
            children: "photo_output.h"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-photo-output-h/capi-photo-output-h#oh_photooutput_getphotorotation",
            children: "OH_PhotoOutput_GetPhotoRotation"
          }), "可以获取到拍照旋转角度。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["该接口需要在session调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_commitconfig",
            children: "OH_CaptureSession_CommitConfig"
          }), "完成配流后调用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["deviceDegree：设备旋转角度。拍照的旋转角度与重力方向（即设备旋转角度）相关，获取方式请见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%AE%A1%E7%AE%97%E8%AE%BE%E5%A4%87%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
            children: "计算设备旋转角度"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"hilog/log.h\"\n#include \"ohcamera/camera.h\"\n#include \"ohcamera/photo_output.h\"\n\nCamera_ImageRotation GetPhotoRotation(Camera_PhotoOutput* photoOutput, int32_t deviceDegree) {\n    Camera_ImageRotation photoRotation = IAMGE_ROTATION_0;\n    Camera_ErrorCode ret = OH_PhotoOutput_GetPhotoRotation(photoOutput, deviceDegree, &photoRotation);\n    if (ret != CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_PhotoOutput_GetPhotoRotation failed.\");\n    }\n    return photoRotation;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用将拍照角度写入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-photocapturesetting/capi-oh-camera-camera-photocapturesetting",
            children: "Camera_PhotoCaptureSetting"
          }), "的rotation。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["其余参数的配置及拍照，可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-native/native-camera-shooting",
            children: "拍照开发指导"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "录像",
      children: "录像"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完成", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%88%9B%E5%BB%BA%E4%BC%9A%E8%AF%9D",
        children: "会话创建"
      }), "后，开发者可根据实际需求，配置输出流。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-video-output-h/capi-video-output-h",
            children: "video_output.h"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-video-output-h/capi-video-output-h#oh_videooutput_getvideorotation",
            children: "OH_VideoOutput_GetVideoRotation"
          }), "可以获取到录像的旋转角度。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["该接口需要在session调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_commitconfig",
            children: "OH_CaptureSession_CommitConfig"
          }), "完成配流后调用。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["deviceDegree：设备旋转角度。录像的旋转角度与重力方向（即设备旋转角度）相关，获取方式请见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%AE%A1%E7%AE%97%E8%AE%BE%E5%A4%87%E6%97%8B%E8%BD%AC%E8%A7%92%E5%BA%A6",
            children: "计算设备旋转角度"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"hilog/log.h\"\n#include \"ohcamera/camera.h\"\n#include \"ohcamera/video_output.h\"\n\nCamera_ImageRotation GetVideoRotation(Camera_VideoOutput* videoOutput, int32_t deviceDegree) {\n    Camera_ImageRotation videoRotation = IAMGE_ROTATION_0;\n    Camera_ErrorCode ret = OH_VideoOutput_GetVideoRotation(videoOutput, deviceDegree, &videoRotation);\n    if (ret != CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_PhotoOutput_GetPhotoRotation failed.\");\n    }\n    return videoRotation;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-h/capi-avrecorder-h#oh_avrecorder_prepare",
            children: "OH_AVRecorder_Prepare"
          }), "后使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-h/capi-avrecorder-h#oh_avrecorder_updaterotation",
            children: "OH_AVRecorder_UpdateRotation"
          }), "设置录像角度。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["其余参数的配置及启动录像，可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-native/native-camera-recording",
            children: "录像开发指导"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "录像流旋转接口适配示例代码："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"hilog/log.h\"\n#include \"ohcamera/camera.h\"\n#include \"ohcamera/video_output.h\"\n#include <multimedia/player_framework/avrecorder.h>\n#include <multimedia/player_framework/avrecorder_base.h>\n\nvoid GetVideoRotationAndUpdate(Camera_VideoOutput* videoOutput, int32_t deviceDegree, OH_AVRecorder* recorder, OH_AVRecorder_State state) {\n    Camera_ImageRotation videoRotation = IAMGE_ROTATION_0;\n    Camera_ErrorCode ret = OH_VideoOutput_GetVideoRotation(videoOutput, deviceDegree, &videoRotation);\n    if (ret != CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_PhotoOutput_GetPhotoRotation failed.\");\n    }\n    if (state == OH_AVRecorder_State::AVRECORDER_PREPARED) {\n        OH_AVErrCode retCode = OH_AVRecorder_UpdateRotation(recorder, videoRotation);\n        if (retCode != AV_ERR_OK) {\n            OH_LOG_INFO(LOG_APP, \"OH_AVRecorder_UpdateRotation failed.\");\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "计算设备旋转角度",
      children: "计算设备旋转角度"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前可通过监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-h/capi-oh-sensor-h#oh_sensor_subscribe",
        children: "OH_Sensor_Subscribe"
      }), "获取重力传感器在x、y、z三个方向上的数据，计算得出设备旋转角度deviceDegree，示例如下所示。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果无法获得重力传感器数据，需要申请重力传感器权限ohos.permission.ACCELEROMETER。权限申请请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "，如何获取传感器数据请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-hardware/sensor-service-kit/sensor/sensor-guidelines-capi",
        children: "传感器开发指导"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"hilog/log.h\"\n#include <sensors/oh_sensor.h>\n#include <cmath>\n#include <thread>\n\nSensor_SubscriptionId *id;\nSensor_Subscriber *subscriber;\nSensor_SubscriptionAttribute *attr;\n\n// Sensor获取方式为注册监听获取单次数据后解注册,监听回调为异步触发,等待g_isDegreeReady设置为true后说明获取设备角度成功;\n// 角度保存在g_deviceDegree,使用角度后将g_isDegreeReady置为false;\nfloat g_deviceDegree = 0.0f;\nbool g_isDegreeReady = false;\n\nfloat GetDeviceDegreeFromXYZ(float x, float y, float z)\n{\n    // 判断条件 (x * x + y * y) * 3 < z * z\n    if ((x * x + y * y) * 3 < z * z) {\n        return -1.0f;\n    } else {\n        // 计算 atan2(y, -x) 并转换为角度\n        float sd = std::atan2(y, -x);                      // 返回弧度\n        float sc = std::round(sd / 3.141592653589f * 180); // 转换为角度并四舍五入\n        float getDeviceDegree = 90.0f - sc;\n\n        // 保证角度在 0 到 360 之间\n        if (getDeviceDegree >= 0) {\n            getDeviceDegree = fmod(getDeviceDegree, 360.0f); // 取模，保证结果在 0 到 360 之间\n        } else {\n            getDeviceDegree = fmod(getDeviceDegree, 360.0f) + 360.0f; // 如果小于0，加上360\n        }\n        OH_LOG_INFO(LOG_APP, \"GetDeviceDegreeFromXYZ getDeviceDegree:%{public}f\", getDeviceDegree);\n        return getDeviceDegree;\n    }\n}\n\nvoid SensorDataCallback(Sensor_Event *event)\n{\n    OH_LOG_INFO(LOG_APP, \"SensorDataCallbackImpl start\");\n    // SENSOR_TYPE_GRAVITY:data[0]、data[1]、data[2]分别表示设备x、y、z轴的重力加速度分量，单位m/s²；\n    float *data = nullptr;\n    uint32_t length = 0;\n    OH_SensorEvent_GetData(event, &data, &length); // 获取传感器数据。\n    for (uint32_t i = 0; i < length; ++i) {\n        OH_LOG_INFO(LOG_APP, \"SensorDataCallbackImpl data[%{public}d]:%{public}f\", i, data[i]);\n    }\n    float x = data[0];\n    float y = data[1];\n    float z = data[2];\n    g_deviceDegree = GetDeviceDegreeFromXYZ(x, y, z);\n    g_isDegreeReady = true;\n\n    OH_Sensor_Unsubscribe(id, subscriber); // 取消订阅传感器数据。\n    if (id != nullptr) {\n        OH_Sensor_DestroySubscriptionId(id); // 销毁Sensor_SubscriptionId实例并回收内存。\n    }\n    if (attr != nullptr) {\n        OH_Sensor_DestroySubscriptionAttribute(attr); // 销毁Sensor_SubscriptionAttribute实例并回收内存。\n    }\n    if (subscriber != nullptr) {\n        OH_Sensor_DestroySubscriber(subscriber); // 销毁Sensor_Subscriber实例并回收内存。\n        subscriber = nullptr;\n    }\n}\n\nvoid GetCurGravity()\n{\n    Sensor_Type SENSOR_ID{ SENSOR_TYPE_GRAVITY };\n    id = OH_Sensor_CreateSubscriptionId(); // 创建一个Sensor_SubscriptionId实例。\n    if (id == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"sensor error0\");\n    }\n    int32_t res = OH_SensorSubscriptionId_SetType(id, SENSOR_ID); // 设置传感器类型为重力。\n    if (res != 0) {\n        OH_LOG_ERROR(LOG_APP, \"sensor error1\");\n    }\n    attr = OH_Sensor_CreateSubscriptionAttribute(); // 创建Sensor_SubscriptionAttribute实例。\n    if (attr == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"sensor error2\");\n    }\n    int64_t sensorSamplePeriod = 15000000;\n    res = OH_SensorSubscriptionAttribute_SetSamplingInterval(attr, sensorSamplePeriod); // 设置传感器数据报告间隔。\n    if (res != 0) {\n        OH_LOG_ERROR(LOG_APP, \"sensor error3\");\n    }\n    subscriber = OH_Sensor_CreateSubscriber();\n    if (subscriber == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"sensor error2\");\n    }\n    OH_SensorSubscriber_SetCallback(subscriber, SensorDataCallback);\n    Sensor_Result sensorRes = OH_Sensor_Subscribe(id, attr, subscriber); // 订阅传感器数据。\n    if (sensorRes != SENSOR_SUCCESS) {\n        OH_LOG_INFO(LOG_APP, \"sensor error:%{public}d\", sensorRes);\n    }\n}\n\nint32_t CalDeviceDegree()\n{\n    float deviceDegree = 0.0f;\n    GetCurGravity();\n    while (!g_isDegreeReady) {\n        std::this_thread::sleep_for(std::chrono::milliseconds(10));\n    }\n    deviceDegree = g_deviceDegree;\n    g_isDegreeReady = false;\n    return deviceDegree;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "视频通话送远端场景",
      children: "视频通话送远端场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["两个设备之间进行视频通话，存在设备间持握方向不一致问题，建议", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "在本端将画面转正"
        })
      }), "，再通过网络发送到对端。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现相机无损出图",
      children: "实现相机无损出图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在部分折叠屏设备上，", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-foldable-guide#section152264061715",
        children: "不同折叠状态"
      }), "下的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-term-native#%E8%AE%BE%E5%A4%87%E8%87%AA%E7%84%B6%E6%96%B9%E5%90%91",
        children: "设备自然方向"
      }), "会发生改变，导致不同折叠状态下的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-term-native#%E7%9B%B8%E6%9C%BA%E9%95%9C%E5%A4%B4%E5%AE%89%E8%A3%85%E8%A7%92%E5%BA%A6",
        children: "相机镜头安装角度"
      }), "不同。为了屏蔽不同设备间的差异，使得不同折叠状态下的相机镜头安装角度一致，系统会自动调整部分折叠状态下的相机采集图像方向（通过旋转裁切的方式）和相机镜头安装角度，因此会存在视场角（Field of View, FOV）损失，可能会导致相机预览、拍照、录像可见范围降低，因此如果需要实现相机无损出图，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_createcamerainput",
        children: "OH_CameraInput_UsePhysicalCameraOrientation"
      }), "接口来实现相机无损出图。具体方式如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设备是否支持无损出图，首先需要确认设备的相机镜头安装角度是否可变，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-input-h/capi-camera-input-h#oh_camerainput_isphysicalcameraorientationvariable",
        children: "OH_CameraInput_IsPhysicalCameraOrientationVariable"
      }), "接口查询。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当相机镜头安装角度不可变时，不同折叠状态下的相机出图均为无损出图。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当相机镜头安装角度可变时：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如应用需要实现相机无损出图，由于相机镜头安装角度与相机旋转相关，需要应用完成", (0,jsx_runtime.jsx)(_components.a, {
              href: "#top",
              children: "相机旋转的适配"
            }), "后，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-input-h/capi-camera-input-h#oh_camerainput_getphysicalcameraorientation",
              children: "OH_CameraInput_GetPhysicalCameraOrientation"
            }), "接口获取设备当前折叠状态下真实的相机镜头安装角度，并通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-input-h/capi-camera-input-h#oh_camerainput_usephysicalcameraorientation",
              children: "OH_CameraInput_UsePhysicalCameraOrientation"
            }), "接口实现相机无损出图（相机镜头安装角度不可变时使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-input-h/capi-camera-input-h#oh_camerainput_usephysicalcameraorientation",
              children: "OH_CameraInput_UsePhysicalCameraOrientation"
            }), "将会返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-arkts-errcode/errorcode-camera/errorcode-camera#section7400102-%E9%9D%9E%E6%B3%95%E6%93%8D%E4%BD%9C",
              children: "7400102"
            }), "错误码，未适配相机旋转时使用相机无损出图会导致预览、拍照、录像旋转异常），推荐在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_createcamerainput",
              children: "OH_CameraManager_CreateCameraInput"
            }), "后直接使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_createcamerainput",
              children: "OH_CameraInput_UsePhysicalCameraOrientation"
            }), "接口实现相机无损出图。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"ohcamera/camera.h\"\n#include \"ohcamera/camera_input.h\"\n#include \"hilog/log.h\"\n\nCamera_ErrorCode EnablePhysicalCameraOrientation(Camera_Input* cameraInput)\n{\n    bool isVariable = false;\n    // 查询设备的相机镜头安装角度是否可变\n    Camera_ErrorCode ret = OH_CameraInput_IsPhysicalCameraOrientationVariable(cameraInput, &isVariable);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraInput_IsPhysicalCameraOrientationVariable failed.\");\n        return ret;\n    }\n    if (!isVariable) {\n        OH_LOG_INFO(LOG_APP, \"Physical Camera Orientation is not variable.\");\n        return CAMERA_OK;\n    }\n    // 获取设备当前折叠状态下真实的相机镜头安装角度\n    uint32_t physicalOrientation = 0;\n    ret = OH_CameraInput_GetPhysicalCameraOrientation(cameraInput, &physicalOrientation);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraInput_GetPhysicalCameraOrientation failed.\");\n        return ret;\n    }\n    // 选择是否使用真实的相机镜头安装角度, 以实现无损出图\n    bool isUsed = true;\n    ret = OH_CameraInput_UsePhysicalCameraOrientation(cameraInput, isUsed);\n        if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraInput_UsePhysicalCameraOrientation failed.\");\n        return ret;\n    }\n}\n"
      })
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
518193(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438617-ff4bbeb35dfca95bc5aaaa971c39c62b.png");

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