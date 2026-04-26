"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["18876"], {
881183(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_pen_kit_guide_pen_features_pen_point_prediction_pen_point_prediction_md_241_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-pen-kit-guide-pen-features-pen-point-prediction-pen-point-prediction-md-241.json
var site_docs_system_hardware_pen_kit_guide_pen_features_pen_point_prediction_pen_point_prediction_md_241_namespaceObject = JSON.parse('{"id":"system-hardware/pen-kit-guide/pen-features/pen-point-prediction/pen-point-prediction","title":"接入报点预测","description":"接入报点预测功能，可以优化应用中手写效果的绘制跟手性，提升应用中手写笔书写场景的跟手体验。","source":"@site/docs/system-hardware/pen-kit-guide/pen-features/pen-point-prediction/pen-point-prediction.md","sourceDirName":"system-hardware/pen-kit-guide/pen-features/pen-point-prediction","slug":"/system-hardware/pen-kit-guide/pen-features/pen-point-prediction/","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-features/pen-point-prediction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"接入报点预测","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pen-point-prediction","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"接入手写套件","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-features/pen-suite/"},"next":{"title":"接入一笔成形","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-features/pen-instant-shape/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/pen-kit-guide/pen-features/pen-point-prediction/pen-point-prediction.md


const frontMatter = {
	title: '接入报点预测',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pen-point-prediction',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '接入报点预测';

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
        id: "接入报点预测",
        children: "接入报点预测"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接入报点预测功能，可以优化应用中手写效果的绘制跟手性，提升应用中手写笔书写场景的跟手体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用的自定义界面中，获取到界面的触摸事件，通过调用报点预测的接口，可以得到预测的下一个报点的位置信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(107881)/* ["default"] */.A) + "",
        width: "525",
        height: "263"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-pointpredictor/pen-pointpredictor",
              children: "PointPredictor"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-pointpredictor/pen-pointpredictor#getpredictionpoint",
              children: "getPredictionPoint"
            }), "(event: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#touchevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TouchEvent"
            }), "): ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#touchpoint11",
              children: "TouchPoint"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取预测点"
          })]
        })
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
            children: "import { PointPredictor } from '@kit.Penkit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取当前界面的触摸事件信息，调用接口计算预测点信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct PointPredictorDemo {\n  @State actualXCoordinate: number = 0\n  @State actualYCoordinate: number = 0\n  @State predictorXCoordinate: Dimension = 0\n  @State predictorYCoordinate: Dimension = 0\n  pointPredictor: PointPredictor = new PointPredictor();\n\n  aboutToAppear() {\n    console.info('getPredictionPoint aboutToAppear')\n  }\n\n  aboutToDisappear() {\n    console.info('getPredictionPoint aboutToDisappear')\n  }\n\n  build() {\n    Stack({ alignContent: Alignment.TopEnd }) {\n      this.Canvas() // 画布\n    }.height('100%').width('100%')\n  }\n\n  // 画布\n  @Builder\n  Canvas() {\n    Column() {\n      Text(\"实际点坐标： X: \" + this.actualXCoordinate + \" Y: \" + this.actualYCoordinate).textAlign(TextAlign.Start)\n      Text(\"预测点坐标： X: \" + this.predictorXCoordinate + \" Y: \" + this.predictorYCoordinate)\n        .textAlign(TextAlign.Start)\n    }.position({ x: 0, y: 0 })\n    .alignItems(HorizontalAlign.Start)\n\n    Stack()\n      .width('100%')\n      .height('100%')\n      .onTouch((event: TouchEvent) => {\n        switch (event.type) {\n          case TouchType.Down: // 按下时，新建一条画图路径\n            break;\n          case TouchType.Move: // 使用预测算法进行预测,获得预测点\n            let point = this.pointPredictor?.getPredictionPoint(event)\n            this.actualXCoordinate = event.touches[0]?.x\n            this.actualYCoordinate = event.touches[0]?.y\n            this.predictorXCoordinate = point?.x\n            this.predictorYCoordinate = point?.y\n            console.info(\"pointPredictor 实际点坐标 x:\" + event.touches[0]?.x + \" y:\" + event.touches[0]?.y)\n            console.info(\"pointPredictor 预测点坐标 x:\" + point?.x + \"  y:\" + point?.y)\n            break;\n          case TouchType.Up:\n            break;\n        }\n      })\n  }\n}\n"
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
107881(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438523-f4fbb6397fc12b307e2044bd36836021.png");

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