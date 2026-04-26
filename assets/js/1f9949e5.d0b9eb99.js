"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["114636"], {
554267(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_effects_arkts_blur_effect_arkts_blur_effect_md_1f9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-animation-effects-arkts-blur-effect-arkts-blur-effect-md-1f9.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_effects_arkts_blur_effect_arkts_blur_effect_md_1f9_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-blur-effect/arkts-blur-effect","title":"模糊","description":"动画效果可以丰富界面的细节，提升UI界面的真实感和品质感。例如，模糊和阴影效果可以让物体看起来更加立体，使得动画更加生动。ArkUI提供了丰富的效果接口，开发者可快速打造出精致、个性化的效果。本章主要介绍常用的模糊、阴影和色彩效果等接口。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-blur-effect/arkts-blur-effect.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-blur-effect","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-blur-effect/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-blur-effect/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"模糊","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-blur-effect","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"动画衔接","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-smoothing/"},"next":{"title":"阴影","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-shadow-effect/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-effects/arkts-blur-effect/arkts-blur-effect.md


const frontMatter = {
	title: '模糊',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-blur-effect',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '模糊';

const assets = {

};



const toc = [{
  "value": "使用backdropBlur为组件添加背景模糊",
  "id": "使用backdropblur为组件添加背景模糊",
  "level": 2
}, {
  "value": "使用blur为组件添加内容模糊",
  "id": "使用blur为组件添加内容模糊",
  "level": 2
}, {
  "value": "使用backgroundBlurStyle为组件添加背景模糊效果",
  "id": "使用backgroundblurstyle为组件添加背景模糊效果",
  "level": 2
}, {
  "value": "使用foregroundBlurStyle为组件添加内容模糊效果",
  "id": "使用foregroundblurstyle为组件添加内容模糊效果",
  "level": 2
}, {
  "value": "使用motionBlur为组件添加运动模糊效果",
  "id": "使用motionblur为组件添加运动模糊效果",
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
        id: "模糊",
        children: "模糊"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动画效果可以丰富界面的细节，提升UI界面的真实感和品质感。例如，模糊和阴影效果可以让物体看起来更加立体，使得动画更加生动。ArkUI提供了丰富的效果接口，开发者可快速打造出精致、个性化的效果。本章主要介绍常用的模糊、阴影和色彩效果等接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模糊效果可以体现界面空间的纵深感，区分前后元素的层级关系。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backdropblur",
              children: "backdropBlur"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为当前组件添加背景模糊效果，入参为模糊半径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#blur",
              children: "blur"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为当前组件添加内容模糊效果，入参为模糊半径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundblurstyle9",
              children: "backgroundBlurStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为当前组件添加背景模糊效果，入参为模糊样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-blur-style/ts-universal-attributes-foreground-blur-style#foregroundblurstyle",
              children: "foregroundBlurStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为当前组件添加内容模糊效果，入参为模糊样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-motionblur/ts-universal-attributes-motionblur#motionblur",
              children: "motionBlur"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为当前组件添加由缩放大小或位移变化引起的运动过程中的动态模糊效果，入参为模糊半径和锚点坐标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(9583)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以上接口均为实时模糊接口，每帧执行实时渲染，性能负载较大。当模糊内容与模糊半径均无需变动时，推荐采用静态模糊接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-effectkit/js-apis-effectkit#blur",
        children: "blur"
      }), "。最佳实践请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-fuzzy-scene-performance-optimization#section4945532519",
        children: "图像模糊动效优化-使用场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用backdropblur为组件添加背景模糊",
      children: "使用backdropBlur为组件添加背景模糊"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct BlurEffectsExample {\n  build() {\n    Column({ space: 10 }) {\n      Text('backdropBlur')\n        .width('90%')\n        .height('90%')\n        .fontSize(20)\n        .fontColor(Color.White)\n        .textAlign(TextAlign.Center)\n        .backdropBlur(10)// 对背景进行模糊\n        // 请将$r('app.media.bg')替换为实际资源文件\n        .backgroundImage($r('app.media.bg'))\n        .backgroundImageSize({ width: 400, height: 300 })\n    }\n    .width('100%')\n    .height('50%')\n    .margin({ top: 20 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(143235)/* ["default"] */.A) + "",
        width: "365",
        height: "348"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用blur为组件添加内容模糊",
      children: "使用blur为组件添加内容模糊"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  @State radius: number = 0;\n  @State text: string = '';\n  @State y: Resource | string = this.context.resourceManager.getStringSync($r('app.string.animation_blur_text1').id);// 请在resources\\base\\element\\string.json文件中配置name为'animation_blur_text1'，value为非空字符串的资源\n\n  aboutToAppear() {\n    // 请在resources\\base\\element\\string.json文件中配置name为'animation_blur_text2'，value为非空字符串的资源\n    // 请在resources\\base\\element\\string.json文件中配置name为'animation_blur_text3'，value为非空字符串的资源\n    // 请在resources\\base\\element\\string.json文件中配置name为'animation_blur_text4'，value为非空字符串的资源\n    this.text = this.context.resourceManager.getStringSync($r('app.string.animation_blur_text2').id) +\n    \"\\n\" + this.context.resourceManager.getStringSync($r('app.string.animation_blur_text3').id) + this.y +\n      \"\\n\" + this.context.resourceManager.getStringSync($r('app.string.animation_blur_text4').id) + this.radius;\n  }\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceBetween }) {\n      Text(this.text)\n        .height(200)\n        .fontSize(20)\n        .fontWeight(FontWeight.Bold)\n        .fontFamily(\"cursive\")\n        .fontStyle(FontStyle.Italic)\n      // 请将$r('app.media.bg')替换为实际资源文件\n      Image($r(\"app.media.bg\"))\n        .blur(this.radius)// 使用blur接口为照片组件添加内容模糊效果\n        .height('100%')\n        .width(\"100%\")\n        .objectFit(ImageFit.Cover)\n    }.height('100%')\n    .width(\"100%\")\n    .onTouch((event?: TouchEvent) => {\n      if (event) {\n        if (event.type === TouchType.Move) {\n          this.y = Number(event.touches[0].y.toString()).toString();\n          this.radius = Number(this.y) / 10; // 根据跟手过程中的滑动距离修改模糊半径，配合模糊接口，形成跟手模糊效果\n        }\n        if (event.type === TouchType.Up) {\n          this.radius = 0;\n          // 请在resources\\base\\element\\string.json文件中配置name为'animation_blur_text1'，value为非空字符串的资源\n          this.y = this.context.resourceManager.getStringSync($r('app.string.animation_blur_text1').id);\n        }\n      }\n      // 请在resources\\base\\element\\string.json文件中配置name为'animation_blur_text2'，value为非空字符串的资源\n      // 请在resources\\base\\element\\string.json文件中配置name为'animation_blur_text3'，value为非空字符串的资源\n      // 请在resources\\base\\element\\string.json文件中配置name为'animation_blur_text4'，value为非空字符串的资源\n      this.text = this.context.resourceManager.getStringSync($r('app.string.animation_blur_text2').id) + \"\\n\" + this.context.resourceManager.getStringSync($r('app.string.animation_blur_text3').id) + this.y +\n        \"\\n\" + this.context.resourceManager.getStringSync($r('app.string.animation_blur_text4').id) + this.radius;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(697579)/* ["default"] */.A) + "",
        width: "388",
        height: "773"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用backgroundblurstyle为组件添加背景模糊效果",
      children: "使用backgroundBlurStyle为组件添加背景模糊效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct BackDropBlurStyleDemo {\n  build() {\n    Grid() {\n      GridItem() {\n        Column() {\n          Column() {\n            // 请将$r('app.string.originalImage')替换为实际资源文件，在本示例中该资源文件的value值为\"原图\"\n            Text($r('app.string.originalImage'))\n              .fontSize(20)\n              .fontColor(Color.White)\n              .textAlign(TextAlign.Center)\n              .width('100%')\n              .height('100%')\n          }\n          .height(100)\n          .aspectRatio(1)\n          .borderRadius(10)\n          // 请将$r('app.media.bg')替换为实际资源文件\n          .backgroundImage($r('app.media.bg'))\n\n          // 请将$r('app.string.originalImage')替换为实际资源文件，在本示例中该资源文件的value值为\"原图\"\n          Text($r('app.string.originalImage'))\n            .fontSize(12)\n            .fontColor(Color.Black)\n        }\n        .height('100%')\n        .margin({ top: 20 })\n        .justifyContent(FlexAlign.Start)\n      }\n      .width(200)\n      .height(200)\n\n      GridItem() {\n        Column() {\n          Column() {\n            Text('Thin')\n              .fontSize(20)\n              .fontColor(Color.White)\n              .textAlign(TextAlign.Center)\n              .width('100%')\n              .height('100%')\n          }\n          .height(100)\n          .aspectRatio(1)\n          .borderRadius(10)\n          // 请将$r('app.media.bg')替换为实际资源文件\n          .backgroundImage($r('app.media.bg'))\n          // BlurStyle.Thin: 为组件添加轻薄材质模糊效果\n          // ThemeColorMode.LIGHT: 固定使用浅色模式效果\n          // AdaptiveColor.DEFAULT: 不使用取色模糊，使用默认的颜色作为蒙版颜色\n          // scale: 背景材质模糊效果程度，默认值是1\n          .backgroundBlurStyle(BlurStyle.Thin, {\n            colorMode: ThemeColorMode.LIGHT,\n            adaptiveColor: AdaptiveColor.DEFAULT,\n            scale: 0.1\n          })\n\n          Text('Thin')\n            .fontSize(12)\n            .fontColor(Color.Black)\n        }\n        .height('100%')\n        .margin({ top: 20 })\n        .justifyContent(FlexAlign.Start)\n      }\n      .width(200)\n      .height(200)\n\n      GridItem() {\n        Column() {\n          Column() {\n            Text('Regular')\n              .fontSize(20)\n              .fontColor(Color.White)\n              .textAlign(TextAlign.Center)\n              .width('100%')\n              .height('100%')\n          }\n          .height(100)\n          .aspectRatio(1)\n          .borderRadius(10)\n          // 请将$r('app.media.bg')替换为实际资源文件\n          .backgroundImage($r('app.media.bg'))\n          .backgroundBlurStyle(BlurStyle.Regular, {\n            colorMode: ThemeColorMode.LIGHT,\n            adaptiveColor: AdaptiveColor.DEFAULT,\n            scale: 0.1\n          })\n\n          Text('Regular')\n            .fontSize(12)\n            .fontColor(Color.Black)\n        }\n        .height('100%')\n        .justifyContent(FlexAlign.Start)\n      }\n      .width(200)\n      .height(200)\n\n      GridItem() {\n        Column() {\n          Column() {\n            Text('Thick')\n              .fontSize(20)\n              .fontColor(Color.White)\n              .textAlign(TextAlign.Center)\n              .width('100%')\n              .height('100%')\n          }\n          .height(100)\n          .aspectRatio(1)\n          .borderRadius(10)\n          // 请将$r('app.media.bg')替换为实际资源文件\n          .backgroundImage($r('app.media.bg'))\n          .backgroundBlurStyle(BlurStyle.Thick, {\n            colorMode: ThemeColorMode.LIGHT,\n            adaptiveColor: AdaptiveColor.DEFAULT,\n            scale: 0.1\n          })\n\n          Text('Thick')\n            .fontSize(12)\n            .fontColor(Color.Black)\n        }\n        .height('100%')\n        .justifyContent(FlexAlign.Start)\n      }\n      .width(200)\n      .height(200)\n\n      GridItem() {\n        Column() {\n          Column() {\n            Text('BACKGROUND_THIN')\n              .fontSize(12)\n              .fontColor(Color.White)\n              .textAlign(TextAlign.Center)\n              .width('100%')\n              .height('100%')\n          }\n          .height(100)\n          .aspectRatio(1)\n          .borderRadius(10)\n          // 请将$r('app.media.bg')替换为实际资源文件\n          .backgroundImage($r('app.media.bg'))\n          .backgroundBlurStyle(BlurStyle.BACKGROUND_THIN, {\n            colorMode: ThemeColorMode.LIGHT,\n            adaptiveColor: AdaptiveColor.DEFAULT,\n            scale: 0.1\n          })\n\n          Text('BACKGROUND_THIN')\n            .fontSize(12)\n            .fontColor(Color.Black)\n        }\n        .height('100%')\n        .justifyContent(FlexAlign.Start)\n      }\n      .width(200)\n      .height(200)\n\n      GridItem() {\n        Column() {\n          Column() {\n            Text('BACKGROUND_REGULAR')\n              .fontSize(12)\n              .fontColor(Color.White)\n              .textAlign(TextAlign.Center)\n              .width('100%')\n              .height('100%')\n          }\n          .height(100)\n          .aspectRatio(1)\n          .borderRadius(10)\n          // 请将$r('app.media.bg')替换为实际资源文件\n          .backgroundImage($r('app.media.bg'))\n          .backgroundBlurStyle(BlurStyle.BACKGROUND_REGULAR, {\n            colorMode: ThemeColorMode.LIGHT,\n            adaptiveColor: AdaptiveColor.DEFAULT,\n            scale: 0.1\n          })\n\n          Text('BACKGROUND_REGULAR')\n            .fontSize(12)\n            .fontColor(Color.Black)\n        }\n        .height('100%')\n        .justifyContent(FlexAlign.Start)\n      }\n      .width(200)\n      .height(200)\n\n      GridItem() {\n        Column() {\n          Column() {\n            Text('BACKGROUND_THICK')\n              .fontSize(12)\n              .fontColor(Color.White)\n              .textAlign(TextAlign.Center)\n              .width('100%')\n              .height('100%')\n          }\n          .height(100)\n          .aspectRatio(1)\n          .borderRadius(10)\n          // 请将$r('app.media.bg')替换为实际资源文件\n          .backgroundImage($r('app.media.bg'))\n          .backgroundBlurStyle(BlurStyle.BACKGROUND_THICK, {\n            colorMode: ThemeColorMode.LIGHT,\n            adaptiveColor: AdaptiveColor.DEFAULT,\n            scale: 0.1\n          })\n\n          Text('BACKGROUND_THICK')\n            .fontSize(12)\n            .fontColor(Color.Black)\n        }\n        .height('100%')\n        .justifyContent(FlexAlign.Start)\n      }\n      .width(200)\n      .height(200)\n\n      GridItem() {\n        Column() {\n          Column() {\n            Text('BACKGROUND_ULTRA_THICK')\n              .fontSize(12)\n              .fontColor(Color.White)\n              .textAlign(TextAlign.Center)\n              .width('100%')\n              .height('100%')\n          }\n          .height(100)\n          .aspectRatio(1)\n          .borderRadius(10)\n          // 请将$r('app.media.bg')替换为实际资源文件\n          .backgroundImage($r('app.media.bg'))\n          .backgroundBlurStyle(BlurStyle.BACKGROUND_ULTRA_THICK, {\n            colorMode: ThemeColorMode.LIGHT,\n            adaptiveColor: AdaptiveColor.DEFAULT,\n            scale: 0.1\n          })\n\n          Text('BACKGROUND_ULTRA_THICK')\n            .fontSize(12)\n            .fontColor(Color.Black)\n        }\n        .height('100%')\n        .justifyContent(FlexAlign.Start)\n      }\n      .width(200)\n      .height(200)\n    }\n    .columnsTemplate('1fr 1fr')\n    .rowsTemplate('1fr 1fr 1fr 1fr')\n    .width('100%')\n    .height('100%')\n    .margin({ top: 40 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(793159)/* ["default"] */.A) + "",
        width: "363",
        height: "804"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用foregroundblurstyle为组件添加内容模糊效果",
      children: "使用foregroundBlurStyle为组件添加内容模糊效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ForegroundBlurStyleDemo {\n  build() {\n    Grid() {\n      GridItem() {\n        Column() {\n          Column() {\n            // 请将$r('app.string.originalImage')替换为实际资源文件，在本示例中该资源文件的value值为\"原图\"\n            Text($r('app.string.originalImage'))\n              .fontSize(20)\n              .fontColor(Color.White)\n              .textAlign(TextAlign.Center)\n              .width('100%')\n              .height('100%')\n          }\n          .height(100)\n          .aspectRatio(1)\n          .borderRadius(10)\n          // 请将$r('app.media.bg')替换为实际资源文件\n          .backgroundImage($r('app.media.bg'))\n\n          // 请将$r('app.string.originalImage')替换为实际资源文件，在本示例中该资源文件的value值为\"原图\"\n          Text($r('app.string.originalImage'))\n            .fontSize(12)\n            .fontColor(Color.Black)\n        }\n        .height('100%')\n        .justifyContent(FlexAlign.Start)\n      }\n      .width(200)\n      .height(200)\n\n      GridItem() {\n        Column() {\n          Column() {\n            Text('Thin')\n              .fontSize(20)\n              .fontColor(Color.White)\n              .textAlign(TextAlign.Center)\n              .width('100%')\n              .height('100%')\n          }\n          .height(100)\n          .aspectRatio(1)\n          .borderRadius(10)\n          // 请将$r('app.media.bg')替换为实际资源文件\n          .backgroundImage($r('app.media.bg'))\n          // BlurStyle.Thin: 为组件添加轻薄材质模糊效果\n          // ThemeColorMode.LIGHT: 固定使用浅色模式效果\n          // AdaptiveColor.DEFAULT: 不使用取色模糊，使用默认的颜色作为蒙版颜色\n          // scale: 背景材质模糊效果程度，默认值是1\n          .foregroundBlurStyle(BlurStyle.Thin, {\n            colorMode: ThemeColorMode.LIGHT,\n            adaptiveColor: AdaptiveColor.DEFAULT,\n            scale: 0.1\n          })\n\n          Text('Thin')\n            .fontSize(12)\n            .fontColor(Color.Black)\n        }\n        .height('100%')\n        .justifyContent(FlexAlign.Start)\n      }\n      .width(200)\n      .height(200)\n\n      GridItem() {\n        Column() {\n          Column() {\n            Text('Regular')\n              .fontSize(20)\n              .fontColor(Color.White)\n              .textAlign(TextAlign.Center)\n              .width('100%')\n              .height('100%')\n          }\n          .height(100)\n          .aspectRatio(1)\n          .borderRadius(10)\n          // 请将$r('app.media.bg')替换为实际资源文件\n          .backgroundImage($r('app.media.bg'))\n          .foregroundBlurStyle(BlurStyle.Regular, {\n            colorMode: ThemeColorMode.LIGHT,\n            adaptiveColor: AdaptiveColor.DEFAULT,\n            scale: 0.1\n          })\n\n          Text('Regular')\n            .fontSize(12)\n            .fontColor(Color.Black)\n        }\n        .height('100%')\n        .justifyContent(FlexAlign.Start)\n      }\n      .width(200)\n      .height(200)\n\n      GridItem() {\n        Column() {\n          Column() {\n            Text('Thick')\n              .fontSize(20)\n              .fontColor(Color.White)\n              .textAlign(TextAlign.Center)\n              .width('100%')\n              .height('100%')\n          }\n          .height(100)\n          .aspectRatio(1)\n          .borderRadius(10)\n          // 请将$r('app.media.bg')替换为实际资源文件\n          .backgroundImage($r('app.media.bg'))\n          .foregroundBlurStyle(BlurStyle.Thick, {\n            colorMode: ThemeColorMode.LIGHT,\n            adaptiveColor: AdaptiveColor.DEFAULT,\n            scale: 0.1\n          })\n\n          Text('Thick')\n            .fontSize(12)\n            .fontColor(Color.Black)\n        }\n        .height('100%')\n        .justifyContent(FlexAlign.Start)\n      }\n      .width(200)\n      .height(200)\n\n      GridItem() {\n        Column() {\n          Column() {\n            Text('BACKGROUND_THIN')\n              .fontSize(12)\n              .fontColor(Color.White)\n              .textAlign(TextAlign.Center)\n              .width('100%')\n              .height('100%')\n          }\n          .height(100)\n          .aspectRatio(1)\n          .borderRadius(10)\n          // 请将$r('app.media.bg')替换为实际资源文件\n          .backgroundImage($r('app.media.bg'))\n          .foregroundBlurStyle(BlurStyle.BACKGROUND_THIN, {\n            colorMode: ThemeColorMode.LIGHT,\n            adaptiveColor: AdaptiveColor.DEFAULT,\n            scale: 0.1\n          })\n\n          Text('BACKGROUND_THIN')\n            .fontSize(12)\n            .fontColor(Color.Black)\n        }\n        .height('100%')\n        .justifyContent(FlexAlign.Start)\n      }\n      .width(200)\n      .height(200)\n\n      GridItem() {\n        Column() {\n          Column() {\n            Text('BACKGROUND_REGULAR')\n              .fontSize(12)\n              .fontColor(Color.White)\n              .textAlign(TextAlign.Center)\n              .width('100%')\n              .height('100%')\n          }\n          .height(100)\n          .aspectRatio(1)\n          .borderRadius(10)\n          // 请将$r('app.media.bg')替换为实际资源文件\n          .backgroundImage($r('app.media.bg'))\n          .foregroundBlurStyle(BlurStyle.BACKGROUND_REGULAR, {\n            colorMode: ThemeColorMode.LIGHT,\n            adaptiveColor: AdaptiveColor.DEFAULT,\n            scale: 0.1\n          })\n\n          Text('BACKGROUND_REGULAR')\n            .fontSize(12)\n            .fontColor(Color.Black)\n        }\n        .height('100%')\n        .justifyContent(FlexAlign.Start)\n      }\n      .width(200)\n      .height(200)\n\n      GridItem() {\n        Column() {\n          Column() {\n            Text('BACKGROUND_THICK')\n              .fontSize(12)\n              .fontColor(Color.White)\n              .textAlign(TextAlign.Center)\n              .width('100%')\n              .height('100%')\n          }\n          .height(100)\n          .aspectRatio(1)\n          .borderRadius(10)\n          // 请将$r('app.media.bg')替换为实际资源文件\n          .backgroundImage($r('app.media.bg'))\n          .foregroundBlurStyle(BlurStyle.BACKGROUND_THICK, {\n            colorMode: ThemeColorMode.LIGHT,\n            adaptiveColor: AdaptiveColor.DEFAULT,\n            scale: 0.1\n          })\n\n          Text('BACKGROUND_THICK')\n            .fontSize(12)\n            .fontColor(Color.Black)\n        }\n        .height('100%')\n        .justifyContent(FlexAlign.Start)\n      }\n      .width(200)\n      .height(200)\n\n      GridItem() {\n        Column() {\n          Column() {\n            Text('BACKGROUND_ULTRA_THICK')\n              .fontSize(12)\n              .fontColor(Color.White)\n              .textAlign(TextAlign.Center)\n              .width('100%')\n              .height('100%')\n          }\n          .height(100)\n          .aspectRatio(1)\n          .borderRadius(10)\n          // 请将$r('app.media.bg')替换为实际资源文件\n          .backgroundImage($r('app.media.bg'))\n          .foregroundBlurStyle(BlurStyle.BACKGROUND_ULTRA_THICK, {\n            colorMode: ThemeColorMode.LIGHT,\n            adaptiveColor: AdaptiveColor.DEFAULT,\n            scale: 0.1\n          })\n\n          Text('BACKGROUND_ULTRA_THICK')\n            .fontSize(12)\n            .fontColor(Color.Black)\n        }\n        .height('100%')\n        .justifyContent(FlexAlign.Start)\n      }\n      .width(200)\n      .height(200)\n    }\n    .columnsTemplate('1fr 1fr')\n    .rowsTemplate('1fr 1fr 1fr 1fr')\n    .width('100%')\n    .height('100%')\n    .margin({ top: 40 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(76544)/* ["default"] */.A) + "",
        width: "361",
        height: "801"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用motionblur为组件添加运动模糊效果",
      children: "使用motionBlur为组件添加运动模糊效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { curves } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct motionBlurTest {\n  @State widthSize: number = 300;\n  @State heightSize: number = 240;\n  @State flag: boolean = true;\n  @State radius: number = 0;\n  @State x: number = 0.5;\n  @State y: number = 0.5;\n\n  build() {\n    Column() {\n      Column() {\n        // 请将$r('app.media.testImg')替换为实际资源文件\n        Image($r('app.media.testImg'))\n          .width(this.widthSize)\n          .height(this.heightSize)\n          .scale({ x: this.flag ? 1 : 0.8,y: this.flag ? 1 : 0.8 ,centerX: '50%', centerY: '50%' })\n          .onClick(() => {\n            this.radius = 50;\n            this.x = 0.5;\n            this.y = 0.5;\n            this.flag = !this.flag;\n          })\n          .animation({\n            duration: 2000,\n            iterations: 1,\n            playMode: PlayMode.Alternate,\n            onFinish: () => {\n              this.radius = 0;\n            }\n          })\n          .motionBlur({ radius: this.radius, anchor: { x: this.x, y: this.y } })\n      }\n    }.width('100%').margin({ top: 50 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(170807)/* ["default"] */.A) + "",
        width: "362",
        height: "369"
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
697579(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798350-1121769bc446c71dde52e20d53510a93.gif");

},
9583(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
793159(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438045-8e1a30605ffe06267c0c254ca5938e5a.png");

},
76544(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958000-94d44e7128011b648a0af1439658e5fa.png");

},
170807(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478001-105bacdfd9b66cef6e8779d9abe7397b.gif");

},
143235(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477999-4f9991214fa3642fd5edd8525727df74.png");

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