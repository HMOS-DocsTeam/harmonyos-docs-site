"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["792030"], {
486565(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_stage_model_application_components_uiability_uiability_data_sync_with_ui_uiability_data_sync_with_ui_md_638_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-stage-model-application-components-uiability-uiability-data-sync-with-ui-uiability-data-sync-with-ui-md-638.json
var site_docs_ability_kit_stage_model_development_stage_model_application_components_uiability_uiability_data_sync_with_ui_uiability_data_sync_with_ui_md_638_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-data-sync-with-ui/uiability-data-sync-with-ui","title":"UIAbility组件与UI的数据同步","description":"基于当前的应用模型，可以通过以下几种方式来实现UIAbility组件与UI之间的数据同步。","source":"@site/docs/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-data-sync-with-ui/uiability-data-sync-with-ui.md","sourceDirName":"ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-data-sync-with-ui","slug":"/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-data-sync-with-ui/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-data-sync-with-ui/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"UIAbility组件与UI的数据同步","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-data-sync-with-ui","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"UIAbility组件基本用法","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage/"},"next":{"title":"启动应用内的UIAbility组件","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-intra-device-interaction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-data-sync-with-ui/uiability-data-sync-with-ui.md


const frontMatter = {
	title: 'UIAbility组件与UI的数据同步',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-data-sync-with-ui',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'UIAbility组件与UI的数据同步';

const assets = {

};



const toc = [{
  "value": "使用EventHub进行数据通信",
  "id": "使用eventhub进行数据通信",
  "level": 2
}, {
  "value": "使用AppStorage/LocalStorage进行数据同步",
  "id": "使用appstoragelocalstorage进行数据同步",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "uiability组件与ui的数据同步",
        children: "UIAbility组件与UI的数据同步"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基于当前的应用模型，可以通过以下几种方式来实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "组件与UI之间的数据同步。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E4%BD%BF%E7%94%A8eventhub%E8%BF%9B%E8%A1%8C%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1",
          children: "使用EventHub进行数据通信"
        }), "：在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
          children: "基类Context"
        }), "中提供了", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-eventhub/js-apis-inner-application-eventhub",
          children: "EventHub"
        }), "对象，可以通过发布订阅方式来实现事件的传递。在事件传递前，订阅者需要先进行订阅，当发布者发布事件时，订阅者将接收到事件并进行相应处理。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#%E4%BD%BF%E7%94%A8appstoragelocalstorage%E8%BF%9B%E8%A1%8C%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5",
          children: "使用AppStorage/LocalStorage进行数据同步"
        }), "：ArkUI提供了", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
          children: "AppStorage"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
          children: "LocalStorage"
        }), "两种应用级别的状态管理方案，可用于实现应用级别和UIAbility级别的数据同步。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用eventhub进行数据通信",
      children: "使用EventHub进行数据通信"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-eventhub/js-apis-inner-application-eventhub",
        children: "EventHub"
      }), "为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "组件提供了事件机制，使它们能够进行订阅、取消订阅和触发事件等数据通信能力。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
        children: "基类Context"
      }), "中，提供了EventHub对象，可用于在UIAbility组件实例内通信。使用EventHub实现UIAbility与UI之间的数据通信需要先获取EventHub对象，本章节将以此为例进行说明。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在UIAbility中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-eventhub/js-apis-inner-application-eventhub#eventhubon",
            children: "eventHub.on()"
          }), "方法注册一个自定义事件“event1”，eventHub.on()有如下两种调用方式，使用其中一种即可。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n// ···\n\nconst DOMAIN = 0x0000;\nconst TAG: string = '[EventAbility]';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    // 获取eventHub\n    let eventhub = this.context.eventHub;\n    // 执行订阅操作\n    eventhub.on('event1', this.eventFunc);\n    eventhub.on('event1', (data: string) => {\n      // 触发事件，完成相应的业务操作\n    });\n    hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onCreate');\n  }\n\n  eventFunc(argOne: object, argTwo: object): void {\n    hilog.info(DOMAIN, TAG, '1. ' + `${argOne}, ${argTwo}`);\n    return;\n  }\n\n// ···\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在UI中通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-eventhub/js-apis-inner-application-eventhub#eventhubemit",
            children: "eventHub.emit()"
          }), "方法触发该事件，在触发事件的同时，根据需要传入参数信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct EventHubPage {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  eventHubFunc(): void {\n    // 不带参数触发自定义“event1”事件\n    this.context.eventHub.emit('event1');\n    // 带1个参数触发自定义“event1”事件\n    this.context.eventHub.emit('event1', 1);\n    // 带2个参数触发自定义“event1”事件\n    this.context.eventHub.emit('event1', 2, 'test');\n    // 开发者可以根据实际的业务场景设计事件传递的参数\n  }\n\n  build() {\n    Column() {\n      List({ initialIndex: 0 }) {\n        ListItem() {\n          Row() {\n            // ···\n          }\n          .onClick(() => {\n            this.eventHubFunc();\n            this.getUIContext().getPromptAction().showToast({\n              message: 'EventHubFuncA'\n            });\n          })\n        // ···\n        }\n\n        ListItem() {\n          Row() {\n            // ···\n          }\n          .onClick(() => {\n            this.context.eventHub.off('event1');\n            this.getUIContext().getPromptAction().showToast({\n              message: 'EventHubFuncB'\n            });\n          })\n        // ···\n        }\n      }\n    // ···\n    }\n    // ···\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在UIAbility的注册事件回调中可以得到对应的触发事件结果，运行日志结果如下所示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "[Example].[Entry].[EntryAbility] 1. []\n[Example].[Entry].[EntryAbility] 1. [1]\n[Example].[Entry].[EntryAbility] 1. [2,\"test\"]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在自定义事件“event1”使用完成后，可以根据需要调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-eventhub/js-apis-inner-application-eventhub#eventhuboff",
            children: "eventHub.off()"
          }), "方法取消该事件的订阅。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ···\nimport { UIAbility } from '@kit.AbilityKit';\n// ···\n\nexport default class EntryAbility extends UIAbility {\n// ···\n\n  onDestroy(): void {\n    this.context.eventHub.off('event1');\n  }\n\n// ···\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用appstoragelocalstorage进行数据同步",
      children: "使用AppStorage/LocalStorage进行数据同步"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
        children: "AppStorage"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
        children: "LocalStorage"
      }), "两种应用级别的状态管理方案，可用于实现应用级别和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "级别的数据同步。使用这些方案可以方便地管理应用状态，提高应用性能和用户体验。其中，AppStorage是一个全局的状态管理器，适用于多个UIAbility共享同一状态数据的情况；而LocalStorage则是一个局部的状态管理器，适用于单个UIAbility内部使用的状态数据。通过这两种方案，开发者可以更加灵活地控制应用状态，提高应用的可维护性和可扩展性。详细请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-application-state-management-overview",
        children: "应用级变量的状态管理"
      }), "。"]
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