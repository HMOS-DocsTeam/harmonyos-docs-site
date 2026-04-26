"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["13993"], {
306897(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_image_animator_ui_js_components_image_animator_md_a25_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-basic-components-ui-js-components-image-animator-ui-js-components-image-animator-md-a25.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_image_animator_ui_js_components_image_animator_md_a25_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-image-animator/ui-js-components-image-animator","title":"image-animator开发指导","description":"image-animator组件为图片帧动画播放器。具体用法请参考image-animator。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-image-animator/ui-js-components-image-animator.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-image-animator","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-image-animator/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-image-animator/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"image-animator开发指导","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-image-animator","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"image开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-images/"},"next":{"title":"rating开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-rating/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-image-animator/ui-js-components-image-animator.md


const frontMatter = {
	title: 'image-animator开发指导',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-image-animator',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'image-animator开发指导';

const assets = {

};



const toc = [{
  "value": "创建image-animator组件",
  "id": "创建image-animator组件",
  "level": 2
}, {
  "value": "设置image-animator组件属性",
  "id": "设置image-animator组件属性",
  "level": 2
}, {
  "value": "绑定事件",
  "id": "绑定事件",
  "level": 2
}, {
  "value": "场景示例",
  "id": "场景示例",
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
        id: "image-animator开发指导",
        children: "image-animator开发指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["image-animator组件为图片帧动画播放器。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-image-animator/js-components-basic-image-animator",
        children: "image-animator"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建image-animator组件",
      children: "创建image-animator组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在pages/index目录下的hml文件中创建一个image-animator组件，css文件中编写组件样式，js文件中引用图片。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <image-animator class=\"animator\" images=\"{{frames}}\" duration=\"3s\"/>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #F1F3F5;\n}\n.animator {\n  width: 500px;\n  height: 500px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.js\nexport default {\n  data: {\n    frames: [\n      {\n        src: \"/common/landscape1.jpg\",\n      },\n      {\n        src: \"/common/landscape2.jpg\",\n      }\n    ],\n  },\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(917422)/* ["default"] */.A) + "",
        width: "228",
        height: "411"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置image-animator组件属性",
      children: "设置image-animator组件属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加iteration（播放次数）、reverse（播放顺序）、fixedsize（图片大小是否固定为组件大小）、duration（播放时长）和fillmode（执行结束后的状态）属性，控制图片的播放效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <image-animator class=\"animator\" fixedsize=\"false\" iteration='2' reverse=\"false\" ref=\"animator\" fillmode=\"none\" images=\"{{frames}}\"   duration=\"5s\" />\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  background-color: #F1F3F5;\n}\n.animator {\n  width: 500px;\n  height: 500px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.js\nexport default {\n  data: {\n    frames: [\n      {\n        src: 'common/landscape1.jpg',\n        width: '250px',\n        height: '250px',\n        left: '150px',\n        top: '50px',\n      },\n      {\n        src: 'common/landscape2.jpg',\n        width: '300px',\n        height: '300px',\n        left: '150px',\n        top: '100px',\n      },\n      {\n        src: 'common/landscape1.jpg',\n        width: '350px',\n        height: '350px',\n        left: '150px',\n        top: '150px',\n      },\n      {\n        src: 'common/landscape2.jpg',\n        width: '400px',\n        height: '400px',\n        left: '150px',\n        top: '200px',\n      },\n      {\n        src: 'common/landscape3.jpg',\n        width: '450px',\n        height: '450px',\n        left: '150px',\n        top: '250px',\n      },\n      {\n        src: 'common/landscape4.jpg',\n        width: '500px',\n        height: '500px',\n        left: '150px',\n        top: '300px',\n      },\n    ],\n  },\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(462481)/* ["default"] */.A) + "",
        width: "228",
        height: "411"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(51288)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果在images属性中设置了单独的duration属性，在image-animator组件中设置的duration属性无效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果fixedsize属性值设置为true，图片的width 、height 、top 和left属性无效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果reverse属性值设置为false，表示从第1张图片播放到最后1张图片。 如果reverse属性值设置为true，表示从最后1张图片播放到第1张图片。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绑定事件",
      children: "绑定事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向image-animator组件添加start、pause、stop和resume事件。当图片播放器开始播放时触发start事件，当图片播放器被点击时触发pause事件，长按图片播放器触发resume事件，图片播放器停止播放时触发stop事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"doc-page\">\n  <image-animator class=\"img\" id=\"img\" images=\"{{imginfo}}\" iteration=\"1\" duration=\"10s\" onstart=\"popstart\" onpause=\"poppause\"   onstop=\"popstop\" onresume=\"popresume\" onlongpress=\"setresume\" onclick=\"setpause\">\n  </image-animator>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.doc-page {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n   background-color: #F1F3F5;\n}\n.img {\n  width: 600px;\n  height: 600px;\n  border: 3px solid orange;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.js\nimport promptAction from '@ohos.promptAction';\nexport default {\n  data: {\n    imginfo: [\n      {\n        src: 'common/landscape1.jpg',\n      },{\n        src: 'common/landscape2.jpg',\n      },{\n        src: 'common/landscape3.jpg',\n      },{\n        src: 'common/landscape4.jpg',\n      }\n    ],\n  },\n  onInit() {\n  },\n  setpause(e) {\n    this.$element('img').pause()\n  },\n  setresume(e) {\n    this.$element('img').resume()\n  },\n  popstart(e) {\n    promptAction.showToast({\n      message: '开始'\n    })\n  },\n  poppause(e) {\n    promptAction.showToast({\n      message: '暂停'\n    })\n  },\n  popstop(e) {\n    promptAction.showToast({\n      message: '停止'\n    })\n  },\n  popresume(e) {\n    promptAction.showToast({\n      message: '恢复'\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(523545)/* ["default"] */.A) + "",
        width: "228",
        height: "519"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在本场景中，开发者可通过开始播放、停止播放等按钮切换图片的播放状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "image-animator组件通过调用start、pause、stop和resume方法控制图片的开始、暂停、停止和重新播放，通过getState方法查询图片的播放状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"doc-page\">\n  <image-animator class=\"img\" id=\"img\" images=\"{{imginfo}}\" iteration=\"2\" reverse=\"{{rev}}\" duration=\"10s\">\n  </image-animator>\n  <div style=\"width: 700px;height:450px;margin-top: 40px;flex-direction:column;justify-content:space-around;\">\n    <div class=\"container\">\n      <button type=\"capsule\" value=\"开始播放\" onclick=\"startimg\"></button>\n      <button type=\"capsule\" value=\"暂停播放\" onclick=\"pauseimg\"></button>\n    </div>\n    <div class=\"container\">\n      <button type=\"capsule\" value=\"停止播放\" onclick=\"stopimg\"></button>\n      <button type=\"capsule\" value=\"重新播放\" onclick=\"resumeimg\"></button>\n    </div>\n    <div class=\"container\">\n      <button type=\"capsule\" value=\"获取播放状态\" onclick=\"getimgstate\"></button>\n      <button type=\"capsule\" value=\"{{revVal}}\" onclick=\"revimg\"></button>\n    </div>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.doc-page {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #F1F3F5;\n}\n.img {\n  width: 600px;\n  height: 600px;\n  border: 3px solid orange;\n}\nbutton{\n  width: 260px\n}\n.container {\n  width: 100%;\n  height: 120px;\n  align-items: center;\n  justify-content: space-around;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.js\nimport promptAction from '@ohos.promptAction';\nexport default {\n  data: {\n    rev:false,\n    imginfo: [\n      {\n        src: 'common/landscape1.jpg',\n      },{\n        src: 'common/landscape2.jpg',\n      },{\n        src: 'common/landscape3.jpg',\n      },{\n        src: 'common/landscape4.jpg',\n      }\n    ],\n    revVal: '反向播放'\n  },\n  onInit() {\n  },\n  startimg(e) {\n    this.$element('img').start()\n  },\n  pauseimg(e) {\n    this.$element('img').pause()\n  },\n  stopimg(e) {\n    this.$element('img').stop()\n  },\n  resumeimg(e) {\n    this.$element('img').resume()\n  },\n  getimgstate(e) {\n    promptAction.showToast({\n      message: '当前状态：' + this.$element('img').getState()\n    })\n  },\n  revimg(e) {\n    this.rev = !this.rev\n    if (this.rev) {\n      this.revVal = '正向播放'\n    } else {\n      this.revVal = '反向播放'\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(474949)/* ["default"] */.A) + "",
        width: "228",
        height: "519"
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
51288(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
917422(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958110-8482db205ebbdbfe874d716ef4e98d0a.gif");

},
462481(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478111-3d14f591bc4e9a02e2d448a73140aad3.gif");

},
474949(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438157-a164469a3fca31e198531750050d47aa.gif");

},
523545(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798462-d81251faaa9b7612d612061ec725a9f0.gif");

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