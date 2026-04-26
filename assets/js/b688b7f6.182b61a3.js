"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["122863"], {
95560(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ime_kit_use_inputmethod_in_not_focusable_window_use_inputmethod_in_not_focusable_window_md_b68_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ime-kit-use-inputmethod-in-not-focusable-window-use-inputmethod-in-not-focusable-window-md-b68.json
var site_docs_ime_kit_use_inputmethod_in_not_focusable_window_use_inputmethod_in_not_focusable_window_md_b68_namespaceObject = JSON.parse('{"id":"ime-kit/use-inputmethod-in-not-focusable-window/use-inputmethod-in-not-focusable-window","title":"不可获焦窗口中输入框与输入法交互指南","description":"场景介绍","source":"@site/docs/ime-kit/use-inputmethod-in-not-focusable-window/use-inputmethod-in-not-focusable-window.md","sourceDirName":"ime-kit/use-inputmethod-in-not-focusable-window","slug":"/ime-kit/use-inputmethod-in-not-focusable-window/","permalink":"/harmonyos-docs-site/ime-kit/use-inputmethod-in-not-focusable-window/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"不可获焦窗口中输入框与输入法交互指南","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-inputmethod-in-not-focusable-window","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Ime工具","permalink":"/harmonyos-docs-site/ime-kit/inputmethod-hdc-commands-guide/"},"next":{"title":"IPC Kit简介","permalink":"/harmonyos-docs-site/ipc-kit/ipc-rpc-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ime-kit/use-inputmethod-in-not-focusable-window/use-inputmethod-in-not-focusable-window.md


const frontMatter = {
	title: '不可获焦窗口中输入框与输入法交互指南',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-inputmethod-in-not-focusable-window',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '不可获焦窗口中输入框与输入法交互指南';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "系统限制",
  "id": "系统限制",
  "level": 2
}, {
  "value": "推荐方案",
  "id": "推荐方案",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "不可获焦窗口中输入框与输入法交互指南",
        children: "不可获焦窗口中输入框与输入法交互指南"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用获得焦点是使用输入法的必要条件，开发者需要正确处理焦点以确保输入法的正常工作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，在应用开发中，开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowfocusable9",
        children: "setWindowFocusable"
      }), "，将创建的窗口的可获焦属性设置为false（如悬浮窗、辅助交互窗口等），并希望在该窗口中绘制输入框（如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
        children: "TextInput"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea",
        children: "TextArea"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ime-kit/use-inputmethod-in-custom-edit-box",
        children: "自绘输入框"
      }), "）以支持用户输入，即拉起系统键盘进行输入操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "系统限制",
      children: "系统限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowfocusable9",
        children: "setWindowFocusable"
      }), "将窗口设置为不可获焦时，系统侧会对该窗口施加限制。由于窗口无焦点，输入事件（如按键信息）无法被窗口正确接收和处理，输入内容无法同步到该窗口中的输入框，导致输入框与键盘交互异常。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "推荐方案",
      children: "推荐方案"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若需要在不可获焦窗口中绘制输入框，并希望能够与键盘正常交互，建议按照以下方式开发（以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
        children: "TextInput"
      }), "为例）："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在主窗中创建一个子窗，设置其初始为不可获焦窗口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可达到效果：点击主窗输入组件，弹出子窗，焦点仍然在主窗的输入框上。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets实现主窗的布局内容\nimport { window } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  async createSubWindow() {\n    try {\n      // 1.创建子窗并设置子窗id\n      let windowStage: window.WindowStage | undefined = AppStorage.get('windowStage');\n      if (windowStage == null) {\n        console.error('Failed to get windowStage');\n        return;\n      }\n      let options: window.SubWindowOptions = { title: 'title', decorEnabled: true };\n      let subWindow = await windowStage?.createSubWindowWithOptions('mySubWindow', options);\n      const subWindowId: number | undefined = subWindow?.getWindowProperties().id;\n      AppStorage.setOrCreate('subWindowId', subWindowId);\n      // 2.设置子窗为不可获焦\n      subWindow?.resize(500, 500);\n      subWindow?.setUIContent(\"pages/SubWindowIndex\");\n      subWindow?.setWindowFocusable(false);\n      // 3.显示子窗\n      subWindow?.showWindow();\n    } catch (exception) {\n      console.error(`Failed to create the subWindow. Cause code: ${exception.code}, message: ${exception.message}`);\n    }\n  }\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      TextInput({ placeholder: '点击创建并显示子窗' })\n        .onClick(() => {\n          this.createSubWindow();\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当用户点击子窗中的输入框组件时，可以先通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowfocusable9",
            children: "setWindowFocusable"
          }), "将子窗设置为可获焦，然后通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-f/arkts-apis-window-f#windowshiftappwindowfocus11",
            children: "shiftAppWindowFocus"
          }), "将焦点窗口从主窗切换为子窗，即可在子窗的输入框中正常使用输入法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// SubWindowIndex.ets实现子窗的布局内容\nimport { window } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct SubWindowIndex {\n  async shiftFocusToSubWindow() {\n    try {\n      let windowStage: window.WindowStage | undefined = AppStorage.get('windowStage');\n      if (windowStage == null) {\n        console.error('Failed to get the subwindow. Cause: windowStage is undefined');\n        return;\n      }\n      let subWindowList: window.Window[] = await windowStage?.getSubWindow();\n      let subWindow: window.Window = subWindowList[0];\n      // 1.将子窗口设置为可获焦\n      subWindow?.setWindowFocusable(true);\n      // 2.将焦点切换到子窗口\n      const mainWindowId: number = AppStorage.get('mainWindowId') || 0;\n      const subWindowId: number = AppStorage.get('subWindowId') || 0;\n      await window.shiftAppWindowFocus(mainWindowId, subWindowId);\n    } catch (exception) {\n      console.error(`Failed to shift focus to subWindow. Cause code: ${exception.code}, message: ${exception.message}`);\n    }\n  }\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      TextInput({ placeholder: '这是一个输入组件' })\n        .onClick(() => {\n          // 用户点击子窗的输入组件，切换焦点至子窗\n          this.shiftFocusToSubWindow();\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当用户重新点击子窗中的非输入框组件时，可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowfocusable9",
            children: "setWindowFocusable"
          }), "将子窗重新设置为不可获焦，焦点窗口即可恢复至主窗。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// SubWindowIndex.ets实现子窗的布局内容\nimport { window } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct SubWindowIndex {\n  async shiftFocusToSubWindow() {\n    try {\n      let windowStage: window.WindowStage | undefined = AppStorage.get('windowStage');\n      if (windowStage == null) {\n        console.error('Failed to get the subwindow. Cause: windowStage is undefined');\n        return;\n      }\n      let subWindowList: window.Window[] = await windowStage?.getSubWindow();\n      let subWindow: window.Window = subWindowList[0];\n      // 1.将子窗口设置为可获焦\n      subWindow?.setWindowFocusable(true);\n      // 2.将焦点切换到子窗口\n      const mainWindowId: number = AppStorage.get('mainWindowId') || 0;\n      const subWindowId: number = AppStorage.get('subWindowId') || 0;\n      await window.shiftAppWindowFocus(mainWindowId, subWindowId);\n    } catch (exception) {\n      console.error(`Failed to shift focus to subWindow. Cause code: ${exception.code}, message: ${exception.message}`);\n    }\n  }\n\n  async shiftFocusToMainWindow() {\n    try {\n      let windowStage: window.WindowStage | undefined = AppStorage.get('windowStage');\n      if (windowStage == null) {\n        console.error('Failed to get the subwindow. Cause: windowStage is undefined');\n        return;\n      }\n      let subWindowList: window.Window[] = await windowStage?.getSubWindow();\n      let subWindow: window.Window = subWindowList[0];\n      // 将子窗口设置为不可获焦\n      subWindow?.setWindowFocusable(false);\n    } catch (exception) {\n      console.error(`Failed to shift focus to main window. Cause code: ${exception.code}, message: ${exception.message}`);\n    }\n  }\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {\n      TextInput({ placeholder: '这是一个输入组件' })\n        .onClick(() => {\n          // 点击子窗输入组件时，切换焦点至子窗口\n          this.shiftFocusToSubWindow();\n        })\n      Button('这是一个普通组件')\n        .onClick(() => {\n          // 点击子窗非输入组件时，可切换焦点回主窗口\n          this.shiftFocusToMainWindow();\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
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