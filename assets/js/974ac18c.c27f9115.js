"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["708618"], {
202397(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkgraphics_2_d_graphic_drawing_and_display_graphic_drawing_overview_graphic_drawing_overview_md_974_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkgraphics-2-d-graphic-drawing-and-display-graphic-drawing-overview-graphic-drawing-overview-md-974.json
var site_docs_arkgraphics_2_d_graphic_drawing_and_display_graphic_drawing_overview_graphic_drawing_overview_md_974_namespaceObject = JSON.parse('{"id":"arkgraphics-2d/graphic-drawing-and-display/graphic-drawing-overview/graphic-drawing-overview","title":"图形绘制与显示开发概述","description":"场景介绍","source":"@site/docs/arkgraphics-2d/graphic-drawing-and-display/graphic-drawing-overview/graphic-drawing-overview.md","sourceDirName":"arkgraphics-2d/graphic-drawing-and-display/graphic-drawing-overview","slug":"/arkgraphics-2d/graphic-drawing-and-display/graphic-drawing-overview/","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/graphic-drawing-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"图形绘制与显示开发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphic-drawing-overview","kit":"graphics","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"过度绘制调试使用指导","permalink":"/harmonyos-docs-site/arkgraphics-2d/overdraw-dfx-guidelines/"},"next":{"title":"画布的获取与绘制结果的显示（ArkTS）","permalink":"/harmonyos-docs-site/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkgraphics-2d/graphic-drawing-and-display/graphic-drawing-overview/graphic-drawing-overview.md


const frontMatter = {
	title: '图形绘制与显示开发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphic-drawing-overview',
	kit: 'graphics',
	last_updated: '2026-04-22'
};
const contentTitle = '图形绘制与显示开发概述';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "绘制能力范围及实现流程",
  "id": "绘制能力范围及实现流程",
  "level": 2
}, {
  "value": "如何显示绘制结果",
  "id": "如何显示绘制结果",
  "level": 2
}, {
  "value": "与Canvas画布组件的关系",
  "id": "与canvas画布组件的关系",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "图形绘制与显示开发概述",
        children: "图形绘制与显示开发概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在开发中，经常需要针对不同的元素内容进行绘制，开发者通常可以选择直接使用ArkUI组件来绘制想要的元素或效果，但有些自定义图形或效果无法满足，此时可以选择使用Drawing来实现灵活的自定义绘制效果。另外，ArkUI组件具备直接上屏显示的能力，而Drawing更加关注绘制，需要依靠其他模块来完成绘制结果的上屏显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绘制能力范围及实现流程",
      children: "绘制能力范围及实现流程"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 图形绘制主要能力"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(507940)/* ["default"] */.A) + "",
        width: "689",
        height: "1354"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkGraphics 2D基于2D图像渲染引擎为开发者提供了一系列灵活多样的图形绘制接口。主要分为画布操作、绘制效果、图元绘制几方面，各部分支持能力关键列举如上图所示，后续可能支持更多相关能力，此处不再一一呈现，具体可关注对应API参考文档。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "画布操作、绘制效果、图元绘制也是实现图形绘制的关键步骤和流程，具体可见下图。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 图形绘制的实现流程"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(569716)/* ["default"] */.A) + "",
        width: "794",
        height: "850"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2D图形绘制过程和实际作画的过程是相似的，上图即以绘制经过旋转的红色填充矩形为例，提供了图形绘制的流程。主要实现流程和步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "创建画布（必选）"
          })
        }), "：画布作为图形绘制的承载，是最基本最关键的。在进行图形绘制时，需要先创建画布，确保图形可承载，才能进行后续的相关设置和操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "进行画布操作（可选）"
          })
        }), "：创建画布之后，可以基于画布进一步进行相关操作，比如裁剪、旋转、缩放等等。此步骤为可选步骤，开发者可以根据具体的场景需求选择进行对应的画布操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "设置绘制效果（可选）"
          })
        }), "：绘制效果主要通过画刷（Brush）和画笔（Pen）实现。画笔针对的是图形轮廓，画刷针对的是图形内部区域。通过画刷和画笔，可以实现丰富多样的填充效果和描边效果，开发者可根据具体UI效果和需要选择设置相关效果。如果不设置绘制效果，会使用默认的绘制效果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "绘制图元（必选）"
          })
        }), "：图形绘制最后一步即为图元的绘制，不论多么复杂的图形，都是基础图元的不同组合，当前ArkGraphics 2D支持多种图元的绘制。创建Canvas画布并完成相关操作和设置后，开发者再选择对应的图元进行绘制即可完成图形绘制的全部流程。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何显示绘制结果",
      children: "如何显示绘制结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上内容主要呈现了ArkGraphics 2D基于2D图像渲染引擎的主要绘制能力和实现流程，基于画布完成绘制后，还需要将绘制结果上屏显示才能完整实现屏幕上可见的图形UI内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Drawing的显示方式主要包括以下两种："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-rendernode/js-apis-arkui-rendernode",
          children: "RenderNode"
        }), "上屏显示（ArkTS）：通过RenderNode获取Canvas，进行绘制，由RenderNode将绘制结果上屏显示，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-arkts#%E8%8E%B7%E5%8F%96%E5%8F%AF%E7%9B%B4%E6%8E%A5%E6%98%BE%E7%A4%BA%E7%9A%84canvas%E7%94%BB%E5%B8%83",
          children: "画布的获取与绘制结果的显示（ArkTS）"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过XComponent上屏显示（C/C++）：创建Canvas，进行绘制，将绘制结果拷贝到buffer，由XComponent将绘制结果上屏显示，具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkgraphics-2d/graphic-drawing-and-display/canvas-get-result-draw/canvas-get-result-draw-c#%E8%8E%B7%E5%8F%96%E5%8F%AF%E7%9B%B4%E6%8E%A5%E6%98%BE%E7%A4%BA%E7%9A%84canvas%E7%94%BB%E5%B8%83",
          children: "画布的获取与绘制结果的显示（C/C++）"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与canvas画布组件的关系",
      children: "与Canvas画布组件的关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvas/ts-components-canvas-canvas",
        children: "Canvas组件"
      }), "也具有自绘制的能力，目前有", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-canvasrenderingcontext2d/ts-canvasrenderingcontext2d",
        children: "CanvasRenderingContext2D"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-offscreencanvasrenderingcontext2d/ts-offscreencanvasrenderingcontext2d",
        children: "OffscreenCanvasRenderingContext2D"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-drawingrenderingcontext/ts-drawingrenderingcontext",
        children: "DrawingRenderingContext"
      }), "两套API，应用使用两套绘制API绘制的内容都可以在绑定的Canvas组件上显示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中CanvasRenderingContext2D按照W3C标准封装了ArkGraphics 2D中Native Drawing的相关接口，可以方便快速复用Web应用的绘制逻辑，因此非常适用于Web应用和游戏、快速原型设计、数据可视化、在线绘图板、教学工具或创意应用等场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/canvas-drawing/ts-components-canvas-canvas/ts-components-canvas-canvas",
        children: "Canvas组件"
      }), "的底层也使用了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-module/capi-drawing/capi-drawing",
        children: "Native Drawing"
      }), "接口来实现绘制功能，在绘制能力上两者没有本质的区别。但因为多层封装的实现过程，使得Canvas组件在硬件接近性方面不如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-canvas-h/capi-drawing-canvas-h",
        children: "Native Drawing Canvas"
      }), "，因此对于性能要求比较高、绘制比较复杂、硬件依赖性比较强的场景，如专业图形处理软件、桌面或移动应用等，使用Canvas组件绘制可能会存在一定的卡顿、掉帧等性能问题，此时可以使用Native Drawing接口的自绘制能力，确保应用的绘制性能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对图形绘制过程中，使用的单位为像素（px）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkGraphics2D/Drawing/ArkTSGraphicsDraw",
          children: "图形绘制（ArkTS）"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
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
507940(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958632-1d46ed3bb89973a448b6c29207032eb3.jpg");

},
569716(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478633-b4ab70e434697307dda2bd6c54429fc6.jpg");

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