"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["914933"], {
608638(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_screen_time_guard_kit_guide_screentimeguard_guard_strategy_manage_screentimeguard_stop_guard_strategy_screentimeguard_stop_guard_strategy_md_b78_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-screen-time-guard-kit-guide-screentimeguard-guard-strategy-manage-screentimeguard-stop-guard-strategy-screentimeguard-stop-guard-strategy-md-b78.json
var site_docs_screen_time_guard_kit_guide_screentimeguard_guard_strategy_manage_screentimeguard_stop_guard_strategy_screentimeguard_stop_guard_strategy_md_b78_namespaceObject = JSON.parse('{"id":"screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-stop-guard-strategy/screentimeguard-stop-guard-strategy","title":"停止策略","description":"场景介绍","source":"@site/docs/screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-stop-guard-strategy/screentimeguard-stop-guard-strategy.md","sourceDirName":"screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-stop-guard-strategy","slug":"/screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-stop-guard-strategy/","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-stop-guard-strategy/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"停止策略","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-stop-guard-strategy","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"启动策略","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-start-guard-strategy/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-apps-restriction/screentimeguard-apps-restriction-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-stop-guard-strategy/screentimeguard-stop-guard-strategy.md


const frontMatter = {
	title: '停止策略',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-stop-guard-strategy',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '停止策略';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "用户体验设计",
  "id": "用户体验设计",
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
        id: "停止策略",
        children: "停止策略"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户希望停止某个管控规则时，可以调用停止管控策略的接口。根据参数中传入的策略名，应用可以停止对应管控策略。一旦策略被停止，系统将不再根据该规则对用户的屏幕使用行为进行监管。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "用户体验设计",
      children: "用户体验设计"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(75448)/* ["default"] */.A) + "",
        width: "1313",
        height: "709"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(251679)/* ["default"] */.A) + "",
        width: "1064",
        height: "861"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "流程说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用继承TimeGuardExtensionAbility，实现onStop方法，此步非必需。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用调用停止管控策略的接口，会拉起健康使用设备查询本应用是否已申请权限、用户是否已给本应用授权。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若没有权限，则抛出相应错误码。若有权限，则解析参数中传入的策略名称，判断策略是否存在。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若策略不存在，则抛出相应错误码；若存在，则查询该策略是否正在执行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若停止策略时正在执行策略，则策略会正常停止，健康使用设备会记录策略停止状态；若停止策略时策略并未执行，该接口将抛出策略未在执行中的错误码。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "策略生效期间停止策略，会拉起extension进程，执行TimeGuardExtensionAbility的onStop回调。在非策略生效期间停止策略，不会触发onStop回调。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "停止该策略后，若该应用不存在任何启动状态的策略，则该应用被设置为可卸载。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "停止该策略后，若设备中不存在任何启动状态的策略，则系统时间设置为可修改。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止策略的关键接口如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/screen-time-guard-api/screentimeguard-arkts/screentimeguard-guardservice/screentimeguard-guardservice#stopguardstrategy",
              children: "stopGuardStrategy"
            }), "(strategyName: string): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据策略名称，停止其管控策略。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/screen-time-guard-api/screentimeguard-arkts/screentimeguard-timeguardextensionability/screentimeguard-timeguardextensionability#onstop",
              children: "onStop"
            }), "(strategyName: string): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在策略结束时执行特定逻辑。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发前提",
      children: "开发前提"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["停止管控策略需要申请用户授权，请先参考", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "import { guardService, TimeGuardExtensionAbility } from '@kit.ScreenTimeGuardKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "继承TimeGuardExtensionAbility，重写onStop回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export default class EntryAbility extends TimeGuardExtensionAbility {\n   async onStop(strategyName: string): Promise<void> {\n      hilog.info(0x0000, 'test --- onStop', strategyName);\n   }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用stopGuardStrategy，停止管控策略。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function testStopGuardStrategy() {\n   try {\n      const strategyName = \"TestStrategy\";\n      await guardService.stopGuardStrategy(strategyName);\n   } catch (err) {\n      const message = (err as BusinessError).message;\n      const code = (err as BusinessError).code;\n      hilog.error(0x0000, `ScreenTimeGuard:stopGuardStrategy`, `stopGuardStrategy failed with error code: ${code}, message: ${message}`);\n   }\n}\n"
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
251679(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799524-0e0c70ae537c542b2c0c1991f814439e.png");

},
75448(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479173-e00a626586978961cffafef17bde7dcd.png");

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