"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["498888"], {
661545(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_native_mandatory_native_camera_session_management_native_camera_session_management_md_f64_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-native-mandatory-native-camera-session-management-native-camera-session-management-md-f64.json
var site_docs_camera_kit_camera_dev_native_mandatory_native_camera_session_management_native_camera_session_management_md_f64_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-native-mandatory/native-camera-session-management/native-camera-session-management","title":"会话管理(C/C++)","description":"相机使用预览、拍照、录像、元数据功能前，均需要创建相机会话。","source":"@site/docs/camera-kit/camera-dev-native-mandatory/native-camera-session-management/native-camera-session-management.md","sourceDirName":"camera-kit/camera-dev-native-mandatory/native-camera-session-management","slug":"/camera-kit/camera-dev-native-mandatory/native-camera-session-management/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native-mandatory/native-camera-session-management/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"会话管理(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-session-management","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设备输入(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native-mandatory/native-camera-device-input/"},"next":{"title":"预览(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-preview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-native-mandatory/native-camera-session-management/native-camera-session-management.md


const frontMatter = {
	title: '会话管理(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-session-management',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '会话管理(C/C++)';

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
        id: "会话管理cc",
        children: "会话管理(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机使用预览、拍照、录像、元数据功能前，均需要创建相机会话。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在会话中，可以完成以下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置相机的输入流和输出流。相机在拍摄前，必须完成输入输出流的配置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置输入流即添加设备输入，对用户而言，相当于选择设备的某一相机拍摄；配置输出流，即选择数据将以什么形式输出。当应用需要实现拍照时，输出流应配置为预览流和拍照流，预览流的数据将显示在XComponent组件上，拍照流的数据将通过ImageReceiver接口的能力保存到相册中。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["添加闪光灯、调整焦距等配置。具体支持的配置及接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-module/capi-oh-camera/capi-oh-camera",
            children: "OH_Camera"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "会话切换控制。应用可以通过移除和添加输出流的方式，切换相机模式。如当前会话的输出流为拍照流，应用可以将拍照流移除，然后添加视频流作为输出流，即完成了拍照到录像的切换。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完成会话配置后，应用提交和开启会话，可以开始调用相机相关功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入NDK相关接口，导入方法如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"hilog/log.h\"\n#include \"ohcamera/camera.h\"\n#include \"ohcamera/camera_input.h\"\n#include \"ohcamera/capture_session.h\"\n#include \"ohcamera/photo_output.h\"\n#include \"ohcamera/preview_output.h\"\n#include \"ohcamera/video_output.h\"\n#include \"ohcamera/camera_manager.h\"\n"
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
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_createcapturesession",
            children: "OH_CameraManager_CreateCaptureSession()"
          }), "方法创建一个会话。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_CaptureSession* CreateCaptureSession(Camera_Manager* cameraManager)\n{\n    Camera_CaptureSession* captureSession = nullptr;\n    if (cameraManager == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"cameraManager is nullptr.\");\n        return captureSession;\n    }\n    Camera_ErrorCode ret = OH_CameraManager_CreateCaptureSession(cameraManager, &captureSession);\n    if (captureSession == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_CreateCaptureSession failed.\");\n    }\n    return captureSession;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_setsessionmode",
            children: "OH_CaptureSession_SetSessionMode()"
          }), "方法配置会话模式。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode SetSessionMode(Camera_CaptureSession* captureSession)\n{\n    Camera_ErrorCode ret = OH_CaptureSession_SetSessionMode(captureSession, NORMAL_VIDEO);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_SetSessionMode failed.\");\n    }\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_beginconfig",
            children: "OH_CaptureSession_BeginConfig()"
          }), "方法配置会话。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode BeginConfig(Camera_CaptureSession* captureSession)\n{\n    Camera_ErrorCode ret = OH_CaptureSession_BeginConfig(captureSession);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_BeginConfig failed.\");\n    }\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使能。向会话中添加相机的输入流和输出流，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_addinput",
            children: "OH_CaptureSession_AddInput()"
          }), "添加相机的输入流；调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_addpreviewoutput",
            children: "OH_CaptureSession_AddPreviewOutput()"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_addphotooutput",
            children: "OH_CaptureSession_AddPhotoOutput()"
          }), "添加相机的输出流。以下示例代码以添加预览流previewOutput和拍照流photoOutput为例，即当前模式支持拍照和预览。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_commitconfig",
            children: "OH_CaptureSession_CommitConfig()"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_start",
            children: "OH_CaptureSession_Start()"
          }), "方法提交相关配置，并启动会话。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode StartSession(Camera_CaptureSession* captureSession, Camera_Input* cameraInput,\n    Camera_PreviewOutput* previewOutput, Camera_PhotoOutput* photoOutput)\n{\n    // 向会话中添加相机输入流。\n    Camera_ErrorCode ret = OH_CaptureSession_AddInput(captureSession, cameraInput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddInput failed.\");\n        return ret;\n    }\n\n    // 向会话中添加预览输出流。\n    ret = OH_CaptureSession_AddPreviewOutput(captureSession, previewOutput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddPreviewOutput failed.\");\n        return ret;\n    }\n\n    // 向会话中添加拍照输出流。\n    ret = OH_CaptureSession_AddPhotoOutput(captureSession, photoOutput);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddPhotoOutput failed.\");\n        return ret;\n    }\n\n    // 提交会话配置。\n    ret = OH_CaptureSession_CommitConfig(captureSession);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_CommitConfig failed.\");\n        return ret;\n    }\n\n    // 启动会话。\n    ret = OH_CaptureSession_Start(captureSession);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_Start failed.\");\n    }\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["会话控制。调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_stop",
            children: "OH_CaptureSession_Stop()"
          }), "方法可以停止当前会话。调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_removephotooutput",
            children: "OH_CaptureSession_RemovePhotoOutput()"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_addvideooutput",
            children: "OH_CaptureSession_AddVideoOutput()"
          }), "方法可以完成会话切换控制。以下示例代码以移除拍照流photoOutput，添加视频流videoOutput为例，完成了拍照到录像的切换。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode ReloadSession(Camera_CaptureSession* captureSession, Camera_PhotoOutput* photoOutput,\n    Camera_VideoOutput* videoOutput)\n{\n    Camera_ErrorCode ret = OH_CaptureSession_Stop(captureSession);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_Stop success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_Stop failed. %d \", ret);\n    }\n    ret = OH_CaptureSession_BeginConfig(captureSession);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_BeginConfig failed.\");\n        return ret;\n    }\n    // 从会话中移除拍照输出流。\n    ret = OH_CaptureSession_RemovePhotoOutput(captureSession, photoOutput);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_RemovePhotoOutput success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_RemovePhotoOutput failed. %d \", ret);\n    }\n    // 释放photoOutput。\n    ret = OH_PhotoOutput_Release(photoOutput);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_PhotoOutput_Release success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_PhotoOutput_Release failed. %d \", ret);\n    }\n    // 向会话中添加视频输出流。\n    ret = OH_CaptureSession_AddVideoOutput(captureSession, videoOutput);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_AddVideoOutput success \");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_AddVideoOutput failed. %d \", ret);\n        return ret;\n    }\n    // 提交会话配置。\n    ret = OH_CaptureSession_CommitConfig(captureSession);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_CommitConfig failed.\");\n        return ret;\n    }\n\n    // 启动会话。\n    ret = OH_CaptureSession_Start(captureSession);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_Start failed.\");\n    }\n    return ret;\n}\n"
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