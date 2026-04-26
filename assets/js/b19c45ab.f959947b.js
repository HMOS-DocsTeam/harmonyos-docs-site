"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["115969"], {
57097(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_native_js_objects_image_receiver_native_image_receiver_native_md_b19_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-native-js-objects-image-receiver-native-image-receiver-native-md-b19.json
var site_docs_image_kit_image_native_js_objects_image_receiver_native_image_receiver_native_md_b19_namespaceObject = JSON.parse('{"id":"image-kit/image-native-js-objects/image-receiver-native/image-receiver-native","title":"图片接收","description":"当前开发指导使用的接口为Image模块下的C API，可完成图片编解码，图片接收器，处理图像数据等功能。这部分API在API version 11之前发布，在后续的版本不再增加新功能，*不再推荐使用*。","source":"@site/docs/image-kit/image-native-js-objects/image-receiver-native/image-receiver-native.md","sourceDirName":"image-kit/image-native-js-objects/image-receiver-native","slug":"/image-kit/image-native-js-objects/image-receiver-native/","permalink":"/harmonyos-docs-site/image-kit/image-native-js-objects/image-receiver-native/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"图片接收","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-receiver-native","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"位图操作","permalink":"/harmonyos-docs-site/image-kit/image-native-js-objects/image-pixelmap-operation-native/"},"next":{"title":"Media Kit简介","permalink":"/harmonyos-docs-site/media-kit/media-kit-intro/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-native-js-objects/image-receiver-native/image-receiver-native.md


const frontMatter = {
	title: '图片接收',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-receiver-native',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '图片接收';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "添加依赖",
  "id": "添加依赖",
  "level": 3
}, {
  "value": "添加接口映射",
  "id": "添加接口映射",
  "level": 3
}, {
  "value": "添加权限申请",
  "id": "添加权限申请",
  "level": 3
}, {
  "value": "JS侧调用",
  "id": "js侧调用",
  "level": 3
}, {
  "value": "Native接口调用",
  "id": "native接口调用",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "图片接收",
        children: "图片接收"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(513118)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前开发指导使用的接口为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-module/capi-image/capi-image",
        children: "Image"
      }), "模块下的C API，可完成图片编解码，图片接收器，处理图像数据等功能。这部分API在API version 11之前发布，在后续的版本不再增加新功能，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "不再推荐使用"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-module/capi-image-nativemodule/capi-image-nativemodule",
        children: "Image_NativeModule"
      }), "模块下的C API，不仅提供上述图片框架基础功能，还可以完成多图编解码等新特性，相关开发指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-native/image-decoding-c/image-source-c",
        children: "图片开发指导(C/C++)"
      }), "节点下的内容。这部分API从API version 12开始支持，并将持续演进，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "推荐开发者使用"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "两套C API不建议同时使用，在部分场景下存在不兼容的问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片接收类，用于获取组件surface id，接收最新的图片和读取下一张图片，以及释放ImageReceiver实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加依赖",
      children: "添加依赖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行应用开发之前，开发者需要打开native工程的src/main/cpp/CMakeLists.txt，在target_link_libraries依赖中添加libace_napi.z.so、libimage_ndk.z.so、libimage_receiver_ndk.z.so、libnative_image.so以及日志依赖libhilog_ndk.z.so。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so libimage_ndk.z.so libimage_receiver_ndk.z.so libnative_image.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加接口映射",
      children: "添加接口映射"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开src/main/cpp/hello.cpp文件，在Init函数中添加接口映射如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"createFromReceiver\", nullptr, createFromReceiver, nullptr, nullptr, nullptr, napi_default, nullptr },\n    };\n\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加权限申请",
      children: "添加权限申请"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此处通过camera图片获取输入数据，需要申请权限ohos.permission.CAMERA，申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
        children: "向用户申请授权"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "js侧调用",
      children: "JS侧调用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开src\\main\\cpp\\types\\libentry\\index.d.ts（其中libentry根据工程名生成），导入如下引用文件："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { image } from '@kit.ImageKit';\n\nexport const createFromReceiver: (a: image.ImageReceiver) => image.Image;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开src\\main\\ets\\pages\\index.ets，导入\"libentry.so（根据工程名生成）\"，调用Native接口，传入JS的资源对象。示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import testNapi from 'libentry.so';\nimport { image } from '@kit.ImageKit';\nimport { common, abilityAccessCtrl } from '@kit.AbilityKit';\nimport { camera } from '@kit.CameraKit';\n\n@Entry\n@Component\nstruct Index {\n  private receiver: image.ImageReceiver | undefined = undefined;\n  func (){\n     let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n     abilityAccessCtrl.createAtManager().requestPermissionsFromUser(context,['ohos.permission.CAMERA']).then(async () => {\n        let cameraManager = await camera.getCameraManager(context);\n        // 获取支持的相机设备对象。\n        let cameraDevices: Array<camera.CameraDevice> = cameraManager.getSupportedCameras();\n        if (cameraDevices.length <= 0) {\n        return;\n        }\n        // 获取对应相机设备的profiles。\n        let profiles: camera.CameraOutputCapability = cameraManager.getSupportedOutputCapability(cameraDevices[0], camera.SceneMode.NORMAL_PHOTO);\n        let previewProfiles: Array<camera.Profile> = profiles.previewProfiles;\n        if (previewProfiles.length <= 0) {\n        return;\n        }\n        let profileObj = previewProfiles[0];\n        this.receiver = image.createImageReceiver({width:profileObj.size.width, height:profileObj.size.height}, image.ImageFormat.JPEG, 8);\n        let receiverSurfaceId: string = await this.receiver.getReceivingSurfaceId();\n        // 创建预览流输出对象。\n        let previewOutput: camera.PreviewOutput = cameraManager.createPreviewOutput(profileObj,receiverSurfaceId);\n        let cameraInput : camera.CameraInput = cameraManager.createCameraInput(cameraDevices[0]);\n        // 打开相机。\n        await cameraInput.open();\n        // 会话流程。\n        let session : camera.PhotoSession = cameraManager.createSession(camera.SceneMode.NORMAL_PHOTO) as camera.PhotoSession;\n        // 配置会话。\n        session.beginConfig();\n        // 把cameraInput加入到会话。\n        session.addInput(cameraInput);\n        // 把预览流加入到会话。\n        session.addOutput(previewOutput);\n        // 提交配置信息。\n        await session.commitConfig();\n        // 会话开始。\n        await session.start();\n\n        this.receiver.on('imageArrival', () => {\n           let img : image.Image = testNapi.createFromReceiver(this.receiver);\n           img.release();\n        })\n\n     });\n  }\n\n  build() {\n     Row() {\n        Column() {\n        Button(\"start\")\n           .width(100)\n           .height(100)\n           .onClick(() => {\n              console.info(\"button click in\");\n              if (this.receiver == undefined) {\n                 this.func();\n              }\n           })\n        }\n        .width('100%')\n     }\n     .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "native接口调用",
      children: "Native接口调用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-module/capi-image/capi-image",
        children: "Image"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在hello.cpp文件中获取JS的资源对象，并转为Native的资源对象，即可调用Native接口，调用方式示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加引用文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <multimedia/image_framework/image_mdk.h>\n#include <multimedia/image_framework/image_receiver_mdk.h>\n#include <malloc.h>\n#include <hilog/log.h>\n\nstatic napi_value createFromReceiver(napi_env env, napi_callback_info info)\n{\n   size_t argc = 1;\n   napi_value args[2] = {nullptr};\n   napi_get_cb_info(env, info, &argc, args , nullptr, nullptr);\n   napi_valuetype valuetype0;\n   napi_typeof(env, args[0], &valuetype0);\n   napi_ref reference;\n   napi_create_reference(env, args[0], 1 ,&reference);\n   napi_value imgReceiver_js;\n   napi_get_reference_value(env, reference, &imgReceiver_js);\n   \n   ImageReceiverNative * imgReceiver_c = OH_Image_Receiver_InitImageReceiverNative(env, imgReceiver_js);\n\n   int32_t capacity;\n   OH_Image_Receiver_GetCapacity(imgReceiver_c, &capacity);\n   OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00, \"[receiver]\", \"capacity: %{public}d\", capacity);\n   int32_t format;\n   OH_Image_Receiver_GetFormat(imgReceiver_c, &format);\n   OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00, \"[receiver]\", \"format: %{public}d\", format);\n   char * surfaceId = static_cast<char *>(malloc(sizeof(char)));\n   OH_Image_Receiver_GetReceivingSurfaceId(imgReceiver_c, surfaceId, sizeof(char));\n   OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00, \"[receiver]\", \"surfaceId: %{public}c\", surfaceId[0]);\n   OhosImageSize size;\n   OH_Image_Receiver_GetSize(imgReceiver_c, &size);\n   OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00, \"[receiver]\", \"OH_Image_Receiver_GetSize  width: %{public}d, height:%{public}d\", size.width, size.height);\n\n   napi_value nextImage;\n   // 或调用 OH_Image_Receiver_ReadNextImage(imgReceiver_c, &nextImage);\n   OH_Image_Receiver_ReadLatestImage(imgReceiver_c, &nextImage);\n   \n   ImageNative * nextImage_native = OH_Image_InitImageNative(env, nextImage);\n\n   OhosImageSize imageSize;\n   OH_Image_Size(nextImage_native, &imageSize);\n   OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00, \"[receiver]\", \"OH_Image_Size  width: %{public}d, height:%{public}d\", imageSize.width, imageSize.height);\n\n   OhosImageComponent imgComponent;\n   OH_Image_GetComponent(nextImage_native, 4, &imgComponent); // 4=jpeg\n   \n   uint8_t *img_buffer = imgComponent.byteBuffer;\n   \n   OH_Image_Release(nextImage_native);\n   OH_Image_Receiver_Release(imgReceiver_c);\n   return nextImage;\n}\n"
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
513118(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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