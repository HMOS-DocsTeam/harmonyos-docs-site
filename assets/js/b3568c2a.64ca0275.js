"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["843876"], {
343668(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_svg_ui_js_components_svg_path_ui_js_components_svg_path_md_b35_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-svg-ui-js-components-svg-path-ui-js-components-svg-path-md-b35.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_svg_ui_js_components_svg_path_ui_js_components_svg_path_md_b35_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-path/ui-js-components-svg-path","title":"绘制路径","description":"svg组件绘制路径时，通过Path中的M（起点）、H（水平线）、a（绘制弧形到指定位置）路径控制指令，并填充颜色实现饼状图效果。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-path/ui-js-components-svg-path.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-path","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-path/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-path/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"绘制路径","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-svg-path","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"绘制图形","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-graphics/"},"next":{"title":"绘制文本","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-text/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-svg/ui-js-components-svg-path/ui-js-components-svg-path.md


const frontMatter = {
	title: '绘制路径',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-svg-path',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '绘制路径';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "绘制路径",
        children: "绘制路径"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-svg-comp/js-components-svg/js-components-svg",
        children: "svg"
      }), "组件绘制路径时，通过Path中的M（起点）、H（水平线）、a（绘制弧形到指定位置）路径控制指令，并填充颜色实现饼状图效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <svg fill=\"#00FF00\" x=\"100\" y=\"400\">\n    <path d=\"M300,200 h-150 a150 150 0 1 0 150 -150 z\" fill=\"red\" stroke=\"blue\" stroke-width=\"5\" >    \n    </path> \n    <path d=\"M275,175 v-150 a150 150 0 0 0 -150 150 z\" fill=\"yellow\" stroke=\"blue\" stroke-width=\"5\">    \n    </path>\n  </svg>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  height: 1200px;\n  width: 600px;\n  background-color: #F1F3F5;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(773348)/* ["default"] */.A) + "",
        width: "319",
        height: "327"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(83830)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "M/m = moveto 参数x和y表示需要移动到点的x轴和y轴的坐标。在使用M命令移动画笔后，只会移动画笔，但不会在两点之间画线。所以M命令经常出现在路径的开始处，用来指明从何处开始画。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L/l = lineto 参数x和y表示一个点的x轴和y轴坐标，L命令将会在当前位置和新位置（L前面画笔所在的点）之间画一条线段。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "H/h = horizontal lineto 绘制平行线。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V/v = vertical lineto 绘制垂直线。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C/c = curveto 三次贝塞尔曲线 设置三组坐标参数： x1 y1, x2 y2, x y。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S/s = smooth curveto 三次贝塞尔曲线命令 设置两组坐标参数： x2 y2, x y。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Q/q = quadratic Bezier curve 二次贝塞尔曲线 设置两组坐标参数： x1 y1, x y。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T/t = smooth quadratic Bezier curveto 二次贝塞尔曲线命令 设置参数： x y。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A/a = elliptical Arc 弧形命令 设置参数： rx ry x-axis-rotation（旋转角度）large-arc-flag（角度大小） sweep-flag（弧线方向） x y。large-arc-flag决定弧线是大于还是小于180度，0表示小角度弧，1表示大角度弧。sweep-flag表示弧线的方向，0表示从起点到终点沿逆时针画弧，1表示从起点到终点沿顺时针画弧。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Z/z = closepath 从当前点画一条直线到路径的起点。"
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
773348(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478141-b8419bc8b2a0238d7cbd95d8bcaf7371.png");

},
83830(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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