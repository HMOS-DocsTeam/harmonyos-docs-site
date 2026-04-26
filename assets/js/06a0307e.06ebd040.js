"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["550596"], {
648384(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_graphic_drawing_and_display_primitive_drawing_pixelmap_drawing_arkts_pixelmap_drawing_arkts_md_06a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-graphic-drawing-and-display-primitive-drawing-pixelmap-drawing-arkts-pixelmap-drawing-arkts-md-06a.json
var site_docs_arkgraphics_2_d_graphic_drawing_and_display_primitive_drawing_pixelmap_drawing_arkts_pixelmap_drawing_arkts_md_06a_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/pixelmap-drawing-arkts/pixelmap-drawing-arkts","title":"图片绘制（ArkTS）","description":"位图是一种用于在内存中存储和表示图像的数据结构，它是一个未经过压缩的像素集合，而JPEG或PNG等格式的图片是压缩格式的，两者并不相同。如果需要将JPEG或PNG绘制到屏幕上，需要先解码成位图格式，具体可参考图片处理服务（Image Kit）图片解码相关章节。","source":"@site/docs/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/pixelmap-drawing-arkts/pixelmap-drawing-arkts.md","sourceDirName":"arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/pixelmap-drawing-arkts","slug":"/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/pixelmap-drawing-arkts/","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/pixelmap-drawing-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"图片绘制（ArkTS）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pixelmap-drawing-arkts","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"几何形状绘制（ArkTS）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/geometric-shape-drawing-arkts/"},"next":{"title":"字块绘制（ArkTS）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/textblock-drawing-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/graphic-drawing-and-display/primitive-drawing/pixelmap-drawing-arkts/pixelmap-drawing-arkts.md


const frontMatter = {
	title: '图片绘制（ArkTS）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pixelmap-drawing-arkts',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '图片绘制（ArkTS）';

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
        id: "图片绘制arkts",
        children: "图片绘制（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["位图是一种用于在内存中存储和表示图像的数据结构，它是一个未经过压缩的像素集合，而JPEG或PNG等格式的图片是压缩格式的，两者并不相同。如果需要将JPEG或PNG绘制到屏幕上，需要先解码成位图格式，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/image-kit/image-overview",
        children: "图片处理服务（Image Kit）"
      }), "图片解码相关章节。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["目前Drawing（ArkTS）中位图绘制需要依赖PixelMap，它可以用于读取或写入图像数据以及获取图像信息。详细的API介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
        children: "PixelMap"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建PixelMap。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["有多个API接口可以创建PixelMap，下文以createPixelMapSync()为例。更多创建方式和接口请见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image/arkts-apis-image",
            children: "@ohos.multimedia.image (图片处理)"
          }), "模块。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 图片宽高\nlet width = 600;\nlet height = 400;\n// 字节长度，RGBA_8888每个像素占4字节\nlet byteLength = width * height * 4;\nconst color: ArrayBuffer = new ArrayBuffer(byteLength);\nlet bufferArr = new Uint8Array(color);\nfor (let i = 0; i < bufferArr.length; i += 4) {\n  // 遍历并编辑每个像素，从而形成红绿蓝相间的条纹\n  bufferArr[i] = 0x00;\n  bufferArr[i+1] = 0x00;\n  bufferArr[i+2] = 0x00;\n  bufferArr[i+3] = 0xFF;\n  let n = Math.floor(i / 80) % 3;\n  if (n == 0) {\n    bufferArr[i] = 0xFF;\n  } else if (n == 1) {\n    bufferArr[i+1] = 0xFF;\n  } else {\n    bufferArr[i+2] = 0xFF;\n  }\n}\n// 设置像素属性\nlet opts: image.InitializationOptions =\n  { editable: true, pixelFormat: image.PixelMapFormat.RGBA_8888, size: { height: height, width: width } };\n// 创建PixelMap\npixelMap = image.createPixelMapSync(color, opts);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）编辑PixelMap中的像素。如果没有编辑像素的需求，此步骤可以省略。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["有多个API接口可以编辑PixelMap中的像素，下文以writePixelsSync()为例。更多方式和接口的使用可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
            children: "PixelMap"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 设置编辑区域的宽高\nlet innerWidth = 400;\nlet innerHeight = 200;\n// 编辑区域的字节长度，RGBA_8888每个像素占4字节\nlet innerByteLength = innerWidth * innerHeight * 4;\nconst innerColor: ArrayBuffer = new ArrayBuffer(innerByteLength);\nlet innerBufferArr = new Uint8Array(innerColor);\nfor (let i = 0; i < innerBufferArr.length; i += 4) {\n  // 编辑区域的像素都设置为黑白相间条纹\n  let n = Math.floor(i / 80) % 2;\n  if (n == 0) {\n    innerBufferArr[i] = 0x00;\n    innerBufferArr[i+1] = 0x00;\n    innerBufferArr[i+2] = 0x00;\n  } else {\n    innerBufferArr[i] = 0xFF;\n    innerBufferArr[i+1] = 0xFF;\n    innerBufferArr[i+2] = 0xFF;\n  }\n  innerBufferArr[i+3] = 0xFF;\n}\n// 设置编辑区域的像素、宽高、偏移量等\nconst area: image.PositionArea = {\n  pixels: innerColor,\n  offset: 0,\n  stride: innerWidth * 4,\n  region: { size: { height: innerHeight, width: innerWidth }, x: 100, y: 100 }\n};\n// 编辑位图，形成中间的黑白相间条纹\npixelMap.writePixelsSync(area);\n// 为了使图片完全显示，修改绘制起点参数为（0，0）\ncanvas.drawImage(pixelMap, 0, 0);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绘制PixelMap。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["绘制PixelMap时需要通过Canvas相关接口绘制位图，下文以drawImage()为例。更多方式和接口的使用请见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-drawing/arkts-apis-graphics-drawing-canvas/arkts-apis-graphics-drawing-canvas",
            children: "drawing.Canvas"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "drawImage()函数接受4个参数，第一个就是上文中创建的PixelMap，第二个是绘制图片位置的左上角x轴坐标，第三个是左上角y轴坐标，第四个为采样选项对象，默认为不使用任何参数构造的原始采样选项对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 为了使图片完全显示，修改绘制起点参数为（0，0）\ncanvas.drawImage(pixelMap, 0, 0);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绘制效果如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(302898)/* ["default"] */.A) + "",
            width: "493",
            height: "258"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkGraphics2D/Drawing/ArkTSGraphicsDraw",
          children: "图形绘制（ArkTS）"
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
302898(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799010-945c8c190c4baced2527ab315a4819a2.png");

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