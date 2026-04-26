"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["219358"], {
874142(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_native_camera_focus_native_camera_focus_native_md_0e2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-native-camera-focus-native-camera-focus-native-md-0e2.json
var site_docs_camera_kit_camera_dev_native_camera_focus_native_camera_focus_native_md_0e2_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-native/camera-focus-native/camera-focus-native","title":"对焦(C/C++)","description":"相机框架提供对设备对焦的能力，业务应用可以根据使用场景进行对焦模式和对焦点的设置。","source":"@site/docs/camera-kit/camera-dev-native/camera-focus-native/camera-focus-native.md","sourceDirName":"camera-kit/camera-dev-native/camera-focus-native","slug":"/camera-kit/camera-dev-native/camera-focus-native/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/camera-focus-native/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"对焦(C/C++)","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-focus-native","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"多摄同开(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-concurrent-open/"},"next":{"title":"适配相机旋转角度(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/camera-rotation-native/camera-rotation-angle-adaptation-native/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-native/camera-focus-native/camera-focus-native.md


const frontMatter = {
	title: '对焦(C/C++)',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-focus-native',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '对焦(C/C++)';

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
        id: "对焦cc",
        children: "对焦(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机框架提供对设备对焦的能力，业务应用可以根据使用场景进行对焦模式和对焦点的设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h",
        children: "Camera API参考"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入NDK接口，导入方法如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入NDK接口头文件\n#include \"hilog/log.h\"\n#include \"ohcamera/camera.h\"\n#include \"ohcamera/camera_input.h\"\n#include \"ohcamera/capture_session.h\"\n#include \"ohcamera/photo_output.h\"\n#include \"ohcamera/preview_output.h\"\n#include \"ohcamera/video_output.h\"\n#include \"ohcamera/camera_manager.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在CMake脚本中链接相关动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC libohcamera.so libhilog_ndk.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_setfocusmode",
            children: "OH_CaptureSession_SetFocusMode"
          }), "设置对焦模式。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(595231)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["需要先调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_isfocusmodesupported",
              children: "OH_CaptureSession_IsFocusModeSupported"
            }), "检查设备是否支持指定的焦距模式。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["需要在Session调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_commitconfig",
              children: "OH_CaptureSession_CommitConfig"
            }), "完成配流之后调用。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode SetFocusMode(Camera_CaptureSession *captureSession, uint32_t mode)\n{\n    bool isFocusModeSupported = false;\n    Camera_FocusMode focusMode = static_cast<Camera_FocusMode>(mode);\n    Camera_ErrorCode ret = OH_CaptureSession_IsFocusModeSupported(captureSession, focusMode, &isFocusModeSupported);\n    if (&isFocusModeSupported == nullptr || ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"IsFocusModeSupported failed.\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n\n    if (!isFocusModeSupported) {\n        OH_LOG_INFO(LOG_APP, \"current focusMode(%{public}d) is not supported.\", focusMode);\n        return CAMERA_OK;\n    }\n\n    OH_LOG_INFO(LOG_APP, \"OH_CaptureSession_SetFocusMode focusMode(%{public}d).\", focusMode);\n    ret = OH_CaptureSession_SetFocusMode(captureSession, focusMode);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"SetFocusMode failed.\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_setfocusmode",
            children: "OH_CaptureSession_SetFocusMode"
          }), "设置对焦模式为自动对焦模式，支持调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_setfocuspoint",
            children: "OH_CaptureSession_SetFocusPoint"
          }), "设置对焦点，根据对焦点执行一次自动对焦。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(319767)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["需要在Session调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_commitconfig",
            children: "OH_CaptureSession_CommitConfig"
          }), "完成配流之后调用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode SetFocusPoint(Camera_CaptureSession *captureSession, float x, float y)\n{\n    Camera_Point focusPoint;\n    focusPoint.x = x;\n    focusPoint.y = y;\n    Camera_ErrorCode ret = OH_CaptureSession_SetFocusPoint(captureSession, focusPoint);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"SetFocusPoint failed.\");\n        return CAMERA_INVALID_ARGUMENT;\n    }\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态监听",
      children: "状态监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在相机应用开发过程中，可以随时监听相机聚焦的状态变化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过注册", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_onfocusstatechange",
        children: "OnFocusStateChange"
      }), "的回调函数获取监听结果，仅当自动对焦模式时，且相机对焦状态发生改变时触发该事件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void CaptureSessionOnFocusStateChange(Camera_CaptureSession* captureSession, Camera_FocusState focusState)\n    {\n        OH_LOG_INFO(LOG_APP, \"CaptureSession_Callbacks CaptureSessionOnFocusStateChange\");\n        OH_LOG_INFO(LOG_APP, \"CaptureSession focusState = %{public}d\", focusState);\n        // 为保证对焦功能的用户体验，在自动对焦成功后，可将对焦模式设置为连续自动对焦\n        if (focusState == Camera_FocusState::FOCUS_STATE_FOCUSED) {\n            Camera_ErrorCode ret = SetFocusMode(captureSession, Camera_FocusMode::FOCUS_MODE_CONTINUOUS_AUTO);\n        }\n    }\n\n    void CaptureSessionOnError(Camera_CaptureSession* captureSession, Camera_ErrorCode errorCode)\n    {\n        OH_LOG_INFO(LOG_APP, \"CaptureSession_Callbacks CaptureSessionOnError\");\n        OH_LOG_INFO(LOG_APP, \"CaptureSession errorCode = %{public}d\", errorCode);\n    }\n\n    CaptureSession_Callbacks* GetCaptureSessionRegister(void)\n    {\n        static CaptureSession_Callbacks captureSessionCallbacks = {\n            .onFocusStateChange = CaptureSessionOnFocusStateChange,\n            .onError = CaptureSessionOnError\n        };\n        return &captureSessionCallbacks;\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Camera_ErrorCode RegisterCallback(Camera_CaptureSession* captureSession)\n{\n    Camera_ErrorCode ret = OH_CaptureSession_RegisterCallback(captureSession, GetCaptureSessionRegister());\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_RegisterCallback failed.\");\n    }\n    return ret;\n}\n"
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
595231(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
319767(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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