"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["629641"], {
786879(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_native_image_encoding_c_image_packer_picture_c_image_packer_picture_c_md_8f3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-native-image-encoding-c-image-packer-picture-c-image-packer-picture-c-md-8f3.json
var site_docs_image_kit_image_native_image_encoding_c_image_packer_picture_c_image_packer_picture_c_md_8f3_namespaceObject = JSON.parse('{"id":"image-kit/image-native/image-encoding-c/image-packer-picture-c/image-packer-picture-c","title":"使用Image_NativeModule完成多图对象编码","description":"图像编码类，用于创建以及释放ImagePacker实例，并编码多图对象。","source":"@site/docs/image-kit/image-native/image-encoding-c/image-packer-picture-c/image-packer-picture-c.md","sourceDirName":"image-kit/image-native/image-encoding-c/image-packer-picture-c","slug":"/image-kit/image-native/image-encoding-c/image-packer-picture-c/","permalink":"/harmonyos-docs-site/image-kit/image-native/image-encoding-c/image-packer-picture-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用Image_NativeModule完成多图对象编码","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-packer-picture-c","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Image_NativeModule完成图片编码","permalink":"/harmonyos-docs-site/image-kit/image-native/image-encoding-c/image-packer-c/"},"next":{"title":"使用Image_NativeModule完成位图操作","permalink":"/harmonyos-docs-site/image-kit/image-native/image-editing-c/pixelmap-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-native/image-encoding-c/image-packer-picture-c/image-packer-picture-c.md


const frontMatter = {
	title: '使用Image_NativeModule完成多图对象编码',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-packer-picture-c',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Image_NativeModule完成多图对象编码';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用image_nativemodule完成多图对象编码",
        children: "使用Image_NativeModule完成多图对象编码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图像编码类，用于创建以及释放ImagePacker实例，并编码多图对象。"
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
      children: "在DevEco Studio新建Native C++应用，默认生成的项目中包含index.ets文件，在entry\\src\\main\\cpp目录下会自动生成一个cpp文件（hello.cpp或napi_init.cpp，本示例以hello.cpp文件名为例）。在hello.cpp中实现C API接口调用逻辑，示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "编码接口使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(255298)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据MIME标准，标准编码格式为image/jpeg。当使用image编码时，编码参数中的编码格式image_MimeType设置为image/jpeg，image编码后的文件扩展名可设为.jpg或.jpeg，可在支持image/jpeg解码的平台上使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分接口在API version 20以后才支持，需要开发者在进行开发时选择合适的API版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <hilog/log.h>\n#include <multimedia/image_framework/image/image_native.h>\n#include <multimedia/image_framework/image/image_packer_native.h>\n#include <multimedia/image_framework/image/image_source_native.h>\n#include <multimedia/image_framework/image/picture_native.h>\n#include <multimedia/image_framework/image/pixelmap_native.h>\n"
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
          children: "定义用于图像处理的常量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#define AUTO 0\n#define SDR 1\nconst int MAX_SIZE = 1024;\nconst int MAX_FORMAT_LENGTH = 20;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义ImagePictureNative类。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class ImagePictureNative {\npublic:\n    Image_ErrorCode errorCode = IMAGE_SUCCESS;\n    OH_DecodingOptionsForPicture *options = nullptr;\n    OH_ImagePackerNative *imagePacker = nullptr;\n    OH_PackingOptions *packerOptions = nullptr;\n    OH_PictureNative *picture = nullptr;\n    OH_ImageSourceNative *source = nullptr;\n    ImagePictureNative() {}\n    ~ImagePictureNative() {}\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建ImagePictureNative的一个实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static ImagePictureNative *g_thisPicture = new ImagePictureNative();\n"
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
          children: "创建ImagePacker实例，指定编码参数后，将Picture多图对象编码至文件或缓冲区。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置编码参数。\nvoid SetPackOptions(OH_PackingOptions *packerOptions,\n                    Image_MimeType format,\n                    uint32_t quality,\n                    bool needsPackProperties,\n                    int32_t desiredDynamicRange)\n{\n    OH_PackingOptions_SetMimeType(packerOptions, &format);\n    OH_PackingOptions_SetQuality(packerOptions, quality);\n    OH_PackingOptions_SetNeedsPackProperties(packerOptions, needsPackProperties);\n    OH_PackingOptions_SetDesiredDynamicRange(packerOptions, desiredDynamicRange);\n}\n\n// PackToData。\nnapi_value PackToDataFromPicture(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    if (napi_get_cb_info(env, info, &argc, args, nullptr, nullptr) != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \"napi_get_cb_info failed!\");\n        return GetJsResult(env, g_thisPicture->errorCode);\n    }\n    \n    size_t outDataSize = 10000 * 10000;\n    uint8_t *outData = new uint8_t[outDataSize];\n\n    if (g_thisPicture->packerOptions == nullptr) {\n        g_thisPicture->errorCode = OH_PackingOptions_Create(&g_thisPicture->packerOptions);\n    }\n    if (g_thisPicture->imagePacker == nullptr) {\n        g_thisPicture->errorCode = OH_ImagePackerNative_Create(&g_thisPicture->imagePacker);\n    }\n    \n    char strFormat[MAX_FORMAT_LENGTH];\n    size_t strFormatSize;\n    napi_get_value_string_utf8(env, args[0], strFormat, MAX_FORMAT_LENGTH, &strFormatSize);\n    OH_LOG_DEBUG(LOG_APP, \"PackToDataFromPicture format: %{public}s\", strFormat);\n\n    Image_MimeType format;\n    format.size = strFormatSize;\n    format.data = const_cast<char *>(strFormat);\n    uint32_t quality = 95;\n    bool needsPackProperties = true;\n    int32_t desiredDynamicRange = AUTO;\n    SetPackOptions(g_thisPicture->packerOptions, format, quality, needsPackProperties, desiredDynamicRange);\n    // 确保picture对象已被创建。\n    g_thisPicture->errorCode = OH_ImagePackerNative_PackToDataFromPicture(\n        g_thisPicture->imagePacker, g_thisPicture->packerOptions, g_thisPicture->picture, outData, &outDataSize);\n    \n    // 释放imagePacker和packerOptions。\n    OH_PackingOptions_Release(g_thisPicture->packerOptions);\n    g_thisPicture->packerOptions = nullptr;\n    OH_ImagePackerNative_Release(g_thisPicture->imagePacker);\n    g_thisPicture->imagePacker = nullptr;\n    \n    if (g_thisPicture->errorCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"OH_ImagePackerNative_PackToDataFromPicture failed, errCode: %{public}d.\",\n                     g_thisPicture->errorCode);\n        delete[] outData;\n        return GetJsResult(env, g_thisPicture->errorCode);\n    } else {\n        OH_LOG_DEBUG(LOG_APP, \"OH_ImagePackerNative_PackToDataFromPicture success !\");\n    }\n    delete[] outData;\n    return GetJsResult(env, g_thisPicture->errorCode);\n}\n\n// PackToFile。\nnapi_value PackToFileFromPicture(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    if (napi_get_cb_info(env, info, &argc, args, nullptr, nullptr) != napi_ok) {\n    OH_LOG_ERROR(LOG_APP, \"napi_get_cb_info failed!\");\n        return GetJsResult(env, g_thisPicture->errorCode);\n    }\n    uint32_t fd = 0;\n    napi_get_value_uint32(env, args[0], &fd);\n\n    if (g_thisPicture->packerOptions == nullptr) {\n        g_thisPicture->errorCode = OH_PackingOptions_Create(&g_thisPicture->packerOptions);\n    }\n    if (g_thisPicture->imagePacker == nullptr) {\n        g_thisPicture->errorCode = OH_ImagePackerNative_Create(&g_thisPicture->imagePacker);\n    }\n    \n    char strFormat[MAX_FORMAT_LENGTH];\n    size_t strFormatSize;\n    napi_get_value_string_utf8(env, args[1], strFormat, MAX_FORMAT_LENGTH, &strFormatSize);\n    OH_LOG_INFO(LOG_APP, \"PackToFileFromPicture format: %{public}s\", strFormat);\n\n    Image_MimeType format;\n    format.size = strFormatSize;\n    format.data = const_cast<char *>(strFormat);\n    uint32_t quality = 95;\n    bool needsPackProperties = false;\n    int32_t desiredDynamicRange = SDR;\n    SetPackOptions(g_thisPicture->packerOptions, format, quality, needsPackProperties, desiredDynamicRange);\n    // 确保picture对象已被创建。\n    g_thisPicture->errorCode = OH_ImagePackerNative_PackToFileFromPicture(\n        g_thisPicture->imagePacker, g_thisPicture->packerOptions, g_thisPicture->picture, fd);\n    \n    // 释放imagePacker和packerOptions。\n    OH_PackingOptions_Release(g_thisPicture->packerOptions);\n    g_thisPicture->packerOptions = nullptr;\n    OH_ImagePackerNative_Release(g_thisPicture->imagePacker);\n    g_thisPicture->imagePacker = nullptr;\n    \n    if (g_thisPicture->errorCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"OH_ImagePackerNative_PackToFileFromPicture failed,\"\n                     \"errCode: %{public}d.\", g_thisPicture->errorCode);\n        return GetJsResult(env, g_thisPicture->errorCode);\n    } else {\n        OH_LOG_DEBUG(LOG_APP, \"OH_ImagePackerNative_PackToFileFromPicture success !\");\n    }\n\n    return GetJsResult(env, g_thisPicture->errorCode);\n}\n"
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
255298(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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