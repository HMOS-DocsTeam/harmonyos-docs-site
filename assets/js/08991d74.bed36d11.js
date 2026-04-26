"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["60304"], {
473216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_fa_model_development_fa_model_application_components_serviceability_serviceability_lifecycle_serviceability_lifecycle_md_089_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-fa-model-development-fa-model-application-components-serviceability-serviceability-lifecycle-serviceability-lifecycle-md-089.json
var site_docs_ability_kit_fa_model_development_fa_model_application_components_serviceability_serviceability_lifecycle_serviceability_lifecycle_md_089_namespaceObject = JSON.parse('{"id":"ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-lifecycle/serviceability-lifecycle","title":"ServiceAbility的生命周期","description":"开发者可以根据业务场景实现service.js/service.ets中的生命周期相关接口。ServiceAbility生命周期接口说明见下表。","source":"@site/docs/ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-lifecycle/serviceability-lifecycle.md","sourceDirName":"ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-lifecycle","slug":"/ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-lifecycle/","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-lifecycle/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"ServiceAbility的生命周期","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/serviceability-lifecycle","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ServiceAbility组件配置","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-configuration/"},"next":{"title":"创建ServiceAbility","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/serviceability/create-serviceability/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/fa-model-development/fa-model-application-components/serviceability/serviceability-lifecycle/serviceability-lifecycle.md


const frontMatter = {
	title: 'ServiceAbility的生命周期',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/serviceability-lifecycle',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ServiceAbility的生命周期';

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
        id: "serviceability的生命周期",
        children: "ServiceAbility的生命周期"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以根据业务场景实现service.js/service.ets中的生命周期相关接口。ServiceAbility生命周期接口说明见下表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " ServiceAbility生命周期接口说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onStart(): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该方法在创建ServiceAbility的时候调用，用于Service的初始化，在ServiceAbility的整个生命周期只会调用一次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onCommand(want: Want, startId: number): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Service创建完成之后调用，该方法在客户端每次启动该Service时都会调用，开发者可以在该方法中做一些调用统计、初始化类的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onConnect(want: Want): rpc.RemoteObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在连接ServiceAbility时调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDisconnect(want: Want): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在与已连接的ServiceAbility断开连接时调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onStop(): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在ServiceAbility销毁时调用。开发者应通过实现此方法来清理资源，如关闭线程、注册的侦听器等。"
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