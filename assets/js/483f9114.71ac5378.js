"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["477066"], {
668798(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_container_components_ui_js_components_stepper_ui_js_components_stepper_md_483_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-container-components-ui-js-components-stepper-ui-js-components-stepper-md-483.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_container_components_ui_js_components_stepper_ui_js_components_stepper_md_483_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-stepper/ui-js-components-stepper","title":"stepper开发指导","description":"当一个任务需要多个步骤时，可以使用stepper组件展示当前进展。具体用法请参考stepper API。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-stepper/ui-js-components-stepper.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-stepper","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-stepper/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-stepper/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"stepper开发指导","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-stepper","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"form开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-form/"},"next":{"title":"tabs开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-component-tabs/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-stepper/ui-js-components-stepper.md


const frontMatter = {
	title: 'stepper开发指导',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-stepper',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'stepper开发指导';

const assets = {

};



const toc = [{
  "value": "创建stepper组件",
  "id": "创建stepper组件",
  "level": 2
}, {
  "value": "设置index属性",
  "id": "设置index属性",
  "level": 2
}, {
  "value": "设置样式",
  "id": "设置样式",
  "level": 2
}, {
  "value": "添加事件",
  "id": "添加事件",
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
        id: "stepper开发指导",
        children: "stepper开发指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当一个任务需要多个步骤时，可以使用stepper组件展示当前进展。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-container-comp/js-components-container-stepper/js-components-container-stepper",
        children: "stepper API"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建stepper组件",
      children: "创建stepper组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在pages/index目录下的hml文件中创建一个stepper组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\"> \n <stepper>    \n   <stepper-item>     \n     <text>Step 1</text>\n   </stepper-item> \n   <stepper-item>     \n     <text>Step 2</text>\n   </stepper-item> \n </stepper> \n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width:100%;\n  height:100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #F1F3F5;\n}\ntext{\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(294069)/* ["default"] */.A) + "",
        width: "339",
        height: "767"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置index属性",
      children: "设置index属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面默认显示索引值为index的步骤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\"> \n <stepper index=\"2\">    \n   <stepper-item>     \n     <text>stepper-item1</text>\n   </stepper-item> \n   <stepper-item>     \n     <text>stepper-item2</text>\n   </stepper-item> \n   <stepper-item>     \n     <text>stepper-item3</text>\n   </stepper-item> \n  </stepper> \n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width:100%;\n  height:100%;\n  flex-direction: column;\n  background-color: #F1F3F5;\n}\ntext{\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(769555)/* ["default"] */.A) + "",
        width: "305",
        height: "671"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置label属性，自定义stepper-item的提示按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\"> \n <stepper index=\"1\">    \n   <stepper-item label=\"{{label_1}}\">     \n     <text>stepper-item1</text>\n   </stepper-item> \n   <stepper-item label=\"{{label_2}}\">     \n     <text>stepper-item2</text>\n   </stepper-item> \n   <stepper-item label=\"{{label_3}}\">     \n     <text>stepper-item3</text>\n   </stepper-item>\n   <stepper-item>     \n     <text>stepper-item4</text>\n   </stepper-item> \n </stepper> \n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width:100%;\n  height:100%;\n  flex-direction: column;\n  background-color: #F1F3F5;\n}\ntext{\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  data: {\n    label_1:{\n      nextLabel: 'NEXT',\n      status: 'normal'\n    },\n    label_2:{\n      prevLabel: 'BACK',\n      nextLabel: 'NEXT',\n      status: 'normal'\n    },\n    label_3:{\n      prevLabel: 'BACK',\n      nextLabel: 'END',\n      status: 'disabled'\n    },\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(314352)/* ["default"] */.A) + "",
        width: "305",
        height: "671"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置样式",
      children: "设置样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stepper组件默认填充父容器，通过border和background-color设置边框、背景色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\" > \n  <div class=\"stepperContent\">\n    <stepper class=\"stepperClass\">    \n      <stepper-item>     \n        <text>stepper-item1</text>\n      </stepper-item> \n    </stepper> \n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width:100%;\n  height:100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color:#F1F3F5;\n}\n.stepperContent{\n  width: 300px;\n  height: 300px;\n}\n.stepperClass{\n  border:1px solid silver ;\n  background-color: white;\n}\ntext{\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(782716)/* ["default"] */.A) + "",
        width: "351",
        height: "771"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加事件",
      children: "添加事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stepper分别添加finish，change，next，back，skip事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当change与next或back同时存在时，会先执行next或back事件再去执行change事件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "重新设置index属性值时要先清除index的值再重新设置，否则检测不到值的改变。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\"  style=\"background-color:#F1F3F5;\">\n  <div >\n    <stepper onfinish=\"stepperFinish\" onchange=\"stepperChange\" onnext=\"stepperNext\" onback=\"stepperBack\" onskip=\"stepperSkip\" id=\"stepperId\" index=\"{{index}}\">\n      <stepper-item>\n        <text>stepper-item1</text>\n        <button value=\"skip\" onclick=\"skipClick\"></button>\n      </stepper-item>\n      <stepper-item>\n         <text>stepper-item2</text>\n         <button value=\"skip\" onclick=\"skipClick\"></button>\n      </stepper-item>\n      <stepper-item>\n        <text>stepper-item3</text>\n      </stepper-item>\n    </stepper>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.doc-page {\n  width:100%;\n  height:100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\nstepper-item{\n  width: 100%;\n  flex-direction: column;\n  align-self: center;\n  justify-content: center;\n}\ntext{\n  margin-top: 45%;\n  justify-content: center;\n  align-self: center;\n  margin-bottom: 50px;\n}\nbutton{\n  width: 80%;\n  height: 60px;\n  margin-top: 20px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nimport promptAction from '@ohos.promptAction';\nexport default {\n  data: {\n    index:0,\n  },\n   stepperSkip(){\n    this.index=2;\n  },\n   skipClick(){\n    this.$element('stepperId').setNextButtonStatus({status: 'skip', label: 'SKIP'});\n  },\n  stepperFinish(){\n    promptAction.showToast({\n      message: 'All Finished'\n    })\n  },\n  stepperChange(e){\n    console.info(\"stepperChange\"+e.index)\n    promptAction.showToast({\n      // index表示当前步骤的序号\n      message: 'Previous step: '+e.prevIndex+\"-------Current step:\"+e.index\n    })\n  },\n  stepperNext(e){\n    console.info(\"stepperNext\"+e.index)\n    promptAction.showToast({\n      // pendingIndex表示将要跳转的序号\n      message: 'Current step:'+e.index+\"-------Next step:\"+e.pendingIndex\n    })\n    var index = {pendingIndex:e.pendingIndex }\n    return index;\n  },\n  stepperBack(e){\n    console.info(\"stepperBack\"+e.index)\n    var index = {pendingIndex: e.pendingIndex }\n    return index;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(445736)/* ["default"] */.A) + "",
        width: "305",
        height: "671"
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
782716(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
769555(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438137-782455d1bd4acefcf507b99b52f7bc9f.gif");

},
314352(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958092-62f9d567b2a183ef33f60132c8e81b27.gif");

},
445736(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798444-1366929d9ca716e38cbadde7c641d19b.gif");

},
294069(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798442-bd1c20b6ddaad358cf5b4b35f82e7f83.gif");

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