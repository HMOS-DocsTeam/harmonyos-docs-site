"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["68349"], {
862188(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_transition_arkts_enter_exit_transition_arkts_enter_exit_transition_md_51f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-animation-transition-arkts-enter-exit-transition-arkts-enter-exit-transition-md-51f.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_transition_arkts_enter_exit_transition_arkts_enter_exit_transition_md_51f_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-enter-exit-transition/arkts-enter-exit-transition","title":"出现/消失转场","description":"transition是基础的组件转场接口，用于实现一个组件出现或者消失时的动画效果。可以通过TransitionEffect对象的组合使用，定义出各式效果。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-enter-exit-transition/arkts-enter-exit-transition.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-enter-exit-transition","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-enter-exit-transition/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-enter-exit-transition/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"出现/消失转场","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-enter-exit-transition","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"转场动画概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-transition-overview/"},"next":{"title":"模态转场","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-modal-transition/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-enter-exit-transition/arkts-enter-exit-transition.md


const frontMatter = {
	title: '出现/消失转场',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-enter-exit-transition',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '出现/消失转场';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
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
        id: "出现消失转场",
        children: "出现/消失转场"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-transition-animation-component/ts-transition-animation-component",
        children: "transition"
      }), "是基础的组件转场接口，用于实现一个组件出现或者消失时的动画效果。可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-transition-animation-component/ts-transition-animation-component#transitioneffect10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "TransitionEffect对象"
      }), "的组合使用，定义出各式效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 转场效果接口"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "转场效果"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "动画"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IDENTITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁用转场效果。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPACITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认的转场效果，透明度转场。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出现时透明度从0到1，消失时透明度从1到0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLIDE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "滑动转场效果。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出现时从窗口左侧滑入，消失时从窗口右侧滑出。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "translate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过设置组件平移创建转场效果。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出现时，平移参数的值从translate接口设置的值变化为默认值0，消失时从默认值0变化为translate接口设置的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rotate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过设置组件旋转创建转场效果。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出现时，旋转参数的值从rotate接口设置的值变化为默认值0，消失时从默认值0变化为rotate接口设置的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "opacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过设置透明度参数创建转场效果。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出现时，透明度参数的值从opacity设置的值变化为透明度默认值1，消失时从透明度默认值1变化为opacity设置的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "move"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-transition-animation-component/ts-transition-animation-component#transitionedge10",
              children: "TransitionEdge"
            }), "创建从窗口哪条边缘出来的效果。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出现时从TransitionEdge方向滑入，消失时滑出到TransitionEdge方向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "asymmetric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过此方法组合非对称的出现消失转场效果。  - appear：出现转场的效果。  - disappear：消失转场的效果。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["出现时采用appear设置的TransitionEffect出现效果，消失时采用disappear设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-transition-animation-component/ts-transition-animation-component#transitioneffect10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TransitionEffect"
            }), "消失效果。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "combine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组合其他TransitionEffect。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组合其他TransitionEffect，一起生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义转场效果的动画参数：  - 如果不定义会跟随", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-explicit-animation/ts-explicit-animation",
              children: "animateTo"
            }), "的动画参数。  - 不支持通过控件的animation接口配置动画参数。  - TransitionEffect中animation的onFinish不生效。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用顺序是从上往下，上面TransitionEffect的animation也会作用到下面TransitionEffect。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建TransitionEffect。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 出现时会是所有出现转场效果的叠加，消失时会是所有消失转场效果的叠加\n// 说明各个effect跟随的动画参数\nprivate effect: object =\n  TransitionEffect.OPACITY // 创建了透明度转场效果，这里没有调用animation接口，会跟随animateTo的动画参数\n    // 通过combine方法，添加缩放转场效果，并指定了springMotion(0.6, 1.2)曲线\n    .combine(TransitionEffect.scale({ x: 0, y: 0 }).animation({ curve: curves.springMotion(0.6, 1.2) }))\n    // 添加旋转转场效果，这里的动画参数会跟随上面的TransitionEffect，也就是springMotion(0.6, 1.2)\n    .combine(TransitionEffect.rotate({ angle: 90 }))\n    // 添加平移转场效果，动画参数会跟随其之上带animation的TransitionEffect，也就是springMotion(0.6, 1.2)\n    .combine(TransitionEffect.translate({ x: 150, y: 150 }))\n    // 添加move转场效果，并指定了springMotion曲线\n    .combine(TransitionEffect.move(TransitionEdge.END)).animation({curve: curves.springMotion()})\n    // 添加非对称的转场效果，由于这里没有设置animation，会跟随上面的TransitionEffect的animation效果，也就是springMotion\n    .combine(TransitionEffect.asymmetric(TransitionEffect.scale({\n      x: 0,\n      y: 0\n    }), TransitionEffect.rotate({ angle: 90 })));\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["将转场效果通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-transition-animation-component/ts-transition-animation-component",
            children: "transition"
          }), "接口设置到组件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Text('test')\n  .transition(this.effect)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新增或者删除组件触发转场。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@State isPresent: boolean = true;\n// ...\nif (this.isPresent) {\n  Text('test')\n    .transition(this.effect)\n}\n// ...\n// 控制新增或者删除组件\n// 方式一：将控制变量放到animateTo闭包内，未通过animation接口定义动画参数的TransitionEffect将跟随animateTo的动画参数\nthis.getUIContext()?.animateTo({ curve: curves.springMotion() }, () => {\n  this.isPresent = false;\n})\n\n// 方式二：直接控制删除或者新增组件，动画参数由TransitionEffect的animation接口配置\nthis.isPresent = false;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整的示例代码和效果如下，示例中采用直接删除或新增组件的方式触发转场，也可以替换为在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-explicit-animation/ts-explicit-animation",
        children: "animateTo"
      }), "闭包内改变控制变量触发转场。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { curves } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct TransitionEffectDemo {\n  @State isPresent: boolean = false;\n  // 第一步：创建TransitionEffect\n  private effect: TransitionEffect =\n    // 创建默认透明度转场效果，并指定了springMotion(0.6, 0.8)曲线\n    TransitionEffect.OPACITY.animation({\n      curve: curves.springMotion(0.6, 0.8)\n    })// 通过combine方法，这里的动画参数会跟随上面的TransitionEffect，也就是springMotion(0.6, 0.8)\n      .combine(TransitionEffect.scale({\n        x: 0,\n        y: 0\n      }))// 添加旋转转场效果，这里的动画参数会跟随上面带animation的TransitionEffect，也就是springMotion(0.6, 0.8)\n      .combine(TransitionEffect.rotate({ angle: 90 }))// 添加平移转场效果，这里的动画参数使用指定的springMotion()\n      .combine(TransitionEffect.translate({ y: 150 })\n        .animation({ curve: curves.springMotion() }))// 添加move转场效果，这里的动画参数会跟随上面的TransitionEffect，也就是springMotion()\n      .combine(TransitionEffect.move(TransitionEdge.END));\n\n  build() {\n    Stack() {\n      if (this.isPresent) {\n        Column() {\n          Text('ArkUI')\n            .fontWeight(FontWeight.Bold)\n            .fontSize(20)\n            .fontColor(Color.White)\n        }\n        .justifyContent(FlexAlign.Center)\n        .width(150)\n        .height(150)\n        .borderRadius(10)\n        .backgroundColor(0xf56c6c)\n        // 第二步：将转场效果通过transition接口设置到组件\n        .transition(this.effect)\n      }\n\n      // 边框\n      Column()\n        .width(155)\n        .height(155)\n        .border({\n          width: 5,\n          radius: 10,\n          color: Color.Black\n        })\n\n      // 第三步：新增或者删除组件触发转场，控制新增或者删除组件\n      Button('Click')\n        .margin({ top: 320 })\n        .onClick(() => {\n          this.isPresent = !this.isPresent;\n        })\n    }\n    .width('100%')\n    .height('60%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(453379)/* ["default"] */.A) + "",
        width: "377",
        height: "461"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对多个组件添加转场效果时，可以在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-animatorproperty/ts-animatorproperty#animation",
        children: "animation"
      }), "动画参数中配置不同的delay值，实现组件渐次出现消失的效果："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const ITEM_COUNTS = 9;\nconst ITEM_COLOR = '#ED6F21';\nconst INTERVAL = 30;\nconst DURATION = 300;\n\n@Entry\n@Component\nstruct Index1 {\n  @State isGridShow: boolean = false;\n  private dataArray: number[] = new Array(ITEM_COUNTS);\n\n  aboutToAppear(): void {\n    for (let i = 0; i < ITEM_COUNTS; i++) {\n      this.dataArray[i] = i;\n    }\n  }\n\n  build() {\n    Stack() {\n      if (this.isGridShow) {\n        Grid() {\n          ForEach(this.dataArray, (item: number, index: number) => {\n            GridItem() {\n              Stack() {\n                Text((item + 1).toString())\n              }\n              .size({ width: 50, height: 50 })\n              .backgroundColor(ITEM_COLOR)\n              .transition(TransitionEffect.OPACITY\n                .combine(TransitionEffect.scale({ x: 0.5, y: 0.5 }))// 对每个方格的转场添加delay，实现组件的渐次出现消失效果\n                .animation({ duration: DURATION, curve: Curve.Friction, delay: INTERVAL * index }))\n              .borderRadius(10)\n            }\n            // 消失时，如果不对方格的所有父控件添加转场效果，则方格的消失转场不会生效\n            // 此处让方格的父控件在出现消失转场时一直以0.99的透明度显示，使得方格的转场效果不受影响\n            .transition(TransitionEffect.opacity(0.99))\n          }, (item: number) => item.toString())\n        }\n        .columnsTemplate('1fr 1fr 1fr')\n        .rowsGap(15)\n        .columnsGap(15)\n        .size({ width: 180, height: 180 })\n        // 消失时，如果不对方格的所有父控件添加转场效果，则方格的消失转场不会生效\n        // 此处让父控件在出现消失转场时一直以0.99的透明度显示，使得方格的转场效果不受影响\n        .transition(TransitionEffect.opacity(0.99))\n      }\n    }\n    .size({ width: '100%', height: '100%' })\n    .onClick(() => {\n      this.getUIContext()?.animateTo({\n        duration: DURATION + INTERVAL * (ITEM_COUNTS - 1),\n        curve: Curve.Friction\n      }, () => {\n        this.isGridShow = !this.isGridShow;\n      })\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(205988)/* ["default"] */.A) + "",
        width: "380",
        height: "556"
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
205988(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798334-0dee13cca9a9c387565d20f68bcb5017.gif");

},
453379(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477983-0ec7e46b35fb492066bd846225163baa.gif");

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