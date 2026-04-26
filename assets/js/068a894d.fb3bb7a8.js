"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["455834"], {
853071(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_custom_components_ui_js_custom_components_md_068_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-custom-components-ui-js-custom-components-md-068.json
var site_docs_arkui_ui_js_dev_ui_js_custom_components_ui_js_custom_components_md_068_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-custom-components/ui-js-custom-components","title":"自定义组件","description":"使用兼容JS的类Web开发范式的方舟开发框架支持自定义组件，用户可根据业务需求将已有的组件进行扩展，增加自定义的私有属性和事件，封装成新的组件，方便在工程中多次调用，提高页面布局代码的可读性。具体的封装方法示例如下：","source":"@site/docs/arkui/ui-js-dev/ui-js-custom-components/ui-js-custom-components.md","sourceDirName":"arkui/ui-js-dev/ui-js-custom-components","slug":"/arkui/ui-js-dev/ui-js-custom-components/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-custom-components/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"自定义组件","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-custom-components","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"动画帧","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-animation/ui-js-animation-js/ui-js-interpolator-animation/ui-js-animate-frame/"},"next":{"title":"使用WebGL绘制图形","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-webgl/webgl-2d-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-custom-components/ui-js-custom-components.md


const frontMatter = {
	title: '自定义组件',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-custom-components',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义组件';

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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "自定义组件",
        children: "自定义组件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用兼容JS的类Web开发范式的方舟开发框架支持自定义组件，用户可根据业务需求将已有的组件进行扩展，增加自定义的私有属性和事件，封装成新的组件，方便在工程中多次调用，提高页面布局代码的可读性。具体的封装方法示例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构建自定义组件"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- comp.hml -->\n <div class=\"item\"> \n   <text class=\"title-style\">{{title}}</text>\n   <text class=\"text-style\" onclick=\"childClicked\" focusable=\"true\">点击这里查看隐藏文本</text>\n   <text class=\"text-style\" if=\"{{showObj}}\">hello world</text>\n </div>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* comp.css */\n .item {\n   width: 700px;\n   flex-direction: column;\n   height: 300px;\n   align-items: center;\n   margin-top: 100px;\n }\n .text-style {\n   width: 100%;\n   text-align: center;\n   font-weight: 500;\n   font-family: Courier;\n   font-size: 36px;\n }\n .title-style {\n   font-weight: 500;\n   font-family: Courier;\n   font-size: 50px;\n   color: #483d8b;\n }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// comp.js\n export default {\n   props: {\n     title: {\n       default: 'title',\n     },\n     showObject: {},\n   },\n   data() {\n     return {\n       showObj: this.showObject,\n     };\n   },\n   childClicked () {\n     this.$emit('eventType1', {text: '收到子组件参数'});\n     this.showObj = !this.showObj;\n   },\n }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引入自定义组件"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!-- xxx.hml -->\n <element name='comp' src='../../common/component/comp.hml'></element> \n <div class=\"container\"> \n   <text>父组件：{{text}}</text>\n   <comp title=\"自定义组件\" show-object=\"{{isShow}}\" @event-type1=\"textClicked\"></comp>\n </div>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* xxx.css */\n .container {\n   background-color: #f8f8ff;\n   flex: 1;\n   flex-direction: column;\n   align-content: center;\n }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// xxx.js\n export default {\n   data: {\n     text: '开始',\n     isShow: false,\n   },\n   textClicked (e) {\n     this.text = e.detail.text;\n   },\n }\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本示例中父组件通过添加自定义属性向子组件传递了名称为title的参数，子组件在props中接收。同时子组件也通过事件绑定向上传递了参数text，接收时通过e.detail获取。要绑定子组件事件，父组件事件命名必须遵循事件绑定规则，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-custom-comp/js-components-custom-basic-usage/js-components-custom-basic-usage",
        children: "自定义组件的基本用法"
      }), "。自定义组件效果如下图所示："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 自定义组件的效果"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(463619)/* ["default"] */.A) + "",
        width: "1294",
        height: "281"
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
463619(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798502-1c0f445509840a033b10a8abb6732c89.png");

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