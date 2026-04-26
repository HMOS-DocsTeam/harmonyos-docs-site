"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["236719"], {
470575(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_insight_intent_insight_intent_overview_insight_intent_overview_md_00f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-insight-intent-insight-intent-overview-insight-intent-overview-md-00f.json
var site_docs_ability_kit_stage_model_development_insight_intent_insight_intent_overview_insight_intent_overview_md_00f_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/insight-intent/insight-intent-overview/insight-intent-overview","title":"意图框架概述","description":"场景介绍","source":"@site/docs/ability-kit/stage-model-development/insight-intent/insight-intent-overview/insight-intent-overview.md","sourceDirName":"ability-kit/stage-model-development/insight-intent/insight-intent-overview","slug":"/ability-kit/stage-model-development/insight-intent/insight-intent-overview/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/insight-intent/insight-intent-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"意图框架概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/insight-intent-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Stage模型应用配置文件","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/config-file-stage/"},"next":{"title":"意图开发概述","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-definition/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/insight-intent/insight-intent-overview/insight-intent-overview.md


const frontMatter = {
	title: '意图框架概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/insight-intent-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '意图框架概述';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "运行机制",
  "id": "运行机制",
  "level": 2
}, {
  "value": "意图开发方式",
  "id": "意图开发方式",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
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
        id: "意图框架概述",
        children: "意图框架概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过意图框架提供的意图开发功能，将应用功能以“意图”形式集成至系统入口。用户通过系统入口（如语音助手、智能推荐卡片）触发意图执行，即可便捷使用应用提供的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，开发者将出行导航功能接入意图框架后，用户可通过自然语言指令（如“骑行导航到公司”）触发系统入口，系统解析指令并调用对应意图，实现出行导航的目的。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["目前最常用的系统入口是小艺建议，通过小艺建议集成意图框架参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/intents-kit-guide/intents-introduction",
        children: "Intents Kit简介"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "意图：系统功能调用的逻辑单元，通常由应用的核心功能封装而成。系统入口通过解析用户的自然语言输入来触发对应的业务处理流程。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "意图参数：触发意图执行时，由系统入口传递给应用的数据。参数格式需遵循意图定义。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "意图执行结果：意图执行完毕后，应用返回给系统入口的数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "意图实体：意图执行过程中涉及的关键信息对象，可以承载意图参数和意图执行结果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以“出行导航”意图为例，导航需要的参数，例如出行方式、出发地和目的地、途径点等信息均为意图参数，导航结果通过意图执行结果返回，意图参数和意图执行结果可以通过意图实体承载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行机制",
      children: "运行机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "意图框架的运作主要涉及开发者侧与系统入口侧的协作："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "意图开发：开发者基于应用功能，通过配置文件或装饰器定义意图、意图参数、意图执行结果等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "意图调试：开发完成后，开发者利用意图框架提供的调试工具验证意图定义与意图执行的正确性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "意图查询：系统入口可以查询注册到意图框架的意图及其定义。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "意图执行：系统入口根据用户请求匹配到相应意图后，触发该意图的执行，并将必要的参数传递给应用。应用执行对应功能并返回执行结果。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(288208)/* ["default"] */.A) + "",
        width: "945",
        height: "567"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "意图开发方式",
      children: "意图开发方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "意图框架提供两种开发方式，通过配置文件开发意图以及通过装饰器开发意图，说明如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "意图开发方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-config-development",
              children: "通过配置文件开发意图"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者通过配置文件定义意图和意图参数，意图参数需要和系统入口协商一致。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 适用版本：API version 11及以上版本。  - 开发实现：意图的执行需要和Ability组件绑定，需要新增意图配置文件和意图执行文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-decorator-development",
              children: "通过装饰器开发意图"
            }), "（推荐）"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者通过代码定义意图和意图参数，支持接入标准意图或自定义意图。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 适用版本：API version 20及以上版本。  - 开发实现：支持将现有功能直接定义为意图，开发更加便捷。同时，也支持新增意图执行文件。"
          })]
        })]
      })]
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
288208(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797862-2ae6af073a0eea72907f9cef811a427a.png");

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