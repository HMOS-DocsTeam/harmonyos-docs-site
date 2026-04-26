"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["131060"], {
235502(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_fa_model_development_fa_model_application_components_pageability_pageability_configuration_pageability_configuration_md_5f9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-fa-model-development-fa-model-application-components-pageability-pageability-configuration-pageability-configuration-md-5f9.json
var site_docs_ability_kit_fa_model_development_fa_model_application_components_pageability_pageability_configuration_pageability_configuration_md_5f9_namespaceObject = JSON.parse('{"id":"ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-configuration/pageability-configuration","title":"PageAbility组件配置","description":"PageAbility的相关配置在config.json配置文件的\\"module\\"对象的\\"abilities\\"对象中，\\"icon\\"属性表示Ability图标资源文件的索引，\\"label\\"属性表示Ability对用户显示的名称，\\"skills\\"属性表示Ability能够接收的want的特征。","source":"@site/docs/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-configuration/pageability-configuration.md","sourceDirName":"ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-configuration","slug":"/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-configuration/","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-configuration/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"PageAbility组件配置","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pageability-configuration","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"PageAbility组件概述","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-overview/"},"next":{"title":"PageAbility的生命周期","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-lifecycle/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-configuration/pageability-configuration.md


const frontMatter = {
	title: 'PageAbility组件配置',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pageability-configuration',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'PageAbility组件配置';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    p: "p",
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
        id: "pageability组件配置",
        children: "PageAbility组件配置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PageAbility的相关配置在config.json配置文件的\"module\"对象的\"abilities\"对象中，\"icon\"属性表示Ability图标资源文件的索引，\"label\"属性表示Ability对用户显示的名称，\"skills\"属性表示Ability能够接收的want的特征。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " PageAbility部分配置项说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Ability图标资源文件的索引。取值示例：$media:ability_icon。如果在该Ability的skills属性中，actions的取值包含 \"action.system.home\"，entities取值中包含\"entity.system.home\"，则该Ability的icon将同时作为应用的icon。如果存在多个符合条件的Ability，则取位置靠前的Ability的icon作为应用的icon。  说明：应用的\"icon\"和\"label\"是用户可感知配置项，需要区别于当前所有已有的应用\"icon\"或\"label\"（至少有一个不同）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Ability对用户显示的名称。取值可以是Ability名称，也可以是对该名称的资源索引，以支持多语言。如果在该Ability的skills属性中，actions的取值包含 \"action.system.home\"，entities取值中包含\"entity.system.home\"，则该Ability的label将同时作为应用的label。如果存在多个符合条件的Ability，则取位置靠前的Ability的label作为应用的label。  说明： 应用的\"icon\"和\"label\"是用户可感知配置项，需要区别于当前所有已有的应用\"icon\"或\"label\"（至少有一个不同）。该标签为资源文件中定义的字符串的引用，或以\"{}\"包括的字符串。该标签最大长度为255字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "skills"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Ability能够接收的want的特征。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
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