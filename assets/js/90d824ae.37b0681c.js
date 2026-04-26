"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["241225"], {
980055(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_svg_ui_js_components_svg_overview_ui_js_components_svg_overview_md_90d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-svg-ui-js-components-svg-overview-ui-js-components-svg-overview-md-90d.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_svg_ui_js_components_svg_overview_ui_js_components_svg_overview_md_90d_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-overview/ui-js-components-svg-overview","title":"基础知识","description":"svg组件主要作为svg画布的根节点使用，也可以在svg中嵌套使用。具体用法请参考svg。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-overview/ui-js-components-svg-overview.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-overview","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-overview/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"基础知识","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-svg-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"栅格布局","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-components-grid/"},"next":{"title":"绘制图形","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-graphics/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-overview/ui-js-components-svg-overview.md


const frontMatter = {
	title: '基础知识',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-svg-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '基础知识';

const assets = {

};



const toc = [{
  "value": "创建svg组件",
  "id": "创建svg组件",
  "level": 2
}, {
  "value": "设置属性",
  "id": "设置属性",
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
        id: "基础知识",
        children: "基础知识"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["svg组件主要作为svg画布的根节点使用，也可以在svg中嵌套使用。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-svg-comp/js-components-svg/js-components-svg",
        children: "svg"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(505992)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "svg父组件或者svg组件需要定义宽高值，否则不进行绘制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建svg组件",
      children: "创建svg组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在pages/index目录下的hml文件中创建一个svg组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <svg width=\"400\" height=\"400\">  </svg>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #F1F3F5;\n}\nsvg{\n  background-color: blue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(781366)/* ["default"] */.A) + "",
        width: "406",
        height: "703"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置属性",
      children: "设置属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置width、height、x、y和viewBox属性为svg设置宽度、高度、x轴坐标、y轴坐标和svg视口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <svg width=\"400\" height=\"400\" viewBox=\"0 0 100 100\">    \n    <svg class=\"rect\" width=\"100\" height=\"100\" x=\"20\" y=\"10\">    \n    </svg>  \n  </svg>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #F1F3F5;\n}\nsvg{\n  background-color: yellow;\n}\n.rect{\n  background-color: red;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(226537)/* ["default"] */.A) + "",
        width: "387",
        height: "709"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(61654)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "x和y设置的是当前svg的x轴和y轴坐标，如果当前svg为根节点，x轴和y轴属性无效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "viewBox的宽高和svg的宽高不一致，会以中心对齐进行缩放。"
      }), "\n"]
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
781366(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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AFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQJWwAFAlLABUCQsAVcICQNGz4z9Fqd8Q0u5UbAAAAABJRU5ErkJggg==");

},
226537(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
505992(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
61654(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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