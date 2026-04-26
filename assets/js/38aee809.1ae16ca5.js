"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["301123"], {
878154(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_curve_arkts_spring_curve_arkts_spring_curve_md_38a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-animation-curve-arkts-spring-curve-arkts-spring-curve-md-38a.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_curve_arkts_spring_curve_arkts_spring_curve_md_38a_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-spring-curve/arkts-spring-curve","title":"弹簧曲线","description":"阻尼弹簧曲线（以下简称弹簧曲线）对应的阻尼弹簧系统中，偏离平衡位置的物体一方面受到弹簧形变产生的反向作用力，被迫发生振动。另一方面，阻尼的存在为物体振动提供阻力。除阻尼为0的特殊情况，物体在振动过程中振幅不断减小，且最终趋于0，其轨迹对应的动画曲线自然连续。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-spring-curve/arkts-spring-curve.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-spring-curve","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-spring-curve/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-spring-curve/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"弹簧曲线","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-spring-curve","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"传统曲线","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-traditional-curve/"},"next":{"title":"动画衔接","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-smoothing/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-spring-curve/arkts-spring-curve.md


const frontMatter = {
	title: '弹簧曲线',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-spring-curve',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '弹簧曲线';

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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "弹簧曲线",
        children: "弹簧曲线"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "阻尼弹簧曲线（以下简称弹簧曲线）对应的阻尼弹簧系统中，偏离平衡位置的物体一方面受到弹簧形变产生的反向作用力，被迫发生振动。另一方面，阻尼的存在为物体振动提供阻力。除阻尼为0的特殊情况，物体在振动过程中振幅不断减小，且最终趋于0，其轨迹对应的动画曲线自然连续。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "采用弹簧曲线的动画在达终点时动画速度为0，不会产生动画“戛然而止”的观感，以避免影响用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI提供了四种阻尼弹簧曲线接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-curve/js-apis-curve#curvesspringmotion9",
            children: "curves.springMotion"
          }), "：创建弹性动画，动画时长由曲线参数、属性变化值大小和弹簧初速度自动计算，开发者指定的动画时长不生效。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["springMotion不提供速度设置接口，速度通过继承获得，无需开发者指定。对于某个属性，如果当前存在正在运行的springMotion或者", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-curve/js-apis-curve#curvesresponsivespringmotion9",
            children: "responsiveSpringMotion"
          }), "类型动画，新创建的弹簧动画将停止正在运行的动画，并继承其当前时刻的动画属性值和速度作为新建动画的初始状态。此外，接口提供默认参数，便于开发者直接使用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function springMotion(response?: number, dampingFraction?: number, overlapDuration?: number): ICurve;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-curve/js-apis-curve#curvesresponsivespringmotion9",
            children: "curves.responsiveSpringMotion"
          }), "：是springMotion动画的一种特例，仅默认参数不同。一般用于跟手做成动画的场景，离手时可用springMotion创建动画，此时离手阶段动画将自动继承跟手阶段动画速度，完成动画衔接。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当新动画的overlapDuration参数不为0，且当前属性的上一个springMotion动画还未结束时，response和dampingFraction将在overlapDuration指定的时间内，从旧动画的参数值过渡到新动画的参数值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function responsiveSpringMotion(response?: number, dampingFraction?: number, overlapDuration?: number): ICurve;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-curve/js-apis-curve#curvesinterpolatingspring10",
            children: "curves.interpolatingSpring"
          }), "：适合于需要指定初速度的动效场景，动画时长同样由接口参数自动计算，开发者在动画接口中指定的时长不生效。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "曲线接口提供速度入参，且由于接口对应一条从0到1的阻尼弹簧曲线，实际动画值根据曲线进行插值计算。所以速度也应该为归一化速度，其值等于动画属性改变的绝对速度除以动画属性改变量。因此不适合于动画起点属性值和终点属性值相同的场景，此时动画属性改变量为0，归一化速度不存在。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function interpolatingSpring(velocity: number, mass: number, stiffness: number, damping: number): ICurve;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-curve/js-apis-curve#curvesspringcurve9",
            children: "curves.springCurve"
          }), "：适合于需要直接指定动画时长的场景。springCurve接口与interpolatingSpring接口几乎一致，但是对于采用springCurve的动画，会将曲线的物理时长映射到指定的时长，相当于在时间轴上拉伸或压缩曲线，破坏曲线原本的物理规律，因此不建议开发者使用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function springCurve(velocity: number, mass: number, stiffness: number, damping: number): ICurve;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关于弹簧曲线完整的使用示例和参考效果如下，开发者也可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-smoothing",
        children: "动画衔接"
      }), "，掌握使用responsiveSpringMotion和springMotion进行手势和动画之间的衔接。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "弹簧曲线的示例代码和效果如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { curves } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\n\nclass Spring {\n  public title: string;\n  public subTitle: ResourceStr;\n  public iCurve: ICurve;\n\n  constructor(title: string, subTitle: ResourceStr, iCurve: ICurve) {\n    this.title = title;\n    this.iCurve = iCurve;\n    this.subTitle = subTitle;\n  }\n}\n\n// 弹簧组件\n@Component\nstruct Motion {\n  @Prop dRotate: number = 0;\n  private title: string = '';\n  private subTitle: ResourceStr = '';\n  private iCurve: ICurve | undefined = undefined;\n\n  build() {\n    Column() {\n      Circle()\n        .translate({ y: this.dRotate })\n        .animation({ curve: this.iCurve, iterations: -1 })\n        .foregroundColor('#317AF7')\n        .width(30)\n        .height(30)\n\n      Column() {\n        Text(this.title)\n          .fontColor(Color.Black)\n          .fontSize(10).height(30)\n        Text(this.subTitle)\n          .fontColor(0xcccccc)\n          .fontSize(10).width(50)\n      }\n      .borderWidth({ top: 1 })\n      .borderColor(0xf5f5f5)\n      .width(80)\n      .alignItems(HorizontalAlign.Center)\n      .height(100)\n\n    }\n    .height(110)\n    .margin({ bottom: 5 })\n    .alignItems(HorizontalAlign.Center)\n  }\n}\n\n@Entry\n@Component\nexport struct SpringCurve {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  @State dRotate: number = 0;\n  private springs: Spring[] = [\n    // 请将$r('app.string.springCurve_text1')替换为实际资源文件，在本示例中该资源文件的value值为\"周期1, 阻尼0.25\"\n    new Spring('springMotion', $r('app.string.springCurve_text1'), curves.springMotion(1, 0.25)),\n    // 请将$r('app.string.springCurve_text2')替换为实际资源文件，在本示例中该资源文件的value值为\"弹性跟手曲线\"\n    new Spring('responsive' + '\\n' + 'SpringMotion', $r('app.string.springCurve_text2'),\n      curves.responsiveSpringMotion(1, 0.25)),\n    // 请将$r('app.string.springCurve_text3')替换为实际资源文件，在本示例中该资源文件的value值为\"初始速度10， 质量1， 刚度228， 阻尼30\"\n    new Spring('interpolating' + '\\n' + 'Spring', $r('app.string.springCurve_text3'),\n      curves.interpolatingSpring(10, 1, 228, 30)),\n    // 请将$r('app.string.springCurve_text1')替换为实际资源文件，在本示例中该资源文件的value值为\"周期1, 阻尼0.25\"\n    new Spring('springCurve', $r('app.string.springCurve_text1'),\n      curves.springCurve(10, 1, 228, 30))\n  ];\n\n  build() {\n    Row() {\n      ForEach(this.springs, (item: Spring) => {\n        Motion({\n          title: item.title,\n          subTitle: item.subTitle,\n          iCurve: item.iCurve,\n          dRotate: this.dRotate\n        })\n      })\n    }\n    .justifyContent(FlexAlign.Center)\n    .alignItems(VerticalAlign.Bottom)\n    .width('100%')\n    .height(437)\n    .margin({ top: 20 })\n    .onClick(() => {\n      this.dRotate = -50;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(799565)/* ["default"] */.A) + "",
        width: "520",
        height: "520"
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
799565(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798348-187afbd6a2268447e74e5f34e2d3e532.gif");

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