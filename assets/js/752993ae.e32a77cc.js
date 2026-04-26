"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["729979"], {
294127(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_native_native_camera_torch_use_native_camera_torch_use_md_752_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-native-native-camera-torch-use-native-camera-torch-use-md-752.json
var site_docs_camera_kit_camera_dev_native_native_camera_torch_use_native_camera_torch_use_md_752_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-native/native-camera-torch-use/native-camera-torch-use","title":"手电筒使用(C++)","description":"通过操作设备启用手电筒功能，可使设备的手电筒保持常亮状态。","source":"@site/docs/camera-kit/camera-dev-native/native-camera-torch-use/native-camera-torch-use.md","sourceDirName":"camera-kit/camera-dev-native/native-camera-torch-use","slug":"/camera-kit/camera-dev-native/native-camera-torch-use/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-torch-use/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"手电筒使用(C++)","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-torch-use","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"元数据(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-metadata/"},"next":{"title":"压力管控(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-system-pressure/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-native/native-camera-torch-use/native-camera-torch-use.md


const frontMatter = {
	title: '手电筒使用(C++)',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-torch-use',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '手电筒使用(C++)';

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
        id: "手电筒使用c",
        children: "手电筒使用(C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过操作设备启用手电筒功能，可使设备的手电筒保持常亮状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用相机应用并操作手电筒功能时，存在以下几种情况说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当使用后置相机并设置闪光灯模式", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-h/capi-camera-h#camera_flashmode",
          children: "Camera_FlashMode"
        }), "关闭时，手电筒功能无法启用。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当使用前置相机时，手电筒可以正常启用并保持常亮状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从前置相机切换至后置相机时，如果手电筒原本处于开启状态，它将会被自动关闭。"
      }), "\n"]
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
            children: "// 导入NDK接口头文件。\n#include \"hilog/log.h\"\n#include \"ohcamera/camera.h\"\n#include \"ohcamera/camera_input.h\"\n#include \"ohcamera/capture_session.h\"\n#include \"ohcamera/camera_manager.h\"\n"
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
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_istorchsupported",
            children: "OH_CameraManager_IsTorchSupported()"
          }), "方法，检测当前设备是否支持手电筒。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool IsTorchSupported(Camera_Manager* cameraManager)\n{\n    // 判断设备是否支持手电筒模式。\n    bool isTorchSupported = false;\n    if (cameraManager == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"cameraManager is nullptr.\");\n        return isTorchSupported;\n    }\n    Camera_ErrorCode ret = OH_CameraManager_IsTorchSupported(cameraManager, &isTorchSupported);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_IsTorchSupported failed.\");\n    }\n    if (isTorchSupported) {\n        OH_LOG_INFO(LOG_APP, \"isTorchSupported success.\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"isTorchSupported failed.\");\n    }\n    return isTorchSupported;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_istorchsupportedbytorchmode",
            children: "OH_CameraManager_IsTorchSupportedByTorchMode()"
          }), "方法，检测当前设备是否支持指定的手电筒模式。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "bool IsTorchSupportedByTorchMode(Camera_Manager* cameraManager, Camera_TorchMode torchMode)\n{\n    bool torchModeSupported = false;\n    Camera_ErrorCode ret = OH_CameraManager_IsTorchSupportedByTorchMode(cameraManager, torchMode, &torchModeSupported);\n    if (ret != CAMERA_OK) {\n         OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_IsTorchSupported failed.\");\n    }\n    if (torchModeSupported) {\n         OH_LOG_INFO(LOG_APP, \"isTorchModeSupported success.\");\n    } else {\n         OH_LOG_ERROR(LOG_APP, \"isTorchModeSupported failed. %{public}d \", ret);\n    }\n    return torchModeSupported;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-c/camera-headerfile/capi-camera-manager-h/capi-camera-manager-h#oh_cameramanager_settorchmode",
            children: "OH_CameraManager_SetTorchMode()"
          }), "方法，设置当前设备的手电筒模式。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Camera_ErrorCode SetTorchMode(Camera_Manager* cameraManager, Camera_TorchMode torchMode)\n{\n    // 在torchMode支持的情况下进行设置手电筒模式。\n    Camera_ErrorCode ret = OH_CameraManager_SetTorchMode(cameraManager, torchMode);\n    if (ret != CAMERA_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_SetTorchMode failed. %{public}d \", ret);\n    } else {\n        OH_LOG_INFO(LOG_APP, \"OH_CameraManager_SetTorchMode success.\");\n    }\n    return ret;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态监听",
      children: "状态监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在相机应用开发过程中，可以随时监听手电筒状态，包括手电筒打开、手电筒关闭、手电筒不可用、手电筒恢复可用。手电筒状态发生变化，可通过回调函数获取状态的变化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["注册torchStatus事件，回调会返回监听结果，callback返回Camera_TorchStatusInfo参数，参数的具体内容可参考相机管理器回调接口实例", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-c/camera-struct/capi-oh-camera-camera-torchstatusinfo/capi-oh-camera-camera-torchstatusinfo",
        children: "Camera_TorchStatusInfo"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void TorchStatusCallback(Camera_Manager *cameraManager, Camera_TorchStatusInfo* torchStatus)\n{\n   OH_LOG_INFO(LOG_APP, \"TorchStatusCallback is called.\");\n}\nCamera_ErrorCode RegisterTorchStatusCallback(Camera_Manager *cameraManager)\n{\n    Camera_ErrorCode ret = OH_CameraManager_RegisterTorchStatusCallback(cameraManager, TorchStatusCallback);\n    if (ret != CAMERA_OK) {\n       OH_LOG_ERROR(LOG_APP, \"OH_CameraManager_RegisterTorchStatusCallback failed.\");\n    }\n    return ret;\n}\n"
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