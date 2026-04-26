"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["18523"], {
144428(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_form_selection_arkts_common_components_radio_button_arkts_common_components_radio_button_md_cc4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-form-selection-arkts-common-components-radio-button-arkts-common-components-radio-button-md-cc4.json
var site_docs_arkui_arkts_ui_development_arkts_form_selection_arkts_common_components_radio_button_arkts_common_components_radio_button_md_cc4_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-form-selection/arkts-common-components-radio-button/arkts-common-components-radio-button","title":"单选框 (Radio)","description":"Radio是单选框组件，通常用于提供相应的用户交互选择项，同一组的Radio中只有一个可以被选中。具体用法请参考Radio。","source":"@site/docs/arkui/arkts-ui-development/arkts-form-selection/arkts-common-components-radio-button/arkts-common-components-radio-button.md","sourceDirName":"arkui/arkts-ui-development/arkts-form-selection/arkts-common-components-radio-button","slug":"/arkui/arkts-ui-development/arkts-form-selection/arkts-common-components-radio-button/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-form-selection/arkts-common-components-radio-button/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"单选框 (Radio)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-radio-button","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"弧形按钮 (ArcButton)(圆形屏幕推荐使用)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-form-selection/arkts-advanced-components-arcbutton/"},"next":{"title":"切换按钮 (Toggle)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-form-selection/arkts-common-components-switch/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-form-selection/arkts-common-components-radio-button/arkts-common-components-radio-button.md


const frontMatter = {
	title: '单选框 (Radio)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-radio-button',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '单选框 (Radio)';

const assets = {

};



const toc = [{
  "value": "创建单选框",
  "id": "创建单选框",
  "level": 2
}, {
  "value": "添加事件",
  "id": "添加事件",
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
        id: "单选框-radio",
        children: "单选框 (Radio)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Radio是单选框组件，通常用于提供相应的用户交互选择项，同一组的Radio中只有一个可以被选中。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-radio/ts-basic-components-radio",
        children: "Radio"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建单选框",
      children: "创建单选框"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Radio通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-radio/ts-basic-components-radio#radiooptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "RadioOptions"
      }), "来创建，以RadioOptions中的value和group为例："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Radio(options: {value: string, group: string})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中，value是单选框的名称，group是单选框的所属群组名称。checked属性可以设置单选框的状态，状态分别为false和true，设置为true时表示单选框被选中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Radio支持设置选中状态和非选中状态的样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Radio({ value: 'Radio1', group: 'radioGroup' })\n  .checked(false)\nRadio({ value: 'Radio2', group: 'radioGroup' })\n  .checked(true)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(270781)/* ["default"] */.A) + "",
        width: "94",
        height: "60"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加事件",
      children: "添加事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/ts-component-general-events",
        children: "通用事件"
      }), "外，Radio还用于选中后触发某些操作，可以绑定onChange事件来响应选中操作后的自定义行为。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Radio({ value: 'Radio1', group: 'radioGroup' })\n  .onChange((isChecked: boolean) => {\n    if(isChecked) {\n      //需要执行的操作\n      // ···\n    }\n  })\nRadio({ value: 'Radio2', group: 'radioGroup' })\n  .onChange((isChecked: boolean) => {\n    if(isChecked) {\n      //需要执行的操作\n      // ···\n    }\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过点击Radio切换声音模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { promptAction } from '@kit.ArkUI';\n\n@Entry\n@Component\nexport struct RadioExample {\n  @State rst: promptAction.ShowToastOptions = { 'message': 'Ringing mode.' };\n  @State vst: promptAction.ShowToastOptions = { 'message': 'Vibration mode.' };\n  @State sst: promptAction.ShowToastOptions = { 'message': 'Silent mode.' };\n\n  build() {\n    // ···\n      Row() {\n        Column() {\n          Radio({ value: 'Ringing', group: 'radioGroup' }).checked(true)\n            .height(50)\n            .width(50)\n            .onChange((isChecked: boolean) => {\n              if (isChecked) {\n                // 切换为响铃模式\n                this.getUIContext().getPromptAction().openToast(this.rst);\n              }\n            })\n          Text('Ringing')\n        }\n\n        Column() {\n          Radio({ value: 'Vibration', group: 'radioGroup' })\n            .height(50)\n            .width(50)\n            .onChange((isChecked: boolean) => {\n              if (isChecked) {\n                // 切换为振动模式\n                this.getUIContext().getPromptAction().openToast(this.vst);\n              }\n            })\n          Text('Vibration')\n        }\n\n        Column() {\n          Radio({ value: 'Silent', group: 'radioGroup' })\n            .height(50)\n            .width(50)\n            .onChange((isChecked: boolean) => {\n              if (isChecked) {\n                // 切换为静音模式\n                this.getUIContext().getPromptAction().openToast(this.sst);\n              }\n            })\n          Text('Silent')\n        }\n      }.height('100%').width('100%').justifyContent(FlexAlign.Center)\n    // ···\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(22030)/* ["default"] */.A) + "",
        width: "352",
        height: "730"
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
270781(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
22030(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957884-b2c51ff9712db5098eecefeb7ab17594.gif");

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