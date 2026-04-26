"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["998940"], {
719925(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_update_state_var_between_animatetos_check_ide_update_state_var_between_animatetos_check_md_103_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-update-state-var-between-animatetos-check-ide-update-state-var-between-animatetos-check-md-103.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_update_state_var_between_animatetos_check_ide_update_state_var_between_animatetos_check_md_103_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-update-state-var-between-animatetos-check/ide-update-state-var-between-animatetos-check","title":"@performance/update-state-var-between-animatetos-check","description":"如果多个animateTo之间存在状态更新，会导致执行下一个animateTo之前又存在需要更新的脏节点，可能造成冗余更新。因此不建议在两次animateTo之间进行状态变量更新。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-update-state-var-between-animatetos-check/ide-update-state-var-between-animatetos-check.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-update-state-var-between-animatetos-check","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-update-state-var-between-animatetos-check/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-update-state-var-between-animatetos-check/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":71,"frontMatter":{"title":"@performance/update-state-var-between-animatetos-check","sidebar_position":71,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-update-state-var-between-animatetos-check","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@performance/tabs-on-change-check","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-tabs-on-change-check/"},"next":{"title":"@performance/web-cache-mode-check","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-performance-web-cache-mode-check/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-update-state-var-between-animatetos-check/ide-update-state-var-between-animatetos-check.md


const frontMatter = {
	title: '@performance/update-state-var-between-animatetos-check',
	sidebar_position: 71,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-update-state-var-between-animatetos-check',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/update-state-var-between-animatetos-check';

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
        id: "performanceupdate-state-var-between-animatetos-check",
        children: "@performance/update-state-var-between-animatetos-check"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果多个animateTo之间存在状态更新，会导致执行下一个animateTo之前又存在需要更新的脏节点，可能造成冗余更新。因此不建议在两次animateTo之间进行状态变量更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/update-state-var-between-animatetos-check\": \"warn\",\n  }\n}\n"
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
        children: "@Entry\n@Component\nstruct UpdateMultipleProperties {\n  @State w: number = 100\n  @State h: number = 2\n  @State color: Color = Color.Red\n  build() {\n    Column() {\n      Column() {\n        \n        Button('Tap2')\n          .width('100%')\n          .margin({ top: 12 })\n          .onClick(() => {\n            let doTimes = 5;\n            for (let i = 0; i < doTimes; i++) {\n              setTimeout(() => {\n                // Explicitly specify the initial values of all properties to be animated before the animation.\n                this.w = 80\n                this.color = Color.Yellow\n                this.getUIContext().animateTo({ curve: Curve.Sharp, duration: 1000 }, () => {\n                  this.w = (this.w === 80 ? 150 : 80);\n                });\n                this.getUIContext().animateTo({ curve: Curve.Linear, duration: 2000 }, () => {\n                  this.color = (this.color === Color.Yellow ? Color.Red : Color.Yellow);\n                });\n                // Refresh non-animated properties after animation completes\n                this.h = 5\n              }, 2000 * i)\n            }\n          })\n        Button('Tap3')\n          .width('100%')\n          .margin({ top: 12 })\n          .onClick(() => {\n            let doTimes = 5;\n            for (let i = 0; i < doTimes; i++) {\n              setTimeout(() => {\n                this.getUIContext().animateTo({ curve: Curve.Sharp, duration: 1000 }, () => {\n                  this.w = (this.w === 80 ? 150 : 80);\n                });\n                this.getUIContext().animateTo({ curve: Curve.Linear, duration: 2000 }, () => {\n                  this.color = (this.color === Color.Yellow ? Color.Red : Color.Yellow);\n                });\n              }, 2000 * i)\n            }\n          })\n      }\n      .justifyContent(FlexAlign.End)\n      .height('25%')\n    }\n    .padding({\n      left: 16,\n      right: 16,\n      bottom: 16\n    })\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Start)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct UpdateMultipleProperties {\n  @State w: number = 100\n  @State h: number = 2\n  @State color: Color = Color.Red\n  build() {\n    Column() {\n      Column() {\n        Button('Tap1')\n          .width('100%')\n          .margin({ top: 12 })\n          .onClick(() => {\n            let doTimes = 5;\n            for (let i = 0; i < doTimes; i++) {\n              setTimeout(() => {\n                this.w = 80\n                this.h = 4\n                this.getUIContext().animateTo({ curve: Curve.Sharp, duration: 1000 }, () => {\n                  this.w = (this.w === 80 ? 150 : 80);\n                });\n                // Updating state variables between two animateTo calls\n                this.color = Color.Yellow\n                this.getUIContext().animateTo({ curve: Curve.Linear, duration: 2000 }, () => {\n                  this.color = (this.color === Color.Yellow ? Color.Red : Color.Yellow);\n                });\n              }, 2000 * i)\n            }\n          })\n      }\n      .justifyContent(FlexAlign.End)\n      .height('25%')\n    }\n    .padding({\n      left: 16,\n      right: 16,\n      bottom: 16\n    })\n    .width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Start)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则集",
      children: "规则集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "plugin:@performance/recommended\nplugin:@performance/all\n"
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