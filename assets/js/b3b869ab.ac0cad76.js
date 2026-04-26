"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["791095"], {
589925(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_interaction_arkts_ui_widget_update_by_status_arkts_ui_widget_update_by_status_md_b3b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-widget-arkts-ui-widget-interaction-arkts-ui-widget-update-by-status-arkts-ui-widget-update-by-status-md-b3b.json
var site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_interaction_arkts_ui_widget_update_by_status_arkts_ui_widget_update_by_status_md_b3b_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-update-by-status/arkts-ui-widget-update-by-status","title":"根据卡片状态刷新不同内容","description":"相同的卡片可以添加到桌面上实现不同的功能，比如添加两张桌面的卡片，一张显示杭州的天气，一张显示北京的天气，设置每天早上7点触发定时刷新，卡片需要感知当前的配置是杭州还是北京，然后将对应城市的天气信息刷新到卡片上，以下示例介绍了如何根据卡片的状态动态选择需要刷新的内容。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-update-by-status/arkts-ui-widget-update-by-status.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-update-by-status","slug":"/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-update-by-status/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-update-by-status/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"根据卡片状态刷新不同内容","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-update-by-status","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"刷新本地图片和网络图片","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-image-update/"},"next":{"title":"ArkTS卡片页面交互概述","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-interaction/arkts-ui-widget-update-by-status/arkts-ui-widget-update-by-status.md


const frontMatter = {
	title: '根据卡片状态刷新不同内容',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-update-by-status',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '根据卡片状态刷新不同内容';

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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "根据卡片状态刷新不同内容",
        children: "根据卡片状态刷新不同内容"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相同的卡片可以添加到桌面上实现不同的功能，比如添加两张桌面的卡片，一张显示杭州的天气，一张显示北京的天气，设置每天早上7点触发定时刷新，卡片需要感知当前的配置是杭州还是北京，然后将对应城市的天气信息刷新到卡片上，以下示例介绍了如何根据卡片的状态动态选择需要刷新的内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "卡片配置文件：配置每隔30分钟自动刷新。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"forms\": [\n    {\n      \"name\": \"WidgetUpdateByStatus\",\n      \"description\": \"$string:UpdateByStatusFormAbility_desc\",\n      \"src\": \"./ets/widgetupdatebystatus/pages/WidgetUpdateByStatusCard.ets\",\n      \"uiSyntax\": \"arkts\",\n      \"window\": {\n        \"designWidth\": 720,\n        \"autoDesignWidth\": true\n      },\n      \"isDefault\": true,\n      \"updateEnabled\": true,\n      \"scheduledUpdateTime\": \"10:30\",\n      \"updateDuration\": 1,\n      \"defaultDimension\": \"2*2\",\n      \"supportDimensions\": [\n        \"2*2\"\n      ]\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "卡片页面：卡片具备不同的状态选择，在不同的状态下需要刷新不同的内容，因此在状态发生变化时通过postCardAction通知EntryFormAbility。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/widgetupdatebystatus/pages/WidgetUpdateByStatusCard.ets\nlet storageUpdateByStatus = new LocalStorage();\n\n@Entry(storageUpdateByStatus)\n@Component\nstruct WidgetUpdateByStatusCard {\n  // $r('app.string.to_be_refreshed')需要替换为开发者所需的资源文件\n  @LocalStorageProp('textA') textA: Resource = $r('app.string.to_be_refreshed');\n  @LocalStorageProp('textB') textB: Resource = $r('app.string.to_be_refreshed');\n  @State selectA: boolean = false;\n  @State selectB: boolean = false;\n\n  build() {\n    Column() {\n      Column() {\n        Row() {\n          Checkbox({ name: 'checkbox1', group: 'checkboxGroup' })\n            .padding(0)\n            .select(false)\n            .margin({ left: 26 })\n            .onChange((value: boolean) => {\n              this.selectA = value;\n              postCardAction(this, {\n                action: 'message',\n                params: {\n                  selectA: JSON.stringify(value)\n                }\n              });\n            })\n          // $r('app.string.status_a')需要替换为开发者所需的资源文件\n          Text($r('app.string.status_a'))\n            .fontColor('#000000')\n            .opacity(0.9)\n            .fontSize(14)\n            .margin({ left: 8 })\n        }\n        .width('100%')\n        .padding(0)\n        .justifyContent(FlexAlign.Start)\n\n        Row() {\n          Checkbox({ name: 'checkbox2', group: 'checkboxGroup' })\n            .padding(0)\n            .select(false)\n            .margin({ left: 26 })\n            .onChange((value: boolean) => {\n              this.selectB = value;\n              postCardAction(this, {\n                action: 'message',\n                params: {\n                  selectB: JSON.stringify(value)\n                }\n              });\n            })\n          // $r('app.string.status_b')需要替换为开发者所需的资源文件\n          Text($r('app.string.status_b'))\n            .fontColor('#000000')\n            .opacity(0.9)\n            .fontSize(14)\n            .margin({ left: 8 })\n        }\n        .width('100%')\n        .position({ y: 32 })\n        .padding(0)\n        .justifyContent(FlexAlign.Start)\n      }\n      .position({ y: 12 })\n\n      Column() {\n        Row() {\n          // 选中状态A才会进行刷新的内容\n          Text($r('app.string.status_a'))\n            .fontColor('#000000')\n            .opacity(0.4)\n            .fontSize(12)\n\n          Text(this.textA)\n            .fontColor('#000000')\n            .opacity(0.4)\n            .fontSize(12)\n        }\n        .margin({ top: '12px', left: 26, right: '26px' })\n\n        Row() {\n          // 选中状态B才会进行刷新的内容\n          Text($r('app.string.status_b'))\n            .fontColor('#000000')\n            .opacity(0.4)\n            .fontSize(12)\n          Text(this.textB)\n            .fontColor('#000000')\n            .opacity(0.4)\n            .fontSize(12)\n        }\n        .margin({\n          top: '12px',\n          bottom: '21px',\n          left: 26,\n          right: '26px'\n        })\n      }\n      .margin({ top: 80 })\n      .width('100%')\n      .alignItems(HorizontalAlign.Start)\n    }.width('100%').height('100%')\n    // $r('app.media.CardUpdateByStatus')需要替换为开发者所需的资源文件\n    .backgroundImage($r('app.media.CardUpdateByStatus'))\n    .backgroundImageSize(ImageSize.Cover)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "EntryFormAbility：将卡片的状态存储在本地数据库中，在刷新事件回调触发时，通过formId获取当前卡片的状态，然后根据卡片的状态选择不同的刷新内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// entry/src/main/ets/updatebystatusformability/UpdateByStatusFormAbility.ts\nimport { Want } from '@kit.AbilityKit';\nimport { preferences } from '@kit.ArkData';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { formBindingData, FormExtensionAbility, formInfo, formProvider } from '@kit.FormKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'UpdateByStatusFormAbility';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\nexport default class UpdateByStatusFormAbility extends FormExtensionAbility {\n  onAddForm(want: Want): formBindingData.FormBindingData {\n    let formId: string = '';\n    if (want.parameters) {\n      formId = want.parameters[formInfo.FormParam.IDENTITY_KEY].toString();\n      let promise: Promise<preferences.Preferences> = preferences.getPreferences(this.context, 'myStore');\n      promise.then(async (storeDB: preferences.Preferences) => {\n        hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded to get preferences.');\n        await storeDB.put('A' + formId, 'false');\n        await storeDB.put('B' + formId, 'false');\n        await storeDB.flush();\n      }).catch((err: BusinessError) => {\n        hilog.info(DOMAIN_NUMBER, TAG, `Failed to get preferences. ${JSON.stringify(err)}`);\n      });\n    }\n    let formData: Record<string, Object | string> = {};\n    return formBindingData.createFormBindingData(formData);\n  }\n\n  onRemoveForm(formId: string): void {\n    hilog.info(DOMAIN_NUMBER, TAG, 'onRemoveForm, formId:' + formId);\n    let promise = preferences.getPreferences(this.context, 'myStore');\n    promise.then(async (storeDB) => {\n      hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded to get preferences.');\n      await storeDB.delete('A' + formId);\n      await storeDB.delete('B' + formId);\n    }).catch((err: BusinessError) => {\n      hilog.info(DOMAIN_NUMBER, TAG, `Failed to get preferences. ${JSON.stringify(err)}`);\n    });\n  }\n\n  // 当前卡片使用方不会涉及该场景，无需实现该回调函数\n  onCastToNormalForm(formId: string): void {\n  }\n\n  onUpdateForm(formId: string): void {\n    let promise: Promise<preferences.Preferences> = preferences.getPreferences(this.context, 'myStore');\n    promise.then(async (storeDB: preferences.Preferences) => {\n      hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded to get preferences from onUpdateForm.');\n      let stateA = await storeDB.get('A' + formId, 'false');\n      let stateB = await storeDB.get('B' + formId, 'false');\n      // A状态选中则更新textA\n      if (stateA === 'true') {\n        let param: Record<string, string> = {\n          'textA': 'AAA'\n        };\n        let formInfo: formBindingData.FormBindingData = formBindingData.createFormBindingData(param);\n        await formProvider.updateForm(formId, formInfo);\n      }\n      // B状态选中则更新textB\n      if (stateB === 'true') {\n        let param: Record<string, string> = {\n          'textB': 'BBB'\n        };\n        let formInfo: formBindingData.FormBindingData = formBindingData.createFormBindingData(param);\n        await formProvider.updateForm(formId, formInfo);\n      }\n      hilog.info(DOMAIN_NUMBER, TAG, `Update form success stateA:${stateA} stateB:${stateB}.`);\n    }).catch((err: BusinessError) => {\n      hilog.info(DOMAIN_NUMBER, TAG, `Failed to get preferences. ${JSON.stringify(err)}`);\n    });\n  }\n\n  onFormEvent(formId: string, message: string): void {\n    // 存放卡片状态\n    hilog.info(DOMAIN_NUMBER, TAG, 'onFormEvent formId:' + formId + 'msg:' + message);\n    let promise: Promise<preferences.Preferences> = preferences.getPreferences(this.context, 'myStore');\n    promise.then(async (storeDB: preferences.Preferences) => {\n      hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded to get preferences.');\n      let msg: Record<string, string> = JSON.parse(message);\n      if (msg.selectA !== undefined) {\n        hilog.info(DOMAIN_NUMBER, TAG, 'onFormEvent selectA info:' + msg.selectA);\n        await storeDB.put('A' + formId, msg.selectA);\n      }\n      if (msg.selectB !== undefined) {\n        hilog.info(DOMAIN_NUMBER, TAG, 'onFormEvent selectB info:' + msg.selectB);\n        await storeDB.put('B' + formId, msg.selectB);\n      }\n      await storeDB.flush();\n    }).catch((err: BusinessError) => {\n      hilog.info(DOMAIN_NUMBER, TAG, `Failed to get preferences. ${JSON.stringify(err)}`);\n    });\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(916955)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过本地数据库进行卡片信息的持久化时，建议先在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability#formextensionabilityonaddform",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "onAddForm"
          })
        })
      }), "生命周期进行卡片信息持久化；同时需要在卡片销毁(", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/form-api/form-arkts/js-apis-app-form-formextensionability/js-apis-app-form-formextensionability#formextensionabilityonremoveform",
            children: "onRemoveForm"
          })
        })
      }), ")时删除当前卡片存储的持久化信息，避免反复添加删除卡片导致数据库文件持续变大。"]
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
916955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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