"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["706911"], {
768260(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_cross_device_app_dev_ide_immersive_effect_check_ide_immersive_effect_check_md_44d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-cross-device-app-dev-ide-immersive-effect-check-ide-immersive-effect-check-md-44d.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_cross_device_app_dev_ide_immersive_effect_check_ide_immersive_effect_check_md_44d_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-cross-device-app-dev/ide-immersive-effect-check/ide-immersive-effect-check","title":"@cross-device-app-dev/immersive-effect-check","description":"若应用通过setWindowLayoutFullScreen()接口设置窗口布局，建议调用getWindowAvoidArea()和on(\'avoidAreaChange\')获取和动态监听避让区域的变更信息，使页面布局根据避让区域信息进行动态调整。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-cross-device-app-dev/ide-immersive-effect-check/ide-immersive-effect-check.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-cross-device-app-dev/ide-immersive-effect-check","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-cross-device-app-dev/ide-immersive-effect-check/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-cross-device-app-dev/ide-immersive-effect-check/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"@cross-device-app-dev/immersive-effect-check","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-immersive-effect-check","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@cross-device-app-dev/window-size-change-listener-check","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-cross-device-app-dev/ide-window-size-change-listener-check/"},"next":{"title":"@hw-stylistic/array-bracket-spacing","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-hw-stylistic/ide_array-bracket-spacing/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-cross-device-app-dev/ide-immersive-effect-check/ide-immersive-effect-check.md


const frontMatter = {
	title: '@cross-device-app-dev/immersive-effect-check',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-immersive-effect-check',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@cross-device-app-dev/immersive-effect-check';

const assets = {

};



const toc = [{
  "value": "规则配置",
  "id": "规则配置",
  "level": 2
}, {
  "value": "选项",
  "id": "选项",
  "level": 2
}, {
  "value": "正例",
  "id": "正例",
  "level": 2
}, {
  "value": "反例",
  "id": "反例",
  "level": 2
}, {
  "value": "规则集",
  "id": "规则集",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "cross-device-app-devimmersive-effect-check",
        children: "@cross-device-app-dev/immersive-effect-check"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若应用通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowlayoutfullscreen9",
        children: "setWindowLayoutFullScreen()"
      }), "接口设置窗口布局，建议调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowavoidarea9",
        children: "getWindowAvoidArea()"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#onavoidareachange9",
        children: "on('avoidAreaChange')"
      }), "获取和动态监听避让区域的变更信息，使页面布局根据避让区域信息进行动态调整。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@cross-device-app-dev/immersive-effect-check\": \"suggestion\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选项",
      children: "选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该规则无需配置额外选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "正例",
      children: "正例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility.ets\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nexport default class EntryAbility extends UIAbility {\n  // ...\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    windowStage.loadContent('pages/Index', (err, data) => {\n      if (err.code) {\n        return;\n      }\n      let windowClass: window.Window = windowStage.getMainWindowSync(); // Obtain the main window of the application.\n      // 1. 设置窗口全屏.\n      let isLayoutFullScreen = true;\n      windowClass.setWindowLayoutFullScreen(isLayoutFullScreen).then(() => {\n        console.info('Succeeded in setting the window layout to full-screen mode.');\n      }).catch((err: BusinessError) => {\n        console.error('Failed to set the window layout to full-screen mode. Cause:' + JSON.stringify(err));\n      });\n\n      // 2. 获取避让区域.\n      let type = window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR; // Here a navigation bar is used as an example.\n      let avoidArea = windowClass.getWindowAvoidArea(type);\n      let bottomRectHeight = avoidArea.bottomRect.height; // Obtain the height of the navigation area.\n      AppStorage.setOrCreate('bottomRectHeight', bottomRectHeight);\n      type = window.AvoidAreaType.TYPE_SYSTEM; // The status bar is used as an example.\n      avoidArea = windowClass.getWindowAvoidArea(type);\n      let topRectHeight = avoidArea.topRect.height; // Obtain the height of the status bar area.\n      AppStorage.setOrCreate('topRectHeight', topRectHeight);\n      // 3. Register a listening function to dynamically obtain the data of the avoid area.\n      windowClass.on('avoidAreaChange', (data) => {\n        if (data.type === window.AvoidAreaType.TYPE_SYSTEM) {\n          let topRectHeight = data.area.topRect.height;\n          AppStorage.setOrCreate('topRectHeight', topRectHeight);\n        } else if (data.type == window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR) {\n          let bottomRectHeight = data.area.bottomRect.height;\n          AppStorage.setOrCreate('bottomRectHeight', bottomRectHeight);\n        }\n      });\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility.ets\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\nimport { BusinessError } from '@kit.BasicServicesKit';\nexport default class EntryAbility extends UIAbility {\n  // ...\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    windowStage.loadContent('pages/Index', (err, data) => {\n      if (err.code) {\n        return;\n      }\n      let windowClass: window.Window = windowStage.getMainWindowSync(); // Obtain the main window of the application.\n      // 只设置窗口全屏.\n      let isLayoutFullScreen = true;\n      windowClass.setWindowLayoutFullScreen(isLayoutFullScreen).then(() => {\n        console.info('Succeeded in setting the window layout to full-screen mode.');\n      }).catch((err: BusinessError) => {\n        console.error('Failed to set the window layout to full-screen mode. Cause:' + JSON.stringify(err));\n      });\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则集",
      children: "规则集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "plugin:@cross-device-app-dev/all\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Code Linter代码检查规则的配置指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-code-edit/ide-code-check/ide-code-linter",
        children: "Code Linter代码检查"
      }), "。"]
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