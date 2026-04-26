"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["201421"], {
261405(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_native_image_encoding_c_image_packer_c_image_packer_c_md_a90_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-native-image-encoding-c-image-packer-c-image-packer-c-md-a90.json
var site_docs_image_kit_image_native_image_encoding_c_image_packer_c_image_packer_c_md_a90_namespaceObject = JSON.parse('{"id":"image-kit/image-native/image-encoding-c/image-packer-c/image-packer-c","title":"使用Image_NativeModule完成图片编码","description":"图像编码类，用于创建以及释放ImagePacker实例。","source":"@site/docs/image-kit/image-native/image-encoding-c/image-packer-c/image-packer-c.md","sourceDirName":"image-kit/image-native/image-encoding-c/image-packer-c","slug":"/image-kit/image-native/image-encoding-c/image-packer-c/","permalink":"/harmonyos-docs-site/image-kit/image-native/image-encoding-c/image-packer-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用Image_NativeModule完成图片编码","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-packer-c","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"图片解码内存优化(C/C++)","permalink":"/harmonyos-docs-site/image-kit/image-native/image-decoding-c/image-allocator-type-c/"},"next":{"title":"使用Image_NativeModule完成多图对象编码","permalink":"/harmonyos-docs-site/image-kit/image-native/image-encoding-c/image-packer-picture-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-native/image-encoding-c/image-packer-c/image-packer-c.md


const frontMatter = {
	title: '使用Image_NativeModule完成图片编码',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-packer-c',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Image_NativeModule完成图片编码';

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
        id: "使用image_nativemodule完成图片编码",
        children: "使用Image_NativeModule完成图片编码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像编码类，用于创建以及释放ImagePacker实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加链接库",
      children: "添加链接库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行应用开发之前，开发者需要打开native工程的src/main/cpp/CMakeLists.txt，在target_link_libraries依赖中添加libimage_packer.so 以及日志依赖libhilog_ndk.z.so。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libhilog_ndk.z.so libimage_source.so libimage_packer.so libpixelmap.so)\n"
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
      children: "在Deveco Studio新建Native C++应用，默认生成的项目中包含index.ets文件，在entry\\src\\main\\cpp目录下会自动生成一个cpp文件（hello.cpp或napi_init.cpp，本示例以hello.cpp文件名为例）。在hello.cpp中实现C API接口调用逻辑，示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "编码接口使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(945871)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据MIME标准，标准编码格式为image/jpeg。当使用image编码时，编码参数中的编码格式image_MimeType设置为image/jpeg，image编码后的文件扩展名可设为.jpg或.jpeg，可在支持image/jpeg解码的平台上使用。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["部分接口（如：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/image-api/image-c/image-headerfile/capi-image-packer-native-h/capi-image-packer-native-h#oh_imagepackernative_getsupportedformats",
          children: "OH_ImagePackerNative_GetSupportedFormats"
        }), "）在API version 20以后才支持，需要开发者在进行开发时选择合适的API版本。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <string>\n#include <hilog/log.h>\n#include <multimedia/image_framework/image/image_source_native.h>\n#include \"napi/native_api.h\"\n#include <multimedia/image_framework/image/image_common.h>\n#include <multimedia/image_framework/image/pixelmap_native.h>\n#include <set>\n#include <multimedia/image_framework/image/image_packer_native.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "日志宏定义可参考下述代码按实际需求自行修改。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#undef LOG_DOMAIN\n#undef LOG_TAG\n#define LOG_DOMAIN 0x3200\n#define LOG_TAG \"IMAGE_SAMPLE\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义ImageSourceNative类。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class ImageSourceNative {\npublic:\n    OH_ImageSource_Info *imageInfo;\n    OH_ImageSourceNative *source = nullptr;\n    OH_PixelmapNative *resPixMap = nullptr;\n    OH_Pixelmap_ImageInfo *pixelmapImageInfo = nullptr;\n    uint32_t frameCnt = 0;\n    ImageSourceNative() {}\n    ~ImageSourceNative() {}\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建ImageSourceNative的一个实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static ImageSourceNative *g_thisImageSource = new ImageSourceNative();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义一个全局变量用来记录编码所支持的格式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static std::set<std::string> g_encodeSupportedFormats;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建GetJsResult函数处理napi返回值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 处理napi返回值。\nnapi_value GetJsResult(napi_env env, int result)\n{\n    napi_value resultNapi = nullptr;\n    napi_create_int32(env, result, &resultNapi);\n    return resultNapi;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建ImagePacker实例后，指定编码参数，将ImageSource或PixelMap编码至文件或者缓冲区。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取编码能力范围。\nImage_ErrorCode GetEncodeSupportedFormats()\n{\n    Image_MimeType* mimeType = nullptr;\n    size_t length = 0;\n    Image_ErrorCode errCode = OH_ImagePackerNative_GetSupportedFormats(&mimeType, &length);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"OH_ImagePackerNative_GetSupportedFormats failed,\"\n                              \"errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n    for (size_t count = 0; count < length; count++) {\n        if (mimeType[count].data != nullptr) {\n            g_encodeSupportedFormats.insert(std::string(mimeType[count].data));\n            OH_LOG_INFO(LOG_APP, \"Encode supportedFormats: %{public}s\", mimeType[count].data);\n        }\n    }\n    return IMAGE_SUCCESS;\n}\n\nImage_MimeType GetMimeTypeIfEncodable(const char *format)\n{\n    auto it = g_encodeSupportedFormats.find(format);\n    if (it == g_encodeSupportedFormats.end()) {\n        return {const_cast<char *>(\"\"), 0};\n    }\n    return {const_cast<char *>(format), strlen(format)};\n}\n\nImage_ErrorCode packToFileFromImageSourceTest(int fd, OH_ImageSourceNative* imageSource)\n{\n    // 创建ImagePacker实例。\n    OH_ImagePackerNative *testPacker = nullptr;\n    Image_ErrorCode errCode = OH_ImagePackerNative_Create(&testPacker);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"packToFileFromImageSourceTest OH_ImagePackerNative_Create failed,\"\n                              \"errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n    \n    // 获取编码能力范围。\n    errCode = GetEncodeSupportedFormats();\n    if (errCode != IMAGE_SUCCESS) {\n        OH_ImagePackerNative_Release(testPacker);\n        return errCode;\n    }\n    \n    // 指定编码参数，将ImageSource直接编码进文件。\n    OH_PackingOptions *option = nullptr;\n    OH_PackingOptions_Create(&option);\n    Image_MimeType image_MimeType = GetMimeTypeIfEncodable(MIME_TYPE_JPEG);\n    if (image_MimeType.data == nullptr || image_MimeType.size == 0) {\n        OH_LOG_ERROR(LOG_APP, \"packToFileFromImageSourceTest GetMimeTypeIfEncodable failed,\"\n                     \"format can't support encode.\");\n        return IMAGE_BAD_PARAMETER;\n    }\n    OH_PackingOptions_SetMimeType(option, &image_MimeType);\n    // 当设备支持HDR编码，资源本身为HDR图且图片资源的格式为jpeg时，编码产物才能为HDR内容。\n    OH_PackingOptions_SetDesiredDynamicRange(option, IMAGE_PACKER_DYNAMIC_RANGE_AUTO);\n    // 设置编码质量，quality默认为0，建议quality的值不低于80\n    uint32_t quality = 90;\n    OH_PackingOptions_SetQuality(option, quality);\n    errCode = OH_ImagePackerNative_PackToFileFromImageSource(testPacker, option, imageSource, fd);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"packToFileFromImageSourceTest OH_ImagePackerNative_PackToFileFromImageSource failed,\"\n                              \"errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n\n    // 释放ImagePacker实例。\n    errCode = OH_ImagePackerNative_Release(testPacker);\n    testPacker = nullptr;\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"packToFileFromImageSourceTest OH_ImagePackerNative_Release failed,\"\n                     \"errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n    \n    // 释放PackingOptions实例。\n    errCode = OH_PackingOptions_Release(option);\n    option = nullptr;\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"packToFileFromImageSourceTest OH_PackingOptions_Release failed,\"\n                     \"errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n    return IMAGE_SUCCESS;\n}\n\nImage_ErrorCode packToFileFromPixelmapTest(int fd, OH_PixelmapNative *pixelmap)\n{\n    // 创建ImagePacker实例。\n    OH_ImagePackerNative *testPacker = nullptr;\n    Image_ErrorCode errCode = OH_ImagePackerNative_Create(&testPacker);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"packToFileFromPixelmapTest CreatePacker OH_ImagePackerNative_Create failed,\"\n                     \"errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n\n    // 指定编码参数，将PixelMap直接编码进文件。\n    OH_PackingOptions *option = nullptr;\n    OH_PackingOptions_Create(&option);\n    char type[] = \"image/jpeg\";\n    Image_MimeType image_MimeType = {type, strlen(type)};\n    OH_PackingOptions_SetMimeType(option, &image_MimeType);\n    // 设置编码质量，quality默认为0，建议quality的值不低于80\n    uint32_t quality = 90;\n    OH_PackingOptions_SetQuality(option, quality);\n    errCode = OH_ImagePackerNative_PackToFileFromPixelmap(testPacker, option, pixelmap, fd);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"packToFileFromPixelmapTest OH_ImagePackerNative_PackToFileFromPixelmap failed,\"\n                              \"errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n\n    // 释放ImagePacker实例。\n    errCode = OH_ImagePackerNative_Release(testPacker);\n    testPacker = nullptr;\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"packToFileFromPixelmapTest ReleasePacker OH_ImagePackerNative_Release failed,\"\n                              \"errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n    \n    // 释放PackingOptions实例。\n    errCode = OH_PackingOptions_Release(option);\n    option = nullptr;\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"packToFileFromPixelmapTest OH_PackingOptions_Release failed,\"\n                              \"errCode: %{public}d.\", errCode);\n        return errCode;\n    }\n    \n    return IMAGE_SUCCESS;\n}\n\nnapi_value PackToFileFromImageSourceTestJs(napi_env env, napi_callback_info info)\n{\n    napi_value argv[1] = {0};\n    size_t argc = 1;\n    if (napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr) != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \"PackToFileFromImageSourceTestJs napi_get_cb_info failed.\");\n        return nullptr;\n    }\n    \n    int fd;\n    napi_get_value_int32(env, argv[0], &fd);\n    \n    Image_ErrorCode errCode = packToFileFromImageSourceTest(fd, g_thisImageSource->source);\n    if (errCode == IMAGE_SUCCESS) {\n        OH_LOG_INFO(LOG_APP, \"ImagePackerNativeCTest PackToFileFromImageSourceTestJs successfully.\");\n    }\n    return GetJsResult(env, errCode);\n}\n\nnapi_value PackToFileFromPixelmapTestJs(napi_env env, napi_callback_info info)\n{\n    napi_value argv[1] = {0};\n    size_t argc = 1;\n    if (napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr) != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \"PackToFileFromImageSourceTestJs napi_get_cb_info failed.\");\n        return nullptr;\n    }\n    \n    int fd;\n    napi_get_value_int32(env, argv[0], &fd);\n    \n    Image_ErrorCode errCode = packToFileFromPixelmapTest(fd, g_thisImageSource->resPixMap);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"packToFileFromPixelmapTest failed,\"\n                     \"errCode: %{public}d.\", errCode);\n        return GetJsResult(env, errCode);\n    } else {\n        OH_LOG_INFO(LOG_APP, \"PackToFileFromPixelmapTestJs successfully.\");\n    }\n    return GetJsResult(env, errCode);\n}\n"
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
945871(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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