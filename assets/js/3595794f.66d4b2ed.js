"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["897396"], {
253919(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_pen_kit_guide_pen_features_pen_suite_pen_suite_md_359_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-pen-kit-guide-pen-features-pen-suite-pen-suite-md-359.json
var site_docs_system_hardware_pen_kit_guide_pen_features_pen_suite_pen_suite_md_359_namespaceObject = JSON.parse('{"id":"system-hardware/pen-kit-guide/pen-features/pen-suite/pen-suite","title":"接入手写套件","description":"接入手写套件后，可以在应用中创建手写功能界面。界面包括画布和工具栏两部分，画布部分支持手写笔和手指的书写效果绘制，工具栏部分提供多种笔刷和编辑工具，并支持对手写功能进行设置。接入手写套件后将自动开启一笔成形和报点预测功能，无需再单独接入。","source":"@site/docs/system-hardware/pen-kit-guide/pen-features/pen-suite/pen-suite.md","sourceDirName":"system-hardware/pen-kit-guide/pen-features/pen-suite","slug":"/system-hardware/pen-kit-guide/pen-features/pen-suite/","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-features/pen-suite/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"接入手写套件","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pen-suite","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Pen Kit简介","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-introduction/"},"next":{"title":"接入报点预测","permalink":"/harmonyos-docs-site/system-hardware/pen-kit-guide/pen-features/pen-point-prediction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/pen-kit-guide/pen-features/pen-suite/pen-suite.md


const frontMatter = {
	title: '接入手写套件',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pen-suite',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '接入手写套件';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "开发流程",
  "id": "开发流程",
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
        id: "接入手写套件",
        children: "接入手写套件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接入手写套件后，可以在应用中创建手写功能界面。界面包括画布和工具栏两部分，画布部分支持手写笔和手指的书写效果绘制，工具栏部分提供多种笔刷和编辑工具，并支持对手写功能进行设置。接入手写套件后将自动开启一笔成形和报点预测功能，无需再单独接入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.1.0(18)开始，手写套件新增支持设置工具栏默认笔刷、各笔刷默认宽度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20)开始，手写套件新增支持自定义画布大小、缩略图能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.1.0(23)开始，手写套件新增禁用画布缩放、设置滚动位置ScrollTo及监听长画布滚动位置、自定义长画布最大高度能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用中创建手写功能界面，效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(776694)/* ["default"] */.A) + "",
        width: "525",
        height: "471"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可以加载和显示手写文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可以编辑和保存手写文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pen Kit手写套件仅支持上下滑动，不支持左右滑动。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(333818)/* ["default"] */.A) + "",
        width: "430",
        height: "541"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts-component/pen-handwritecomponent/pen-handwritecomponent",
              children: "HandwriteComponent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建画布控件"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/pen-api/pen-arkts/pen-handwritecontroller/pen-handwritecontroller",
              children: "HandwriteController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "画布的主要功能入口类"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "EntryAbility入口设置Context。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport GlobalContext from '../utils/ContextConfig';\n\nexport default class EntryAbility extends UIAbility {\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // 主窗口已创建，为此功能设置主页面\n    windowStage.loadContent('pages/HandWritingDemo', (err) => {\n      if (err.code) {\n        return;\n      }\n    });\n    GlobalContext.setContext(this.context);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建GlobalContext类。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from \"@kit.AbilityKit\";\n\ndeclare namespace globalThis {\n  let _brushEngineContext: common.UIAbilityContext;\n};\n\nexport default class GlobalContext {\n  static getContext(): common.UIAbilityContext {\n    return globalThis._brushEngineContext;\n  }\n\n  static setContext(context: common.UIAbilityContext): void {\n    globalThis._brushEngineContext = context;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造包含手写组件的控件/页面，下面以控件为例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { HandwriteController, HandwriteComponent, PenType, PenHspInfo } from '@kit.Penkit';\n\n@Entry\n@Component\nstruct HandWriteDemoComp {\n  controller: HandwriteController = new HandwriteController();\n  // 根据应用存储规则，获取到手写文件保存的路径，此处仅为实例参考\n  initPath: string = this.getUIContext().getHostContext()?.filesDir + '/aa';\n  penWidth: number = 5;\n  ballpointPenWidth: number = 6;\n  @State yOffset: number = 0;\n\n  aboutToAppear() {\n    // 加载时设置保存动作完成后的回调。\n    this.controller.onLoad(this.callback);\n  }\n\n  // 手写文件内容加载完毕渲染上屏后的回调,通知接入用户,可在此处进行自定义行为\n  callback = () => {\n    // 自定义行为,例如文件加载完毕后展示用户操作指导\n  }\n\n  build() {\n    Row() {\n      Stack({ alignContent: Alignment.TopStart }) {\n        HandwriteComponent({\n          handwriteController: this.controller,\n          defaultPenType: PenType.PEN, // 可选属性，默认笔刷\n          defaultPenInfo: [{ penType: PenType.PEN, penWidth: this.penWidth },\n            { penType: PenType.BALLPOINT_PEN, penWidth: this.ballpointPenWidth }] as PenHspInfo[], // 可选属性，各笔刷的默认宽度\n          widthRatio: 1, // 可选属性，自定义画布大小，宽度占比（0-1）。\n          heightRatio: 1, // 可选属性，自定义画布大小，高度占比（0-1）。\n          maxCanvasHeight: 5000, // 可选属性，自定义画布最大高度\n          scaleDisabled: false, // 可选属性，是否禁止缩放\n          onInit: () => {\n            // 画布初始化完成时的回调。此时可以调用接口加载和显示笔记内容\n            this.controller?.load(this.initPath);\n          },\n          onScale: (scale: number) => {\n            // 画布缩放时的回调方法，将返回当前手写控件的缩放比例，可在此处进行自定义行为。\n          },\n          onDidScroll: (yOffset: number) => {\n            // 画布滚动时的回调方法，将返回当前滚动位置的纵坐标，可在此处进行自定义行为。\n            this.yOffset = yOffset\n          }\n        })\n        // 保存及获取缩略图。非必要组件，用户可自行调整或删除。\n        Button(\"save\")\n          .onClick(async () => {\n            // 需根据应用存储规则，获取到手写文件保存的路径，此处仅为实例参考\n            const path = this.getUIContext().getHostContext()?.filesDir + '/aa';\n            await this.controller?.save(path).then().catch((error: Error) => {\n              console.error(\"save err：\" + error.message);\n            })\n            // 获取缩略图\n            this.controller.getThumbnail(this.controller?.getContentRange())?.then((pixelMap: PixelMap) => {\n              if (pixelMap) {\n                pixelMap.release()\n                console.info('getThumbnail success')\n              }\n            })\n          })\n        // 设置长画布的滚动位置。当前可滚动最大距离为px2vp(1000000)减去list组件高度。\n        Search()\n          .searchButton('scrollTo').onSubmit((value: string) => {\n          if (!Number.isNaN(Number(value))) {\n            this.controller.scrollTo(Number(value))\n          }\n        }).margin({ top: 100 }).width(220)\n        // 当前画布的偏移量。\n        Text(\"onDidScroll：\" + this.yOffset)\n          .margin({ top: 150 }).width(220)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例代码可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/codelabsPortal/carddetails/tutorials_PenKit-Next-Easy",
        children: "手写笔服务（ArkTS）"
      }), "。"]
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
776694(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478477-6ab8deea34c5f38097065e136004d407.png");

},
333818(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798828-36903f95d68dcc54a944d17b3c715d3f.png");

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