"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["551833"], {
619272(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_multi_associations_state_var_check_ide_multi_associations_state_var_check_md_718_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-multi-associations-state-var-check-ide-multi-associations-state-var-check-md-718.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_multi_associations_state_var_check_ide_multi_associations_state_var_check_md_718_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-multi-associations-state-var-check/ide-multi-associations-state-var-check","title":"@performance/multiple-associations-state-var-check","description":"多个组件关联同一数据时，建议在组件中使用@Watch装饰器添加更新条件，避免不必要的组件更新。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-multi-associations-state-var-check/ide-multi-associations-state-var-check.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-multi-associations-state-var-check","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-multi-associations-state-var-check/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-multi-associations-state-var-check/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":55,"frontMatter":{"title":"@performance/multiple-associations-state-var-check","sidebar_position":55,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-multi-associations-state-var-check","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@performance/lottie-animation-destroy-check","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-lottie-animation-destroy-check/"},"next":{"title":"@performance/monitor-invisible-area-in-image-animation","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-monitor-invisible-area-in-image-animation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-multi-associations-state-var-check/ide-multi-associations-state-var-check.md


const frontMatter = {
	title: '@performance/multiple-associations-state-var-check',
	sidebar_position: 55,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-multi-associations-state-var-check',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/multiple-associations-state-var-check';

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
        id: "performancemultiple-associations-state-var-check",
        children: "@performance/multiple-associations-state-var-check"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多个组件关联同一数据时，建议在组件中使用@Watch装饰器添加更新条件，避免不必要的组件更新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-status-management#section117631443131915",
        children: "通用丢帧场景"
      }), "下，建议优先修改。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/multiple-associations-state-var-check\": \"suggestion\",\n  }\n}\n"
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
        children: "@Observed\nclass UIStyle {\n  fontSize: number = 0;\n  fontColor: string = '';\n  isChecked: boolean = false;\n}\n@Entry\n@Component\nstruct MultipleAssociationsStateVarNoReport0 {\n  @State uiStyle: UIStyle = new UIStyle();\n  private listData: string[] = [];\n  aboutToAppear(): void {\n    for (let i = 0; i < 10; i++) {\n      this.listData.push(`ListItemComponent ${i}`);\n    }\n  }\n  build() {\n    Row() {\n      Column() {\n        CompA({item: '1', index: 1, subStyle: this.uiStyle})\n        CompB({item: '2', index: 2, subStyle: this.uiStyle})\n        CompC({item: '3', index: 3, subStyle: this.uiStyle})\n        Text('change state var')\n          .onClick(()=>{\n            this.uiStyle.fontSize = 20;\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n@Component\nstruct CompA {\n  @Prop item: string;\n  @Prop index: number;\n  @Link @Watch('onStyleChange') subStyle: UIStyle;\n  @State fontSize: number = 0;\n  isRender(): number {\n    console.info(`CompA ${this.index} Text is rendered`);\n    return this.fontSize;\n  }\n  onStyleChange() {\n    this.fontSize = this.subStyle.fontSize;\n  }\n  build() {\n    Column() {\n      Text(this.item)\n        .fontSize(this.isRender())\n      Text('abc')\n    }\n  }\n}\n@Component\nstruct CompB {\n  @Prop item: string;\n  @Prop index: number;\n  @Link @Watch('onStyleChange') subStyle: UIStyle;\n  @State fontColor: string = '#00ffff';\n  isRender(): number {\n    console.info(`CompB ${this.index} Text is rendered`);\n    return 10;\n  }\n  onStyleChange() {\n    this.fontColor = this.subStyle.fontColor;\n  }\n  build() {\n    Column() {\n      Text(this.item)\n        .fontSize(this.isRender())\n        .fontColor(this.fontColor)\n      Text('abc')\n    }\n  }\n}\n@Component\nstruct CompC {\n  @Prop item: string;\n  @Prop index: number;\n  @Link @Watch('onStyleChange') subStyle: UIStyle;\n  @State isChecked: boolean = false;\n  isRender(): number {\n    console.info(`CompC ${this.index} Text is rendered`);\n    return 50;\n  }\n  onStyleChange() {\n    this.isChecked = this.subStyle.isChecked;\n  }\n  build() {\n    Column() {\n      if (this.isChecked) {\n        Text('checked')\n      } else {\n        Text('unchecked')\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass UIStyle {\n  fontSize: number = 0;\n  fontColor: string = '';\n  isChecked: boolean = false;\n}\n@Entry\n@Component\nstruct MultipleAssociationsStateVarReport0 {\n  @State uiStyle: UIStyle = new UIStyle();\n  private listData: string[] = [];\n  aboutToAppear(): void {\n    for (let i = 0; i < 10; i++) {\n      this.listData.push(`ListItemComponent ${i}`);\n    }\n  }\n  build() {\n    Row() {\n      Column() {\n        CompA({item: '1', index: 1, subStyle: this.uiStyle})\n        CompB({item: '2', index: 2, subStyle: this.uiStyle})\n        CompC({item: '3', index: 3, subStyle: this.uiStyle})\n        Text('change state var')\n          .onClick(()=>{\n            this.uiStyle.fontSize = 20;\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n@Component\nstruct CompA {\n  @Prop item: string;\n  @Prop index: number;\n  @Link subStyle: UIStyle;\n  private sizeFont: number = 50;\n  isRender(): number {\n    console.info(`CompA ${this.index} Text is rendered`);\n    return this.sizeFont;\n  }\n  build() {\n    Column() {\n      Text(this.item)\n        .fontSize(this.isRender())\n      Text('abc')\n    }\n  }\n}\n@Component\nstruct CompB {\n  @Prop item: string;\n  @Prop index: number;\n  @Link subStyle: UIStyle;\n  private sizeFont: number = 50;\n  isRender(): number {\n    console.info(`CompB ${this.index} Text is rendered`);\n    return this.sizeFont;\n  }\n  build() {\n    Column() {\n      Text(this.item)\n        .fontSize(this.isRender())\n        .fontColor(this.subStyle.fontColor)\n      Text('abc')\n    }\n  }\n}\n@Component\nstruct CompC {\n  @Prop item: string;\n  @Prop index: number;\n  @Link subStyle: UIStyle;\n  private sizeFont: number = 50;\n  isRender(): number {\n    console.info(`CompC ${this.index} Text is rendered`);\n    return this.sizeFont;\n  }\n  build() {\n    Column() {\n      if (this.subStyle.isChecked) {\n        Text('checked')\n      } else {\n        Text('unchecked')\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则集",
      children: "规则集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "plugin:@performance/all\n"
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