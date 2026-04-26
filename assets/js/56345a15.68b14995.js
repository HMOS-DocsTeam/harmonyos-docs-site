"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["25048"], {
50492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_fa_model_development_fa_model_application_components_pageability_start_page_start_page_md_563_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-fa-model-development-fa-model-application-components-pageability-start-page-start-page-md-563.json
var site_docs_ability_kit_fa_model_development_fa_model_application_components_pageability_start_page_start_page_md_563_namespaceObject = JSON.parse('{"id":"ability-kit/fa-model-development/fa-model-application-components/pageability/start-page/start-page","title":"启动指定页面","description":"当PageAbility的启动模式设置为单例时（具体设置方法和典型场景示例见PageAbility的启动模式，缺省情况下是单实例模式），若PageAbility已被拉起，再次启动PageAbility会触发onNewWant回调（即非首次拉起）。开发者可以通过Want传递启动参数，例如开发者希望指定页面启动PageAbility，可以通过Want中的parameters参数传递pages信息，具体示例代码如下：","source":"@site/docs/ability-kit/fa-model-development/fa-model-application-components/pageability/start-page/start-page.md","sourceDirName":"ability-kit/fa-model-development/fa-model-application-components/pageability/start-page","slug":"/ability-kit/fa-model-development/fa-model-application-components/pageability/start-page/","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/start-page/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"启动指定页面","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-page","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"停止PageAbility","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/stop-pageability/"},"next":{"title":"窗口属性","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/window-properties/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/fa-model-development/fa-model-application-components/pageability/start-page/start-page.md


const frontMatter = {
	title: '启动指定页面',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-page',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '启动指定页面';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "启动指定页面",
        children: "启动指定页面"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当PageAbility的启动模式设置为单例时（具体设置方法和典型场景示例见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-launch-type",
        children: "PageAbility的启动模式"
      }), "，缺省情况下是单实例模式），若PageAbility已被拉起，再次启动PageAbility会触发onNewWant回调（即非首次拉起）。开发者可以通过Want传递启动参数，例如开发者希望指定页面启动PageAbility，可以通过Want中的parameters参数传递pages信息，具体示例代码如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用方PageAbility的app.ets中或者page中，使用startAbility再次拉起PageAbility，通过Want中的uri参数传递页面信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import featureAbility from '@ohos.ability.featureAbility';\nimport Want from '@ohos.app.ability.Want';\nimport hilog from '@ohos.hilog';\n\nconst TAG: string = 'PagePageAbilityFirst';\nconst domain: number = 0xFF00;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "(async (): Promise<void> => {\n  let wantInfo: Want = {\n    bundleName: 'com.samples.famodelabilitydevelop',\n    abilityName: 'com.samples.famodelabilitydevelop.PageAbilitySingleton',\n    parameters: { page: 'pages/second' }\n  };\n  featureAbility.startAbility({ want: wantInfo }).then((data) => {\n    hilog.debug(domain, TAG, `restartAbility success : ${data}`);\n  });\n})()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在目标端PageAbility的onNewWant回调中获取包含页面信息的want参数："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// GlobalContext.ts 构造单例对象\nexport class GlobalContext {\n  private constructor() {\n  }\n\n  private static instance: GlobalContext;\n  private _objects = new Map<string, Object>();\n\n  public static getContext(): GlobalContext {\n    if (!GlobalContext.instance) {\n      GlobalContext.instance = new GlobalContext();\n    }\n    return GlobalContext.instance;\n  }\n\n  getObject(value: string): Object | undefined {\n    return this._objects.get(value);\n  }\n\n  setObject(key: string, objectClass: Object): void {\n    this._objects.set(key, objectClass);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import Want from '@ohos.app.ability.Want';\nimport featureAbility from '@ohos.ability.featureAbility';\nimport { GlobalContext } from '../utils/GlobalContext';\n\nclass PageAbilitySingleton {\n  onNewWant(want: Want) {\n    featureAbility.getWant().then((want) => {\n      GlobalContext.getContext().setObject('newWant', want);\n    })\n  }\n}\n\nexport default new PageAbilitySingleton();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在目标端页面的自定义组件中获取包含页面信息的want参数并根据uri做路由处理："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import Want from '@ohos.app.ability.Want';\nimport router from '@ohos.router';\nimport { GlobalContext } from '../../utils/GlobalContext';\n\n@Entry\n@Component\nstruct First {\n  onPageShow() {\n    let newWant = GlobalContext.getContext().getObject('newWant') as Want;\n    if (newWant) {\n      if (newWant.parameters) {\n        if (newWant.parameters.page) {\n          router.pushUrl({ url: newWant.parameters.page as string});\n          GlobalContext.getContext().setObject(\"newWant\", undefined)\n        }\n      }\n    }\n  }\n\n  build() {\n    Column() {\n      Row() {\n        Text('singleton_first_title')\n          .fontSize(24)\n          .fontWeight(FontWeight.Bold)\n          .textAlign(TextAlign.Start)\n          .margin({ top: 12, bottom: 11, right: 24, left: 24 })\n      }\n      .width('100%')\n      .height(56)\n      .justifyContent(FlexAlign.Start)\n\n      Image('pic_empty')\n        .width(120)\n        .height(120)\n        .margin({ top: 224 })\n\n      Text('no_content')\n        .fontSize(14)\n        .margin({ top: 8, bottom: 317, right: 152, left: 152 })\n        .fontColor('text_color')\n        .opacity(0.4)\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor('backGrounding')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当PageAbility的启动模式设置为多实例模式或为首次启动单例模式的PageAbility时（具体设置方法和典型场景示例见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-launch-type",
        children: "PageAbility的启动模式"
      }), "），在调用方PageAbility中，通过Want中的parameters参数传递要启动的指定页面的pages信息，调用startAbility()方法启动PageAbility。被调用方可以在onCreate中使用featureAbility的getWant方法获取Want，再通过调用router.pushUrl实现启动指定页面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用方的页面中实现按钮点击触发startAbility方法启动目标端PageAbility，startAbility方法的入参Want中携带指定页面信息，示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import featureAbility from '@ohos.ability.featureAbility';\nimport Want from '@ohos.app.ability.Want';\nimport { BusinessError } from '@ohos.base';\nimport fs from '@ohos.file.fs';\nimport promptAction from '@ohos.promptAction';\nimport worker from '@ohos.worker';\nimport hilog from '@ohos.hilog';\n\nconst TAG: string = 'PagePageAbilityFirst';\nconst domain: number = 0xFF00;\n\n@Entry\n@Component\nstruct PagePageAbilityFirst {\n  build() {\n    Column() {\n      // ...\n      List({ initialIndex: 0 }) {\n        // ...\n        ListItem() {\n          Flex({ justifyContent: FlexAlign.SpaceBetween, alignContent: FlexAlign.Center }) {\n          // ...\n          }\n          .onClick(() => {\n            let want: Want = {\n              bundleName: 'com.samples.famodelabilitydevelop',\n              abilityName: 'com.samples.famodelabilitydevelop.PageAbilityStandard',\n              parameters: { page: 'pages/first' }\n            };\n            featureAbility.startAbility({ want: want }).then((data) => {\n              hilog.info(domain, TAG, `startAbility finish:${data}`);\n            }).catch((err: BusinessError) => {\n              hilog.info(domain, TAG, `startAbility failed errcode:${err.code}`);\n            })\n          })\n        }\n        // ...\n        ListItem() {\n          Flex({ justifyContent: FlexAlign.SpaceBetween, alignContent: FlexAlign.Center }) {\n          // ...\n          }\n          .onClick(() => {\n            let want: Want = {\n              bundleName: 'com.samples.famodelabilitydevelop',\n              abilityName: 'com.samples.famodelabilitydevelop.PageAbilityStandard',\n              parameters: { page: 'pages/second' }\n            };\n            featureAbility.startAbility({ want: want }).then((data) => {\n              hilog.info(domain, TAG, `startAbility finish:${data}`);\n            }).catch((err: BusinessError) => {\n              hilog.info(domain, TAG, `startAbility failed errcode:${err.code}`);\n            })\n          })\n        }\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目标端PageAbility的onCreate生命周期回调中通过featureAbility的getWant方法获取Want，并对参数进行解析，实现指定页面拉起："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import featureAbility from '@ohos.ability.featureAbility';\nimport router from '@ohos.router';\n\nclass PageAbilityStandard {\n  onCreate() {\n    featureAbility.getWant().then((want) => {\n      if (want.parameters) {\n        if (want.parameters.page) {\n          router.pushUrl({ url: want.parameters.page as string });\n        }\n      }\n    })\n  }\n}\n\nexport default new PageAbilityStandard();\n"
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