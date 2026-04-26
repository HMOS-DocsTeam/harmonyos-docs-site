"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["45844"], {
708743(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_edit_x_ui_widget_event_formeditextensionability_overview_x_ui_widget_event_formeditextensionability_overview_md_4ef_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-widget-arkts-ui-widget-edit-x-ui-widget-event-formeditextensionability-overview-x-ui-widget-event-formeditextensionability-overview-md-4ef.json
var site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_edit_x_ui_widget_event_formeditextensionability_overview_x_ui_widget_event_formeditextensionability_overview_md_4ef_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-edit/x-ui-widget-event-formeditextensionability-overview/x-ui-widget-event-formeditextensionability-overview","title":"ArkTS卡片编辑概述","description":"ArkTS卡片提供卡片页面编辑能力，支持实现用户自定义卡片内容的功能，例如：编辑联系人卡片、修改卡片中展示的联系人、编辑天气卡片等。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-edit/x-ui-widget-event-formeditextensionability-overview/x-ui-widget-event-formeditextensionability-overview.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-edit/x-ui-widget-event-formeditextensionability-overview","slug":"/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-edit/x-ui-widget-event-formeditextensionability-overview/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-edit/x-ui-widget-event-formeditextensionability-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ArkTS卡片编辑概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/-ui-widget-event-formeditextensionability-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过router或call事件刷新卡片内容","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-uiability/"},"next":{"title":"应用内拉起卡片管理加桌","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-add/arkts-ui-widget-open-formmanager/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-edit/x-ui-widget-event-formeditextensionability-overview/x-ui-widget-event-formeditextensionability-overview.md


const frontMatter = {
	title: 'ArkTS卡片编辑概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/-ui-widget-event-formeditextensionability-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkTS卡片编辑概述';

const assets = {

};



const toc = [{
  "value": "半模态卡片编辑",
  "id": "半模态卡片编辑",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "全屏卡片编辑",
  "id": "全屏卡片编辑",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理-1",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arkts卡片编辑概述",
        children: "ArkTS卡片编辑概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS卡片提供卡片页面编辑能力，支持实现用户自定义卡片内容的功能，例如：编辑联系人卡片、修改卡片中展示的联系人、编辑天气卡片等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卡片页面编辑分为半模态卡片编辑和全屏卡片编辑两种方式，从API version 18开始，支持半模态卡片编辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "半模态卡片编辑",
      children: "半模态卡片编辑"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面给出一个示例，介绍半模态卡片编辑的使用步骤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(982832)/* ["default"] */.A) + "",
        width: "1178",
        height: "529"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["长按卡片弹出菜单，此时桌面通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
          children: "formConfigAbility"
        }), "字段判断卡片是否支持卡片编辑能力来决定是否显示编辑按钮。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击“编辑”菜单项，桌面通过formConfigAbility中的字段拉起对应的页面，进入一级编辑页。一级编辑页的编辑区域有限，用于比较简单的编辑布局。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "预览区：灰色区域为预览区，用于呈现卡片编辑后的效果。预览区的布局是由桌面决定的。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["编辑区：白色区域为编辑区，为应用自定义布局区域，用来实现卡片编辑的布局。卡片编辑区的布局由应用继承", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/form-api/form-arkts/js-apis-app-form-formeditextensionability/js-apis-app-form-formeditextensionability",
              children: "FormEditExtensionAbility"
            }), "后绘制而成，可用于简单的编辑布局。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["FormEditDemo：该字段为卡片宿主应用的应用名称，通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%87%E7%AD%BE",
              children: "app.json5"
            }), "配置文件中的label字段配置。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["widget：该字段为卡片名称，通过卡片form_config.json配置文件中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
              children: "name"
            }), "字段配置。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "“完成”按钮：编辑完成之后，点击按钮可退出半模态卡片编辑页面。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在卡片编辑区，点击“切换到：上海”按钮后，卡片提供方可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formproviderupdateform",
          children: "updateForm"
        }), "接口更新卡片信息，并在预览区显示。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在卡片编辑区，点击“进入二级编辑页”按钮，此时卡片通过FormEditExtensionContext提供的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/form-api/form-arkts/form-arkts-application/js-apis-inner-application-formeditextensioncontext/js-apis-inner-application-formeditextensioncontext#startsecondpage",
          children: "startSecondPage"
        }), "方法，将卡片提供方的二级编辑页信息传递给桌面，桌面拉起对应页面，即进入二级编辑页。二级编辑页主要有用于实现复杂的编辑布局，是否需要二级编辑页请开发者根据实际需求添加。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "编辑完成之后退出编辑页。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
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
          children: ["新增EntryFormEditAbility文件，用于实现", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/form-api/form-arkts/js-apis-app-form-formeditextensionability/js-apis-app-form-formeditextensionability",
            children: "FormEditExtensionAbility"
          }), "的半模态编辑组件，并在form_config.json文件中配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
            children: "formConfigAbility"
          }), "字段。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "半模态一级编辑页Ability的实现。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/entryformeditability/EntryFormEditAbility.ets\nimport { FormEditExtensionAbility } from '@kit.FormKit';\nimport { UIExtensionContentSession, Want } from '@kit.AbilityKit';\nimport { ExtensionEvent } from '../model/ExtensionEvent';\n\nconst TAG: string = 'FormEditDemo[EntryFormEditAbility] -->';\nlet storage: LocalStorage = ExtensionEvent.getStorage();\n\nexport default class EntryFormEditAbility extends FormEditExtensionAbility {\n  onCreate() {\n    console.info(`${TAG} onCreate`);\n  }\n\n  onForeground(): void {\n    console.info(`${TAG} EntryFormEditAbility onForeground.....`);\n  }\n\n  onBackground(): void {\n    console.info(`${TAG} EntryFormEditAbility onBackground......`);\n  }\n\n  onDestroy(): void {\n    console.info(`${TAG} EntryFormEditAbility onDestroy......`);\n  }\n\n  onSessionCreate(want: Want, session: UIExtensionContentSession) {\n    // 获取被编辑卡片的卡片ID和预览卡片的卡片ID，通过storage同步到一级编辑页中\n    const formId: string | undefined = want.parameters?.cardId as string;\n    const previewFormId: string | undefined = want.parameters?.previewCardId as string;\n\n    if (formId) {\n      console.info(`${TAG} form id is ${formId}`);\n      storage.setOrCreate('formId', formId);\n    }\n    if (previewFormId) {\n      console.info(`${TAG} preview form id is ${previewFormId}`);\n      storage.setOrCreate('previewFormId', previewFormId);\n    }\n    let extensionEvent: ExtensionEvent = new ExtensionEvent();\n    extensionEvent.setStartSecondPage((): void => this.startSecondPage());\n    storage.setOrCreate('extensionEvent', extensionEvent);\n    storage.setOrCreate('context', this.context);\n    try {\n      // 拉起一级编辑页\n      session.loadContent('pages/FormEditExtension', storage);\n    } catch (e) {\n      console.error(`${TAG} EntryFormEditAbility loadContent err, Code: ${e.code}, Message: ${e.message}`);\n    }\n  }\n\n  onSessionDestroy(session: UIExtensionContentSession) {\n    console.info(`${TAG} onSessionDestroy`);\n  }\n\n  private startSecondPage() {\n    const bundleName: string = this.context.extensionAbilityInfo.bundleName;\n    const secPageAbilityName: string = 'FormEditSecPageAbility';\n    console.info(`${TAG} startSecondPage. bundleName: ${bundleName}, secPageAbilityName: ${secPageAbilityName}.`);\n    try {\n      // 拉起二级编辑页\n      this.context.startSecondPage({\n        bundleName: bundleName,\n        parameters: {\n          'secPageAbilityName': secPageAbilityName\n        }\n      });\n      console.info(`${TAG} startSecondPage success!`);\n    } catch (err) {\n      console.error(`${TAG} startSecondPage failed, Code: ${err.code}, Message: ${err.message}`);\n    }\n  }\n};\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "半模态二级编辑页Ability的实现。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/entryformeditability/FormEditSecPageAbility.ets\nimport { FormEditExtensionAbility } from '@kit.FormKit';\nimport { UIExtensionContentSession, Want } from '@kit.AbilityKit';\nimport { ExtensionEvent } from '../model/ExtensionEvent';\n\nconst TAG = 'FormEditExtensionAbility';\n\nexport default class FormEditSecPageAbility extends FormEditExtensionAbility {\n  public storage: LocalStorage = new LocalStorage();\n\n  onCreate() {\n    console.info(TAG, `Ability onCreate`);\n  }\n\n  onForeground(): void {\n    console.info(TAG, `Ability onForeground`);\n  }\n\n  onBackground(): void {\n    console.info(TAG, `Ability onBackground`);\n  }\n\n  onDestroy(): void {\n    console.info(TAG, `Ability onDestroy`);\n  }\n\n  onSessionCreate(want: Want, session: UIExtensionContentSession) {\n    let extensionEvent: ExtensionEvent = new ExtensionEvent();\n    this.storage.setOrCreate('extensionEvent', extensionEvent);\n    this.storage.setOrCreate('session', session);\n\n    try {\n      session.loadContent('pages/FormEditSecPage', this.storage);\n      console.info(TAG, `loadContent first edit page success`);\n    } catch (e) {\n      console.error(TAG, `EntryFormEditAbility loadContent err, want: ${e?.message}`);\n    }\n  }\n\n  onSessionDestroy(session: UIExtensionContentSession) {\n    console.info(TAG, `onSessionDestroy`);\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "新增EntryFormEditAbility需要在module.json5配置，配置如下。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/module.json5\n{\n    \"module\": {\n        // ...\n        \"extensionAbilities\": [\n            {\n                // 一级编辑页\n                \"name\": \"EntryFormEditAbility\",\n                \"srcEntry\": \"./ets/entryformeditability/EntryFormEditAbility.ets\",\n                \"type\": \"formEdit\"\n            },\n            {\n                // 二级编辑页\n                \"name\": \"FormEditSecPageAbility\",\n                \"srcEntry\": \"./ets/entryformeditability/FormEditSecPageAbility.ets\",\n                \"type\": \"formEdit\"\n            }\n        ]\n    }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "卡片form_config.json文件实现。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/resources/base/profile/form_config.json\n{\n    \"forms\": [\n        {\n            \"name\": \"widget\",\n            \"displayName\": \"$string:widget_display_name\",\n            \"description\": \"$string:widget_desc\",\n            \"src\": \"./ets/widget/pages/WidgetCard.ets\",\n            \"uiSyntax\": \"arkts\",\n            \"formConfigAbility\": \"ability://EntryFormEditAbility\",\n            \"isDynamic\": true,\n            \"isDefault\": true,\n            \"updateEnabled\": false,\n            \"scheduledUpdateTime\": \"10:30\",\n            \"multiScheduledUpdateTime\": \"11:30,16:30\",\n            \"updateDuration\": 1,\n            \"defaultDimension\": \"1*2\",\n            \"supportDimensions\": [\n                \"1*2\",\n                \"2*2\",\n                \"2*4\",\n                \"4*4\",\n                \"6*4\"\n            ]\n        }\n    ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["实现一级编辑页布局，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formproviderupdateform",
            children: "updateForm"
          }), "接口去刷新被编辑卡片的信息和预览卡片信息，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/form-api/form-arkts/form-arkts-application/js-apis-inner-application-formeditextensioncontext/js-apis-inner-application-formeditextensioncontext#startsecondpage",
            children: "startSecondPage"
          }), "方法去拉起二级编辑页。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "一级编辑页布局实现如下。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/pages/FormEditExtension.ets\nimport { common, UIExtensionContentSession } from '@kit.AbilityKit';\nimport { preferences } from '@kit.ArkData';\nimport { formBindingData, formProvider } from '@kit.FormKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { ExtensionEvent } from '../model/ExtensionEvent';\nimport { PreferencesUtil } from '../common/PreferencesUtil';\nimport { FormData } from '../common/CommonData';\n\nconst TAG: string = 'FormEditDemo[Extension] -->';\nlet storage: LocalStorage = ExtensionEvent.getStorage();\n\n@Entry(storage)\n@Component\nstruct FormEditExtension {\n  @State message1: string = '北京';\n  @State message2: string = '上海';\n  private formId: string = storage.get('formId') as string;\n  private previewFormId: string = storage.get('previewFormId') as string;\n  private session: UIExtensionContentSession =\n    storage.get<UIExtensionContentSession>('session') as UIExtensionContentSession;\n  private extensionEvent: ExtensionEvent = storage.get<ExtensionEvent>('extensionEvent') as ExtensionEvent;\n  // 在API version 22以前，需要通过import LiveFormExtensionContext from 'application/LiveFormExtensionContext';\n  // 导入LiveFormExtensionContext。该导入方式在DevEco Studio中标红，但不影响编译运行。\n  // 可以直接使用LiveFormExtensionContext。在API version 22及以后，支持通过import { common } from '@kit.AbilityKit';\n  // 导入LiveFormExtensionContext。并通过common.LiveFormExtensionContext的方式使用。\n  private context: common.FormEditExtensionContext | undefined =\n    storage.get<common.FormEditExtensionContext>('context');\n\n  updateForm(message: string) {\n    if (!this.formId && !this.previewFormId) {\n      return;\n    }\n    if (this.context) {\n      let util = PreferencesUtil.getInstance();\n      let preferences = util.getPreferences(this.context) as preferences.Preferences;\n      util.preferencesPut(preferences, this.formId, new FormData(this.formId, message));\n    }\n    let param: Record<string, string> = {\n      'message': message\n    }\n    let obj: formBindingData.FormBindingData = formBindingData.createFormBindingData(param);\n    try {\n      // 刷新被编辑卡片的信息\n      formProvider.updateForm(this.formId, obj, (error: BusinessError) => {\n        if (error) {\n          console.error(TAG, `callback error, code: ${error.code}, message: ${error.message})`);\n          return;\n        }\n        console.info(TAG, `formProvider updateForm success`);\n      });\n    } catch (error) {\n      console.error(TAG, `catch error, Code: ${error.code}, Message: ${error.message}`);\n    }\n    if (!this.previewFormId) {\n      console.error(TAG, 'previewFormId is empty');\n      return;\n    }\n    try {\n      // 刷新预览卡片的信息\n      formProvider.updateForm(this.previewFormId, obj, (error: BusinessError) => {\n        if (error) {\n          console.error(TAG, `callback error, code: ${error.code}, message: ${error.message})`);\n          return;\n        }\n        console.info(TAG, `formProvider updateForm success`);\n      });\n    } catch (error) {\n      console.error(TAG, `catch error, Code: ${error.code}, Message: ${error.message}`);\n    }\n  }\n\n  onPageShow() {\n    console.info(`${TAG} onPageShow. extensionEvent`);\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Button($r('app.string.button_one'))\n          .width('80%')\n          .type(ButtonType.Capsule)\n          .margin({\n            top: 20\n          })\n          .onClick(() => {\n            console.info(`${TAG} Button1 onClick ${storage.get('message')}`);\n            this.updateForm(this.message1);\n            storage.setOrCreate('message', this.message1);\n          })\n        Button($r('app.string.button_two'))\n          .width('80%')\n          .type(ButtonType.Capsule)\n          .margin({\n            top: 20\n          })\n          .onClick(() => {\n            console.info(`${TAG} Button2 onClick`);\n            this.updateForm(this.message2);\n            storage.setOrCreate('message', this.message2);\n          })\n        Button($r('app.string.button_three'))\n          .width('80%')\n          .type(ButtonType.Capsule)\n          .margin({\n            top: 20\n          })\n          .onClick(async () => {\n            console.info(`${TAG} Button onClick`);\n            // 拉起二级编辑页\n            this.extensionEvent?.startFormEditSecondPage();\n          })\n      }\n    }\n    .justifyContent(FlexAlign.Center)\n    .width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "新增FormEditSecPage.ets文件用来实现二级编辑页布局。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/pages/FormEditSecPage.ets\n@Entry\n@Component\nstruct FormEditSecPage {\n  @State message: string | ResourceStr = $r('app.string.button_three');\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('HelloWorld')\n        .fontSize($r('app.float.page_text_font_size'))\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          this.message = 'Welcome';\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "加载布局文件。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// entry/src/main/resources/base/profile/main_pages.json\n{\n    \"src\": [\n        \"pages/Index\",\n        \"pages/FormEditExtension\",\n        \"pages/FormEditSecPage\"\n    ]\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["新增ExtensionEvent文件，封装", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/form-api/form-arkts/form-arkts-application/js-apis-inner-application-formeditextensioncontext/js-apis-inner-application-formeditextensioncontext#startsecondpage",
                children: "startSecondPage"
              }), "方法到startFormEditSecondPage中，供业务使用。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/model/ExtensionEvent.ets\nconst TAG: string = 'FormEditDemo[ExtensionEvent] -->';\nconst LOCAL: Record<string, string> = { 'formId': '', 'previewFormId': '', 'message': '' };\n\nexport class ExtensionEvent {\n  private static storage = new LocalStorage(LOCAL);\n\n  public static getStorage(): LocalStorage {\n    return ExtensionEvent.storage;\n  }\n\n  public setStartSecondPage(startSecondPage: () => void) {\n    console.info(`${TAG} setStartSecondPage`);\n    this.startSecondPage = startSecondPage;\n  }\n\n  public async startFormEditSecondPage() {\n    console.info(`${TAG} startFormEditSecondPage call`);\n    this.startSecondPage();\n  }\n\n  private startSecondPage: () => void = (): void => {\n    console.info(`${TAG} startSecondPage is empty!`);\n  };\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "卡片信息持久化。每次进入卡片编辑页，预览卡片都需要与被编辑卡片保持一致，所以需要持久化卡片信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["新增PreferencesUtil文件，主要是来封装", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkdata/app-data-persistence/data-persistence-by-preferences",
              children: "Preferences"
            }), "首选项，供业务做持久化数据使用。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/common/PreferencesUtil.ets\nimport { preferences } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { FormData } from './CommonData';\n\nconst TAG: string = 'PreferencesUtil';\nconst MY_STORE: string = 'myStore';\n\nexport class PreferencesUtil {\n  private static preferencesUtil: PreferencesUtil;\n\n  public static getInstance(): PreferencesUtil {\n    if (!PreferencesUtil.preferencesUtil) {\n      PreferencesUtil.preferencesUtil = new PreferencesUtil();\n    }\n    return PreferencesUtil.preferencesUtil;\n  }\n\n  getPreferences(context: Context): preferences.Preferences | undefined {\n    try {\n      preferences.removePreferencesFromCacheSync(context, MY_STORE);\n      return preferences.getPreferencesSync(context, { name: MY_STORE });\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG, `getPreferences failed, error code=${err.code}, message=${err.message}`);\n      return undefined;\n    }\n  }\n\n  preferencesFlush(preferences: preferences.Preferences) {\n    preferences.flush((err) => {\n      if (err) {\n        console.error(TAG, `Failed to flush. Code:${err.code}, message:${err.message}`);\n      }\n    })\n  }\n\n  preferencesPut(preferences: preferences.Preferences, formID: string, value: FormData): void {\n    try {\n      preferences.putSync(formID, value);\n      this.preferencesFlush(preferences);\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG, `preferencesPut failed, error code=${err.code}, message=${err.message}`);\n    }\n  }\n\n  removePreferencesFromCache(context: Context): void {\n    preferences.removePreferencesFromCache(context, MY_STORE).catch((err: BusinessError) => {\n      console.error(TAG, `removePreferencesFromCache failed, error code=${err.code}, message=${err.message}`);\n    });\n  }\n\n  getValue(preferences: preferences.Preferences, formID: string): FormData | undefined {\n    if (preferences === null) {\n      console.error(TAG, `preferences is null`);\n      return undefined;\n    }\n    try {\n      return preferences.getSync(formID, new FormData('')) as FormData;\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG, `getSync failed, error code=${err.code}, message=${err.message}`);\n      return undefined;\n    }\n  }\n\n  removeFormId(context: Context, formId: string) {\n    try {\n      let preferences = this.getPreferences(context);\n      if (!preferences) {\n        console.error(TAG, `preferences is null`);\n        return;\n      }\n      if (preferences.hasSync(formId)) {\n        preferences.deleteSync(formId);\n        this.preferencesFlush(preferences);\n      }\n    } catch (error) {\n      console.error(TAG, `Failed to get preferences. Code:${error.code}, message:${error.message}`);\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "为确保预览卡片和被编辑卡片信息同步，新建卡片时，在onAddForm回调函数中需要判断'ohos.extra.param.key.edit_form_id'字段是否携带了卡片ID。如果携带了卡片ID，则就是预览卡片则需要从数据库获取被编辑卡片的信息。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/entryformability/WidgetCard.ets\nimport { formBindingData, FormExtensionAbility, formInfo } from '@kit.FormKit';\nimport { Want } from '@kit.AbilityKit';\nimport { PreferencesUtil } from '../common/PreferencesUtil';\nimport { FormData } from '../common/CommonData';\n\nexport default class EntryFormAbility extends FormExtensionAbility {\n  onAddForm(want: Want) {\n    let editFormId: string = '';\n    let formId: string = '';\n    // 初始化首选项数据库\n    let util = PreferencesUtil.getInstance();\n    let preferences = util.getPreferences(this.context);\n    if (want.parameters) {\n      formId = want.parameters[formInfo.FormParam.IDENTITY_KEY] as string;\n      editFormId = want.parameters['ohos.extra.param.key.edit_form_id'] as string;\n    }\n    // 如果是编辑页面的预览卡片需要在创建时把编辑的卡片信息更新到预览卡片上\n    if (editFormId && preferences) {\n      let formData: FormData = util.getValue(preferences, editFormId) as FormData;\n      return formBindingData.createFormBindingData({\n        'message': formData.text\n      });\n    }\n\n    return formBindingData.createFormBindingData('');\n  }\n\n  onCastToNormalForm(formId: string) {\n  }\n\n  onUpdateForm(formId: string) {\n  }\n\n  onFormEvent(formId: string, message: string) {\n  }\n\n  onRemoveForm(formId: string) {\n  }\n\n  onAcquireFormState(want: Want) {\n    return formInfo.FormState.READY;\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "卡片布局文件如下。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/widget/pages/WidgetCard.ets\nlet storage: LocalStorage = new LocalStorage();\n\n@Entry(storage)\n@Component\nstruct WidgetCard {\n  @LocalStorageProp('message') title: string = 'Hello World';\n  readonly actionType: string = 'router';\n  readonly abilityName: string = 'EntryAbility';\n  readonly message: string = 'add detail';\n  readonly fullWidthPercent: string = '100%';\n  readonly fullHeightPercent: string = '100%';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.title)\n          .fontSize($r('app.float.font_size'))\n          .fontWeight(FontWeight.Medium)\n          .fontColor($r('sys.color.font'))\n      }\n      .width(this.fullWidthPercent)\n    }\n    .height(this.fullHeightPercent)\n    .backgroundColor($r('sys.color.comp_background_primary'))\n    .onClick(() => {\n      postCardAction(this, {\n        action: this.actionType,\n        abilityName: this.abilityName,\n        params: {\n          message: this.message\n        }\n      });\n    })\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "新增CommonData.ets文件，用来定义卡片数据结构。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/common/CommonData.ets\nexport class FormData {\n  public formId: string = '';\n  public text: string = 'Hello World';\n\n  constructor(formId: string, text?: string) {\n    this.formId = formId;\n    this.text = text ? text : 'Hello World';\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "资源文件如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/resources/base/element/string.json\n{\n   \"string\": [\n      // ...\n      {\n         \"name\": \"button_one\",\n         \"value\": \"切换到：北京\"\n      },\n      {\n         \"name\": \"button_two\",\n         \"value\": \"切换到：上海\"\n      },\n      {\n         \"name\": \"button_three\",\n         \"value\": \"进入编辑二级页\"\n      }\n   ]\n }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行效果如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(343529)/* ["default"] */.A) + "",
            width: "338",
            height: "708"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "全屏卡片编辑",
      children: "全屏卡片编辑"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现原理-1",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(992541)/* ["default"] */.A) + "",
        width: "765",
        height: "568"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["长按卡片弹出菜单。桌面通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
          children: "formConfigAbility"
        }), "字段判断卡片是否支持卡片编辑能力来决定是否显示编辑按钮。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击“编辑”菜单项进入全屏编辑页。桌面通过formConfigAbility字段的信息拉起卡片编辑页。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击“切换到：上海”按钮编辑卡片内容。提供方通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formproviderupdateform",
          children: "updateForm"
        }), "接口去更新编辑卡片的信息。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面给出示例，实现如下功能：长按卡片弹出编辑菜单，点击“编辑”菜单项进入全屏编辑页，修改卡片内容。"
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
          children: ["开发者需要新增EntryEditAbility.ets文件，继承", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
            children: "UIAbility"
          }), "组件，实现", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
            children: "onCreate"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
            children: "onNewWant"
          }), "回调函数。卡片使用方会通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
            children: "Want"
          }), "的parameters字段把被编辑的卡片ID带进来。并且需要再form_config.json文件中配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/form-kit/arkts-ui/arkts-ui-widget-configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E",
            children: "formConfigAbility"
          }), "字段。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "实现编辑页面的Ability。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/entryability/EntryEditAbility.ets\nimport { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\nimport { PreferencesUtil } from '../common/PreferencesUtil';\nimport { preferences } from '@kit.ArkData';\n\nconst DOMAIN = 0x0000;\n\nexport default class EntryEditAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    const formId: string = want.parameters?.formId as string;\n    hilog.info(DOMAIN, 'testTag', 'onCreate form id is' + formId)\n    if (formId) {\n      // 存储被编辑的卡片ID，后续编辑卡片会用\n      let util = PreferencesUtil.getInstance();\n      let preferences = util.getPreferences(this.context) as preferences.Preferences;\n      util.preferencesPut(preferences, formId);\n    }\n    try {\n      this.context.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);\n    } catch (err) {\n      hilog.error(DOMAIN, 'testTag', 'Failed to set colorMode. Code:${err.code}, message:${err.message}');\n    }\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onCreate');\n  }\n\n  onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    // 热启动编辑页时刷新被编辑的卡片ID\n    const formId: string = want.parameters?.formId as string;\n    hilog.info(DOMAIN, 'testTag', 'onNewWant form id is' + formId)\n    if (formId) {\n      // 初始化首选项数据库\n      let util = PreferencesUtil.getInstance();\n      let preferences = util.getPreferences(this.context) as preferences.Preferences;\n      util.preferencesPut(preferences, formId);\n    }\n  }\n\n  onDestroy(): void {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onDestroy');\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // Main window is created, set main page for this ability\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n\n    windowStage.loadContent('pages/FormEditIndex', (err) => {\n      if (err.code) {\n        hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Code:${err.code}, message:${err.message}');\n        return;\n      }\n      hilog.info(DOMAIN, 'testTag', 'Succeeded in loading the content.');\n    });\n    AppStorage.setOrCreate('windowStage', this.context);\n  }\n\n  onWindowStageDestroy(): void {\n    // Main window is destroyed, release UI related resources\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');\n  }\n\n  onForeground(): void {\n    // Ability has brought to foreground\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onForeground');\n  }\n\n  onBackground(): void {\n    // Ability has back to background\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onBackground');\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "新增EntryEditAbility需要在module.json5配置，配置如下。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"abilities\": [\n  // ...\n  {\n    \"name\": \"FormEditAbility\",\n    \"srcEntry\": \"./ets/entryability/EntryEditAbility.ets\",\n    \"description\": \"$string:EntryAbility_desc\",\n    \"icon\": \"$media:layered_image\",\n    \"label\": \"$string:EntryAbility_label\",\n    \"startWindowIcon\": \"$media:startIcon\",\n    \"startWindowBackground\": \"$color:start_window_background\",\n    \"exported\": true,\n  }\n],\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "卡片form_config.json文件实现。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/resources/base/profile/form_config.json\n{\n  \"forms\": [\n    {\n      \"name\": \"widget\",\n      \"displayName\": \"$string:widget_display_name\",\n      \"description\": \"$string:widget_desc\",\n      \"src\": \"./ets/widget/pages/WidgetCard.ets\",\n      \"uiSyntax\": \"arkts\",\n      \"isDynamic\": true,\n      \"isDefault\": true,\n      \"updateEnabled\": false,\n      \"formConfigAbility\": \"ability://FormEditAbility\",\n      \"scheduledUpdateTime\": \"10:30\",\n      \"updateDuration\": 1,\n      \"defaultDimension\": \"2*2\",\n      \"supportDimensions\": [\n        \"2*2\"\n      ]\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新增FormEditIndex.ets文件实现全屏编辑页布局，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/form-api/form-arkts/js-apis-app-form-formprovider/js-apis-app-form-formprovider#formproviderupdateform",
            children: "updateForm"
          }), "接口去刷新被编辑卡片的信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/pages/FormEditIndex.ets\nimport { formBindingData, formProvider } from '@kit.FormKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { PreferencesUtil } from '../common/PreferencesUtil';\nimport { preferences } from '@kit.ArkData';\n\nconst TAG: string = 'FormEdit -->';\n\n@Entry\n@Component\nstruct FormEditIndex {\n  @State message: string = 'Hello World';\n  @State message1: string = '北京';\n  @State message2: string = '上海';\n\n  updateForm(message: string) {\n    // 通过数据库获取当前需要编辑的卡片ID\n    let util = PreferencesUtil.getInstance();\n    let preferences = util.getPreferences(this.getUIContext().getHostContext() as Context) as preferences.Preferences;\n    let formId: string = util.getValue(preferences) as string;\n    if (!formId) {\n      return;\n    }\n    console.info(TAG, `doy: formId: ${formId}, message: ${message}`)\n    let param: Record<string, string> = {\n      'message': message\n    }\n    let obj: formBindingData.FormBindingData = formBindingData.createFormBindingData(param);\n    try {\n      formProvider.updateForm(formId, obj, (error: BusinessError) => {\n        if (error) {\n          console.error(TAG, `callback error, code: ${error.code}, message: ${error.message})`);\n          return;\n        }\n        console.info(TAG, `formProvider updateForm success`);\n      });\n    } catch (error) {\n      console.error(TAG, `catch error, Code:${error.code}, message:${error.message}`);\n    }\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Button($r('app.string.button_one'))\n          .width('80%')\n          .type(ButtonType.Capsule)\n          .margin({\n            top: 20\n          })\n          .onClick(() => {\n            this.updateForm(this.message1);\n          })\n        Button($r('app.string.button_two'))\n          .width('80%')\n          .type(ButtonType.Capsule)\n          .margin({\n            top: 20\n          })\n          .onClick(() => {\n            this.updateForm(this.message2);\n          })\n      }\n    }\n    .justifyContent(FlexAlign.Center)\n    .width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "加载全屏编辑页布局文件。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/resources/base/profile/main_pages.json\n{\n  \"src\": [\n    \"pages/Index\",\n    \"pages/FormEditIndex\"\n  ]\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "卡片布局文件如下。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/widget/pages/WidgetCard.ets\n@Entry\n@Component\nstruct WidgetCard {\n  @LocalStorageProp('message') title: string = 'Hello World';\n  readonly actionType: string = 'router';\n  readonly abilityName: string = 'EntryAbility';\n  readonly message: string = 'add detail';\n  readonly fullWidthPercent: string = '100%';\n  readonly fullHeightPercent: string = '100%';\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.title)\n          .fontSize($r('app.float.font_size'))\n          .fontWeight(FontWeight.Medium)\n          .fontColor($r('sys.color.font'))\n      }\n      .width(this.fullWidthPercent)\n    }\n    .height(this.fullHeightPercent)\n    .backgroundColor($r('sys.color.comp_background_primary'))\n    .onClick(() => {\n      postCardAction(this, {\n        action: this.actionType,\n        abilityName: this.abilityName,\n        params: {\n          message: this.message\n        }\n      });\n    })\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新增PreferencesUtil文件，主要是来封装", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkdata/app-data-persistence/data-persistence-by-preferences",
            children: "Preferences"
          }), "首选项，供业务做持久化数据使用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/common/PreferencesUtil.ets\nimport { preferences } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TAG: string = 'PreferencesUtil';\nconst MY_STORE: string = 'myStore';\nconst key: string = 'formID';\n\nexport class PreferencesUtil {\n  private static preferencesUtil: PreferencesUtil;\n\n  public static getInstance(): PreferencesUtil {\n    if (!PreferencesUtil.preferencesUtil) {\n      PreferencesUtil.preferencesUtil = new PreferencesUtil();\n    }\n    return PreferencesUtil.preferencesUtil;\n  }\n\n  getPreferences(context: Context): preferences.Preferences | undefined {\n    try {\n      preferences.removePreferencesFromCacheSync(context, MY_STORE);\n      return preferences.getPreferencesSync(context, { name: MY_STORE });\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG, `getPreferences failed, error code=${err.code}, message=${err.message}`);\n      return undefined;\n    }\n  }\n\n  preferencesFlush(preferences: preferences.Preferences) {\n    preferences.flushSync();\n  }\n\n  preferencesPut(preferences: preferences.Preferences, formID: string): void {\n    try {\n      preferences.putSync(key, formID);\n      preferences.flushSync();\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG, `preferencesPut failed, error code=${err.code}, message=${err.message}`);\n    }\n  }\n\n  removePreferencesFromCache(context: Context): void {\n    preferences.removePreferencesFromCache(context, MY_STORE).catch((err: BusinessError) => {\n      console.error(TAG, `removePreferencesFromCache failed, error code=${err.code}, message=${err.message}`);\n    });\n  }\n\n  getValue(preferences: preferences.Preferences): string | undefined {\n    if (preferences === null) {\n      console.error(TAG, `preferences is null`);\n      return undefined;\n    }\n    try {\n      return preferences.getSync(key, '') as string\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(TAG, `getSync failed, error code=${err.code}, message=${err.message}`);\n      return undefined;\n    }\n  }\n\n  removeFormId(context: Context) {\n    try {\n      let preferences = this.getPreferences(context);\n      if (!preferences) {\n        console.error(TAG, `preferences is null`);\n        return;\n      }\n      if (preferences.hasSync(key)) {\n        preferences.deleteSync(key);\n        preferences.flushSync();\n        console.info(TAG, `deleteSync done.`)\n      }\n    } catch (error) {\n      console.error(TAG, `Failed to get preferences. Code:${error.code}, message:${error.message}`);\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "资源文件如下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/resources/base/element/string.json\n{\n  \"string\": [\n    // ...\n    {\n      \"name\": \"button_one\",\n      \"value\": \"切换到：北京\"\n    },\n    {\n      \"name\": \"button_two\",\n      \"value\": \"切换到：上海\"\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行效果如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(423426)/* ["default"] */.A) + "",
            width: "340",
            height: "712"
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
992541(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798650-7c167099e86a55b5b76a6cf9002a089f.png");

},
423426(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438345-2758035d89a5f1fe5ee20bb93275c91e.gif");

},
982832(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958298-6ae8baff7f13231602a05a18ab502a97.png");

},
343529(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478299-19af281c5917db1f7c342f09e600656d.gif");

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