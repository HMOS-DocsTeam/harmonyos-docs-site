"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["553701"], {
705632(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_smoothing_arkts_animation_smoothing_md_fa9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-animation-smoothing-arkts-animation-smoothing-md-fa9.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_smoothing_arkts_animation_smoothing_md_fa9_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-smoothing/arkts-animation-smoothing","title":"动画衔接","description":"UI界面除了运行动画之外，还承载着与用户进行实时交互的功能。当用户行为根据意图变化发生改变时，UI界面应做到即时响应。例如用户在应用启动过程中，上滑退出，那么启动动画应该立即过渡到退出动画，而不应该等启动动画完成后再退出，从而减少用户等待时间。对于桌面翻页类从跟手到离手触发动画的场景，离手后动画的初始速度应继承手势速度，避免由于速度不连续导致停顿感的产生。针对以上场景，系统已提供动画与动画、手势与动画之间的衔接能力，保证各类场景下动画平稳光滑地过渡的同时，尽可能降低开发难度。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-smoothing/arkts-animation-smoothing.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-smoothing","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-smoothing/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-smoothing/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"动画衔接","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-animation-smoothing","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"弹簧曲线","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-spring-curve/"},"next":{"title":"模糊","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-blur-effect/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-smoothing/arkts-animation-smoothing.md


const frontMatter = {
	title: '动画衔接',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-animation-smoothing',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '动画衔接';

const assets = {

};



const toc = [{
  "value": "手势与动画的衔接",
  "id": "手势与动画的衔接",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "动画衔接",
        children: "动画衔接"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UI界面除了运行动画之外，还承载着与用户进行实时交互的功能。当用户行为根据意图变化发生改变时，UI界面应做到即时响应。例如用户在应用启动过程中，上滑退出，那么启动动画应该立即过渡到退出动画，而不应该等启动动画完成后再退出，从而减少用户等待时间。对于桌面翻页类从跟手到离手触发动画的场景，离手后动画的初始速度应继承手势速度，避免由于速度不连续导致停顿感的产生。针对以上场景，系统已提供动画与动画、手势与动画之间的衔接能力，保证各类场景下动画平稳光滑地过渡的同时，尽可能降低开发难度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["假设对于某一可动画属性，存在正在运行的动画。当UI侧行为改变该属性终点值时，开发者仅需在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-explicit-animation/ts-explicit-animation",
        children: "animateTo"
      }), "动画闭包中改变属性值或者改变", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-animatorproperty/ts-animatorproperty",
        children: "animation"
      }), "接口作用的属性值，即可产生动画。系统会自动衔接之前的动画和当前的动画，开发者仅需要关注当前单次动画的实现。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例如下。通过点击Click，红色方块的缩放属性会发生变化。当连续快速点击Click时，缩放属性的终点值连续发生变化，当前动画也会平滑过渡到朝着新的缩放属性终点值运动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { curves } from '@kit.ArkUI';\n\nclass SetAnimationVariables {\n  isAnimation: boolean = true\n\n  set(): void {\n    this.isAnimation = !this.isAnimation;\n  }\n}\n\n@Entry\n@Component\nstruct AnimationToAnimationDemo {\n  // 第一步：声明相关状态变量\n  @State animationController: SetAnimationVariables = new SetAnimationVariables();\n\n  build() {\n    Column() {\n      Text('ArkUI')\n        .fontWeight(FontWeight.Bold)\n        .fontSize(12)\n        .fontColor(Color.White)\n        .textAlign(TextAlign.Center)\n        .borderRadius(10)\n        .backgroundColor(0xf56c6c)\n        .width(100)\n        .height(100)\n        .scale({\n          // 第二步：将状态变量设置到相关可动画属性接口\n          x: this.animationController.isAnimation ? 2 : 1,\n          y: this.animationController.isAnimation ? 2 : 1\n        })\n        .animation({ curve: curves.springMotion(0.4, 0.8) }) // 第四步：通过animation接口开启动画，动画终点值改变时，系统自动添加衔接动画\n\n      Button('Click')\n        .margin({ top: 200 })\n        .onClick(() => {\n          // 第三步：通过点击事件改变状态变量值，影响可动画属性值\n          this.animationController.set()\n        })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(327381)/* ["default"] */.A) + "",
        width: "371",
        height: "594"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "手势与动画的衔接",
      children: "手势与动画的衔接"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用滑动、捏合、旋转等手势的场景中，跟手过程中一般会触发属性的改变。离手后，这部分属性往往会继续发生变化，直到到达属性终点值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "离手阶段的属性变化初始速度应与离手前一刻的属性改变速度保持一致。如果离手后属性变化速度从0开始，就好像正在运行的汽车紧急刹车，造成观感上的骤变是用户和开发者都不希望看到的。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/basic-gestures/ts-basic-gestures-tapgesture/ts-basic-gestures-tapgesture",
        children: "TapGesture"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation",
        children: "动画"
      }), "之间进行衔接的场景（如列表滑动），可以在跟手阶段每一次更改组件属性时，都使用跟手弹簧曲线的属性动画。离手时再用离手弹簧曲线产生离手阶段的属性动画。对于采用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-curve/js-apis-curve#curvesspringmotion9",
        children: "springMotion"
      }), "曲线的动画，离手阶段动画将自动继承跟手阶段动画的速度，并以跟手动画当前位置为起点，运动到指定的属性终点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下，小球跟手运动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { curves } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\nconst TAG: string = '[AnimatorTest]';\n\n@Entry\n@Component\nstruct SpringMotionDemo {\n  // 第一步：声明相关状态变量\n  @State positionX: number = 100;\n  @State positionY: number = 100;\n  diameter: number = 50;\n\n  build() {\n    Column() {\n      Row() {\n        Circle({ width: this.diameter, height: this.diameter })\n          .fill(Color.Blue)\n          .position({ x: this.positionX, y: this.positionY })// 第二步：将状态变量设置到相关可动画属性接口\n          .onTouch((event?: TouchEvent) => {\n            // 第三步：在跟手过程改变状态变量值，并且采用responsiveSpringMotion动画运动到新的值\n            if (event) {\n              if (event.type === TouchType.Move) {\n                // 跟手过程，使用responsiveSpringMotion曲线\n                this.getUIContext()?.animateTo({ curve: curves.responsiveSpringMotion() }, () => {\n                  // 减去半径，以使球的中心运动到手指位置\n                  this.positionX = event.touches[0].windowX - this.diameter / 2;\n                  this.positionY = event.touches[0].windowY - this.diameter / 2;\n                  hilog.info(DOMAIN, TAG, `move, animateTo x:${this.positionX}, y:${this.positionY}`);\n                })\n              } else if (event.type === TouchType.Up) {\n                // 第四步：在离手过程设定状态变量终点值，并且用springMotion动画运动到新的值，springMotion动画将继承跟手阶段的动画速度\n                this.getUIContext()?.animateTo({ curve: curves.springMotion() }, () => {\n                  this.positionX = 100;\n                  this.positionY = 100;\n                  hilog.info(DOMAIN, TAG, `touchUp, animateTo x:100, y:100`);\n                })\n              }\n            }\n          })\n      }\n      .width('100%').height('80%')\n      .clip(true) // 如果球超出父组件范围，使球不可见\n      .backgroundColor(Color.Orange)\n\n      Flex({ direction: FlexDirection.Row, alignItems: ItemAlign.Start, justifyContent: FlexAlign.Center }) {\n        // 请将$r('app.string.drag')替换为实际资源文件，在本示例中该资源文件的value值为\"拖动小球\"\n        Text($r('app.string.drag')).fontSize(16)\n      }\n      .width('100%')\n\n      Row() {\n        // 请将$r('app.string.location')替换为实际资源文件，在本示例中该资源文件的value值为\"点击位置:\"\n        Text($r('app.string.location') + ' [x: ' + Math.round(this.positionX) + ', y:' + Math.round(this.positionY) + ']').fontSize(16)\n      }\n      .padding(10)\n      .width('100%')\n    }.height('100%').width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(772814)/* ["default"] */.A) + "",
        width: "351",
        height: "766"
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
772814(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957998-f1513745e991cea9ecfe596fea7567ea.gif");

},
327381(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438043-61281b99314f294ea5b6de1510981800.gif");

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