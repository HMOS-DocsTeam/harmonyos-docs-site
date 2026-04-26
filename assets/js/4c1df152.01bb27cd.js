"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["928174"], {
766960(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_pen_kit_guide_pen_features_pen_instant_shape_pen_instant_shape_md_4c1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-pen-kit-guide-pen-features-pen-instant-shape-pen-instant-shape-md-4c1.json
var site_docs_system_hardware_pen_kit_guide_pen_features_pen_instant_shape_pen_instant_shape_md_4c1_namespaceObject = JSON.parse('{"id":"system-hardware/pen-kit-guide/pen-features/pen-instant-shape/pen-instant-shape","title":"接入一笔成形","description":"接入一笔成形功能，可以传入手写笔迹的点位信息、通过手写笔/手指在屏幕上停顿一定的时间后触发此功能，触发功能后将自动识别当前绘制的图形，并生成对应的图像信息。","source":"@site/docs/system-hardware/pen-kit-guide/pen-features/pen-instant-shape/pen-instant-shape.md","sourceDirName":"system-hardware/pen-kit-guide/pen-features/pen-instant-shape","slug":"/system-hardware/pen-kit-guide/pen-features/pen-instant-shape/","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-features/pen-instant-shape/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"接入一笔成形","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pen-instant-shape","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"接入报点预测","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-features/pen-point-prediction/"},"next":{"title":"接入全局取色","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-features/pen-image-feature-picker/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/pen-kit-guide/pen-features/pen-instant-shape/pen-instant-shape.md


const frontMatter = {
	title: '接入一笔成形',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pen-instant-shape',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '接入一笔成形';

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
    img: "img",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "接入一笔成形",
        children: "接入一笔成形"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接入一笔成形功能，可以传入手写笔迹的点位信息、通过手写笔/手指在屏幕上停顿一定的时间后触发此功能，触发功能后将自动识别当前绘制的图形，并生成对应的图像信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用中实现一笔成形，效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(820152)/* ["default"] */.A) + "",
        width: "525",
        height: "295"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持获取识别的图像信息，图像信息支持存储。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持从存储的图像信息中读取信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-instantsshapegenerator/pen-instantsshapegenerator",
              children: "InstantShapeGenerator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-instantsshapegenerator/pen-instantsshapegenerator#processtouchevent",
              children: "processTouchEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传递触摸事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-instantsshapegenerator/pen-instantsshapegenerator",
              children: "InstantShapeGenerator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-instantsshapegenerator/pen-instantsshapegenerator#getpathfromstring",
              children: "getPathFromString"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从给定的形状字符串中提取形状信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-instantsshapegenerator/pen-instantsshapegenerator",
              children: "InstantShapeGenerator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-instantsshapegenerator/pen-instantsshapegenerator#notifyareachange",
              children: "notifyAreaChange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知组件大小变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-instantsshapegenerator/pen-instantsshapegenerator",
              children: "InstantShapeGenerator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-instantsshapegenerator/pen-instantsshapegenerator#setpausetime",
              children: "setPauseTime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置触发识别的暂停时间，单位：ms。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-instantsshapegenerator/pen-instantsshapegenerator",
              children: "InstantShapeGenerator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-instantsshapegenerator/pen-instantsshapegenerator#release",
              children: "release"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁识别工具。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-instantsshapegenerator/pen-instantsshapegenerator",
              children: "InstantShapeGenerator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-instantsshapegenerator/pen-instantsshapegenerator#onshaperecognized",
              children: "onShapeRecognized"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册识别完成时的回调方法。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { InstantShapeGenerator, ShapeInfo } from '@kit.Penkit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造包含一笔成形能力，下面以控件为例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct InstantShapeDemo {\n  private instantShapeGenerator: InstantShapeGenerator = new InstantShapeGenerator();\n  private points: DrawPathPointModel[] = [];\n  // 绘制路径\n  private drawPath = new Path2D();\n  private shapePath = new Path2D();\n  private mShapeSuccess = false;\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private context: CanvasRenderingContext2D = new CanvasRenderingContext2D(this.settings);\n  // 通过回调方法获取识别结果\n  private shapeInfoCallback = (shapeInfo: ShapeInfo) => {\n    this.shapePath = shapeInfo.shapePath;\n    this.mShapeSuccess = true;\n    this.context.beginPath();\n    this.context.reset();\n    this.drawCurrentPathModel(this.shapePath);\n  }\n\n  aboutToAppear() {\n    console.info('InstantShapeGenerator aboutToAppear');\n    // 设置触发识别的暂停时间\n    this.instantShapeGenerator?.setPauseTime(280);\n    // 注册完成时的回调方法\n    this.instantShapeGenerator?.onShapeRecognized(this.shapeInfoCallback);\n  }\n\n  aboutToDisappear() {\n    console.info('InstantShapeGenerator aboutToDisappear')\n    this.instantShapeGenerator?.release();\n  }\n\n  build() {\n    Stack({ alignContent: Alignment.TopEnd }) {\n      Canvas(this.context)\n        .width('100%')\n        .height('100%')\n        .onAreaChange((oldValue: Area, newValue: Area) => {\n          // 通知组件大小变化。形状的大小（例如圆的半径）根据组件尺寸而变化\n          this.instantShapeGenerator?.notifyAreaChange(Number(newValue.width), Number(newValue.height));\n        }).onTouch((event: TouchEvent) => {\n        // 传递触摸事件\n        this.instantShapeGenerator?.processTouchEvent(event);\n        switch (event.type) {\n          case TouchType.Down:\n            this.moveStart(event.touches[0]?.x, event.touches[0]?.y);\n            break;\n          case TouchType.Move:\n            this.moveUpdate(event.touches[0]?.x, event.touches[0]?.y);\n            break;\n          case TouchType.Up:\n            this.moveEnd();\n            break;\n        }\n      })\n    }.height('100%').width('100%')\n  }\n\n  moveStart(x: number, y: number) {\n    this.points.push({ x: x, y: y })\n    this.drawPath.moveTo(x, y);\n    this.drawCurrentPathModel(this.drawPath);\n    this.mShapeSuccess = false;\n  }\n\n  moveUpdate(x: number, y: number) {\n    let lastPoint = this.points[this.points.length - 1];\n    this.points.push({ x: x, y: y });\n    this.drawPath.quadraticCurveTo((x + lastPoint?.x) / 2, (y + lastPoint?.y) / 2, x, y);\n    if (!this.mShapeSuccess) {\n      this.drawCurrentPathModel(this.drawPath);\n    }\n  }\n\n  moveEnd() {\n    this.points = [];\n    this.drawPath = new Path2D();\n    this.shapePath = new Path2D();\n  }\n\n  private drawCurrentPathModel(path: Path2D) {\n    this.context.globalCompositeOperation = 'source-over';\n    this.context.lineWidth = 8;\n    this.context.strokeStyle = \"#ED1B1B\";\n    this.context.lineJoin = 'round';\n    this.context.stroke(path);\n  }\n}\n\nexport class DrawPathPointModel {\n  x: number = 0;\n  y: number = 0;\n}\n"
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
820152(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438521-5a4e28f61cd6c25ed5fc1e4cc874e4a0.gif");

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