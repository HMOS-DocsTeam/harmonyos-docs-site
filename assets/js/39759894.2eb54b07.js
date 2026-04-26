"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["7576"], {
779935(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_native_image_editing_c_pixelmap_c_pixelmap_c_md_397_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-native-image-editing-c-pixelmap-c-pixelmap-c-md-397.json
var site_docs_image_kit_image_native_image_editing_c_pixelmap_c_pixelmap_c_md_397_namespaceObject = JSON.parse('{"id":"image-kit/image-native/image-editing-c/pixelmap-c/pixelmap-c","title":"使用Image_NativeModule完成位图操作","description":"创建位图，获取位图的宽、高、pixelFormat、alphaType、rowStride信息、对位图进行操作以及释放位图实例。","source":"@site/docs/image-kit/image-native/image-editing-c/pixelmap-c/pixelmap-c.md","sourceDirName":"image-kit/image-native/image-editing-c/pixelmap-c","slug":"/image-kit/image-native/image-editing-c/pixelmap-c/","permalink":"/harmonyos-docs-site/image-kit/image-native/image-editing-c/pixelmap-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用Image_NativeModule完成位图操作","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pixelmap-c","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Image_NativeModule完成多图对象编码","permalink":"/harmonyos-docs-site/image-kit/image-native/image-encoding-c/image-packer-picture-c/"},"next":{"title":"使用ImageEffect编辑图片","permalink":"/harmonyos-docs-site/image-kit/image-native/image-editing-c/image-effect-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-native/image-editing-c/pixelmap-c/pixelmap-c.md


const frontMatter = {
	title: '使用Image_NativeModule完成位图操作',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pixelmap-c',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Image_NativeModule完成位图操作';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "添加链接库",
  "id": "添加链接库",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用image_nativemodule完成位图操作",
        children: "使用Image_NativeModule完成位图操作"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建位图，获取位图的宽、高、pixelFormat、alphaType、rowStride信息、对位图进行操作以及释放位图实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加链接库",
      children: "添加链接库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行应用开发之前，开发者需要打开native工程的src/main/cpp/CMakeLists.txt，在target_link_libraries依赖中添加libpixelmap.so以及日志依赖libhilog_ndk.z.so。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libhilog_ndk.z.so libpixelmap.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "native接口调用",
      children: "Native接口调用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体接口说明请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-module/capi-image-nativemodule/capi-image-nativemodule",
        children: "Image_NativeModule"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在DevEco Studio新建Native C++应用，默认生成的项目中包含index.ets文件，在entry\\src\\main\\cpp目录下会自动生成一个cpp文件（hello.cpp或napi_init.cpp，本示例以hello.cpp文件名为例）。在hello.cpp中实现C API接口调用逻辑，示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "位图接口使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在初始化参数后创建Pixelmap实例，进行图片像素数据的读写，对图片进行缩放、位置变换、反转、旋转、裁剪等操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <hilog/log.h>\n#include <multimedia/image_framework/image/pixelmap_native.h>\n\n#undef LOG_DOMAIN\n#undef LOG_TAG\n#define LOG_DOMAIN 0x3200\n#define LOG_TAG \"MY_TAG\"\n\nImage_ErrorCode PixelmapTest()\n{\n    uint8_t data[96];\n    size_t dataSize = 96;\n    for (int i = 0; i < dataSize; i++) {\n        data[i] = i + 1;\n    }\n\n    // 创建参数结构体实例，并设置参数。\n    OH_Pixelmap_InitializationOptions *createOpts;\n    OH_PixelmapInitializationOptions_Create(&createOpts);\n    OH_PixelmapInitializationOptions_SetWidth(createOpts, 6);\n    OH_PixelmapInitializationOptions_SetHeight(createOpts, 4);\n    OH_PixelmapInitializationOptions_SetPixelFormat(createOpts, PIXEL_FORMAT_RGBA_8888);\n    OH_PixelmapInitializationOptions_SetAlphaType(createOpts, PIXELMAP_ALPHA_TYPE_UNKNOWN);\n\n    // 创建Pixelmap实例。\n    OH_PixelmapNative *pixelmap = nullptr;\n    Image_ErrorCode errCode = OH_PixelmapNative_CreatePixelmap(data, dataSize, createOpts, &pixelmap);\n\n    // 读取图像像素数据，结果写入数组里。\n    uint8_t destination[96];\n    size_t destinationSize = 96;\n    errCode = OH_PixelmapNative_ReadPixels(pixelmap, destination, &destinationSize);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"ImagePixelmapNativeCTest pixelmapTest OH_PixelmapNative_ReadPixels failed, errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n\n    // 读取缓冲区中的图片数据，结果写入Pixelmap中。\n    uint8_t source[96];\n    size_t sourceSize = 96;\n    for (int i = 0; i < sourceSize; i++) {\n        source[i] = i + 1;\n    }\n    errCode = OH_PixelmapNative_WritePixels(pixelmap, source, sourceSize);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"ImagePixelmapNativeCTest pixelmapTest OH_PixelmapNative_WritePixels failed, errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n\n    // 创建图片信息实例，并获取图像像素信息。\n    OH_Pixelmap_ImageInfo *imageInfo;\n    OH_PixelmapImageInfo_Create(&imageInfo);\n    errCode = OH_PixelmapNative_GetImageInfo(pixelmap, imageInfo);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"ImagePixelmapNativeCTest pixelmapTest OH_PixelmapNative_GetImageInfo failed, errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n\n    // 获取图片的宽，高，pixel格式，透明度等信息。\n    uint32_t width, height, rowStride;\n    int32_t pixelFormat, alphaType;\n    OH_PixelmapImageInfo_GetWidth(imageInfo, &width);\n    OH_PixelmapImageInfo_GetHeight(imageInfo, &height);\n    OH_PixelmapImageInfo_GetRowStride(imageInfo, &rowStride);\n    OH_PixelmapImageInfo_GetPixelFormat(imageInfo, &pixelFormat);\n    OH_PixelmapImageInfo_GetAlphaType(imageInfo, &alphaType);\n    OH_PixelmapImageInfo_Release(imageInfo);\n    OH_LOG_INFO(LOG_APP, \"ImagePixelmapNativeCTest pixelmapTest GetImageInfo success, width: %{public}d, height: %{public}d, rowStride: %{public}d, pixelFormat: %{public}d, alphaType: %{public}d.\", width, height, rowStride, pixelFormat, alphaType);\n\n    // 设置透明比率来让Pixelmap达到对应的透明效果。\n    errCode = OH_PixelmapNative_Opacity(pixelmap, 0.5);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"ImagePixelmapNativeCTest pixelmapTest OH_PixelmapNative_Opacity failed, errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n\n    // 对图片进行缩放。\n    errCode = OH_PixelmapNative_Scale(pixelmap, 2.0, 1.0);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"ImagePixelmapNativeCTest pixelmapTest OH_PixelmapNative_Scale failed, errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n\n    // 对图片进行位置变换。\n    errCode = OH_PixelmapNative_Translate(pixelmap, 50.0, 10.0);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"ImagePixelmapNativeCTest pixelmapTest OH_PixelmapNative_Translate failed, errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n\n    // 对图片进行旋转。\n    errCode = OH_PixelmapNative_Rotate(pixelmap, 90.0);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"ImagePixelmapNativeCTest pixelmapTest OH_PixelmapNative_Rotate failed, errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n\n    // 对图片进行翻转。\n    errCode = OH_PixelmapNative_Flip(pixelmap, true, true);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"ImagePixelmapNativeCTest pixelmapTest OH_PixelmapNative_Flip failed, errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n\n    // 对图片进行裁剪。\n    Image_Region region;\n    region.x = 100;\n    region.y = 100;\n    region.width = 6;\n    region.height = 4;\n    errCode = OH_PixelmapNative_Crop(pixelmap, &region);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"ImagePixelmapNativeCTest pixelmapTest OH_PixelmapNative_Crop failed, errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n\n    // 释放Pixelmap, InitializationOptions实例。\n    OH_PixelmapNative_Release(pixelmap);\n    OH_PixelmapInitializationOptions_Release(createOpts);\n    return IMAGE_SUCCESS;\n}\n\n// PixelMap预乘/非预乘格式转换示例。\nImage_ErrorCode PixelmapConvertAlphaTypeTest()\n{\n    uint8_t data[96];\n    size_t dataSize = 96;\n    for (int i = 0; i < dataSize; i++) {\n        data[i] = i + 1;\n    }\n\n    // 创建参数结构体实例，并设置参数。\n    OH_Pixelmap_InitializationOptions *createOpts;\n    OH_PixelmapInitializationOptions_Create(&createOpts);\n    OH_PixelmapInitializationOptions_SetWidth(createOpts, 6);\n    OH_PixelmapInitializationOptions_SetHeight(createOpts, 4);\n    OH_PixelmapInitializationOptions_SetSrcPixelFormat(createOpts, PIXEL_FORMAT_RGBA_8888);\n    OH_PixelmapInitializationOptions_SetPixelFormat(createOpts, PIXEL_FORMAT_RGBA_8888);\n    OH_PixelmapInitializationOptions_SetAlphaType(createOpts, PIXELMAP_ALPHA_TYPE_UNPREMULTIPLIED);\n\n    // 创建非预乘格式的位图实例。\n    OH_PixelmapNative *SrcPixelmap = nullptr;\n    Image_ErrorCode errCode = OH_PixelmapNative_CreatePixelmap(data, dataSize, createOpts, &SrcPixelmap);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"PixelmapConvertAlphaTypeTest CreateSrcPixelMap failed, errCode: %{public}d.\", errCode);\n    }\n\n    // 创建预乘格式的位图实例，该DstPixelmap实例将用于保存SrcPixelmap转换AlphaType后的数据。\n    OH_PixelmapNative *DstPixelmap = nullptr;\n    OH_PixelmapInitializationOptions_SetAlphaType(createOpts, PIXELMAP_ALPHA_TYPE_PREMULTIPLIED);\n    errCode = OH_PixelmapNative_CreatePixelmap(data, dataSize, createOpts, &DstPixelmap);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"PixelmapConvertAlphaTypeTest CreateDstPixelMap failed, errCode: %{public}d.\", errCode);\n    }\n\n    // 转换AlphaType，SrcPixelmap的数据将被转换为预乘格式，并保存到DstPixelmap中。\n    errCode = OH_PixelmapNative_ConvertAlphaFormat(SrcPixelmap, DstPixelmap, true);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"PixelmapConvertAlphaTypeTest ConvertAlphaFormat failed, errCode: %{public}d.\", errCode);\n    }\n\n    // 释放Pixelmap，InitializationOptions实例。\n    OH_PixelmapNative_Release(SrcPixelmap);\n    OH_PixelmapNative_Release(DstPixelmap);\n    OH_PixelmapInitializationOptions_Release(createOpts);\n    return errCode;\n}\n"
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