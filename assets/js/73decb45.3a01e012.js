"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["704195"], {
939916(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_graphic_drawing_and_display_canvas_get_result_draw_canvas_get_result_draw_c_canvas_get_result_draw_c_md_73d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-graphic-drawing-and-display-canvas-get-result-draw-canvas-get-result-draw-c-canvas-get-result-draw-c-md-73d.json
var site_docs_arkgraphics_2_d_graphic_drawing_and_display_canvas_get_result_draw_canvas_get_result_draw_c_canvas_get_result_draw_c_md_73d_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-c/canvas-get-result-draw-c","title":"画布的获取与绘制结果的显示（C/C++）","description":"场景介绍","source":"@site/docs/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-c/canvas-get-result-draw-c.md","sourceDirName":"arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-c","slug":"/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-c/","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"画布的获取与绘制结果的显示（C/C++）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/canvas-get-result-draw-c","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"画布的获取与绘制结果的显示（ArkTS）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-arkts/"},"next":{"title":"画布操作及状态处理（ArkTS）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/canvas-operation-state/canvas-operation-state-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-c/canvas-get-result-draw-c.md


const frontMatter = {
	title: '画布的获取与绘制结果的显示（C/C++）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/canvas-get-result-draw-c',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '画布的获取与绘制结果的显示（C/C++）';

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
  "value": "获取可直接显示的Canvas画布",
  "id": "获取可直接显示的canvas画布",
  "level": 2
}, {
  "value": "离屏Canvas画布的获取与显示",
  "id": "离屏canvas画布的获取与显示",
  "level": 2
}, {
  "value": "CPU后端Canvas的创建与显示",
  "id": "cpu后端canvas的创建与显示",
  "level": 3
}, {
  "value": "GPU后端Canvas的创建与显示",
  "id": "gpu后端canvas的创建与显示",
  "level": 3
}, {
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
        id: "画布的获取与绘制结果的显示cc",
        children: "画布的获取与绘制结果的显示（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Canvas即画布，提供绘制基本图形的能力，用于在屏幕上绘制图形和处理图形。开发者可以通过Canvas实现自定义的绘图效果，增强应用的用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Canvas是图形绘制的核心，本章中提到的所有绘制操作（包括基本图形的绘制、文字的绘制、图片的绘制、图形变换等）都是基于Canvas的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前C/C++有两种获取Canvas的方式：获取可直接上屏显示的Canvas、获取离屏的Canvas，前者在调用绘制接口之后无需进行额外的操作即可完成绘制结果的上屏显示，而后者需要依靠已有的显示手段来显示绘制结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建Canvas常用接口如下表所示，详细的使用和参数说明请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h",
        children: "drawing_canvas.h"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_Drawing_Canvas* OH_Drawing_CanvasCreate (void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建一个画布对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "void OH_Drawing_CanvasBind (OH_Drawing_Canvas*, OH_Drawing_Bitmap*)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于将一个位图对象绑定到画布中，使得画布绘制的内容输出到位图中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Drawing_Canvas* OH_Drawing_SurfaceGetCanvas (OH_Drawing_Surface *)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过surface对象获取画布对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取可直接显示的canvas画布",
      children: "获取可直接显示的Canvas画布"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过XComponent获取可直接显示的Canvas画布。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加链接库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Native工程的src/main/cpp/CMakeLists.txt，添加如下链接库："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// CMakeLists.txt\ntarget_link_libraries(entry PUBLIC libnative_drawing.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖的相关头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <native_drawing/drawing_canvas.h>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <native_drawing/drawing_surface.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从XComponent对应的NativeWindow中获取BufferHandle对象。NativeWindow相关的API请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-nativewindow/capi-nativewindow",
            children: "_native_window"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过 OH_NativeWindow_NativeWindowRequestBuffer 获取 OHNativeWindowBuffer 实例\nint ret = OH_NativeWindow_NativeWindowRequestBuffer(nativeWindow_, &buffer_, &fenceFd_);\nSAMPLE_LOGI(\"request buffer ret = %{public}d\", ret);\n// 通过 OH_NativeWindow_GetBufferHandleFromNative 获取 buffer 的 handle\nbufferHandle_ = OH_NativeWindow_GetBufferHandleFromNative(buffer_);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从BufferHandle中获取对应的内存地址。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 使用系统mmap接口拿到bufferHandle的内存虚拟地址\nmappedAddr_ = static_cast<uint32_t *>(\n    mmap(bufferHandle_->virAddr, bufferHandle_->size, PROT_READ | PROT_WRITE, MAP_SHARED, bufferHandle_->fd, 0));\nif (mappedAddr_ == MAP_FAILED) {\n    SAMPLE_LOGE(\"mmap failed\");\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建窗口画布。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建一个bitmap对象\ncScreenBitmap_ = OH_Drawing_BitmapCreate();\n// 定义bitmap的像素格式\nOH_Drawing_BitmapFormat cFormat{COLOR_FORMAT_RGBA_8888, ALPHA_FORMAT_OPAQUE};\n// 构造对应格式的bitmap\nOH_Drawing_BitmapBuild(cScreenBitmap_, width, height_, &cFormat);\n\n// 创建一个canvas对象\ncScreenCanvas_ = OH_Drawing_CanvasCreate();\n// 将画布与bitmap绑定，画布画的内容会输出到绑定的bitmap内存中\nOH_Drawing_CanvasBind(cScreenCanvas_, cScreenBitmap_);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "利用上一步中得到的Canvas进行自定义的绘制操作，即本章下文中的内容。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "利用XComponent完成显示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置刷新区域，如果Region中的Rect为nullptr,或者rectNumber为0，则认为OHNativeWindowBuffer全部有内容更改。\nRegion region{nullptr, 0};\n// 通过OH_NativeWindow_NativeWindowFlushBuffer 提交给消费者使用，例如：显示在屏幕上。\nOH_NativeWindow_NativeWindowFlushBuffer(nativeWindow_, buffer_, fenceFd_, region);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "离屏canvas画布的获取与显示",
      children: "离屏Canvas画布的获取与显示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前有两种创建离屏Canvas的方式：创建CPU后端Canvas、创建GPU后端Canvas，这两种Canvas都需要依靠XComponent来完成绘制结果的上屏显示。由于历史原因，早期的Canvas都是CPU后端Canvas。目前已经支持GPU后端Canvas，GPU的并行计算能力更强，更适合图形绘制。但GPU后端Canvas对部分场景的支持还有欠缺，比如复杂的路径，对于简短文字的绘制性能也比不上CPU后端Canvas。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cpu后端canvas的创建与显示",
      children: "CPU后端Canvas的创建与显示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前C/C++接口的绘制需要依赖于NativeWindow，CPU后端Canvas需要先离屏绘制，生成位图或像素图（从API Version 20开始支持），再借助XComponent上屏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方式一：通过绑定位图（Bitmap）的方式创建Canvas。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖的相关头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <native_drawing/drawing_bitmap.h>\n// ...\n#include <native_drawing/drawing_canvas.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建基于CPU的Canvas。需要通过OH_Drawing_BitmapCreate()接口创建一个位图对象（具体可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/pixelmap-drawing-c",
            children: "图片绘制"
          }), "），并通过OH_Drawing_CanvasBind()接口将位图绑定到Canvas中，从而使得Canvas绘制的内容可以输出到位图中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建一个离屏位图对象\ncOffScreenBitmap_ = OH_Drawing_BitmapCreate();\n// 设置位图属性\nOH_Drawing_BitmapFormat cFormat{COLOR_FORMAT_RGBA_8888, ALPHA_FORMAT_PREMUL};\n// 设置位图长宽（按需设置）\nuint32_t width = 800;\nuint32_t height = 800;\n// 初始化位图\nOH_Drawing_BitmapBuild(cOffScreenBitmap_, width, height, &cFormat);\n// 创建一个离屏Canvas对象\ncCPUCanvas_ = OH_Drawing_CanvasCreate();\n// 将离屏Canvas与离屏bitmap绑定，离屏Canvas绘制的内容会输出到绑定的离屏bitmap内存中\nOH_Drawing_CanvasBind(cCPUCanvas_, cOffScreenBitmap_);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果需要将背景设置为白色，需要执行以下步骤："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 将背景设置为白色\nOH_Drawing_CanvasClear(cCPUCanvas_, OH_Drawing_ColorSetArgb(RGBA_MAX, RGBA_MAX, RGBA_MAX, 0xFF));\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将上一步中创建的位图绘制到", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%8E%B7%E5%8F%96%E5%8F%AF%E7%9B%B4%E6%8E%A5%E6%98%BE%E7%A4%BA%E7%9A%84canvas%E7%94%BB%E5%B8%83",
            children: "窗口画布"
          }), "上。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 将离屏bitmap中的内容绘制到屏幕画布，实现上屏操作\nOH_Drawing_CanvasDrawBitmap(cScreenCanvas_, cOffScreenBitmap_, 0, 0);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方式二：通过像素图（PixelMap）创建Canvas。从API Version 20开始，支持使用此种方式创建Canvas。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "像素图是系统中用来表示图片的统一的数据结构，相比于drawing模块中提供的位图，像素图具备通用性，并且能够更好地发挥系统的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加链接库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Native工程的src/main/cpp/CMakeLists.txt，添加如下链接库："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// CMakeLists.txt\ntarget_link_libraries(entry PUBLIC libhilog_ndk.z.so libpixelmap.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖的相关头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <multimedia/image_framework/image/pixelmap_native.h>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <native_drawing/drawing_pixel_map.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["需要通过OH_Drawing_PixelMapGetFromOhPixelMapNative()接口创建一个像素图对象（具体可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/pixelmap-drawing-c",
            children: "图片绘制"
          }), "），并通过OH_Drawing_CanvasCreateWithPixelMap()接口借助像素图对象创建Canvas。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 图片宽高分别为 600 * 400\nuint32_t width = 600;\nuint32_t height = 400;\n// 字节长度，RGBA_8888每个像素占4字节\nsize_t bufferSize = width * height * 4;\nuint8_t *pixels = new uint8_t[bufferSize];\nfor (uint32_t i = 0; i < width * height; ++i) {\n    // 遍历并编辑每个像素，从而形成红绿蓝相间的条纹\n    uint32_t n = i / 20 % 3;\n    pixels[i * RGBA_SIZE] = RGBA_MIN; // 红色通道\n    pixels[i * RGBA_SIZE + 1] = RGBA_MIN; // +1表示绿色通道\n    pixels[i * RGBA_SIZE + 2] = RGBA_MIN; // +2表示蓝色通道\n    pixels[i * RGBA_SIZE + 3] = 0xFF; // +3表示不透明度通道\n    if (n == 0) {\n        pixels[i * RGBA_SIZE] = 0xFF; // 红色通道赋值，颜色显红色\n    } else if (n == 1) {\n        pixels[i * RGBA_SIZE + 1] = 0xFF; // +1表示绿色通道赋值，其余通道为0，颜色显绿色\n    } else {\n        pixels[i * RGBA_SIZE + 2] = 0xFF; // +2表示蓝色通道赋值，其余通道为0，颜色显蓝色\n    }\n}\n// 设置位图格式（长、宽、颜色类型、透明度类型）\nOH_Pixelmap_InitializationOptions *createOps = nullptr;\nOH_PixelmapInitializationOptions_Create(&createOps);\nOH_PixelmapInitializationOptions_SetWidth(createOps, width);\nOH_PixelmapInitializationOptions_SetHeight(createOps, height);\nOH_PixelmapInitializationOptions_SetPixelFormat(createOps, PIXEL_FORMAT_RGBA_8888);\nOH_PixelmapInitializationOptions_SetAlphaType(createOps, PIXELMAP_ALPHA_TYPE_UNKNOWN);\n// 创建OH_PixelmapNative对象\nOH_PixelmapNative *pixelMapNative = nullptr;\nOH_PixelmapNative_CreatePixelmap(pixels, bufferSize, createOps, &pixelMapNative);\nOH_Drawing_PixelMap *pixelMap = OH_Drawing_PixelMapGetFromOhPixelMapNative(pixelMapNative);\n// PixelMap中像素的截取区域\nOH_Drawing_Rect *src = OH_Drawing_RectCreate(0, 0, 600, 400);\n// 画布中显示的区域\nOH_Drawing_Rect *dst = OH_Drawing_RectCreate(value200_, value200_, value800_, value600_);\n// 采样选项对象\nOH_Drawing_SamplingOptions* samplingOptions = OH_Drawing_SamplingOptionsCreate(\n    OH_Drawing_FilterMode::FILTER_MODE_LINEAR, OH_Drawing_MipmapMode::MIPMAP_MODE_LINEAR);\n// 绘制PixelMap\nOH_Drawing_CanvasDrawPixelMapRect(canvas, pixelMap, src, dst, samplingOptions);\nOH_PixelmapNative_Release(pixelMapNative);\ndelete[] pixels;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果需要将背景设置为白色，需要执行以下步骤："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Drawing_CanvasClear(pixelmapCanvas, OH_Drawing_ColorSetArgb(0xFF, 0xFF, 0xFF, 0xFF));\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将上一步中创建的像素图绘制到", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%8E%B7%E5%8F%96%E5%8F%AF%E7%9B%B4%E6%8E%A5%E6%98%BE%E7%A4%BA%E7%9A%84canvas%E7%94%BB%E5%B8%83",
            children: "窗口画布"
          }), "上。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// PixelMap中像素的截取区域\nOH_Drawing_Rect *src = OH_Drawing_RectCreate(0, 0, 600, 400);\n// 画布中显示的区域\nOH_Drawing_Rect *dst = OH_Drawing_RectCreate(value200_, value200_, value800_, value600_);\n// 采样选项对象\nOH_Drawing_SamplingOptions* samplingOptions = OH_Drawing_SamplingOptionsCreate(\n    OH_Drawing_FilterMode::FILTER_MODE_LINEAR, OH_Drawing_MipmapMode::MIPMAP_MODE_LINEAR);\n// 绘制PixelMap\nOH_Drawing_CanvasDrawPixelMapRect(canvas, pixelMap, src, dst, samplingOptions);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gpu后端canvas的创建与显示",
      children: "GPU后端Canvas的创建与显示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GPU后端Canvas指画布是基于GPU进行绘制的，GPU的并行计算能力优于CPU，适用于绘制图片或区域相对大的场景，但目前GPU后端的Canvas针对绘制复杂路径的能力还有欠缺。同CPU后端Canvas，目前C/C++接口的绘制需要依赖于XComponent，GPU后端Canvas需要先离屏绘制再借助XComponent上屏。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前创建GPU后端的Canvas依赖EGL的能力，需要在CMakeLists.txt中添加EGL的动态依赖库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// CMakeLists.txt\nlibEGL.so\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖的头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <EGL/egl.h>\n#include <EGL/eglext.h>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <native_drawing/drawing_gpu_context.h>\n#include <native_drawing/drawing_surface.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化EGL上下文。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化上下文相关参数:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "EGLDisplay EGLDisplay_ = EGL_NO_DISPLAY;\nEGLConfig EGLConfig_ = nullptr;\nEGLContext EGLContext_ = EGL_NO_CONTEXT;\nEGLSurface EGLSurface_ = nullptr;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始化上下文相关配置："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "EGLConfig getConfig(int version, EGLDisplay eglDisplay)\n{\n    int attribList[] = {EGL_SURFACE_TYPE,\n                        EGL_WINDOW_BIT,\n                        EGL_RED_SIZE,\n                        8,\n                        EGL_GREEN_SIZE,\n                        8,\n                        EGL_BLUE_SIZE,\n                        8,\n                        EGL_ALPHA_SIZE,\n                        8,\n                        EGL_RENDERABLE_TYPE,\n                        EGL_OPENGL_ES2_BIT,\n                        EGL_NONE};\n    EGLConfig configs = NULL;\n    int configsNum;\n\n    if (!eglChooseConfig(eglDisplay, attribList, &configs, 1, &configsNum)) {\n        SAMPLE_LOGE(\"eglChooseConfig ERROR\");\n        return NULL;\n    }\n\n    return configs;\n}\n\nint32_t SampleGraphics::InitializeEglContext()\n{\n    EGLDisplay_ = eglGetDisplay(EGL_DEFAULT_DISPLAY);\n    if (EGLDisplay_ == EGL_NO_DISPLAY) {\n        SAMPLE_LOGE(\"unable to get EGL display.\");\n        return -1;\n    }\n\n    EGLint eglMajVers;\n    EGLint eglMinVers;\n    if (!eglInitialize(EGLDisplay_, &eglMajVers, &eglMinVers)) {\n        EGLDisplay_ = EGL_NO_DISPLAY;\n        SAMPLE_LOGE(\"unable to initialize display\");\n        return -1;\n    }\n\n    int version = 3;\n    EGLConfig_ = getConfig(version, EGLDisplay_);\n    if (EGLConfig_ == nullptr) {\n        SAMPLE_LOGE(\"GLContextInit config ERROR\");\n        return -1;\n    }\n\n    /* Create EGLContext from */\n    int attribList[] = {EGL_CONTEXT_CLIENT_VERSION, 2, EGL_NONE}; // 2 size\n\n    EGLContext_ = eglCreateContext(EGLDisplay_, EGLConfig_, EGL_NO_CONTEXT, attribList);\n\n    EGLint attribs[] = {EGL_WIDTH, 1, EGL_HEIGHT, 1, EGL_NONE};\n    EGLSurface_ = eglCreatePbufferSurface(EGLDisplay_, EGLConfig_, attribs);\n    if (!eglMakeCurrent(EGLDisplay_, EGLSurface_, EGLSurface_, EGLContext_)) {\n        SAMPLE_LOGE(\"eglMakeCurrent error = %{public}d\", eglGetError());\n        return -1;\n    }\n\n    SAMPLE_LOGE(\"Init success.\");\n    return 0;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建GPU后端Canvas。GPU后端Canvas需要借助Surface对象来获取，需先创建surface，surface的API请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-surface-h/capi-drawing-surface-h",
            children: "drawing_surface.h"
          }), "。通过OH_Drawing_GpuContextCreateFromGL接口创建绘图上下文，再将这个上下文作为参数创建surface，最后通过OH_Drawing_SurfaceGetCanvas接口从surface中获取到canvas。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置宽高（按需设定）\nint32_t cWidth = 800;\nint32_t cHeight = 800;\n// 设置图像，包括宽度、高度、颜色格式和透明度格式\nOH_Drawing_Image_Info imageInfo = {cWidth, cHeight, COLOR_FORMAT_RGBA_8888, ALPHA_FORMAT_PREMUL};\n// GPU上下文的选项\nOH_Drawing_GpuContextOptions options{true};\n    \n// 创建一个使用OpenGL（GL）作为其GPU后端的绘图上下文\nOH_Drawing_GpuContext *gpuContext = OH_Drawing_GpuContextCreateFromGL(options);\n// 创建surface对象\nOH_Drawing_Surface *surface = OH_Drawing_SurfaceCreateFromGpuContext(gpuContext, true, imageInfo);\n// 创建一个canvas对象\ncGPUCanvas_ = OH_Drawing_SurfaceGetCanvas(surface);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果需要将背景设置为白色，需要执行以下步骤："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 将背景设置为白色\nOH_Drawing_CanvasClear(cGPUCanvas_, OH_Drawing_ColorSetArgb(RGBA_MAX, RGBA_MAX, RGBA_MAX, 0xFF));\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将上一步中的绘制结果拷贝到", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%8E%B7%E5%8F%96%E5%8F%AF%E7%9B%B4%E6%8E%A5%E6%98%BE%E7%A4%BA%E7%9A%84canvas%E7%94%BB%E5%B8%83",
            children: "窗口画布"
          }), "上。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void* dstPixels = malloc(cWidth * cHeight * RGBA_SIZE); // 4 for rgba\nOH_Drawing_CanvasReadPixels(cGPUCanvas_, &imageInfo, dstPixels, RGBA_SIZE * cWidth, 0, 0);\nOH_Drawing_Bitmap* cOffScreenBitmap_ = OH_Drawing_BitmapCreateFromPixels(&imageInfo, dstPixels,\n    RGBA_SIZE * cWidth);\nOH_Drawing_CanvasDrawBitmap(cScreenCanvas_, cOffScreenBitmap_, 0, 0);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用完之后需要将EGL上下文销毁。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void SampleGraphics::DeInitializeEglContext()\n{\n    EGLBoolean ret = eglDestroySurface(EGLDisplay_, EGLSurface_);\n    if (!ret) {\n        SAMPLE_LOGE(\"eglDestroySurface failure.\");\n    }\n\n    ret = eglDestroyContext(EGLDisplay_, EGLContext_);\n    if (!ret) {\n        SAMPLE_LOGE(\"eglDestroyContext failure.\");\n    }\n\n    ret = eglTerminate(EGLDisplay_);\n    if (!ret) {\n        SAMPLE_LOGE(\"eglTerminate failure.\");\n    }\n\n    EGLSurface_ = NULL;\n    EGLContext_ = NULL;\n    EGLDisplay_ = NULL;\n}\n"
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