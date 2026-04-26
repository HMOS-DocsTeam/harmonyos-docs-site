"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["126528"], {
642641(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_offline_image_processing_effectkit_filter_c_effectkit_filter_c_md_ed7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-offline-image-processing-effectkit-filter-c-effectkit-filter-c-md-ed7.json
var site_docs_arkgraphics_2_d_offline_image_processing_effectkit_filter_c_effectkit_filter_c_md_ed7_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/offline-image-processing/effectkit-filter-c/effectkit-filter-c","title":"添加图像效果（C/C++）","description":"场景介绍","source":"@site/docs/arkgraphics-2d/offline-image-processing/effectkit-filter-c/effectkit-filter-c.md","sourceDirName":"arkgraphics-2d/offline-image-processing/effectkit-filter-c","slug":"/arkgraphics-2d/offline-image-processing/effectkit-filter-c/","permalink":"/harmonyos-docs-site/arkgraphics-2d/offline-image-processing/effectkit-filter-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"添加图像效果（C/C++）","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/effectkit-filter-c","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"文本开发常见问题","permalink":"/harmonyos-docs-site/arkgraphics-2d/text/text-faqs/"},"next":{"title":"NativeVSync开发指导 (C/C++)","permalink":"/harmonyos-docs-site/arkgraphics-2d/native-vsync-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/offline-image-processing/effectkit-filter-c/effectkit-filter-c.md


const frontMatter = {
	title: '添加图像效果（C/C++）',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/effectkit-filter-c',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '添加图像效果（C/C++）';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
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
        id: "添加图像效果cc",
        children: "添加图像效果（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在离线处理图像时，可以进行一些图像效果的设置以获取视觉上的不同呈现，比如设置图像模糊程度、调节图像亮度和灰度、设置图像反色等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主要基于滤镜（Filter）设置不同的图像效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用滤镜（Filter）设置图像效果的常用接口如下表所示，详细使用和参数请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-effect-filter-h/capi-effect-filter-h",
        children: "effect_filter"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EffectErrorCode OH_Filter_CreateEffect(OH_PixelmapNative* pixelmap, OH_Filter** filter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建一个基于像素图对象的滤镜对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EffectErrorCode OH_Filter_Blur(OH_Filter* filter, float radius)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个模糊效果并且添加到滤镜中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EffectErrorCode OH_Filter_Brighten(OH_Filter* filter, float brightness)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个提亮效果并且添加到滤镜中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EffectErrorCode OH_Filter_GrayScale(OH_Filter* filter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个灰度效果并且添加到滤镜中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EffectErrorCode OH_Filter_Invert(OH_Filter* filter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个反色效果并且添加到滤镜中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EffectErrorCode OH_Filter_GetEffectPixelMap(OH_Filter* filter, OH_PixelmapNative** pixelmap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取滤镜处理后生成的像素图对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EffectErrorCode OH_Filter_Release(OH_Filter* filter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放滤镜对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Native工程的src/main/cpp/CMakeLists.txt中添加如下链接库："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC libnative_drawing.so)\ntarget_link_libraries(entry PUBLIC libhilog_ndk.z.so)\ntarget_link_libraries(entry PUBLIC libnative_effect.so)\ntarget_link_libraries(entry PUBLIC libpixelmap.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖的相关头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"multimedia/image_framework/image/pixelmap_native.h\"\n#include \"native_effect/effect_filter.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建OH_PixelmapNative像素图对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建滤镜需要一个图像框架定义的像素图对象（OH_PixelmapNative）。可以通过OH_PixelmapNative_CreatePixelmap()创建一个自定义的像素图，也可以通过OH_PixelmapNative_ConvertPixelmapNativeFromNapi()从外部引入像素图。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本文以OH_PixelmapNative_CreatePixelmap()为例创建OH_PixelmapNative。该函数接受4个参数，第一个参数为图像像素数据的缓冲区，用于初始化Pixelmap的像素。第二个参数是缓冲区长度。第三个参数是位图格式（包括长、宽、颜色类型、透明度类型等）。第四个参数即OH_PixelmapNative对象，作为出参使用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 图片宽高分别为 600 * 400\nuint32_t width = 600;\nuint32_t height = 400;\nconst uint16_t RGBA_MIN = 0x00;\nconst uint16_t RGBA_MAX = 0xFF;\nconst uint16_t RGBA_SIZE = 4;\n// 字节长度，RGBA_8888每个像素占4字节\nsize_t bufferSize = width * height * RGBA_SIZE;\nuint8_t *pixels = new uint8_t[bufferSize];\nfor (uint32_t i = 0; i < width * height; ++i) {\n     // 遍历并编辑每个像素，从而形成红绿蓝相间的条纹\n     uint32_t n = i / 20 % 3;\n     pixels[i * RGBA_SIZE] = RGBA_MIN; // 红色通道\n     pixels[i * RGBA_SIZE + 1] = RGBA_MIN; // +1表示绿色通道\n     pixels[i * RGBA_SIZE + 2] = RGBA_MIN; // +2表示蓝色通道\n     pixels[i * RGBA_SIZE + 3] = RGBA_MAX; // +3表示不透明度通道\n     if (n == 0) {\n         pixels[i * RGBA_SIZE] = RGBA_MAX; // 红色通道赋值，颜色显红色\n     } else if (n == 1) {\n         pixels[i * RGBA_SIZE + 1] = RGBA_MAX; // +1表示绿色通道赋值，其余通道为0，颜色显绿色\n     } else {\n         pixels[i * RGBA_SIZE + 2] = RGBA_MAX; // +2表示蓝色通道赋值，其余通道为0，颜色显蓝色\n     }\n}\n// 设置位图格式（长、宽、颜色类型、透明度类型）\nOH_Pixelmap_InitializationOptions *createOps = nullptr;\nOH_PixelmapInitializationOptions_Create(&createOps);\nOH_PixelmapInitializationOptions_SetWidth(createOps, width);\nOH_PixelmapInitializationOptions_SetHeight(createOps, height);\nOH_PixelmapInitializationOptions_SetPixelFormat(createOps, PIXEL_FORMAT_RGBA_8888);\nOH_PixelmapInitializationOptions_SetAlphaType(createOps, PIXELMAP_ALPHA_TYPE_UNKNOWN);\n// 创建OH_PixelmapNative对象\nOH_PixelmapNative *pixelMapNative = nullptr;\nOH_PixelmapNative_CreatePixelmap(pixels, bufferSize, createOps, &pixelMapNative);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基于上文生成的OH_PixelmapNative像素图对象，使用OH_Filter_CreateEffect()接口初始化OH_Filter对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Filter *filter = nullptr;\nEffectErrorCode errCodeCreate = OH_Filter_CreateEffect(pixelMapNative, &filter);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按需给滤镜添加不同的图像效果。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可使用OH_Filter_Blur()接口在滤镜中添加模糊效果。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "float radius = 20.0; // 模糊半径\nEffectErrorCode errCodeEffect = OH_Filter_Blur(filter, radius);\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可使用OH_Filter_Brighten()接口在滤镜中添加提亮效果。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "float brightness = 0.5; // 提亮程度(0~1)\nEffectErrorCode errCodeEffect = OH_Filter_Brighten(filter, brightness);\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可使用OH_Filter_GrayScale()接口在滤镜中添加灰度效果。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "EffectErrorCode errCodeEffect = OH_Filter_GrayScale(filter);\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "可使用OH_Filter_Invert()接口在滤镜中添加反色效果。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "EffectErrorCode errCodeEffect = OH_Filter_Invert(filter);\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取经过滤镜处理后的OH_PixelmapNative像素图对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_PixelmapNative* filterResult = nullptr;\nEffectErrorCode errCodeResult = OH_Filter_GetEffectPixelMap(filter, &filterResult);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当不再需要滤镜生成图像效果后，请及时使用OH_Filter_Release()销毁OH_Filter对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "EffectErrorCode errCodeRelease = OH_Filter_Release(filter);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绘制效果如下："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "图像处理"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "绘制效果"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "原始图像"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "添加模糊效果"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "添加提亮效果"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "添加灰度效果"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "添加反色效果"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            })]
          })]
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