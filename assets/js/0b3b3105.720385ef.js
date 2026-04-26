"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["247116"], {
927235(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_toolbar_ui_js_components_toolbar_md_0b3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-basic-components-ui-js-components-toolbar-ui-js-components-toolbar-md-0b3.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_toolbar_ui_js_components_toolbar_md_0b3_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-toolbar/ui-js-components-toolbar","title":"toolbar开发指导","description":"toolbar为页面工具栏组件，用于展示针对当前界面的操作选项，可作为页面的一级导航。具体用法请参考toolbar。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-toolbar/ui-js-components-toolbar.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-toolbar","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-toolbar/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-toolbar/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"toolbar开发指导","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-toolbar","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"switch开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-switch/"},"next":{"title":"menu开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-menu/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-toolbar/ui-js-components-toolbar.md


const frontMatter = {
	title: 'toolbar开发指导',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-toolbar',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'toolbar开发指导';

const assets = {

};



const toc = [{
  "value": "创建toolbar组件",
  "id": "创建toolbar组件",
  "level": 2
}, {
  "value": "添加子组件",
  "id": "添加子组件",
  "level": 2
}, {
  "value": "设置样式",
  "id": "设置样式",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "toolbar开发指导",
        children: "toolbar开发指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["toolbar为页面工具栏组件，用于展示针对当前界面的操作选项，可作为页面的一级导航。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-toolbar/js-components-basic-toolbar",
        children: "toolbar"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建toolbar组件",
      children: "创建toolbar组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在pages/index目录下的hml文件中创建一个toolbar组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <toolbar style=\"background-color: #F1F3F5;\">\n    <toolbar-item value=\"item1\"></toolbar-item>\n    <toolbar-item value=\"item2\"></toolbar-item>\n  </toolbar>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #F1F3F5;\n}\ntoolbar-item{\n  font-size: 35px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(885361)/* ["default"] */.A) + "",
        width: "313",
        height: "456"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加子组件",
      children: "添加子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "toolbar组件仅支持toolbar-item为子组件，页面最多可以展示5个toolbar-item子组件，如果存在6个及以上toolbar-item，则保留前面4个，后续的将收纳到工具栏上的更多项中，通过点击更多项弹窗进行展示。并且更多项展示的组件样式采用系统默认样式，toolbar-item上设置的自定义样式不生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <toolbar>\n    <toolbar-item value=\"item1\"></toolbar-item>    \n    <toolbar-item value=\"item2\"></toolbar-item>    \n    <toolbar-item value=\"item3\"></toolbar-item>    \n    <toolbar-item value=\"item4\"></toolbar-item>    \n    <toolbar-item value=\"item5\"></toolbar-item>    \n    <toolbar-item value=\"item6\"></toolbar-item>\n  </toolbar>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #F1F3F5;\n}\ntoolbar-item{\n  font-size: 35px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(358470)/* ["default"] */.A) + "",
        width: "313",
        height: "456"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置样式",
      children: "设置样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置position样式控制toolbar组件的位置，并设置子组件toolbar-item的字体颜色、大小及背景色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <toolbar style=\"position: fixed;bottom: 5%;width: 100%;background-color: #F1F3F5;\">\n    <toolbar-item value=\"item1\" icon=\"common/images/1.png\" class=\"toolbarActive\"></toolbar-item>\n    <toolbar-item value=\"item2\" icon=\"common/images/2.png\"></toolbar-item>\n    <toolbar-item value=\"item3\" icon=\"common/images/1.png\"></toolbar-item>\n    <toolbar-item value=\"item4\" icon=\"common/images/2.png\"></toolbar-item>\n  </toolbar>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  background-color: #F1F3F5;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\ntoolbar-item{\n  font-size: 35px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(900945)/* ["default"] */.A) + "",
        width: "413",
        height: "82"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绑定事件",
      children: "绑定事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分别给toolbar-item绑定单击事件和长按事件，单击后文本变红，长按时文本变蓝。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <toolbar style=\"position: fixed;top: 50%;width: 100%;background-color: #F1F3F5;\">\n    <toolbar-item value=\"item1\" icon=\"common/images/1.png\" style=\"color: {{itemColor}};\" onclick=\"itemClick\"></toolbar-item>\n    <toolbar-item value=\"item2\" icon=\"common/images/2.png\"  style=\"color: {{itemColor}}\"></toolbar-item>\n    <toolbar-item value=\"item3\" icon=\"common/images/3.png\"  style=\"color: {{itemColor}}\" onlongpress=\"itemLongPress\"></toolbar-item>\n  </toolbar>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  background-color: #F1F3F5;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\ntoolbar-item{\n  font-size: 35px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nimport promptAction from '@ohos.promptAction';\nexport default {\n  data:{\n    itemColor:'black'\n  },\n  itemClick(){\n    this.itemColor= \"red\";\n    promptAction.showToast({duration:2000,message:'item click'});\n  },\n  itemLongPress(){\n    promptAction.showToast({duration:2000,message:'item long press'});\n    this.itemColor= \"blue\";\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(953069)/* ["default"] */.A) + "",
        width: "382",
        height: "210"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(726999)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "toolbar组件不支持添加事件和方法，但其子组件toolbar-item支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本场景中开发者可点击toolbar-item组件，改变当前组件文本颜色并更换相对应的图片内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用for循环创建toolbar-item组件并添加点击事件，点击后获得索引值进行存储。设置文本颜色时，判断当前索引值是否为储存的值，若相同则设置为红色，不同则使用默认颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <image src=\"{{imgList[active]}}\"></image>\n  <toolbar style=\"position: fixed;bottom: 5%;width: 100%;background-color: #F1F3F5;\">\n    <toolbar-item value=\"{{ item.option}}\" icon=\"{{item.icon}}\" style=\"color: {{active == $idx?'red':'black'}};background-color: {{active== $idx?'#dbe7f1':'#F1F3F5'}};\" for=\"{{item in itemList}}\" onclick=\"itemClick({{$idx}})\"></toolbar-item>\n    </toolbar>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  background-color: #F1F3F5;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\ntoolbar-item{\n  font-size: 35px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data:{\n    active: 0,\n    imgList:[\"common/images/1.png\",\"common/images/2.png\",\"common/images/3.png\",\"common/images/4.png\"],\n    itemList:[\n      {option:'item1',icon:'common/images/1.png'},\n      {option:'item2',icon:'common/images/2.png'},\n      {option:'item3',icon:'common/images/3.png'},\n      {option:'item4',icon:'common/images/4.png'},\n    ]\n  },\n  itemClick(id){\n    this.active= id;\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(534058)/* ["default"] */.A) + "",
        width: "245",
        height: "517"
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
358470(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478121-e19c2c658936421aa632392dffd573c5.gif");

},
885361(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958120-36b6e19311fed2ac3c610aadb9ad8eb4.gif");

},
900945(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798472-b3075b981863f9aaacd04e294b4524d5.png");

},
534058(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958122-c6d3201b7dbf34268847fb86138a0542.gif");

},
726999(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
953069(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438167-eb1535067db08a6c2619ee8648f81213.gif");

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