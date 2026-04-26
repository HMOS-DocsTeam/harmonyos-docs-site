"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["102077"], {
988455(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_screen_time_guard_kit_guide_screentimeguard_guard_strategy_manage_screentimeguard_update_guard_strategy_screentimeguard_update_guard_strategy_md_b78_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-screen-time-guard-kit-guide-screentimeguard-guard-strategy-manage-screentimeguard-update-guard-strategy-screentimeguard-update-guard-strategy-md-b78.json
var site_docs_screen_time_guard_kit_guide_screentimeguard_guard_strategy_manage_screentimeguard_update_guard_strategy_screentimeguard_update_guard_strategy_md_b78_namespaceObject = JSON.parse('{"id":"screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-update-guard-strategy/screentimeguard-update-guard-strategy","title":"修改策略","description":"场景介绍","source":"@site/docs/screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-update-guard-strategy/screentimeguard-update-guard-strategy.md","sourceDirName":"screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-update-guard-strategy","slug":"/screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-update-guard-strategy/","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-update-guard-strategy/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"修改策略","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-update-guard-strategy","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"添加策略","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-add-guard-strategy/"},"next":{"title":"查询策略","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-query-guard-strategies/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-update-guard-strategy/screentimeguard-update-guard-strategy.md


const frontMatter = {
	title: '修改策略',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-update-guard-strategy',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '修改策略';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发前提",
  "id": "开发前提",
  "level": 2
}, {
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
        id: "修改策略",
        children: "修改策略"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户希望调整现有的屏幕时间守护规则时，可以调用更新管控策略的接口。我们kit支持根据参数中传入的策略名以及修改策略的方案，用户可以修改各种策略，如调整各个应用的停用起止时间。一旦修改完成并保存，系统将根据新的规则对用户的屏幕使用行为进行管控。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(44773)/* ["default"] */.A) + "",
        width: "729",
        height: "741"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "流程说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用调用更新管控策略的接口时，会拉起健康使用设备查询本应用是否已申请权限，以及用户是否对本应用授权。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若没有权限，则抛出相应错误码；若有权限，则解析参数中传入的策略，并判断策略是否有效、是否存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若策略有效，则记录到本地数据库，策略完成修改；否则，抛出相应错误码。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(279405)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "更新管控策略的策略名需和当前已有的策略一致，否则会抛出策略不存在错误。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改策略的关键接口如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/screen-time-guard-api/screentimeguard-arkts/screentimeguard-guardservice/screentimeguard-guardservice#updateguardstrategy",
              children: "updateGuardStrategy"
            }), "(strategyName: string, guardStrategy: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/screen-time-guard-api/screentimeguard-arkts/screentimeguard-guardservice/screentimeguard-guardservice#guardstrategy",
              children: "GuardStrategy"
            }), "): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "修改屏幕时间管控策略。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发前提",
      children: "开发前提"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["修改管控策略需要申请用户授权，请先参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/screen-time-guard-kit-guide/screentimeguard-interface-call-auth/screentimeguard-request-user-auth",
        children: "请求用户授权"
      }), "章节完成用户授权。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { guardService, appPicker } from '@kit.ScreenTimeGuardKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用updateGuardStrategy，修改管控策略。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct TestPage {\n   build() {\n      Column() {\n         Button(\"TestUpdateGuardStrategy\")\n            .onClick(async () => {\n               try {\n                  // 先调用startAppPicker获取相应应用的token\n                  const tokens = await appPicker.startAppPicker(this.getUIContext().getHostContext(), { appTokens: [] });\n\n                  const strategyName = \"TestStrategy\";\n                  const time: guardService.TimeStrategy = {\n                     type: guardService.TimeStrategyType.START_END_TIME_TYPE,\n                     startTime: \"08:00\",\n                     endTime: \"19:00\",\n                     repeat: [1,2,3]\n                  }\n                  const info: guardService.AppInfo = {\n                     appTokens: tokens\n                  }\n                  const strategy: guardService.GuardStrategy = {\n                     name: strategyName,\n                     timeStrategy: time,\n                     appInfo: info,\n                     appRestrictionType: guardService.RestrictionType.BLOCKLIST_TYPE\n                  }\n                  await guardService.updateGuardStrategy(strategyName, strategy);\n               } catch (err) {\n                  const message = (err as BusinessError).message;\n                  const code = (err as BusinessError).code;\n                  hilog.error(0x0000, `ScreenTimeGuard:updateGuardStrategy`, `updateGuardStrategy failed with error code: ${code}, message: ${message}`);\n               }\n            })\n      }\n   }\n}\n"
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
44773(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439215-3f448edaca610491af3dd52436677589.png");

},
279405(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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