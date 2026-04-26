"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["848111"], {
177663(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_extend_components_arkts_extend_components_overview_arkts_extend_components_overview_md_79d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-paradigm-basic-syntax-arkts-extend-components-arkts-extend-components-overview-arkts-extend-components-overview-md-79d.json
var site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_extend_components_arkts_extend_components_overview_arkts_extend_components_overview_md_79d_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend-components-overview/arkts-extend-components-overview","title":"组件扩展概述","description":"ArkUI使用@Builder装饰器为开发者提供代码精简方案。该装饰器通过模块化封装简化UI开发流程，并衍生出@BuilderParam、@LocalBuilder装饰器和wrapBuilder机制，构成可复用的UI结构体系。","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend-components-overview/arkts-extend-components-overview.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend-components-overview","slug":"/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend-components-overview/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend-components-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"组件扩展概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-extend-components-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义组件冻结功能（V2）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freezev2/"},"next":{"title":"@Builder装饰器：自定义构建函数","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend-components-overview/arkts-extend-components-overview.md


const frontMatter = {
	title: '组件扩展概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-extend-components-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '组件扩展概述';

const assets = {

};



const toc = [{
  "value": "@Builder装饰器",
  "id": "builder装饰器",
  "level": 2
}, {
  "value": "@LocalBuilder装饰器",
  "id": "localbuilder装饰器",
  "level": 2
}, {
  "value": "@BuilderParam装饰器",
  "id": "builderparam装饰器",
  "level": 2
}, {
  "value": "wrapBuilder机制",
  "id": "wrapbuilder机制",
  "level": 2
}, {
  "value": "mutableBuilder机制",
  "id": "mutablebuilder机制",
  "level": 2
}, {
  "value": "@Styles装饰器",
  "id": "styles装饰器",
  "level": 2
}, {
  "value": "@Extend装饰器",
  "id": "extend装饰器",
  "level": 2
}, {
  "value": "stateStyles机制",
  "id": "statestyles机制",
  "level": 2
}, {
  "value": "@AnimatableExtend装饰器",
  "id": "animatableextend装饰器",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "组件扩展概述",
        children: "组件扩展概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI使用@Builder装饰器为开发者提供代码精简方案。该装饰器通过模块化封装简化UI开发流程，并衍生出@BuilderParam、@LocalBuilder装饰器和wrapBuilder机制，构成可复用的UI结构体系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(497197)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Builder装饰器是@BuilderParam装饰器、@LocalBuilder装饰器和wrapBuilder机制的基石。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "builder装饰器",
      children: "@Builder装饰器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "@Builder装饰器"
      }), "专为构建模块化、可复用的UI结构而设计，其内部禁止定义状态变量和调用组件生命周期方法，仅支持通过参数与调用方进行数据交互。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "localbuilder装饰器",
      children: "@LocalBuilder装饰器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用@Builder实现组件间数据传递时，开发者需注意组件层级关系。组件树中的父子关系可能与状态管理的父子关系产生不一致。为此，框架提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-localbuilder",
        children: "@LocalBuilder装饰器"
      }), "来解决这一特定问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "builderparam装饰器",
      children: "@BuilderParam装饰器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当多个场景共用同一个@Builder函数时，若需要为特定场景扩展功能（类似slot占位符机制），可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builderparam",
        children: "@BuilderParam装饰器"
      }), "实现，该装饰器专门用于接收并封装@Builder函数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wrapbuilder机制",
      children: "wrapBuilder机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当页面中存在多个不同UI结构的全局@Builder函数时，维护成本较高。框架提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder",
        children: "wrapBuilder"
      }), "机制来简化代码维护工作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mutablebuilder机制",
      children: "mutableBuilder机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-wrapbuilder",
        children: "wrapBuilder"
      }), "不支持二次赋值， 即动态切换@Builder, UI不会发生变化。框架提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-mutablebuilder",
        children: "mutableBuilder"
      }), "用于支持@Builder动态切换。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "styles装饰器",
      children: "@Styles装饰器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-style",
        children: "@Styles"
      }), "用于定义组件重用样式，可将多条通用样式设置提炼成一个方法，直接在组件声明的位置调用。通过@Styles装饰器可以快速定义并复用自定义样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extend装饰器",
      children: "@Extend装饰器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend",
        children: "@Extend"
      }), "用于定义组件重用样式，可将指定组件的私有属性、私有事件设置提炼成一个方法，直接在组件声明的位置调用。通过@Extend装饰器可以快速定义并复用指定组件的自定义样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "statestyles机制",
      children: "stateStyles机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-statestyles",
        children: "stateStyles"
      }), "可以依据组件的内部状态的不同，快速设置不同样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "animatableextend装饰器",
      children: "@AnimatableExtend装饰器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-animatable-extend",
        children: "@AnimatableExtend"
      }), "装饰器用于自定义可动画的属性方法，在这个属性方法中修改组件不可动画的属性。在动画执行过程中，通过逐帧回调函数修改不可动画属性值，让不可动画属性也能实现动画效果。也可通过逐帧回调函数修改可动画属性的值，实现逐帧布局的效果。"]
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
497197(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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