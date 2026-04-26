"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["76700"], {
250624(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_fa_model_development_process_model_fa_process_model_fa_md_dc4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-fa-model-development-process-model-fa-process-model-fa-md-dc4.json
var site_docs_ability_kit_fa_model_development_process_model_fa_process_model_fa_md_dc4_namespaceObject = JSON.parse('{"id":"ability-kit/fa-model-development/process-model-fa/process-model-fa","title":"进程模型概述","description":"系统的进程模型如下图所示：","source":"@site/docs/ability-kit/fa-model-development/process-model-fa/process-model-fa.md","sourceDirName":"ability-kit/fa-model-development/process-model-fa","slug":"/ability-kit/fa-model-development/process-model-fa/","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/process-model-fa/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"进程模型概述","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/process-model-fa","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"组件启动规则（FA模型）","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/component-startup-rules-fa/"},"next":{"title":"线程模型","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/thread-model-fa/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/fa-model-development/process-model-fa/process-model-fa.md


const frontMatter = {
	title: '进程模型概述',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/process-model-fa',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '进程模型概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "进程模型概述",
        children: "进程模型概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统的进程模型如下图所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用中（同一包名）的所有PageAbility、ServiceAbility、DataAbility、FormAbility运行在同一个独立进程中，即图中绿色部分的“Main Process”。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "WebView拥有独立的渲染进程，即图中黄色部分的“Render Process”。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "图1"
            })
          }), " 进程模型示意图"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(253082)/* ["default"] */.A) + "",
        width: "546",
        height: "276"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于当前的进程模型，针对应用间存在多个进程的情况，系统提供了如下进程间通信机制："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "公共事件机制：多用于一对多的通信场景，公共事件发布者可能存在多个订阅者同时接收事件。"
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
253082(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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