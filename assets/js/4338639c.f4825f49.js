"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["197013"], {
346418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_native_native_camera_deferred_capture_native_camera_deferred_capture_md_433_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-native-native-camera-deferred-capture-native-camera-deferred-capture-md-433.json
var site_docs_camera_kit_camera_dev_native_native_camera_deferred_capture_native_camera_deferred_capture_md_433_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-native/native-camera-deferred-capture/native-camera-deferred-capture","title":"分段式拍照(C/C++)","description":"分段式拍照是相机的最重要功能之一，相机输出低质量图用作快速显示，提升用户感知拍照速度，同时使用高质量图保证最后的成图质量达到系统相机的水平，既满足了后处理算法的需求，又不阻塞前台的拍照速度，构筑相机性能竞争力，提升了用户的体验。","source":"@site/docs/camera-kit/camera-dev-native/native-camera-deferred-capture/native-camera-deferred-capture.md","sourceDirName":"camera-kit/camera-dev-native/native-camera-deferred-capture","slug":"/camera-kit/camera-dev-native/native-camera-deferred-capture/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-deferred-capture/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"分段式拍照(C/C++)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-deferred-capture","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"拍照实践(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-shooting-case/"},"next":{"title":"录像(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-recording/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-native/native-camera-deferred-capture/native-camera-deferred-capture.md


const frontMatter = {
	title: '分段式拍照(C/C++)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-deferred-capture',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '分段式拍照(C/C++)';

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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "分段式拍照cc",
        children: "分段式拍照(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分段式拍照是相机的最重要功能之一，相机输出低质量图用作快速显示，提升用户感知拍照速度，同时使用高质量图保证最后的成图质量达到系统相机的水平，既满足了后处理算法的需求，又不阻塞前台的拍照速度，构筑相机性能竞争力，提升了用户的体验。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在第一阶段，系统快速上报轻量处理的图片，轻量处理的图片比全质量图低，出图速度快。应用通过回调会收到一个PhotoAsset对象，通过该对象可调用媒体库接口，读取图片或落盘图片。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在第二阶段，相机框架会根据应用的请求图片诉求或者在系统闲时，进行图像增强处理得到全质量图，将处理好的图片传回给媒体库，替换轻量处理的图片。"
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
          children: "导入NDK接口，接口中提供了相机相关的属性和方法，导入方法如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <cstdint>\n#include <unistd.h>\n#include <string>\n#include <thread>\n#include <cstdio>\n#include <fcntl.h>\n#include <map>\n#include <string>\n#include <vector>\n#include <native_buffer/native_buffer.h>\n#include \"iostream\"\n#include \"mutex\"\n\n#include \"hilog/log.h\"\n#include \"ohcamera/camera.h\"\n#include \"ohcamera/camera_input.h\"\n#include \"ohcamera/capture_session.h\"\n#include \"ohcamera/photo_output.h\"\n#include \"ohcamera/preview_output.h\"\n#include \"ohcamera/video_output.h\"\n#include \"napi/native_api.h\"\n#include \"ohcamera/camera_manager.h\"\n#include \"common/log_common.h\"\n\n#include \"multimedia/image_framework/image/image_native.h\"\n#include \"multimedia/image_framework/image/image_source_native.h\"\n#include \"multimedia/image_framework/image/image_packer_native.h\"\n#include \"multimedia/media_library/media_access_helper_capi.h\"\n#include \"multimedia/media_library/media_asset_base_capi.h\"\n#include \"multimedia/media_library/media_asset_capi.h\"\n#include \"multimedia/media_library/media_asset_change_request_capi.h\"\n#include \"multimedia/media_library/media_asset_manager_capi.h\"\n#include \"multimedia/media_library/moving_photo_capi.h\"\n#include \"ohcamera/photo_native.h\"\n#include <window_manager/oh_display_info.h>\n#include <window_manager/oh_display_manager.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在CMake脚本中链接相关动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC\n    libace_napi.z.so\n    libhilog_ndk.z.so\n    libohcamera.so\n    libimage_source.so\n    libmedia_asset_manager.so\n    libimage_packer.so\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["相机初始化及拍照触发参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-native/native-camera-shooting",
            children: "拍照(C/C++)"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册分段式（PhotoAssetAvailable）拍照回调，对比单段式拍照，仅注册的拍照回调接口不同。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(955929)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果已经注册了PhotoAssetAvailable回调，并且在Session开始之后又注册了PhotoAvailable回调，PhotoAssetAvailable和PhotoAvailable同时注册，会导致流被重启，仅PhotoAssetAvailable生效。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不建议开发者同时注册PhotoAssetAvailable和PhotoAvailable。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册PhotoAssetAvailableCallback回调，接收分段式拍照回图示例："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "分段式拍照开发流程（PhotoAssetAvailableCallback）"
            })
          }), "："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在会话commitConfig前注册分段式拍照回调。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过分段式拍照回调，获取媒体库资源mediaAsset。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["通过mediaAsset直接落盘图片或者通过mediaAsset配置策略模式请求图像资源，业务处理后通过buffer保存图片，或显示图片(参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/camera-kit/camera-dev-native/native-camera-shooting",
              children: "拍照(C/C++)"
            }), "步骤5)。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使用完后解注册分段式拍照回调函数。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 分段式拍照回调函数。\nvoid onPhotoAssetAvailable(Camera_PhotoOutput *photoOutput, OH_MediaAsset *mediaAsset)\n{\n    if (mediaAsset == nullptr) {\n        DRAWING_LOGI(\"onPhotoAssetAvailable mediaAsset is nullptr !\");\n        return;\n    }\n    DRAWING_LOGD(\"onPhotoAssetAvailable start!\");\n    NDKCamera::MediaAssetRelease();\n    g_mediaAsset = mediaAsset;\n    NDKCamera::MediaAssetGetUri(mediaAsset);\n    NDKCamera::MediaAssetGetDisplayName(mediaAsset);\n    NDKCamera::MediaAssetGetSize(mediaAsset);\n    NDKCamera::MediaAssetGetDateModifiedMs(mediaAsset);\n    NDKCamera::MediaAssetGetWidth(mediaAsset);\n    NDKCamera::MediaAssetGetHeight(mediaAsset);\n    NDKCamera::MediaAssetGetOrientation(mediaAsset);\n    NDKCamera::MediaAssetManagerCreate();\n    NDKCamera::MediaAssetChangeRequest(mediaAsset);\n    DRAWING_LOGD(\"onPhotoAssetAvailable finish!\");\n    return;\n}\n\n// 注册分段式拍照回调。\nCamera_ErrorCode NDKCamera::PhotoOutputRegisterPhotoAssetAvailableCallback(void)\n{\n    DRAWING_LOGD(\"NDKCamera::PhotoOutputRegisterPhotoAssetAvailableCallback start!\");\n    MediaAssetManagerCreate();\n    ret_ = OH_PhotoOutput_RegisterPhotoAssetAvailableCallback(photoOutput_, onPhotoAssetAvailable);\n    if (ret_ != CAMERA_OK) {\n        DRAWING_LOGD(\"NDKCamera::PhotoOutputRegisterPhotoAssetAvailableCallback failed.\");\n    }\n    DRAWING_LOGD(\n        \"NDKCamera::PhotoOutputRegisterPhotoAssetAvailableCallback return with ret code: %{public}d!\",\n        ret_);\n    return ret_;\n}\n\nMediaLibrary_ErrorCode NDKCamera::MediaAssetChangeRequest(OH_MediaAsset *mediaAsset)\n{\n    DRAWING_LOGD(\"NDKCamera::MediaAssetChangeRequest start!\");\n    MediaAssetChangeRequestCreate(mediaAsset);\n    MediaAssetManagerRequestImage(mediaAsset);\n    DRAWING_LOGD(\"NDKCamera::MediaAssetChangeRequest finish!\");\n    return MEDIA_LIBRARY_OK;\n}\n\nMediaLibrary_ErrorCode NDKCamera::MediaAssetChangeRequestCreate(OH_MediaAsset *mediaAsset)\n{\n    DRAWING_LOGD(\"NDKCamera::MediaAssetChangeRequestCreate start!\");\n    g_changeRequest = OH_MediaAssetChangeRequest_Create(mediaAsset);\n    if (g_changeRequest == nullptr) {\n        DRAWING_LOGD(\"NDKCamera::MediaAssetChangeRequestCreate failed.\");\n    }\n    return MEDIA_LIBRARY_OK;\n}\n\nMediaLibrary_ErrorCode NDKCamera::MediaAssetManagerCreate(void)\n{\n    DRAWING_LOGD(\"NDKCamera::MediaAssetManagerCreate start!\");\n    mediaAssetManager = OH_MediaAssetManager_Create();\n    if (mediaAssetManager == nullptr) {\n        DRAWING_LOGD(\"NDKCamera::MediaAssetManagerCreate failed.\");\n    }\n    return MEDIA_LIBRARY_OK;\n}\n\nvoid OnRequsetImageDataPreparedWithDetails(MediaLibrary_ErrorCode result, MediaLibrary_RequestId requestId,\n    MediaLibrary_MediaQuality mediaQuality, MediaLibrary_MediaContentType type, OH_ImageSourceNative *imageSourceNative)\n{\n    auto cb = (void (*)(char *))(g_requestImageCallback);\n    auto qCb = (void (*)(char *))(g_requestImageQualityCallback);\n    DRAWING_LOGD(\"OnRequsetImageDataPreparedWithDetails start!\");\n    if (mediaQuality == MediaLibrary_MediaQuality::MEDIA_LIBRARY_QUALITY_FAST) {\n        DRAWING_LOGD(\"OnRequsetImageDataPreparedWithDetails into fast quality mode!\");\n        g_mediaQualityCb = \"fast\";\n        qCb(g_mediaQualityCb);\n    } else {\n        DRAWING_LOGD(\"OnRequsetImageDataPreparedWithDetails into high quality mode!\");\n        g_mediaQualityCb = \"high\";\n        qCb(g_mediaQualityCb);\n    }\n    DRAWING_LOGD(\"OnRequsetImageDataPreparedWithDetails GetUri uri_ = %{public}s\", URI);\n    cb(const_cast<char *>(URI));\n    NDKCamera::ChangeRequestAddResourceWithBuffer(imageSourceNative);\n    return;\n}\n\n// 请求图片数据：deliveryMode/quality等通过requestOptions控制，完成后进回调OnRequsetImageDataPreparedWithDetails。\nMediaLibrary_ErrorCode NDKCamera::MediaAssetManagerRequestImage(OH_MediaAsset *mediaAsset)\n{\n    DRAWING_LOGD(\"NDKCamera::MediaAssetManagerRequestImage start! g_deliveryMode = %{public}d\",\n        g_deliveryMode);\n    requestOptions.deliveryMode = g_deliveryMode;\n    result = OH_MediaAssetManager_RequestImage(mediaAssetManager, mediaAsset, requestOptions, &g_requestId,\n        OnRequsetImageDataPreparedWithDetails);\n    if (result != MEDIA_LIBRARY_OK) {\n        DRAWING_LOGD(\"NDKCamera::MediaAssetManagerRequestImage failed.\");\n    }\n    DRAWING_LOGD(\"NDKCamera::MediaAssetManagerRequestImage return with ret code: %{public}d!\", result);\n    return result;\n}\n\nMediaLibrary_ErrorCode NDKCamera::ChangeRequestAddResourceWithBuffer(OH_ImageSourceNative *imageSourceNative)\n{\n    DRAWING_LOGD(\"NDKCamera::ChangeRequestAddResourceWithBuffer start!\");\n    size_t bufferSize = BUFFER_SIZE;\n    char buffer[BUFFER_SIZE];\n    int fd = open(\"/data/storage/el2/base/haps/test.jpg\", O_RDONLY);\n    int fr = read(fd, buffer, bufferSize);\n    if (fr == -1) {\n        DRAWING_LOGD(\"NDKCamera::ChangeRequestAddResourceWithBuffer read failed.\");\n        return MEDIA_LIBRARY_OK;\n    }\n    if (fr == BUFFER_SIZE) {\n        DRAWING_LOGD(\"NDKCamera::ChangeRequestAddResourceWithBuffer read not complete.\");\n        return MEDIA_LIBRARY_OK;\n    }\n    result = OH_MediaAssetChangeRequest_AddResourceWithBuffer(g_changeRequest,\n        MediaLibrary_ResourceType::MEDIA_LIBRARY_IMAGE_RESOURCE, (uint8_t *)buffer, (uint32_t)bufferSize);\n    if (result != MEDIA_LIBRARY_OK) {\n        DRAWING_LOGD(\"NDKCamera::ChangeRequestAddResourceWithBuffer failed.\");\n        DRAWING_LOGD(\"NDKCamera::ChangeRequestAddResourceWithBuffer failed %{public}d.\", result);\n        return MEDIA_LIBRARY_OK;\n    }\n    result = OH_MediaAccessHelper_ApplyChanges(g_changeRequest);\n    if (result != MEDIA_LIBRARY_OK) {\n        DRAWING_LOGD(\n            \"NDKCamera::ChangeRequestAddResourceWithBuffer OH_MediaAccessHelper_ApplyChanges failed.\");\n        return MEDIA_LIBRARY_OK;\n    }\n    DRAWING_LOGD(\"NDKCamera::ChangeRequestAddResourceWithBuffer OH_MediaAccessHelper_ApplyChanges return \"\n                 \"with ret code: %{public}d!\",\n        result);\n    return result;\n}\n\nMediaLibrary_ErrorCode NDKCamera::ChangeRequestSaveCameraPhoto(void)\n{\n    DRAWING_LOGD(\"NDKCamera::ChangeRequestSaveCameraPhoto start!\");\n    result = OH_MediaAssetChangeRequest_SaveCameraPhoto(g_changeRequest,\n        MediaLibrary_ImageFileType::MEDIA_LIBRARY_IMAGE_JPEG);\n    if (result != MEDIA_LIBRARY_OK) {\n        DRAWING_LOGD(\n            \"NDKCamera::ChangeRequestSaveCameraPhoto OH_MediaAssetChangeRequest_SaveCameraPhoto failed.\");\n    }\n    DRAWING_LOGD(\"NDKCamera::ChangeRequestSaveCameraPhoto OH_MediaAssetChangeRequest_SaveCameraPhoto \"\n                 \"return with ret code: %{public}d!\",\n        result);\n    result = OH_MediaAccessHelper_ApplyChanges(g_changeRequest);\n    if (result != MEDIA_LIBRARY_OK) {\n        DRAWING_LOGD(\"NDKCamera::ChangeRequestSaveCameraPhoto OH_MediaAccessHelper_ApplyChanges failed.\");\n    }\n    DRAWING_LOGD(\"NDKCamera::ChangeRequestSaveCameraPhoto OH_MediaAccessHelper_ApplyChanges return with \"\n                 \"ret code: %{public}d!\",\n        result);\n    return result;\n}\n\nMediaLibrary_ErrorCode NDKCamera::ChangeRequestDiscardCameraPhoto(void)\n{\n    DRAWING_LOGD(\"NDKCamera::ChangeRequestDiscardCameraPhoto start!\");\n    result = OH_MediaAssetChangeRequest_DiscardCameraPhoto(g_changeRequest);\n    if (result != MEDIA_LIBRARY_OK) {\n        DRAWING_LOGD(\"NDKCamera::ChangeRequestDiscardCameraPhoto \"\n                     \"OH_MediaAssetChangeRequest_DiscardCameraPhoto failed.\");\n    }\n    DRAWING_LOGD(\"NDKCamera::ChangeRequestDiscardCameraPhoto OH_MediaAssetChangeRequest_DiscardCameraPhoto \"\n                 \"return with ret code: %{public}d!\",\n        result);\n    result = OH_MediaAccessHelper_ApplyChanges(g_changeRequest);\n    if (result != MEDIA_LIBRARY_OK) {\n        DRAWING_LOGD(\n            \"NDKCamera::ChangeRequestDiscardCameraPhoto OH_MediaAccessHelper_ApplyChanges failed.\");\n    }\n    DRAWING_LOGD(\"NDKCamera::ChangeRequestDiscardCameraPhoto OH_MediaAccessHelper_ApplyChanges return with \"\n                 \"ret code: %{public}d!\",\n        result);\n    return result;\n}\n\nMediaLibrary_ErrorCode NDKCamera::ChangeRequestRelease(void)\n{\n    DRAWING_LOGD(\"NDKCamera::ChangeRequestRelease start!\");\n    result = OH_MediaAssetChangeRequest_Release(g_changeRequest);\n    if (result != MEDIA_LIBRARY_OK) {\n        DRAWING_LOGD(\"NDKCamera::ChangeRequestRelease failed.\");\n    }\n    g_changeRequest = nullptr;\n    DRAWING_LOGD(\"NDKCamera::ChangeRequestRelease return with ret code: %{public}d!\", result);\n    return result;\n}\n"
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
955929(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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