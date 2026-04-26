"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["770376"], {
452546(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_arkui_set_cache_count_for_lazyforeach_grid_ide_hp_arkui_set_cache_count_for_lazyforeach_grid_md_50b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-hp-arkui-set-cache-count-for-lazyforeach-grid-ide-hp-arkui-set-cache-count-for-lazyforeach-grid-md-50b.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_arkui_set_cache_count_for_lazyforeach_grid_ide_hp_arkui_set_cache_count_for_lazyforeach_grid_md_50b_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-set-cache-count-for-lazyforeach-grid/ide_hp-arkui-set-cache-count-for-lazyforeach-grid","title":"@performance/hp-arkui-set-cache-count-for-lazyforeach-grid","description":"建议在Grid下使用LazyForEach时设置合理的cacheCount。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-set-cache-count-for-lazyforeach-grid/ide_hp-arkui-set-cache-count-for-lazyforeach-grid.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-set-cache-count-for-lazyforeach-grid","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-set-cache-count-for-lazyforeach-grid/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-set-cache-count-for-lazyforeach-grid/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":28,"frontMatter":{"title":"@performance/hp-arkui-set-cache-count-for-lazyforeach-grid","sidebar_position":28,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_hp-arkui-set-cache-count-for-lazyforeach-grid","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@performance/hp-arkui-remove-unchanged-state-var","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-remove-unchanged-state-var/"},"next":{"title":"@performance/hp-arkui-suggest-cache-avplayer","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-suggest-cache-avplayer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-set-cache-count-for-lazyforeach-grid/ide_hp-arkui-set-cache-count-for-lazyforeach-grid.md


const frontMatter = {
	title: '@performance/hp-arkui-set-cache-count-for-lazyforeach-grid',
	sidebar_position: 28,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_hp-arkui-set-cache-count-for-lazyforeach-grid',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/hp-arkui-set-cache-count-for-lazyforeach-grid';

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
        id: "performancehp-arkui-set-cache-count-for-lazyforeach-grid",
        children: "@performance/hp-arkui-set-cache-count-for-lazyforeach-grid"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议在Grid下使用LazyForEach时设置合理的cacheCount。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "滑动丢帧场景下，建议优先修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/hp-arkui-set-cache-count-for-lazyforeach-grid\": \"suggestion\",\n  }\n}\n"
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
        children: "// 源码文件，请以工程实际为准\nimport { MyDataSource } from './MyDataSource';\n\n@Entry\n@Component\nstruct MyComponent {\n  // 数据源\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 1; i < 1000; i++) {\n      this.data.pushData(i);\n    }\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Grid() {\n        LazyForEach(this.data, (item: number) => {\n          GridItem() {\n            // 使用可复用自定义组件\n            // 业务逻辑\n          }\n        }, (item: string) => item.toString())\n      }\n      // 设置GridItem的缓存数量\n      .cachedCount(2)\n      .columnsTemplate('1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .margin(10)\n      .height(500)\n      .backgroundColor(0xFAEEE0)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 源码文件，请以工程实际为准\nimport { MyDataSource } from './MyDataSource';\n\n@Entry\n@Component\nstruct MyComponent {\n  // 数据源\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 1; i < 1000; i++) {\n      this.data.pushData(i);\n    }\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Grid() {\n        LazyForEach(this.data, (item: number) => {\n          GridItem() {\n            // 使用可复用自定义组件\n            // 业务逻辑\n          }\n        }, (item: string) => item.toString())\n      }\n      // 未设置GridItem的缓存数量\n      .columnsTemplate('1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .margin(10)\n      .height(500)\n      .backgroundColor(0xFAEEE0)\n    }\n  }\n}\n"
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