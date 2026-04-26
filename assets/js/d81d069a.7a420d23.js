"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["385677"], {
327356(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_animation_ui_js_animation_css_ui_js_animate_attribute_style_ui_js_animate_attribute_style_md_d81_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-animation-ui-js-animation-css-ui-js-animate-attribute-style-ui-js-animate-attribute-style-md-d81.json
var site_docs_arkui_ui_js_dev_ui_js_animation_ui_js_animation_css_ui_js_animate_attribute_style_ui_js_animate_attribute_style_md_d81_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-animation/ui-js-animation-css/ui-js-animate-attribute-style/ui-js-animate-attribute-style","title":"属性样式动画","description":"在关键帧（Keyframes）中动态设置父组件的width和height，实现组件变大缩小。子组件设置scale属性使父子组件同时缩放，再设置opacity实现父子组件的显示与隐藏。","source":"@site/docs/arkui/ui-js-dev/ui-js-animation/ui-js-animation-css/ui-js-animate-attribute-style/ui-js-animate-attribute-style.md","sourceDirName":"arkui/ui-js-dev/ui-js-animation/ui-js-animation-css/ui-js-animate-attribute-style","slug":"/arkui/ui-js-dev/ui-js-animation/ui-js-animation-css/ui-js-animate-attribute-style/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-animation/ui-js-animation-css/ui-js-animate-attribute-style/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"属性样式动画","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-animate-attribute-style","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"绘制文本","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-text/"},"next":{"title":"transform样式动画","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-animation/ui-js-animation-css/ui-js-animate-transform/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-animation/ui-js-animation-css/ui-js-animate-attribute-style/ui-js-animate-attribute-style.md


const frontMatter = {
	title: '属性样式动画',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-animate-attribute-style',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '属性样式动画';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
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
        id: "属性样式动画",
        children: "属性样式动画"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在关键帧（Keyframes）中动态设置父组件的width和height，实现组件变大缩小。子组件设置scale属性使父子组件同时缩放，再设置opacity实现父子组件的显示与隐藏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <div class=\"fade\">\n    <text>fading away</text>\n  </div>\n  <div class=\"bigger\">\n    <text>getting bigger</text>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  background-color:#F1F3F5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.fade {\n  width: 30%;\n  height: 200px;\n  left: 35%;\n  top: 25%;\n  position: absolute;\n  animation: 2s change infinite friction;\n}\n.bigger {\n  width: 20%;\n  height: 100px;\n  background-color: blue;\n  animation: 2s change1 infinite linear-out-slow-in;\n}\ntext {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  color: white;\n  font-size: 35px;\n  animation: 2s change2 infinite linear-out-slow-in;\n}\n/* 颜色变化 */\n@keyframes change{\n  from {\n    background-color: #f76160;\n    opacity: 1;\n  }\n  to {\n    background-color: #09ba07;\n    opacity: 0;\n  }\n}\n/* 父组件大小变化 */\n@keyframes change1 {\n  0% {\n    width: 20%;\n    height: 100px;\n  }\n  100% {\n    width: 80%;\n    height: 200px;\n  }\n}\n/* 子组件文字缩放 */\n@keyframes change2 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1.5);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(50794)/* ["default"] */.A) + "",
        width: "189",
        height: "235"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(283309)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "animation取值不区分先后，duration （动画执行时间）/ delay （动画延迟执行时间）按照出现的先后顺序解析。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "必须设置animation-duration样式，否则时长为0则不会有动画效果。当设置animation-fill-mode属性为forwards时，组件直接展示最后一帧的样式。"
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
283309(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
50794(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958142-ed7dde1d17eeee22607a1e4803e3baaa.gif");

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