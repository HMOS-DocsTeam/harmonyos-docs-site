"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["188614"], {
817280(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ability_api_ability_arkts_stage_model_js_apis_app_appstartup_startupconfigentry_js_apis_app_appstartup_startupconfigentry_md_18c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ability-api-ability-arkts-stage-model-js-apis-app-appstartup-startupconfigentry-js-apis-app-appstartup-startupconfigentry-md-18c.json
var site_docs_ref_ability_api_ability_arkts_stage_model_js_apis_app_appstartup_startupconfigentry_js_apis_app_appstartup_startupconfigentry_md_18c_namespaceObject = JSON.parse('{"id":"ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startupconfigentry/js-apis-app-appstartup-startupconfigentry","title":"@ohos.app.appstartup.StartupConfigEntry (启动框架配置)","description":"本模块提供应用启动框架配置的能力。","source":"@site/docs-ref/ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startupconfigentry/js-apis-app-appstartup-startupconfigentry.md","sourceDirName":"ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startupconfigentry","slug":"/ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startupconfigentry/js-apis-app-appstartup-startupconfigentry","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startupconfigentry/js-apis-app-appstartup-startupconfigentry","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":39,"frontMatter":{"title":"@ohos.app.appstartup.StartupConfigEntry (启动框架配置)","sidebar_position":39,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-appstartup-startupconfigentry","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-app-appstartup-startupconfigentry"},"sidebar":"ref","previous":{"title":"@ohos.app.appstartup.StartupConfig (启动框架配置信息)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startupconfig/js-apis-app-appstartup-startupconfig"},"next":{"title":"@ohos.app.appstartup.StartupListener (启动框架任务监听器)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startuplistener/js-apis-app-appstartup-startuplistener"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startupconfigentry/js-apis-app-appstartup-startupconfigentry.md


const frontMatter = {
	title: '@ohos.app.appstartup.StartupConfigEntry (启动框架配置)',
	sidebar_position: 39,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-appstartup-startupconfigentry',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-app-appstartup-startupconfigentry'
};
const contentTitle = '@ohos.app.appstartup.StartupConfigEntry (启动框架配置)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "StartupConfigEntry",
  "id": "startupconfigentry",
  "level": 2
}, {
  "value": "onConfig",
  "id": "onconfig",
  "level": 3
}, {
  "value": "onRequestCustomMatchRule20+",
  "id": "onrequestcustommatchrule20",
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
        id: "ohosappappstartupstartupconfigentry-启动框架配置",
        children: "@ohos.app.appstartup.StartupConfigEntry (启动框架配置)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/app-startup",
        children: "应用启动框架"
      }), "配置的能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(80453)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块接口仅可在Stage模型下使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { StartupConfigEntry } from '@kit.AbilityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "startupconfigentry",
      children: "StartupConfigEntry"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onconfig",
      children: "onConfig"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onConfig?(): StartupConfig"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在回调", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#oncreate",
        children: "AbilityStage.onCreate"
      }), "前，若该AbilityStage对应的HAP中启动框架配置文件中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/app-startup#%E5%AE%9A%E4%B9%89%E5%90%AF%E5%8A%A8%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE",
        children: "定义了启动框架配置"
      }), "，则会触发该回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以在该回调中设置启动框架配置信息，详细使用方法可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/app-startup#%E8%AE%BE%E7%BD%AE%E5%90%AF%E5%8A%A8%E5%8F%82%E6%95%B0",
        children: "设置启动参数"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AppStartup"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startupconfig/js-apis-app-appstartup-startupconfig#startupconfig",
              children: "StartupConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动框架配置信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { StartupConfig, StartupConfigEntry, StartupListener } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nexport default class MyStartupConfigEntry extends StartupConfigEntry {\n  onConfig() {\n    hilog.info(0x0000, 'testTag', `onConfig`);\n    let onCompletedCallback = (error: BusinessError<void>) => {\n      hilog.info(0x0000, 'testTag', `onCompletedCallback`);\n      if (error) {\n        hilog.error(0x0000, 'testTag', 'onCompletedCallback: %{public}d, message: %{public}s', error.code,\n          error.message);\n      } else {\n        hilog.info(0x0000, 'testTag', `onCompletedCallback: success.`);\n      }\n    }\n    let startupListener: StartupListener = {\n      'onCompleted': onCompletedCallback\n    }\n    let config: StartupConfig = {\n      'timeoutMs': 10000,\n      'startupListener': startupListener\n    }\n    return config;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onrequestcustommatchrule20",
      children: "onRequestCustomMatchRule20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onRequestCustomMatchRule(want: Want): string"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在回调", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage#oncreate",
        children: "AbilityStage.onCreate"
      }), "前，若该AbilityStage对应的HAP中启动框架配置文件中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/app-startup#%E5%AE%9A%E4%B9%89%E5%90%AF%E5%8A%A8%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE",
        children: "定义了启动框架配置"
      }), "，则会在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onconfig",
        children: "StartupConfigEntry.onConfig"
      }), "后触发该回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以在该回调中，可以根据调用方传入启动UIAbility的Want中的不同参数来返回不同的自定义匹配规则。启动框架会将其与启动任务配置的matchRules中customization字段进行匹配。若匹配成功，任务将在自动模式执行。详细匹配规则请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/app-startup#%E6%B7%BB%E5%8A%A0%E4%BB%BB%E5%8A%A1%E5%8C%B9%E9%85%8D%E8%A7%84%E5%88%99",
        children: "添加任务匹配规则"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口通常用于无法直接通过uri、action或意图名称规则来匹配启动任务的场景，可以使用本接口对匹配规则进一步细化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AppStartup"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "want"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动UIAbility的Want信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回自定义匹配规则值，用于匹配启动任务是否自动执行。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { StartupConfigEntry, Want } from '@kit.AbilityKit';\n\nexport default class MyStartupConfigEntry extends StartupConfigEntry {\n  // ...\n\n  onRequestCustomMatchRule(want: Want): string {\n    if (want?.parameters?.customParam == 'param1') {\n      return 'customRule1';\n    }\n    return '';\n  }\n}\n"
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
80453(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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