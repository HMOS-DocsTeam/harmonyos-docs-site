"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["11364"], {
128018(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_intents_kit_guide_intents_search_rec_intents_search_rec_access_programme_intents_skill_all_rec_content_search_intents_skill_all_rec_content_search_md_060_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intents-kit-guide-intents-search-rec-intents-search-rec-access-programme-intents-skill-all-rec-content-search-intents-skill-all-rec-content-search-md-060.json
var site_docs_intents_kit_guide_intents_search_rec_intents_search_rec_access_programme_intents_skill_all_rec_content_search_intents_skill_all_rec_content_search_md_060_namespaceObject = JSON.parse('{"id":"intents-kit-guide/intents-search-rec/intents-search-rec-access-programme/intents-skill-all-rec-content-search/intents-skill-all-rec-content-search","title":"内容搜索方案","description":"方案概述","source":"@site/docs/intents-kit-guide/intents-search-rec/intents-search-rec-access-programme/intents-skill-all-rec-content-search/intents-skill-all-rec-content-search.md","sourceDirName":"intents-kit-guide/intents-search-rec/intents-search-rec-access-programme/intents-skill-all-rec-content-search","slug":"/intents-kit-guide/intents-search-rec/intents-search-rec-access-programme/intents-skill-all-rec-content-search/","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-search-rec/intents-search-rec-access-programme/intents-skill-all-rec-content-search/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"内容搜索方案","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-skill-all-rec-content-search","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"功能搜索方案","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-search-rec/intents-search-rec-access-programme/intents-skill-all-rec-function-search/"},"next":{"title":"意图标准协议上架指导","permalink":"/harmonyos-docs-site/intents-kit-guide/intents-kit-listing-configuration/intents-kit-listing-standard-protocol/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/intents-kit-guide/intents-search-rec/intents-search-rec-access-programme/intents-skill-all-rec-content-search/intents-skill-all-rec-content-search.md


const frontMatter = {
	title: '内容搜索方案',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/intents-skill-all-rec-content-search',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '内容搜索方案';

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
  "value": "意图共享",
  "id": "意图共享",
  "level": 2
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
        id: "内容搜索方案",
        children: "内容搜索方案"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "方案概述",
      children: "方案概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当用户使用应用/元服务时，开发者可以按照标准意图Schema（具体意图详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/service/intents-schema-0000001901962713",
        children: "各垂域意图Schema"
      }), "）向系统共享数据（数据包含用户行为和内容实体），并实现意图调用（空调用与传参调用）。已实现用户点击卡片后，可后台执行功能（例如播放指定歌曲）或跳转至指定内容页面（例如指定的歌曲播放页面）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(76223)/* ["default"] */.A) + "",
        width: "1886",
        height: "945"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "意图声明",
      children: "意图声明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以歌曲本地搜索特性为例，首先要注册播放歌曲意图（PlayMusic），其他意图见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/service/intents-schema-0000001901962713",
        children: "各垂域意图Schema"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需要编辑对应的意图配置insight_intent.json文件实现意图注册。insight_intent.json文件需要放置在module下面的指定目录：src/main/resources/base/profile/insight_intent.json，并且整个工程中只能存在一个insight_intent.json文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  // 应用支持的意图列表\n  // 必须声明应用支持插件包含的必选意图，应用上架时会进行校验\n  \"insightIntents\": [\n    {\n      // 意图名称\n      // 名称应当遵循意图框架规范，当前仅支持预置垂域意图，不允许自定义\n      // 应用内意图名称唯一，不允许出现相同的名称定义\n      \"intentName\": \"PlayMusic\",\n      // 意图所属的垂域\n      \"domain\": \"MusicDomain\",\n      // 意图版本号\n      // 插件引用意图时会校验该版本号，只有和插件定义的版本号一致才能正常调用\n      \"intentVersion\": \"1.0.1\",\n      // 意图调用逻辑入口\n      \"srcEntry\": \"./ets/entryability/InsightIntentExecutorImpl.ets\",\n      \"uiAbility\": {\n        // 意图所在ability\n      \"ability\": \"EntryAbility\",\n        // UIAbility支持前后台两种执行模式\n        \"executeMode\": [\n          \"background\",\n          \"foreground\"\n        ]\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "意图共享",
      children: "意图共享"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["构建意图对象，并且调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/intents-api/intents-arkts-api/intents-arkts-api-insightintent/intents-arkts-api-insightintent#insightintentshareintent-1",
        children: "insightIntent.shareIntent"
      }), "，实现意图共享。可同时构建多个PlayMusic或PlayMusicList的意图对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以歌曲本地搜索特性为例，首先要注册播放歌曲意图（PlayMusic），其他意图见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/service/intents-schema-0000001901962713",
        children: "各垂域意图Schema"
      }), "。开发者需要编辑对应的意图配置insight_intent.json文件实现意图注册。insight_intent.json文件需要放置在module下面的指定目录：src/main/resources/base/profile/insight_intent.json，并且整个工程中只能存在一个insight_intent.json文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { insightIntent } from '@kit.IntentsKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nlet playMusicIntent1: insightIntent.InsightIntent;\nlet playMusicIntent2: insightIntent.InsightIntent;\n// 共享数据接口  意图数组可以是更多的实体\ninsightIntent.shareIntent(this.context, [playMusicIntent1, playMusicIntent2]).then(() => {\n  console.info('shareIntent succeed');\n}).catch((err: BusinessError) => {\n  console.error(`error.code: ${err?.code}, failed because ${err?.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PlayMusic的意图共享字段定义见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/service/intents-schema-0000001901962713",
        children: "各垂域意图Schema"
      }), "定义，代码示例如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { insightIntent } from '@kit.IntentsKit';\nlet playMusicIntent: insightIntent.InsightIntent = {\n  intentName: \"PlayMusic\",\n  intentVersion: \"1.0.1\",\n  identifier: \"52dac3b0-6520-4974-81e5-25f0879449b5\",\n  intentActionInfo: {\n    actionMode: \"EXECUTED\",\n    executedTimeSlots: {\n      executedStartTime: 1637393212000,\n      executedEndTime: 1637393112000,\n    },\n    currentPercentage: 50,\n  },\n  intentEntityInfo: {\n    entityName: \"Music\",\n    entityId: \"C10194368\",\n    entityGroupId: \"C10194321312\",\n    displayName: \"测试歌曲1\",\n    description: \"NA\",\n    logoURL: \"https://www-file.abc.com/-/media/corporate/images/home/logo/abc_logo.png\",\n    keywords: [\"华为音乐\", \"化妆\"],\n    rankingHint: 99,\n    expirationTime: 1637393212000,\n    metadataModificationTime: 1637393212000,\n    activityType: [\"1\", \"2\", \"3\"],\n    artist: [\"测试歌手1\", \"测试歌手2\"],\n    lyricist: [\"测试词作者1\", \"测试词作者2\"],\n    composer: [\"测试曲作者1\", \"测试曲作者2\"],\n    albumName: \"测试专辑\",\n    duration: 244000,\n    playCount: 100000,\n    musicalGenre: [\"流行\", \"华语\", \"金曲\", \"00后\"],\n    isPublicData: false,\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完整的意图共享示例如下所示，该示例构建了一个PlayMusic意图、一个PlayMusicList意图，并进行了shareIntent调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { insightIntent } from '@kit.IntentsKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nlet playMusicIntent: insightIntent.InsightIntent = {\n  intentName: \"PlayMusic\",\n  intentVersion: \"1.0.1\",\n  identifier: \"52dac3b0-6520-4974-81e5-25f0879449b5\",\n  intentActionInfo: {\n    actionMode: \"EXECUTED\",\n    executedTimeSlots: {\n      executedStartTime: 1637393212000,\n      executedEndTime: 1637393112000,\n    },\n    currentPercentage: 50,\n  },\n  intentEntityInfo: {\n    entityName: \"Music\",\n    entityId: \"C10194368\",\n    entityGroupId: \"C10194321312\",\n    displayName: \"测试歌曲1\",\n    description: \"NA\",\n    logoURL: \"https://www-file.abc.com/-/media/corporate/images/home/logo/abc_logo.png\",\n    keywords: [\"华为音乐\", \"化妆\"],\n    rankingHint: 99,\n    expirationTime: 1637393212000,\n    metadataModificationTime: 1637393212000,\n    activityType: [\"1\", \"2\", \"3\"],\n    artist: [\"测试歌手1\", \"测试歌手2\"],\n    lyricist: [\"测试词作者1\", \"测试词作者2\"],\n    composer: [\"测试曲作者1\", \"测试曲作者2\"],\n    albumName: \"测试专辑\",\n    duration: 244000,\n    playCount: 100000,\n    musicalGenre: [\"流行\", \"华语\", \"金曲\", \"00后\"],\n    isPublicData: false,\n  }\n}\n// 共享数据接口  意图数组可以是更多的实体\ninsightIntent.shareIntent(this.context, [playMusicIntent]).then(() => {\n  console.info('shareIntent succeed');\n}).catch((err: BusinessError) => {\n  console.error(`error.code: ${err?.code}, failed because ${err?.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "端侧意图调用",
      children: "端侧意图调用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者需要自己实现InsightIntentExecutor，并在对应回调实现打开落地页（点击推荐卡片跳转的界面）或后台执行的能力，PlayMusic的意图调用字段定义见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/service/intents-schema-0000001901962713",
        children: "各垂域意图Schema"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "继承InsightIntentExecutor。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "重写对应方法，例如目标拉起前台页面，则可重写onExecuteInUIAbilityForegroundMode方法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过意图名称，识别播放歌曲意图（PlayMusic），在对应的方法中传递意图参数（param），并拉起对应落地页（如播放歌曲落地页）或后台执行（播放歌曲）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { insightIntent, InsightIntentExecutor } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\n/**\n * 意图调用样例\n*/\nexport default class InsightIntentExecutorImpl extends InsightIntentExecutor {\n  private static readonly PLAY_MUSIC = 'PlayMusic';\n  /**\n   * override 执行前台UIAbility意图\n   *\n   * @param name 意图名称\n   * @param param 意图参数\n   * @param pageLoader 窗口\n   * @returns 意图调用结果\n   */\n  onExecuteInUIAbilityForegroundMode(name: string, param: Record<string, Object>, pageLoader: window.WindowStage):\n    Promise<insightIntent.ExecuteResult> {\n    // 根据意图名称分发处理逻辑。接入方可根据实际业务实现页面跳转\n    switch (name) {\n      case InsightIntentExecutorImpl.PLAY_MUSIC:\n        return this.playMusic(param, pageLoader);\n      default:\n        break;\n    }\n    return Promise.resolve({\n      code: -1,\n      result: {\n        message: 'unknown intent'\n      }\n    } as insightIntent.ExecuteResult)\n  }\n  /**\n   * 实现调用播放歌曲功能\n   *\n   * @param param 意图参数\n   * @param pageLoader 窗口\n   */\n  private playMusic(param: Record<string, Object>, pageLoader: window.WindowStage): Promise<insightIntent.ExecuteResult> {\n    return new Promise((resolve, reject) => {\n      // TODO 实现意图调用，loadContent的入参为歌曲落地页路径，例如：pages/SongPage\n      pageLoader.loadContent('pages/SongPage')\n        .then(() => {\n          let entityId: string = (param.items as Array<object>)?.[0]?.['entityId'];\n          // TODO 调用成功的情况，此处可以打印日志\n          resolve({\n            code: 0,\n            result: {\n              message: 'Intent execute succeed'\n            }\n          });\n        })\n        .catch((err: BusinessError) => {\n          // TODO 调用失败的情况\n          resolve({\n            code: -1,\n            result: {\n              message: 'Intent execute failed'\n            }\n          })\n        });\n    })\n  }\n"
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
76223(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959324-7cfa221d2d106955e3cad972fb1bf742.png");

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