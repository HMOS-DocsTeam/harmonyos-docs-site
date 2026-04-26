"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["233514"], {
409086(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_native_js_objects_image_decoding_native_image_decoding_native_md_8bb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-native-js-objects-image-decoding-native-image-decoding-native-md-8bb.json
var site_docs_image_kit_image_native_js_objects_image_decoding_native_image_decoding_native_md_8bb_namespaceObject = JSON.parse('{"id":"image-kit/image-native-js-objects/image-decoding-native/image-decoding-native","title":"图片解码","description":"当前开发指导使用的接口为Image模块下的C API，可完成图片编解码，图片接收器，处理图像数据等功能。这部分API在API version 11之前发布，在后续的版本不再增加新功能，*不再推荐使用*。","source":"@site/docs/image-kit/image-native-js-objects/image-decoding-native/image-decoding-native.md","sourceDirName":"image-kit/image-native-js-objects/image-decoding-native","slug":"/image-kit/image-native-js-objects/image-decoding-native/","permalink":"/harmonyos-docs-site/image-kit/image-native-js-objects/image-decoding-native/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"图片解码","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-decoding-native","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Image Kit常见崩溃报错问题","permalink":"/harmonyos-docs-site/image-kit/image-faqs/image-common-mistakes/"},"next":{"title":"图片编码","permalink":"/harmonyos-docs-site/image-kit/image-native-js-objects/image-encoding-native/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-native-js-objects/image-decoding-native/image-decoding-native.md


const frontMatter = {
	title: '图片解码',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-decoding-native',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '图片解码';

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
        id: "图片解码",
        children: "图片解码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(642634)/* ["default"] */.A) + "",
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将所支持格式的图片文件解码成PixelMap，以便在应用或系统中进行图片显示或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-arkts-dev/image-editing-arkts/image-transformation",
        children: "图片处理"
      }), "。当前支持的图片文件格式包括JPEG、PNG、GIF、WebP、BMP、SVG、ICO、DNG、HEIC、WBMP23+、HEIFS23+、TIFF23+。部分格式的解码能力依赖于具体的设备硬件，建议在调用前使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-f/arkts-apis-image-f#imagegetimagesourcesupportedformats20",
        children: "image.getImageSourceSupportedFormats20+"
      }), "接口，动态查询当前设备上的解码能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["图片解码相关API的详细介绍请参见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-source-mdk-h/capi-image-source-mdk-h",
        children: "图片解码接口文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加依赖",
      children: "添加依赖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行应用开发之前，开发者需要打开native工程的src/main/cpp/CMakeLists.txt，在target_link_libraries依赖中添加libace_napi.z.so、libpixelmap_ndk.z.so、libimage_source_ndk.z.so、librawfile.z.so以及日志依赖libhilog_ndk.z.so。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so libpixelmap_ndk.z.so libimage_source_ndk.z.so librawfile.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加接口映射",
      children: "添加接口映射"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开src/main/cpp/hello.cpp文件，在Init函数中添加getSyncPixelMap函数接口映射，作用是以同步的方式生成PixelMap，具体代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"getSyncPixelMap\", nullptr, getSyncPixelMap, nullptr, nullptr, nullptr, napi_default, nullptr },\n    };\n\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "js侧调用",
      children: "JS侧调用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开src\\main\\cpp\\types\\libentry\\index.d.ts（其中libentry根据工程名生成），导入如下引用文件："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { image } from '@kit.ImageKit';\nimport { resourceManager } from '@kit.LocalizationKit';\n\n// 同步调用，入参为资源管理器和图片资源名称，返回PixelMap。\nexport const getSyncPixelMap: (resMgr: resourceManager.ResourceManager, src: string) => image.PixelMap;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备图片资源文件，本示例文件名为example.jpg，导入到src\\main\\resources\\rawfile\\ 路径下。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开src\\main\\ets\\pages\\index.ets，导入\"libentry.so（根据工程名生成）\"，调用Native接口，传入JS的资源对象。示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import testNapi from 'libentry.so';\nimport { image } from '@kit.ImageKit';\nimport { common } from '@kit.AbilityKit';\n@Entry\n@Component\nstruct Index {\n  @State pixelMap : PixelMap | undefined = undefined;\n  aboutToAppear() {\n     // 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext\n     let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n     // 调用自定义的getSyncPixelMap接口，获取pixelMap。\n     this.pixelMap = testNapi.getSyncPixelMap(context.resourceManager, \"example.jpg\");\n  }\n\n  build() {\n     Row() {\n        Column() {\n        Image(this.pixelMap)\n           .width(100)\n           .height(100)\n        }\n        .width('100%')\n     }\n     .height('100%')\n  }\n}\n"
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
        children: "// 引入图片框架、raw文件、raw文件管理和日志打印头文件。\n#include <cstdlib>\n#include <cstring>\n#include <multimedia/image_framework/image_source_mdk.h>\n#include <multimedia/image_framework/image_pixel_map_mdk.h>\n#include <rawfile/raw_file.h>\n#include <rawfile/raw_file_manager.h>\n#include <hilog/log.h>\n\nstatic napi_value getSyncPixelMap(napi_env env, napi_callback_info info)\n{\n   size_t argc = 2;\n   napi_value args[2] = {nullptr};\n\n   napi_get_cb_info(env, info, &argc, args , nullptr, nullptr);\n   \n   napi_valuetype srcType;\n   napi_typeof(env, args[0], &srcType);\n\n   // 入参args[0]是资源管理器，用来初始化native层的资源管理器。\n   NativeResourceManager *mNativeResMgr = OH_ResourceManager_InitNativeResourceManager(env, args[0]);\n   \n   size_t strSize;\n   char srcBuf[2048];\n   // 入参args[1]是文件名称。\n   napi_get_value_string_utf8(env, args[1], srcBuf, sizeof(srcBuf), &strSize);\n\n   // 用资源管理器打开Raw文件。\n   RawFile * rawFile = OH_ResourceManager_OpenRawFile(mNativeResMgr, srcBuf);\n   if (rawFile != NULL) {\n      // 获取文件大小，并读取数据。\n      long len = OH_ResourceManager_GetRawFileSize(rawFile);\n      uint8_t * data = static_cast<uint8_t *>(malloc(len));\n      int res = OH_ResourceManager_ReadRawFile(rawFile, data, len);\n\n      OhosImageSource imageSource_c;\n      imageSource_c.buffer = data;\n      imageSource_c.bufferSize = len;\n\n      OhosImageSourceOps ops{};\n      napi_value imageSource;\n      napi_value pixelMap;\n\n      // 用读取到的Raw数据创建ImageSource。\n      int32_t ret = OH_ImageSource_Create(env, &imageSource_c, &ops, &imageSource);\n\n      // 初始化native层的ImageSource。\n      ImageSourceNative * imageSourceNative_c = OH_ImageSource_InitNative(env, imageSource);\n      OhosImageDecodingOps decodingOps{};\n      // 创建pixelMap。\n      OH_ImageSource_CreatePixelMap(imageSourceNative_c, &decodingOps, &pixelMap);\n\n      // 下列方法,为gif等动图格式提供。\n      // napi_value pixelMapList;\n      // OH_ImageSource_CreatePixelMapList(imageSourceNative_c, &decodingOps, &pixelMapList);\n      // OhosImageSourceDelayTimeList list{};\n      // OH_ImageSource_GetDelayTime(imageSourceNative_c, &list);\n      // uint32_t count;\n      // OH_ImageSource_GetFrameCount(imageSourceNative_c, &count);\n\n      OhosImageSourceInfo info{};\n      // 读取图片宽高。\n      OH_ImageSource_GetImageInfo(imageSourceNative_c, 0, &info);\n      OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00, \"[decode]\", \"imageInfo width:%{public}d , height:%{public}d\", info.size.width, info.size.height);\n      \n      // 读取ImageSource的ImageWidth配置参数并打印日志。\n      OhosImageSourceProperty target;\n      char exifKey_c[] = \"ImageWidth\";\n      target.size = strlen(exifKey_c);\n      target.value = exifKey_c;\n\n      OhosImageSourceProperty response{};\n      response.size = 20;\n      response.value = static_cast<char *>(malloc(20));\n      OH_ImageSource_GetImageProperty(imageSourceNative_c, &target, &response);\n      OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00, \"[decode]\", \"ImageProperty width after modify:%{public}s\", response.value);\n\n      // 处理完毕，释放native层资源。\n      OH_ImageSource_Release(imageSourceNative_c);\n      OH_ResourceManager_CloseRawFile(rawFile);\n      return pixelMap;\n   }\n   OH_ResourceManager_ReleaseNativeResourceManager(mNativeResMgr);\n   return nullptr;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片框架支持增量式解码，使用方法如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 引入图片框架、raw文件、raw文件管理和日志打印头文件。\n#include <cstdlib>\n#include <cstring>\n#include <multimedia/image_framework/image_source_mdk.h>\n#include <multimedia/image_framework/image_pixel_map_mdk.h>\n#include <rawfile/raw_file.h>\n#include <rawfile/raw_file_manager.h>\n#include <hilog/log.h>\n\nstatic napi_value getSyncPixelMap(napi_env env, napi_callback_info info)\n{\n   size_t argc = 2;\n   napi_value args[2] = {nullptr};\n\n   napi_get_cb_info(env, info, &argc, args , nullptr, nullptr);\n   \n   napi_valuetype srcType;\n   napi_typeof(env, args[0], &srcType);\n\n   // 入参args[0]是资源管理器，用来初始化native层的资源管理器。\n   NativeResourceManager * mNativeResMgr = OH_ResourceManager_InitNativeResourceManager(env, args[0]);\n   \n   size_t strSize;\n   char srcBuf[2048];\n   // 入参args[1]是文件名称。\n   napi_get_value_string_utf8(env, args[1], srcBuf, sizeof(srcBuf), &strSize);\n\n   // 用资源管理器打开Raw文件。\n   RawFile * rawFile = OH_ResourceManager_OpenRawFile(mNativeResMgr, srcBuf);\n   if (rawFile != NULL) {\n      // 获取文件大小，若大于2048字节，则增量式解码，否则直接全部解码。\n      long len = OH_ResourceManager_GetRawFileSize(rawFile);\n      if (len > 2048) {\n         uint8_t * data = static_cast<uint8_t *>(malloc(len));\n         // 读取文件全部数据。\n         int res = OH_ResourceManager_ReadRawFile(rawFile, data, len);\n         \n         uint8_t * holderdata = static_cast<uint8_t *>(malloc(len));\n\n         OhosImageSource imageSource_c;\n         // imageSource_c的buffer分配了空间，但是数据是空的。\n         imageSource_c.buffer = holderdata;\n         imageSource_c.bufferSize = len;\n         OhosImageSourceOps ops{};\n         napi_value imageSource;\n         // 初始化增量ImageSource。\n         OH_ImageSource_CreateIncremental(env, &imageSource_c, &ops, &imageSource);\n\n         // 初始化native层的ImageSource。\n         ImageSourceNative * imageSourceNative_c = OH_ImageSource_InitNative(env, imageSource);\n\n         // 以下模拟分片加载场景，分两次加载分片。第一次加载2048字节，第二次加载剩余的数据。\n         OhosImageSourceUpdateData firstData{};\n         firstData.buffer = data; // 图片数据。\n         firstData.bufferSize = len; // 图片数据总大小。\n         firstData.isCompleted = false;\n         firstData.offset = 0; // 第一次重头开始加载。\n         firstData.updateLength = 2048; // 第一次加载了2048字节。\n         OH_ImageSource_UpdateData(imageSourceNative_c, &firstData);\n\n         OhosImageSourceUpdateData secondData{};\n         secondData.buffer = data;\n         secondData.bufferSize = len;\n         secondData.isCompleted = true; // 最后一次加载，要标记加载完成。\n         secondData.offset = 2048; // 已经加载过2048字节了，第二次偏移已经加载的量。\n         secondData.updateLength = len - 2048; // 第二次加载剩余的数据。\n         OH_ImageSource_UpdateData(imageSourceNative_c, &secondData);\n\n         napi_value pixelMap;\n         OhosImageDecodingOps decodingOps{};\n         decodingOps.index = 0;\n         // 创建pixelMap。\n         OH_ImageSource_CreatePixelMap(imageSourceNative_c, &decodingOps, &pixelMap);\n\n         // 处理完毕，释放native层资源。\n         OH_ImageSource_Release(imageSourceNative_c);\n         OH_ResourceManager_CloseRawFile(rawFile);\n         return pixelMap;\n      }\n      // 读取Raw文件全部数据。\n      uint8_t * data = static_cast<uint8_t *>(malloc(len));\n      int res = OH_ResourceManager_ReadRawFile(rawFile, data, len);\n\n      OhosImageSource imageSource_c;\n      imageSource_c.buffer = data;\n      imageSource_c.bufferSize = len;\n\n      OhosImageSourceOps ops{};\n      napi_value imageSource;\n      napi_value pixelMap;\n\n      // 用读取到的Raw数据创建ImageSource。\n      int32_t ret = OH_ImageSource_Create(env, &imageSource_c, &ops, &imageSource);\n\n      // 初始化native层的ImageSource。\n      ImageSourceNative * imageSourceNative_c = OH_ImageSource_InitNative(env, imageSource);\n      OhosImageDecodingOps decodingOps{};\n\n      // 创建pixelMap。\n      OH_ImageSource_CreatePixelMap(imageSourceNative_c, &decodingOps, &pixelMap);\n\n      // 处理完毕，释放native层资源。\n      OH_ImageSource_Release(imageSourceNative_c);\n      OH_ResourceManager_CloseRawFile(rawFile);\n      return pixelMap;\n   }\n   OH_ResourceManager_ReleaseNativeResourceManager(mNativeResMgr);\n   return nullptr;\n}\n"
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
642634(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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