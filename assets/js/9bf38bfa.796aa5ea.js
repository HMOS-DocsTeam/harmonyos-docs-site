"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["243423"], {
243803(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_media_display_arkts_layout_development_arcswiper_arkts_layout_development_arcswiper_md_9bf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-media-display-arkts-layout-development-arcswiper-arkts-layout-development-arcswiper-md-9bf.json
var site_docs_arkui_arkts_ui_development_arkts_media_display_arkts_layout_development_arcswiper_arkts_layout_development_arcswiper_md_9bf_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-media-display/arkts-layout-development-arcswiper/arkts-layout-development-arcswiper","title":"创建弧形轮播 (ArcSwiper)（圆形屏幕推荐使用）","description":"ArcSwiper是弧形轮播组件，在圆形屏幕场景下使用，提供弧形轮播显示能力。具体用法请参考ArcSwiper。","source":"@site/docs/arkui/arkts-ui-development/arkts-media-display/arkts-layout-development-arcswiper/arkts-layout-development-arcswiper.md","sourceDirName":"arkui/arkts-ui-development/arkts-media-display/arkts-layout-development-arcswiper","slug":"/arkui/arkts-ui-development/arkts-media-display/arkts-layout-development-arcswiper/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-media-display/arkts-layout-development-arcswiper/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"创建弧形轮播 (ArcSwiper)（圆形屏幕推荐使用）","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-arcswiper","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"创建轮播 (Swiper)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-media-display/arkts-layout-development-create-looping/"},"next":{"title":"按钮与选择组件概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-form-selection/arkts-forms-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-media-display/arkts-layout-development-arcswiper/arkts-layout-development-arcswiper.md


const frontMatter = {
	title: '创建弧形轮播 (ArcSwiper)（圆形屏幕推荐使用）',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-arcswiper',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '创建弧形轮播 (ArcSwiper)（圆形屏幕推荐使用）';

const assets = {

};



const toc = [{
  "value": "设置导航点样式",
  "id": "设置导航点样式",
  "level": 2
}, {
  "value": "控制页面切换方式",
  "id": "控制页面切换方式",
  "level": 2
}, {
  "value": "设置轮播方向",
  "id": "设置轮播方向",
  "level": 2
}, {
  "value": "自定义切换动画",
  "id": "自定义切换动画",
  "level": 2
}, {
  "value": "实现侧滑返回",
  "id": "实现侧滑返回",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "创建弧形轮播-arcswiper圆形屏幕推荐使用",
        children: "创建弧形轮播 (ArcSwiper)（圆形屏幕推荐使用）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArcSwiper是弧形轮播组件，在圆形屏幕场景下使用，提供弧形轮播显示能力。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arcswiper/ts-container-arcswiper",
        children: "ArcSwiper"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用ArcSwiper组件之前，需要在代码中先导入ArcSwiper模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  ArcSwiper,\n  ArcSwiperAttribute,\n  ArcDotIndicator,\n  ArcDirection,\n  ArcSwiperController\n} from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置导航点样式",
      children: "设置导航点样式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArcSwiper提供了默认的弧形导航点样式，导航点默认显示在ArcSwiper下方居中位置，开发者也可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arcswiper/ts-container-arcswiper#indicator",
        children: "indicator"
      }), "属性自定义弧形导航点的样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过indicator属性，开发者可以设置弧形导航点的方向，同时也可以设置导航点和被选中导航点的颜色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导航点使用默认样式"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArcSwiper() {\n  Text('0')\n    .width(233)\n    .height(233)\n    .backgroundColor(Color.Gray)\n    .textAlign(TextAlign.Center)\n    .fontSize(30)\n\n  Text('1')\n    .width(233)\n    .height(233)\n    .backgroundColor(Color.Green)\n    .textAlign(TextAlign.Center)\n    .fontSize(30)\n\n  Text('2')\n    .width(233)\n    .height(233)\n    .backgroundColor(Color.Pink)\n    .textAlign(TextAlign.Center)\n    .fontSize(30)\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(813607)/* ["default"] */.A) + "",
            width: "336",
            height: "344"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义导航点样式"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导航点位于ArcSwiper组件6点钟方向，导航点颜色设为红色，被选中导航点颜色为蓝色。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArcSwiper() {\n  // ···\n}\n.indicator(\n  new ArcDotIndicator()\n    .arcDirection(ArcDirection.SIX_CLOCK_DIRECTION) // 设置导航点位于6点钟方向\n    .itemColor(Color.Red) // 设置导航点颜色为红色\n    .selectedItemColor(Color.Blue) // 设置选中导航点颜色为蓝色\n)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(12805)/* ["default"] */.A) + "",
            width: "336",
            height: "334"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "控制页面切换方式",
      children: "控制页面切换方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArcSwiper支持滑动手指、点击导航点、旋转表冠和控制控制器四种方式切换页面。以下示例展示通过控制控制器和旋转表冠翻页的方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "控制控制器翻页。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入ArcButton和ArcSwiper模块\nimport {\n  ArcButton,\n  ArcButtonOptions,\n  ArcButtonStatus,\n  ArcButtonStyleMode,\n  ArcButtonPosition,\n  ArcSwiper,\n  ArcSwiperAttribute, // ArcSwiper的属性依赖ArcSwiperAttribute对象导入，不建议删除该对象的引入。\n  ArcSwiperController,\n  // ...\n} from '@kit.ArkUI';\n// ...\n\n// 如需作为页面入口，请取消@Entry的注释并删除export关键字\n// @Entry\n@Component\nexport struct ArcSwiperToggle {\n  private wearableSwiperController: ArcSwiperController = new ArcSwiperController();\n\n  build() {\n    // ...\n      Column({ space: 12 }) {\n        // ...\n          Stack() {\n            ArcSwiper(\n              this.wearableSwiperController\n            ) {\n              // ...\n            }\n            .vertical(true)\n            .indicator(false)\n\n            // ...\n\n\n            Column() {\n              ArcButton({\n                options: new ArcButtonOptions({\n                  label: 'previous',\n                  position: ArcButtonPosition.TOP_EDGE,\n                  styleMode: ArcButtonStyleMode.EMPHASIZED_LIGHT,\n                  onClick: () => {\n                    this.wearableSwiperController.showPrevious(); // 通过controller切换到前一页\n                  }\n                })\n              })\n\n              Blank()\n\n              ArcButton({\n                options: new ArcButtonOptions({\n                  label: 'next',\n                  position: ArcButtonPosition.BOTTOM_EDGE,\n                  styleMode: ArcButtonStyleMode.EMPHASIZED_LIGHT,\n                  onClick: () => {\n                    this.wearableSwiperController.showNext(); // 通过controller切换到后一页\n                  }\n                })\n              })\n            }.width('100%').height('100%')\n          }\n          // ...\n      }\n      // ...\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(169913)/* ["default"] */.A) + "",
            width: "273",
            height: "275"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "旋转表冠翻页。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArcSwiper在获得焦点时能够响应旋转表冠的操作，用户可以通过旋转表冠来滑动ArcSwiper，从而浏览数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArcSwiper(\n// ···\n) {\n// ···\n}\n// ···\n\n.focusable(true)\n.focusOnTouch(true)\n.defaultFocus(true)\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["还可以通过设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arcswiper/ts-container-arcswiper#digitalcrownsensitivity",
            children: "digitalCrownSensitivity"
          }), "属性来调整表冠对事件响应的灵敏度，以适应不同规模的数据处理。在处理大量数据时，可以提高响应事件的灵敏度；而在处理少量数据时，则可以降低灵敏度设置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArcSwiper(\n// ···\n) {\n// ···\n}\n// ···\n\n.digitalCrownSensitivity(CrownSensitivity.MEDIUM)\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置轮播方向",
      children: "设置轮播方向"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArcSwiper支持水平和垂直方向上进行轮播，主要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arcswiper/ts-container-arcswiper#vertical",
        children: "vertical"
      }), "属性控制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当vertical为true时，表示在垂直方向上进行轮播；为false时，表示在水平方向上进行轮播。vertical默认值为false。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置水平方向上轮播。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArcSwiper() {\n  // ···\n}\n.indicator(true)\n.vertical(false)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(112625)/* ["default"] */.A) + "",
            width: "336",
            height: "344"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置垂直方向轮播，导航点设为3点钟方向。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArcSwiper() {\n  // ···\n}\n.indicator(new ArcDotIndicator()\n  .arcDirection(ArcDirection.THREE_CLOCK_DIRECTION))\n.vertical(true)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(350189)/* ["default"] */.A) + "",
            width: "334",
            height: "322"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义切换动画",
      children: "自定义切换动画"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArcSwiper支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arcswiper/ts-container-arcswiper#customcontenttransition",
        children: "customContentTransition"
      }), "设置自定义切换动画，可以在回调中对视窗内所有页面逐帧设置透明度、缩放比例、位移、渲染层级等属性，从而实现自定义切换动画效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { Decimal } from '@kit.ArkTS';\nimport {\n  ArcSwiper,\n  ArcSwiperAttribute, // ArcSwiper的属性依赖ArcSwiperAttribute对象导入，不建议删除该对象的引入。\n} from '@kit.ArkUI';\n// ...\n\n// 如需作为页面入口，请取消@Entry的注释并删除export关键字\n// @Entry\n@Component\nexport struct ArcSwiperAction {\n  private MIN_SCALE: number = 0.1;\n  @State backgroundColors: Color[] = [Color.Green, Color.Blue, Color.Yellow, Color.Pink, Color.Gray, Color.Orange];\n  @State opacityList: number[] = [];\n  @State scaleList: number[] = [];\n\n  aboutToAppear(): void {\n    for (let i = 0; i < this.backgroundColors.length; i++) {\n      this.opacityList.push(1.0);\n      this.scaleList.push(1.0);\n    }\n  }\n\n  build() {\n    // ...\n      Column({ space: 12 }) {\n        // ...\n          ArcSwiper() {\n            ForEach(this.backgroundColors, (backgroundColor: Color, index: number) => {\n              Text(index.toString())\n                .width(233)\n                .height(233)\n                .fontSize(50)\n                .textAlign(TextAlign.Center)\n                .backgroundColor(backgroundColor)\n                .opacity(this.opacityList[index])\n                .scale({ x: this.scaleList[index], y: this.scaleList[index] })\n            })\n          }\n          .customContentTransition({\n            timeout: 1000,\n            transition: (proxy: SwiperContentTransitionProxy) => {\n              if (proxy.position <= -1 || proxy.position >= 1) {\n                // 页面完全滑出视窗外时，重置属性值\n                this.opacityList[proxy.index] = 1.0;\n                this.scaleList[proxy.index] = 1.0;\n              } else {\n                let position: number = Decimal.abs(proxy.position).toNumber();\n                this.opacityList[proxy.index] = 1 - position;\n                this.scaleList[proxy.index] =\n                  this.MIN_SCALE + (1 - this.MIN_SCALE) * (1 - position);\n              }\n            }\n          })\n          // ...\n      }\n      .width('100%')\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(704816)/* ["default"] */.A) + "",
        width: "270",
        height: "270"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现侧滑返回",
      children: "实现侧滑返回"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArcSwiper的滑动事件会与侧滑返回冲突，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-control/ts-gesture-blocking-enhancement/ts-gesture-blocking-enhancement#ongesturerecognizerjudgebegin",
        children: "onGestureRecognizerJudgeBegin"
      }), "去判断ArcSwiper是否滑动到开头去拦截ArcSwiper的滑动手势，实现再次左滑返回上一页的功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {\n  ArcSwiper,\n  ArcSwiperAttribute, // ArcSwiper的属性依赖ArcSwiperAttribute对象导入，不建议删除该对象的引入。\n} from '@kit.ArkUI';\n// ...\n\n// 如需作为页面入口，请取消@Entry的注释并删除export关键字\n// @Entry\n@Component\nexport struct ArcSwiperSideSlip {\n  @State backgroundColors: Color[] = [Color.Green, Color.Blue, Color.Yellow, Color.Pink, Color.Gray, Color.Orange];\n  innerSelectedIndex: number = 0;\n\n  build() {\n    // ...\n      Column({ space: 12 }) {\n        // ...\n          ArcSwiper() {\n            ForEach(this.backgroundColors, (backgroundColor: Color, index: number) => {\n              Text(index.toString())\n                .width(233)\n                .height(233)\n                .fontSize(50)\n                .textAlign(TextAlign.Center)\n                .backgroundColor(backgroundColor)\n            })\n          }\n          .onAnimationStart((index: number, targetIndex: number) => {\n            this.innerSelectedIndex = targetIndex;\n          })\n          .onGestureRecognizerJudgeBegin((event: BaseGestureEvent, current: GestureRecognizer,\n            others: Array<GestureRecognizer>): GestureJudgeResult => { // 在识别器即将要成功时，根据当前组件状态，设置识别器使能状态\n            if (current) {\n              let target = current.getEventTargetInfo();\n              if (target && current.isBuiltIn() && current.getType() == GestureControl.GestureType.PAN_GESTURE) {\n                let swiperTarget = target as ScrollableTargetInfo;\n                if (swiperTarget instanceof ScrollableTargetInfo &&\n                  (swiperTarget.isBegin() || this.innerSelectedIndex === 0)) { // 此处判断swiperTarget.isBegin()或innerSelectedIndex === 0，表明ArcSwiper滑动到开头\n                  let panEvent = event as PanGestureEvent;\n                  if (panEvent && panEvent.offsetX > 0 && (swiperTarget.isBegin() || this.innerSelectedIndex === 0)) {\n                    return GestureJudgeResult.REJECT;\n                  }\n                }\n              }\n            }\n            return GestureJudgeResult.CONTINUE;\n          })\n          // ...\n      }\n      .width('100%')\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(226695)/* ["default"] */.A) + "",
        width: "304",
        height: "282"
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
226695(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437919-596ade7c169e796730eb26b6f3713957.gif");

},
169913(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957872-e992bb1ebebf8af66c77be51dfdf2a6d.gif");

},
813607(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
12805(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
112625(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
704816(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798224-31b27f4d6f7e5b07fd7add31e6960a6d.gif");

},
350189(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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