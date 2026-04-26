"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["746085"], {
966337(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_arkts_mandatory_camera_session_management_camera_session_management_md_ee5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-arkts-mandatory-camera-session-management-camera-session-management-md-ee5.json
var site_docs_camera_kit_camera_dev_arkts_mandatory_camera_session_management_camera_session_management_md_ee5_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-arkts-mandatory/camera-session-management/camera-session-management","title":"会话管理(ArkTS)","description":"相机使用预览、拍照、录像、元数据功能前，均需要创建相机会话。","source":"@site/docs/camera-kit/camera-dev-arkts-mandatory/camera-session-management/camera-session-management.md","sourceDirName":"camera-kit/camera-dev-arkts-mandatory/camera-session-management","slug":"/camera-kit/camera-dev-arkts-mandatory/camera-session-management/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts-mandatory/camera-session-management/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"会话管理(ArkTS)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-session-management","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"设备输入(ArkTS)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts-mandatory/camera-device-input/"},"next":{"title":"通过系统相机拍照和录像(CameraPicker)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-arkts/camera-picker/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-arkts-mandatory/camera-session-management/camera-session-management.md


const frontMatter = {
	title: '会话管理(ArkTS)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-session-management',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '会话管理(ArkTS)';

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
        id: "会话管理arkts",
        children: "会话管理(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相机使用预览、拍照、录像、元数据功能前，均需要创建相机会话。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在会话中，可以完成以下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置相机的输入流和输出流。相机在拍摄前，必须完成输入输出流的配置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置输入流即添加设备输入，对用户而言，相当于选择设备的某一相机拍摄；配置输出流，即选择数据将以什么形式输出。当应用需要实现拍照时，输出流应配置为预览流和拍照流，预览流的数据将显示在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-basic-components-xcomponent/ts-basic-components-xcomponent",
            children: "XComponent"
          }), "组件上，拍照流的数据将通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-imagereceiver/arkts-apis-image-imagereceiver",
            children: "ImageReceiver"
          }), "接口的能力保存到相册中。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["添加闪光灯、调整焦距等配置。具体支持的配置及接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera/arkts-apis-camera",
            children: "@ohos.multimedia.camera (相机管理)"
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
          children: "导入相关接口，导入方法如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { camera } from '@kit.CameraKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager",
            children: "cameraManager"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-cameramanager/arkts-apis-camera-cameramanager#createsession11",
            children: "createSession"
          }), "方法创建一个会话。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 此处以videoSession为例。\nfunction getSession(cameraManager: camera.CameraManager): camera.VideoSession | undefined {\n  let videoSession: camera.VideoSession | undefined = undefined;\n  try {\n    videoSession = cameraManager.createSession(camera.SceneMode.NORMAL_VIDEO) as camera.VideoSession;\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to create the session instance. error: ${err.code}`);\n  }\n  return videoSession;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-videosession/arkts-apis-camera-videosession",
            children: "VideoSession"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#beginconfig11",
            children: "beginConfig"
          }), "方法配置会话。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function beginConfig(videoSession: camera.VideoSession): void {\n  try {\n    videoSession.beginConfig();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to beginConfig. error: ${err.code}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使能。向会话中添加相机的输入流和输出流，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#addinput11",
            children: "addInput"
          }), "添加相机的输入流；调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#addoutput11",
            children: "addOutput"
          }), "添加相机的输出流。以下示例代码以添加预览流previewOutput和拍照流photoOutput为例，即当前模式支持拍照和预览。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用VideoSession中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#commitconfig11",
            children: "commitConfig"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#start11",
            children: "start"
          }), "方法提交相关配置，并启动会话。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(136100)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#addoutput11",
            children: "addOutput"
          }), "添加相机的输出流前，可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#canaddoutput11",
            children: "canAddOutput"
          }), "判断当前相机输出流是否可以添加到session中。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["相机输入流cameraInput创建流程请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts-mandatory/camera-device-input",
            children: "设备输入"
          }), "，相机预览输出流previewOutput和拍照输出流photoOutput创建流程请分别参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts/camera-preview",
            children: "预览"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-arkts/camera-shooting",
            children: "拍照"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function startSession(videoSession: camera.VideoSession, cameraInput: camera.CameraInput, previewOutput: camera.PreviewOutput, photoOutput: camera.PhotoOutput): Promise<void> {\n  try {\n    videoSession.addInput(cameraInput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to addInput. error: ${err.code}`);\n  }\n  let canAddPreviewOutput : boolean = false;\n  try {\n    canAddPreviewOutput = videoSession.canAddOutput(previewOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to add previewOutput. error: ${err.code}`);\n  }\n  if (!canAddPreviewOutput) {\n    console.error(`Failed to add preview output.`);\n    return;\n  }\n  try {\n    videoSession.addOutput(previewOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to add previewOutput. error: ${err.code}`);\n  }\n  let canAddPhotoOutput : boolean = false\n  try {\n    canAddPhotoOutput = videoSession.canAddOutput(photoOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to add photoOutput error: ${err.code}`);\n  }\n  if (!canAddPhotoOutput) {\n    console.error(`Failed to add photo output.`);\n    return;\n  }\n  try {\n    videoSession.addOutput(photoOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to add photoOutput. error: ${err.code}`);\n  }\n  try {\n    await videoSession.commitConfig();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to commitConfig. error: ${err.code}`);\n   return;\n  }\n\n  try {\n    await videoSession.start();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to start. error: ${err.code}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["会话控制。调用VideoSession中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#stop11",
            children: "stop"
          }), "方法可以停止当前会话。调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#removeoutput11",
            children: "removeOutput"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/camera-api/camera-arkts/js-apis-camera/arkts-apis-camera-session/arkts-apis-camera-session#addoutput11",
            children: "addOutput"
          }), "方法可以完成会话切换控制。以下示例代码以移除拍照流photoOutput，添加视频流videoOutput为例，完成了拍照到录像的切换。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function switchOutput(videoSession: camera.VideoSession, videoOutput: camera.VideoOutput, photoOutput: camera.PhotoOutput): Promise<void> {\n  try {\n    await videoSession.stop();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to stop. error: ${err.code}`);\n  }\n\n  try {\n    videoSession.beginConfig();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to beginConfig. error: ${err.code}`);\n  }\n  // 从会话中移除拍照输出流。\n  try {\n    videoSession.removeOutput(photoOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to remove photoOutput. error: ${err.code}`);\n  }\n  try {\n    videoSession.canAddOutput(videoOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to add videoOutput error: ${err.code}`);\n  }\n  // 向会话中添加视频输出流。\n  try {\n    videoSession.addOutput(videoOutput);\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to add videoOutput. error: ${err.code}`);\n  }\n  try {\n    await videoSession.commitConfig();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to commitConfig. error: ${err.code}`);\n  }\n\n  try {\n    await videoSession.start();\n  } catch (error) {\n    let err = error as BusinessError;\n    console.error(`Failed to start. error: ${err.code}`);\n  }\n}\n"
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
136100(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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