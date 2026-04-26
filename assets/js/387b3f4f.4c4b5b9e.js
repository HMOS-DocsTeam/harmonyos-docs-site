"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["854157"], {
29407(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_event_arkts_ui_widget_event_uiability_arkts_ui_widget_event_uiability_md_387_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-widget-arkts-ui-widget-event-arkts-ui-widget-event-uiability-arkts-ui-widget-event-uiability-md-387.json
var site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_event_arkts_ui_widget_event_uiability_arkts_ui_widget_event_uiability_md_387_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-uiability/arkts-ui-widget-event-uiability","title":"通过router或call事件刷新卡片内容","description":"使用router事件，点击卡片可拉起对应应用的UIAbility至前台，并刷新卡片。使用call事件，点击卡片可拉起对应应用的UIAbility至后台，并刷新卡片。在卡片页面中可以通过postCardAction接口触发router事件或者call事件拉起UIAbility，然后由UIAbility刷新卡片内容，下面是这种刷新方式的简单示例。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-uiability/arkts-ui-widget-event-uiability.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-uiability","slug":"/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-uiability/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-uiability/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"通过router或call事件刷新卡片内容","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-event-uiability","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"卡片传递消息给应用（message事件）","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-formextensionability/"},"next":{"title":"ArkTS卡片编辑概述","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-edit/x-ui-widget-event-formeditextensionability-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-uiability/arkts-ui-widget-event-uiability.md


const frontMatter = {
	title: '通过router或call事件刷新卡片内容',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-event-uiability',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '通过router或call事件刷新卡片内容';

const assets = {

};



const toc = [{
  "value": "通过router事件刷新卡片内容",
  "id": "通过router事件刷新卡片内容",
  "level": 2
}, {
  "value": "通过call事件刷新卡片内容",
  "id": "通过call事件刷新卡片内容",
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
        id: "通过router或call事件刷新卡片内容",
        children: "通过router或call事件刷新卡片内容"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用router事件，点击卡片可拉起对应应用的UIAbility至前台，并刷新卡片。使用call事件，点击卡片可拉起对应应用的UIAbility至后台，并刷新卡片。在卡片页面中可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-postcardaction/js-apis-postcardaction#postcardaction-1",
        children: "postCardAction"
      }), "接口触发router事件或者call事件拉起UIAbility，然后由UIAbility刷新卡片内容，下面是这种刷新方式的简单示例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(671705)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文主要介绍动态卡片的事件开发。对于静态卡片，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/service-widgets/ts-container-formlink/ts-container-formlink",
        children: "FormLink"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过router事件刷新卡片内容",
      children: "通过router事件刷新卡片内容"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在卡片页面代码文件中，通过注册Button的onClick点击事件回调并在回调中调用postCardAction接口，触发router事件拉起UIAbility至前台。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/widgetupdaterouter/pages/WidgetUpdateRouterCard.ets\nlet storageUpdateRouter = new LocalStorage();\n\n@Entry(storageUpdateRouter)\n@Component\nstruct WidgetUpdateRouterCard {\n  // $r('app.string.init')需要替换为开发者所需的资源文件\n  @LocalStorageProp('routerDetail') routerDetail: ResourceStr = $r('app.string.init');\n\n  build() {\n    Column() {\n      Column() {\n        Text(this.routerDetail)\n          .fontColor('#FFFFFF')\n          .opacity(0.9)\n          .fontSize(14)\n          .margin({ top: '8%', left: '10%', right: '10%' })\n          .textOverflow({ overflow: TextOverflow.Ellipsis })\n          .maxLines(2)\n      }.width('100%').height('50%')\n      .alignItems(HorizontalAlign.Start)\n\n      Row() {\n        Button() {\n          // $r('app.string.JumpLabel')需要替换为开发者所需的资源文件\n          Text($r('app.string.JumpLabel'))\n            .fontColor('#45A6F4')\n            .fontSize(12)\n        }\n        .width(120)\n        .height(32)\n        .margin({ top: '30%', bottom: '10%' })\n        .backgroundColor('#FFFFFF')\n        .borderRadius(16)\n        .onClick(() => {\n          postCardAction(this, {\n            action: 'router',\n            abilityName: 'WidgetEventRouterEntryAbility', // 只能跳转到当前应用下的UIAbility\n            params: {\n              routerDetail: 'RouterFromCard',\n            }\n          });\n        })\n      }.width('100%').height('40%')\n      .justifyContent(FlexAlign.Center)\n    }\n    .width('100%')\n    .height('100%')\n    .alignItems(HorizontalAlign.Start)\n    // $r('app.media.CardEvent')需要替换为开发者所需的资源文件\n    .backgroundImage($r('app.media.CardEvent'))\n    .backgroundImageSize(ImageSize.Cover)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在UIAbility的onCreate或者onNewWant生命周期中可以通过入参want获取卡片的formID和传递过来的参数信息，然后调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formproviderupdateform",
            children: "updateForm"
          }), "接口刷新卡片。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/widgetevententryability/WidgetEventRouterEntryAbility.ts\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { formBindingData, formInfo, formProvider } from '@kit.FormKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'WidgetEventRouterEntryAbility';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\nexport default class WidgetEventRouterEntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    this.handleFormRouterEvent(want, 'onCreate');\n  }\n\n  handleFormRouterEvent(want: Want, source: string): void {\n    hilog.info(DOMAIN_NUMBER, TAG, `handleFormRouterEvent ${source}, Want: ${JSON.stringify(want)}`);\n    if (want.parameters && want.parameters[formInfo.FormParam.IDENTITY_KEY] !== undefined) {\n      let curFormId = want.parameters[formInfo.FormParam.IDENTITY_KEY].toString();\n      // want.parameters.params 对应 postCardAction() 中 params 内容\n      let message: string = (JSON.parse(want.parameters?.params as string))?.routerDetail;\n      hilog.info(DOMAIN_NUMBER, TAG, `UpdateForm formId: ${curFormId}, message: ${message}`);\n      let formData: Record<string, string> = {\n        'routerDetail': message + ' ' + source + ' UIAbility', // 和卡片布局中对应\n      };\n      let formMsg = formBindingData.createFormBindingData(formData);\n      formProvider.updateForm(curFormId, formMsg).then((data) => {\n        hilog.info(DOMAIN_NUMBER, TAG, 'updateForm success.', JSON.stringify(data));\n      }).catch((error: BusinessError) => {\n        hilog.info(DOMAIN_NUMBER, TAG, 'updateForm failed.', JSON.stringify(error));\n      });\n    }\n  }\n\n  // 如果UIAbility已在后台运行，在收到Router事件后会触发onNewWant生命周期回调\n  onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    hilog.info(DOMAIN_NUMBER, TAG, 'onNewWant Want:', JSON.stringify(want));\n    this.handleFormRouterEvent(want, 'onNewWant');\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n\n    hilog.info(DOMAIN_NUMBER, TAG, '%{public}s', 'Ability onWindowStageCreate');\n\n    windowStage.loadContent('pages/Index', (err, data) => {\n      if (err.code) {\n        hilog.error(DOMAIN_NUMBER, TAG, 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');\n        return;\n      }\n      hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');\n    });\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过call事件刷新卡片内容",
      children: "通过call事件刷新卡片内容"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在卡片页面代码文件中，通过注册Button的onClick点击事件回调并在回调中调用postCardAction接口，触发call事件拉起UIAbility至后台。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/widgetupdatecall/pages/WidgetUpdateCallCard.ets\nlet storageUpdateCall = new LocalStorage();\n\n@Entry(storageUpdateCall)\n@Component\nstruct WidgetUpdateCallCard {\n  @LocalStorageProp('formId') formId: string = '12400633174999288';\n  // $r('app.string.init')需要替换为开发者所需的资源文件\n  @LocalStorageProp('calleeDetail') calleeDetail: ResourceStr = $r('app.string.init');\n\n  build() {\n    Column() {\n      Column() {\n        Text(this.calleeDetail)\n          .fontColor('#FFFFFF')\n          .opacity(0.9)\n          .fontSize(14)\n          .margin({ top: '8%', left: '10%' })\n      }.width('100%').height('50%')\n      .alignItems(HorizontalAlign.Start)\n\n      Row() {\n        Button() {\n          // $r('app.string.CalleeJumpLabel')需要替换为开发者所需的资源文件\n          Text($r('app.string.CalleeJumpLabel'))\n            .fontColor('#45A6F4')\n            .fontSize(12)\n        }\n        .width(120)\n        .height(32)\n        .margin({ top: '30%', bottom: '10%' })\n        .backgroundColor('#FFFFFF')\n        .borderRadius(16)\n        .onClick(() => {\n          postCardAction(this, {\n            action: 'call',\n            abilityName: 'WidgetCalleeEntryAbility', // 只能拉起当前应用下的UIAbility\n            params: {\n              method: 'funA',\n              formId: this.formId,\n              calleeDetail: 'CallFrom'\n            }\n          });\n        })\n      }.width('100%').height('40%')\n      .justifyContent(FlexAlign.Center)\n    }\n    .width('100%')\n    .height('100%')\n    .alignItems(HorizontalAlign.Start)\n    // $r('app.media.CardEvent')需要替换为开发者所需的资源文件\n    .backgroundImage($r('app.media.CardEvent'))\n    .backgroundImageSize(ImageSize.Cover)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在UIAbility的onCreate生命周期中监听call事件所需的方法，然后在对应方法中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formproviderupdateform",
            children: "updateForm"
          }), "接口刷新卡片。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/widgetcalleeentryability/WidgetCalleeEntryAbility.ts\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { formBindingData, formProvider } from '@kit.FormKit';\nimport { rpc } from '@kit.IPCKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'WidgetCalleeEntryAbility';\nconst DOMAIN_NUMBER: number = 0xFF00;\nconst MSG_SEND_METHOD: string = 'funA';\nconst CONST_NUMBER_1: number = 1;\n\nclass MyParcelable implements rpc.Parcelable {\n  num: number;\n  str: string;\n\n  constructor(num: number, str: string) {\n    this.num = num;\n    this.str = str;\n  };\n\n  marshalling(messageSequence: rpc.MessageSequence): boolean {\n    messageSequence.writeInt(this.num);\n    messageSequence.writeString(this.str);\n    return true;\n  };\n\n  unmarshalling(messageSequence: rpc.MessageSequence): boolean {\n    this.num = messageSequence.readInt();\n    this.str = messageSequence.readString();\n    return true;\n  };\n}\n\n// 在收到call事件后会触发callee监听的方法\nlet funACall = (data: rpc.MessageSequence): MyParcelable => {\n  // 获取call事件中传递的所有参数\n  let params: Record<string, string> = JSON.parse(data.readString());\n  if (params.formId !== undefined) {\n    let curFormId: string = params.formId;\n    let message: string = params.calleeDetail;\n    hilog.info(DOMAIN_NUMBER, TAG, `UpdateForm formId: ${curFormId}, message: ${message}`);\n    let formData: Record<string, string> = {\n      'calleeDetail': message\n    };\n    let formMsg: formBindingData.FormBindingData = formBindingData.createFormBindingData(formData);\n    formProvider.updateForm(curFormId, formMsg).then((data) => {\n      hilog.info(DOMAIN_NUMBER, TAG, `updateForm success. ${JSON.stringify(data)}`);\n    }).catch((error: BusinessError) => {\n      hilog.error(DOMAIN_NUMBER, TAG, `updateForm failed: ${JSON.stringify(error)}`);\n    });\n  }\n  return new MyParcelable(CONST_NUMBER_1, 'aaa');\n};\n\nexport default class WidgetCalleeEntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    try {\n      // 监听call事件所需的方法\n      this.callee.on(MSG_SEND_METHOD, funACall);\n    } catch (error) {\n      hilog.error(DOMAIN_NUMBER, TAG, `${MSG_SEND_METHOD} register failed with error ${JSON.stringify(error)}`);\n    }\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // Main window is created, set main page for this ability\n    hilog.info(DOMAIN_NUMBER, TAG, '%{public}s', 'Ability onWindowStageCreate');\n\n    windowStage.loadContent('pages/Index', (err, data) => {\n      if (err.code) {\n        hilog.error(DOMAIN_NUMBER, TAG, 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');\n        return;\n      }\n      hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');\n    });\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "要拉起UIAbility至后台，需要在module.json5配置文件中，配置ohos.permission.KEEP_BACKGROUND_RUNNING权限。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//src/main/module.json5\n\"requestPermissions\": [\n  {\n    \"name\": \"ohos.permission.KEEP_BACKGROUND_RUNNING\",\n  },\n// ···\n]\n"
          })
        }), "\n"]
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
671705(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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