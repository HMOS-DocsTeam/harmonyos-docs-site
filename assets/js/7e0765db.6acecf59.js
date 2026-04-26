"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["83502"], {
841151(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_building_ui_ui_js_building_layout_ui_js_building_ui_layout_external_container_ui_js_building_ui_layout_external_container_md_7e0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-building-ui-ui-js-building-layout-ui-js-building-ui-layout-external-container-ui-js-building-ui-layout-external-container-md-7e0.json
var site_docs_arkui_ui_js_dev_ui_js_building_ui_ui_js_building_layout_ui_js_building_ui_layout_external_container_ui_js_building_ui_layout_external_container_md_7e0_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-external-container/ui-js-building-ui-layout-external-container","title":"添加容器","description":"要将页面的基本元素组装在一起，需要使用容器组件。在页面布局中常用到三种容器组件，分别是div、list和tabs。在页面结构相对简单时，可以直接用div作为容器，因为div作为单纯的布局容器，可以支持多种子组件，使用起来更为方便。","source":"@site/docs/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-external-container/ui-js-building-ui-layout-external-container.md","sourceDirName":"arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-external-container","slug":"/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-external-container/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-external-container/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"添加容器","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-building-ui-layout-external-container","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"添加留言区域","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-comment/"},"next":{"title":"添加交互","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-interactions/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-external-container/ui-js-building-ui-layout-external-container.md


const frontMatter = {
	title: '添加容器',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-building-ui-layout-external-container',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '添加容器';

const assets = {

};



const toc = [{
  "value": "List组件",
  "id": "list组件",
  "level": 2
}, {
  "value": "Tabs组件",
  "id": "tabs组件",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "添加容器",
        children: "添加容器"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "要将页面的基本元素组装在一起，需要使用容器组件。在页面布局中常用到三种容器组件，分别是div、list和tabs。在页面结构相对简单时，可以直接用div作为容器，因为div作为单纯的布局容器，可以支持多种子组件，使用起来更为方便。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "list组件",
      children: "List组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当页面结构较为复杂时，如果使用div循环渲染，容易出现卡顿，因此推荐使用list组件代替div组件实现长列表布局，从而实现更加流畅的列表滚动体验。需要注意的是，list仅支持list-item作为子组件，具体的使用示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<list class=\"list\">\n  <list-item type=\"listItem\" for=\"{{textList}}\">\n    <text class=\"desc-text\">{{$item.value}}</text>\n  </list-item>\n</list>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.desc-text {\n  width: 683.3px;\n  font-size: 35.4px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    textList:  [{value: 'JS FA'}],\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为避免示例代码过长，以上示例的list中只包含一个list-item，list-item中只有一个text组件。在实际应用中可以在list中加入多个list-item，同时list-item下可以包含多个其他子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tabs组件",
      children: "Tabs组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当页面经常需要动态加载时，推荐使用tabs组件。tabs组件支持change事件，在页签切换后触发。tabs组件仅支持一个tab-bar和一个tab-content。具体的使用示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<tabs>\n  <tab-bar>\n    <text>Home</text>\n    <text>Index</text>\n    <text>Detail</text>\n  </tab-bar>\n  <tab-content>\n    <image src=\"{{homeImage}}\"></image>\n    <image src=\"{{indexImage}}\"></image>\n    <image src=\"{{detailImage}}\"></image>\n  </tab-content>\n</tabs>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    homeImage: '/common/home.png',\n    indexImage: '/common/index.png',\n    detailImage: '/common/detail.png',\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tab-content组件用来展示页签的内容区，高度默认充满tabs剩余空间。"
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