"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["501812"], {
514032(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_faqs_image_error_faq_image_error_faq_md_3ca_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-faqs-image-error-faq-image-error-faq-md-3ca.json
var site_docs_image_kit_image_faqs_image_error_faq_image_error_faq_md_3ca_namespaceObject = JSON.parse('{"id":"image-kit/image-faqs/image-error-faq/image-error-faq","title":"Image Kit异常处理","description":"Image Kit提供*ArkTS接口和C接口*。在遇到特殊情况时（例如输入参数无效、内存不足或函数无法处理请求等），系统会通过异常（ArkTS）或错误码（C接口）来反馈错误。开发者需要在应用层合理捕获和处理这些错误，以避免应用崩溃或出现未定义行为。在Image错误码中给出了Image Kit错误码对应的错误信息、可能原因、处理步骤。但由于部分场景引发错误的原因较为复杂，还需要开发者结合日志进一步定位。例如：401参数错误，可能是函数入参存在问题，也可能是由于缺少特定的文件读写权限导致无法访问或修改图片文件（Image Kit不感知权限，表现为传入文件异常的参数错误）。","source":"@site/docs/image-kit/image-faqs/image-error-faq/image-error-faq.md","sourceDirName":"image-kit/image-faqs/image-error-faq","slug":"/image-kit/image-faqs/image-error-faq/","permalink":"/harmonyos-docs-site/image-kit/image-faqs/image-error-faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Image Kit异常处理","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-error-faq","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"如何获取图片的旋转角度信息","permalink":"/harmonyos-docs-site/image-kit/image-faqs/image-rotate-faq/"},"next":{"title":"Image Kit常见崩溃报错问题","permalink":"/harmonyos-docs-site/image-kit/image-faqs/image-common-mistakes/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-faqs/image-error-faq/image-error-faq.md


const frontMatter = {
	title: 'Image Kit异常处理',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-error-faq',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = 'Image Kit异常处理';

const assets = {

};



const toc = [{
  "value": "ArkTS接口异常处理",
  "id": "arkts接口异常处理",
  "level": 2
}, {
  "value": "C接口异常处理",
  "id": "c接口异常处理",
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "image-kit异常处理",
        children: "Image Kit异常处理"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-overview",
        children: "Image Kit"
      }), "提供", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArkTS接口"
        })
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "C接口"
        })
      }), "。在遇到特殊情况时（例如输入参数无效、内存不足或函数无法处理请求等），系统会通过异常（ArkTS）或错误码（C接口）来反馈错误。开发者需要在应用层合理捕获和处理这些错误，以避免应用崩溃或出现未定义行为。在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts-errcode/errorcode-image/errorcode-image",
        children: "Image错误码"
      }), "中给出了Image Kit错误码对应的错误信息、可能原因、处理步骤。但由于部分场景引发错误的原因较为复杂，还需要开发者结合日志进一步定位。例如：401参数错误，可能是函数入参存在问题，也可能是由于缺少特定的文件读写权限导致无法访问或修改图片文件（Image Kit不感知权限，表现为传入文件异常的参数错误）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arkts接口异常处理",
      children: "ArkTS接口异常处理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS接口调用时，如果传入的参数不符合要求，或者底层执行过程中出现不可恢复的错误，系统会返回或抛出", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#businesserror",
        children: "BusinessError"
      }), "异常，又或者在异步场景中返回一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/async-concurrency-overview#promise",
        children: "Promise"
      }), "的rejected状态。如果开发者忽略了异常处理，可能会出现功能问题或数据丢失，甚至直接导致应用崩溃。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "典型的ArkTS接口形态及API示例和处理方法如下所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口形态"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示例API"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "处理方式"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Promise异步接口"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getImageInfo(): Promise<ImageInfo>、modifyImageProperty(key: PropertyKey, value: string): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用await+try/catch，或promise.catch捕获BusinessError。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "AsyncCallback异步接口"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getImageInfo(callback: AsyncCallback<ImageInfo>): void"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#asynccallback",
              children: "AsyncCallback"
            }), "的参数获取BusinessError。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "同步接口"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getImageInfoSync(): ImageInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用try/catch捕获同步BusinessError。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AsyncCallback异步接口示例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction getImageInfoByCallback(pixelMap: image.PixelMap): void {\n  if (!pixelMap) {\n    console.error(\"pixelMap is null or undefined\");\n    return;\n  }\n  pixelMap.getImageInfo((err: BusinessError, info: image.ImageInfo) => {\n    if (err) {\n      console.error(`getImageInfo callback failed, code=${err.code}, msg=${err.message}`);\n      return;\n    }\n    console.info(`Image width=${info.size.width}, height=${info.size.height}`);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Promise异步接口示例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// getImageInfo(): Promise<ImageInfo>\nasync function getImageInfoByPromise(pixelMap: image.PixelMap): Promise<void> {\n  try {\n    const info = await pixelMap.getImageInfo();\n    console.info(`Image width=${info.size.width}, height=${info.size.height}`);\n  } catch (err) {\n    const e = err as BusinessError;\n    console.error(`getImageInfo promise failed, code=${e.code}, msg=${e.message}`);\n  }\n}\n\n// modifyImageProperty(key: PropertyKey, value: string): Promise<void>\nfunction modifyImagePropertyPromise(imageSource: image.ImageSource): void {\n  imageSource.modifyImageProperty(image.PropertyKey.ORIENTATION, 'Top-left').then(() => {\n    console.info('modifyImageProperty success');\n  }).catch((err: BusinessError) => {\n    console.error(`modifyImageProperty failed, code=${err.code}, msg=${err.message}`);\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同步型示例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction getImageInfoBySync(pixelMap: image.PixelMap): void {\n  try {\n    const info = pixelMap.getImageInfoSync();\n    console.info(`Image width=${info.size.width}, height=${info.size.height}`);\n  } catch (err) {\n    const e = err as BusinessError;\n    console.error(`getImageInfoSync failed, code=${e.code}, msg=${e.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c接口异常处理",
      children: "C接口异常处理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["C接口统一通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts-errcode/errorcode-image/errorcode-image",
        children: "Image错误码"
      }), "来表示函数执行结果。返回IMAGE_SUCCESS（0）表示执行成功，返回非零值表示发生错误。开发者应在调用后立即检查返回值，并进行必要的错误处理，如日志记录、资源释放等。C接口异常处理的典型示例如下所示。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过ImageInfo获取图像信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Image_ErrorCode OH_PixelmapNative_GetImageInfo(OH_PixelmapNative *pixelmap, OH_Pixelmap_ImageInfo *imageInfo)"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 需要在src/main/cpp/CMakeLists.txt文件中链接so库文件：target_link_libraries(entry PUBLIC libhilog_ndk.z.so libpixelmap.so)。\n#include <hilog/log.h>\n#include <multimedia/image_framework/image/pixelmap_native.h>\n\n#undef LOG_DOMAIN\n#undef LOG_TAG\n#define LOG_DOMAIN 0x02b6\n#define LOG_TAG \"ImageKitDemo\"\n\nvoid GetImageInfoExample(OH_PixelmapNative *pixelmap) {\n    if (!pixelmap) {\n        OH_LOG_ERROR(LOG_APP, \"GetImageInfoExample: pixelmap is nullptr\");\n        return;\n    }\n    OH_Pixelmap_ImageInfo *imageInfo;\n    Image_ErrorCode errCode = OH_PixelmapImageInfo_Create(&imageInfo);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"OH_PixelmapNative_Create failed, errCode: %{public}d.\", errCode);\n        return;\n    }\n    errCode = OH_PixelmapNative_GetImageInfo(pixelmap, imageInfo);\n    if (errCode != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"OH_PixelmapNative_GetImageInfo failed, errCode: %{public}d.\", errCode);\n        return;\n    }\n\n    // 获取图片的宽、高、像素格式和透明度等信息。\n    uint32_t width, height, rowStride;\n    int32_t pixelFormat, alphaType;\n    OH_PixelmapImageInfo_GetWidth(imageInfo, &width);\n    OH_PixelmapImageInfo_GetHeight(imageInfo, &height);\n    OH_PixelmapImageInfo_GetRowStride(imageInfo, &rowStride);\n    OH_PixelmapImageInfo_GetPixelFormat(imageInfo, &pixelFormat);\n    OH_PixelmapImageInfo_GetAlphaType(imageInfo, &alphaType);\n    OH_PixelmapImageInfo_Release(imageInfo);\n    OH_LOG_INFO(LOG_APP,\n                \"GetImageInfo success, width: %{public}d, height: %{public}d, \"\n                \"rowStride: %{public}d, pixelFormat: %{public}d, alphaType: %{public}d.\",\n                width, height, rowStride, pixelFormat, alphaType);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改EXIF信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Image_ErrorCode OH_ImageSourceNative_ModifyImageProperty(OH_ImageSourceNative *source, Image_String *key, Image_String *value)"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 需要在src/main/cpp/CMakeLists.txt文件中链接so库文件：target_link_libraries(entry PUBLIC libhilog_ndk.z.so libimage_source.so)。\n#include <string>\n#include <hilog/log.h>\n#include <multimedia/image_framework/image/image_source_native.h>\n\n#undef LOG_DOMAIN\n#undef LOG_TAG\n#define LOG_DOMAIN 0x02b6\n#define LOG_TAG \"ImageKitDemo\"\n\nvoid ModifyImagePropertyExample(OH_ImageSourceNative *source) {\n    if (!source) {\n        OH_LOG_ERROR(LOG_APP, \"ModifyImagePropertyExample: source is nullptr\");\n        return;\n    }\n    const std::string keyStr = OHOS_IMAGE_PROPERTY_ORIENTATION;\n    const std::string valueStr = \"Top-left\";\n    Image_String key{const_cast<char *>(keyStr.c_str()), keyStr.length()};\n    Image_String value{const_cast<char *>(valueStr.c_str()), valueStr.length()};\n\n    Image_ErrorCode ret = OH_ImageSourceNative_ModifyImageProperty(source, &key, &value);\n    if (ret != IMAGE_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"ModifyImageProperty failed, code=%{public}d\", ret);\n        return;\n    }\n\n    OH_LOG_INFO(LOG_APP, \"ModifyImageProperty success, key=%{public}s, value=%{public}s\", keyStr.c_str(),\n                valueStr.c_str());\n}\n"
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