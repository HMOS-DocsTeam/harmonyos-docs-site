"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["654944"], {
400707(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_modifier_arkts_user_defined_modifier_arkts_user_defined_modifier_md_fa7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-user-defined-capabilities-arkts-modifier-arkts-user-defined-modifier-arkts-user-defined-modifier-md-fa7.json
var site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_modifier_arkts_user_defined_modifier_arkts_user_defined_modifier_md_fa7_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-modifier/arkts-user-defined-modifier","title":"自定义扩展能力概述","description":"ArkUI框架提供一系列基于Modifier的自定义扩展能力，通过与UI分离的方式，对已有UI组件的属性、手势、内容进行扩展修改，以满足开发者在不改变UI组件底层实现的情况下，快速调整UI组件外观、行为等需求。自定义扩展包括AttributeModifier、GestureModifier、ContentModifier等。其中AttributeModifier和AttributeUpdater允许开发者通过自定义类设置属性，扩展了属性设置的实现方式，能够与组件属性设置方式混合使用。例如，使用自定义扩展处理特定的逻辑或复杂交互，使用组件设置方式处理简单静态属性等。","source":"@site/docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-modifier/arkts-user-defined-modifier.md","sourceDirName":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-modifier","slug":"/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-modifier/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-modifier/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"自定义扩展能力概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-modifier","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义绘制修改器 (DrawModifier)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-draw/arkts-user-defined-extension-drawmodifier/"},"next":{"title":"内容修改器 (ContentModifier)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-common-attributes-content-modifier/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-modifier/arkts-user-defined-modifier.md


const frontMatter = {
	title: '自定义扩展能力概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-modifier',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义扩展能力概述';

const assets = {

};



const toc = [{
  "value": "AttributeModifier",
  "id": "attributemodifier",
  "level": 2
}, {
  "value": "AttributeUpdater",
  "id": "attributeupdater",
  "level": 2
}, {
  "value": "ContentModifier",
  "id": "contentmodifier",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "自定义扩展能力概述",
        children: "自定义扩展能力概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI框架提供一系列基于Modifier的自定义扩展能力，通过与UI分离的方式，对已有UI组件的属性、手势、内容进行扩展修改，以满足开发者在不改变UI组件底层实现的情况下，快速调整UI组件外观、行为等需求。自定义扩展包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributemodifier",
        children: "AttributeModifier"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-gesture-modifier/ts-universal-attributes-gesture-modifier#gesturemodifier-1",
        children: "GestureModifier"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-common-attributes-content-modifier",
        children: "ContentModifier"
      }), "等。其中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributemodifier",
        children: "AttributeModifier"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributeupdater",
        children: "AttributeUpdater"
      }), "允许开发者通过自定义类设置属性，扩展了属性设置的实现方式，能够与组件属性设置方式混合使用。例如，使用自定义扩展处理特定的逻辑或复杂交互，使用组件设置方式处理简单静态属性等。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attributemodifier",
      children: "AttributeModifier"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["声明式语法引入的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-style",
        children: "@Styles"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend",
        children: "@Extend"
      }), "两个装饰器，虽然可以解决复用相同自定义样式的问题，但是使用场景存在一定局限性，如无法跨文件导出等。为此，ArkUI引入了AttributeModifier机制，可以通过Modifier对象动态修改属性。与@Styles和@Extend相比，AttributeModifier提供了更强的能力和灵活性，且在持续完善全量的属性和事件设置能力，因此推荐优先使用AttributeModifier。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attributeupdater",
      children: "AttributeUpdater"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AttributeUpdater是一个特殊的AttributeModifier，除了继承AttributeModifier的能力，还提供了获取属性对象的能力。通过属性对象可以不经过状态变量，直接更新对应属性。开发者可以通过AttributeUpdater实现自定义的更新策略，进一步提高属性更新的性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contentmodifier",
      children: "ContentModifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ContentModifier提供自定义绘制组件内容区的能力。当开发者期望自定义组件的内容区时，比如CheckBox的内部显示一个五角星等场景时，可以使用此功能。"
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