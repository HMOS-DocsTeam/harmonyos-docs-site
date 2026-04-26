"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["499596"], {
23403(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_container_components_ui_js_component_tabs_ui_js_component_tabs_md_e8f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-container-components-ui-js-component-tabs-ui-js-component-tabs-md-e8f.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_container_components_ui_js_component_tabs_ui_js_component_tabs_md_e8f_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-component-tabs/ui-js-component-tabs","title":"tabs开发指导","description":"tabs是一种常见的界面导航结构。通过页签容器，用户可以快捷地访问应用的不同模块。具体用法请参考tabs API。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-component-tabs/ui-js-component-tabs.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-component-tabs","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-component-tabs/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-component-tabs/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"tabs开发指导","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-component-tabs","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"stepper开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-stepper/"},"next":{"title":"swiper开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-swiper/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-component-tabs/ui-js-component-tabs.md


const frontMatter = {
	title: 'tabs开发指导',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-component-tabs',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'tabs开发指导';

const assets = {

};



const toc = [{
  "value": "创建tabs",
  "id": "创建tabs",
  "level": 2
}, {
  "value": "设置样式",
  "id": "设置样式",
  "level": 2
}, {
  "value": "显示页签索引",
  "id": "显示页签索引",
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
        id: "tabs开发指导",
        children: "tabs开发指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["tabs是一种常见的界面导航结构。通过页签容器，用户可以快捷地访问应用的不同模块。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-container-comp/js-components-container-tabs/js-components-container-tabs",
        children: "tabs API"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建tabs",
      children: "创建tabs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在pages/index目录下的hml文件中创建一个tabs组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n    <tabs>\n        <tab-bar>\n            <text>item1</text>\n            <text>item2</text>\n        </tab-bar>\n        <tab-content class=\"tabContent\">\n            <div class=\"text\">\n                <text>content1</text>\n            </div>\n            <div class=\"text\">\n                <text>content2</text>\n            </div>\n        </tab-content>\n    </tabs>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #F1F3F5;\n}\n.tabContent{\n  width: 100%;\n  height: 100%;\n}\n.text{\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(688165)/* ["default"] */.A) + "",
        width: "294",
        height: "561"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置样式",
      children: "设置样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置tabs背景色及边框和tab-content布局。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <tabs class=\"tabs\">\n    <tab-bar class=\"tabBar\">\n      <text class=\"tabBarItem\">item1</text>\n      <text class=\"tabBarItem\">item2</text>\n    </tab-bar>\n    <tab-content class=\"tabContent\">\n      <div class=\"tabContent\">\n        <text>content1</text>\n      </div>\n      <div class=\"tabContent\" >\n        <text>content2</text>\n      </div>\n    </tab-content>\n  </tabs>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n background-color:#F1F3F5;\n}\n.tabs{\n  margin-top: 20px;\n border: 1px solid #2262ef;\n  width: 99%;\n  padding: 10px;\n}\n.tabBar{\n  width: 100%;\n  border: 1px solid #78abec;\n}\n.tabContent{\n  width: 100%;\n  margin-top: 10px;\n  height: 300px;\n  color: blue;\n  justify-content: center;\n  align-items: center;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(375195)/* ["default"] */.A) + "",
        width: "317",
        height: "516"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "显示页签索引",
      children: "显示页签索引"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以为tabs添加change事件，实现页签切换后显示当前页签索引的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\" style=\"background-color:#F1F3F5;\">\n  <tabs class=\"tabs\" onchange=\"tabChange\">\n    <tab-bar class=\"tabBar\">\n      <text class=\"tabBarItem\">item1</text>\n      <text class=\"tabBarItem\">item2</text>\n    </tab-bar>\n    <tab-content class=\"tabContent\">\n      <div>\n        <image src=\"common/images/bg-tv.jpg\" style=\"object-fit: contain;\"> </image>\n      </div>\n      <div>\n        <image src=\"common/images/img1.jpg\" style=\"object-fit: contain;\"> </image>\n      </div>\n    </tab-content>\n  </tabs>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nimport promptAction from '@ohos.promptAction';\nexport default {\n  tabChange(e){\n    promptAction.showToast({\n      message: \"Tab index: \" + e.index\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(507448)/* ["default"] */.A) + "",
        width: "210",
        height: "473"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(825129)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["tabs子组件仅支持一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-container-comp/js-components-container-tab-bar/js-components-container-tab-bar",
        children: "<tab-bar>"
      }), "和一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-container-comp/js-components-container-tab-content/js-components-container-tab-content",
        children: "<tab-content>"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在本场景中，开发者可以点击标签切换内容，选中后标签文字颜色变红，并显示下划线。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用tabs、tab-bar和tab-content实现点击切换功能，再定义数组，设置属性。使用change事件改变数组内的属性值实现变色及下划线的显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <tabs onchange=\"changeTabactive\">\n    <tab-content>\n      <div class=\"item-container\" for=\"data.list\">\n        <div if=\"{{$item.title=='List1'?true:false}}\">\n          <image src=\"common/images/bg-tv.jpg\" style=\"object-fit: contain;\"> </image>\n        </div>\n        <div if=\"{{$item.title=='List2'?true:false}}\">\n          <image src=\"common/images/img1.jpg\" style=\"object-fit: none;\"> </image>\n        </div>\n        <div if=\"{{$item.title=='List3'?true:false}}\">\n          <image src=\"common/images/img2.jpg\" style=\"object-fit: contain;\"> </image>\n        </div>\n      </div>\n    </tab-content>\n    <tab-bar class=\"tab_bar mytabs\" mode=\"scrollable\">\n      <div class=\"tab_item\" for=\"data.list\">\n        <text style=\"color: {{$item.color}};\">{{$item.title}}</text>\n        <div class=\"underline-show\" if=\"{{$item.show}}\"></div>\n        <div class=\"underline-hide\" if=\"{{!$item.show}}\"></div>\n      </div>\n    </tab-bar>\n  </tabs>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\nwidth: 100%;\nheight: 100%;\nbackground-color:#F1F3F5;\n}\n.tab_bar {\n  width: 100%;\n  height: 150px;\n}\n.tab_item {\n  height: 30%;\n  flex-direction: column;\n  align-items: center;\n}\n.tab_item text {\n  font-size: 32px;\n}\n.item-container {\n  justify-content: center;\n  flex-direction: column;\n}\n.underline-show {\n  height: 2px;\n  width: 160px;\n  background-color: #FF4500;\n  margin-top: 7.5px;\n}\n.underline-hide {\n  height: 2px;\n  margin-top: 7.5px;\n  width: 160px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data() {\n    return {\n      data: {\n        color_normal: '#878787',\n        color_active: '#ff4500',\n        show: true,\n        list: [{\n          i: 0,\n          color: '#ff4500',\n          show: true,\n          title: 'List1'\n        }, {\n          i: 1,\n          color: '#878787',\n          show: false,\n          title: 'List2'\n        }, {\n           i: 2,\n           color: '#878787',\n           show: false,\n           title: 'List3'\n        }]\n      }\n    }\n  },\n  changeTabactive (e) {\n    for (let i = 0; i < this.data.list.length; i++) {\n      let element = this.data.list[i];\n      element.show = false;\n      element.color = this.data.color_normal;\n      if (i === e.index) {\n        element.show = true;\n        element.color = this.data.color_active;\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(338078)/* ["default"] */.A) + "",
        width: "318",
        height: "664"
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
375195(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958094-7c573319991fc753480a50e4fe997d45.gif");

},
507448(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478095-aec00087df21172ed5315447c6998188.gif");

},
688165(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438139-e95402ca6520e6de7b4cbfa25bae2e1e.gif");

},
825129(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
338078(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798446-a3eff448c62a27f4a9686200bc8503ae.gif");

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