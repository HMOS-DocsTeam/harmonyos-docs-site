"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["293911"], {
748533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_animation_ui_js_animation_js_ui_js_interpolator_animation_ui_js_animate_frame_ui_js_animate_frame_md_d36_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-animation-ui-js-animation-js-ui-js-interpolator-animation-ui-js-animate-frame-ui-js-animate-frame-md-d36.json
var site_docs_arkui_ui_js_dev_ui_js_animation_ui_js_animation_js_ui_js_interpolator_animation_ui_js_animate_frame_ui_js_animate_frame_md_d36_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-interpolator-animation/ui-js-animate-frame/ui-js-animate-frame","title":"动画帧","description":"请求动画帧","source":"@site/docs/arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-interpolator-animation/ui-js-animate-frame/ui-js-animate-frame.md","sourceDirName":"arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-interpolator-animation/ui-js-animate-frame","slug":"/arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-interpolator-animation/ui-js-animate-frame/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-interpolator-animation/ui-js-animate-frame/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"动画帧","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-animate-frame","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"动画动效","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-interpolator-animation/ui-js-animate-dynamic-effects/"},"next":{"title":"自定义组件","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-custom-components/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-interpolator-animation/ui-js-animate-frame/ui-js-animate-frame.md


const frontMatter = {
	title: '动画帧',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-animate-frame',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '动画帧';

const assets = {

};



const toc = [{
  "value": "请求动画帧",
  "id": "请求动画帧",
  "level": 2
}, {
  "value": "取消动画帧",
  "id": "取消动画帧",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "动画帧",
        children: "动画帧"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "请求动画帧",
      children: "请求动画帧"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求动画帧时通过requestAnimationFrame函数逐帧回调，传入一个回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "runframe在调用requestAnimationFrame时传入带有timestamp参数的回调函数step，将step中的timestamp赋予起始的startTime。当timestamp与startTime的差值小于规定的时间时，会再次调用requestAnimationFrame，最终动画将会停止。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <tabs onchange=\"changecontent\">\n    <tab-content>\n      <div class=\"container\">\n        <stack style=\"width: 300px;height: 300px;margin-top: 100px;margin-bottom: 100px;\">\n          <canvas id=\"mycanvas\" style=\"width: 100%;height: 100%;background-color: coral;\">\n          </canvas>\n          <div style=\"width: 50px;height: 50px;border-radius: 25px;background-color: indigo;position: absolute;left: {{left}};top: {{top}};\">\n          </div>\n        </stack>\n        <button type=\"capsule\" value=\"play\" onclick=\"runframe\"></button>\n      </div>\n    </tab-content>\n  </tabs>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\nbutton{\n  width: 300px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    timer: null,\n    left: 0,\n    top: 0,\n    flag: true,\n    animation: null,\n    startTime: 0,\n  },\n  onShow() {\n    var test = this.$element(\"mycanvas\");\n    var ctx = test.getContext(\"2d\");\n    ctx.beginPath();\n    ctx.moveTo(0, 0);\n    ctx.lineTo(300, 300);\n    ctx.lineWidth = 5;\n    ctx.strokeStyle = \"red\";\n    ctx.stroke();\n  },\n  runframe() {\n    this.left = 0;\n    this.top = 0;\n    this.flag = true;\n    this.animation = requestAnimationFrame(this.step);\n  },\n  step(timestamp) {\n    if (this.flag) {\n      this.left += 5;\n      this.top += 5;\n      if (this.startTime == 0) {\n        this.startTime = timestamp;\n      }\n      var elapsed = timestamp - this.startTime;\n        if (elapsed < 500) {\n          console.info('callback step timestamp: ' + timestamp);\n          this.animation = requestAnimationFrame(this.step);\n        }\n      } else {\n        this.left -= 5;\n        this.top -= 5;\n        this.animation = requestAnimationFrame(this.step);\n      }\n      if (this.left == 250 || this.left == 0) {\n        this.flag = !this.flag;\n     }\n    },\n    onDestroy() {\n      cancelAnimationFrame(this.animation);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(82692)/* ["default"] */.A) + "",
        width: "295",
        height: "296"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(648389)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "requestAnimationFrame函数在调用回调函数时在第一个参数位置传入timestamp时间戳，表示requestAnimationFrame开始去执行回调函数的时刻。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "取消动画帧",
      children: "取消动画帧"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过cancelAnimationFrame函数取消逐帧回调，在调用cancelAnimationFrame函数时取消requestAnimationFrame函数的请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <tabs onchange=\"changecontent\">\n    <tab-content>\n      <div class=\"container\">\n        <stack style=\"width: 300px;height: 300px;margin-top: 100px;margin-bottom: 100px;\">\n          <canvas id=\"mycanvas\" style=\"width: 100%;height: 100%;background-color: coral;\">\n          </canvas>\n          <div style=\"width: 50px;height: 50px;border-radius: 25px;background-color: indigo;position: absolute;left: {{left}};top: {{top}};\">\n          </div>\n        </stack>\n        <button type=\"capsule\" value=\"play\" onclick=\"runframe\"></button>\n      </div>\n    </tab-content>\n  </tabs>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\nbutton{\n  width: 300px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    timer: null,\n    left: 0,\n    top: 0,\n    flag: true,\n    animation: null\n  },\n  onShow() {\n    var test = this.$element(\"mycanvas\");\n    var ctx = test.getContext(\"2d\");\n    ctx.beginPath();\n    ctx.moveTo(0, 0);\n    ctx.lineTo(300, 300);\n    ctx.lineWidth = 5;\n    ctx.strokeStyle = \"red\";\n    ctx.stroke();\n  },\n  runframe() {\n    this.left = 0;\n    this.top = 0;\n    this.flag = true;\n    this.animation = requestAnimationFrame(this.step);\n  },\n  step(timestamp) {\n    if (this.flag) {\n      this.left += 5;\n      this.top += 5;\n      this.animation = requestAnimationFrame(this.step);\n    } else {\n      this.left -= 5;\n      this.top -= 5;\n      this.animation = requestAnimationFrame(this.step);\n    }\n    if (this.left == 250 || this.left == 0) {\n      this.flag = !this.flag;\n    }\n  },\n  onDestroy() {\n    cancelAnimationFrame(this.animation);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(35496)/* ["default"] */.A) + "",
        width: "295",
        height: "296"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(694210)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在调用该函数时需传入一个具有标识id的参数。"
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
694210(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
35496(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478151-3f34b0f2a15a17e207cd284037e729ad.gif");

},
648389(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
82692(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958150-96d80342675f8cca6b263db3bf49479a.gif");

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