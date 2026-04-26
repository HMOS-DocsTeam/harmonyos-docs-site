"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["860179"], {
965063(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_native_image_decoding_c_image_source_c_image_source_c_md_bb6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-native-image-decoding-c-image-source-c-image-source-c-md-bb6.json
var site_docs_image_kit_image_native_image_decoding_c_image_source_c_image_source_c_md_bb6_namespaceObject = JSON.parse('{"id":"image-kit/image-native/image-decoding-c/image-source-c/image-source-c","title":"使用Image_NativeModule完成图片解码","description":"创建ImageSource，获取位图的宽、高信息，以及释放ImageSource实例。","source":"@site/docs/image-kit/image-native/image-decoding-c/image-source-c/image-source-c.md","sourceDirName":"image-kit/image-native/image-decoding-c/image-source-c","slug":"/image-kit/image-native/image-decoding-c/image-source-c/","permalink":"/harmonyos-docs-site/image-kit/image-native/image-decoding-c/image-source-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用Image_NativeModule完成图片解码","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-source-c","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用ImageReceiver完成图片接收","permalink":"/harmonyos-docs-site/image-kit/image-arkts-dev/image-receiving-arkts/image-receiver/"},"next":{"title":"使用Image_NativeModule完成多图对象解码","permalink":"/harmonyos-docs-site/image-kit/image-native/image-decoding-c/image-source-picture-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-native/image-decoding-c/image-source-c/image-source-c.md


const frontMatter = {
	title: '使用Image_NativeModule完成图片解码',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-source-c',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Image_NativeModule完成图片解码';

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
        id: "使用image_nativemodule完成图片解码",
        children: "使用Image_NativeModule完成图片解码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建ImageSource，获取位图的宽、高信息，以及释放ImageSource实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始支持对部分专业相机格式图片的预览图解码，具体格式包括：CR2、CR3、ARW、NEF、RAF、NRW、ORF、RW2、PEF、SRW。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加链接库",
      children: "添加链接库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行应用开发之前，开发者需要打开native工程的src/main/cpp/CMakeLists.txt，在target_link_libraries依赖中添加libimage_source.so、libpixelmap.so以及日志功能依赖的libhilog_ndk.z.so。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libhilog_ndk.z.so libimage_source.so libpixelmap.so)\n"
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
          children: "解码接口使用示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(438200)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["部分接口（如：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-headerfile/capi-image-source-native-h/capi-image-source-native-h#oh_imagesourcenative_getsupportedformats",
        children: "OH_ImageSourceNative_GetSupportedFormats"
      }), "）在API version 20以后才支持，需要开发者在进行开发时选择合适的API版本。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <string>\n#include <hilog/log.h>\n#include <multimedia/image_framework/image/image_source_native.h>\n#include \"napi/native_api.h\"\n#include <multimedia/image_framework/image/image_common.h>\n#include <multimedia/image_framework/image/pixelmap_native.h>\n"
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
          children: "创建GetJsResult函数处理napi返回值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 处理napi返回值。\nnapi_value GetJsResult(napi_env env, int result)\n{\n    napi_value resultNapi = nullptr;\n    napi_create_int32(env, result, &resultNapi);\n    return resultNapi;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "常量定义。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const int MAX_STRING_LENGTH = 1024;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建ImageSource实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 返回ErrorCode。\nnapi_value ReturnErrorCode(napi_env env, Image_ErrorCode errCode, std::string funcName)\n{\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"%{public}s failed, errCode: %{public}d.\", funcName.c_str(), errCode);\n        return GetJsResult(env, errCode);\n    }\n    return GetJsResult(env, errCode);\n}\n\n// 获取解码能力范围。\nnapi_value GetSupportedFormats(napi_env env, napi_callback_info info)\n{\n    Image_MimeType* mimeType = nullptr;\n    size_t length = 10;\n    Image_ErrorCode errCode = OH_ImageSourceNative_GetSupportedFormats(&mimeType, &length);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"OH_ImageSourceNative_GetSupportedFormats failed, \"\n                     \"errCode: %{public}d.\", errCode);\n        return GetJsResult(env, errCode);\n    }\n    for (size_t count = 0; count < length; count++) {\n        OH_LOG_INFO(LOG_APP, \"Decode supportedFormats: %{public}s\", mimeType[count].data);\n    }\n    return GetJsResult(env, errCode);\n}\n\n// 创建ImageSource实例。\nnapi_value CreateImageSource(napi_env env, napi_callback_info info)\n{\n    napi_value argValue[1] = {nullptr};\n    size_t argCount = 1;\n    if (napi_get_cb_info(env, info, &argCount, argValue, nullptr, nullptr) != napi_ok || argCount < 1 ||\n        argValue[0] == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"CreateImageSource napi_get_cb_info failed!\");\n        return GetJsResult(env, IMAGE_BAD_PARAMETER);\n    }\n\n    char name[MAX_STRING_LENGTH];\n    size_t nameSize = MAX_STRING_LENGTH;\n    napi_get_value_string_utf8(env, argValue[0], name, MAX_STRING_LENGTH, &nameSize);\n\n    Image_ErrorCode errCode = OH_ImageSourceNative_CreateFromUri(name, nameSize, &g_thisImageSource->source);\n    return ReturnErrorCode(env, errCode, \"OH_ImageSourceNative_CreateFromUri\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在创建ImageSource实例后，进行指定属性值的获取和修改、通过解码参数创建PixelMap对象、获取图像帧数等操作。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "创建PixelMap对象。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 通过图片解码参数创建PixelMap对象。\nnapi_value CreatePixelMap(napi_env env, napi_callback_info info)\n{\n    // ops参数支持传入nullptr, 当不需要设置解码参数时，不用创建。\n    OH_DecodingOptions *ops = nullptr;\n    OH_DecodingOptions_Create(&ops);\n    // 设置为AUTO会根据图片资源格式和设备支持情况进行解码，如果图片资源为HDR资源且设备支持HDR解码则会解码为HDR的pixelmap。\n    OH_DecodingOptions_SetDesiredDynamicRange(ops, IMAGE_DYNAMIC_RANGE_AUTO);\n    \n    OH_PixelmapNative_Release(g_thisImageSource->resPixMap);\n    g_thisImageSource->resPixMap = nullptr;\n    \n    Image_ErrorCode errCode = OH_ImageSourceNative_CreatePixelmap(g_thisImageSource->source,\n                                                                  ops, &g_thisImageSource->resPixMap);\n    OH_DecodingOptions_Release(ops);\n    ops = nullptr;\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"OH_ImageSourceNative_CreatePixelmap failed, errCode: %{public}d.\", errCode);\n        return GetJsResult(env, errCode);\n    }\n\n    // 判断pixelmap是否为HDR内容。\n    OH_PixelmapImageInfo_Create(&g_thisImageSource->pixelmapImageInfo);\n    OH_PixelmapNative_GetImageInfo(g_thisImageSource->resPixMap, g_thisImageSource->pixelmapImageInfo);\n    bool pixelmapIsHdr;\n    OH_PixelmapImageInfo_GetDynamicRange(g_thisImageSource->pixelmapImageInfo, &pixelmapIsHdr);\n    if (pixelmapIsHdr) {\n        OH_LOG_INFO(LOG_APP, \"The pixelMap's dynamicRange is HDR.\");\n    }\n    OH_PixelmapImageInfo_Release(g_thisImageSource->pixelmapImageInfo);\n    g_thisImageSource->pixelmapImageInfo = nullptr;\n    return GetJsResult(env, errCode);\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "创建定义图片信息的结构体对象，并获取图片信息。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 创建定义图片信息的结构体对象，并获取图片信息。\nnapi_value GetImageInfo(napi_env env, napi_callback_info info)\n{\n    OH_ImageSourceInfo_Create(&g_thisImageSource->imageInfo);\n    Image_ErrorCode errCode = OH_ImageSourceNative_GetImageInfo(g_thisImageSource->source,\n                                                                0, g_thisImageSource->imageInfo);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"OH_ImageSourceInfo_Create failed, errCode: %{public}d.\", errCode);\n        return GetJsResult(env, errCode);\n    }\n    \n    uint32_t width;\n    uint32_t height;\n    OH_ImageSourceInfo_GetWidth(g_thisImageSource->imageInfo, &width);\n    OH_ImageSourceInfo_GetHeight(g_thisImageSource->imageInfo, &height);\n    OH_LOG_INFO(LOG_APP, \"OH_ImageSourceNative_GetImageInfo success,\"\n               \"width: %{public}d, height: %{public}d.\", width, height);\n    OH_ImageSourceInfo_Release(g_thisImageSource->imageInfo);\n    g_thisImageSource->imageInfo = nullptr;\n    return GetJsResult(env, width); // 返回获取到info信息的width。\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "读取、编辑Exif信息。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 获取指定property的value值。\nnapi_value GetImageProperty(napi_env env, napi_callback_info info)\n{\n    napi_value argValue[1] = {nullptr};\n    size_t argCount = 1;\n    if (napi_get_cb_info(env, info, &argCount, argValue, nullptr, nullptr) != napi_ok || argCount < 1 ||\n        argValue[0] == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"GetImageProperty napi_get_cb_info failed!\");\n        return GetJsResult(env, IMAGE_BAD_PARAMETER);\n    }\n    // 修改指定属性键的值。\n    char key[MAX_STRING_LENGTH];\n    size_t keySize = MAX_STRING_LENGTH;\n    napi_get_value_string_utf8(env, argValue[0], (char *)key, sizeof(key), &keySize);\n    Image_String getKey;\n    getKey.data = key;\n    getKey.size = keySize;\n    Image_String getValue;\n    OH_LOG_INFO(LOG_APP, \"OH_ImageSourceNative_GetImageProperty key: %{public}s.\", getKey.data);\n    Image_ErrorCode errCode = OH_ImageSourceNative_GetImagePropertyWithNull(g_thisImageSource->source,\n                                                                            &getKey, &getValue);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"OH_ImageSourceNative_GetImageProperty failed, errCode: %{public}d.\", errCode);\n        return GetJsResult(env, errCode);\n    }\n    napi_value resultNapi = nullptr;\n    napi_create_string_utf8(env, getValue.data, getValue.size, &resultNapi);\n    free(getValue.data);\n    getValue.data = nullptr;\n    return resultNapi;\n}\n\n// 修改指定property的value值。\nnapi_value ModifyImageProperty(napi_env env, napi_callback_info info)\n{\n    napi_value argValue[2] = {nullptr};\n    size_t argCount = 2;\n    const size_t minCount = 2;\n    if (napi_get_cb_info(env, info, &argCount, argValue, nullptr, nullptr) != napi_ok || argCount < minCount ||\n        argValue[0] == nullptr || argValue[1] == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"ModifyImageProperty napi_get_cb_info failed!\");\n        return GetJsResult(env, IMAGE_BAD_PARAMETER);\n    }\n\n    // 获取要修改的key值。\n    char key[MAX_STRING_LENGTH];\n    size_t keySize = MAX_STRING_LENGTH;\n    napi_get_value_string_utf8(env, argValue[0], (char *)key, sizeof(key), &keySize);\n    Image_String setKey;\n    setKey.data = key;\n    setKey.size = keySize;\n    OH_LOG_INFO(LOG_APP, \"ModifyImageProperty key: %{public}s.\", setKey.data);\n    \n    // 获取要修改的value值。\n    char value[MAX_STRING_LENGTH];\n    size_t valueSize;\n    napi_get_value_string_utf8(env, argValue[1], (char *)value, MAX_STRING_LENGTH, &valueSize);\n    Image_String setValue;\n    setValue.data = value;\n    setValue.size = valueSize;\n    OH_LOG_INFO(LOG_APP, \"ModifyImageProperty value: %{public}s.\", setValue.data);\n\n    Image_ErrorCode errCode = OH_ImageSourceNative_ModifyImageProperty(g_thisImageSource->source, &setKey, &setValue);\n    return ReturnErrorCode(env, errCode, \"OH_ImageSourceNative_ModifyImageProperty\");\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "获取图像帧数。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 获取图像帧数。\nnapi_value GetFrameCount(napi_env env, napi_callback_info info)\n{\n    Image_ErrorCode errCode = OH_ImageSourceNative_GetFrameCount(g_thisImageSource->source,\n                                                                 &g_thisImageSource->frameCnt);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"OH_ImageSourceNative_GetFrameCount failed, errCode: %{public}d.\", errCode);\n        return GetJsResult(env, errCode);\n    }\n    return GetJsResult(env, g_thisImageSource->frameCnt); // 返回获取到的图像帧数。\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过图片解码参数创建Pixelmap列表。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 通过图片解码参数创建Pixelmap列表。\nnapi_value CreatePixelmapList(napi_env env, napi_callback_info info)\n{\n    OH_DecodingOptions *opts = nullptr;\n    OH_DecodingOptions_Create(&opts);\n    OH_PixelmapNative** resVecPixMap = new OH_PixelmapNative* [g_thisImageSource->frameCnt];\n    size_t outSize = g_thisImageSource->frameCnt;\n    Image_ErrorCode errCode = OH_ImageSourceNative_CreatePixelmapList(g_thisImageSource->source,\n                                                                      opts, resVecPixMap, outSize);\n    OH_DecodingOptions_Release(opts);\n    opts = nullptr;\n    delete[] resVecPixMap;\n    return ReturnErrorCode(env, errCode, \"OH_ImageSourceNative_CreatePixelmapList\");\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "获取图像延迟时间列表。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 获取图像延迟时间列表。\nnapi_value GetDelayTimeList(napi_env env, napi_callback_info info)\n{\n    int32_t *delayTimeList = new int32_t[g_thisImageSource->frameCnt];\n    size_t size = g_thisImageSource->frameCnt;\n    OH_LOG_INFO(LOG_APP, \"GetDelayTimeList size: %{public}zu.\", size);\n    Image_ErrorCode errCode = OH_ImageSourceNative_GetDelayTimeList(g_thisImageSource->source, delayTimeList, size);\n    delete[] delayTimeList;\n    return ReturnErrorCode(env, errCode, \"OH_ImageSourceNative_GetDelayTimeList\");\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放ImageSource。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 释放资源。\nnapi_value ReleaseImageSource(napi_env env, napi_callback_info info)\n{\n    Image_ErrorCode errCode = OH_ImageSourceNative_Release(g_thisImageSource->source);\n    g_thisImageSource->source = nullptr;\n    OH_PixelmapNative_Release(g_thisImageSource->resPixMap);\n    g_thisImageSource->resPixMap = nullptr;\n    return ReturnErrorCode(env, errCode, \"OH_ImageSourceNative_Release\");\n}\n"
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
438200(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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