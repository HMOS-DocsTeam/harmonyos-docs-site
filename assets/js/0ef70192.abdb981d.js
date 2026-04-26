"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["11016"], {
861170(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_container_components_ui_js_components_form_ui_js_components_form_md_0ef_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-container-components-ui-js-components-form-ui-js-components-form-md-0ef.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_container_components_ui_js_components_form_ui_js_components_form_md_0ef_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-form/ui-js-components-form","title":"form开发指导","description":"form是一个表单容器，支持容器内Input组件内容的提交和重置。具体用法请参考form API。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-form/ui-js-components-form.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-form","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-form/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-form/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"form开发指导","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-form","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"dialog开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-dialog/"},"next":{"title":"stepper开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-stepper/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-form/ui-js-components-form.md


const frontMatter = {
	title: 'form开发指导',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-form',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'form开发指导';

const assets = {

};



const toc = [{
  "value": "创建form组件",
  "id": "创建form组件",
  "level": 2
}, {
  "value": "实现表单缩放",
  "id": "实现表单缩放",
  "level": 2
}, {
  "value": "设置form样式",
  "id": "设置form样式",
  "level": 2
}, {
  "value": "添加响应事件",
  "id": "添加响应事件",
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
        id: "form开发指导",
        children: "form开发指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["form是一个表单容器，支持容器内", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-input/js-components-basic-input",
        children: "Input"
      }), "组件内容的提交和重置。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-container-comp/js-components-container-form/js-components-container-form",
        children: "form API"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建form组件",
      children: "创建form组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在pages/index目录下的hml文件中创建一个form组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <form style=\"width: 100%; height: 20%\">  \n    <input type=\"text\" style=\"width:80%\"></input>\n  </form>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width:100%;\n  height:100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #F1F3F5;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(611662)/* ["default"] */.A) + "",
        width: "456",
        height: "844"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现表单缩放",
      children: "实现表单缩放"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为form组件添加click-effect属性，实现点击表单后的缩放效果，click-effect枚举值请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-universal-comp-inform/js-components-common-attributes/js-components-common-attributes",
        children: "通用属性"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <form  id=\"formId\" class=\"formClass\" click-effect=\"spring-large\">\n    <input type=\"text\"></input>  \n  </form>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置form样式",
      children: "设置form样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过为form添加background-color和border属性，来设置表单的背景颜色和边框。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #F1F3F5;\n}\n.formClass{\n  width: 80%;\n  height: 100px;\n  padding: 10px;\n  border: 1px solid #cccccc;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(567554)/* ["default"] */.A) + "",
        width: "282",
        height: "529"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加响应事件",
      children: "添加响应事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为form组件添加submit和reset事件，来提交表单内容或重置表单选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n  <form onsubmit='onSubmit' onreset='onReset' class=\"form\">\n    <div style=\"width: 100%;justify-content: center;\">\n      <label>Option 1</label>\n      <input type='radio' name='radioGroup' value='radio1'></input>\n      <label>Option 2</label>\n      <input type='radio' name='radioGroup' value='radio2'></input>\n    </div>\n    <div style=\"width: 100%;justify-content: center; margin-top: 20px\">\n      <input type=\"submit\" value=\"Submit\" style=\"width:120px; margin-right:20px;\" >   \n      </input>\n      <input type=\"reset\" value=\"Reset\" style=\"width:120px;\"></input>\n    </div>\n  </form>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* index.css */\n.container{\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  background-color: #F1F3F5;\n}\n.form{\n  width: 100%;\n  height: 30%;\n  margin-top: 40%;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nimport promptAction from '@ohos.promptAction';\nexport default{\n  onSubmit(result) {\n    promptAction.showToast({\n      message: result.value.radioGroup\n    })\n  },\n  onReset() {\n    promptAction.showToast({\n      message: 'Reset All'\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(82111)/* ["default"] */.A) + "",
        width: "310",
        height: "566"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在本场景中，开发者可以选择相应选项并提交或重置数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-input/js-components-basic-input",
        children: "Input"
      }), "组件，分别设置type属性为checkbox（多选框）和radio（单选框），再使用form组件的onsubmit和onreset事件实现表单数据的提交与重置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n   <form onsubmit=\"formSubmit\" onreset=\"formReset\">\n <text style=\"font-size: 30px; margin-bottom: 20px; margin-top: 100px;\">\n      <span > Form </span>\n  </text>\n    <div style=\"flex-direction: column;width: 90%;padding: 30px 0px;\">\n     <text class=\"txt\">Select 1 or more options</text>\n      <div style=\"width: 90%;height: 150px;align-items: center;justify-content: space-around;\">\n        <label target=\"checkbox1\">Option 1</label>\n        <input id=\"checkbox1\" type=\"checkbox\" name=\"checkbox1\"></input>\n        <label target=\"checkbox2\">Option 2</label>\n        <input id=\"checkbox2\" type=\"checkbox\" name=\"checkbox2\"></input>\n       </div>\n       <divider style=\"margin: 20px 0px;color: pink;height: 5px;\"></divider>\n       <text class=\"txt\">Select 1 option</text>\n       <div style=\"width: 90%;height: 150px;align-items: center;justify-content: space-around;\">\n         <label target=\"radio1\">Option 1</label>\n         <input id=\"radio1\" type=\"radio\" name=\"myradio\"></input>\n         <label target=\"radio2\">Option 2</label>\n         <input id=\"radio2\" type=\"radio\" name=\"myradio\"></input>\n       </div>\n       <divider style=\"margin: 20px 0px;color: pink;height: 5px;\"></divider>\n       <text class=\"txt\">Text box</text>\n       <input type=\"text\" placeholder=\"Enter content.\" style=\"margin-top: 50px;\"></input>\n       <div style=\"width: 90%;align-items: center;justify-content: space-between;margin: 40px;\">\n         <input type=\"submit\">Submit</input>\n         <input type=\"reset\">Reset</input>\n       </div>\n    </div>\n  </form>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* index.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction:column;\n  align-items:center;\n  background-color:#F1F3F5;\n}\n.txt {\n  font-size:33px;\n  font-weight:bold;\n  color:darkgray;\n}\nlabel{\n  font-size: 20px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nimport promptAction from '@ohos.promptAction';\nexport default {\n  formSubmit() {\n    promptAction.showToast({\n      message: 'Submitted.'\n    })\n  },\n  formReset() {\n    promptAction.showToast({\n      message: 'Reset.'\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(960953)/* ["default"] */.A) + "",
        width: "311",
        height: "613"
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
960953(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478091-1057a5bef69d4c4e9ec1f369f3bd22f0.gif");

},
567554(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438135-9228b6aef3d9533b6a632b2537931051.gif");

},
82111(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958090-f50c5ae6eb079c3f603909e80f57de29.gif");

},
611662(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798440-1da76a659f7ac95eabe594195278d8cc.png");

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