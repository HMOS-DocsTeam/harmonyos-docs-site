"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["633614"], {
324413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_graphic_drawing_and_display_canvas_get_result_draw_canvas_get_result_draw_arkts_canvas_get_result_draw_arkts_md_70e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-graphic-drawing-and-display-canvas-get-result-draw-canvas-get-result-draw-arkts-canvas-get-result-draw-arkts-md-70e.json
var site_docs_arkgraphics_2_d_graphic_drawing_and_display_canvas_get_result_draw_canvas_get_result_draw_arkts_canvas_get_result_draw_arkts_md_70e_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-arkts/canvas-get-result-draw-arkts","title":"画布的获取与绘制结果的显示（ArkTS）","description":"场景介绍","source":"@site/docs/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-arkts/canvas-get-result-draw-arkts.md","sourceDirName":"arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-arkts","slug":"/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-arkts/","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"画布的获取与绘制结果的显示（ArkTS）","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/canvas-get-result-draw-arkts","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"图形绘制与显示开发概述","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/graphic-drawing-overview/"},"next":{"title":"画布的获取与绘制结果的显示（C/C++）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-arkts/canvas-get-result-draw-arkts.md


const frontMatter = {
	title: '画布的获取与绘制结果的显示（ArkTS）',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/canvas-get-result-draw-arkts',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '画布的获取与绘制结果的显示（ArkTS）';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
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
        id: "画布的获取与绘制结果的显示arkts",
        children: "画布的获取与绘制结果的显示（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Canvas即画布，提供绘制基本图形的能力，用于在屏幕上绘制图形和处理图形。开发者可以通过Canvas实现自定义的绘图效果，增强应用的用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Canvas是图形绘制的核心，本章中提到的所有绘制操作（包括基本图形的绘制、文字的绘制、图片的绘制、图形变换等）都是基于Canvas的。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["目前ArkTS有两种获取Canvas的方式：", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8E%B7%E5%8F%96%E5%8F%AF%E7%9B%B4%E6%8E%A5%E6%98%BE%E7%A4%BA%E7%9A%84canvas%E7%94%BB%E5%B8%83",
        children: "获取可直接显示的Canvas画布"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A6%BB%E5%B1%8Fcanvas%E7%94%BB%E5%B8%83%E7%9A%84%E8%8E%B7%E5%8F%96%E4%B8%8E%E6%98%BE%E7%A4%BA",
        children: "获取离屏的Canvas"
      }), "，前者在调用绘制接口之后无需进行额外的操作即可完成绘制结果的上屏显示，而后者需要依靠已有的显示手段来显示绘制结果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取可直接显示的canvas画布",
      children: "获取可直接显示的Canvas画布"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
        children: "RenderNode"
      }), "获取可直接上屏显示的Canvas画布。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖的相关文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIContext, NodeController, FrameNode, RenderNode, DrawContext} from '@kit.ArkUI';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { drawing } from '@kit.ArkGraphics2D';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加自定义RenderNode。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 2. 自定义 RenderNode\nclass MyRenderNodeDirectDisplay extends RenderNode {\n  async draw(context: DrawContext) {\n    const canvas = context.canvas;\n    if (canvas === null) {\n      console.error('Canvas is null.');\n      return;\n    }\n    // 4. 自定义的绘制相关操作\n    const brush = new drawing.Brush();\n    if (brush === null) {\n      console.error('Brush is null.');\n      return;\n    } else {\n      brush.setColor({red: 255, blue: 0, green: 0, alpha: 255});\n      canvas.attachBrush(brush);\n      canvas.drawRect({left: 0, right: 300, top: 0, bottom: 300});\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["添加自定义", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller",
            children: "NodeController"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 3. 自定义 NodeController\nclass MyNodeControllerDirectDisplay extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private myRenderNode = new MyRenderNodeDirectDisplay();\n\n  makeNode(uiContext: UIContext): FrameNode {\n    this.rootNode = new FrameNode(uiContext);\n    if (this.rootNode === null) {\n      return this.rootNode;\n    }\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode !== null) {\n      this.myRenderNode.backgroundColor = 0xffffffff;\n      this.myRenderNode.frame = { x: 0, y: 0, width: 4800, height: 4800 };\n      this.myRenderNode.pivot = { x: 0.2, y: 0.8 };\n      this.myRenderNode.scale = { x: 1, y: 1 };\n      renderNode.appendChild(this.myRenderNode);\n      renderNode.clipToFrame = true;\n    }\n    return this.rootNode;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["重写自定义RenderNode的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#draw",
            children: "draw()"
          }), "函数，获取Canvas进行自定义的绘制操作，即本章下文中的内容。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async draw(context: DrawContext) {\n  const canvas = context.canvas;\n  if (canvas === null) {\n    console.error('Canvas is null.');\n    return;\n  }\n  // 4. 自定义的绘制相关操作\n  const brush = new drawing.Brush();\n  if (brush === null) {\n    console.error('Brush is null.');\n    return;\n  } else {\n    brush.setColor({red: 255, blue: 0, green: 0, alpha: 255});\n    canvas.attachBrush(brush);\n    canvas.drawRect({left: 0, right: 300, top: 0, bottom: 300});\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将自定义NodeController进行显示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct RenderTest {\n  @State message: string = 'hello';\n  myNodeController_1 = new MyNodeControllerDirectDisplay();\n  myNodeController_2 = new MyNodeControllerIndirectDisplay();\n\n  build() {\n    Row() {\n      Column() {\n        Column(){\n          Text($r('app.string.DirectCanvas'))\n          // 直接上屏显示画布\n          NodeContainer(this.myNodeController_1)\n            .width('100%')\n            .height('40%')\n        }\n        Column(){\n          Text($r('app.string.OffScreenCanvas'))\n          // 离屏画布\n          NodeContainer(this.myNodeController_2)\n            .width('100%')\n            .height('40%')\n            .margin({ top: 20 })\n        }\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "离屏canvas画布的获取与显示",
      children: "离屏Canvas画布的获取与显示"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入依赖的相关文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIContext, NodeController, FrameNode, RenderNode, DrawContext} from '@kit.ArkUI';\nimport { image } from '@kit.ImageKit';\nimport { taskpool } from '@kit.ArkTS';\nimport { drawing } from '@kit.ArkGraphics2D';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加自定义RenderNode。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["添加自定义", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-nodecontroller/js-apis-arkui-nodecontroller",
            children: "NodeController"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在MyNodeController的aboutToAppear()函数中创建PixelMap。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["重写自定义RenderNode的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode#draw",
            children: "draw()"
          }), "函数，在其中获取离屏Canvas进行绘制："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "利用4中创建的PixelMap构造离屏Canvas。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "对离屏Canvas进行自定义的绘制操作。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "将离屏Canvas的绘制结果交给RenderNode。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 2. 自定义RenderNode\nexport class MyRenderNodeIndirectDisplay extends RenderNode {\n  private pixelMap: image.PixelMap | null = null;\n  setPixelMap(pixelMap: image.PixelMap) {\n    this.pixelMap = pixelMap;\n  }\n\n  async draw(context: DrawContext) {\n    const canvas = context.canvas;\n    if (this.pixelMap != null) {\n      // 5.1 利用4中创建的PixelMap构造离屏Canvas\n      const canvas_ = new drawing.Canvas(this.pixelMap);\n\n      // 5.2 离屏绘制\n      const brush = new drawing.Brush();\n      brush.setColor({ alpha: 255, red: 0, green: 0, blue: 255 });\n      canvas_.attachBrush(brush);\n      canvas_.drawRect({ left: 150, right: 575, top: 0, bottom: 600 });\n\n      // 5.3 将离屏Canvas的绘制结果交给RenderNode\n      canvas.drawImage(this.pixelMap, 0, 0);\n    }\n  }\n}\n\n@Concurrent\nasync function createPixelMapAsync() {\n  // 4000000为需要创建的像素buffer大小，取值为：height * width *4\n  const color : ArrayBuffer = new ArrayBuffer(4000000);\n  let opts : image.InitializationOptions = { editable: true, pixelFormat: 3, size: { height: 1000, width: 1000 } };\n  const pixel = await image.createPixelMap(color, opts);\n  return pixel;\n}\n\n// 3. 自定义NodeController\nexport class MyNodeControllerIndirectDisplay extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private myRenderNode = new MyRenderNodeIndirectDisplay();\n\n  // 4. 在MyNodeController的aboutToAppear中创建PixeMap\n  aboutToAppear(): void {\n    let task = new taskpool.Task(createPixelMapAsync);\n    taskpool.execute(task).then((pixel:Object)=>{\n      this.myRenderNode.setPixelMap(pixel as image.PixelMap);\n      this.myRenderNode.invalidate();\n    })\n  }\n\n  makeNode(uiContext: UIContext): FrameNode {\n    this.rootNode = new FrameNode(uiContext);\n    if (this.rootNode === null) {\n      return this.rootNode;\n    }\n\n    const renderNode = this.rootNode.getRenderNode();\n    if (renderNode !== null) {\n      this.myRenderNode.backgroundColor = 0xffffffff;\n      this.myRenderNode.frame = { x: 0, y: 0, width: 4800, height: 4800 };\n      this.myRenderNode.pivot = { x: 0.2, y: 0.8 };\n      this.myRenderNode.scale = { x: 1, y: 1 };\n      renderNode.appendChild(this.myRenderNode);\n      renderNode.clipToFrame = true;\n    }\n    return this.rootNode;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将自定义NodeController进行显示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct RenderTest {\n  @State message: string = 'hello';\n  myNodeController_1 = new MyNodeControllerDirectDisplay();\n  myNodeController_2 = new MyNodeControllerIndirectDisplay();\n\n  build() {\n    Row() {\n      Column() {\n        Column(){\n          Text($r('app.string.DirectCanvas'))\n          // 直接上屏显示画布\n          NodeContainer(this.myNodeController_1)\n            .width('100%')\n            .height('40%')\n        }\n        Column(){\n          Text($r('app.string.OffScreenCanvas'))\n          // 离屏画布\n          NodeContainer(this.myNodeController_2)\n            .width('100%')\n            .height('40%')\n            .margin({ top: 20 })\n        }\n      }\n    }\n  }\n}\n"
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