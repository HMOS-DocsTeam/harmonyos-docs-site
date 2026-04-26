"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["391028"], {
894770(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_hardware_api_pen_api_pen_arkts_pen_pointpredictor_pen_pointpredictor_md_6c3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-hardware-api-pen-api-pen-arkts-pen-pointpredictor-pen-pointpredictor-md-6c3.json
var site_docs_ref_system_hardware_api_pen_api_pen_arkts_pen_pointpredictor_pen_pointpredictor_md_6c3_namespaceObject = JSON.parse('{"id":"system-hardware-api/pen-api/pen-arkts/pen-pointpredictor/pen-pointpredictor","title":"PointPredictor（报点预测功能）","description":"*模型约束：* 此接口仅可在Stage模型下使用。","source":"@site/docs-ref/system-hardware-api/pen-api/pen-arkts/pen-pointpredictor/pen-pointpredictor.md","sourceDirName":"system-hardware-api/pen-api/pen-arkts/pen-pointpredictor","slug":"/system-hardware-api/pen-api/pen-arkts/pen-pointpredictor/pen-pointpredictor","permalink":"/harmonyos-docs-site/ref/system-hardware-api/pen-api/pen-arkts/pen-pointpredictor/pen-pointpredictor","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"PointPredictor（报点预测功能）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-pointpredictor","kit":"系统","last_updated":"2026-04-22","slug":"pen-pointpredictor"},"sidebar":"ref","previous":{"title":"HandwriteController (手写套件功能)","permalink":"/harmonyos-docs-site/ref/system-hardware-api/pen-api/pen-arkts/pen-handwritecontroller/pen-handwritecontroller"},"next":{"title":"InstantShapeGenerator（一笔成形功能）","permalink":"/harmonyos-docs-site/ref/system-hardware-api/pen-api/pen-arkts/pen-instantsshapegenerator/pen-instantsshapegenerator"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-hardware-api/pen-api/pen-arkts/pen-pointpredictor/pen-pointpredictor.md


const frontMatter = {
	title: 'PointPredictor（报点预测功能）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pen-pointpredictor',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'pen-pointpredictor'
};
const contentTitle = 'PointPredictor（报点预测功能）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "getPredictionPoint",
  "id": "getpredictionpoint",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "pointpredictor报点预测功能",
        children: "PointPredictor（报点预测功能）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Stylus.Handwrite"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { PointPredictor } from '@kit.Penkit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供以下方法。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "方法名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#getpredictionpoint",
              children: "getPredictionPoint"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取预测点信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getpredictionpoint",
      children: "getPredictionPoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getPredictionPoint(event: TouchEvent): TouchPoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取预测点信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Stylus.Handwrite"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#touchevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TouchEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前点信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#touchpoint11",
              children: "TouchPoint"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预测点信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { PointPredictor } from '@kit.Penkit';\n\n@Entry\n@Component\nstruct PointPredictorDemo {\n  @State actualXCoordinate: number = 0\n  @State actualYCoordinate: number = 0\n  @State predictorXCoordinate: Dimension = 0\n  @State predictorYCoordinate: Dimension = 0\n  pointPredictor: PointPredictor = new PointPredictor();\n\n  aboutToAppear() {\n    console.info('getPredictionPoint aboutToAppear')\n  }\n\n  aboutToDisappear() {\n    console.info('getPredictionPoint aboutToDisappear')\n  }\n\n  build() {\n    Stack({ alignContent: Alignment.TopEnd }) {\n      this.Canvas() // 画布。\n    }.height('100%').width('100%')\n  }\n\n  // 画布\n  @Builder\n  Canvas() {\n    Column() {\n      Text(\"实际点坐标： X: \" + this.actualXCoordinate + \" Y: \" + this.actualYCoordinate).textAlign(TextAlign.Start)\n      Text(\"预测点坐标： X: \" + this.predictorXCoordinate + \" Y: \" + this.predictorYCoordinate)\n        .textAlign(TextAlign.Start)\n    }.position({ x: 0, y: 0 })\n    .alignItems(HorizontalAlign.Start)\n\n    Stack()\n      .width('100%')\n      .height('100%')\n      .onTouch((event: TouchEvent) => {\n        switch (event.type) {\n          case TouchType.Down: // 按下时，新建一条画图路径。\n            break;\n          case TouchType.Move: // 使用预测算法进行预测，获得预测点。\n            let point = this.pointPredictor?.getPredictionPoint(event)\n            this.actualXCoordinate = event.touches[0]?.x\n            this.actualYCoordinate = event.touches[0]?.y\n            this.predictorXCoordinate = point?.x\n            this.predictorYCoordinate = point?.y\n            console.info(\"pointPredictor 实际点坐标 x:\" + event.touches[0]?.x + \" y:\" + event.touches[0]?.y)\n            console.info(\"pointPredictor 预测点坐标 x:\" + point?.x + \"  y:\" + point?.y)\n            break;\n          case TouchType.Up:\n            break;\n        }\n      })\n  }\n}\n"
      })
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