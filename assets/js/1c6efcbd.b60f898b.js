"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["886912"], {
346507(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_search_ui_js_components_search_md_1c6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-basic-components-ui-js-components-search-ui-js-components-search-md-1c6.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_search_ui_js_components_search_md_1c6_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-search/ui-js-components-search","title":"search开发指导","description":"提供搜索框组件，用于提供用户搜索内容的输入区域，具体用法请参考search。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-search/ui-js-components-search.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-search","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-search/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-search/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"search开发指导","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-search","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"qrcode开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-qrcode/"},"next":{"title":"Canvas对象","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-canvas/ui-js-components-canvas/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-search/ui-js-components-search.md


const frontMatter = {
	title: 'search开发指导',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-search',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'search开发指导';

const assets = {

};



const toc = [{
  "value": "创建search组件",
  "id": "创建search组件",
  "level": 2
}, {
  "value": "设置属性",
  "id": "设置属性",
  "level": 2
}, {
  "value": "添加样式",
  "id": "添加样式",
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
        id: "search开发指导",
        children: "search开发指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["提供搜索框组件，用于提供用户搜索内容的输入区域，具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-search/js-components-basic-search",
        children: "search"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建search组件",
      children: "创建search组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在pages/index目录下的hml文件中创建一个search组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml-->\n<div class=\"container\">\n  <search></search>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #F1F3F5;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(911612)/* ["default"] */.A) + "",
        width: "313",
        height: "65"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置属性",
      children: "设置属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置hint、icon和searchbutton属性设置搜索框的提示文字、图标和末尾搜索按钮的内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml-->\n<div class=\"container\">\n  <search hint=\"Please enter the search content\"  searchbutton=\"search\" icon=\"/common/search1.png\"></search>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #F1F3F5;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(687252)/* ["default"] */.A) + "",
        width: "461",
        height: "603"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加样式",
      children: "添加样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过color、placeholder-color和caret-color样式来设置搜索框的文本颜色、提示文本颜色和光标颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml-->\n<div class=\"container\">\n  <search hint=\"Please enter the search content\"  searchbutton=\"search\" ></search>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #F1F3F5;\n}\nsearch{\n  color: black;\n  placeholder-color: black;\n  caret-color: red;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(233979)/* ["default"] */.A) + "",
        width: "308",
        height: "598"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "绑定事件",
      children: "绑定事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向search组件添加change、search、submit、share和translate事件，对输入信息进行操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml-->\n<div class=\"container\">\n  <text style=\"margin-left: -7px;\">\n    <span>Enter text and then touch and hold what you've entered</span>\n  </text>\n  <search hint=\"Please enter the search content\"  searchbutton=\"search\" onsearch=\"search\" onchange=\"change\" ontranslate=\"translate\" onshare=\"share\"\n  onsubmit=\"submit\">\n  </search>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #F1F3F5;\n}\ntext{\n  width: 100%;\n  font-size: 25px;\n  text-align: center;\n  margin-bottom: 100px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.js\nimport promptAction from '@ohos.promptAction';\nexport default {\n  search(e){\n    promptAction.showToast({\n      message: e.value,\n      duration: 3000,\n    });\n  },\n  translate(e){\n    promptAction.showToast({\n      message:  e.value,\n      duration: 3000,\n    });\n  },\n  share(e){\n    promptAction.showToast({\n      message:  e.value,\n      duration: 3000,\n    });\n  },\n  change(e){\n    promptAction.showToast({\n      message:  e.value,\n      duration: 3000,\n    });\n  },\n  submit(e){\n    promptAction.showToast({\n      message: 'submit',\n      duration: 3000,\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(321755)/* ["default"] */.A) + "",
        width: "310",
        height: "614"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在本场景中通过下拉菜单选择search、Textarea和Input组件来实现搜索和输入效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml-->\n<div style=\"flex-direction: column;align-items: center;justify-content: center; width: 100%;\">\n  <select class=\"slt1\" id=\"slt1\" onchange=\"setfield\">\n    <option value=\"search\">search</option>\n    <option value=\"textarea\">Textarea</option>\n    <option value=\"input\">Input</option>\n  </select>\n  <div if=\"{{showsearch}}\" style=\"flex-direction: column;align-items: center;margin-top: 50px;height: 400px;justify-content: space-around;\">\n    <search class=\"field\" id=\"search1\" hint=\"search1\" onsubmit=\"submit\" onchange=\"change\" ></search>\n    <search class=\"field\" id=\"search2\" icon=\"common/search1.png\" hint=\"search2\" show=\"{{showsec}}\" onsubmit=\"submit\" onchange=\"change\" ></search>\n  </div>\n  <div if=\"{{showtextarea}}\" style=\"flex-direction: column;align-items: center;margin-top: 50px;height: 400px;justify-content: space-around;\">\n    <textarea class=\"field\" id=\"textarea1\" extend=\"true\" placeholder=\"textarea1\" onchange=\"change\" ></textarea>\n    <textarea class=\"field\" id=\"textarea2\" extend=\"true\" placeholder=\"textarea2\" onchange=\"change\" show=\"{{showsec}}\"></textarea>\n  </div>\n  <div if=\"{{showinput}}\" style=\"flex-direction: column;align-items: center;margin-top: 50px;height: 400px;justify-content: space-around;\">\n    <input type=\"text\" class=\"field\" id=\"input1\" placeholder=\"input1\" onchange=\"change\" ></input>\n    <input type=\"text\" class=\"field\" id=\"input2\" placeholder=\"input2\" onchange=\"change\" show=\"{{showsec}}\"></input>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.field {\n  width: 80%;\n  color: mediumaquamarine;\n  font-weight: 600;\n  placeholder-color: orangered;\n}\n.slt1{\n  font-size: 50px;\n  position: absolute;\n  left: 50px;\n  top: 50px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.js\nimport promptAction from '@ohos.promptAction';\nexport default {\n  data: {\n    showsearch: true,\n    showtextarea: false,\n    showinput: false,\n    showsec: true,\n  },\n  setfield(e) {\n    this.field = e.newValue\n    if (e.newValue == 'search') {\n      this.showsearch = true\n      this.showtextarea = false\n      this.showinput = false\n    } else if (e.newValue == 'textarea') {\n      this.showsearch = false\n      this.showtextarea = true\n      this.showinput = false\n    } else {\n      this.showsearch = false\n      this.showtextarea = false\n      this.showinput = true\n    }\n  },\n  submit(e) {\n    promptAction.showToast({\n      message: '搜索！',\n      duration: 2000\n    })\n  },\n  change(e) {\n    promptAction.showToast({\n      message: '内容:' + e.text,\n      duration: 2000\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(940073)/* ["default"] */.A) + "",
        width: "308",
        height: "607"
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
321755(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438175-577caecb6d5cf182cf99367b24de81f9.gif");

},
940073(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958130-ae85b397997fa8ce95d217f2d6c0d47c.gif");

},
687252(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478129-edaa70fd90106616e73524eb8eed4bc0.png");

},
911612(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATkAAABBCAYAAACq59PpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPVSURBVHhe7d05bxNBHIZxf0ZQQkLukBu+AQiBKECIcImCAAUBKiCiA9GAKEH0QCD3fTsXKQe9I8Za2xOFDcra+9dT/GTH3p10j2b28BZ2dvcdAFhF5ACYRuQAmEbkAJhG5ACYRuQAmEbkAJhG5ACYRuQAmEbkAJhG5ACYRuQAmEbkAJhG5ACYRuQAmEbkAJj2T5Hb3tlzu3u/AaBuqEuxXlVKNZMLA8ve/gEAZCb0R6+xPh0mGrnYIJtb2255Zc0tLq14S8urAJCZ0B51SD069kwulFKvG5vF0uCV/xAAail0aX1jqxS8WPiqIqfAqZJhkFDO5OAAUGvJlaVoUhZbhZZFbqu449bWN/0OsUEBoF6pW6trG75jya6VIqcvwoZEDkDeJNul1WhZ5Irbu1U7AECeaeKm5auPXGwDAMgzzep0IqKgNazENgKAvNL5hZXVdVfgGBwAi0LbCkt/T8PGNgKAvFLXdJlJIfZlGlrqakoYQrmwuFy1DQDUyn9HLkRNsdN7LhwGUE9SRS7M2OYXlnzM5uYX3cDgedfW3uk6u8658Z8T/hYL0UG/2BgAkKVUkVPYwsztytVrrqe3312/cdN9+PjJ3bv/wHV197jBoQulAFbuDwBZS71c1Qzt9dgb19Tc4md24XO915L1bEubezjymJMZAOpCqsiFY24K3I/xX25yaqb0XZjlKXStbR1+yZrcFwBqIfVMTjHr6Oz2EZudWyh9ruN0os/bO7rcxOR02X4AUAupj8np50w0U9MNsFPTs1XbKHQ6ERH7DgCylnomp4hpufr5y9eymZxouaolrI7LJY/XAUCtHOvEw9t3733IwhXF+lyvOqPaeKbZjTx64o/NhSVs5RgAkJXUkRPFbfj2XXfqdIPrHxhyo89euN6+AdfQ2OT6+gfd09Hn/pq5cIFwbAwAyMKxIqdZm2iWdmv4jrt46bKP3vTMnP9ckdOSVsflFLrYGACQhWNF7igK3ctXY66ltZ07HwDU1IlELtz+9e37uA9ebBsAyMKJRA4A6gWRA2AakQNgGpEDYFohPG8VAKzR7af+kYS6HzW2AQDklX4spPRwaT2AVdez8RtwACzQTQjqWilyIXRhRsfN9QDyRt3SdbmawYXAVUVub//Av9eGzOoA5I2emK+ORSMn2iBsxO1YAPJCEzOFLTQs2bWyyCVpBylu7/rgJW/P4lYtAFmrbJCOu6lPyVVozJGRS/6tgVRJDQwAWVN/Ym1K/l3p0MgBgAVEDoBpRA6AaUQOgGlEDoBpRA6AaUQOgGlEDoBpRA6AaUQOgGlEDoBh++4PYL0xQ4ihpnwAAAAASUVORK5CYII=");

},
233979(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798480-22e0ee157b7e9f644c52ed8623d8e59c.gif");

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