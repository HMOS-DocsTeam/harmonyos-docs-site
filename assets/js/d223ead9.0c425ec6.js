"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["734392"], {
996653(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_camera_metadata_camera_metadata_md_d22_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-camera-metadata-camera-metadata-md-d22.json
var site_docs_camera_kit_camera_dev_arkts_camera_metadata_camera_metadata_md_d22_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts/camera-metadata/camera-metadata","title":"元数据(ArkTS)","description":"在开发相机应用时，需要先申请相关权限。","source":"@site/docs/camera-kit/camera-dev-arkts/camera-metadata/camera-metadata.md","sourceDirName":"camera-kit/camera-dev-arkts/camera-metadata","slug":"/camera-kit/camera-dev-arkts/camera-metadata/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-metadata/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"元数据(ArkTS)","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-metadata","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"录像实践(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-recording-case/"},"next":{"title":"手电筒使用(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-torch-use/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts/camera-metadata/camera-metadata.md


const frontMatter = {
	title: '元数据(ArkTS)',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-metadata',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '元数据(ArkTS)';

const assets = {

};



const toc = [{
  "value": "适用场景",
  "id": "适用场景",
  "level": 2
}, {
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
        id: "元数据arkts",
        children: "元数据(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发相机应用时，需要先", (0,jsx_runtime.jsx)(_components.a, {
        href: "/camera-kit/camera-preparation",
        children: "申请相关权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "元数据（Metadata）是对相机返回的图像信息的描述和上下文。针对图像信息，提供更详细的数据，如照片或视频中，识别人像的取景框坐标的信息等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Metadata主要是通过一个TAG（Key），去找对应的Data，用于传递参数和配置信息，减少内存拷贝操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用场景",
      children: "适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检测图片中的人脸，返回高精度的人脸矩形框坐标。应用可基于人脸定位结果，灵活集成后处理算法，将其应用于多样化场景。"
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
          children: "导入相关接口，导入方法如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { camera } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-i/arkts-apis-camera-i#cameraoutputcapability",
            children: "CameraOutputCapability"
          }), "中的supportedMetadataObjectTypes属性，获取当前设备支持的元数据类型，并通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#createmetadataoutput",
            children: "createMetadataOutput"
          }), "方法创建元数据输出流。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getMetadataOutput(cameraManager: camera.CameraManager, cameraOutputCapability: camera.CameraOutputCapability): camera.MetadataOutput | undefined {\n  let metadataObjectTypes: Array<camera.MetadataObjectType> = cameraOutputCapability.supportedMetadataObjectTypes;\n  let metadataOutput: camera.MetadataOutput | undefined = undefined;\n  try {\n    metadataOutput = cameraManager.createMetadataOutput(metadataObjectTypes);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to createMetadataOutput, error code: ${err.code}`);\n  }\n  return metadataOutput;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#start11",
            children: "Session.start"
          }), "方法开启metadata数据输出，再通过监听事件metadataObjectsAvailable回调拿到数据，接口调用失败时，会返回相应错误码，错误码类型参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#cameraerrorcode",
            children: "CameraErrorCode"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["previewOutput获取方式请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts/camera-preview#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
            children: "相机预览开发步骤"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function startMetadataOutput(previewOutput: camera.PreviewOutput, metadataOutput: camera.MetadataOutput, cameraManager: camera.CameraManager): Promise<void> {\n  let cameraArray: Array<camera.CameraDevice> = [];\n  try {\n    cameraArray = cameraManager.getSupportedCameras();\n    if (cameraArray.length == 0) {\n      console.error('no camera.');\n      return;\n    }\n    // 示例代码默认选择第一个镜头，实际开发需根据所需镜头。\n    const cameraDevice: camera.CameraDevice = cameraArray[0];\n    // 获取支持的模式类型。\n    let sceneModes: Array<camera.SceneMode> = cameraManager.getSupportedSceneModes(cameraDevice);\n    let isSupportPhotoMode: boolean = sceneModes.indexOf(camera.SceneMode.NORMAL_PHOTO) >= 0;\n    if (!isSupportPhotoMode) {\n      console.error('photo mode not support');\n      return;\n    }\n    let cameraInput: camera.CameraInput | undefined = undefined;\n    cameraInput = cameraManager.createCameraInput(cameraDevice);\n    if (cameraInput === undefined) {\n      console.error('cameraInput is undefined');\n      return;\n    }\n    // 打开相机。\n    await cameraInput.open();\n    let session = cameraManager.createSession(camera.SceneMode.NORMAL_PHOTO);\n    if (!session) {\n      console.error('session is null');\n      return;\n    }\n    let photoSession: camera.PhotoSession = session as camera.PhotoSession;\n    photoSession.beginConfig();\n    photoSession.addInput(cameraInput);\n    photoSession.addOutput(previewOutput);\n    photoSession.addOutput(metadataOutput);\n    await photoSession.commitConfig();\n    await photoSession.start();\n  } catch (error) {\n    console.error('startMetadataOutput call failed');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#stop11",
            children: "Session.stop"
          }), "方法停止输出metadata数据，接口调用失败会返回相应错误码，错误码类型参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#cameraerrorcode",
            children: "CameraErrorCode"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function stopMetadataOutput(session: camera.Session): void {\n  session.stop().then(() => {\n    console.info('Callback returned with session stopped.');\n  }).catch((err: BusinessError) => {\n    console.error(`Failed to session stop, error code: ${err.code}`);\n  });\n}\n"
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
            children: "function onMetadataObjectsAvailable(metadataOutput: camera.MetadataOutput): void {\n  metadataOutput.on('metadataObjectsAvailable', (err: BusinessError, metadataObjectArr: Array<camera.MetadataObject>) => {\n    if (err !== undefined && err.code !== 0) {\n      return;\n    }\n    console.info('metadata output metadataObjectsAvailable');\n  });\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(698097)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前的元数据类型仅支持人脸检测（FACE_DETECTION）功能。元数据信息对象为识别到的人脸区域的矩形信息（Rect），包含矩形区域的左上角x坐标、y坐标和矩形的宽高数据。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过注册回调函数，获取监听metadata流的错误结果，callback返回metadata输出接口使用错误时返回的错误码，错误码类型参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-e/arkts-apis-camera-e#cameraerrorcode",
            children: "CameraErrorCode"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function onMetadataError(metadataOutput: camera.MetadataOutput): void {\n  metadataOutput.on('error', (metadataOutputError: BusinessError) => {\n    console.error(`Metadata output error code: ${metadataOutputError.code}`);\n  });\n}\n"
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
698097(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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