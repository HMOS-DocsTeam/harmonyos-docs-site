"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["652565"], {
599718(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_media_display_arkts_layout_development_create_looping_arkts_layout_development_create_looping_md_ce8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-media-display-arkts-layout-development-create-looping-arkts-layout-development-create-looping-md-ce8.json
var site_docs_arkui_arkts_ui_development_arkts_media_display_arkts_layout_development_create_looping_arkts_layout_development_create_looping_md_ce8_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-media-display/arkts-layout-development-create-looping/arkts-layout-development-create-looping","title":"创建轮播 (Swiper)","description":"Swiper组件提供滑动轮播显示的能力。Swiper本身是一个容器组件，当设置了多个子组件后，可以对这些子组件进行轮播显示。通常，在一些应用首页显示推荐的内容时，需要用到轮播显示的能力。","source":"@site/docs/arkui/arkts-ui-development/arkts-media-display/arkts-layout-development-create-looping/arkts-layout-development-create-looping.md","sourceDirName":"arkui/arkts-ui-development/arkts-media-display/arkts-layout-development-create-looping","slug":"/arkui/arkts-ui-development/arkts-media-display/arkts-layout-development-create-looping/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-media-display/arkts-layout-development-create-looping/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"创建轮播 (Swiper)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-create-looping","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"视频播放 (Video)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-media-display/arkts-common-components-video-player/"},"next":{"title":"创建弧形轮播 (ArcSwiper)（圆形屏幕推荐使用）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-media-display/arkts-layout-development-arcswiper/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-media-display/arkts-layout-development-create-looping/arkts-layout-development-create-looping.md


const frontMatter = {
	title: '创建轮播 (Swiper)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-create-looping',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '创建轮播 (Swiper)';

const assets = {

};



const toc = [{
  "value": "布局与约束",
  "id": "布局与约束",
  "level": 2
}, {
  "value": "循环播放",
  "id": "循环播放",
  "level": 2
}, {
  "value": "自动轮播",
  "id": "自动轮播",
  "level": 2
}, {
  "value": "导航点样式",
  "id": "导航点样式",
  "level": 2
}, {
  "value": "页面切换方式",
  "id": "页面切换方式",
  "level": 2
}, {
  "value": "轮播方向",
  "id": "轮播方向",
  "level": 2
}, {
  "value": "每页显示多个子页面",
  "id": "每页显示多个子页面",
  "level": 2
}, {
  "value": "自定义切换动画",
  "id": "自定义切换动画",
  "level": 2
}, {
  "value": "Swiper与Tabs联动",
  "id": "swiper与tabs联动",
  "level": 2
}, {
  "value": "设置圆点导航点间距",
  "id": "设置圆点导航点间距",
  "level": 2
}, {
  "value": "导航点忽略组件大小",
  "id": "导航点忽略组件大小",
  "level": 2
}, {
  "value": "保持可见内容位置不变",
  "id": "保持可见内容位置不变",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
        id: "创建轮播-swiper",
        children: "创建轮播 (Swiper)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
        children: "Swiper"
      }), "组件提供滑动轮播显示的能力。Swiper本身是一个容器组件，当设置了多个子组件后，可以对这些子组件进行轮播显示。通常，在一些应用首页显示推荐的内容时，需要用到轮播显示的能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对复杂页面场景，可以使用Swiper组件的预加载机制，利用主线程的空闲时间来提前构建和布局绘制组件，优化滑动体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "布局与约束",
      children: "布局与约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Swiper作为一个容器组件，如果设置了自身尺寸属性，则在轮播显示过程中均以该尺寸生效。如果自身尺寸属性未被设置，则分两种情况：如果设置了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#prevmargin10",
        children: "prevMargin"
      }), "或者", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#nextmargin10",
        children: "nextMargin"
      }), "属性，则Swiper自身尺寸会跟随其父组件；如果未设置prevMargin或者nextMargin属性，则会自动根据子组件的大小设置自身的尺寸。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "循环播放",
      children: "循环播放"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#loop",
        children: "loop"
      }), "属性控制是否循环播放，该属性默认值为true。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当loop为true时，在显示第一页或最后一页时，可以继续往前切换到前一页或者往后切换到后一页。如果loop为false，则在第一页或最后一页时，无法继续向前或者向后切换页面。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "loop为true"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  Swiper() {\n    Text('0')\n      .width('90%')\n      .height('100%')\n      .backgroundColor(Color.Gray)\n      .textAlign(TextAlign.Center)\n      .fontSize(30)\n\n    Text('1')\n      .width('90%')\n      .height('100%')\n      .backgroundColor(Color.Green)\n      .textAlign(TextAlign.Center)\n      .fontSize(30)\n\n    Text('2')\n      .width('90%')\n      .height('100%')\n      .backgroundColor(Color.Pink)\n      .textAlign(TextAlign.Center)\n      .fontSize(30)\n  }\n// ···\n  .loop(true)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(167041)/* ["default"] */.A) + "",
        width: "260",
        height: "155"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "loop为false"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  Swiper() {\n    // ···\n  }\n// ···\n  .loop(false)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(457163)/* ["default"] */.A) + "",
        width: "260",
        height: "155"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自动轮播",
      children: "自动轮播"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Swiper通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#autoplay",
        children: "autoPlay"
      }), "属性，控制是否自动轮播子组件。该属性默认值为false。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "autoPlay为true时，会自动切换播放子组件，子组件与子组件之间的播放间隔通过interval属性设置。interval属性默认值为3000，单位毫秒。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  Swiper() {\n    // ···\n  }\n// ···\n  .loop(true)\n  .autoPlay(true)\n  .interval(1000)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(438907)/* ["default"] */.A) + "",
        width: "260",
        height: "155"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导航点样式",
      children: "导航点样式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Swiper提供了默认的导航点样式和导航点箭头样式，导航点默认显示在Swiper下方居中位置，开发者也可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#indicator",
        children: "indicator"
      }), "属性自定义导航点的位置和样式，导航点箭头默认不显示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过indicator属性，开发者可以设置导航点相对于Swiper组件上下左右四个方位的位置，同时也可以设置每个导航点的尺寸、颜色、蒙层和被选中导航点的颜色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "导航点使用默认样式"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Swiper() {\n  Text('0')\n    .width('90%')\n    .height('100%')\n    .backgroundColor(Color.Gray)\n    .textAlign(TextAlign.Center)\n    .fontSize(30)\n\n  Text('1')\n    .width('90%')\n    .height('100%')\n    .backgroundColor(Color.Green)\n    .textAlign(TextAlign.Center)\n    .fontSize(30)\n\n  Text('2')\n    .width('90%')\n    .height('100%')\n    .backgroundColor(Color.Pink)\n    .textAlign(TextAlign.Center)\n    .fontSize(30)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(957074)/* ["default"] */.A) + "",
        width: "277",
        height: "168"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义导航点样式"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选中的导航点，直径设为30vp，且颜色为蓝色；未选中的导航点，直径设为15vp，颜色设为红色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  Swiper() {\n    // ···\n  }\n// ···\n  .indicator(\n    Indicator.dot()\n      .left(0)\n      .itemWidth(15)\n      .itemHeight(15)\n      .selectedItemWidth(30)\n      .selectedItemHeight(15)\n      .color(Color.Red)\n      .selectedColor(Color.Blue)\n  )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(313768)/* ["default"] */.A) + "",
        width: "279",
        height: "169"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Swiper通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#displayarrow10",
        children: "displayArrow"
      }), "属性，可以控制导航点箭头的大小、位置、颜色，底板的大小及颜色，以及鼠标悬停时是否显示箭头。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "箭头使用默认样式"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  Swiper() {\n    // ···\n  }\n// ···\n  .displayArrow(true, false)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(696793)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "287",
        height: "208"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义箭头样式"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "箭头显示在组件两侧，大小为18vp，导航点箭头颜色设为蓝色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  Swiper() {\n    // ···\n  }\n// ···\n  .displayArrow({\n    showBackground: true,\n    isSidebarMiddle: true,\n    backgroundSize: 24,\n    backgroundColor: Color.White,\n    arrowSize: 18,\n    arrowColor: Color.Blue\n  }, false)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(418150)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "291",
        height: "208"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "页面切换方式",
      children: "页面切换方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Swiper支持手指滑动、点击导航点和通过控制器三种方式切换页面，以下示例展示通过控制器切换页面的方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 如需作为页面入口，请取消@Entry的注释并删除export关键字\n// @Entry\n@Component\nexport struct SwiperPageSwitchMethod {\n  private swiperBackgroundColors: Color[] = [Color.Blue, Color.Brown, Color.Gray, Color.Green, Color.Orange,\n    Color.Pink, Color.Red, Color.Yellow];\n  private swiperAnimationMode: (SwiperAnimationMode | boolean | undefined)[] = [undefined, true, false,\n    SwiperAnimationMode.NO_ANIMATION, SwiperAnimationMode.DEFAULT_ANIMATION, SwiperAnimationMode.FAST_ANIMATION];\n  private swiperController: SwiperController = new SwiperController();\n  private animationModeIndex: number = 0;\n  private animationMode: (SwiperAnimationMode | boolean | undefined) = undefined;\n  @State animationModeStr: string = 'undefined';\n  @State targetIndex: number = 0;\n\n  aboutToAppear(): void {\n    this.toSwiperAnimationModeStr();\n  }\n\n  build() {\n    // ...\n          Column({ space: 5 }) {\n            Swiper(this.swiperController) {\n              ForEach(this.swiperBackgroundColors, (backgroundColor: Color, index: number) => {\n                Text(index.toString())\n                  .width(250)\n                  .height(250)\n                  .backgroundColor(backgroundColor)\n                  .textAlign(TextAlign.Center)\n                  .fontSize(30)\n              })\n            }\n            // ...\n            .indicator(true)\n\n            Row({ space: 12 }) {\n              Button('showNext')\n                .onClick(() => {\n                  this.swiperController.showNext(); // 通过controller切换到后一页\n                })\n              Button('showPrevious')\n                .onClick(() => {\n                  this.swiperController.showPrevious(); // 通过controller切换到前一页\n                })\n            }.margin(5)\n\n            Row({ space: 12 }) {\n              Text('Index:')\n              Button(this.targetIndex.toString())\n                .onClick(() => {\n                  this.targetIndex = (this.targetIndex + 1) % this.swiperBackgroundColors.length;\n                })\n            }.margin(5)\n            Row({ space: 12 }) {\n              Text('AnimationMode:')\n              Button(this.animationModeStr)\n                .onClick(() => {\n                  this.animationModeIndex = (this.animationModeIndex + 1) % this.swiperAnimationMode.length;\n                  this.toSwiperAnimationModeStr();\n                })\n            }.margin(5)\n\n            Row({ space: 12 }) {\n              Button('changeIndex(' + this.targetIndex + ', ' + this.animationModeStr + ')')\n                .onClick(() => {\n                  this.swiperController.changeIndex(this.targetIndex, this.animationMode); // 通过controller切换到指定页\n                })\n            }.margin(5)\n          }\n          // ...\n  }\n\n  private toSwiperAnimationModeStr() {\n    this.animationMode = this.swiperAnimationMode[this.animationModeIndex];\n    if ((this.animationMode === true) || (this.animationMode === false)) {\n      this.animationModeStr = '' + this.animationMode;\n    } else if ((this.animationMode === SwiperAnimationMode.NO_ANIMATION) ||\n      (this.animationMode === SwiperAnimationMode.DEFAULT_ANIMATION) ||\n      (this.animationMode === SwiperAnimationMode.FAST_ANIMATION)) {\n      this.animationModeStr = SwiperAnimationMode[this.animationMode];\n    } else {\n      this.animationModeStr = 'undefined';\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(285717)/* ["default"] */.A) + "",
        width: "267",
        height: "470"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "轮播方向",
      children: "轮播方向"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Swiper支持水平和垂直方向上进行轮播，主要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#vertical",
        children: "vertical"
      }), "属性控制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当vertical为true时，表示在垂直方向上进行轮播；为false时，表示在水平方向上进行轮播。vertical默认值为false。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置水平方向上轮播。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Swiper(\n// ···\n) {\n// ···\n}\n// ···\n.indicator(true)\n.vertical(false)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(924975)/* ["default"] */.A) + "",
        width: "428",
        height: "296"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置垂直方向轮播。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Swiper(\n// ···\n) {\n// ···\n}\n// ···\n.indicator(true)\n.vertical(true)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(722760)/* ["default"] */.A) + "",
        width: "349",
        height: "276"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "每页显示多个子页面",
      children: "每页显示多个子页面"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Swiper支持在一个页面内同时显示多个子组件，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#displaycount8",
        children: "displayCount"
      }), "属性设置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  Swiper() {\n    Text('0')\n      .width(250)\n      .height(250)\n      .backgroundColor(Color.Gray)\n      .textAlign(TextAlign.Center)\n      .fontSize(30)\n    Text('1')\n      .width(250)\n      .height(250)\n      .backgroundColor(Color.Green)\n      .textAlign(TextAlign.Center)\n      .fontSize(30)\n    Text('2')\n      .width(250)\n      .height(250)\n      .backgroundColor(Color.Pink)\n      .textAlign(TextAlign.Center)\n      .fontSize(30)\n    Text('3')\n      .width(250)\n      .height(250)\n      .backgroundColor(Color.Yellow)\n      .textAlign(TextAlign.Center)\n      .fontSize(30)\n  }\n// ···\n  .indicator(true)\n  .displayCount(2)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(440920)/* ["default"] */.A) + "",
        width: "343",
        height: "237"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义切换动画",
      children: "自定义切换动画"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Swiper支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#customcontenttransition12",
        children: "customContentTransition"
      }), "设置自定义切换动画，可以在回调中对视窗内所有页面逐帧设置透明度、缩放比例、位移、渲染层级等属性实现自定义切换动画。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 如需作为页面入口，请取消@Entry的注释并删除export关键字\n// @Entry\n@Component\nexport struct SwiperCustomAnimation {\n  private DISPLAY_COUNT: number = 2;\n  private MIN_SCALE: number = 0.75;\n  @State backgroundColors: Color[] = [Color.Green, Color.Blue, Color.Yellow, Color.Pink, Color.Gray, Color.Orange];\n  @State opacityList: number[] = [];\n  @State scaleList: number[] = [];\n  @State translateList: number[] = [];\n  @State zIndexList: number[] = [];\n\n  aboutToAppear(): void {\n    for (let i = 0; i < this.backgroundColors.length; i++) {\n      this.opacityList.push(1.0);\n      this.scaleList.push(1.0);\n      this.translateList.push(0.0);\n      this.zIndexList.push(0);\n    }\n  }\n\n  build() {\n    // ...\n      Column({ space: 12 }) {\n        // ...\n          Swiper() {\n            ForEach(this.backgroundColors, (backgroundColor: Color, index: number) => {\n              Text(index.toString())\n                .width('100%')\n                .height('100%')\n                .fontSize(50)\n                .textAlign(TextAlign.Center)\n                .backgroundColor(backgroundColor)\n                .opacity(this.opacityList[index])\n                .scale({ x: this.scaleList[index], y: this.scaleList[index] })\n                .translate({ x: this.translateList[index] })\n                .zIndex(this.zIndexList[index])\n            })\n          }\n          .height(300)\n          .indicator(false)\n          .displayCount(this.DISPLAY_COUNT, true)\n          .customContentTransition({\n            timeout: 1000,\n            transition: (proxy: SwiperContentTransitionProxy) => {\n              if (proxy.position <= proxy.index % this.DISPLAY_COUNT ||\n                proxy.position >= this.DISPLAY_COUNT + proxy.index % this.DISPLAY_COUNT) {\n                // 同组页面完全滑出视窗外时，重置属性值\n                this.opacityList[proxy.index] = 1.0;\n                this.scaleList[proxy.index] = 1.0;\n                this.translateList[proxy.index] = 0.0;\n                this.zIndexList[proxy.index] = 0;\n              } else {\n                // 同组页面未滑出视窗外时，对同组中左右两个页面，逐帧根据position修改属性值\n                if (proxy.index % this.DISPLAY_COUNT === 0) {\n                  this.opacityList[proxy.index] = 1 - proxy.position / this.DISPLAY_COUNT;\n                  this.scaleList[proxy.index] =\n                    this.MIN_SCALE + (1 - this.MIN_SCALE) * (1 - proxy.position / this.DISPLAY_COUNT);\n                  this.translateList[proxy.index] = -proxy.position * proxy.mainAxisLength +\n                    (1 - this.scaleList[proxy.index]) * proxy.mainAxisLength / 2.0;\n                } else {\n                  this.opacityList[proxy.index] = 1 - (proxy.position - 1) / this.DISPLAY_COUNT;\n                  this.scaleList[proxy.index] =\n                    this.MIN_SCALE + (1 - this.MIN_SCALE) * (1 - (proxy.position - 1) / this.DISPLAY_COUNT);\n                  this.translateList[proxy.index] = -(proxy.position - 1) * proxy.mainAxisLength -\n                    (1 - this.scaleList[proxy.index]) * proxy.mainAxisLength / 2.0;\n                }\n                this.zIndexList[proxy.index] = -1;\n              }\n            }\n          })\n          // ...\n      }\n      .width('100%')\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(177429)/* ["default"] */.A) + "",
        width: "428",
        height: "333"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "swiper与tabs联动",
      children: "Swiper与Tabs联动"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，Swiper选中的元素改变时，会通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#onselected18",
        children: "onSelected"
      }), "回调事件，将元素的索引值index返回。通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabs/ts-container-tabs#changeindex",
        children: "tabsController.changeIndex(index)"
      }), "方法来实现Tabs页签的切换。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nclass MyDataSource implements IDataSource {\n  private list: number[] = [];\n\n  constructor(list: number[]) {\n    this.list = list;\n  }\n\n  totalCount(): number {\n    return this.list.length;\n  }\n\n  getData(index: number): number {\n    return this.list[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n  }\n\n  unregisterDataChangeListener() {\n  }\n}\n\n// 如需作为页面入口，请取消@Entry的注释并删除export关键字\n// @Entry\n@Component\nexport struct SwiperAndTabsLinkage {\n  @State fontColor: string = '#182431';\n  @State selectedFontColor: string = '#007DFF';\n  @State currentIndex: number = 0;\n  private list: number[] = [];\n  private tabsController: TabsController = new TabsController();\n  private swiperController: SwiperController = new SwiperController();\n  private swiperData: MyDataSource = new MyDataSource([]);\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  aboutToAppear(): void {\n    for (let i = 0; i <= 9; i++) {\n      this.list.push(i);\n    }\n    this.swiperData = new MyDataSource(this.list);\n  }\n\n  @Builder tabBuilder(index: number, name: string) {\n    Column() {\n      Text(name)\n        .fontColor(this.currentIndex === index ? this.selectedFontColor : this.fontColor)\n        .fontSize(16)\n        .fontWeight(this.currentIndex === index ? 500 : 400)\n        .lineHeight(22)\n        .margin({ top: 17, bottom: 7 })\n      Divider()\n        .strokeWidth(2)\n        .color('#007DFF')\n        .opacity(this.currentIndex === index ? 1 : 0)\n    }.width('20%')\n  }\n\n  build() {\n    // ...\n          Column() {\n            Tabs({ barPosition: BarPosition.Start, controller: this.tabsController }) {\n              ForEach(this.list, (index: number) =>{\n                // 请在resources\\base\\element\\string.json文件中配置name为'swiper_text1' ，value为非空字符串的资源\n                TabContent().tabBar(this.tabBuilder(index,\n                  this.context.resourceManager.getStringByNameSync('swiper_text1') + this.list[index]))\n              })\n            }\n            .onTabBarClick((index: number) => {\n              this.currentIndex = index;\n              this.swiperController.changeIndex(index, true);\n            })\n            .barMode(BarMode.Scrollable)\n            .backgroundColor('#F1F3F5')\n            .height(56)\n            .width('100%')\n\n            Swiper(this.swiperController) {\n              LazyForEach(this.swiperData, (item: string) => {\n                Text(item.toString())\n                  .onAppear(()=>{\n                    console.info('onAppear ' + item.toString());\n                  })\n                  .onDisAppear(()=>{\n                    console.info('onDisAppear ' + item.toString());\n                  })\n                  .width('100%')\n                  .height('40%')\n                  .backgroundColor(0xAFEEEE)\n                  .textAlign(TextAlign.Center)\n                  .fontSize(30)\n              }, (item: string) => item)\n            }\n            .loop(false)\n            .onSelected((index: number) => {\n              console.info('onSelected:' + index);\n              this.currentIndex = index;\n              this.tabsController.changeIndex(index);\n            })\n          }\n          // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(126847)/* ["default"] */.A) + "",
        width: "531",
        height: "455"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置圆点导航点间距",
      children: "设置圆点导航点间距"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 19开始，针对圆点导航点，可以通过DotIndicator的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#space19",
        children: "space"
      }), "属性来设置圆点导航点的间距。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Swiper(\n  // ···\n) {\n  // ···\n}\n.indicator(new DotIndicator()\n  .space(this.space)\n  // ···\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导航点忽略组件大小",
      children: "导航点忽略组件大小"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当导航点的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#bottom",
        children: "bottom"
      }), "设为0之后，导航点的底部与Swiper的底部还会有一定间距。如果希望消除该间距，从API version 19开始，可通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#bottom19",
        children: "bottom"
      }), "(bottom, ignoreSize)属性来进行设置。将ignoreSize设置为true，即可忽略导航点组件大小，达到消除该间距的目的。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "圆点导航点忽略组件大小。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Swiper(\n  // ···\n) {\n  // ···\n}\n.indicator(new DotIndicator()\n  // ···\n  .bottom(LengthMetrics.vp(0), this.ignoreSize) // true\n  // ···\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数字导航点忽略组件大小。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Swiper(\n  // ···\n) {\n  // ···\n}\n.indicator(new DigitIndicator()\n  .bottom(LengthMetrics.vp(0), true)\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "圆点导航点设置间距及忽略组件大小完整示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthMetrics } from '@kit.ArkUI';\n// ...\n\n\nclass MyDataSource implements IDataSource {\n  private list: number[] = [];\n\n  constructor(list: number[]) {\n    this.list = list;\n  }\n\n  totalCount(): number {\n    return this.list.length;\n  }\n\n  getData(index: number): number {\n    return this.list[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n  }\n\n  unregisterDataChangeListener() {\n  }\n}\n\n// 如需作为页面入口，请取消@Entry的注释并删除export关键字\n// @Entry\n@Component\nexport struct SwiperIgnoreComponentSize {\n\n  @State space: LengthMetrics = LengthMetrics.vp(0);\n  @State spacePool: LengthMetrics[] = [LengthMetrics.vp(0), LengthMetrics.px(3), LengthMetrics.vp(10)];\n  @State spaceIndex: number = 0;\n\n  @State ignoreSize: boolean = false;\n  @State ignoreSizePool: boolean[] = [false, true];\n  @State ignoreSizeIndex: number = 0;\n\n  private swiperController1: SwiperController = new SwiperController();\n  private data1: MyDataSource = new MyDataSource([]);\n\n  aboutToAppear(): void {\n    let list1: number[] = [];\n    for (let i = 1; i <= 10; i++) {\n      list1.push(i);\n    }\n    this.data1 = new MyDataSource(list1);\n  }\n\n  build() {\n    // ...\n          Scroll() {\n            Column({ space: 20 }) {\n              Swiper(\n                this.swiperController1\n              ) {\n                LazyForEach(this.data1, (item: string) => {\n                  Text(item.toString())\n                    .width('90%')\n                    .height(120)\n                    .backgroundColor(0xAFEEEE)\n                    .textAlign(TextAlign.Center)\n                    .fontSize(30)\n                }, (item: string) => item)\n              }\n              .indicator(new DotIndicator()\n                .space(this.space)\n                .bottom(LengthMetrics.vp(0), this.ignoreSize) // true\n                .itemWidth(15)\n                .itemHeight(15)\n                .selectedItemWidth(15)\n                .selectedItemHeight(15)\n                .color(Color.Gray)\n                .selectedColor(Color.Blue)\n              )\n              .displayArrow({\n                showBackground: true,\n                isSidebarMiddle: true,\n                backgroundSize: 24,\n                backgroundColor: Color.White,\n                arrowSize: 18,\n                arrowColor: Color.Blue\n              }, false)\n\n              Column({ space: 4 }) {\n                Button('spaceIndex:' + this.spaceIndex).onClick(() => {\n                  this.spaceIndex = (this.spaceIndex + 1) % this.spacePool.length;\n                  this.space = this.spacePool[this.spaceIndex];\n                }).margin(10)\n\n                Button('ignoreSizeIndex:' + this.ignoreSizeIndex).onClick(() => {\n                  this.ignoreSizeIndex = (this.ignoreSizeIndex + 1) % this.ignoreSizePool.length;\n                  this.ignoreSize = this.ignoreSizePool[this.ignoreSizeIndex];\n                }).margin(10)\n              }.margin(2)\n            }.width('100%')\n          }\n          // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(552741)/* ["default"] */.A) + "",
        width: "345",
        height: "291"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "保持可见内容位置不变",
      children: "保持可见内容位置不变"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，Swiper通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper#maintainvisiblecontentposition20",
        children: "maintainVisibleContentPosition"
      }), "属性，可在使用LazyForEach懒加载数据时（如通过onDataAdd新增数据），保持当前可见内容位置不变，避免因数据增删导致的视图跳动。该属性默认值为false。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "maintainVisibleContentPosition为true时，显示区域上方或前方插入或删除数据时可见内容位置不变。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关于数据", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach：数据懒加载"
      }), "的具体使用，可参考数据懒加载章节中的示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nclass MyDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private dataArray: string[] = ['0', '1', '2', '3', '4', '5', '6'];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string | undefined {\n    return this.dataArray[index];\n  }\n\n  public addData(index: number, data: string): void {\n    this.dataArray.splice(index, 0, data);\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    })\n  }\n\n  public deleteData(index: number): void {\n    this.dataArray.splice(index, 1);\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    })\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      hilog.info(DOMAIN, 'testTag', 'add listener');\n      this.listeners.push(listener);\n    }\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      hilog.info(DOMAIN, 'testTag', 'remove listener');\n      this.listeners.splice(pos, 1);\n    }\n  }\n}\n\n// 如需作为页面入口，请取消@Entry的注释并删除export关键字\n// @Entry\n@Component\nexport struct SwiperVisibleContentPosition {\n  private data: MyDataSource = new MyDataSource();\n  @State index: number = 3;\n\n  build() {\n    // ...\n      Column({ space: 12 }) {\n        // ...\n            Swiper() {\n              LazyForEach(this.data, (item: string) => {\n                Text(item.toString())\n                  .width('90%')\n                  .height(160)\n                  .backgroundColor(0xAFEEEE)\n                  .textAlign(TextAlign.Center)\n                  .fontSize(30)\n              })\n            }\n            .onChange((index) => {\n              this.index = index;\n            })\n            .index(3)\n            .maintainVisibleContentPosition(true)\n            // ...\n\n            Column({ space: 12 }) {\n              Text('index:' + this.index).fontSize(20)\n              Row() {\n                // 在LazyForEach索引为0的位置添加数据\n                Button('header data add').height(30).onClick(() => {\n                  this.data.addData(0, 'header Data');\n                })\n                // 删除LazyForEach索引为0的位置数据\n                Button('header data delete').height(30).onClick(() => {\n                  this.data.deleteData(0);\n                })\n              }\n            }.margin(5)\n            // ...\n      }.width('100%')\n      .margin({ top: 5 })\n      // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(807516)/* ["default"] */.A) + "",
        width: "333",
        height: "256"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/short-video",
          children: "短视频切换"
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
440920(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
177429(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798220-0eb3289f3ebd6eeba3153af7a3145642.gif");

},
313768(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAACpCAYAAAABZHllAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAyQSURBVHhe7dxLbFzneYfxmSFFibGEKjIatAgcKRSpKyXZom4UFVexHceXwIlr2IETOzaiW2LJsi68zZw595khxTh10SaIF4aRVaMmstNsDLRxgKSLtosimwAF0nuRdlHZTS3bEqkb/33PIcVInHHKRP5WfhY/zPDMnDPWgo/f75sDFqIoEgC834gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeICwAniAsAJ4gLACeIC95TGCVN4jA2ib1uwpo9pjecA1xDXPAbCq8Tzx4DmhEX/D+yKeVaRGL5sU00cZCL4qod82dfA25EXPCeykFdA3vv15qNfVq/ZafW9G7T+q079dXjgwqy4IRZWCwyLc4FiAta8jxPH1u3Tas2DuhjG/rVtXmPblu/S7fZsQ19e/TIY19U6Nt7w2x51Hw+QFyQi6NQaZhNIYH8qKbNW/9AXb39Wt3bp6FKOT+ebebeede96tqwU2u3fEKjXqQkYd8FrREXzIktIGEc6fEv7dOmvk+qa+N2VWtjCuxYEFQVVENVw1Trbx/QyrV96lq7SXGc7cm0vh4+2IgLcnEUK7TJJIgSrbFppWfTgO669yGbYlI7Nru3EtbsPamODlXVvXmn1m3pt9dSm14SiwwTDG5EXDDDwhLacqgap7bksXDcsVfHjg1ZNEI77tl7bKqx1xOLSX3ij/Tx3q1aY3F58ulDNtXYkom4YB7igjl+EOm5obK6erdbYPYqiWuq17Ob5LKvnLOb6tJ836UaJure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");

},
167041(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437909-3e43fa289ff5e223c0e8b7d9414a61e3.gif");

},
807516(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477871-23d230954af054d86079c9eeceec7e3a.gif");

},
126847(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437915-9a40da7d30435a3e6198483bbd1d63a1.gif");

},
924975(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437913-361b29f45554b2f64bbe6240de0acadf.png");

},
418150(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477867-bc1944471a92013b752e5c8ace2d58fc.gif");

},
457163(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957864-49630d2f708876abca6cab66735b4c40.gif");

},
438907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477865-0967e13ce6fac54fc63ce3ac69233761.gif");

},
285717(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798218-2e217b70bf4244237a1ded8a2453db2a.gif");

},
552741(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957870-68c81186a4eda83e7a84b1edb0a263bc.gif");

},
696793(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957866-24dc555fbcf8cfd88da34c2a40430152.gif");

},
722760(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957868-f5d25cd6bfce90503bf07d4d74b12730.png");

},
957074(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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