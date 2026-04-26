"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["728563"], {
624418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_animation_ui_js_animation_js_ui_js_interpolator_animation_ui_js_animate_dynamic_effects_ui_js_animate_dynamic_effects_md_ce4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-animation-ui-js-animation-js-ui-js-interpolator-animation-ui-js-animate-dynamic-effects-ui-js-animate-dynamic-effects-md-ce4.json
var site_docs_arkui_ui_js_dev_ui_js_animation_ui_js_animation_js_ui_js_interpolator_animation_ui_js_animate_dynamic_effects_ui_js_animate_dynamic_effects_md_ce4_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-interpolator-animation/ui-js-animate-dynamic-effects/ui-js-animate-dynamic-effects","title":"动画动效","description":"通过设置插值器来实现动画效果。","source":"@site/docs/arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-interpolator-animation/ui-js-animate-dynamic-effects/ui-js-animate-dynamic-effects.md","sourceDirName":"arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-interpolator-animation/ui-js-animate-dynamic-effects","slug":"/arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-interpolator-animation/ui-js-animate-dynamic-effects/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-interpolator-animation/ui-js-animate-dynamic-effects/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"动画动效","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-animate-dynamic-effects","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"组件动画","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-animate-component/"},"next":{"title":"动画帧","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-interpolator-animation/ui-js-animate-frame/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-interpolator-animation/ui-js-animate-dynamic-effects/ui-js-animate-dynamic-effects.md


const frontMatter = {
	title: '动画动效',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-animate-dynamic-effects',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '动画动效';

const assets = {

};



const toc = [{
  "value": "创建动画对象",
  "id": "创建动画对象",
  "level": 2
}, {
  "value": "添加动画事件和调用接口",
  "id": "添加动画事件和调用接口",
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
        id: "动画动效",
        children: "动画动效"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置插值器来实现动画效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建动画对象",
      children: "创建动画对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过createAnimator创建一个动画对象，通过设置参数options来设置动画的属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <div style=\"width: 300px;height: 300px;margin-top: 100px;background: linear-gradient(pink, purple);transform: translate({{translateVal}});\">\n  </div>\n  <div class=\"row\">\n    <button type=\"capsule\" value=\"play\" onclick=\"playAnimation\"></button>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width:100%;\n  height:100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\nbutton{\n  width: 200px;\n}\n.row{\n  width: 65%;\n  height: 100px;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 50px;\n  margin-left: 260px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    translateVal: 0,\n    animation: null\n  },\n  onInit() {},\n  onShow(){\n    var options = {\n      duration: 3000,\n      easing:\"friction\",\n      delay:\"1000\",\n      fill: 'forwards',\n      direction:'alternate',\n      iterations: 2,\n      begin: 0,\n      end: 180\n    }; // 设置参数\n    this.animation = this.getUIContext().createAnimator(options); // 创建动画\n  },\n  playAnimation() {\n    var _this = this;\n    this.animation.onframe = function(value) {\n      _this.translateVal= value;\n    };\n    this.animation.play();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(407450)/* ["default"] */.A) + "",
        width: "295",
        height: "293"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(348446)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用createAnimator创建动画对象时必须传入options参数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "begin插值起点，不设置时默认为0。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "end插值终点，不设置时默认为1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "示例代码不支持模拟器运行。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加动画事件和调用接口",
      children: "添加动画事件和调用接口"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["animator支持事件和接口，可以通过添加frame、cancel、repeat、finish事件和调用update、play、pause、cancel、reverse、finish接口自定义动画效果。animator支持的事件和接口具体见动画中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#createanimator",
        children: "createAnimator"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div style=\"flex-direction: column;align-items: center;width: 100%;height: 100%;\">\n  <div style=\"width:200px;height: 200px;margin-top: 100px;background: linear-gradient(#b30d29, #dcac1b);\n  transform: scale({{scaleVal}});\"></div>\n  <div style=\"width: {{DivWidth}};height: {{DivHeight}};margin-top: 200px;\n  background: linear-gradient(pink, purple);margin-top: 200px;transform:translateY({{translateVal}});\">\n  </div>\n  <div class=\"row\">\n    <button type=\"capsule\" value=\"play\" onclick=\"playAnimation\"></button>\n    <button type=\"capsule\" value=\"update\" onclick=\"updateAnimation\"></button>\n  </div>\n  <div class=\"row1\">\n    <button type=\"capsule\" value=\"pause\" onclick=\"pauseAnimation\"></button>\n    <button type=\"capsule\" value=\"finish\" onclick=\"finishAnimation\"></button>\n  </div>\n  <div class=\"row2\">\n    <button type=\"capsule\" value=\"cancel\" onclick=\"cancelAnimation\"></button>\n    <button type=\"capsule\" value=\"reverse\" onclick=\"reverseAnimation\"></button>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\nbutton{\n  width: 200px;\n}\n.row{\n  width: 65%;\n  height: 100px;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 150px;\n  position: fixed;\n  top: 52%;\n  left: 120px;\n}\n.row1{\n  width: 65%;\n  height: 100px;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 120px;\n  position: fixed;\n  top: 65%;\n  left: 120px;\n}\n.row2{\n  width: 65%;\n  height: 100px;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 100px;\n  position: fixed;\n  top: 75%;\n  left: 120px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    scaleVal:1,\n    DivWidth:200,\n    DivHeight:200,\n    translateVal:0,\n    animation: null\n  },\n  onInit() {},\n  onShow() {\n    var options = {\n      duration: 3000,\n      fill: 'forwards',\n      begin: 200,\n      end: 270\n    };\n    this.animation = this.getUIContext().createAnimator(options);\n    var _this= this;\n    // 添加动画重放事件\n    this.animation.onrepeat = function() {\n      this.getUIContext().getPromptAction().showToast({\n        message: 'repeat'\n      });\n      var repeatOptions = {\n        duration: 2000,\n        iterations: 1,\n         direction: 'alternate',\n         begin: 180,\n         end: 240\n       };\n        _this.animation?.update(repeatOptions);\n        _this.animation?.play();\n      };\n  },\n  playAnimation() {\n    var _this= this;\n    // 添加动画逐帧插值回调事件\n    this.animation.onframe = function(value) {\n      _this.scaleVal= value/150,\n      _this.DivWidth = value,\n      _this.DivHeight = value,\n      _this.translateVal = value-180\n    };\n    this.animation.play();\n  },\n  updateAnimation() {\n    var newoptions = {\n      duration: 5000,\n      iterations: 2,\n      begin: 120,\n      end: 180\n    };\n    this.animation.update(newoptions);\n    this.animation.play(); // 调用动画播放接口\n  },\n  pauseAnimation() {\n    this.animation.pause(); // 调用动画暂停接口\n  },\n  finishAnimation() {\n    var _this= this;\n    // 添加动画完成事件\n    this.animation.onfinish = function() {\n      this.getUIContext().getPromptAction().showToast({\n        message: 'finish'\n      });\n    };\n    this.animation.finish(); // 调用动画完成接口\n  },\n  cancelAnimation() {\n    this.animation.cancel(); // 调用动画取消接口\n  },\n  reverseAnimation() {\n    this.animation.reverse(); // 调用动画倒放接口\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(154432)/* ["default"] */.A) + "",
        width: "294",
        height: "610"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(418986)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-animator/js-apis-animator#reset9",
        children: "reset"
      }), "接口的过程中可以使用这个接口更新动画参数，入参与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#createanimator",
        children: "createAnimator"
      }), "一致。"]
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
154432(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438195-22fed48accad617766e21b2648f185a2.gif");

},
348446(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
418986(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
407450(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798500-d00db54c07eea8e1a85690244c3ac3aa.gif");

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