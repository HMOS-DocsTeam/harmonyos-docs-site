"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["430758"], {
581902(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_insight_intent_insight_intent_development_insight_intent_definition_insight_intent_definition_md_481_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-insight-intent-insight-intent-development-insight-intent-definition-insight-intent-definition-md-481.json
var site_docs_ability_kit_stage_model_development_insight_intent_insight_intent_development_insight_intent_definition_insight_intent_definition_md_481_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-definition/insight-intent-definition","title":"意图开发概述","description":"开发者可以通过如下两种方式来定义意图：","source":"@site/docs/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-definition/insight-intent-definition.md","sourceDirName":"ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-definition","slug":"/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-definition/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-definition/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"意图开发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/insight-intent-definition","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"意图框架概述","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/insight-intent/insight-intent-overview/"},"next":{"title":"使用配置文件开发意图","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-config-development/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-definition/insight-intent-definition.md


const frontMatter = {
	title: '意图开发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/insight-intent-definition',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '意图开发概述';

const assets = {

};



const toc = [{
  "value": "接入标准意图",
  "id": "接入标准意图",
  "level": 2
}, {
  "value": "创建自定义意图",
  "id": "创建自定义意图",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "意图开发概述",
        children: "意图开发概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过如下两种方式来定义意图："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "意图定义方式"
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
              href: "#%E6%8E%A5%E5%85%A5%E6%A0%87%E5%87%86%E6%84%8F%E5%9B%BE",
              children: "接入标准意图"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由系统预定义调用规范，包含统一的意图参数格式定义与意图执行结果格式定义。系统会根据装饰器的schema字段与intentVersion字段，在标准意图列表查询是否存在匹配的意图。标准意图列表以Json Schema文件形式存储在SDK中。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用功能场景，若开发者提供的功能在标准意图中已有定义，可选择接入标准意图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%88%9B%E5%BB%BA%E8%87%AA%E5%AE%9A%E4%B9%89%E6%84%8F%E5%9B%BE",
              children: "创建自定义意图"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由应用开发者定义调用规范，用于满足标准意图未覆盖的场景。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "若开发者提供的功能未在标准意图中定义，可选择创建自定义意图。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入标准意图",
      children: "接入标准意图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用功能符合系统预定义的标准意图时（例如播放音乐、导航等），开发者可直接接入标准意图，避免重复定义规范。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前发布的标准意图规范参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/insight-intent/insight-intent-development/insight-intent-access-specifications",
        children: "附录：标准意图接入规范"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每个意图均包含如下几个要素。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "意图名称：意图的唯一标识。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "意图版本：意图的兼容性控制。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数类型定义：统一的意图参数格式定义。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "结果类型定义：统一的意图执行结果格式定义。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建自定义意图",
      children: "创建自定义意图"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当现有标准意图定义无法覆盖应用的功能时，开发者可以自定义意图。系统入口需要解析开发者定义的意图描述和参数规范，意图匹配用户语义后，触发意图执行。自定义意图的属性通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-insightintentdecorator/js-apis-app-ability-insightintentdecorator#intentdecoratorinfo",
        children: "IntentDecoratorInfo"
      }), "及其子类定义，需要包含如下要素："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "大语言模型描述：自然语言描述意图功能，供系统入口解析语义。该描述应尽可能的精确并全面，涵盖该意图提供的能力范围，包括功能定义、约束限制等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数类型定义：自定义的意图参数格式定义，符合Json Schema规范。参数类型定义需要包含参数的功能描述、参数类型，定义参数的必选或可选。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "结果类型定义：自定义的意图执行结果格式定义，符合Json Schema规范。结果类型定义需要包含意图执行结果的类型。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，应用提供查询天气能力时，模型描述可以描述为“通过输入经纬度坐标信息，查询对应地理位置的实时天气情况。”。"
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