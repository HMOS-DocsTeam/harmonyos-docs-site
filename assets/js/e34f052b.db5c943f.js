"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["672713"], {
324398(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_fa_model_development_fa_model_application_components_pageability_redirection_rules_redirection_rules_md_e34_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-fa-model-development-fa-model-application-components-pageability-redirection-rules-redirection-rules-md-e34.json
var site_docs_ability_kit_fa_model_development_fa_model_application_components_pageability_redirection_rules_redirection_rules_md_e34_namespaceObject = JSON.parse('{"id":"ability-kit/fa-model-development/fa-model-application-components/pageability/redirection-rules/redirection-rules","title":"跳转规则","description":"一般情况下，应用中的界面跳转由用户触发，应用本身通过startAbility启动跳转其他界面。","source":"@site/docs/ability-kit/fa-model-development/fa-model-application-components/pageability/redirection-rules/redirection-rules.md","sourceDirName":"ability-kit/fa-model-development/fa-model-application-components/pageability/redirection-rules","slug":"/ability-kit/fa-model-development/fa-model-application-components/pageability/redirection-rules/","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/redirection-rules/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"跳转规则","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/redirection-rules","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"申请授权","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/request-permissions/"},"next":{"title":"ServiceAbility组件概述","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/fa-model-development/fa-model-application-components/pageability/redirection-rules/redirection-rules.md


const frontMatter = {
	title: '跳转规则',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/redirection-rules',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '跳转规则';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
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
        id: "跳转规则",
        children: "跳转规则"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一般情况下，应用中的界面跳转由用户触发，应用本身通过startAbility启动跳转其他界面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PageAbility作为可见Ability，可以通过startAbility启动有界面的且对外可见的Ability。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可通过在config.json中设置\"abilities\"中的\"visible\"属性设置Ability是否可由其他应用的组件启动，\"visible\"属性的具体参数和意义如下表所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " visible属性说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "visible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Ability是否可以被其他应用调用。  true：该Ability可以被任何应用调用。  false：该Ability只能被同一应用的其他组件调用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省时默认属性值为\"false\"。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果需设置当前Ability可由任何应用访问，对应config.json文件的示例代码如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    ...\n    \"abilities\": [\n      {\n        \"visible\": \"true\",\n        ...\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果应用中的Ability包含skills过滤器，建议此属性设置为\"true\"，以允许其他应用通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/want/explicit-implicit-want-mappings",
        children: "隐式调用"
      }), "启动该Ability。如果此属性设为\"false\"，其他应用尝试启动该Ability时系统会返回PERMISSION_DENIED。这种情况下系统应用可以通过申请START_INVISIBLE_ABILITY权限启动visible为false的组件，例如系统桌面、语音助手、搜索助手等。"]
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