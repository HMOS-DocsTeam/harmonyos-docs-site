"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["296533"], {
524542(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_arkui_use_grid_layout_options_ide_hp_arkui_use_grid_layout_options_md_682_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-hp-arkui-use-grid-layout-options-ide-hp-arkui-use-grid-layout-options-md-682.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_arkui_use_grid_layout_options_ide_hp_arkui_use_grid_layout_options_md_682_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-grid-layout-options/ide_hp-arkui-use-grid-layout-options","title":"@performance/hp-arkui-use-grid-layout-options","description":"建议在指定位置时使用GridLayoutOptions提升Grid性能。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-grid-layout-options/ide_hp-arkui-use-grid-layout-options.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-grid-layout-options","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-grid-layout-options/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-grid-layout-options/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":34,"frontMatter":{"title":"@performance/hp-arkui-use-grid-layout-options","sidebar_position":34,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_hp-arkui-use-grid-layout-options","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@performance/hp-arkui-use-attributeUpdater-control-refresh-scope","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-attribute-update-refresh-scope/"},"next":{"title":"@performance/hp-arkui-use-id-in-get-resource-sync-api","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-id-in-get-resource-sync-api/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-grid-layout-options/ide_hp-arkui-use-grid-layout-options.md


const frontMatter = {
	title: '@performance/hp-arkui-use-grid-layout-options',
	sidebar_position: 34,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_hp-arkui-use-grid-layout-options',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/hp-arkui-use-grid-layout-options';

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
        id: "performancehp-arkui-use-grid-layout-options",
        children: "@performance/hp-arkui-use-grid-layout-options"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议在指定位置时使用GridLayoutOptions提升Grid性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通用丢帧场景下，建议优先修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/hp-arkui-use-grid-layout-options\": \"warn\",\n  }\n}\n"
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
        children: "// 源码文件，请以工程实际为准\nimport { MyDataSource } from './MyDataSource';\n\n@Reusable\n@Component\nstruct TextItem {\n  @State item: string = \"\";\n\n  build() {\n    Text(this.item)\n      .fontSize(16)\n      .backgroundColor(0xF9CF93)\n      .width('100%')\n      .height(80)\n      .textAlign(TextAlign.Center)\n      .onClick(() => {\n        this.item = 'click';\n      })\n  }\n}\n\n@Entry\n@Component\nexport struct MyComponent{\n  private datasource: MyDataSource = new MyDataSource();\n  scroller: Scroller = new Scroller();\n  private irregularData: number[] = [];\n  layoutOptions: GridLayoutOptions = {\n    regularSize: [1, 1],\n    irregularIndexes: this.irregularData,\n  };\n\n  aboutToAppear() {\n    for (let i = 1; i <= 2000; i++) {\n      this.datasource.pushData(i + '');\n      if ((i - 1) % 4 === 0) {\n        this.irregularData.push(i - 1);\n      }\n    }\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Text('Set GridItem size using GridLayoutOptions').fontColor(0xCCCCCC).fontSize(9).width('90%')\n      Grid(this.scroller, this.layoutOptions) {\n        LazyForEach(this.datasource, (item: string, index: number) => {\n          GridItem() {\n            TextItem({ item: item })\n          }\n        }, (item: string) => item)\n      }\n      .cachedCount(1)\n      .columnsTemplate('1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .width('90%')\n      .height('40%')\n\n      Button(\"scrollToIndex:1900\").onClick(() => {\n        this.scroller.scrollToIndex(1900);\n      })\n    }.width('100%')\n    .margin({ top: 5 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 源码文件，请以工程实际为准\nimport { MyDataSource } from './MyDataSource';\n\n@Reusable\n@Component\nstruct TextItem {\n  @State item: string = \"\";\n\n  build() {\n    Text(this.item)\n      .fontSize(16)\n      .backgroundColor(0xF9CF93)\n      .width('100%')\n      .height(80)\n      .textAlign(TextAlign.Center)\n      .onClick(() => {\n        this.item = 'click';\n      })\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent{\n  private datasource: MyDataSource = new MyDataSource();\n  scroller: Scroller = new Scroller();\n\n  aboutToAppear() {\n    for (let i = 1; i <= 2000; i++) {\n      this.datasource.pushData(i + '');\n    }\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Text('Use columnStart and columnEnd to set the GridItem size').fontColor(0xCCCCCC).fontSize(9).width('90%')\n      Grid(this.scroller) {\n        LazyForEach(this.datasource, (item: string, index: number) => {\n          if ((index % 4) === 0) {\n            GridItem() {\n              TextItem({ item: item })\n            }\n            .columnStart(0).columnEnd(2)\n          } else {\n            GridItem() {\n              TextItem({ item: item })\n            }\n          }\n        }, (item: string) => item)\n      }\n      .cachedCount(1)\n      .columnsTemplate('1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .width('90%')\n      .height('40%')\n\n      Button(\"scrollToIndex:1900\").onClick(() => {\n        this.scroller.scrollToIndex(1900);\n      })\n    }.width('100%')\n    .margin({ top: 5 })\n  }\n}\n"
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