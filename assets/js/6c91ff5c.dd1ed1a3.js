"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["487077"], {
835344(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_event_arkts_ui_widget_event_router_arkts_ui_widget_event_router_md_6c9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-widget-arkts-ui-widget-event-arkts-ui-widget-event-router-arkts-ui-widget-event-router-md-6c9.json
var site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_event_arkts_ui_widget_event_router_arkts_ui_widget_event_router_md_6c9_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-router/arkts-ui-widget-event-router","title":"卡片跳转到应用页面（router事件）","description":"在动态卡片中使用postCardAction接口的router能力，能够快速拉起动态卡片提供方应用的指定UIAbility(页面)，因此UIAbility较多的应用往往会通过卡片提供不同的跳转按钮，实现一键直达的效果。例如相机卡片，卡片上提供拍照、录像等按钮，点击不同按钮将拉起相机应用的不同UIAbility，从而提升用户的体验。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-router/arkts-ui-widget-event-router.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-router","slug":"/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-router/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-router/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"卡片跳转到应用页面（router事件）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-event-router","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkTS卡片页面交互概述","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-overview/"},"next":{"title":"卡片拉起应用UIAbility到后台（call事件）","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-call/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-router/arkts-ui-widget-event-router.md


const frontMatter = {
	title: '卡片跳转到应用页面（router事件）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-event-router',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '卡片跳转到应用页面（router事件）';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "运行效果",
  "id": "运行效果",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "卡片跳转到应用页面router事件",
        children: "卡片跳转到应用页面（router事件）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在动态卡片中使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-postcardaction/js-apis-postcardaction#postcardaction-1",
        children: "postCardAction"
      }), "接口的router能力，能够快速拉起动态卡片提供方应用的指定UIAbility(页面)，因此UIAbility较多的应用往往会通过卡片提供不同的跳转按钮，实现一键直达的效果。例如相机卡片，卡片上提供拍照、录像等按钮，点击不同按钮将拉起相机应用的不同UIAbility，从而提升用户的体验。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(728980)/* ["default"] */.A) + "",
        width: "296",
        height: "139"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(601482)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文主要介绍动态卡片的事件开发。对于静态卡片，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/service-widgets/ts-container-formlink/ts-container-formlink",
        children: "FormLink"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建动态卡片，在工程的entry模块中，新建名为WidgetEventRouterCard的ArkTS卡片。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构建ArkTS卡片页面代码布局，卡片页面布局中有两个按钮，点击其中一个按钮时调用postCardAction向指定UIAbility发送router事件，并在事件内定义需要传递的内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// src/main/ets/widgeteventrouter/pages/WidgetEventRouterCard.ets\n@Entry\n@Component\nstruct WidgetEventRouterCard {\n  build() {\n    Column() {\n      // $r('app.string.JumpLabel')需要替换为开发者所需的资源文件\n      Text($r('app.string.JumpLabel'))\n        .fontColor('#FFFFFF')\n        .opacity(0.9)\n        .fontSize(14)\n        .margin({ top: '8%', left: '10%' })\n      Row() {\n        Column() {\n          Button() {\n            // $r('app.string.ButtonA_label')需要替换为开发者所需的资源文件\n            Text($r('app.string.ButtonA_label'))\n              .fontColor('#45A6F4')\n              .fontSize(12)\n          }\n          .width(120)\n          .height(32)\n          .margin({ top: '20%' })\n          .backgroundColor('#FFFFFF')\n          .borderRadius(16)\n          .onClick(() => {\n            postCardAction(this, {\n              action: 'router',\n              abilityName: 'EntryAbility',\n              params: { targetPage: 'funA' }\n            });\n          })\n\n          Button() {\n            // $r('app.string.ButtonB_label')需要替换为开发者所需的资源文件\n            Text($r('app.string.ButtonB_label'))\n              .fontColor('#45A6F4')\n              .fontSize(12)\n          }\n          .width(120)\n          .height(32)\n          .margin({ top: '8%', bottom: '15vp' })\n          .backgroundColor('#FFFFFF')\n          .borderRadius(16)\n          .onClick(() => {\n            postCardAction(this, {\n              action: 'router',\n              abilityName: 'EntryAbility',\n              params: { targetPage: 'funB' }\n            });\n          })\n        }\n      }.width('100%').height('80%')\n      .justifyContent(FlexAlign.Center)\n    }\n    .width('100%')\n    .height('100%')\n    .alignItems(HorizontalAlign.Start)\n    // $r('app.media.CardEvent')需要替换为开发者所需的资源文件\n    .backgroundImage($r('app.media.CardEvent'))\n    .backgroundImageSize(ImageSize.Cover)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "处理router事件，在UIAbility中接收router事件并获取参数，根据传递的params不同，选择拉起不同的页面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// src/main/ets/entryability/EntryAbility.ts\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'EntryAbility';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\nexport default class EntryAbility extends UIAbility {\n  private selectPage: string = 'funA';\n  private currentWindowStage: window.WindowStage | null = null;\n\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    // 获取router事件中传递的targetPage参数\n    hilog.info(DOMAIN_NUMBER, TAG, `Ability onCreate, ${JSON.stringify(want)}`);\n    if (want?.parameters?.params) {\n      // want.parameters.params 对应 postCardAction() 中 params 内容\n      let params: Record<string, Object> = JSON.parse(want.parameters.params as string);\n      this.selectPage = params.targetPage as string;\n      hilog.info(DOMAIN_NUMBER, TAG, `onCreate selectPage: ${this.selectPage}`);\n    }\n  }\n\n  // 如果UIAbility已在后台运行，在收到Router事件后会触发onNewWant生命周期回调\n  onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    hilog.info(DOMAIN_NUMBER, TAG, `onNewWant Want: ${JSON.stringify(want)}`);\n    if (want?.parameters?.params) {\n      // want.parameters.params 对应 postCardAction() 中 params 内容\n      let params: Record<string, Object> = JSON.parse(want.parameters.params as string);\n      this.selectPage = params.targetPage as string;\n      hilog.info(DOMAIN_NUMBER, TAG, `onNewWant selectPage: ${this.selectPage}`);\n    }\n    if (this.currentWindowStage !== null) {\n      this.onWindowStageCreate(this.currentWindowStage);\n    }\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // Main window is created, set main page for this ability\n    let targetPage: string;\n    // 根据传递的targetPage不同，选择拉起不同的页面\n    switch (this.selectPage) {\n      case 'funA':\n        targetPage = 'funpages/FunA';\n        break;\n      case 'funB':\n        targetPage = 'funpages/FunB';\n        break;\n      default:\n        targetPage = 'pages/Index';\n    }\n    if (this.currentWindowStage === null) {\n      this.currentWindowStage = windowStage;\n    }\n    windowStage.loadContent(targetPage, (err, data) => {\n      if (err.code) {\n        hilog.error(DOMAIN_NUMBER, TAG, 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');\n        return;\n      }\n      hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');\n    });\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建跳转后的UIAbility页面，新建FunA.ets和FunB.ets，构建页面布局。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// src/main/ets/funpages/FunA.ets\n@Entry\n@Component\nstruct FunA {\n  build() {\n    Column() {\n      Row() {\n        // $r('app.string.ButtonA_label')需要替换为开发者所需的资源文件\n        Text(($r('app.string.ButtonA_label')))\n          .fontSize(24)\n          .fontWeight(FontWeight.Bold)\n          .textAlign(TextAlign.Start)\n          .margin({\n            top: 12,\n            bottom: 11,\n            right: 24,\n            left: 24\n          })\n      }\n      .width('100%')\n      .height(56)\n      .justifyContent(FlexAlign.Start)\n\n      // $r('app.media.pic_empty')需要替换为开发者所需的资源文件\n      Image($r('app.media.pic_empty'))\n        .width(120)\n        .height(120)\n        .margin({ top: 224 })\n\n      // $r('app.string.NoContentAvailable')需要替换为开发者所需的资源文件\n      Text($r('app.string.NoContentAvailable'))\n        .fontSize(14)\n        // $r('app.color.text_color')需要替换为开发者所需的资源文件\n        .fontColor($r('app.color.text_color'))\n        .opacity(0.4)\n        .margin({\n          top: 8,\n          bottom: 317,\n          right: 152,\n          left: 152\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// src/main/ets/funpages/FunB.ets\n@Entry\n@Component\nstruct FunB {\n  build() {\n    Column() {\n      Row() {\n        // $r('app.string.ButtonB_label')需要替换为开发者所需的资源文件\n        Text(($r('app.string.ButtonB_label')))\n          .fontSize(24)\n          .fontWeight(FontWeight.Bold)\n          .textAlign(TextAlign.Start)\n          .margin({\n            top: 12,\n            bottom: 11,\n            right: 24,\n            left: 24\n          })\n      }\n      .width('100%')\n      .height(56)\n      .justifyContent(FlexAlign.Start)\n\n      // $r('app.media.pic_empty')需要替换为开发者所需的资源文件\n      Image($r('app.media.pic_empty'))\n        .width(120)\n        .height(120)\n        .margin({ top: 224 })\n\n      // $r('app.string.NoContentAvailable')需要替换为开发者所需的资源文件\n      Text($r('app.string.NoContentAvailable'))\n        .fontSize(14)\n        // $r('app.color.text_color')需要替换为开发者所需的资源文件\n        .fontColor($r('app.color.text_color'))\n        .opacity(0.4)\n        .margin({\n          top: 8,\n          bottom: 317,\n          right: 152,\n          left: 152\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在resources/base/profile下的main_pages.json文件中配置FunA.ets和FunB.ets页面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// src/main/resources/base/profile/main_pages.json\n{\n    \"src\": [\n      \"pages/Index\",\n      \"funpages/FunA\",\n      \"funpages/FunB\"\n    ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "资源文件如下，请开发者替换为实际使用的资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// src/main/resources/zh_CN/element/string.json\n{\n  \"string\": [\n    // ...\n    {\n      \"name\": \"ButtonA_label\",\n      \"value\": \"FunA页面\"\n    },\n    {\n      \"name\": \"ButtonB_label\",\n      \"value\": \"FunB页面\"\n    },\n    {\n      \"name\": \"JumpLabel\",\n      \"value\": \"router事件跳转\"\n    },\n    {\n      \"name\": \"NoContentAvailable\",\n      \"value\": \"暂无内容\"\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行效果",
      children: "运行效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(666097)/* ["default"] */.A) + "",
        width: "404",
        height: "712"
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
666097(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478297-39ff00138f0ef899fbd46a378f625dc6.gif");

},
728980(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958296-29dd6827a37d734418f256a201129cf6.png");

},
601482(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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