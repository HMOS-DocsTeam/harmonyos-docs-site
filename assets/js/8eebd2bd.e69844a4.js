"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["403888"], {
46800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_intents_kit_guide_intents_skill_all_rec_intents_skill_all_rec_access_programme_intents_skill_all_rec_configuration_intents_skill_all_rec_configuration_md_8ee_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intents-kit-guide-intents-skill-all-rec-intents-skill-all-rec-access-programme-intents-skill-all-rec-configuration-intents-skill-all-rec-configuration-md-8ee.json
var site_docs_intents_kit_guide_intents_skill_all_rec_intents_skill_all_rec_access_programme_intents_skill_all_rec_configuration_intents_skill_all_rec_configuration_md_8ee_namespaceObject = JSON.parse('{"id":"intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-configuration/intents-skill-all-rec-configuration","title":"任务执行类场景方案（配置文件接入方式）","description":"方案概述","source":"@site/docs/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-configuration/intents-skill-all-rec-configuration.md","sourceDirName":"intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-configuration","slug":"/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-configuration/","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-configuration/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"任务执行类场景方案（配置文件接入方式）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-skill-all-rec-configuration","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"概述","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-access-introduction/"},"next":{"title":"方案概述","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-decorator/intents-skill-all-rec-decorator-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/intents-kit-guide/intents-skill-all-rec/intents-skill-all-rec-access-programme/intents-skill-all-rec-configuration/intents-skill-all-rec-configuration.md


const frontMatter = {
	title: '任务执行类场景方案（配置文件接入方式）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-skill-all-rec-configuration',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '任务执行类场景方案（配置文件接入方式）';

const assets = {

};



const toc = [{
  "value": "方案概述",
  "id": "方案概述",
  "level": 2
}, {
  "value": "意图声明",
  "id": "意图声明",
  "level": 2
}, {
  "value": "端侧前台意图调用",
  "id": "端侧前台意图调用",
  "level": 2
}, {
  "value": "端侧前台窗口意图调用",
  "id": "端侧前台窗口意图调用",
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
        id: "任务执行类场景方案配置文件接入方式",
        children: "任务执行类场景方案（配置文件接入方式）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "方案概述",
      children: "方案概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需要按照意图定义，进行意图注册并实现意图调用；用户通过对小艺对话进行自然语言输入，小艺理解语义转换成意图调用（含意图参数），执行意图调用实现对应交互体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(924492)/* ["default"] */.A) + "",
        width: "2700",
        height: "2193"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "意图声明",
      children: "意图声明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以“搜索旅游攻略”特性为例，开发者首先要注册“查看旅游攻略”（viewTravelGuides），其他意图见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/service/intents-schema-0000001901962713",
        children: "各垂域意图Schema"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需要编辑对应的意图配置insight_intent.json文件实现意图注册。insight_intent.json文件需要放置在module下面的指定目录：src/main/resources/base/profile/insight_intent.json，并且整个工程中只能存在一个insight_intent.json文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  // 应用支持的意图列表\n  // 必须声明应用支持插件包含的必选意图，应用上架时会进行校验\n  \"insightIntents\": [\n    {\n      // 意图名称\n      // 名称应当遵循意图框架规范，当前仅支持预置垂域意图，不允许自定义\n      // 应用内意图名称唯一，不允许出现相同的名称定义\n      \"intentName\": \"ViewTravelGuides\",\n      // 意图所属的垂域\n      \"domain\": \"TravelDomain\",\n      // 意图版本号\n      // 插件引用意图时会校验该版本号，只有和插件定义的版本号一致才能正常调用\n      \"intentVersion\": \"1.0.1\",\n      // 意图调用逻辑入口\n      \"srcEntry\": \"./ets/entryability/InsightIntentExecutorImpl.ets\",\n      \"uiAbility\": {\n        // 意图所在ability\n        \"ability\": \"EntryAbility\",\n        // UIAbility支持前后台两种执行模式\n        \"executeMode\": [\n          \"background\",\n          \"foreground\"\n        ]\n      },\n      \"uiExtension\": {//提供意图执行的窗口化界面时需要进行的声明配置\n        \"ability\": \"insightIntentUIExtensionAbility\" //意图调用API所在ability名称\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "端侧前台意图调用",
      children: "端侧前台意图调用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需自己实现InsightIntentExecutor，并在对应回调实现打开落地页（点击推荐卡片跳转的界面，如旅游攻略详情页）的能力，ViewTravelGuides的意图调用字段定义见查看旅游攻略（ViewTravelGuides）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "继承InsightIntentExecutor。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "重写对应方法，例如目标拉起前台页面，则可重写onExecuteInUIAbilityForegroundMode方法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过意图名称，识别查看旅游攻略意图（ViewTravelGuides），在对应的方法中传递意图参数（param），并拉起对应落地页（点击推荐卡片跳转的界面，如旅游攻略页面）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { insightIntent, InsightIntentExecutor } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n/**\n * 意图调用样例 */\nexport default class InsightIntentExecutorImpl extends InsightIntentExecutor {\n  private static readonly VIEW_TRAVEL_GUIDES = 'ViewTravelGuides';\n  /**\n   * override 执行前台UIAbility意图\n   *\n   * @param name 意图名称\n   * @param param 意图参数\n   * @param pageLoader 窗口\n   * @returns 意图调用结果\n   */\n  onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>, pageLoader: window.WindowStage):\n    Promise<insightIntent.ExecuteResult> {\n    // 根据意图名称分发处理逻辑。接入方可根据实际业务实现页面跳转\n    switch (name) {\n      case InsightIntentExecutorImpl.VIEW_TRAVEL_GUIDES:\n        return this.viewTravelGuides(param, pageLoader);\n      default:\n        break;\n    }\n    return Promise.resolve({\n      code: -1,\n      result: {\n        message: 'unknown intent'\n      }\n    } as insightIntent.ExecuteResult)\n  }\n  /**\n   * 实现调用查看旅游攻略功能\n   *\n   * @param param 意图参数\n   * @param pageLoader 窗口\n   */\n  private viewTravelGuides(param: Record<string, Object>, pageLoader: window.WindowStage): Promise<insightIntent.ExecuteResult> {\n    return new Promise((resolve, reject) => {\n      // TODO 实现意图调用，loadContent的入参为旅游攻略落地页路径，例如：pages/TravelGuidePage\n      pageLoader.loadContent('pages/TravelGuidePage')\n        .then(() => {\n          let entityId: string = (param.items as Array<object>)?.[0]?.['entityId'];\n          // TODO 调用成功的情况，此处可以打印日志\n          resolve({\n            code: 0,\n            result: {\n              message: 'Intent execute success'\n            }\n          });\n        })\n        .catch((err: BusinessError) => {\n          // TODO 调用失败的情况\n          resolve({\n            code: -1,\n            result: {\n              message: 'Intent execute failed'\n            }\n          })\n        });\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "端侧前台窗口意图调用",
      children: "端侧前台窗口意图调用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需自己实现InsightIntentExecutor，并在对应回调实现窗口页面内容加载的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "继承InsightIntentExecutor。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "重写对应方法，例如目标拉起前台窗口化页面，则可重写onExecuteInUIExtensionAbility方法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过意图名称，识别打开蓝牙意图（LoadBluetoothCard）调用扩展意图，在对应的方法中传递意图参数（param），并拉起对应窗口化页面（如打开蓝牙窗口化页面）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { insightIntent, InsightIntentExecutor, UIExtensionContentSession } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n/**\n * 意图调用样例 */\nexport default class IntentExecutorImpl extends InsightIntentExecutor {\n  private static readonly TAG: string = 'IntentExecutorImpl';\n  private static readonly LOAD_BLUETOOTH_CARD: string = 'LoadBluetoothCard';\n  /**\n   * override 执行前台UI扩展意图\n   *\n   * @param name 意图名称\n   * @param param 意图参数\n   * @param pageLoader 窗口\n   * @returns 意图调用结果\n   */\n  async onExecuteInUIExtensionAbility(name: string, param: Record<string, Object>,\n    pageLoader: UIExtensionContentSession):\n    Promise<insightIntent.ExecuteResult> {\n    console.info(IntentExecutorImpl.TAG, `onExecuteInUIExtensionAbility`);\n    switch (name) {\n      case IntentExecutorImpl.LOAD_BLUETOOTH_CARD:\n        console.info(IntentExecutorImpl.TAG, `onExecuteInUIAbilityForegroundMode::ForegroundUiAbility intent`);\n        return this.openLoadBluetoothCard(pageLoader);\n      default:\n        console.info(IntentExecutorImpl.TAG, `onExecuteInUIAbilityForegroundMode::invalid intent`);\n        break;\n    }\n    let result: insightIntent.ExecuteResult = {\n      code: -1,\n      result: {\n        message: 'onExecuteInUIExtensionAbility failed'\n      }\n    };\n    return result;\n  }\n  /**\n   * 打开加载蓝牙卡片意图\n   *\n   * @param pageLoader 意图内容Session对象\n   * @returns 执行结果\n   */\n  private async openLoadBluetoothCard(pageLoader: UIExtensionContentSession): Promise<insightIntent.ExecuteResult> {\n    pageLoader.loadContent('pages/UiExtensionPage');\n    let result: insightIntent.ExecuteResult = {\n      code: 0,\n      result: {\n        message: 'intent execute success'\n      }\n    }\n    return result;\n  }\n}\n"
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
924492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799670-f77b4dfdf55622ea1478746957b81b5e.png");

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