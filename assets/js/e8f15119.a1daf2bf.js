"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["988752"], {
303159(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_arkui_no_func_as_arg_for_reusable_component_ide_hp_arkui_no_func_as_arg_for_reusable_component_md_e8f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-hp-arkui-no-func-as-arg-for-reusable-component-ide-hp-arkui-no-func-as-arg-for-reusable-component-md-e8f.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_arkui_no_func_as_arg_for_reusable_component_ide_hp_arkui_no_func_as_arg_for_reusable_component_md_e8f_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-no-func-as-arg-for-reusable-component/ide_hp-arkui-no-func-as-arg-for-reusable-component","title":"@performance/hp-arkui-no-func-as-arg-for-reusable-component","description":"避免使用函数作为复用的自定义组件创建时的入参。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-no-func-as-arg-for-reusable-component/ide_hp-arkui-no-func-as-arg-for-reusable-component.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-no-func-as-arg-for-reusable-component","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-no-func-as-arg-for-reusable-component/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-no-func-as-arg-for-reusable-component/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"@performance/hp-arkui-no-func-as-arg-for-reusable-component","sidebar_position":16,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_hp-arkui-no-func-as-arg-for-reusable-component","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@performance/hp-arkui-limit-refresh-scope（已下线）","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-limit-refresh-scope/"},"next":{"title":"@performance/hp-arkui-no-high-freq-log（已下线）","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-no-high-freq-log/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-no-func-as-arg-for-reusable-component/ide_hp-arkui-no-func-as-arg-for-reusable-component.md


const frontMatter = {
	title: '@performance/hp-arkui-no-func-as-arg-for-reusable-component',
	sidebar_position: 16,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_hp-arkui-no-func-as-arg-for-reusable-component',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/hp-arkui-no-func-as-arg-for-reusable-component';

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
        id: "performancehp-arkui-no-func-as-arg-for-reusable-component",
        children: "@performance/hp-arkui-no-func-as-arg-for-reusable-component"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "避免使用函数作为复用的自定义组件创建时的入参。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滑动丢帧场景下，建议优先修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/hp-arkui-no-func-as-arg-for-reusable-component\": \"warn\",\n  }\n}\n"
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
        children: "// 源码文件，请以工程实际为准\nimport { MyDataSource } from './MyDataSource';\n\n@Reusable\n@Component\nstruct ChildComponent {\n  @State desc: string = '';\n  @State sum: number = 0;\n\n  aboutToReuse(params: Record<string, Object>): void {\n    this.desc = params.desc as string;\n    this.sum = params.sum as number;\n  }\n\n  build() {\n    Column() {\n      Text('子组件' + this.desc)\n        .fontSize(30)\n        .fontWeight(30)\n      Text('结果' + this.sum)\n        .fontSize(30)\n        .fontWeight(30)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent{\n  private data: MyDataSource = new MyDataSource();\n  @State sum: number = 0;\n\n  aboutToAppear(): void {\n    for (let index = 0; index < 20; index++) {\n      this.data.pushData(index.toString())\n    }\n    // 执行该异步函数\n    this.count();\n  }\n\n  // 模拟耗时操作逻辑\n  async count() {\n    let temp: number = 0;\n    for (let index = 0; index < 10000; index++) {\n      temp += index;\n    }\n    // 将结果放入状态变量中\n    this.sum = temp;\n  }\n\n  build() {\n    Column() {\n      List() {\n        LazyForEach(this.data, (item: string) => {\n          ListItem() {\n            // 子组件的传参通过状态变量进行\n            ChildComponent({ desc: item, sum: this.sum })\n          }\n          .width('100%')\n          .height(100)\n        }, (item: string) => item)\n      }\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 源码文件，请以工程实际为准\nimport { MyDataSource } from './MyDataSource';\n\n// 此处为复用的自定义组件\n@Reusable\n@Component\nstruct ChildComponent {\n  @State desc: string = '';\n  @State sum: number = 0;\n\n  aboutToReuse(params: Record<string, Object>): void {\n    this.desc = params.desc as string;\n    this.sum = params.sum as number;\n  }\n\n  build() {\n    Column() {\n      Text('子组件' + this.desc)\n        .fontSize(30)\n        .fontWeight(30)\n      Text('结果' + this.sum)\n        .fontSize(30)\n        .fontWeight(30)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent{\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear(): void {\n    for (let index = 0; index < 20; index++) {\n      this.data.pushData(index.toString())\n    }\n  }\n\n  // 真实场景的函数中可能存在未知的耗时操作逻辑，此处用循环函数模拟耗时操作\n  count(): number {\n    let temp: number = 0;\n    for (let index = 0; index < 10000; index++) {\n      temp += index;\n    }\n    return temp;\n  }\n\n  build() {\n    Column() {\n      List() {\n        LazyForEach(this.data, (item: string) => {\n          ListItem() {\n            // 此处sum参数是函数获取的，实际开发场景无法预料该函数可能出现的耗时操作，每次进行组件复用都会重复触发此函数的调用\n            ChildComponent({ desc: item, sum: this.count() })\n          }\n          .width('100%')\n          .height(100)\n        }, (item: string) => item)\n      }\n      .height('100%')\n      .width('100%')\n    }\n  }\n}\n"
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