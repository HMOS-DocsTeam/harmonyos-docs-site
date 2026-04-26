"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["371118"], {
880335(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_lazyforeach_args_check_ide_lazyforeach_args_check_md_1a9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-lazyforeach-args-check-ide-lazyforeach-args-check-md-1a9.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_lazyforeach_args_check_ide_lazyforeach_args_check_md_1a9_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-lazyforeach-args-check/ide-lazyforeach-args-check","title":"@performance/lazyforeach-args-check（已下线）","description":"建议在LazyForEach参数中设置keyGenerator。该规则已于5.0.3.500版本下线。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-lazyforeach-args-check/ide-lazyforeach-args-check.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-lazyforeach-args-check","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-lazyforeach-args-check/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-lazyforeach-args-check/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":53,"frontMatter":{"title":"@performance/lazyforeach-args-check（已下线）","sidebar_position":53,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-lazyforeach-args-check","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@performance/js-code-cache-by-precompile-check","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-js-code-cache-by-precompile-check/"},"next":{"title":"@performance/lottie-animation-destroy-check","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-lottie-animation-destroy-check/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-lazyforeach-args-check/ide-lazyforeach-args-check.md


const frontMatter = {
	title: '@performance/lazyforeach-args-check（已下线）',
	sidebar_position: 53,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-lazyforeach-args-check',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/lazyforeach-args-check（已下线）';

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
        id: "performancelazyforeach-args-check已下线",
        children: "@performance/lazyforeach-args-check（已下线）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议在LazyForEach参数中设置keyGenerator。该规则已于5.0.3.500版本下线。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/lazyforeach-args-check\": \"warn\",\n  }\n}\n"
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
        children: "class BasicDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: string[] = [];\n  public totalCount(): number {\n    return 0;\n  }\n  public getData(index: number): string {\n    return this.originDataArray[index];\n  }\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      console.info('add listener');\n      this.listeners.push(listener);\n    }\n  }\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      console.info('remove listener');\n      this.listeners.splice(pos, 1);\n    }\n  }\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    })\n  }\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    })\n  }\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n    })\n  }\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    })\n  }\n}\nclass MyDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n  public addData(index: number, data: string): void {\n    this.dataArray.splice(index, 0, data);\n    this.notifyDataAdd(index);\n  }\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n@Entry\n@Component\nstruct MyComponent {\n  private data: MyDataSource = new MyDataSource();\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(`Hello ${i}`)\n    }\n  }\n  build() {\n    Column({ space: 5 }) {\n      Grid() {\n        LazyForEach(this.data, (item: string) => {\n          GridItem() {\n            // 使用可复用自定义组件\n            // 业务逻辑\n          }\n        }, (item: string) => item)\n      }\n      .cachedCount(2) // 设置GridItem的缓存数量\n      .columnsTemplate('1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .margin(10)\n      .height(500)\n      .backgroundColor(0xFAEEE0)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class BasicDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: string[] = [];\n  public totalCount(): number {\n    return 0;\n  }\n  public getData(index: number): string {\n    return this.originDataArray[index];\n  }\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      console.info('add listener');\n      this.listeners.push(listener);\n    }\n  }\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      console.info('remove listener');\n      this.listeners.splice(pos, 1);\n    }\n  }\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    })\n  }\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    })\n  }\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n    })\n  }\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    })\n  }\n}\nclass MyDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n  public addData(index: number, data: string): void {\n    this.dataArray.splice(index, 0, data);\n    this.notifyDataAdd(index);\n  }\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n@Entry\n@Component\nstruct MyComponent {\n  private data: MyDataSource = new MyDataSource();\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(`Hello ${i}`)\n    }\n  }\n  build() {\n    Column({ space: 5 }) {\n      Grid() {\n        LazyForEach(this.data, (item: string) => {\n          GridItem() {\n            // 使用可复用自定义组件\n            // 业务逻辑\n          }\n        })\n      }\n      .cachedCount(2) // 设置GridItem的缓存数量\n      .columnsTemplate('1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .margin(10)\n      .height(500)\n      .backgroundColor(0xFAEEE0)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则集",
      children: "规则集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "plugin:@performance/recommended\n"
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