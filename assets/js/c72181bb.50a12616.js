"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["519452"], {
494951(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_card_comp_card_comp_framework_overview_js_service_widget_file_js_service_widget_file_md_c72_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-card-comp-card-comp-framework-overview-js-service-widget-file-js-service-widget-file-md-c72.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_card_comp_card_comp_framework_overview_js_service_widget_file_js_service_widget_file_md_c72_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-file/js-service-widget-file","title":"文件组织","description":"目录结构","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-file/js-service-widget-file.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-file","slug":"/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-file/js-service-widget-file","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-file/js-service-widget-file","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"文件组织","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-file","kit":"应用框架","last_updated":"2026-04-22","slug":"js-service-widget-file"},"sidebar":"ref","previous":{"title":"CanvasRenderingContext2D对象","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-lite-comp/js-lite-canvas-comp/js-lite-components-canvas-canvasrenderingcontext2d/js-lite-components-canvas-canvasrenderingcontext2d"},"next":{"title":"HML语法参考","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/card-comp-syntax/js-service-widget-syntax-hml/js-service-widget-syntax-hml"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-card-comp/card-comp-framework-overview/js-service-widget-file/js-service-widget-file.md


const frontMatter = {
	title: '文件组织',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-service-widget-file',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-service-widget-file'
};
const contentTitle = '文件组织';

const assets = {

};



const toc = [{
  "value": "目录结构",
  "id": "目录结构",
  "level": 2
}, {
  "value": "文件访问规则",
  "id": "文件访问规则",
  "level": 2
}, {
  "value": "配置文件",
  "id": "配置文件",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "文件组织",
        children: "文件组织"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "目录结构",
      children: "目录结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JS服务卡片(entry/src/main/js/Widget)的典型开发目录结构如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "├─widget\n│   ├─common\n│   │   └─widget.png\n│   ├─i18n\n│   │   ├─en-US.json\n│   │   └─zh-CN.json\n│   └─pages\n│       └─index\n│           ├─index.css\n│           ├─index.hml\n│           └─index.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目录结构中文件分类如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: ".hml结尾的HML模板文件，这个文件用来描述卡片页面的模板布局结构。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: ".css结尾的CSS样式文件，这个文件用于描述页面样式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: ".json结尾的JSON配置文件，这个文件用于配置卡片中使用的变量action事件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "各个文件夹的作用："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pages目录用于存放卡片模板页面。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "common目录用于存放公共资源文件，比如：图片资源。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "i18n目录用于配置不同语言场景资源内容，比如应用文本词条，图片路径等资源。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文件访问规则",
      children: "文件访问规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用资源可通过绝对路径或相对路径的方式进行访问，本开发框架中绝对路径以\"/\"开头，相对路径以\"./\"或\"../\"。具体访问规则如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "引用代码文件，需使用相对路径，比如：../common/style.css。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "引用资源文件，推荐使用绝对路径。比如：/common/test.png。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "公共代码文件和资源文件推荐放在common下，通过规则1和规则2进行访问。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CSS样式文件中通过url()函数创建<url>数据类型，如：url(/common/test.png)。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(774381)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当代码文件A需要引用代码文件B时："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果代码文件A和文件B位于同一目录，则代码文件B引用资源文件时可使用相对路径，也可使用绝对路径。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果代码文件A和文件B位于不同目录，则代码文件B引用资源文件时必须使用绝对路径。因为Webpack打包时，代码文件B的目录会发生变化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在json文件中定义的数据为资源文件路径时，需使用绝对路径。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置文件",
      children: "配置文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FA卡片需要在应用配置文件config.json中进行配置。详细的配置内容请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa",
        children: "应用配置文件概述（FA模型）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Stage卡片需要在应用配置文件module.json5中的extensionAbilities标签下，配置ExtensionAbility相关信息。详细的配置内容请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/application-configuration-file-overview-stage",
        children: "应用配置文件概述（Stage模型）"
      }), "。"]
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
774381(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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