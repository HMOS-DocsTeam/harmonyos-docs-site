"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["496973"], {
811557(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_screen_time_guard_kit_guide_screentimeguard_guard_strategy_manage_screentimeguard_query_guard_strategies_screentimeguard_query_guard_strategies_md_5a8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-screen-time-guard-kit-guide-screentimeguard-guard-strategy-manage-screentimeguard-query-guard-strategies-screentimeguard-query-guard-strategies-md-5a8.json
var site_docs_screen_time_guard_kit_guide_screentimeguard_guard_strategy_manage_screentimeguard_query_guard_strategies_screentimeguard_query_guard_strategies_md_5a8_namespaceObject = JSON.parse('{"id":"screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-query-guard-strategies/screentimeguard-query-guard-strategies","title":"查询策略","description":"场景介绍","source":"@site/docs/screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-query-guard-strategies/screentimeguard-query-guard-strategies.md","sourceDirName":"screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-query-guard-strategies","slug":"/screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-query-guard-strategies/","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-query-guard-strategies/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"查询策略","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-query-guard-strategies","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"修改策略","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-update-guard-strategy/"},"next":{"title":"删除策略","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-remove-guard-strategy/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/screen-time-guard-kit-guide/screentimeguard-guard-strategy-manage/screentimeguard-query-guard-strategies/screentimeguard-query-guard-strategies.md


const frontMatter = {
	title: '查询策略',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-query-guard-strategies',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '查询策略';

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
        id: "查询策略",
        children: "查询策略"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户希望查看现有的屏幕时间守护规则时，可以调用查询管控策略的接口。通过成功调用查询策略接口，用户可以浏览已创建的所有管控策略，如查看各个应用的停用起止时间或可使用时长。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(17829)/* ["default"] */.A) + "",
        width: "657",
        height: "591"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "流程说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用调用查询管控策略的接口，拉起健康使用设备查询本应用是否已申请权限，以及用户是否对本应用授权。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若没有权限，则抛出相应错误码；若有权限，则返回对应应用下的所有管控策略。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询策略的关键接口如下表所示："
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
              href: "/ref/screen-time-guard-api/screentimeguard-arkts/screentimeguard-guardservice/screentimeguard-guardservice#queryguardstrategies",
              children: "queryGuardStrategies"
            }), "(): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/screen-time-guard-api/screentimeguard-arkts/screentimeguard-guardservice/screentimeguard-guardservice#guardstrategy",
              children: "GuardStrategy"
            }), "[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询该应用下的所有管控策略。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发前提",
      children: "开发前提"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查询管控策略需要申请用户授权，请先参考", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "import { guardService } from '@kit.ScreenTimeGuardKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用queryGuardStrategy，查询对应应用下的所有管控策略。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function testQueryGuardStrategies() {\n   try {\n      let guardStrategy: guardService.GuardStrategy[] = await guardService.queryGuardStrategies();\n      guardStrategy.forEach((element) => {\n         hilog.info(0x0000, `ScreenTimeGuard:queryGuardStrategies`, `${element.name}`)\n      })\n   } catch (err) {\n      const message = (err as BusinessError).message;\n      const code = (err as BusinessError).code;\n      hilog.error(0x0000, `ScreenTimeGuard:queryGuardStrategies`, `queryGuardStrategies failed with error code: ${code}, message: ${message}`);\n   }\n}\n"
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
17829(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959170-2801f831a389b518645b776a4a998ed0.png");

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