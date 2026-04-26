"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["241889"], {
789310(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_build_expanding_ide_hvigor_apis_ide_build_expanding_sample_ide_build_expanding_sample_md_7d4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-build-expanding-ide-hvigor-apis-ide-build-expanding-sample-ide-build-expanding-sample-md-7d4.json
var site_docs_ide_build_expanding_ide_hvigor_apis_ide_build_expanding_sample_ide_build_expanding_sample_md_7d4_namespaceObject = JSON.parse('{"id":"ide-build-expanding/ide-hvigor-apis/ide-build-expanding-sample/ide-build-expanding-sample","title":"API使用示例","description":"示例：在工程级hvigorfile.ts文件中分别注册工程级与模块级任务。","source":"@site/docs/ide-build-expanding/ide-hvigor-apis/ide-build-expanding-sample/ide-build-expanding-sample.md","sourceDirName":"ide-build-expanding/ide-hvigor-apis/ide-build-expanding-sample","slug":"/ide-build-expanding/ide-hvigor-apis/ide-build-expanding-sample/","permalink":"/harmonyos-docs-site/ide-build-expanding/ide-hvigor-apis/ide-build-expanding-sample/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"API使用示例","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-build-expanding-sample","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"插件上下文","permalink":"/harmonyos-docs-site/ide-build-expanding/ide-hvigor-apis/ide-build-expanding-context/"},"next":{"title":"混淆加固","permalink":"/harmonyos-docs-site/ide-build-obfuscation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-build-expanding/ide-hvigor-apis/ide-build-expanding-sample/ide-build-expanding-sample.md


const frontMatter = {
	title: 'API使用示例',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-build-expanding-sample',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = 'API使用示例';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "api使用示例",
        children: "API使用示例"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例：在工程级hvigorfile.ts文件中分别注册工程级与模块级任务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 工程级hvigorfile.ts文件\nimport { hvigor, HvigorNode, HvigorPlugin } from '@ohos/hvigor';\nimport { appTasks, OhosHapContext, OhosPluginId, Target } from '@ohos/hvigor-ohos-plugin';\n\n// 实现自定义插件\nexport function customPlugin(): HvigorPlugin {\n  return {\n    pluginId: 'customPlugin',\n    context() {\n      return {\n        data: 'customPlugin xxx'\n      };\n    },\n    async apply(currentNode: HvigorNode): Promise<void> {\n      hvigor.nodesEvaluated(async () => {\n        // 注册模块级任务\n        hapTask(currentNode);\n      });\n    }\n  };\n}\nfunction hapTask(currentNode: HvigorNode) {\n  // 等待全部节点加载完成之后获取子节点信息\n  currentNode.subNodes((node: HvigorNode) => {\n    // 获取hap模块上下文信息\n    const hapContext = node.getContext(OhosPluginId.OHOS_HAP_PLUGIN) as OhosHapContext;\n    const moduleName = hapContext?.getModuleName();\n    hapContext?.targets((target: Target) => {\n      const targetName = target.getTargetName();\n      const outputPath = target.getBuildTargetOutputPath();\n      // 禁用任务\n      node.getTaskByName(`${target.getTargetName()}@SignHap`)?.setEnable(false);\n      node.registerTask({\n        // 任务名称\n        name: `${targetName}@onlineSignHap`,\n        // 任务执行逻辑主体函数\n        run() {\n          console.log('module Task');\n        },\n        // 配置前置任务依赖\n        dependencies: [`${targetName}@PackageHap`],\n        // 配置任务的后置任务依赖\n        postDependencies: ['assembleHap']\n      });\n    });\n  });\n}\nexport default {\n  system: appTasks,  /* Built-in plugin of Hvigor. It cannot be modified. */\n  plugins:[customPlugin()]         /* Custom plugin to extend the functionality of Hvigor. */\n};\n"
      })
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