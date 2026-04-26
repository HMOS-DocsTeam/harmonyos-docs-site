"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["144750"], {
41905(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_native_native_camera_recording_native_camera_recording_md_119_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-native-native-camera-recording-native-camera-recording-md-119.json
var site_docs_camera_kit_camera_dev_native_native_camera_recording_native_camera_recording_md_119_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-native/native-camera-recording/native-camera-recording","title":"录像(C/C++)","description":"录像也是相机应用的最重要功能之一，录像是循环帧的捕获。对于录像的流畅度，开发者可以参考拍照参考中的步骤5，设置分辨率、闪光灯、焦距、照片质量及旋转角度等信息。","source":"@site/docs/camera-kit/camera-dev-native/native-camera-recording/native-camera-recording.md","sourceDirName":"camera-kit/camera-dev-native/native-camera-recording","slug":"/camera-kit/camera-dev-native/native-camera-recording/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-recording/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"录像(C/C++)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-recording","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"分段式拍照(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-deferred-capture/"},"next":{"title":"录像实践(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-recording-case/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-native/native-camera-recording/native-camera-recording.md


const frontMatter = {
	title: '录像(C/C++)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-recording',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '录像(C/C++)';

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
        id: "录像cc",
        children: "录像(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["录像也是相机应用的最重要功能之一，录像是循环帧的捕获。对于录像的流畅度，开发者可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-dev-native/native-camera-shooting",
        children: "拍照参考"
      }), "中的步骤5，设置分辨率、闪光灯、焦距、照片质量及旋转角度等信息。"]
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
          children: ["系统提供的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-h/capi-avrecorder-h#oh_avrecorder_create",
            children: "OH_AVRecorder_Create()"
          }), "接口可以创建一个录像AVRecorder实例，通过该实例的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/media-api/media-c/media-headerfile/capi-avrecorder-h/capi-avrecorder-h#oh_avrecorder_getinputsurface",
            children: "OH_AVRecorder_GetInputSurface()"
          }), "方法获取SurfaceId。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建录像输出流。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据传入的SurfaceId，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_getsupportedcameraoutputcapability",
            children: "OH_CameraManager_GetSupportedCameraOutputCapability"
          }), "接口获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-outputcapability/capi-oh-camera-camera-outputcapability",
            children: "Camera_OutputCapability"
          }), "能力，可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-outputcapability/capi-oh-camera-camera-outputcapability",
            children: "Camera_OutputCapability"
          }), "中的videoProfiles，获取当前设备支持的录像输出流。然后，定义创建录像的参数，通过OH_CameraManager_CreateVideoOutput方法创建录像输出流。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(209038)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "预览流与录像输出流的分辨率的宽高比要保持一致。如示例代码中宽高比为640:480 = 4:3，则需要预览流中的分辨率的宽高比也为4:3，可选择的分辨率有：640:480、960:720、1440:1080等。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在设置预览输出流的分辨率宽高前，需要先通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/media-api/media-c/media-struct/capi-avrecorder-oh-avrecorder-profile/capi-avrecorder-oh-avrecorder-profile",
              children: "OH_AVRecorder_Profile"
            }), "查询视频帧支持可配置的宽高范围。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode NDKCamera::CreateVideoOutput(char *videoId)\n{\n    if (videoProfile_ == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"Get videoProfiles failed.\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n    ret_ = OH_CameraManager_CreateVideoOutput(cameraManager_, videoProfile_, videoId, &videoOutput_);\n    OH_LOG_ERROR(LOG_APP, \" create video width: %{public}d, height: %{public}d, format: %{public}d\",\n        videoProfile_->size.width, videoProfile_->size.height, videoProfile_->format);\n    if (videoId == nullptr || videoOutput_ == nullptr || ret_ != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"CreateVideoOutput failed.\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n    VideoOutputRegisterCallback();\n    return ret_;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开始录像。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-video-output-h/capi-video-output-h#oh_videooutput_start",
            children: "OH_VideoOutput_Start()"
          }), "方法启动录像输出流。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode NDKCamera::VideoOutputStart(void)\n{\n    OH_LOG_INFO(LOG_APP, \"VideoOutputStart begin.\");\n    Camera_ErrorCode ret = OH_VideoOutput_Start(videoOutput_);\n    if (ret == CAMERA_OK) {\n        OH_LOG_INFO(LOG_APP, \"OH_VideoOutput_Start success.\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"OH_VideoOutput_Start failed. %d \", ret);\n    }\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止录像。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-video-output-h/capi-video-output-h#oh_videooutput_stop",
            children: "OH_VideoOutput_Stop()"
          }), "方法停止录像输出流。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode NDKCamera::VideoOutputStop(void)\n{\n    OH_LOG_ERROR(LOG_APP, \"enter VideoOutputStop.\");\n    ret_ = OH_VideoOutput_Stop(videoOutput_);\n    if (ret_ != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"VideoOutputStop failed.\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n    return ret_;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态监听",
      children: "状态监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在相机应用开发过程中，可以随时监听录像输出流状态，包括录像开始、录像结束、录像流输出的错误。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过注册固定的frameStart回调函数获取监听录像开始结果，videoOutput创建成功时即可监听，录像第一次曝光时触发，当触发该事件回调时表示录像已开始。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void VideoOutputOnFrameStart(Camera_VideoOutput *videoOutput)\n{\n    OH_LOG_INFO(LOG_APP, \"VideoOutputOnFrameStart\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过注册固定的frameEnd回调函数获取监听录像结束结果，videoOutput创建成功时即可监听，录像完成最后一帧时触发，有该事件返回结果则认为录像流已结束。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void VideoOutputOnFrameEnd(Camera_VideoOutput *videoOutput, int32_t frameCount)\n{\n    OH_LOG_INFO(LOG_APP, \"VideoOutput frameCount = %{public}d\", frameCount);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过注册固定的error回调函数获取监听录像输出错误结果，callback返回录像输出接口使用错误时对应的错误码，错误码类型参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_errorcode",
            children: "Camera_ErrorCode"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void VideoOutputOnError(Camera_VideoOutput *videoOutput, Camera_ErrorCode errorCode)\n{\n    OH_LOG_INFO(LOG_APP, \"VideoOutput errorCode = %{public}d\", errorCode);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "VideoOutput_Callbacks *NDKCamera::GetVideoOutputListener(void)\n{\n    static VideoOutput_Callbacks videoOutputListener = {\n        .onFrameStart = VideoOutputOnFrameStart,\n        .onFrameEnd = VideoOutputOnFrameEnd,\n        .onError = VideoOutputOnError\n    };\n    return &videoOutputListener;\n}\n\nCamera_ErrorCode NDKCamera::VideoOutputRegisterCallback(void)\n{\n    ret_ = OH_VideoOutput_RegisterCallback(videoOutput_, GetVideoOutputListener());\n    if (ret_ != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_VideoOutput_RegisterCallback failed.\");\n    }\n    return ret_;\n}\n"
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
209038(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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