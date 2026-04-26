"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["123365"], {
503141(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_switch_ui_js_components_switch_md_431_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-basic-components-ui-js-components-switch-ui-js-components-switch-md-431.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_switch_ui_js_components_switch_md_431_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-switch/ui-js-components-switch","title":"switch开发指导","description":"switch为开关选择器，切换开启或关闭状态。具体用法请参考switch。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-switch/ui-js-components-switch.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-switch","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-switch/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-switch/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"switch开发指导","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-switch","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"chart开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-chart/"},"next":{"title":"toolbar开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-toolbar/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-switch/ui-js-components-switch.md


const frontMatter = {
	title: 'switch开发指导',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-switch',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'switch开发指导';

const assets = {

};



const toc = [{
  "value": "创建switch组件",
  "id": "创建switch组件",
  "level": 2
}, {
  "value": "添加属性和方法",
  "id": "添加属性和方法",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "switch开发指导",
        children: "switch开发指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["switch为开关选择器，切换开启或关闭状态。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-switch/js-components-basic-switch",
        children: "switch"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建switch组件",
      children: "创建switch组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在pages/index目录下的hml文件中创建一个switch组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n    <switch checked=\"true\"></switch>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  flex-direction: column;\n  background-color: #F1F3F5;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(469437)/* ["default"] */.A) + "",
        width: "79",
        height: "89"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加属性和方法",
      children: "添加属性和方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "switch组件通过textoff和showtext属性设置文本选中和未选中时的状态。设置checked属性值为true（组件为打开状态）。添加change事件，当组件状态改变时触发，触发后执行switchChange函数获取组件当前状态（关闭/打开）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <switch showtext=\"true\" texton=\"open\" textoff=\"close\" checked=\"true\" @change=\"switchChange\"></switch>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #F1F3F5;\n}\nswitch {\n  texton-color: #002aff;\n  textoff-color: silver;\n  text-padding: 20px;\n  font-size: 50px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nimport promptAction from '@ohos.promptAction';\nexport default {\n  switchChange(e){\n    if(e.checked){\n      promptAction.showToast({\n        message: \"open\"\n      });\n    }else{\n      promptAction.showToast({\n        message: \"close\"\n      });\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(591804)/* ["default"] */.A) + "",
        width: "284",
        height: "444"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(844692)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当showtext属性值设置为true时，texton和textoff设置的文本才会生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面示例中设置开关为打开状态（使用默认收货地址），关闭开关后页面显示选择地址按钮，点击按钮即可改变收货地址。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现方法：创建switch开关，设置checked属性为true，通过数据绑定改变收货地址。设置display属性（默认为none），当关闭开关改变display属性值为flex后显示地址模块，点击按钮改变颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <div class=\"change\">\n    <text>Choose default address:</text>\n    <switch showtext=\"true\" texton=\"on\" textoff=\"off\" checked=\"true\" @change=\"switchChange\"></switch>\n  </div>\n  <div class=\"content\">\n    <text class=\"address\"><span>Shipping address:</span><span class=\"textSpan\">{{address}}</span></text>\n  </div>\n  <div class=\"myAddress\" style=\"display: {{addressDisplay}};\">\n    <text style=\"font-size: 30px;margin-bottom: 50px;\">Choose an address:</text>\n    <text class=\"addressText\" style=\"background-color: {{item == address?'#0fabe7':''}};color: {{item == address?'white':'black'}};\"\n    for=\"item in addressList\"@click=\"changeAddress({{$idx}}})\">{{item}}</text>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  background-color: #F1F3F5;\n  flex-direction: column;\n  padding: 50px;\n}\n.change{\n  margin-top: 20%;\n  width: 100%;\n  justify-content: center;\n}\nswitch{\n  texton-color: #002aff;\n  textoff-color: silver;\n  text-padding: 20px;\n}\n.content{\n  width: 70%;\n  text-align: center;\n  flex-direction: column;\n  border: 1px solid #002aff;\n  margin-left: 15%;\n  text-align: center;\n}\n.address{\n  width: 100%;\n  height: 100px;\n  line-height: 100px;\n  text-align: center;\n  font-size: 28px;\n  margin-bottom: 50px;\n}\n.textSpan{\n  color: #0aa9f1;\n}\n.myAddress{\n  flex-direction: column;\n  margin-top: 50px;\n}\n.addressText{\n  margin-left: 35%;\n  width: 30%;\n  height: 75px;\n  text-align: center;\n  color: white;\n  margin-bottom: 30px;\n  border-radius: 10px;\n  border: 1px solid #0fabe7;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data:{\n    address: '',\n    addressDisplay: 'none',\n    addressList: ['family','company','commissary'],\n  },\n  onInit(){\n    // 初始化默认地址为地址列表中的第一个\n    this.address = this.addressList[0];\n  },\n  switchChange(e){\n    if(e.checked){\n        this.addressDisplay = \"none\";\n    }else{\n        this.addressDisplay = \"flex\";\n    }\n  },\n  changeAddress(i){\n    this.address= this.addressList[i];\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(632379)/* ["default"] */.A) + "",
        width: "276",
        height: "504"
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
591804(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798470-3e88093b440ec495d6d5b48abe4f9f46.gif");

},
469437(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
632379(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438165-b637363cd3c1faaadbdf7c2bd6b11fbc.gif");

},
844692(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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