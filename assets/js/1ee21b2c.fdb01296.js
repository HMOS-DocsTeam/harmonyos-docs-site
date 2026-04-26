"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["745233"], {
259171(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_camera_kit_camera_dev_native_native_camera_preview_imagereceiver_native_camera_preview_imagereceiver_md_1ee_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-camera-kit-camera-dev-native-native-camera-preview-imagereceiver-native-camera-preview-imagereceiver-md-1ee.json
var site_docs_camera_kit_camera_dev_native_native_camera_preview_imagereceiver_native_camera_preview_imagereceiver_md_1ee_namespaceObject = JSON.parse('{"id":"camera-kit/camera-dev-native/native-camera-preview-imagereceiver/native-camera-preview-imagereceiver","title":"预览流二次处理(C/C++)","description":"通过ImageReceiver创建预览输出，获取预览流实时数据，以供后续进行图像二次处理，比如应用可以对其添加滤镜算法等。","source":"@site/docs/camera-kit/camera-dev-native/native-camera-preview-imagereceiver/native-camera-preview-imagereceiver.md","sourceDirName":"camera-kit/camera-dev-native/native-camera-preview-imagereceiver","slug":"/camera-kit/camera-dev-native/native-camera-preview-imagereceiver/","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-preview-imagereceiver/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"预览流二次处理(C/C++)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-preview-imagereceiver","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"预览(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-preview/"},"next":{"title":"拍照(C/C++)","permalink":"/harmonyos-docs-site/camera-kit/camera-dev-native/native-camera-shooting/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/camera-kit/camera-dev-native/native-camera-preview-imagereceiver/native-camera-preview-imagereceiver.md


const frontMatter = {
	title: '预览流二次处理(C/C++)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-preview-imagereceiver',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '预览流二次处理(C/C++)';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "预览流二次处理cc",
        children: "预览流二次处理(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过ImageReceiver创建预览输出，获取预览流实时数据，以供后续进行图像二次处理，比如应用可以对其添加滤镜算法等。"
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
            children: "#include <cstdint>\n#include <cstdlib>\n#include \"hilog/log.h\"\n#include <memory>\n#include <new>\n#include <multimedia/image_framework/image/image_native.h>\n#include <multimedia/image_framework/image/image_receiver_native.h>\n#include \"ohcamera/camera.h\"\n#include \"ohcamera/camera_input.h\"\n#include \"ohcamera/camera_device.h\"\n#include \"ohcamera/capture_session.h\"\n#include \"ohcamera/photo_output.h\"\n#include \"ohcamera/preview_output.h\"\n#include \"ohcamera/video_output.h\"\n#include \"ohcamera/camera_manager.h\"\n\n#include <multimedia/media_library/media_asset_manager_capi.h>\n#include <multimedia/media_library/media_asset_change_request_capi.h>\n#include <multimedia/media_library/media_access_helper_capi.h>\n#include <multimedia/image_framework/image/image_packer_native.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在CMake脚本中链接相关动态库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC\n    libace_napi.z.so\n    libhilog_ndk.z.so\n    libohimage.so\n    libimage_receiver.so\n    libnative_image.so\n    libohcamera.so\n    libnative_buffer.so\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["初始化图片接收器", (0,jsx_runtime.jsx)(_components.a, {
            href: "/image-kit/image-native/image-receiving-c/image-receiver-c",
            children: "ImageReceiver"
          }), "实例，获取SurfaceId。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过image的OH_ImageReceiverNative_Create方法创建OH_ImageReceiverNative实例，再通过实例的OH_ImageReceiverNative_GetReceivingSurfaceId方法获取SurfaceId。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void InitImageReceiver(uint64_t &receiverSurfaceID)\n{\n    OH_ImageReceiverOptions *options = nullptr;\n    // 注意捕获错误码处理异常及对象判空，当前示例仅展示调用流程。\n    // 设置图片参数。\n    Image_ErrorCode errCode = OH_ImageReceiverOptions_Create(&options);\n    if (errCode != IMAGE_SUCCESS || options == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"OH_ImageReceiverOptions_Create call failed\");\n        return;\n    }\n    Image_Size imgSize;\n    imgSize.width = PREVIEW_WIDTH; // 创建预览流的宽。\n    imgSize.height = PREVIEW_HEIGHT; // 创建预览流的高。\n    int32_t capacity = 8; // BufferQueue里最大Image数量，推荐填写8。\n    errCode = OH_ImageReceiverOptions_SetSize(options, imgSize);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"OH_ImageReceiverOptions_SetSize call failed\");\n    }\n    errCode = OH_ImageReceiverOptions_SetCapacity(options, capacity);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"OH_ImageReceiverOptions_SetCapacity call failed\");\n    }\n    // 创建OH_ImageReceiverNative对象。\n    OH_ImageReceiverNative *receiver = nullptr;\n    errCode = OH_ImageReceiverNative_Create(options, &receiver);\n    if (errCode != IMAGE_SUCCESS || receiver == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"OH_ImageReceiverNative_Create call failed\");\n        return;\n    }\n\n    errCode = OH_ImageReceiverNative_On(receiver, CallbackReadNextImage);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"%{public}s image receiver on failed, errCode: %{public}d.\", __func__, errCode);\n        OH_ImageReceiverOptions_Release(options);\n        OH_ImageReceiverNative_Release(receiver);\n        return;\n    }\n    // 获取OH_ImageReceiverNative对象的SurfaceId。\n    errCode = OH_ImageReceiverNative_GetReceivingSurfaceId(receiver, &receiverSurfaceID);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"OH_ImageReceiverNative_GetReceivingSurfaceId call failed\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"receiver surfaceID:%{public}lu\", receiverSurfaceID);\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过上一步获取到的SurfaceId创建预览流（在创建预览流之前需要将SurfaceId类型转成char *），参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-native/native-camera-preview",
            children: "预览(C/C++)"
          }), "步骤4。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建会话，使能会话，参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/camera-kit/camera-dev-native-mandatory/native-camera-session-management",
            children: "会话管理(C/C++)"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册ImageReceiver图片接收器的回调，监听获取每帧上报图像内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void copyBuffer(OH_NativeBuffer *srcBuffer, size_t srcSize, OHNativeWindowBuffer *dstBuffer)\n{\n    OH_LOG_INFO(LOG_APP, \"ImageReceiverNativeCTest %{public}s IN\", __func__);\n    void *srcVir = nullptr;\n    OH_NativeBuffer_Map(srcBuffer, &srcVir);\n    BufferHandle *bufferHandle = OH_NativeWindow_GetBufferHandleFromNative(dstBuffer);\n    OH_LOG_INFO(LOG_APP,\n        \"ImageReceiverNativeCTest %{public}s bufferHandle info fd= %{public}d , width= %{public}d, \"\n        \"height=%{public}d, stride= %{public}d, size= %{public}d, format= %{public}d, usage= %{public}lu\",\n        __func__, bufferHandle->fd, bufferHandle->width, bufferHandle->height, bufferHandle->stride, bufferHandle->size,\n        bufferHandle->format, bufferHandle->usage);\n\n    void *mappedAddr =\n        mmap(bufferHandle->virAddr, bufferHandle->size, PROT_READ | PROT_WRITE, MAP_SHARED, bufferHandle->fd, 0);\n    std::memcpy(static_cast<unsigned char *>(mappedAddr), static_cast<unsigned char *>(srcVir), srcSize);\n    munmap(mappedAddr, bufferHandle->size);\n\n    OH_NativeBuffer_Unmap(srcBuffer);\n    OH_LOG_INFO(LOG_APP, \"ImageReceiverNativeCTest %{public}s SUCCESS\", __func__);\n}\n\nvoid ShowImage(OH_ImageNative *image)\n{\n    OH_LOG_INFO(LOG_APP, \"ImageReceiverNativeCTest %{public}s IN\", __func__);\n    uint64_t xComponentSurfaceId = std::stoull(g_xComponentSurfaceIdSlave);\n    OH_LOG_ERROR(LOG_APP, \"ImageReceiverNativeCTest %{public}s XComponentId is : %{public}lu.\", __func__,\n        xComponentSurfaceId);\n    OHNativeWindow *nativeWindow = nullptr;\n    int32_t res = OH_NativeWindow_CreateNativeWindowFromSurfaceId(xComponentSurfaceId, &nativeWindow);\n    if (res != 0) {\n        OH_LOG_ERROR(LOG_APP,\n            \"ShowImage CreateNativeWindowFromSurfaceId failed, errCode: %{public}d.\", res);\n        return;\n    }\n\n    // 关键：调整nativeWindow大小及format，需要与image的大小、format保持一致。\n    res = OH_NativeWindow_NativeWindowHandleOpt(nativeWindow, SET_BUFFER_GEOMETRY, g_imageWidth, g_imageHeight);\n    res = OH_NativeWindow_NativeWindowHandleOpt(nativeWindow, SET_FORMAT, NATIVEBUFFER_PIXEL_FMT_YCRCB_420_SP); // NV21\n    // 设置旋转角度，后置默认旋转90，则需要将nativeWindow旋转270度，前置默认270，则需要将nativeWindow旋转90度。\n    if (g_isFront) {\n        res = OH_NativeWindow_NativeWindowHandleOpt(nativeWindow, SET_TRANSFORM, NATIVEBUFFER_FLIP_V_ROT90);\n    } else {\n        res = OH_NativeWindow_NativeWindowHandleOpt(nativeWindow, SET_TRANSFORM, NATIVEBUFFER_ROTATE_270);\n    }\n\n    OH_NativeBuffer *imageBuffer = nullptr;\n    Image_ErrorCode errCode = OH_ImageNative_GetByteBuffer(image, g_jpegComponent, &imageBuffer);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"ShowImage GetByteBuffer failed, errCode: %{public}d.\", errCode);\n        return;\n    }\n    Image_Size imgSize = {};\n    OH_ImageNative_GetImageSize(image, &imgSize);\n    OH_LOG_INFO(LOG_APP, \"ImageReceiverNativeCTest %{public}s imgSize is : %{public}u, %{public}u.\", __func__,\n        imgSize.width, imgSize.height);\n    size_t bufSize = 0;\n    OH_ImageNative_GetBufferSize(image, g_jpegComponent, &bufSize);\n\n    OHNativeWindowBuffer *nativeWindowBuffer = nullptr;\n    int fenceFd = -1;\n    res = OH_NativeWindow_NativeWindowRequestBuffer(nativeWindow, &nativeWindowBuffer, &fenceFd);\n    if (res != 0) {\n        OH_LOG_ERROR(LOG_APP, \"ShowImage RequestBuffer failed, errCode: %{public}d.\", res);\n        return;\n    }\n\n    // 将image数据拷贝到nativeWindowBuffer上。\n    copyBuffer(imageBuffer, bufSize, nativeWindowBuffer);\n\n    Region region1{};\n    res = OH_NativeWindow_NativeWindowFlushBuffer(nativeWindow, nativeWindowBuffer, fenceFd, region1);\n    if (res != 0) {\n        OH_LOG_ERROR(LOG_APP, \"ShowImage FlushBuffer failed, errCode: %{public}d.\", res);\n        return;\n    }\n    OH_LOG_INFO(LOG_APP, \"ImageReceiverNativeCTest %{public}s SUCCESS\", __func__);\n}\n\nstatic void CallbackReadNextImage(OH_ImageReceiverNative *receiver)\n{\n    OH_LOG_INFO(LOG_APP, \"CallbackReadNextImage %{public}s IN\", __func__);\n    // 读取OH_ImageReceiverNative下一张图片对象。\n    OH_ImageNative *image = nullptr;\n    Image_ErrorCode errCode = OH_ImageReceiverNative_ReadNextImage(receiver, &image);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP,\n            \"CallbackReadNextImage %{public}s get image receiver next image failed, errCode: %{public}d.\", __func__,\n            errCode);\n        return;\n    }\n\n    ShowImage(image);\n\n    // 释放OH_ImageNative实例。\n    errCode = OH_ImageNative_Release(image);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"CallbackReadNextImage %{public}s release image native failed, errCode: %{public}d.\",\n            __func__, errCode);\n    }\n    OH_LOG_INFO(LOG_APP, \"CallbackReadNextImage %{public}s SUCCESS\", __func__);\n}\n"
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