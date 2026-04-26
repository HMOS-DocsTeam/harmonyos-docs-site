"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["827836"], {
610093(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_animation_ui_js_animation_css_ui_js_animate_svg_ui_js_animate_svg_md_d01_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-animation-ui-js-animation-css-ui-js-animate-svg-ui-js-animate-svg-md-d01.json
var site_docs_arkui_ui_js_dev_ui_js_animation_ui_js_animation_css_ui_js_animate_svg_ui_js_animate_svg_md_d01_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-animation/ui-js-animation-css/ui-js-animate-svg/ui-js-animate-svg","title":"svg动画","description":"为svg组件添加动画效果。","source":"@site/docs/arkui/ui-js-dev/ui-js-animation/ui-js-animation-css/ui-js-animate-svg/ui-js-animate-svg.md","sourceDirName":"arkui/ui-js-dev/ui-js-animation/ui-js-animation-css/ui-js-animate-svg","slug":"/arkui/ui-js-dev/ui-js-animation/ui-js-animation-css/ui-js-animate-svg/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-animation/ui-js-animation-css/ui-js-animate-svg/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"svg动画","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-animate-svg","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"background-position样式动画","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-animation/ui-js-animation-css/ui-js-animate-background-position-style/"},"next":{"title":"组件动画","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-animate-component/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-animation/ui-js-animation-css/ui-js-animate-svg/ui-js-animate-svg.md


const frontMatter = {
	title: 'svg动画',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-animate-svg',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'svg动画';

const assets = {

};



const toc = [{
  "value": "属性样式动画",
  "id": "属性样式动画",
  "level": 2
}, {
  "value": "路径动画",
  "id": "路径动画",
  "level": 2
}, {
  "value": "animateTransform动画",
  "id": "animatetransform动画",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "svg动画",
        children: "svg动画"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为svg组件添加动画效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性样式动画",
      children: "属性样式动画"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在svg的子组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-svg-comp/js-components-svg-animate/js-components-svg-animate",
        children: "animate"
      }), "中，通过attributeName设置需要进行动效的属性，from设置开始值，to设置结束值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <svg>\n    <text x=\"300\" y=\"300\" fill=\"blue\">\n      Hello\n      <animate attributeName=\"font-size\" from=\"30\" to=\"60\" dur=\"3s\" repeatCount=\"indefinite\">\n      </animate>\n      <animate attributeName=\"fill\" from=\"red\" to=\"blue\" dur=\"3s\" repeatCount=\"indefinite\">\n      </animate>\n      <animate attributeName=\"opacity\" from=\"1\" to=\"0.3\" dur=\"3s\" repeatCount=\"indefinite\">\n      </animate>\n    </text>\n    <text x=\"300\" y=\"600\" fill=\"blue\">\n      World\n      <animate attributeName=\"font-size\" from=\"30\" to=\"60\" values=\"30;80\" dur=\"3s\" repeatCount=\"indefinite\">\n      </animate>\n      <animate attributeName=\"fill\" from=\"red\" to=\"blue\"  dur=\"3s\" repeatCount=\"indefinite\">\n      </animate>\n      <animate attributeName=\"opacity\" from=\"0.3\" to=\"1\" dur=\"3s\" repeatCount=\"indefinite\">\n      </animate>\n    </text>\n  </svg>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(798319)/* ["default"] */.A) + "",
        width: "308",
        height: "385"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(158088)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在设置动画变化值时，如果已经设置了values属性，则from和to都失效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "路径动画",
      children: "路径动画"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在svg的子组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-svg-comp/js-components-svg-animatemotion/js-components-svg-animatemotion",
        children: "animateMotion"
      }), "中，通过path设置动画变化的路径。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <svg fill=\"white\" width=\"800\" height=\"900\">\n    <path d=\"M300,200 h-150 a150 150 0 1 0 150 -150 z\" fill=\"white\" stroke=\"blue\" stroke-width=\"5\" >\n    </path>\n    <path fill=\"red\" d=\"M-5,-5 L10,0 L-5,5 L0,0 Z\"  >\n      <animateMotion dur=\"2000\" repeatCount=\"indefinite\" rotate=\"auto-reverse\"path=\"M300,200 h-150 a150 150 0 1 0 150 -150 z\">\n      </animateMotion>\n    </path>\n  </svg>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(139484)/* ["default"] */.A) + "",
        width: "251",
        height: "231"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "animatetransform动画",
      children: "animateTransform动画"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在svg的子组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-svg-comp/js-components-svg-animatetransform/js-components-svg-animatetransform",
        children: "animateTransform"
      }), "中，通过attributeName绑定transform属性，type设置动画类型，from设置开始值，to设置结束值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\" style=\"\">\n  <svg>\n    <line x1=\"90\" y1=\"300\" x2=\"90\" y2=\"730\" stroke-width=\"10\" stroke=\"black\" stroke-linecap=\"round\">\n      <animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"translate\"  dur=\"3s\" values=\"0;30;10;30;20;30;25;30\" keyTimes=\"0;0.3;0.5;0.7;0.8;0.9;1.0;1.1\"\n      fill=\"freeze\">\n      </animateTransform>\n    </line>\n    <circle cx=\"500\" cy=\"500\" r=\"50\" stroke-width=\"15\" fill=\"red\" stroke=\"#e70d0d\">\n      <animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"rotate\"  dur=\"3s\" values=\"0;30;10;30;20;30;25;30\" keyTimes=\"0;0.3;0.5;0.7;0.8;0.9;1.0;1.1\" fill=\"freeze\">\n      </animateTransform>\n      <animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"scale\"  dur=\"6s\" values=\"1;1;1.3\" keyTimes=\"0;0.5;1\" fill=\"freeze\"></animateTransform>\n      <animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"translate\"  dur=\"9s\" values=\"0;0;300 7\" keyTimes=\"0;0.6;0.9\" fill=\"freeze\"></animateTransform>\n    </circle>\n    <rect width=\"500\" height=\"200\" x=\"90\" y=\"840\">\n      <animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"skewY\"  dur=\"6s\" values=\"0;0;30\" keyTimes=\"0;0.5;1\" fill=\"freeze\"></animateTransform>\n    </rect>\n    <line x1=\"650\" y1=\"300\" x2=\"650\" y2=\"600\" stroke-width=\"20\" stroke=\"blue\" stroke-linecap=\"round\">\n      <animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"translate\"  dur=\"9s\" values=\"0;0;0 800\" keyTimes=\"0;0.6;1\" fill=\"freeze\"></animateTransform>\n    </line>\n  </svg>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: #F1F3F5;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(754800)/* ["default"] */.A) + "",
        width: "308",
        height: "585"
      })
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
139484(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478147-bde56fb065831c52a3a70a5bc10b7eb8.gif");

},
754800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798498-2ebba88c5bacb1225b48832a134b04fc.gif");

},
158088(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
798319(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958146-94c8b85262f684e4d3c5b923189dfcfd.gif");

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