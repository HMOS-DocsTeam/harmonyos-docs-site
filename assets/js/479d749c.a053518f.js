"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["174847"], {
184076(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_arkui_replace_reusable_by_builder_ide_hp_arkui_replace_reusable_by_builder_md_479_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-hp-arkui-replace-reusable-by-builder-ide-hp-arkui-replace-reusable-by-builder-md-479.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_arkui_replace_reusable_by_builder_ide_hp_arkui_replace_reusable_by_builder_md_479_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui--replace-reusable-by-builder/ide_hp-arkui--replace-reusable-by-builder","title":"@performance/hp-arkui-replace-nested-reusable-component-by-builder","description":"建议使用@Builder替代嵌套的自定义组件。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui--replace-reusable-by-builder/ide_hp-arkui--replace-reusable-by-builder.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui--replace-reusable-by-builder","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui--replace-reusable-by-builder/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui--replace-reusable-by-builder/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":23,"frontMatter":{"title":"@performance/hp-arkui-replace-nested-reusable-component-by-builder","sidebar_position":23,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_hp-arkui--replace-reusable-by-builder","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@performance/hp-arkui-remove-container-without-property","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-remove-container-without-property/"},"next":{"title":"@performance/hp-arkui-reduce-pangesture-distance","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-reduce-ges-distance/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui--replace-reusable-by-builder/ide_hp-arkui--replace-reusable-by-builder.md


const frontMatter = {
	title: '@performance/hp-arkui-replace-nested-reusable-component-by-builder',
	sidebar_position: 23,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_hp-arkui--replace-reusable-by-builder',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/hp-arkui-replace-nested-reusable-component-by-builder';

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
        id: "performancehp-arkui-replace-nested-reusable-component-by-builder",
        children: "@performance/hp-arkui-replace-nested-reusable-component-by-builder"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议使用@Builder替代嵌套的自定义组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通用丢帧场景下，建议优先修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/hp-arkui-replace-nested-reusable-component-by-builder\": \"warn\",\n  }\n}\n"
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
        children: "// 源码文件，请以工程实际为准\nimport { MyDataSource } from './MyDataSource';\n\n@Entry\n@Component\nstruct MyComponent{\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear(): void {\n    for (let index = 0; index < 30; index++) {\n      this.data.pushData(index.toString())\n    }\n  }\n\n  build() {\n    Column() {\n      List() {\n        LazyForEach(this.data, (item: string) => {\n          ListItem() {\n            //  正例\n            ChildComponent({ desc: item })\n          }\n        }, (item: string) => item)\n      }\n      .height('100%')\n      .width('100%')\n    }\n    .width('100%')\n  }\n}\n\n// 正例 使用组件复用\n@Reusable\n@Component\nstruct ChildComponent {\n  @State desc: string = '';\n\n  aboutToReuse(params: Record<string, Object>): void {\n    this.desc = params.desc as string;\n  }\n\n  build() {\n    Column() {\n      // 使用@Builder，可以减少自定义组件创建和渲染的耗时\n      ChildComponentBuilder({ paramA: this.desc })\n    }\n    .width('100%')\n  }\n}\n\nclass Temp {\n  paramA: string = '';\n}\n\n@Builder\nfunction ChildComponentBuilder($$: Temp) {\n  Column() {\n    // 此处使用`${}`来进行按引用传递，让@Builder感知到数据变化，进行UI刷新\n    Text(`子组件 + ${$$.paramA}`)\n      .fontSize(30)\n      .fontWeight(30)\n  }\n  .width('100%')\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 源码文件，请以工程实际为准\nimport { MyDataSource } from './MyDataSource';\n\n@Entry\n@Component\nstruct MyComponent{\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear(): void {\n    for (let index = 0; index < 30; index++) {\n      this.data.pushData(index.toString())\n    }\n  }\n\n  build() {\n    Column() {\n      List() {\n        LazyForEach(this.data, (item: string) => {\n          ListItem() {\n            //反例 使用自定义组件\n            ComponentA({ desc: item })\n          }\n        }, (item: string) => item)\n      }\n      .height('100%')\n      .width('100%')\n    }\n  }\n}\n\n@Reusable\n@Component\nstruct ComponentA {\n  @State desc: string = '';\n\n  aboutToReuse(params: ESObject): void {\n    this.desc = params.desc as string;\n  }\n\n  build() {\n    // 在复用组件中嵌套使用自定义组件\n    ComponentB({ desc: this.desc })\n  }\n}\n\n\n@Component\nstruct ComponentB {\n  @State desc: string = '';\n\n  // 嵌套的组件中也需要实现aboutToReuse来进行UI的刷新\n  aboutToReuse(params: ESObject): void {\n    this.desc = params.desc as string;\n  }\n\n  build() {\n    Column() {\n      Text('子组件' + this.desc)\n        .fontSize(30)\n        .fontWeight(30)\n    }\n    .width('100%')\n  }\n}\n"
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