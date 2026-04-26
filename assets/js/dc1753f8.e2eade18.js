"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["48543"], {
830492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_interaction_arkts_ui_widget_active_refresh_arkts_ui_widget_active_refresh_md_dc1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-widget-arkts-ui-widget-interaction-arkts-ui-widget-active-refresh-arkts-ui-widget-active-refresh-md-dc1.json
var site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_interaction_arkts_ui_widget_active_refresh_arkts_ui_widget_active_refresh_md_dc1_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-active-refresh/arkts-ui-widget-active-refresh","title":"ArkTS卡片主动刷新","description":"本文主要提供主动刷新的开发指导，刷新流程请参考主动刷新概述。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-active-refresh/arkts-ui-widget-active-refresh.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-active-refresh","slug":"/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-active-refresh/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-active-refresh/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"ArkTS卡片主动刷新","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-active-refresh","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkTS卡片页面刷新概述","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-interaction-overview/"},"next":{"title":"ArkTS卡片被动刷新","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-passive-refresh/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-active-refresh/arkts-ui-widget-active-refresh.md


const frontMatter = {
	title: 'ArkTS卡片主动刷新',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-active-refresh',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkTS卡片主动刷新';

const assets = {

};



const toc = [{
  "value": "卡片提供方主动刷新卡片内容",
  "id": "卡片提供方主动刷新卡片内容",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "运行结果",
  "id": "运行结果",
  "level": 3
}, {
  "value": "卡片提供方批量请求刷新卡片内容",
  "id": "卡片提供方批量请求刷新卡片内容",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
  "level": 3
}, {
  "value": "运行结果",
  "id": "运行结果-1",
  "level": 3
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arkts卡片主动刷新",
        children: "ArkTS卡片主动刷新"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文主要提供主动刷新的开发指导，刷新流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-interaction-overview#%E4%B8%BB%E5%8A%A8%E5%88%B7%E6%96%B0",
        children: "主动刷新概述"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "卡片提供方主动刷新卡片内容",
      children: "卡片提供方主动刷新卡片内容"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["卡片提供方可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formproviderupdateform",
        children: "updateForm"
      }), "接口进行主动刷新。推荐与卡片生命周期回调", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability#formextensionabilityonformevent",
        children: "onFormEvent"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability#formextensionabilityonupdateform",
        children: "onUpdateForm"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability#formextensionabilityonaddform",
        children: "onAddForm"
      }), "接口搭配使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面给出一个示例，实现如下功能：卡片添加至桌面后，点击卡片上的刷新按钮，刷新卡片信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-ui-widget-creation",
            children: "创建卡片"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["实现卡片布局，在卡片上添加一个刷新按钮，点击按钮后通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-postcardaction/js-apis-postcardaction#postcardaction-1",
            children: "postCardAction"
          }), "接口，触发onFormEvent回调。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/updatebymessage/pages/UpdateByMessageCard.ets\nlet storageUpdateByMsg = new LocalStorage();\n\n@Entry(storageUpdateByMsg)\n@Component\nstruct UpdateByMessageCard {\n  // $r('app.string.default_title')和$r('app.string.DescriptionDefault')需要替换为开发者所需的资源文件\n  @LocalStorageProp('title') title: ResourceStr = $r('app.string.default_title');\n  @LocalStorageProp('detail') detail: ResourceStr = $r('app.string.DescriptionDefault');\n\n  build() {\n    Column() {\n      Column() {\n        Text(this.title)\n          .fontColor('#FFFFFF')\n          .opacity(0.9)\n          .fontSize(14)\n          .margin({ top: '8%', left: '10%' })\n        Text(this.detail)\n          .fontColor('#FFFFFF')\n          .opacity(0.6)\n          .fontSize(12)\n          .margin({ top: '5%', left: '10%' })\n      }.width('100%').height('50%')\n      .alignItems(HorizontalAlign.Start)\n\n      Row() {\n        // ...\n        Button() {\n          // $r('app.string.update')需要替换为开发者所需的资源文件\n          Text($r('app.string.update'))\n            .fontColor('#45A6F4')\n            .fontSize(12)\n        }\n        .width(120)\n        .height(32)\n        .margin({ top: '30%', bottom: '10%' })\n        .backgroundColor('#FFFFFF')\n        .borderRadius(16)\n        .onClick(() => {\n          postCardAction(this, {\n            action: 'message',\n            params: { msgTest: 'messageEvent' }\n          });\n        })\n      }.width('100%').height('40%')\n      .justifyContent(FlexAlign.Center)\n    }\n    .width('100%')\n    .height('100%')\n    .alignItems(HorizontalAlign.Start)\n    // $r('app.media.CardEvent')需要替换为开发者所需的资源文件\n    .backgroundImage($r('app.media.CardEvent'))\n    .backgroundImageSize(ImageSize.Cover)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在onFormEvent回调函数的实现中，通过updateForm接口刷新卡片数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/entryformability/EntryFormAbility.ts\nimport { formBindingData, FormExtensionAbility, formInfo, formProvider } from '@kit.FormKit';\nimport { Configuration, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n\n// entry/src/main/ets/entryformability/EntryFormAbility.ts\nconst TAG: string = 'EntryFormAbility';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\nexport default class EntryFormAbility extends FormExtensionAbility {\n  onAddForm(want: Want): formBindingData.FormBindingData {\n    hilog.info(DOMAIN_NUMBER, TAG, '[EntryFormAbility] onAddForm');\n    hilog.info(DOMAIN_NUMBER, TAG, want.parameters?.[formInfo.FormParam.NAME_KEY] as string);\n    // 卡片使用方创建卡片时触发，卡片提供方需要返回卡片数据绑定类\n    let obj: Record<string, string> = {\n      'title': 'titleOnAddForm',\n      'detail': 'detailOnAddForm'\n    };\n    let formData: formBindingData.FormBindingData = formBindingData.createFormBindingData(obj);\n    return formData;\n  }\n\n  onCastToNormalForm(formId: string): void {\n    // ...\n    hilog.info(DOMAIN_NUMBER, TAG, '[EntryFormAbility] onCastToNormalForm');\n  }\n\n  onUpdateForm(formId: string): void {\n    // 若卡片支持定时更新/定点更新/卡片使用方主动请求更新功能，则提供方需要重写该方法以支持数据更新\n    hilog.info(DOMAIN_NUMBER, TAG, '[EntryFormAbility] onUpdateForm');\n    let obj: Record<string, string> = {\n      'title': 'titleOnUpdateForm',\n      'detail': 'detailOnUpdateForm'\n    };\n    let formData: formBindingData.FormBindingData = formBindingData.createFormBindingData(obj);\n    formProvider.updateForm(formId, formData).catch((error: BusinessError) => {\n      hilog.info(DOMAIN_NUMBER, TAG, '[EntryFormAbility] updateForm, error:' + JSON.stringify(error));\n    });\n  }\n\n  onChangeFormVisibility(newStatus: Record<string, number>): void {\n    // ...\n    hilog.info(DOMAIN_NUMBER, TAG, '[EntryFormAbility] onChangeFormVisibility');\n  }\n\n  onFormEvent(formId: string, message: string): void {\n    // 若卡片支持触发事件，则需要重写该方法并实现对事件的触发\n    hilog.info(DOMAIN_NUMBER, TAG, `FormAbility onFormEvent, formId = ${formId}, message: ${message}`);\n    class FormDataClass {\n      title: string = 'Title Update.'; // 和卡片布局中对应\n      detail: string = 'Description update success.'; // 和卡片布局中对应\n    }\n\n    // 请根据业务替换为实际刷新的卡片数据\n    let formData = new FormDataClass();\n    let formInfo: formBindingData.FormBindingData = formBindingData.createFormBindingData(formData);\n    formProvider.updateForm(formId, formInfo).then(() => {\n      hilog.info(DOMAIN_NUMBER, TAG, 'FormAbility updateForm success.');\n    }).catch((error: BusinessError) => {\n      hilog.error(DOMAIN_NUMBER, TAG, `Operation updateForm failed. Cause: ${JSON.stringify(error)}`);\n    });\n  }\n\n  onRemoveForm(formId: string): void {\n    // ...\n    hilog.info(DOMAIN_NUMBER, TAG, '[EntryFormAbility] onRemoveForm');\n    // ...\n  }\n\n  onConfigurationUpdate(config: Configuration) {\n    // ...\n    hilog.info(DOMAIN_NUMBER, TAG, '[EntryFormAbility] onConfigurationUpdate:' + JSON.stringify(config));\n  }\n\n\n  onAcquireFormState(want: Want): formInfo.FormState {\n    // ...\n    return formInfo.FormState.READY;\n  }\n\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "资源文件如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/resources/zh_CN/element/string.json\n{\n   \"string\": [\n   // ...\n     {\n       \"name\": \"default_title\",\n       \"value\": \"Title default.\"\n     },\n     {\n       \"name\": \"DescriptionDefault\",\n       \"value\": \"Description default.\"\n     },\n     {\n       \"name\": \"update\",\n       \"value\": \"刷新\"\n     }\n   ]\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "运行结果",
      children: "运行结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(829134)/* ["default"] */.A) + "",
        width: "406",
        height: "842"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "卡片提供方批量请求刷新卡片内容",
      children: "卡片提供方批量请求刷新卡片内容"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，支持卡片提供方批量请求刷新卡片内容。卡片提供方可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formproviderreloadforms22",
        children: "reloadForms"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formproviderreloadallforms22",
        children: "reloadAllForms"
      }), "接口在应用主进程中通知FormExtension进程进行批量更新，仅支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面给出一个示例，实现如下功能：添加应用的多张卡片至桌面后，点击应用UIAbility中的刷新按钮，批量刷新卡片信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-ui-widget-creation",
            children: "创建卡片"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "实现卡片布局，在卡片上创建两个待刷新的Text。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/reloadbyuiability/pages/ReloadByUIAbilityCard.ets\nlet storageReloadForm = new LocalStorage();\n\n@Entry(storageReloadForm)\n@Component\nstruct ReloadByUIAbilityCard {\n  // 创建两个待刷新的Text，Text初始内容分别为'Title default'、'Description default'。资源文件定义请参见下方步骤5\n  @LocalStorageProp('title') title: ResourceStr = $r('app.string.default_title');\n  @LocalStorageProp('detail') detail: ResourceStr = $r('app.string.DescriptionDefault');\n\n  build() {\n    Column() {\n      Column() {\n        Text(this.title)\n          .fontSize(14)\n          .margin({ top: '8%', left: '10%' })\n        Text(this.detail)\n          .fontSize(12)\n          .margin({ top: '5%', left: '10%' })\n      }.width('100%').height('50%')\n      .alignItems(HorizontalAlign.Start)\n    }\n    .width('100%')\n    .height('100%')\n    .alignItems(HorizontalAlign.Start)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在FormExtensionAbility中实现onUpdateForm回调，通过updateForm接口定义卡片刷新逻辑。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/entryformability/EntryFormAbility.ets\nimport { formBindingData, FormExtensionAbility, formInfo, formProvider } from '@kit.FormKit';\nimport { Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'EntryFormAbility';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\nexport default class EntryFormAbility extends FormExtensionAbility {\n  onAddForm(want: Want) {\n    const formData = '';\n    return formBindingData.createFormBindingData(formData);\n  }\n\n  onCastToNormalForm(formId: string): void {\n    hilog.info(DOMAIN_NUMBER, TAG, '[EntryFormAbility] onCastToNormalForm');\n  }\n\n  onUpdateForm(formId: string) {\n\n    class FormDataClass {\n      title: string = 'Title: ' + Math.random();\n      detail: string = 'Description: ' + Math.random();\n    }\n\n    let formData = new FormDataClass();\n    let formInfo: formBindingData.FormBindingData = formBindingData.createFormBindingData(formData);\n    formProvider.updateForm(formId, formInfo).then(() => {\n      hilog.info(DOMAIN_NUMBER, TAG, 'FormAbility updateForm success.');\n    }).catch((error: BusinessError) => {\n      hilog.error(DOMAIN_NUMBER, TAG, `Operation updateForm failed. code: ${error.code}, message: ${error.message}`);\n    });\n  }\n\n  onFormEvent(formId: string, message: string) {\n    hilog.info(DOMAIN_NUMBER, TAG, '[EntryFormAbility] onFormEvent');\n  }\n\n  onRemoveForm(formId: string) {\n    hilog.info(DOMAIN_NUMBER, TAG, '[EntryFormAbility] onRemoveForm');\n  }\n\n  onAcquireFormState(want: Want) {\n    hilog.info(DOMAIN_NUMBER, TAG, '[EntryFormAbility] onAcquireFormState');\n    return formInfo.FormState.READY;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在UIAbility的界面中添加两个批量刷新按钮，点击按钮后通过reloadForms或reloadAllForms接口，批量触发FormExtensionAbility中的onUpdateForm回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/pages/index.ets\nimport { common } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { formProvider } from '@kit.FormKit';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column({ space: 20 }) {\n      Button('reloadForms')\n        .onClick(() => {\n          try {\n            let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n            let moduleName: string = 'entry';\n            let abilityName: string = 'EntryFormAbility';\n            let formName: string = 'reloadByUIAbilityCard';\n            formProvider.reloadForms(context, moduleName, abilityName, formName).then((reloadNum: number) => {\n              console.info(`reloadForms success, reload number: ${reloadNum}`);\n            }).catch((error: BusinessError) => {\n              console.error(`promise error, code: ${error.code}, message: ${error.message})`);\n            });\n          } catch (error) {\n            console.error(`catch error, code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message})`);\n          }\n        })\n      Button('reloadAllForms')\n        .onClick(() => {\n          try {\n            let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n            formProvider.reloadAllForms(context).then((reloadNum: number) => {\n              console.info(`reloadAllForms success, reload number: ${reloadNum}`);\n            }).catch((error: BusinessError) => {\n              console.error(`promise error, code: ${error.code}, message: ${error.message})`);\n            });\n          } catch (error) {\n            console.error(`catch error, code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message})`);\n          }\n        })\n    }\n    .height('100%')\n    .width('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "资源文件如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/resources/base/element/string.json\n{\n   \"string\": [\n   // ...\n     {\n       \"name\": \"default_title\",\n       \"value\": \"Title default.\"\n     },\n     {\n       \"name\": \"DescriptionDefault\",\n       \"value\": \"Description default.\"\n     }\n   ]\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "运行结果-1",
      children: "运行结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(973140)/* ["default"] */.A) + "",
        width: "320",
        height: "696"
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
973140(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438341-ff725ad1b653140874d27625ab6712e8.gif");

},
829134(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798646-dea70e9af8c2f2e557ca6b713caed1ef.gif");

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