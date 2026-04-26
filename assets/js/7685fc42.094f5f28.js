"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["561651"], {
961267(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_native_js_objects_image_pixelmap_operation_native_image_pixelmap_operation_native_md_768_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-native-js-objects-image-pixelmap-operation-native-image-pixelmap-operation-native-md-768.json
var site_docs_image_kit_image_native_js_objects_image_pixelmap_operation_native_image_pixelmap_operation_native_md_768_namespaceObject = JSON.parse('{"id":"image-kit/image-native-js-objects/image-pixelmap-operation-native/image-pixelmap-operation-native","title":"位图操作","description":"当前开发指导使用的接口为Image模块下的C API，可完成图片编解码，图片接收器，处理图像数据等功能。这部分API在API version 11之前发布，在后续的版本不再增加新功能，*不再推荐使用*。","source":"@site/docs/image-kit/image-native-js-objects/image-pixelmap-operation-native/image-pixelmap-operation-native.md","sourceDirName":"image-kit/image-native-js-objects/image-pixelmap-operation-native","slug":"/image-kit/image-native-js-objects/image-pixelmap-operation-native/","permalink":"/harmonyos-docs-site/image-kit/image-native-js-objects/image-pixelmap-operation-native/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"位图操作","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-pixelmap-operation-native","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"图像变换","permalink":"/harmonyos-docs-site/image-kit/image-native-js-objects/image-transformation-native/"},"next":{"title":"图片接收","permalink":"/harmonyos-docs-site/image-kit/image-native-js-objects/image-receiver-native/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-native-js-objects/image-pixelmap-operation-native/image-pixelmap-operation-native.md


const frontMatter = {
	title: '位图操作',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-pixelmap-operation-native',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '位图操作';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "位图操作",
        children: "位图操作"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(239003)/* ["default"] */.A) + "",
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
      children: "开发者可以通过本指导了解如何使用Native Image的接口完成位图操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加依赖"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行应用开发之前，开发者需要打开native工程的src/main/cpp/CMakeLists.txt，在target_link_libraries依赖中添加image的libace_napi.z.so、libpixelmap_ndk.z.so以及日志依赖libhilog_ndk.z.so。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so libpixelmap_ndk.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "添加接口映射"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "打开src/main/cpp/hello.cpp文件，在Init函数中添加接口映射如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "EXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        { \"createPixelMapTest\", nullptr, CreatePixelMapTest, nullptr, nullptr, nullptr, napi_default, nullptr },\n        { \"createAlphaPixelMap\", nullptr, CreateAlphaPixelMap, nullptr, nullptr, nullptr, napi_default, nullptr },\n        { \"transform\", nullptr, Transform, nullptr, nullptr, nullptr, napi_default, nullptr },\n    };\n\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Native接口调用"
        })
      })
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
        children: "#include <multimedia/image_framework/image_mdk_common.h>\n#include <multimedia/image_framework/image_pixel_map_mdk.h>\n#include <stdlib.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建一个 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PixelMap"
            })
          }), " 对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "napi_value CreatePixelMapTest(napi_env env, napi_callback_info info) {\n    napi_value udfVar = nullptr;\n    napi_value pixelMap = nullptr;\n\n    struct OhosPixelMapCreateOps createOps;\n    createOps.width = 4;\n    createOps.height = 6;\n    createOps.pixelFormat = 4;\n    createOps.alphaType = 0;\n    size_t bufferSize = createOps.width * createOps.height * 4;\n    void *buff = malloc(bufferSize);\n    if (buff == nullptr) {\n        return udfVar;\n    }\n\n    char *cc = (char *)buff;\n    for (int i = 0; i < 96; i++) {\n        *(cc++) = (char)i;\n    }\n    int32_t res = OH_PixelMap_CreatePixelMap(env, createOps, (uint8_t *)buff, bufferSize, &pixelMap);\n    free(buff);\n    if (res != IMAGE_RESULT_SUCCESS || pixelMap == nullptr) {\n        return udfVar;\n    }\n    return pixelMap;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据Alpha通道的信息，来生成一个仅包含Alpha通道信息的 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PixelMap"
            })
          }), " 对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "napi_value CreateAlphaPixelMap(napi_env env, napi_callback_info info) {\n    napi_value udfVar = nullptr;\n    napi_value thisVar = nullptr;\n    napi_value argValue[1] = {0};\n    size_t argCount = 1;\n\n    napi_value alphaPixelMap = nullptr;\n\n    napi_get_undefined(env, &udfVar);\n\n    if (napi_get_cb_info(env, info, &argCount, argValue, &thisVar, nullptr) != napi_ok || argCount < 1 ||\n        argValue[0] == nullptr) {\n        return udfVar;\n    }\n    int32_t res = OH_PixelMap_CreateAlphaPixelMap(env, argValue[0], &alphaPixelMap);\n    if (res != IMAGE_RESULT_SUCCESS || alphaPixelMap == nullptr) {\n        return udfVar;\n    }\n    return alphaPixelMap;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PixelMap"
            })
          }), " 数据进行处理。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "napi_value Transform(napi_env env, napi_callback_info info) {\n    napi_value thisVar = nullptr;\n    napi_value argValue[1] = {0};\n    size_t argCount = 1;\n\n    if (napi_get_cb_info(env, info, &argCount, argValue, &thisVar, nullptr) != napi_ok || argCount < 1 ||\n        argValue[0] == nullptr) {\n        return nullptr;\n    }\n    napi_value result = nullptr;\n    napi_get_undefined(env, &result);\n    \n    // 初始化NativePixelMap对象。\n    NativePixelMap *native = OH_PixelMap_InitNativePixelMap(env, argValue[0]);\n    if (native == nullptr) {\n        return result;\n    }\n\n    // 获取图片信息。\n    struct OhosPixelMapInfos pixelMapInfo;\n    OH_PixelMap_GetImageInfo(native, &pixelMapInfo);\n\n    // 获取PixelMap对象每行字节数。\n    int32_t rowBytes;\n    OH_PixelMap_GetBytesNumberPerRow(native, &rowBytes);\n\n    // 获取PixelMap对象是否可编辑的状态。\n    int32_t editable = 0;\n    OH_PixelMap_GetIsEditable(native, &editable);\n\n    // 获取PixelMap对象是否支持Alpha通道。\n    int32_t supportAlpha = 0;\n    OH_PixelMap_IsSupportAlpha(native, &supportAlpha);\n\n    // 设置PixelMap对象的Alpha通道。\n    int32_t alphaAble = 0;\n    OH_PixelMap_SetAlphaAble(native, alphaAble);\n\n    // 获取PixelMap对象像素密度。\n    int32_t densityG;\n    OH_PixelMap_GetDensity(native, &densityG);\n\n    // 设置PixelMap对象像素密度。\n    int32_t densityS = 100;\n    OH_PixelMap_SetDensity(native, densityS);\n\n    // 设置PixelMap对象的透明度。\n    float opacity = 0.5;\n    OH_PixelMap_SetOpacity(native, opacity);\n\n    // 设置缩放比例。\n    // scaleX: 宽为原来的0.5。\n    // scaleY: 高为原来的0.5。\n    float scaleX = 0.5;\n    float scaleY = 0.5;\n    OH_PixelMap_Scale(native, scaleX, scaleY);\n\n    // 设置偏移。\n    // translateX: 向下偏移50。\n    // translateY: 向右偏移50。\n    float translateX = 50;\n    float translateY = 50;\n    OH_PixelMap_Translate(native, translateX, translateY);\n\n    // 设置顺时针旋转90度。\n    float angle = 90;\n    OH_PixelMap_Rotate(native, angle);\n\n    // 设置翻转\n    // flipX: 水平翻转，0为不翻转，1为翻转。\n    // flipY: 垂直翻转，0为不翻转，1为翻转。\n    int32_t flipX = 0;\n    int32_t flipY = 1;\n    OH_PixelMap_Flip(native, flipX, flipY);\n\n    // 设置裁剪区域。\n    // cropX: 裁剪起始点横坐标。\n    // cropY: 裁剪起始点纵坐标。\n    // cropH: 裁剪高度10，方向为从上往下（裁剪后的图片高度为10）。\n    // cropW: 裁剪宽度10，方向为从左到右（裁剪后的图片宽度为10）。\n    int32_t cropX = 1;\n    int32_t cropY = 1;\n    int32_t cropW = 10;\n    int32_t cropH = 10;\n    OH_PixelMap_Crop(native, cropX, cropY, cropW, cropH);\n\n    // 获取PixelMap对象数据的内存地址，并锁定该内存。\n    void *pixelAddr = nullptr;\n    OH_PixelMap_AccessPixels(native, &pixelAddr);\n\n    // 释放PixelMap对象数据的内存锁。\n    OH_PixelMap_UnAccessPixels(native);\n\n    return result;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JS侧调用"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开src\\main\\cpp\\types\\libentry\\index.d.ts（其中libentry根据工程名生成），导入如下引用文件："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { image } from '@kit.ImageKit';\n\nexport const createPixelMapTest: () => image.PixelMap;\nexport const transform: (a: image.PixelMap) => void;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开src\\main\\ets\\pages\\index.ets, 导入\"libentry.so\"(根据工程名生成)，调用Native接口，传入JS的资源对象。示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import testNapi from 'libentry.so';\nimport { image } from '@kit.ImageKit';\n\n@Entry\n@Component\nstruct Index {\n@State _pixelMap : image.PixelMap | undefined = undefined;\n\nbuild() {\n    Row() {\n        Column() {\n            Button(\"PixelMap\")\n            .width(100)\n            .height(100)\n            .onClick(() => {\n                console.info(\"com.example.native_ndk_api10 button click in\");\n                this._pixelMap = testNapi.createPixelMapTest();\n                testNapi.transform(this._pixelMap);\n            })\n            Image(this._pixelMap)\n            .width(500)\n            .height(500)\n            .objectFit(ImageFit.Cover)\n            .border({width: 1, color: Color.Blue})\n            }\n            .width('100%')\n        }\n        .height('100%')\n    }\n}\n"
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
239003(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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