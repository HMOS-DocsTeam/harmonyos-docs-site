"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["949466"], {
241335(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_attribute_arkts_attribute_animation_apis_arkts_attribute_animation_apis_md_e86_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-animation-attribute-arkts-attribute-animation-apis-arkts-attribute-animation-apis-md-e86.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_attribute_arkts_attribute_animation_apis_arkts_attribute_animation_apis_md_e86_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-apis/arkts-attribute-animation-apis","title":"实现属性动画","description":"通过可动画属性改变引起UI上产生的连续视觉效果，即为属性动画。属性动画是最基础易懂的动画，ArkUI提供三种动画接口animateTo、animation和keyframeAnimateTo驱动组件属性按照动画曲线等动画参数进行连续的变化，产生属性动画。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-apis/arkts-attribute-animation-apis.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-apis","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-apis/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-apis/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"实现属性动画","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-attribute-animation-apis","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"属性动画概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-overview/"},"next":{"title":"自定义属性动画","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-custom-attribute-animation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-attribute/arkts-attribute-animation-apis/arkts-attribute-animation-apis.md


const frontMatter = {
	title: '实现属性动画',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-attribute-animation-apis',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '实现属性动画';

const assets = {

};



const toc = [{
  "value": "使用animateTo产生属性动画",
  "id": "使用animateto产生属性动画",
  "level": 2
}, {
  "value": "使用animation产生属性动画",
  "id": "使用animation产生属性动画",
  "level": 2
}, {
  "value": "使用keyframeAnimateTo产生属性动画",
  "id": "使用keyframeanimateto产生属性动画",
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
        id: "实现属性动画",
        children: "实现属性动画"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过可动画属性改变引起UI上产生的连续视觉效果，即为属性动画。属性动画是最基础易懂的动画，ArkUI提供三种动画接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#animateto",
        children: "animateTo"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-animatorproperty/ts-animatorproperty",
        children: "animation"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-keyframeanimateto/ts-keyframeanimateto",
        children: "keyframeAnimateTo"
      }), "驱动组件属性按照动画曲线等动画参数进行连续的变化，产生属性动画。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(236965)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本章节讨论的属性动画不是狭义的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-animatorproperty/ts-animatorproperty",
        children: "属性动画接口"
      }), "，而是通过给定新的可动画属性终值，对属性产生动画的方式。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "动画接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "作用域"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "原理"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animateTo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "闭包内改变属性引起的界面变化。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用函数，对闭包前界面和闭包中的状态变量引起的界面之间的差异做动画。  支持多次调用，支持嵌套。"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["适用对多个可动画属性配置相同动画参数的动画。  需要嵌套使用动画的场景。  如果需要实现多段动画循环的效果，建议通过设置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-explicit-animation/ts-explicit-animation#animateparam%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "AnimateParam"
            }), "的playMode和iterations属性实现，或使用keyframeAnimateTo实现。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "animation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "组件通过属性接口绑定的属性变化引起的界面变化。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "识别组件的可动画属性变化，自动添加动画。  组件的接口调用是从下往上执行，animation只会作用于在其之上的属性调用。  组件可以根据调用顺序对多个属性设置不同的animation。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于对多个可动画属性配置不同参数动画的场景。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "keyframeAnimateTo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多个闭包内改变属性引起的分段属性动画。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用函数，每一段闭包中的状态变量与前一次的差异做动画。  支持多次调用，不推荐嵌套。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "适用于同一属性需要做连续多个动画的场景。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用animateto产生属性动画",
      children: "使用animateTo产生属性动画"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "animateTo(value: AnimateParam, event: () => void): void\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#animateto",
        children: "animateTo"
      }), "接口参数中，value指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-explicit-animation/ts-explicit-animation#animateparam%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "AnimateParam对象"
      }), "（包括时长、曲线等）event为动画的闭包函数，闭包内变量改变产生的属性动画将遵循相同的动画参数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(762633)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["直接使用animateTo可能导致", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface",
        children: "UI上下文不明确"
      }), "的问题，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api#getuicontext",
        children: "getUIContext()"
      }), "获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
        children: "UIContext"
      }), "实例，并使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#animateto",
        children: "animateTo"
      }), "调用绑定实例的animateTo。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { curves } from '@kit.ArkUI';\n@Entry\n@Component\nstruct attrAnimateToDemo2 {\n  @State animate: boolean = false;\n  // 第一步: 声明相关状态变量\n  @State rotateValue: number = 0; // 组件一旋转角度\n  @State translateX: number = 0; // 组件二偏移量\n  @State opacityValue: number = 1; // 组件二透明度\n\n  // 第二步：将状态变量设置到相关可动画属性接口\n  build() {\n    Row() {\n      // 组件一\n      Column() {\n      }\n      .rotate({ angle: this.rotateValue })\n      .backgroundColor('#317AF7')\n      .justifyContent(FlexAlign.Center)\n      .width(100)\n      .height(100)\n      .borderRadius(30)\n      .onClick(() => {\n        this.getUIContext()?.animateTo({ curve: curves.springMotion() }, () => {\n          this.animate = !this.animate;\n          // 第三步：闭包内通过状态变量改变UI界面\n          // 这里可以写任何能改变UI的逻辑比如数组添加，显隐控制，系统会检测改变后的UI界面与之前的UI界面的差异，对有差异的部分添加动画\n          // 组件一的rotate属性发生变化，所以会给组件一添加rotate旋转动画\n          this.rotateValue = this.animate ? 90 : 0;\n          // 组件二的透明度发生变化，所以会给组件二添加透明度的动画\n          this.opacityValue = this.animate ? 0.6 : 1;\n          // 组件二的translate属性发生变化，所以会给组件二添加translate偏移动画\n          this.translateX = this.animate ? 50 : 0;\n        })\n      })\n\n      // 组件二\n      Column() {\n      }\n      .justifyContent(FlexAlign.Center)\n      .width(100)\n      .height(100)\n      .backgroundColor('#D94838')\n      .borderRadius(30)\n      .opacity(this.opacityValue)\n      .translate({ x: this.translateX })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(699794)/* ["default"] */.A) + "",
        width: "513",
        height: "394"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用animation产生属性动画",
      children: "使用animation产生属性动画"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相比于animateTo接口需要将属性修改封装在闭包中执行，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-animatorproperty/ts-animatorproperty",
        children: "animation"
      }), "接口无需使用闭包，只需将其加在要做动画的可动画属性后即可。animation只要检测到其绑定的可动画属性发生变化，就会自动添加属性动画，animateTo则必须在动画闭包内改变可动画属性的值从而生成动画。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { curves } from '@kit.ArkUI';\n@Entry\n@Component\nstruct attrAnimationDemo3 {\n  @State animate: boolean = false;\n  // 第一步: 声明相关状态变量\n  @State rotateValue: number = 0; // 组件一旋转角度\n  @State translateX: number = 0; // 组件二偏移量\n  @State opacityValue: number = 1; // 组件二透明度\n\n  // 第二步：将状态变量设置到相关可动画属性接口\n  build() {\n    Row() {\n      // 组件一\n      Column() {\n      }\n      .opacity(this.opacityValue)\n      .rotate({ angle: this.rotateValue })\n      // 第三步：通过属性动画接口开启属性动画\n      .animation({ curve: curves.springMotion() })\n      .backgroundColor('#317AF7')\n      .justifyContent(FlexAlign.Center)\n      .width(100)\n      .height(100)\n      .borderRadius(30)\n      .onClick(() => {\n        this.animate = !this.animate;\n        // 第四步：闭包内通过状态变量改变UI界面\n        // 这里可以写任何能改变UI的逻辑比如数组添加，显隐控制，系统会检测改变后的UI界面与之前的UI界面的差异，对有差异的部分添加动画\n        // 组件一的rotate属性发生变化，所以会给组件一添加rotate旋转动画\n        this.rotateValue = this.animate ? 90 : 0;\n        // 组件二的translate属性发生变化，所以会给组件二添加translate偏移动画\n        this.translateX = this.animate ? 50 : 0;\n        // 父组件column的opacity属性有变化，会导致其子节点的透明度也变化，所以这里会给column和其子节点的透明度属性都添加动画\n        this.opacityValue = this.animate ? 0.6 : 1;\n      })\n\n      // 组件二\n      Column() {\n      }\n      .justifyContent(FlexAlign.Center)\n      .width(100)\n      .height(100)\n      .backgroundColor('#D94838')\n      .borderRadius(30)\n      .opacity(this.opacityValue)\n      .translate({ x: this.translateX })\n      .animation({ curve: curves.springMotion() })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(871482)/* ["default"] */.A) + "",
        width: "521",
        height: "342"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用keyframeanimateto产生属性动画",
      children: "使用keyframeAnimateTo产生属性动画"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "keyframeAnimateTo(param: KeyframeAnimateParam, keyframes: Array<KeyframeState>): void\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-keyframeanimateto/ts-keyframeanimateto",
        children: "keyframeAnimateTo"
      }), "接口参数中，第一个参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/animation/ts-keyframeanimateto/ts-keyframeanimateto#keyframeanimateparam%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "KeyframeAnimateParam"
      }), "为关键帧动画的整体参数（包括延时、播放次数、结束回调、期望帧率），第二个参数是一个数组，每一项表示一个关键帧内的动画行为；每一段动画可单独控制动画参数（包括时长、曲线等）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在同一属性存在多段动画过程的场景，可通过在结束回调中再创建新动画实现，但写法更复杂，且每次创建新动画需要耗时，会有衔接卡顿现象。此场景更适宜用关键帧动画实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例主要演示如何通过keyframeAnimateTo来设置关键帧动画。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct KeyframeAnimateToDemo {\n  // 第一步: 声明相关状态变量\n  @State rotateValue: number = 0; // 组件一旋转角度\n  @State translateX: number = 0; // 组件二偏移量\n  @State opacityValue: number = 1; // 组件二透明度\n  // 第二步：将状态变量设置到相关可动画属性接口\n  build() {\n    Row() {\n      // 组件一\n      Column() {\n      }\n      .rotate({ angle: this.rotateValue })\n      .backgroundColor('#317AF7')\n      .justifyContent(FlexAlign.Center)\n      .width(100)\n      .height(100)\n      .borderRadius(30)\n      .onClick(() => {\n        // 第三步：调用keyframeAnimateTo接口\n        this.getUIContext()?.keyframeAnimateTo({\n          iterations: 1\n        }, [\n          {\n            // 第一段关键帧动画时长为800ms，组件一顺时针旋转90度，组件二的透明度变从1变为0.6，组件二的translate从0位移到50\n            duration: 800,\n            event: () => {\n              this.rotateValue = 90;\n              this.opacityValue = 0.6;\n              this.translateX = 50;\n            }\n          },\n          {\n            // 第二段关键帧动画时长为500ms，组件一逆时针旋转90度恢复至0度，组件二的透明度变从0.6变为1，组件二的translate从50位移到0\n            duration: 500,\n            event: () => {\n              this.rotateValue = 0;\n              this.opacityValue = 1;\n              this.translateX = 0;\n            }\n          }\n        ]);\n      })\n      // 组件二\n      Column() {\n      }\n      .justifyContent(FlexAlign.Center)\n      .width(100)\n      .height(100)\n      .backgroundColor('#D94838')\n      .borderRadius(30)\n      .opacity(this.opacityValue)\n      .translate({ x: this.translateX })\n    }\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(431318)/* ["default"] */.A) + "",
        width: "403",
        height: "256"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(364983)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在对组件位置大小变化做动画的时候，由于布局属性的改变会触发测量布局，性能开销大。而", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-transformation/ts-universal-attributes-transformation#scale",
          children: "scale"
        }), "属性的改变不会触发测量布局，性能开销小。因此，在组件位置大小持续发生变化的场景，如跟手触发组件大小变化的场景，推荐使用scale。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["属性动画应该作用于始终存在的组件，对于将要出现或者将要消失的组件的动画应该使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-transition-overview",
          children: "转场动画"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "尽量不要使用动画结束回调。属性动画是对已经发生的状态进行的动画，不需要开发者去处理结束的逻辑。如果要使用结束回调，一定要正确处理连续操作的数据管理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在设置的开发者选项中关闭过渡动画，或UIAbility从前台切换至后台，会立即执行动画结束回调。建议对此类场景进行一定的验证并避免在动画结束回调中加入时序相关的功能逻辑。"
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
762633(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
364983(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
431318(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798332-efee9a6f07b42a7bd23fb257a989f59b.gif");

},
699794(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957980-bf254f9fa5473c0aa8e90c9b7741707b.gif");

},
871482(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477981-cfc945870c786610a3c3c9de259aada8.gif");

},
236965(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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