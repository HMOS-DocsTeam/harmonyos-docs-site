"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["488051"], {
451912(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_liveform_arkts_ui_liveform_sceneanimation_arkts_ui_liveform_sceneanimation_development_arkts_ui_liveform_sceneanimation_development_md_8b0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-liveform-arkts-ui-liveform-sceneanimation-arkts-ui-liveform-sceneanimation-development-arkts-ui-liveform-sceneanimation-development-md-8b0.json
var site_docs_form_kit_arkts_ui_arkts_ui_liveform_arkts_ui_liveform_sceneanimation_arkts_ui_liveform_sceneanimation_development_arkts_ui_liveform_sceneanimation_development_md_8b0_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-sceneanimation/arkts-ui-liveform-sceneanimation-development/arkts-ui-liveform-sceneanimation-development","title":"场景动效类型互动卡片开发指导","description":"本文档提供了场景动效类型互动卡片的开发指导，包括卡片非激活态和激活态UI界面开发、卡片配置文件开发。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-sceneanimation/arkts-ui-liveform-sceneanimation-development/arkts-ui-liveform-sceneanimation-development.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-sceneanimation/arkts-ui-liveform-sceneanimation-development","slug":"/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-sceneanimation/arkts-ui-liveform-sceneanimation-development/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-sceneanimation/arkts-ui-liveform-sceneanimation-development/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"场景动效类型互动卡片开发指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-liveform-sceneanimation-development","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"场景动效类型互动卡片概述","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-sceneanimation/arkts-ui-liveform-sceneanimation-overview/"},"next":{"title":"ArkTS卡片适配常见问题","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget-adapt-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-sceneanimation/arkts-ui-liveform-sceneanimation-development/arkts-ui-liveform-sceneanimation-development.md


const frontMatter = {
	title: '场景动效类型互动卡片开发指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-liveform-sceneanimation-development',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '场景动效类型互动卡片开发指导';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发流程",
  "id": "开发流程",
  "level": 2
}, {
  "value": "卡片激活态UI开发",
  "id": "卡片激活态ui开发",
  "level": 3
}, {
  "value": "卡片非激活态UI开发",
  "id": "卡片非激活态ui开发",
  "level": 3
}, {
  "value": "互动卡片动效实现",
  "id": "互动卡片动效实现",
  "level": 3
}, {
  "value": "实现效果",
  "id": "实现效果",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "场景动效类型互动卡片开发指导",
        children: "场景动效类型互动卡片开发指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档提供了场景动效类型互动卡片的开发指导，包括卡片非激活态和激活态UI界面开发、卡片配置文件开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景动效类型互动卡片关键接口如下表所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 主要接口"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/form-api/form-arkts/js-apis-app-form-liveformextensionability/js-apis-app-form-liveformextensionability#onliveformcreate",
              children: "onLiveFormCreate(liveFormInfo: LiveFormInfo, session: UIExtensionContentSession): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "互动卡片界面对象创建的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/form-api/form-arkts/js-apis-app-form-liveformextensionability/js-apis-app-form-liveformextensionability#onliveformdestroy",
              children: "onLiveFormDestroy(liveFormInfo: LiveFormInfo): void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "互动卡片界面对象销毁、资源清理的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/form-api/form-arkts/form-arkts-application/js-apis-application-liveformextensioncontext/js-apis-application-liveformextensioncontext",
              children: "LiveFormExtensionContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LiveFormExtensionAbility的上下文，继承自ExtensionContext。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/form-api/form-arkts/form-arkts-application/js-apis-application-liveformextensioncontext/js-apis-application-liveformextensioncontext#startabilitybyliveform",
              children: "startAbilityByLiveForm(want: Want): Promise<void>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉起互动卡片提供方（应用）的页面。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formproviderrequestoverflow20",
              children: "formProvider.requestOverflow(formId: string, overflowInfo: formInfo.OverflowInfo): Promise<void>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片提供方发起互动卡片动效请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formprovidercanceloverflow20",
              children: "formProvider.cancelOverflow(formId: string): Promise<void>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片提供方发起取消互动卡片动效请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formprovidergetformrect20",
              children: "formProvider.getFormRect(formId: string): Promise<formInfo.Rect>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片提供方查询卡片位置、尺寸。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发流程",
      children: "开发流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "卡片激活态ui开发",
      children: "卡片激活态UI开发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建互动卡片"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/form-api/form-arkts/js-apis-app-form-liveformextensionability/js-apis-app-form-liveformextensionability",
            children: "LiveFormExtensionAbility"
          }), "创建互动卡片，创建时加载互动卡片页面。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/myliveformextensionability/MyLiveFormExtensionAbility.ets\nimport { formInfo, LiveFormInfo, LiveFormExtensionAbility } from '@kit.FormKit';\nimport { UIExtensionContentSession } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\nexport default class MyLiveFormExtensionAbility extends LiveFormExtensionAbility {\n  onLiveFormCreate(liveFormInfo: LiveFormInfo, session: UIExtensionContentSession) {\n    let storage: LocalStorage = new LocalStorage();\n    storage.setOrCreate('context', this.context);\n    storage.setOrCreate('session', session);\n    let formId: string = liveFormInfo.formId;\n    storage.setOrCreate('formId', formId);\n\n    // 获取卡片圆角信息\n    let borderRadius: number = liveFormInfo.borderRadius;\n    storage.setOrCreate('borderRadius', borderRadius);\n\n    // liveFormInfo.rect字段表示非激活态卡片组件相对激活态UI的位置和尺寸信息\n    let formRect: formInfo.Rect = liveFormInfo.rect;\n    storage.setOrCreate('formRect', formRect);\n    hilog.info(DOMAIN, 'testTag', `MyLiveFormExtensionAbility onSessionCreate formId: ${formId}` +\n      `, borderRadius: ${borderRadius}, formRectInfo: ${JSON.stringify(formRect)}`);\n\n    // 加载互动页面\n    session.loadContent('myliveformextensionability/pages/MyLiveFormPage', storage);\n  }\n\n  onLiveFormDestroy(liveFormInfo: LiveFormInfo) {\n    hilog.info(DOMAIN, 'testTag', `MyLiveFormExtensionAbility onDestroy`);\n  }\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现互动卡片页面"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/myliveformextensionability/pages/MyLiveFormPage.ets\nimport { formInfo, formProvider } from '@kit.FormKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n// Constants实现参考“互动卡片动效工具函数实现”小节\nimport { Constants } from '../../common/Constants';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst ANIMATION_RECT_SIZE: number = 100;\nconst END_SCALE: number = 1.5;\nconst END_TRANSLATE: number = -300;\nconst DOMAIN = 0x0000;\n\n@Entry\n@Component\nstruct MyLiveFormPage {\n  @State columnScale: number = 1.0;\n  @State columnTranslate: number = 0.0;\n  private uiContext: UIContext | undefined = undefined;\n  private storageForMyLiveFormPage: LocalStorage | undefined = undefined;\n  private formId: string | undefined = undefined;\n  private formRect: formInfo.Rect | undefined = undefined;\n  private formBorderRadius: number | undefined = undefined;\n  private liveFormContext: common.LiveFormExtensionContext | undefined = undefined;\n\n  aboutToAppear(): void {\n    this.uiContext = this.getUIContext();\n    if (!this.uiContext) {\n      hilog.error(DOMAIN, 'testTag', 'no uiContext');\n      return;\n    }\n    this.initParams();\n  }\n\n  private initParams(): void {\n    this.storageForMyLiveFormPage = this.uiContext?.getSharedLocalStorage();\n    this.formId = this.storageForMyLiveFormPage?.get<string>('formId');\n    this.formRect = this.storageForMyLiveFormPage?.get<formInfo.Rect>('formRect');\n    this.formBorderRadius = this.storageForMyLiveFormPage?.get<number>('borderRadius');\n    this.liveFormContext = this.storageForMyLiveFormPage?.get<common.LiveFormExtensionContext>('context');\n  }\n\n  // 执行动效\n  private runAnimation(): void {\n    this.uiContext?.animateTo({\n      duration: Constants.OVERFLOW_DURATION,\n      curve: Curve.Ease\n    }, () => {\n      this.columnScale = END_SCALE;\n      this.columnTranslate = END_TRANSLATE;\n    });\n  }\n\n  private startAbilityByLiveForm(): void {\n    try {\n      // 请开发者替换为实际的want信息\n      this.liveFormContext?.startAbilityByLiveForm({\n        bundleName: 'com.samples.formlivedemo',\n        abilityName: 'EntryAbility',\n      })\n        .then(() => {\n          hilog.info(DOMAIN, 'testTag', 'startAbilityByLiveForm succeed');\n        })\n        .catch((err: BusinessError) => {\n          hilog.error(DOMAIN, 'testTag',\n            `startAbilityByLiveForm failed, code is ${err?.code}, message is ${err?.message}`);\n        });\n    } catch (e) {\n      hilog.error(DOMAIN, 'testTag', `startAbilityByLiveForm failed, code is ${e?.code}, message is ${e?.message}`);\n    }\n  }\n\n  build() {\n    Stack({ alignContent: Alignment.TopStart }) {\n      // 背景组件和普通卡片一样大\n      Column()\n        .width(this.formRect ? this.formRect.width : 0)\n        .height(this.formRect ? this.formRect.height : 0)\n        .offset({\n          x: this.formRect ? this.formRect.left : 0,\n          y: this.formRect ? this.formRect.top : 0,\n        })\n        .borderRadius(this.formBorderRadius ? this.formBorderRadius : 0)\n        .backgroundColor('#2875F5')\n      Stack() {\n        this.buildContent();\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .width('100%')\n    .height('100%')\n    .onClick(() => {\n      hilog.info(DOMAIN, 'testTag', 'MyLiveFormPage click to start ability');\n      if (!this.liveFormContext) {\n        hilog.info(DOMAIN, 'testTag', 'MyLiveFormPage liveFormContext is empty');\n        return;\n      }\n      this.startAbilityByLiveForm();\n    })\n  }\n\n  @Builder\n  buildContent() {\n    Stack()\n      .width(ANIMATION_RECT_SIZE)\n      .height(ANIMATION_RECT_SIZE)\n      .backgroundColor(Color.White)\n      .scale({\n        x: this.columnScale,\n        y: this.columnScale,\n      })\n      .translate({\n        y: this.columnTranslate\n      })\n      .onAppear(() => {\n        // 在页面出现时执行动效\n        this.runAnimation();\n      })\n    // $r('app.string.button_cancel')需要在相应的资源文件string.json中定义\n    Button($r('app.string.button_cancel'))\n      .backgroundColor(Color.Grey)\n      .onClick(() => {\n        if (!this.formId) {\n          hilog.info(DOMAIN, 'testTag', 'MyLiveFormPage formId is empty, cancel overflow failed');\n          return;\n        }\n        hilog.info(DOMAIN, 'testTag', 'MyLiveFormPage cancel overflow animation');\n        formProvider.cancelOverflow(this.formId);\n      })\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "互动卡片LiveFormExtensionAbility配置"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在module.json5配置文件中", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#extensionabilities%E6%A0%87%E7%AD%BE",
            children: "extensionAbilities标签"
          }), "下配置LiveFormExtensionAbility。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/module.json5\n// ...\n    \"extensionAbilities\": [\n      // ...\n      {\n        \"name\": \"MyLiveFormExtensionAbility\",\n        \"srcEntry\": \"./ets/myliveformextensionability/MyLiveFormExtensionAbility.ets\",\n        \"description\": \"MyLiveFormExtensionAbility\",\n        \"type\": \"liveForm\"\n      }\n    ],\n    // ...\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在main_pages.json文件中声明互动卡片页面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/resources/base/profile/main_pages.json\n{\n  \"src\": [\n    \"pages/Index\",\n    \"myliveformextensionability/pages/MyLiveFormPage\"\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "卡片非激活态ui开发",
      children: "卡片非激活态UI开发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "非激活态卡片页面实现"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["非激活态卡片页面开发同普通卡片开发流程完全一致，在widgetCard.ets中完成。widgetCard.ets文件在卡片创建时自动生成，卡片创建流程可以参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-ui-widget-creation",
            children: "创建ArkTS卡片"
          }), "。在非激活态卡片页面实现点击卡片时，发起卡片动效请求。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/widget/pages/WidgetCard.ets\n@Entry\n@Component\nstruct WidgetCard {\n  build() {\n    Row() {\n      Column() {\n        // $r('app.string.liveform_click1')需要在相应的资源文件string.json中定义\n        Text($r('app.string.liveform_click1'))\n          // $r('app.float.font_size')需开发者根据实际情况替换相应的资源或值\n          .fontSize($r('app.float.font_size'))\n          .fontWeight(FontWeight.Medium)\n          // $r('sys.color.font_primary')需开发者根据实际情况替换相应的资源或值\n          .fontColor($r('sys.color.font_primary'))\n      }\n      .width('100%')\n    }\n    .height('100%')\n    .onClick(() => {\n      // 点击卡片时，选择向EntryFormAbility发送消息，并在其onFormEvent回调中调用formProvider.requestOverflow，请求卡片动效\n      postCardAction(this, {\n        action: 'message',\n        abilityName: 'EntryFormAbility',\n        params: {\n          message: 'requestOverflow'\n        }\n      });\n    })\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "form_config.json配置"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在form_config.json配置文件中新增sceneAnimationParams配置项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/resources/base/profile/form_config.json\n{\n  \"forms\": [\n    {\n      \"name\": \"widget\",\n      \"displayName\": \"$string:widget_display_name\",\n      \"description\": \"$string:widget_desc\",\n      \"src\": \"./ets/widget/pages/WidgetCard.ets\",\n      \"uiSyntax\": \"arkts\",\n      \"window\": {\n        \"designWidth\": 720,\n        \"autoDesignWidth\": true\n      },\n      \"colorMode\": \"auto\",\n      \"isDefault\": true,\n      \"updateEnabled\": true,\n      \"scheduledUpdateTime\": \"10:30\",\n      \"updateDuration\": 1,\n      \"defaultDimension\": \"2*2\",\n      \"supportDimensions\": [\n        \"2*2\"\n      ],\n      \"formConfigAbility\": \"ability://EntryAbility\",\n      \"dataProxyEnabled\": false,\n      \"isDynamic\": true,\n      \"transparencyEnabled\": false,\n      \"metadata\": [],\n      \"sceneAnimationParams\": {\n        \"abilityName\": \"MyLiveFormExtensionAbility\"\n      }\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "互动卡片动效实现",
      children: "互动卡片动效实现"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "触发互动卡片动效"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["互动卡片通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formproviderrequestoverflow20",
            children: "formProvider.requestOverflow"
          }), "接口触发动效，调用时需要明确：（1）动效申请范围。（2）动效持续时间。（3）是否使用系统提供的默认切换动效。具体可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/form-api/form-arkts/js-apis-app-form-forminfo/js-apis-app-form-forminfo#overflowinfo20",
            children: "formInfo.OverflowInfo"
          }), "。其中，互动卡片可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formprovidergetformrect20",
            children: "formProvider.getFormRect"
          }), "接口获取卡片尺寸和在窗口内的位置信息。卡片提供方以此计算动效申请范围，单位为vp。计算规则具体请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-ui-liveform/arkts-ui-liveform-sceneanimation/arkts-ui-liveform-sceneanimation-overview#%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E7%BA%A6%E6%9D%9F",
            children: "互动卡片请求参数约束"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/entryformability/EntryFormAbility.ets\nimport { FormExtensionAbility, formInfo, formProvider } from '@kit.FormKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n// Constants实现参考“互动卡片动效工具函数实现”小节\nimport { Constants } from '../common/Constants';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'EntryFormAbility';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\nexport default class EntryFormAbility extends FormExtensionAbility {\n  async onFormEvent(formId: string, message: string) {\n    let shortMessage: string = JSON.parse(message)['message'];\n\n    // 当接收的message为requestOverflow，触发互动卡片动效\n    if (shortMessage === 'requestOverflow') {\n      let formRect: formInfo.Rect = await formProvider.getFormRect(formId);\n      this.requestOverflow(formId, formRect.width, formRect.height);\n      return;\n    }\n  }\n\n  private requestOverflow(formId: string, formWidth: number, formHeight: number): void {\n    if (formWidth <= 0 || formHeight <= 0) {\n      hilog.info(DOMAIN_NUMBER, TAG, 'requestOverflow failed, form size is not correct.');\n      return;\n    }\n\n    // 基于卡片自身尺寸信息，计算卡片动效渲染区域\n    let left: number = -Constants.OVERFLOW_LEFT_RATIO * formWidth;\n    let top: number = -Constants.OVERFLOW_TOP_RATIO * formHeight;\n    let width: number = Constants.OVERFLOW_WIDTH_RATIO * formWidth;\n    let height: number = Constants.OVERFLOW_HEIGHT_RATIO * formHeight;\n    let duration: number = Constants.OVERFLOW_DURATION;\n\n    // 发起互动卡片动效申请\n    try {\n      formProvider.requestOverflow(formId, {\n        // 动效申请范围\n        area: {\n          left: left,\n          top: top,\n          width: width,\n          height: height\n        },\n        // 动效持续时间\n        duration: duration,\n        // 指定是否使用系统提供的默认切换动效\n        useDefaultAnimation: true,\n      }).then(() => {\n        hilog.info(DOMAIN_NUMBER, TAG, 'requestOverflow requestOverflow succeed');\n      }).catch((error: BusinessError) => {\n        hilog.info(DOMAIN_NUMBER, TAG, `requestOverflow requestOverflow catch error` + `,\n          code: ${error.code}, message: ${error.message}`);\n      })\n    } catch (e) {\n      hilog.info(DOMAIN_NUMBER, TAG, `requestOverflow call requestOverflow catch error` + `,\n        code: ${e.code}, message: ${e.message}`);\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "互动卡片动效工具函数实现"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/common/Constants.ets\n// 动效相关常量的开发\nexport class Constants {\n  // 互动卡片动效超范围，左侧偏移百分比 = 偏移值/卡片宽度\n  public static readonly OVERFLOW_LEFT_RATIO: number = 0.1;\n  // 互动卡片动效超范围，上侧偏移百分比 = 偏移值/卡片高度\n  public static readonly OVERFLOW_TOP_RATIO: number = 0.15;\n  // 互动卡片动效超范围，宽度放大百分比\n  public static readonly OVERFLOW_WIDTH_RATIO: number = 1.2;\n  // 互动卡片动效超范围，高度放大百分比\n  public static readonly OVERFLOW_HEIGHT_RATIO: number = 1.3;\n  // 互动卡片动效超范围，动效时长\n  public static readonly OVERFLOW_DURATION: number = 3500;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要的资源文件string.json"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n    \"string\": [\n      // ...\n      {\n        \"name\": \"liveform_click1\",\n        \"value\": \"点击触发互动卡片动效\"\n      },\n      {\n        \"name\": \"button_cancel\",\n        \"value\": \"强制取消动效\"\n      }\n    ]\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现效果",
      children: "实现效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是按照本文档代码示例开发而成的效果demo，demo执行动效时，点击按钮，将调用 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formprovidercanceloverflow20",
        children: "formProvider.cancelOverflow"
      }), " 接口，打断当前破框动效，卡片切换为非激活态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(737598)/* ["default"] */.A) + "",
        width: "357",
        height: "343"
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
737598(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958312-ba4c194268d0a50f77923128dd8f6119.gif");

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