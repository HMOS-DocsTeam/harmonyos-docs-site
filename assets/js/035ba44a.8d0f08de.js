"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["439172"], {
52828(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_form_kit_form_js_ui_js_ui_widget_overview_js_ui_widget_overview_md_035_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-form-kit-form-js-ui-js-ui-widget-overview-js-ui-widget-overview-md-035.json
var site_docs_form_kit_form_js_ui_js_ui_widget_overview_js_ui_widget_overview_md_035_namespaceObject = JSON.parse('{"id":"form-kit/form-js-ui/js-ui-widget-overview/js-ui-widget-overview","title":"JS卡片概述","description":"JS卡片是使用类Web范式（HML+CSS+JSON）开发页面的卡片，现在已经支持FA模型和Stage模型两种应用模型。开发指导请参见JS卡片开发指导（Stage模型）和JS卡片开发指导（FA模型）。在开发新卡片时，推荐采用ArkTS声明式来构建UI，声明式和类web范式差异点可参考ArkUI简介。","source":"@site/docs/form-kit/form-js-ui/js-ui-widget-overview/js-ui-widget-overview.md","sourceDirName":"form-kit/form-js-ui/js-ui-widget-overview","slug":"/form-kit/form-js-ui/js-ui-widget-overview/","permalink":"/harmonyos-docs-site/form-kit/form-js-ui/js-ui-widget-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"JS卡片概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-ui-widget-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkTS卡片适配常见问题","permalink":"/harmonyos-docs-site/form-kit/arkts-ui/arkts-ui-widget-adapt-faq/"},"next":{"title":"JS卡片开发指导（Stage模型）","permalink":"/harmonyos-docs-site/form-kit/form-js-ui/js-ui-widget-development/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/form-kit/form-js-ui/js-ui-widget-overview/js-ui-widget-overview.md


const frontMatter = {
	title: 'JS卡片概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-ui-widget-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'JS卡片概述';

const assets = {

};



const toc = [{
  "value": "实现原理",
  "id": "实现原理",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "js卡片概述",
        children: "JS卡片概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JS卡片是使用类Web范式（HML+CSS+JSON）开发页面的卡片，现在已经支持FA模型和Stage模型两种", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/application-models",
        children: "应用模型"
      }), "。开发指导请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/form-js-ui/js-ui-widget-development",
        children: "JS卡片开发指导（Stage模型）"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/form-kit/form-js-ui/widget-development-fa",
        children: "JS卡片开发指导（FA模型）"
      }), "。在开发新卡片时，推荐采用ArkTS声明式来构建UI，声明式和类web范式差异点可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkui-overview",
        children: "ArkUI简介"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JS卡片实现原理如图1所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " JS卡片实现原理"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(302237)/* ["default"] */.A) + "",
        width: "1558",
        height: "838"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卡片使用方包含以下模块："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片使用：包含卡片的创建、删除、请求更新等操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通信适配层：由HarmonyOS SDK提供，负责与卡片管理服务通信，用于将卡片的相关操作指令发送到卡片管理服务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卡片管理服务包含以下模块："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "周期性刷新：在卡片添加后，根据卡片的刷新策略启动定时任务周期性触发卡片的刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片缓存管理：在卡片添加到卡片管理服务后，对卡片的视图信息进行缓存，以便下次获取卡片时可以直接返回缓存数据，降低时延。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片生命周期管理：对于卡片切换到后台或者被遮挡时，暂停卡片的刷新；以及卡片的升级/卸载场景下对卡片数据的更新和清理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片使用方对象管理：对卡片使用方的RPC对象进行管理，用于使用方请求进行校验以及对卡片更新后的回调处理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通信适配层：负责与卡片使用方和提供方进行RPC通信。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卡片提供方包含以下模块："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片服务：由卡片提供方开发者实现，开发者实现生命周期处理创建卡片、更新卡片以及删除卡片等请求，提供相应的卡片服务。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "卡片提供方实例管理模块：由卡片提供方开发者实现，负责对卡片管理服务分配的卡片实例进行持久化管理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通信适配层：由HarmonyOS SDK提供，负责与卡片管理服务通信，用于将卡片的更新数据主动推送到卡片管理服务。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(811742)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实际开发时只需要作为卡片提供方进行卡片内容的开发，卡片使用方和卡片管理服务由系统自动处理。"
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
302237(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438359-2b4771fb1ba6ffe253c025f7470270ba.png");

},
811742(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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