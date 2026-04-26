"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["917142"], {
340725(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_intents_kit_guide_intents_event_rec_intents_event_rec_access_programme_intents_event_rec_access_programme_md_a01_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intents-kit-guide-intents-event-rec-intents-event-rec-access-programme-intents-event-rec-access-programme-md-a01.json
var site_docs_intents_kit_guide_intents_event_rec_intents_event_rec_access_programme_intents_event_rec_access_programme_md_a01_namespaceObject = JSON.parse('{"id":"intents-kit-guide/intents-event-rec/intents-event-rec-access-programme/intents-event-rec-access-programme","title":"接入方案","description":"方案概述","source":"@site/docs/intents-kit-guide/intents-event-rec/intents-event-rec-access-programme/intents-event-rec-access-programme.md","sourceDirName":"intents-kit-guide/intents-event-rec/intents-event-rec-access-programme","slug":"/intents-kit-guide/intents-event-rec/intents-event-rec-access-programme/","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-event-rec/intents-event-rec-access-programme/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"接入方案","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-event-rec-access-programme","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"场景体验","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-event-rec/intents-event-rec-scene-experience/"},"next":{"title":"开发者测试","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-event-rec/intents-event-rec-dp-self-validation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/intents-kit-guide/intents-event-rec/intents-event-rec-access-programme/intents-event-rec-access-programme.md


const frontMatter = {
	title: '接入方案',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-event-rec-access-programme',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '接入方案';

const assets = {

};



const toc = [{
  "value": "方案概述",
  "id": "方案概述",
  "level": 2
}, {
  "value": "流程图",
  "id": "流程图",
  "level": 2
}, {
  "value": "意图注册",
  "id": "意图注册",
  "level": 2
}, {
  "value": "获取SID",
  "id": "获取sid",
  "level": 2
}, {
  "value": "云侧意图共享",
  "id": "云侧意图共享",
  "level": 2
}, {
  "value": "意图共享接口调用",
  "id": "意图共享接口调用",
  "level": 3
}, {
  "value": "事件撤销接口调用",
  "id": "事件撤销接口调用",
  "level": 3
}, {
  "value": "端侧意图调用",
  "id": "端侧意图调用",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "接入方案",
        children: "接入方案"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "方案概述",
      children: "方案概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当开发者有事件想要通知到用户时，可通过应用/元服务的云侧服务器向智慧分发平台推送事件内容（意图共享）。系统通过智慧决策判断事件发生的条件，在满足条件时，向用户推荐事件提醒卡片，当用户点击卡片后，可跳转到应用/元服务的详情页查看事件详情（意图调用）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(772687)/* ["default"] */.A) + "",
        width: "2940",
        height: "1758"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "流程图",
      children: "流程图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者获取云侧事件捐赠所需的SID（Service OpenID）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当用户有订单事件后，开发者云将事件内容和SID同步到业务云。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "华为内部会根据事件和具体场景制定事件服务推出规则和时机。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在满足制定规则场景下展示对应用户事件，增加服务曝光率。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(594602)/* ["default"] */.A) + "",
        width: "4203",
        height: "2640"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "意图注册",
      children: "意图注册"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以还款待办事件提醒特性为例，首先要注册查看还款意图（ViewRepayment），详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/service/intents-schema-0000001901962713",
        children: "各垂域意图Schema"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需要编辑对应的意图配置insight_intent.json文件实现意图声明。insight_intent.json文件需要放置在任意一个module下面的指定目录：src/main/resources/base/profile/insight_intent.json，并且整个工程中只能存在一个insight_intent.json文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  // 应用支持的意图列表\n  // 必须声明应用支持插件包含的必选意图，应用上架时会进行校验\n  \"insightIntents\": [\n    {\n      // 意图名称\n      // 名称应当遵循意图框架规范，当前仅支持预置垂域意图，不允许自定义\n      // 应用内意图名称唯一，不允许出现相同的名称定义\n      \"intentName\": \"ViewRepayment\",\n      // 意图所属的垂域\n      \"domain\": \"BankingDomain\",\n      // 意图版本号\n      // 插件引用意图时会校验该版本号，只有和插件定义的版本号一致才能正常调用\n      \"intentVersion\": \"1.0.1\",\n      // 意图调用逻辑入口\n      \"srcEntry\": \"./ets/entryability/InsightIntentExecutorImpl.ets\",\n      \"uiAbility\": {\n        // 意图所在ability\n        \"ability\": \"EntryAbility\",\n        // UIAbility支持前后台两种执行模式\n        \"executeMode\": [\n          \"background\",\n          \"foreground\"\n        ]\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取sid",
      children: "获取SID"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(879477)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API文档参见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/intents-api/intents-arkts-api/intents-arkts-api-insightintent/intents-arkts-api-insightintent#insightintentgetsid",
        children: "意图框架API参考 > getSid"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "云侧事件捐赠凭证SID（Service OpenID）优先从缓存获取，当缓存获取失败可以强制从云侧获取新的SID。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { insightIntent } from '@kit.IntentsKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 根据实际代码上下文自行传入合适的context\ninsightIntent.getSid(context, false) // 优先获取缓存SID，改为true则强制从云侧获取新SID\n  .then((sid: string) => {\n    // 获取SID成功\n    console.info('getSid succeed!');\n  }).catch((error: BusinessError) => {\n  // 获取SID失败\n  console.error(`getSid failed! error=${error.code} reason=${error.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "云侧意图共享",
      children: "云侧意图共享"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "意图共享接口调用",
      children: "意图共享接口调用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用/元服务通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/intents-api/intents-rest-api/intents-rest-api-intent-share/intents-rest-api-intent-share#%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D",
        children: "云侧意图共享接口"
      }), "，把对应意图的相关事件数据共享给Intents Kit，用于事件提醒服务。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "事件撤销接口调用",
      children: "事件撤销接口调用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用/元服务共享的意图相关事件数据超过时效期，Intents Kit需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/intents-api/intents-rest-api/intents-rest-api-revoke-event/intents-rest-api-revoke-event",
        children: "云侧事件撤销接口"
      }), "把相关事件数据撤销，以避免触发超过时效期的事件提醒。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "端侧意图调用",
      children: "端侧意图调用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者需要自己实现InsightIntentExecutor，并在对应回调实现打开落地页（点击推荐卡片跳转的界面）的能力，ViewRepayment的意图调用字段定义见对应", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/service/intents-schema-0000001901962713",
        children: "垂域意图Schema"
      }), "定义表。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "继承InsightIntentExecutor。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "重写对应方法，例如目标拉起前台页面，则可重写onExecuteInUIAbilityForegroundMode方法。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过意图名称，识别查看还款意图（ViewRepayment）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在对应的方法中传递意图参数（param），并拉起对应落地页（如还款页面）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { insightIntent, InsightIntentExecutor } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n/**\n * 意图调用样例 */\nexport default class InsightIntentExecutorImpl extends InsightIntentExecutor {\n  private static readonly VIEW_REPAYMENT = 'ViewRepayment';\n  /**\n   * override 执行前台UIAbility意图\n   *\n   * @param name 意图名称\n   * @param param 意图参数\n   * @param pageLoader 窗口\n   * @returns 意图调用结果\n   */\n  onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>, pageLoader: window.WindowStage):\n    Promise<insightIntent.ExecuteResult> {\n    // 根据意图名称分发处理逻辑。接入方可根据实际业务实现页面跳转\n    switch (name) {\n      case InsightIntentExecutorImpl.VIEW_REPAYMENT:\n        return this.viewRepayment(param, pageLoader);\n      default:\n        break;\n    }\n    return Promise.resolve({\n      code: -1,\n      result: {\n        message: 'unknown intent'\n      }\n    } as insightIntent.ExecuteResult)\n  }\n\n  /**\n   * 实现调用查看还款功能\n   *\n   * @param param 意图参数\n   * @param pageLoader 窗口\n   */\n  private viewRepayment(param: Record<string, Object>, pageLoader: window.WindowStage): Promise<insightIntent.ExecuteResult> {\n    return new Promise((resolve, reject) => {\n      let para: Record<string, string> = {\n        'result': JSON.stringify(param)\n      };\n      let localStorage: LocalStorage = new LocalStorage(para);\n      // TODO 实现意图调用，loadContent的入参为查看还款落地页路径，例如：'pages/Index'\n      pageLoader.loadContent('pages/Index', localStorage)\n        .then(() => {\n          let entityId: string = (param.items as Array<object>)?.[0]?.['entityId'];\n          // TODO 调用成功的情况，此处可以打印日志\n          resolve({\n            code: 0,\n            result: {\n              message: 'Intent execute succeed'\n            }\n          });\n        })\n        .catch((err: BusinessError) => {\n          // TODO 调用失败的情况\n          resolve({\n            code: -1,\n            result: {\n              message: 'Intent execute failed'\n            }\n          })\n        });\n    })\n  }\n}\n"
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
594602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479317-e712e4c4cdbcba946eecadfd4fdd871d.png");

},
879477(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
772687(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959316-8fe43bffe37b05f5a1bebd2ef9bbf2c8.png");

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