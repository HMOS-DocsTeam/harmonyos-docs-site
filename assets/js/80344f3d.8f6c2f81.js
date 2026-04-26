"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["715818"], {
797974(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_graphic_drawing_and_display_primitive_drawing_pixelmap_drawing_c_pixelmap_drawing_c_md_803_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-graphic-drawing-and-display-primitive-drawing-pixelmap-drawing-c-pixelmap-drawing-c-md-803.json
var site_docs_arkgraphics_2_d_graphic_drawing_and_display_primitive_drawing_pixelmap_drawing_c_pixelmap_drawing_c_md_803_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/pixelmap-drawing-c/pixelmap-drawing-c","title":"图片绘制（C/C++）","description":"位图是一种用于在内存中存储和表示图像的数据结构，它是一个未经过压缩的像素集合，而JPEG或PNG等图片是压缩格式的，两者并不相同。如果需要将JPEG或PNG绘制到屏幕上，需要先解码成位图格式，具体可参考图片处理服务（Image Kit）图片解码相关章节。","source":"@site/docs/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/pixelmap-drawing-c/pixelmap-drawing-c.md","sourceDirName":"arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/pixelmap-drawing-c","slug":"/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/pixelmap-drawing-c/","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/pixelmap-drawing-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"图片绘制（C/C++）","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pixelmap-drawing-c","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"几何形状绘制（C/C++）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/geometric-shape-drawing-c/"},"next":{"title":"字块绘制（C/C++）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/textblock-drawing-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/pixelmap-drawing-c/pixelmap-drawing-c.md


const frontMatter = {
	title: '图片绘制（C/C++）',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pixelmap-drawing-c',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '图片绘制（C/C++）';

const assets = {

};



const toc = [{
  "value": "示例代码",
  "id": "示例代码",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "图片绘制cc",
        children: "图片绘制（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["位图是一种用于在内存中存储和表示图像的数据结构，它是一个未经过压缩的像素集合，而JPEG或PNG等图片是压缩格式的，两者并不相同。如果需要将JPEG或PNG绘制到屏幕上，需要先解码成位图格式，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-overview",
        children: "图片处理服务（Image Kit）"
      }), "图片解码相关章节。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["目前Drawing（C/C++）中位图绘制需要依赖PixelMap，它可以用于读取或写入图像数据以及获取图像信息。详细的API介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-pixel-map-h/capi-drawing-pixel-map-h",
        children: "drawing_pixel_map.h"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "有多个API接口可以创建PixelMap，下文以使用OH_Drawing_PixelMapGetFromOhPixelMapNative()为例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加链接库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Native工程的src/main/cpp/CMakeLists.txt，添加如下链接库："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC libnative_drawing.so)\ntarget_link_libraries(entry PUBLIC libhilog_ndk.z.so)\ntarget_link_libraries(entry PUBLIC libpixelmap.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖的相关头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/image_framework/image/pixelmap_native.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建OH_PixelmapNative像素图对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "PixelMap需要从图像框架定义的像素图对象（OH_PixelmapNative）中获取，所以需要先通过OH_PixelmapNative_CreatePixelmap()创建OH_PixelmapNative。该函数接受4个参数，第一个参数为图像像素数据的缓冲区，用于初始化PixelMap的像素。第二个参数是缓冲区长度。第三个参数是位图格式（包括长、宽、颜色类型、透明度类型等）。第四个参数即OH_PixelmapNative对象，作为出参使用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 图片宽高分别为 600 * 400\nuint32_t width = 600;\nuint32_t height = 400;\n// 字节长度，RGBA_8888每个像素占4字节\nsize_t bufferSize = width * height * 4;\nuint8_t *pixels = new uint8_t[bufferSize];\nfor (uint32_t i = 0; i < width * height; ++i) {\n    // 遍历并编辑每个像素，从而形成红绿蓝相间的条纹\n    uint32_t n = i / 20 % 3;\n    pixels[i * RGBA_SIZE] = RGBA_MIN; // 红色通道\n    pixels[i * RGBA_SIZE + 1] = RGBA_MIN; // +1表示绿色通道\n    pixels[i * RGBA_SIZE + 2] = RGBA_MIN; // +2表示蓝色通道\n    pixels[i * RGBA_SIZE + 3] = 0xFF; // +3表示不透明度通道\n    if (n == 0) {\n        pixels[i * RGBA_SIZE] = 0xFF; // 红色通道赋值，颜色显红色\n    } else if (n == 1) {\n        pixels[i * RGBA_SIZE + 1] = 0xFF; // +1表示绿色通道赋值，其余通道为0，颜色显绿色\n    } else {\n        pixels[i * RGBA_SIZE + 2] = 0xFF; // +2表示蓝色通道赋值，其余通道为0，颜色显蓝色\n    }\n}\n// 设置位图格式（长、宽、颜色类型、透明度类型）\nOH_Pixelmap_InitializationOptions *createOps = nullptr;\nOH_PixelmapInitializationOptions_Create(&createOps);\nOH_PixelmapInitializationOptions_SetWidth(createOps, width);\nOH_PixelmapInitializationOptions_SetHeight(createOps, height);\nOH_PixelmapInitializationOptions_SetPixelFormat(createOps, PIXEL_FORMAT_RGBA_8888);\nOH_PixelmapInitializationOptions_SetAlphaType(createOps, PIXELMAP_ALPHA_TYPE_UNKNOWN);\n// 创建OH_PixelmapNative对象\nOH_PixelmapNative *pixelMapNative = nullptr;\nOH_PixelmapNative_CreatePixelmap(pixels, bufferSize, createOps, &pixelMapNative);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建PixelMap。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过OH_Drawing_PixelMapGetFromOhPixelMapNative()函数从OH_PixelmapNative中获取PixelMap。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Drawing_PixelMap *pixelMap = OH_Drawing_PixelMapGetFromOhPixelMapNative(pixelMapNative);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绘制PixelMap。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要通过OH_Drawing_CanvasDrawPixelMapRect()绘制位图PixelMap。函数接受5个参数，分别为画布Canvas、PixelMap对象、PixelMap中像素的截取区域、画布中显示的区域以及采样选项对象。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["其中采样选项对象（OH_Drawing_SamplingOptions）表示了从原始像素数据（即Bitmap）中采样以生成新的像素值的具体方式，具体可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-sampling-options-h/capi-drawing-sampling-options-h",
            children: "drawing_sampling_options.h"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// PixelMap中像素的截取区域\nOH_Drawing_Rect *src = OH_Drawing_RectCreate(0, 0, 600, 400);\n// 画布中显示的区域\nOH_Drawing_Rect *dst = OH_Drawing_RectCreate(value200_, value200_, value800_, value600_);\n// 采样选项对象\nOH_Drawing_SamplingOptions* samplingOptions = OH_Drawing_SamplingOptionsCreate(\n    OH_Drawing_FilterMode::FILTER_MODE_LINEAR, OH_Drawing_MipmapMode::MIPMAP_MODE_LINEAR);\n// 绘制PixelMap\nOH_Drawing_CanvasDrawPixelMapRect(canvas, pixelMap, src, dst, samplingOptions);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绘制完成后释放相关对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_PixelmapNative_Release(pixelMapNative);\ndelete[] pixels;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绘制效果如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(240841)/* ["default"] */.A) + "",
            width: "1010",
            height: "671"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkGraphics2D/Drawing/NDKGraphicsDraw",
          children: "图形绘制（C/C++）"
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
240841(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478667-15ee8c4c71918c0b0bbe8b6679221ec3.jpg");

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