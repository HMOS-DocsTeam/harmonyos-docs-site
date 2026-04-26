"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["812661"], {
343996(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_arkui_no_stringify_lazyforeach_key_ide_hp_arkui_no_stringify_lazyforeach_key_md_f85_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-hp-arkui-no-stringify-lazyforeach-key-ide-hp-arkui-no-stringify-lazyforeach-key-md-f85.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_arkui_no_stringify_lazyforeach_key_ide_hp_arkui_no_stringify_lazyforeach_key_md_f85_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-no-stringify-lazyforeach-key/ide_hp-arkui-no-stringify-lazyforeach-key","title":"@performance/hp-arkui-no-stringify-in-lazyforeach-key-generator","description":"在使用LazyForEach进行组件复用的key生成器函数里，不要使用stringify。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-no-stringify-lazyforeach-key/ide_hp-arkui-no-stringify-lazyforeach-key.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-no-stringify-lazyforeach-key","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-no-stringify-lazyforeach-key/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-no-stringify-lazyforeach-key/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"@performance/hp-arkui-no-stringify-in-lazyforeach-key-generator","sidebar_position":18,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_hp-arkui-no-stringify-lazyforeach-key","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@performance/hp-arkui-no-high-freq-log（已下线）","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-no-high-freq-log/"},"next":{"title":"@performance/hp-arkui-no-state-var-access-in-loop","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-no-state-var-access-in-loop/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-no-stringify-lazyforeach-key/ide_hp-arkui-no-stringify-lazyforeach-key.md


const frontMatter = {
	title: '@performance/hp-arkui-no-stringify-in-lazyforeach-key-generator',
	sidebar_position: 18,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_hp-arkui-no-stringify-lazyforeach-key',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/hp-arkui-no-stringify-in-lazyforeach-key-generator';

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
        id: "performancehp-arkui-no-stringify-in-lazyforeach-key-generator",
        children: "@performance/hp-arkui-no-stringify-in-lazyforeach-key-generator"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用LazyForEach进行组件复用的key生成器函数里，不要使用stringify。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滑动丢帧场景下，建议优先修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/hp-arkui-no-stringify-in-lazyforeach-key-generator\": \"warn\",\n  }\n}\n"
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
        children: "//源码文件，请以工程实际为准\nimport { MyDataSource } from './MyDataSource';\n// 此处为复用的自定义组件\n@Reusable\n@Component\nstruct ChildComponent {\n  @State desc: string = '';\n  @State sum: number = 0;\n  @State avg: number = 0;\n  aboutToReuse(params: Record<string, Object>): void {\n    this.desc = params.desc as string;\n    this.sum = params.sum as number;\n    this.avg = params.avg as number;\n  }\n  build() {\n    Column() {\n      Text('子组件' + this.desc)\n        .fontSize(30)\n        .fontWeight(30)\n      Text('结果' + this.sum)\n        .fontSize(30)\n        .fontWeight(30)\n      Text('平均值' + this.avg)\n        .fontSize(30)\n        .fontWeight(30)\n    }\n  }\n}\nclass Item {\n  advertInfos: Model[] = []\n  productPrice: PriceInfo[] = []\n  addresses: string[] = []\n  id: string = ''\n}\nclass Model {\n  pictureUrl: string = \"\"\n  name: string = \"\"\n  comments: string = \"\"\n  desc: string = \"\"\n  linkParam: string = \"\"\n  mcInfo: string = \"\"\n  label: string = \"\"\n  cgType: string = \"\"\n  constructor(pictureUrl: string, name: string, comments: string, desc: string, linkParam: string, mcInfo: string,\n    label: string, cgType: string) {\n    this.pictureUrl = pictureUrl;\n    this.name = name;\n    this.comments = comments;\n    this.desc = desc;\n    this.linkParam = linkParam;\n    this.mcInfo = mcInfo;\n    this.label = label;\n    this.cgType = cgType;\n  }\n}\nclass PriceInfo {\n  price: number = 0;\n  level: number = 1;\n  constructor(price: number, level: number) {\n    this.price = price;\n    this.level = level;\n  }\n}\n@Entry\n@Component\nstruct MyComponent {\n  private data: MyDataSource = new MyDataSource();\n  aboutToAppear(): void {\n    for (let index = 0; index < 20; index++) {\n      let item = new Item()\n      for (let i = 0; i < 1000; i++) {\n        item.advertInfos.push(new Model(\"Product A\", \"Product A\", \"Product A\", \"Product A\", \"Product A\", \"Product A\", \"Product A\", \"Product A\"));\n        item.productPrice.push(new PriceInfo(1.99, 123456));\n        item.addresses.push(\"Beijing\")\n      }\n      item.id = index.toString();\n      this.data.pushData(item)\n    }\n  }\n  build() {\n    Column() {\n      Text('Use the unique ID of an item as the key')\n        .fontSize(12)\n        .height('16')\n        .margin({\n          top: 5,\n          bottom: 10\n        })\n      List() {\n        LazyForEach(this.data, (item: Item) => {\n          ListItem() {\n            ChildComponent({ desc: item.id, sum: 0, avg: 0 })\n          }\n          .width('100%')\n          .height('10%')\n          .border({ width: 1 })\n          .borderStyle(BorderStyle.Dashed)\n        }, (item: Item) => item.id.toString())\n      }\n      .height('100%')\n      .width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "//源码文件，请以工程实际为准\nimport { MyDataSource } from './MyDataSource';\n// 此处为复用的自定义组件\n@Reusable\n@Component\nstruct ChildComponent {\n  @State desc: string = '';\n  @State sum: number = 0;\n  @State avg: number = 0;\n\n  aboutToReuse(params: Record<string, Object>): void {\n    this.desc = params.desc as string;\n    this.sum = params.sum as number;\n    this.avg = params.avg as number;\n  }\n\n  build() {\n    Column() {\n      Text('子组件' + this.desc)\n        .fontSize(30)\n        .fontWeight(30)\n      Text('结果' + this.sum)\n        .fontSize(30)\n        .fontWeight(30)\n      Text('平均值' + this.avg)\n        .fontSize(30)\n        .fontWeight(30)\n    }\n  }\n}\n\nclass Item {\n  advertInfos: Model[] = []\n  productPrice: PriceInfo[] = []\n  addresses: string[] = []\n  id: string = ''\n}\n\nclass Model {\n  pictureUrl: string = \"\"\n  name: string = \"\"\n  comments: string = \"\"\n  desc: string = \"\"\n  linkParam: string = \"\"\n  mcInfo: string = \"\"\n  label: string = \"\"\n  cgType: string = \"\"\n\n  constructor(pictureUrl: string, name: string, comments: string, desc: string, linkParam: string, mcInfo: string,\n    label: string, cgType: string) {\n    this.pictureUrl = pictureUrl;\n    this.name = name;\n    this.comments = comments;\n    this.desc = desc;\n    this.linkParam = linkParam;\n    this.mcInfo = mcInfo;\n    this.label = label;\n    this.cgType = cgType;\n  }\n}\n\nclass PriceInfo {\n  price: number = 0;\n  level: number = 1;\n\n  constructor(price: number, level: number) {\n    this.price = price;\n    this.level = level;\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear(): void {\n    for (let index = 0; index < 20; index++) {\n      let item = new Item()\n      for (let i = 0; i < 1000; i++) {\n        item.advertInfos.push(new Model(\"Product A\", \"Product A\", \"Product A\", \"Product A\", \"Product A\", \"Product A\", \"Product A\", \"Product A\"));\n        item.productPrice.push(new PriceInfo(1.99, 123456));\n        item.addresses.push(\"Beijing\")\n      }\n      item.id = index.toString();\n      this.data.pushData(item)\n    }\n  }\n\n  build() {\n    Column() {\n      Text('Use the time-consuming function `JSON.stringify (item)` to generate a key')\n        .fontSize(12)\n        .height('16')\n        .margin({\n          top: 5,\n          bottom: 10\n        })\n      List() {\n        LazyForEach(this.data, (item: Item) => {\n          ListItem() {\n            ChildComponent({ desc: item.id, sum: 0, avg: 0 })\n          }\n          .width('100%')\n          .height('10%')\n          .border({ width: 1 })\n          .borderStyle(BorderStyle.Dashed)\n        }, (item: Item) => JSON.stringify(item))\n      }\n      .height('100%')\n      .width('100%')\n    }\n  }\n}\n"
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