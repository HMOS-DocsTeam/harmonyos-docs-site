"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["492092"], {
494400(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_native_native_camera_macro_native_camera_macro_md_8e3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-native-native-camera-macro-native-camera-macro-md-8e3.json
var site_docs_camera_kit_camera_dev_native_native_camera_macro_native_camera_macro_md_8e3_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-native/native-camera-macro/native-camera-macro","title":"微距能力设置(C/C++)","description":"从API version 19开始，支持设置微距能力。微距能力是指通过光学设计与算法优化，实现近距离对焦并清晰捕捉微小物体细节的相机功能。","source":"@site/docs/camera-kit/camera-dev-native/native-camera-macro/native-camera-macro.md","sourceDirName":"camera-kit/camera-dev-native/native-camera-macro","slug":"/camera-kit/camera-dev-native/native-camera-macro/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-macro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"微距能力设置(C/C++)","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-macro","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"压力管控(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-system-pressure/"},"next":{"title":"多摄同开(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-concurrent-open/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-native/native-camera-macro/native-camera-macro.md


const frontMatter = {
	title: '微距能力设置(C/C++)',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-macro',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '微距能力设置(C/C++)';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "微距能力设置cc",
        children: "微距能力设置(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 19开始，支持设置微距能力。微距能力是指通过光学设计与算法优化，实现近距离对焦并清晰捕捉微小物体细节的相机功能。"
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_ismacrosupported",
            children: "OH_CaptureSession_IsMacroSupported()"
          }), "方法，检测当前设备是否支持微距能力。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool NDKCamera::IsMacroSupported(Camera_CaptureSession* captureSession)\n{\n    // 判断设备是否支持微距能力。\n    bool isMacroSupported = false;\n    if (captureSession == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"IsMacroSupported: session is nullptr.\");\n        return isMacroSupported;\n    }\n    Camera_ErrorCode ret = OH_CaptureSession_IsMacroSupported(captureSession, &isMacroSupported);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_IsMacroSupported failed.\");\n    }\n    if (isMacroSupported) {\n        OH_LOG_INFO(LOG_APP, \"support macro capability.\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"No support macro capability.\");\n    }\n    return isMacroSupported;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_enablemacro",
            children: "OH_CaptureSession_EnableMacro()"
          }), "方法开启或关闭微距能力。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void NDKCamera::EnableMacro(bool isMacro)\n{\n    OH_LOG_INFO(LOG_APP, \"EnableMacro: isMacro is %{public}d\", isMacro);\n    if (IsMacroSupported(captureSession_)) {\n        Camera_ErrorCode ret = OH_CaptureSession_EnableMacro(captureSession_, isMacro);\n        if (ret != CAMERA_OK) {\n            OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_EnableMacro failed.\");\n        }\n    }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态监听",
      children: "状态监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持监听微距能力是否发生改变。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-headerfile/capi-capture-session-h/capi-capture-session-h#oh_capturesession_registermacrostatuschangecallback",
        children: "OH_CaptureSession_RegisterMacroStatusChangeCallback()"
      }), "函数注册回调，返回监听结果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void MacroStatusCallback(Camera_CaptureSession *captureSession, bool isMacroDetected)\n{\n    OH_LOG_INFO(LOG_APP, \"MacroStatusCallback isMacro: %{public}d\", isMacroDetected);\n}\n\n// 注册回调函数。\nCamera_ErrorCode NDKCamera::RegisterMacroStatusCallback()\n{\n    Camera_ErrorCode ret = OH_CaptureSession_RegisterMacroStatusChangeCallback(captureSession_, MacroStatusCallback);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_RegisterMacroStatusChangeCallback failed.\");\n    }\n    return ret;\n}\n\n// 解注册\nCamera_ErrorCode NDKCamera::UnregisterMacroStatusCallback()\n{\n    Camera_ErrorCode ret = OH_CaptureSession_UnregisterMacroStatusChangeCallback(captureSession_, MacroStatusCallback);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CaptureSession_UnregisterMacroStatusChangeCallback failed.\");\n    }\n    return ret;\n}\n"
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