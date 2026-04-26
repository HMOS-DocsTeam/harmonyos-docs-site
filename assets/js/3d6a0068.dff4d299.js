"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["539928"], {
128379(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_mandatory_camera_device_management_camera_device_management_md_3d6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-mandatory-camera-device-management-camera-device-management-md-3d6.json
var site_docs_camera_kit_camera_dev_arkts_mandatory_camera_device_management_camera_device_management_md_3d6_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts-mandatory/camera-device-management/camera-device-management","title":"相机管理(ArkTS)","description":"在开发一个相机应用前，需要先通过调用相机接口来创建一个相机管理实例。","source":"@site/docs/camera-kit/camera-dev-arkts-mandatory/camera-device-management/camera-device-management.md","sourceDirName":"camera-kit/camera-dev-arkts-mandatory/camera-device-management","slug":"/camera-kit/camera-dev-arkts-mandatory/camera-device-management/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts-mandatory/camera-device-management/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"相机管理(ArkTS)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-device-management","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"申请相机开发的权限","permalink":"/harmonyos-docs-site/camera-kit/camera-preparation/"},"next":{"title":"设备输入(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts-mandatory/camera-device-input/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts-mandatory/camera-device-management/camera-device-management.md


const frontMatter = {
	title: '相机管理(ArkTS)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-device-management',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '相机管理(ArkTS)';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "相机管理arkts",
        children: "相机管理(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发一个相机应用前，需要先通过调用相机接口来创建一个相机管理实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的API说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera/arkts-apis-camera",
        children: "@ohos.multimedia.camera (相机管理)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入camera接口，接口中提供了相机相关的属性和方法，导入方法如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { camera } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-f/arkts-apis-camera-f#cameragetcameramanager",
            children: "getCameraManager"
          }), "方法，获取cameraManager对象。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Context获取方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
            children: "获取UIAbility的上下文信息"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getCameraManager(context: common.BaseContext): camera.CameraManager | undefined {\n  let cameraManager: camera.CameraManager;\n  try {\n    cameraManager = camera.getCameraManager(context);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`getCameraManager error, errCode: ${err.code}`);\n    return undefined;\n  }\n  return cameraManager;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(756380)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果获取对象失败，说明相机可能被占用或无法使用。如果被占用，须等到相机被释放后才能重新获取。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager",
            children: "CameraManager"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#getsupportedcameras",
            children: "getSupportedCameras"
          }), "方法，获取当前设备支持的相机列表，列表中存储了设备支持的所有相机ID。若列表不为空，则说明列表中的每个ID都支持独立创建相机对象；否则，说明当前设备无可用相机，无法进行后续操作。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getCameraDevices(cameraManager: camera.CameraManager): Array<camera.CameraDevice> {\n  let cameraArray: Array<camera.CameraDevice> = cameraManager.getSupportedCameras();\n  if (cameraArray != undefined && cameraArray.length > 0) {\n    for (let index = 0; index < cameraArray.length; index++) {\n      console.info('cameraId : ' + cameraArray[index].cameraId);  // 获取相机ID。\n      console.info('cameraPosition : ' + cameraArray[index].cameraPosition);  // 获取相机位置。\n      console.info('cameraType : ' + cameraArray[index].cameraType);  // 获取相机类型。\n      console.info('connectionType : ' + cameraArray[index].connectionType);  // 获取相机连接类型。\n    }\n    return cameraArray;\n  } else {\n    console.error(\"cameraManager.getSupportedCameras error\");\n    return [];\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态监听",
      children: "状态监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在相机应用开发过程中，可以随时监听相机状态，包括新相机的出现、相机的移除、相机的可用状态。在回调函数中，通过相机ID、相机状态这两个参数进行监听，如当有新相机出现时，可以将新相机加入到应用的备用相机中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过注册cameraStatus事件，通过回调返回监听结果，callback返回CameraStatusInfo参数，参数的具体内容可参考相机管理器回调接口实例", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#camerastatusinfo",
        children: "CameraStatusInfo"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function onCameraStatusChange(cameraManager: camera.CameraManager): void {\n  cameraManager.on('cameraStatus', (err: BusinessError, cameraStatusInfo: camera.CameraStatusInfo) => {\n    if (err !== undefined && err.code !== 0) {\n      console.error(`Callback Error, errorCode: ${err.code}`);\n      return;\n    }\n    // 如果当通过USB连接相机设备时，回调函数会返回新的相机出现状态。\n    if (cameraStatusInfo.status == camera.CameraStatus.CAMERA_STATUS_APPEAR) {\n      console.info(`New Camera device appear.`);\n    }\n    // 如果当断开相机设备USB连接时，回调函数会返回相机被移除状态。\n    if (cameraStatusInfo.status == camera.CameraStatus.CAMERA_STATUS_DISAPPEAR) {\n      console.info(`Camera device has been removed.`);\n    }\n    // 相机被关闭时，回调函数会返回相机可用状态。\n    if (cameraStatusInfo.status == camera.CameraStatus.CAMERA_STATUS_AVAILABLE) {\n      console.info(`Current Camera is available.`);\n    }\n    // 相机被打开/占用时，回调函数会返回相机不可用状态。\n    if (cameraStatusInfo.status == camera.CameraStatus.CAMERA_STATUS_UNAVAILABLE) {\n      console.info(`Current Camera has been occupied.`);\n    }\n    console.info(`camera: ${cameraStatusInfo.camera.cameraId}`);\n    console.info(`status: ${cameraStatusInfo.status}`);\n  });\n}\n"
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
756380(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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