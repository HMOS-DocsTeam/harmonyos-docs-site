"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["13998"], {
544563(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_container_components_ui_js_components_dialog_ui_js_components_dialog_md_57e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-container-components-ui-js-components-dialog-ui-js-components-dialog-md-57e.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_container_components_ui_js_components_dialog_ui_js_components_dialog_md_57e_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-dialog/ui-js-components-dialog","title":"dialog开发指导","description":"dialog组件用于创建自定义弹窗，通常用来展示用户当前需要或用户必须关注的信息或操作。具体用法请参考dialog API。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-dialog/ui-js-components-dialog.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-dialog","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-dialog/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-dialog/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"dialog开发指导","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-dialog","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"list开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-list/"},"next":{"title":"form开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-form/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-container-components/ui-js-components-dialog/ui-js-components-dialog.md


const frontMatter = {
	title: 'dialog开发指导',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-dialog',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'dialog开发指导';

const assets = {

};



const toc = [{
  "value": "创建dialog组件",
  "id": "创建dialog组件",
  "level": 2
}, {
  "value": "设置弹窗响应",
  "id": "设置弹窗响应",
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
        id: "dialog开发指导",
        children: "dialog开发指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["dialog组件用于创建自定义弹窗，通常用来展示用户当前需要或用户必须关注的信息或操作。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-container-comp/js-components-container-dialog/js-components-container-dialog",
        children: "dialog API"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建dialog组件",
      children: "创建dialog组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在pages/index目录下的hml文件中创建一个dialog组件，并添加Button组件来触发dialog。dialog组件仅支持width、height、margin、margin-[left|top|right|bottom]、margin-[start|end]样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"doc-page\">\n  <dialog class=\"dialogClass\" id=\"dialogId\" dragable=\"true\">\n    <div class=\"content\">\n      <text>this is a dialog</text>\n    </div>\n  </dialog>\n  <button value=\"click me\" onclick=\"openDialog\"></button>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.doc-page {\n  width:100%;\n  height:100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #F1F3F5;\n}\n.dialogClass{\n  width: 80%;\n  height: 250px;\n  margin-start: 1%;\n}\n.content{\n  width: 100%;\n  height: 250px;\n  justify-content: center;\n  background-color: #e8ebec;\n  border-radius: 20px;\n}\ntext{\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\nbutton{\n  width: 70%;\n  height: 60px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nexport default {\n  //Touch to open the dialog box.\n  openDialog(){\n    this.$element('dialogId').show()\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(570163)/* ["default"] */.A) + "",
        width: "308",
        height: "596"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置弹窗响应",
      children: "设置弹窗响应"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者点击页面上非dialog的区域时，将触发cancel事件而关闭弹窗。同时也可以通过对dialog添加show和close方法来显示和关闭弹窗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"doc-page\">\n  <dialog class=\"dialogClass\" id=\"dialogId\" oncancel=\"cancelDialog\">\n    <div class=\"dialogDiv\">\n      <text>dialog</text>\n      <button value=\"confirm\" onclick=\"confirmClick\"></button>\n    </div>\n  </dialog>\n  <button value=\"click me\" onclick=\"openDialog\"></button>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.doc-page {\n  width:100%;\n  height:100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #F1F3F5;\n}\n.dialogClass{\n  width: 80%;\n  height: 300px;\n  margin-start: 1%;\n}\n.dialogDiv{\n  width: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n}\ntext{\n  height: 100px;\n  align-self: center;\n}\nbutton{\n  align-self: center;\n  margin-top: 20px;\n  width: 60%;\n  height: 80px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nimport promptAction from '@ohos.promptAction';\nexport default {\n  cancelDialog(e){\n    promptAction.showToast({\n      message: 'dialogCancel'\n    })\n  },\n  openDialog(){\n    this.$element('dialogId').show()\n     promptAction.showToast({\n      message: 'dialogShow'\n    })\n  },\n  confirmClick(e) {\n    this.$element('dialogId').close()\n    promptAction.showToast({\n      message: 'dialogClose'\n    })\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(206284)/* ["default"] */.A) + "",
        width: "308",
        height: "596"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(281168)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅支持单个子组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dialog属性、样式均不支持动态更新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dialog组件不支持focusable、click-effect属性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在本场景中，开发者可以通过dialog组件实现一个日程表。弹窗在打开状态下，利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-textarea/js-components-basic-textarea",
        children: "textarea"
      }), "组件输入当前日程，点击确认按钮后获取当前时间并保存输入文本。最后以列表形式将各日程进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"doc-page\">\n  <text style=\"margin-top: 60px;margin-left: 30px;\">\n    <span>{{date}} events</span>\n  </text>\n  <div class=\"btnDiv\">\n    <button type=\"circle\" class=\"btn\" onclick=\"addSchedule\">+</button>\n  </div>\n<!--  for Render events data  -->\n  <list style=\"width: 100%;\">\n    <list-item type=\"item\" for=\"scheduleList\" style=\"width:100%;height: 200px;\">\n      <div class=\"scheduleDiv\">\n        <text class=\"text1\">{{date}}  event</text>\n        <text class=\"text2\">{{$item.schedule}}</text>\n      </div>\n    </list-item>\n  </list>\n  <dialog id=\"dateDialog\" oncancel=\"cancelDialog\" >\n    <div class=\"dialogDiv\">\n      <div class=\"innerTxt\">\n        <text class=\"text3\">{{date}}</text>\n        <text class=\"text4\">New event</text>\n      </div>\n      <textarea placeholder=\"Event information\" onchange=\"getSchedule\" class=\"area\" extend=\"true\"></textarea>\n      <div class=\"innerBtn\">\n        <button type=\"text\" value=\"Cancel\" onclick=\"cancelSchedule\" class=\"innerBtn\"></button>\n        <button type=\"text\" value=\"OK\" onclick=\"setSchedule\" class=\"innerBtn\"></button>\n      </div>\n    </div>\n  </dialog>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.doc-page {\n  flex-direction: column;\n  background-color: #F1F3F5;\n}\n.btnDiv {\n  width: 100%;\n  height: 200px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.btn {\n  radius:60px;\n  font-size: 100px;\n  background-color: #1E90FF;\n}\n.scheduleDiv {\n  width: 100%;\n  height: 200px;\n  flex-direction: column;\n  justify-content: space-around;\n  padding-left: 55px;\n}\n.text1 {\n  color: #000000;\n  font-weight: bold;\n  font-size: 39px;\n}\n.text2 {\n  color: #a9a9a9;\n  font-size: 30px;\n}\n.dialogDiv {\n  flex-direction: column;\n  align-items: center;\n}\n.innerTxt {\n  width: 320px;\n  height: 160px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n.text3 {\n  font-family: serif;\n  color: #1E90FF;\n  font-size: 38px;\n}\n.text4 {\n  color: #a9a9a9;\n  font-size: 33px;\n}\n.area {\n  width: 320px;\n  border-bottom: 1px solid #1E90FF;\n}\n.innerBtn {\n  width: 320px;\n  height: 120px;\n  justify-content: space-around;\n  text-color: #1E90FF;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nvar info = null;\nimport promptAction from '@ohos.promptAction';\nexport default {\n  data: {\n    curYear:'',\n    curMonth:'',\n    curDay:'',\n    date:'',\n    schedule:'',\n    scheduleList:[]\n  },\n  onInit() {\n    // Obtain the current date.\n    var date = new Date();\n    this.curYear = date.getFullYear();\n    this.curMonth = date.getMonth() + 1;\n    this.curDay = date.getDate();\n    this.date = this.curYear + '-' + this.curMonth + '-' + this.curDay;\n    this.scheduleList = []\n  },\n  addSchedule(e) {\n    this.$element('dateDialog').show()\n  },\n  cancelDialog(e) {\n    promptAction.showToast({\n      message: 'Event setting canceled.'\n    })\n  },\n  getSchedule(e) {\n    info = e.value\n  },\n  cancelSchedule(e) {\n    this.$element('dateDialog').close()\n    promptAction.showToast({\n      message: 'Event setting canceled.'\n    })\n  },\n//    Touch OK to save the data.\n  setSchedule(e) {\n    if (e.text === '') {\n      this.schedule = info\n    } else {\n      this.schedule = info\n      var addItem =  {schedule: this.schedule,}\n      this.scheduleList.push(addItem)\n    }\n    this.$element('dateDialog').close()\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(675811)/* ["default"] */.A) + "",
        width: "310",
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
281168(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
675811(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478089-c001a60c0861e44b0764779795875841.gif");

},
570163(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438133-b3cf8ebe1aac94c762ac72ca834c877b.gif");

},
206284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958088-c39180fa706c5a74e5d81c582203a760.gif");

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