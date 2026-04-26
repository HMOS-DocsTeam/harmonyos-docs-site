"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["602076"], {
381589(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_event_arkts_ui_widget_event_call_arkts_ui_widget_event_call_md_3a6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-arkts-ui-arkts-ui-widget-arkts-ui-widget-event-arkts-ui-widget-event-call-arkts-ui-widget-event-call-md-3a6.json
var site_docs_form_kit_arkts_ui_arkts_ui_widget_arkts_ui_widget_event_arkts_ui_widget_event_call_arkts_ui_widget_event_call_md_3a6_namespaceObject = JSON.parse('{"id":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-call/arkts-ui-widget-event-call","title":"卡片拉起应用UIAbility到后台（call事件）","description":"许多应用希望借助卡片的能力，实现和应用在前台时相同的功能。例如音乐卡片，卡片上提供播放、暂停等按钮，点击不同按钮将触发音乐应用的不同功能，进而提高用户的体验。在卡片中使用postCardAction接口的call能力，能够将卡片提供方应用的指定的UIAbility拉到后台。同时，call能力提供了调用应用指定方法、传递数据的功能，使应用在后台运行时可以通过卡片上的按钮执行不同的功能。","source":"@site/docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-call/arkts-ui-widget-event-call.md","sourceDirName":"form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-call","slug":"/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-call/","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-call/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"卡片拉起应用UIAbility到后台（call事件）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-event-call","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"卡片跳转到应用页面（router事件）","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-router/"},"next":{"title":"卡片传递消息给应用（message事件）","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-formextensionability/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/arkts-ui/arkts-ui-widget/arkts-ui-widget-event/arkts-ui-widget-event-call/arkts-ui-widget-event-call.md


const frontMatter = {
	title: '卡片拉起应用UIAbility到后台（call事件）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-event-call',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '卡片拉起应用UIAbility到后台（call事件）';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "卡片拉起应用uiability到后台call事件",
        children: "卡片拉起应用UIAbility到后台（call事件）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["许多应用希望借助卡片的能力，实现和应用在前台时相同的功能。例如音乐卡片，卡片上提供播放、暂停等按钮，点击不同按钮将触发音乐应用的不同功能，进而提高用户的体验。在卡片中使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-postcardaction/js-apis-postcardaction#postcardaction-1",
        children: "postCardAction"
      }), "接口的call能力，能够将卡片提供方应用的指定的UIAbility拉到后台。同时，call能力提供了调用应用指定方法、传递数据的功能，使应用在后台运行时可以通过卡片上的按钮执行不同的功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(756856)/* ["default"] */.A) + "",
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
          children: "创建动态卡片"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建一个名为WidgetEventCall的ArkTs动态卡片。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "页面布局代码实现"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在卡片页面中布局两个按钮，点击按钮A或按钮B，会调用postCardAction向指定UIAbility发送call事件，在call事件内定义了需要调用的方法。按钮A和按钮B分别对应调用funA、funB方法，其中funA携带了formID参数，funB携带了formID和num参数，开发过程中请根据实际需要传参。postCardAction中的method参数为必填参数，用于标识需要调用的方法名称，与步骤3中UIAbility监听的方法一致，其他参数为非必填。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//src/main/ets/widgeteventcall/pages/WidgetEventCallCard.ets\nlet storageEventCall = new LocalStorage();\n\n@Entry(storageEventCall)\n@Component\nstruct WidgetEventCallCard {\n  @LocalStorageProp('formId') formId: string = '12400633174999288';\n  // $r('app.string.ButtonA_label')和$r('app.string.ButtonB_label')需要替换为开发者所需的资源文件\n  private funA: Resource = $r('app.string.ButtonA_label');\n  private funB: Resource = $r('app.string.ButtonB_label');\n\n  build() {\n    RelativeContainer() {\n      Button(this.funA)\n        .id('funA__')\n        .fontSize(14)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          postCardAction(this, {\n            action: 'call',\n            // 只能跳转到当前应用下的UIAbility，与module.json5中定义保持一致\n            abilityName: 'WidgetEventCallEntryAbility',\n            params: {\n              formId: this.formId,\n              // 需要调用的方法名称\n              method: 'funA'\n            }\n          });\n        })\n\n      Button(this.funB)\n        .id('funB__')\n        .fontSize(14)\n        .fontWeight(FontWeight.Bold)\n        .margin({ top: 10 })\n        .alignRules({\n          top: { anchor: 'funA__', align: VerticalAlign.Bottom },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          postCardAction(this, {\n            action: 'call',\n            abilityName: 'WidgetEventCallEntryAbility',\n            params: {\n              formId: this.formId,\n              // 需要调用的方法名称\n              method: 'funB',\n              num: 1\n            }\n          });\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建指定的UIAbility"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在UIAbility中监听call事件，根据监听到的method参数中的方法名称调用对应方法，并通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc#parcelable9",
            children: "rpc.Parcelable"
          }), "获取参数。UIAbility中监听的方法与步骤2中调用的方法需保持一致。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//src/main/ets/WidgetEventCallEntryAbility/WidgetEventCallEntryAbility.ets\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { rpc } from '@kit.IPCKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = 'WidgetEventCallEntryAbility';\nconst DOMAIN_NUMBER: number = 0xFF00;\nconst CONST_NUMBER_1: number = 1;\nconst CONST_NUMBER_2: number = 2;\n\n// ipc通信返回类型的实现，用于数据序列化和反序列化\nclass MyParcelable implements rpc.Parcelable {\n  private num: number;\n  private str: string;\n\n  constructor(num: number, str: string) {\n    this.num = num;\n    this.str = str;\n  }\n\n  marshalling(messageSequence: rpc.MessageSequence): boolean {\n    messageSequence.writeInt(this.num);\n    messageSequence.writeString(this.str);\n    return true;\n  }\n\n  unmarshalling(messageSequence: rpc.MessageSequence): boolean {\n    this.num = messageSequence.readInt();\n    this.str = messageSequence.readString();\n    return true;\n  }\n}\n\nexport default class WidgetEventCallEntryAbility extends UIAbility {\n  // 如果UIAbility启动，在收到call事件后会触发onCreate生命周期回调\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    try {\n      // 监听call事件所需的方法并调用\n      this.callee.on('funA', (data: rpc.MessageSequence) => {\n        // 获取call事件中传递的所有参数\n        hilog.info(DOMAIN_NUMBER, TAG, `FunACall param:  ${JSON.stringify(data.readString())}`);\n        return new MyParcelable(CONST_NUMBER_1, 'aaa');\n      });\n      this.callee.on('funB', (data: rpc.MessageSequence) => {\n        // 获取call事件中传递的所有参数\n        hilog.info(DOMAIN_NUMBER, TAG, `FunBCall param:  ${JSON.stringify(data.readString())}`);\n        return new MyParcelable(CONST_NUMBER_2, 'bbb');\n      });\n    } catch (err) {\n      hilog.error(DOMAIN_NUMBER, TAG, `Failed to register callee on. Cause: ${JSON.stringify(err as BusinessError)}`);\n    }\n  }\n\n  // 进程退出时，解除监听\n  onDestroy(): void | Promise<void> {\n    try {\n      this.callee.off('funA');\n      this.callee.off('funB');\n    } catch (err) {\n      hilog.error(DOMAIN_NUMBER, TAG, `Failed to register callee off. Cause: ${JSON.stringify(err as BusinessError)}`);\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置后台运行权限"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["call事件存在约束限制，卡片提供方应用需要在module.json5下添加后台运行权限(", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all#ohospermissionkeep_background_running",
            children: "ohos.permission.KEEP_BACKGROUND_RUNNING"
          }), ")。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//src/main/module.json5\n\"requestPermissions\": [\n  {\n    \"name\": \"ohos.permission.KEEP_BACKGROUND_RUNNING\",\n  },\n// ···\n  // [EndExclude jscard_extension_ability]\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置指定的UIAbility"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在module.json5的abilities数组内添加WidgetEventCallEntryAbility对应的配置信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//src/main/module.json5\n\"abilities\": [\n// ···\n  {\n    \"name\": \"WidgetEventCallEntryAbility\",\n    \"srcEntry\": \"./ets/widgeteventcallentryability/WidgetEventCallEntryAbility.ets\",\n    \"description\": \"$string:WidgetEventCallEntryAbility_desc\",\n    \"icon\": \"$media:icon\",\n    \"label\": \"$string:WidgetEventCallEntryAbility_label\",\n    \"startWindowIcon\": \"$media:icon\",\n    \"startWindowBackground\": \"$color:start_window_background\"\n  }\n],\n"
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
756856(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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