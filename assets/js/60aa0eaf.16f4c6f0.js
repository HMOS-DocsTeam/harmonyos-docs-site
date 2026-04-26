"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["997480"], {
436732(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_building_ui_ui_js_building_ui_routes_ui_js_building_ui_routes_md_60a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-building-ui-ui-js-building-ui-routes-ui-js-building-ui-routes-md-60a.json
var site_docs_arkui_ui_js_dev_ui_js_building_ui_ui_js_building_ui_routes_ui_js_building_ui_routes_md_60a_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-routes/ui-js-building-ui-routes","title":"页面路由","description":"很多应用由多个页面组成，比如用户可以从音乐列表页面点击歌曲，跳转到该歌曲的播放界面。开发者需要通过页面路由将这些页面串联起来，按需实现跳转。","source":"@site/docs/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-routes/ui-js-building-ui-routes.md","sourceDirName":"arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-routes","slug":"/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-routes/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-routes/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"页面路由","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-building-ui-routes","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"手势事件","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-event/"},"next":{"title":"list开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-list/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-routes/ui-js-building-ui-routes.md


const frontMatter = {
	title: '页面路由',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-building-ui-routes',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '页面路由';

const assets = {

};



const toc = [{
  "value": "构建页面布局",
  "id": "构建页面布局",
  "level": 2
}, {
  "value": "构建页面样式",
  "id": "构建页面样式",
  "level": 2
}, {
  "value": "实现跳转",
  "id": "实现跳转",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "页面路由",
        children: "页面路由"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "很多应用由多个页面组成，比如用户可以从音乐列表页面点击歌曲，跳转到该歌曲的播放界面。开发者需要通过页面路由将这些页面串联起来，按需实现跳转。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面路由router根据页面的uri找到目标页面，从而实现跳转。以最基础的两个页面之间的跳转为例，具体实现步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在“Project“窗口，打开src > main >js >MainAbility，右键点击pages文件夹，选择NewJS Page，创建一个详情页。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用router.push()路由到详情页。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用router.back()回到首页。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "构建页面布局",
      children: "构建页面布局"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "index和detail这两个页面均包含一个text组件和button组件：text组件用来指明当前页面，button组件用来实现两个页面之间的相互跳转。hml文件代码示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.hml -->\n<div class=\"container\">\n  <text class=\"title\">This is the index page.</text>\n  <button type=\"capsule\" value=\"Go to the second page\" class=\"button\" onclick=\"launch\"></button>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- detail.hml -->\n<div class=\"container\">\n  <text class=\"title\">This is the detail page.</text>\n  <button type=\"capsule\" value=\"Go back\" class=\"button\" onclick=\"launch\"></button>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "构建页面样式",
      children: "构建页面样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建index和detail页面的页面样式，text组件和button组件居中显示，两个组件之间间距为50px。css代码如下（两个页面样式代码一致）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* index.css */\n/* detail.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.title {\n  font-size: 50px;\n  margin-bottom: 50px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现跳转",
      children: "实现跳转"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了使button组件的launch方法生效，需要在页面的js文件中实现跳转逻辑。调用router.push()接口将uri指定的页面添加到路由栈中，即跳转到uri指定的页面。在调用router方法之前，需要导入router模块。代码示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.js\nimport router from '@ohos.router';\nexport default {\n  launch() {\n    router.push ({\n      url: 'pages/detail/detail',\n    });\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// detail.js\nimport router from '@ohos.router';\nexport default {\n  launch() {\n    this.getUIContext().getRouter().back();\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行效果如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(920916)/* ["default"] */.A) + "",
        width: "524",
        height: "450"
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
920916(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478085-669d8b9e2f246e9c94264462a628d065.png");

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