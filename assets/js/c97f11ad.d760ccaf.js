"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["248230"], {
32770(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_launch_page_launch_page_resource_config_launch_page_resource_config_md_c97_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-launch-page-launch-page-resource-config-launch-page-resource-config-md-c97.json
var site_docs_arkui_window_manager_launch_page_launch_page_resource_config_launch_page_resource_config_md_c97_namespaceObject = JSON.parse('{"id":"arkui/window-manager/launch-page/launch-page-resource-config/launch-page-resource-config","title":"启动页资源分类配置","description":"启动页资源配置与其他资源配置相同，支持资源分类配置，可针对不同的场景配置不同资源，常用于在深色模式或不同设备类型上配置不同的启动页内容。","source":"@site/docs/arkui/window-manager/launch-page/launch-page-resource-config/launch-page-resource-config.md","sourceDirName":"arkui/window-manager/launch-page/launch-page-resource-config","slug":"/arkui/window-manager/launch-page/launch-page-resource-config/","permalink":"/harmonyos-docs-site/arkui/window-manager/launch-page/launch-page-resource-config/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"启动页资源分类配置","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/launch-page-resource-config","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"配置应用启动页","permalink":"/harmonyos-docs-site/arkui/window-manager/launch-page/launch-page-config/"},"next":{"title":"窗口开发术语","permalink":"/harmonyos-docs-site/arkui/window-manager/window-terminology/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/launch-page/launch-page-resource-config/launch-page-resource-config.md


const frontMatter = {
	title: '启动页资源分类配置',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/launch-page-resource-config',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '启动页资源分类配置';

const assets = {

};



const toc = [{
  "value": "配置深色模式启动页",
  "id": "配置深色模式启动页",
  "level": 2
}, {
  "value": "配置不同设备启动页",
  "id": "配置不同设备启动页",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "启动页资源分类配置",
        children: "启动页资源分类配置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动页资源配置与其他资源配置相同，支持资源分类配置，可针对不同的场景配置不同资源，常用于在深色模式或不同设备类型上配置不同的启动页内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置深色模式启动页",
      children: "配置深色模式启动页"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在API version 20之前，启动页深浅色模式仅支持跟随系统深浅色模式。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 20开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/window-manager/launch-page/launch-page-config#%E9%85%8D%E7%BD%AE%E5%A2%9E%E5%BC%BA%E5%90%AF%E5%8A%A8%E9%A1%B5",
          children: "增强启动页"
        }), "的startWindowColorModeType字段配置同进程下拉起的UIAbility的启动页深浅色模式跟随应用深浅色模式。对于未配置场景，启动页深浅色模式跟随系统深浅色模式。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/window-manager/launch-page/launch-page-config#%E9%85%8D%E7%BD%AE%E5%A2%9E%E5%BC%BA%E5%90%AF%E5%8A%A8%E9%A1%B5",
        children: "配置增强启动页"
      }), "的背景色为例：startWindowBackgroundColor字段值为\"$color:start_window_background\"，按如下方式在resources目录下分别配置字段值对应的颜色值，即可对深色模式生效。其他字段配置方式与背景色相同，在resources目录中配置其字段值对应的资源即可。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改resources/base/element/color.json中，对应配置项start_window_background的颜色值，对应一般情况下的默认启动页背景色，示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"color\": [\n    {\n      \"name\": \"start_window_background\",\n      \"value\": \"#FFFFFFFF\"\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改resources/dark/element/color.json中，对应配置项start_window_background的颜色值，对应深色模式下的默认启动页背景色，示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"color\": [\n    {\n      \"name\": \"start_window_background\",\n      \"value\": \"#FF000000\"\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置不同设备启动页",
      children: "配置不同设备启动页"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与深色模式类似，通过在resources目录新建car、tablet等资源目录，配置上述字段对应的资源，则可在对应设备上配置显示不同的启动页内容，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/resource-categories-and-access#%E5%88%9B%E5%BB%BA%E8%B5%84%E6%BA%90%E7%9B%AE%E5%BD%95%E5%92%8C%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6",
        children: "创建资源目录和资源文件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如未针对特定场景的启动页字段配置资源文件，则该场景下默认以base目录中的对应资源文件为准。"
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