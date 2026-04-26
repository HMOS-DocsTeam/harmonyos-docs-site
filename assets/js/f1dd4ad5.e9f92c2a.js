"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["640093"], {
188416(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_image_kit_image_native_image_editing_c_image_processing_image_scaling_image_scaling_md_f1d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-image-kit-image-native-image-editing-c-image-processing-image-scaling-image-scaling-md-f1d.json
var site_docs_image_kit_image_native_image_editing_c_image_processing_image_scaling_image_scaling_md_f1d_namespaceObject = JSON.parse('{"id":"image-kit/image-native/image-editing-c/image-processing/image-scaling/image-scaling","title":"图片缩放","description":"本模块提供图片细节增强的C API接口，通过调用本模块，可以实现图片内容的清晰度增强及缩放功能，处理后的数据可以用于送显和编码保存。","source":"@site/docs/image-kit/image-native/image-editing-c/image-processing/image-scaling/image-scaling.md","sourceDirName":"image-kit/image-native/image-editing-c/image-processing/image-scaling","slug":"/image-kit/image-native/image-editing-c/image-processing/image-scaling/","permalink":"/harmonyos-docs-site/image-kit/image-native/image-editing-c/image-processing/image-scaling/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"图片缩放","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-scaling","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用ImageEffect编辑图片","permalink":"/harmonyos-docs-site/image-kit/image-native/image-editing-c/image-effect-guidelines/"},"next":{"title":"图片动态元数据生成","permalink":"/harmonyos-docs-site/image-kit/image-native/image-editing-c/image-processing/image-dynamic-metadata-generation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/image-kit/image-native/image-editing-c/image-processing/image-scaling/image-scaling.md


const frontMatter = {
	title: '图片缩放',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-scaling',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '图片缩放';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}, {
  "value": "在 CMake 脚本中链接动态库",
  "id": "在-cmake-脚本中链接动态库",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "完整示例代码",
  "id": "完整示例代码",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "图片缩放",
        children: "图片缩放"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块提供图片细节增强的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-c/image-module/capi-imageprocessing/capi-imageprocessing",
        children: "C API接口"
      }), "，通过调用本模块，可以实现图片内容的清晰度增强及缩放功能，处理后的数据可以用于送显和编码保存。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "典型应用场景如：图片解码获取图片buffer > 图片超分 > 显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为保证处理能够实时响应，建议只创建一个实例。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前仅支持处理同时满足以下条件的图片："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "图片为SDR（Standard dynamic range）图片。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "图片的像素格式为RGBA、BGRA、NV12、NV21，输出格式与输入格式一致。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["处理的PixelMap对象需为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/image-kit/image-native/image-decoding-c/image-allocator-type-c#%E5%86%85%E5%AD%98%E7%B1%BB%E5%9E%8B%E4%BB%8B%E7%BB%8D",
              children: "DMA内存"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本模块提供4个质量档位的算法，处理效果逐渐变优，但性能也会逐渐下降。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "质量档位"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "输入分辨率要求  （单位：像素）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "输出分辨率要求  （单位：像素）"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "NONE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：[32,3000]  高：[32,3000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：[32,3000]  高：[32,3000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "仅适用于缩放场景，支持改变宽高比例，无清晰度增强效果。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "LOW"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：[32,3000]  高：[32,3000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：[32,3000]  高：[32,3000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "仅适用于缩放场景，支持改变宽高比例。  缩放时会对图像进行低质量的清晰度增强，处理效率较高。  此质量档位为默认设置。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "MEDIUM"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：[32,3000]  高：[32,3000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：[32,3000]  高：[32,3000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "仅适用于缩放场景，支持改变宽高比例。  缩放时会对图像进行中等质量的清晰度增强，处理效率适中。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HIGH"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：[512,2000]  高：[512,2000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "宽：[512,2000]  高：[512,2000]"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "适用于缩放及清晰度增强场景，支持改变宽高比例。  缩放时会对图像进行高质量的清晰度增强，处理效率相对较低。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/DocsSample_MultiMedia/tree/master/UsingImageProcessingToProcessImages",
        children: "示例工程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "add_library(entry SHARED napi_init.cpp ImageProcessing/ImageProcessing.cpp)\ntarget_link_libraries(entry PUBLIC ${BASE_LIBRARY})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <hilog/log.h>\n#include <multimedia/image_framework/image_pixel_map_mdk.h>\n#include <multimedia/image_framework/image/pixelmap_native.h>\n#include <multimedia/video_processing_engine/image_processing.h>\n#include <multimedia/video_processing_engine/image_processing_types.h>\n#include <multimedia/player_framework/native_avformat.h>\n#include <napi/native_api.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）初始化环境。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一般在进程内第一次使用时调用，可提前完成部分耗时操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ImageProcessing_ErrorCode ret =  OH_ImageProcessing_InitializeEnvironment();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建细节增强模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用可以通过图片处理引擎模块类型来创建图片细节增强模块。示例中的变量说明如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "imageProcessor：细节增强模块实例。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "IMAGE_PROCESSING_TYPE_DETAIL_ENHANCER：细节增强类型。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "预期返回值：IMAGE_PROCESSING_SUCCESS"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建图片细节增强模块实例\nOH_ImageProcessing* imageProcessor = nullptr;\nImageProcessing_ErrorCode ret = OH_ImageProcessing_Create(&imageProcessor, IMAGE_PROCESSING_TYPE_DETAIL_ENHANCER);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）配置细节增强质量档位，当前有高中低三档及NONE可选，若不配置则默认质量档位为LOW档。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建format实例\nOH_AVFormat* parameter = OH_AVFormat_Create();\n// 指定质量档位\nOH_AVFormat_SetIntValue(parameter, IMAGE_DETAIL_ENHANCER_PARAMETER_KEY_QUALITY_LEVEL,\n    IMAGE_DETAIL_ENHANCER_QUALITY_LEVEL_HIGH);\n// 配置参数\nImageProcessing_ErrorCode ret = OH_ImageProcessing_SetParameter(imageProcessor,parameter);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "启动细节增强处理。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 启动细节增强处理\nImageProcessing_ErrorCode ret = OH_ImageProcessing_EnhanceDetail(imageProcessor, srcImage, dstImage);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放处理实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ImageProcessing_ErrorCode ret = OH_ImageProcessing_Destroy(imageProcessor);\nimageProcessor = nullptr;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "释放处理资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_ImageProcessing_DeinitializeEnvironment();\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例代码",
      children: "完整示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS示例代码："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/DocsSample_MultiMedia/blob/master/UsingImageProcessingToProcessImages/entry/src/main/ets/view/ImageScalingComponent.ets",
          children: "ImageScalingComponent.ets示例代码"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C++相关示例代码："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/DocsSample_MultiMedia/blob/master/UsingImageProcessingToProcessImages/entry/src/main/cpp/CMakeLists.txt",
          children: "CMakeLists.txt示例代码"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/DocsSample_MultiMedia/blob/master/UsingImageProcessingToProcessImages/entry/src/main/cpp/ImageProcessing/ImageProcessing.h",
          children: "ImageProcessing.h示例代码"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/DocsSample_MultiMedia/blob/master/UsingImageProcessingToProcessImages/entry/src/main/cpp/ImageProcessing/ImageProcessing.cpp",
          children: "ImageProcessing.cpp示例代码"
        })
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