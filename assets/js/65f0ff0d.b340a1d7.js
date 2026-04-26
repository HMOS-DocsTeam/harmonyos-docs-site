"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["826451"], {
33691(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_stage_model_application_components_ability_exit_info_record_ability_exit_info_record_md_65f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-stage-model-application-components-ability-exit-info-record-ability-exit-info-record-md-65f.json
var site_docs_ability_kit_stage_model_development_stage_model_application_components_ability_exit_info_record_ability_exit_info_record_md_65f_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/stage-model-application-components/ability-exit-info-record/ability-exit-info-record","title":"获取应用异常退出原因","description":"当应用异常退出后再次启动时，开发者往往需要获取上次异常退出的具体原因和当时的应用状态信息，比如应用内存占用的rss、pss值、上次应用退出的时间等等。通过UIAbility和UIExtensionAbility的OnCreate生命周期函数中的launchParam参数，开发者可以获取到相关信息，并将其应用于应用体验的分析改进，从而调整业务逻辑、提高应用的存活率。","source":"@site/docs/ability-kit/stage-model-development/stage-model-application-components/ability-exit-info-record/ability-exit-info-record.md","sourceDirName":"ability-kit/stage-model-development/stage-model-application-components/ability-exit-info-record","slug":"/ability-kit/stage-model-development/stage-model-application-components/ability-exit-info-record/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/ability-exit-info-record/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"获取应用异常退出原因","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ability-exit-info-record","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用预加载","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/preload-application/"},"next":{"title":"获取/设置环境变量","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/subscribe-system-environment-variable-changes/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/stage-model-application-components/ability-exit-info-record/ability-exit-info-record.md


const frontMatter = {
	title: '获取应用异常退出原因',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ability-exit-info-record',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '获取应用异常退出原因';

const assets = {

};



const toc = [{
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "获取应用异常退出原因",
        children: "获取应用异常退出原因"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用异常退出后再次启动时，开发者往往需要获取上次异常退出的具体原因和当时的应用状态信息，比如应用内存占用的rss、pss值、上次应用退出的时间等等。通过UIAbility和UIExtensionAbility的OnCreate生命周期函数中的launchParam参数，开发者可以获取到相关信息，并将其应用于应用体验的分析改进，从而调整业务逻辑、提高应用的存活率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensionability/js-apis-app-ability-uiextensionability",
        children: "UIExtensionAbility"
      }), "支持获取上次的退出原因。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口详情参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilityconstant/js-apis-app-ability-abilityconstant#launchparam",
        children: "API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "接口名"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "描述"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilityconstant/js-apis-app-ability-abilityconstant#launchparam",
              children: "LaunchParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动参数。此接口的lastExitReason、lastExitMessage、lastExitDetailInfo成员记录Ability上次异常退出的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilityconstant/js-apis-app-ability-abilityconstant#lastexitdetailinfo18",
              children: "LastExitDetailInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 18开始，记录Ability所在进程上次退出时的关键运行信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取UIAbility上次退出的原因。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在UIAbility类的onCreate成员函数的launchParam参数中读取Ability上次退出的信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIAbility, Want, AbilityConstant } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN_NUMBER = 0xF811;\nconst TAG  = '[Sample_UnexpExit]';\nconst MAX_RSS_THRESHOLD: number = 100000;\nconst MAX_PSS_THRESHOLD: number = 100000;\n\nfunction doSomething() {\n  hilog.info(DOMAIN_NUMBER, TAG, 'do Something');\n}\n\nfunction doAnotherThing() {\n  hilog.info(DOMAIN_NUMBER, TAG, 'do Another Thing');\n}\n\nexport default class ExitAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    // 获取退出原因\n    let reason: number = launchParam.lastExitReason;\n    let subReason: number = -1;\n    if (launchParam.lastExitDetailInfo) {\n      subReason = launchParam.lastExitDetailInfo.exitSubReason;\n    }\n    let exitMsg: string = launchParam.lastExitMessage;\n    // ···\n    if (launchParam.lastExitDetailInfo) {\n      // 获取Ability上次退出时所在进程的信息\n      let pid = launchParam.lastExitDetailInfo.pid;\n      let processName: string = launchParam.lastExitDetailInfo.processName;\n      let rss: number = launchParam.lastExitDetailInfo.rss;\n      let pss: number = launchParam.lastExitDetailInfo.pss;\n    // ···\n      // 其他信息\n      let uid: number = launchParam.lastExitDetailInfo.uid;\n      let timestamp: number = launchParam.lastExitDetailInfo.timestamp;\n    // ···\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据上次退出的信息做相应的业务处理。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "对于不同的退出原因，开发者可以增加不同的处理逻辑，例如："
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (reason === AbilityConstant.LastExitReason.APP_FREEZE) {\n  // Ability上次因无响应而退出，此处可增加处理逻辑。\n  doSomething();\n} else if (reason === AbilityConstant.LastExitReason.SIGNAL && subReason === 9) {\n  // Ability上次所在进程因kill -9信号而退出，此处可增加处理逻辑。\n  doAnotherThing();\n} else if (reason === AbilityConstant.LastExitReason.RESOURCE_CONTROL) {\n  // Ability上次因rss管控而退出，此处可实现处理逻辑，最简单的就是打印出来。\n  hilog.info(DOMAIN_NUMBER, TAG, `The ability has exit last because the rss control，the lastExitReason is ${reason}, subReason is ${subReason}, lastExitMessage is ${exitMsg}.`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "根据进程信息感知应用内存占用异常，例如："
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (rss > MAX_RSS_THRESHOLD || pss > MAX_PSS_THRESHOLD) {\n  // RSS或PSS值过大，说明内存使用率接近或达到上限，打印告警，或者增加处理逻辑。\n  hilog.warn(DOMAIN_NUMBER, TAG, `Process ${processName}(${pid}) memory usage approaches or reaches the upper limit.`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "根据异常退出时刻的时间戳，明确异常发生的时刻，便于问题定位。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hilog.info(DOMAIN_NUMBER, TAG, `App ${uid} terminated at ${timestamp}.`);\n"
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