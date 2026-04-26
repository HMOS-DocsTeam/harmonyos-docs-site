"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["547878"], {
620860(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_menu_ui_js_components_menu_md_2cc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-basic-components-ui-js-components-menu-ui-js-components-menu-md-2cc.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_menu_ui_js_components_menu_md_2cc_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-menu/ui-js-components-menu","title":"menu开发指导","description":"提供菜单组件，作为临时性弹出窗口，用于展示用户可执行的操作，具体用法请参考menu。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-menu/ui-js-components-menu.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-menu","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-menu/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-menu/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"menu开发指导","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-menu","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"toolbar开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-toolbar/"},"next":{"title":"marquee开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-marquee/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-menu/ui-js-components-menu.md


const frontMatter = {
	title: 'menu开发指导',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-menu',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'menu开发指导';

const assets = {

};



const toc = [{
  "value": "创建menu组件",
  "id": "创建menu组件",
  "level": 2
}, {
  "value": "设置样式",
  "id": "设置样式",
  "level": 2
}, {
  "value": "绑定事件",
  "id": "绑定事件",
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
        id: "menu开发指导",
        children: "menu开发指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["提供菜单组件，作为临时性弹出窗口，用于展示用户可执行的操作，具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-menu/js-components-basic-menu",
        children: "menu"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建menu组件",
      children: "创建menu组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在pages/index目录下的hml文件中创建一个menu组件，添加target、type、title属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml-->\n<div class=\"container\">\n  <text class=\"title-text\" id=\"textId\">show menu</text>\n  <menu target=\"textId\" type=\"click\" title=\"title\">\n    <option value=\"Item 1\">Item 1</option>\n    <option value=\"Item 2\">Item 2</option>\n    <option value=\"Item 3\">Item 3</option>\n  </menu>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  background-color: #F1F3F5;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.title-text{\n  font-size: 35px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(14139)/* ["default"] */.A) + "",
        width: "474",
        height: "433"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(379253)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["menu仅支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-option/js-components-basic-option",
          children: "option"
        }), "子组件。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "menu组件不支持focusable、disabled属性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置样式",
      children: "设置样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为menu组件设置样式，例如字体颜色、大小、字符间距等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml-->\n<div class=\"container\">\n  <text class=\"title-text\" id=\"textId\">show menu</text>\n  <menu target=\"textId\" type=\"click\" title=\"title\">\n    <option value=\"Item 1\">Item 1</option>\n    <option value=\"Item 2\">Item 2</option>\n    <option value=\"Item 3\">Item 3</option>\n  </menu>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  background-color: #F1F3F5;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.title-text{\n  font-size: 35px;\n  background-color: #5a5aee;\n  color: white;\n  width: 70%;\n  text-align: center;\n  height: 85px;\n  border-radius: 12px;\n}\n.menu{\n  text-color: blue;\n  font-size: 35px;\n  letter-spacing: 2px;\n}\noption{\n  color: #6a6aef;\n  font-size: 30px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(102571)/* ["default"] */.A) + "",
        width: "505",
        height: "470"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绑定事件",
      children: "绑定事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为menu组件绑定oncancel事件（取消操作时触发）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml-->\n<div class=\"container\">\n  <text  class=\"title-text\" id=\"textId\" onclick=\"textClick\">show menu</text>\n  <menu  title=\"title\" oncancel=\"cancel\" id=\"menuId\">\n    <option value=\"Item 1\">Item 1</option>\n    <option value=\"Item 2\">Item 2</option>\n    <option value=\"Item 3\">Item 3</option>\n  </menu>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  background-color: #F1F3F5;\n  width: 100%;\n}\n.title-text{\n  font-size: 35px;\n  background-color: #5a5aee;\n  color: white;\n  width: 70%;\n  text-align: center;\n  height: 85px;\n  border-radius: 12px;\n  margin-top: 500px;\n  margin-left: 15%;\n}\nmenu{\n  text-color: blue;\n  font-size: 35px;\n  letter-spacing: 2px;\n}\noption{\n  color: #6a6aef;\n  font-size: 30px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nimport promptAction from '@ohos.promptAction';\nexport default {\n  cancel() {\n    promptAction.showToast({\n      message: \"cancel\"\n    })\n  },\n  textClick() {\n    this.$element(\"menuId\").show({ x: 175,y: 590 });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(923646)/* ["default"] */.A) + "",
        width: "336",
        height: "539"
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
379253(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
923646(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438169-a3c8233c3a7ff545c093f2381442992b.gif");

},
14139(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478123-393cec0dd8eab8ae8af6e1fae0420259.png");

},
102571(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798474-5cfaf25810dcae6f83ac048cd49c6502.png");

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