"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["354054"], {
906055(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ime_kit_use_inputmethod_in_custom_edit_box_use_inputmethod_in_custom_edit_box_md_d21_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ime-kit-use-inputmethod-in-custom-edit-box-use-inputmethod-in-custom-edit-box-md-d21.json
var site_docs_ime_kit_use_inputmethod_in_custom_edit_box_use_inputmethod_in_custom_edit_box_md_d21_namespaceObject = JSON.parse('{"id":"ime-kit/use-inputmethod-in-custom-edit-box/use-inputmethod-in-custom-edit-box","title":"在自绘编辑框中使用输入法","description":"在输入法框架中，可以通过getController方法获取到InputMethodController实例来绑定输入法并监听输入法应用的各种操作，比如插入、删除、选择、光标移动等。这样就可以在自绘编辑框中使用输入法，并实现更加灵活和自由的编辑操作。","source":"@site/docs/ime-kit/use-inputmethod-in-custom-edit-box/use-inputmethod-in-custom-edit-box.md","sourceDirName":"ime-kit/use-inputmethod-in-custom-edit-box","slug":"/ime-kit/use-inputmethod-in-custom-edit-box/","permalink":"/harmonyos-docs-site/ime-kit/use-inputmethod-in-custom-edit-box/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"在自绘编辑框中使用输入法","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-inputmethod-in-custom-edit-box","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"实现一个输入法应用","permalink":"/harmonyos-docs-site/ime-kit/inputmethod-application-guide/"},"next":{"title":"切换输入法应用","permalink":"/harmonyos-docs-site/ime-kit/switch-inputmethod-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ime-kit/use-inputmethod-in-custom-edit-box/use-inputmethod-in-custom-edit-box.md


const frontMatter = {
	title: '在自绘编辑框中使用输入法',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-inputmethod-in-custom-edit-box',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '在自绘编辑框中使用输入法';

const assets = {

};



const toc = [{
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "示例效果图",
  "id": "示例效果图",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "在自绘编辑框中使用输入法",
        children: "在自绘编辑框中使用输入法"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在输入法框架中，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-arkts/js-apis-inputmethod/js-apis-inputmethod#inputmethodgetcontroller9",
        children: "getController"
      }), "方法获取到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-arkts/js-apis-inputmethod/js-apis-inputmethod#inputmethodcontroller",
        children: "InputMethodController"
      }), "实例来绑定输入法并监听输入法应用的各种操作，比如插入、删除、选择、光标移动等。这样就可以在自绘编辑框中使用输入法，并实现更加灵活和自由的编辑操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者在自绘编辑框中使用输入法时，首先需要在DevEco Studio工程中新建一个ets文件，命名为自定义控件的名称，本示例中命名为CustomInput，在文件中定义一个自定义控件，并从@kit.IMEKit中导入inputMethod。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { inputMethod } from '@kit.IMEKit';\n\n@Component\nexport struct CustomInput {\n  build() {\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在控件中，使用Text组件作为自绘编辑框的文本显示组件，使用状态变量inputText作为Text组件要显示的内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { inputMethod } from '@kit.IMEKit';\nimport Log from '../model/Log';\n\nconst TAG = '[Submenu]';\n\n@Component\nexport struct CustomInput {\n  @State inputText: string = ''; // inputText作为Text组件要显示的内容\n  private isAttach: boolean = false;\n  private inputController: inputMethod.InputMethodController = inputMethod.getController();\n\n  build() {\n    Text(this.inputText) // Text组件作为自绘编辑框的文本显示组件。\n      .fontSize(16)\n      .width('100%')\n      .lineHeight(40)\n      .id('customInput')\n      .height(45)\n      .border({ color: '#554455', radius: 30, width: 1 })\n      .maxLines(1)\n      .onBlur(() => {\n        this.off();\n      })\n      .onClick(() => {\n        this.attachAndListener(); // 点击控件\n      })\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在控件中获取inputMethodController实例，先在文本点击时调用controller实例的attach方法绑定和拉起软键盘，再注册监听输入法插入文本、删除等方法。本示例仅展示插入、删除。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { inputMethod } from '@kit.IMEKit';\nimport Log from '../model/Log';\n\nconst TAG = '[Submenu]';\n\n@Component\nexport struct CustomInput {\n  @State inputText: string = ''; // inputText作为Text组件要显示的内容\n  private isAttach: boolean = false;\n  private inputController: inputMethod.InputMethodController = inputMethod.getController();\n\n  build() {\n    Text(this.inputText) // Text组件作为自绘编辑框的文本显示组件。\n      .fontSize(16)\n      .width('100%')\n      .lineHeight(40)\n      .id('customInput')\n      .height(45)\n      .border({ color: '#554455', radius: 30, width: 1 })\n      .maxLines(1)\n      .onBlur(() => {\n        this.off();\n      })\n      .onClick(() => {\n        this.attachAndListener(); // 点击控件\n      })\n  }\n  async attachAndListener() { // 绑定和设置监听\n    focusControl.requestFocus('customInput');\n    try {\n      await this.inputController.attach(true, {\n        inputAttribute: {\n          textInputType: inputMethod.TextInputType.TEXT,\n          enterKeyType: inputMethod.EnterKeyType.SEARCH\n        }\n      });\n      if (!this.isAttach) {\n        this.inputController.on('insertText', (text) => {\n          this.inputText += text;\n        })\n        this.inputController.on('deleteLeft', (length) => {\n          this.inputText = this.inputText.substring(0, this.inputText.length - length);\n        })\n        this.isAttach = true;\n      }\n    } catch (err) {\n      let error = err as BusinessError;\n      Log.showError(TAG, `attach catch error: ${error.code} ${error.message}`);\n    }\n  }\n\n  off() {\n    this.isAttach = false;\n    this.inputController.off('insertText');\n    this.inputController.off('deleteLeft');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在应用界面布局中引入该控件即可，此处假设使用界面为Index.ets和控件CustomInput.ets在同一目录下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "CustomInput()\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例效果图",
      children: "示例效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(942911)/* ["default"] */.A) + "",
        width: "418",
        height: "716"
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
942911(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478317-f4fa052468630f2af95d3c6a4654f906.png");

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