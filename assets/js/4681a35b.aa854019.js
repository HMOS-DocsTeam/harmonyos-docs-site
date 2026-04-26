"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["592426"], {
853598(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_hvigor_configuration_ide_hvigor_multi_projects_ide_hvigor_multi_projects_md_468_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-hvigor-configuration-ide-hvigor-multi-projects-ide-hvigor-multi-projects-md-468.json
var site_docs_ide_hvigor_configuration_ide_hvigor_multi_projects_ide_hvigor_multi_projects_md_468_namespaceObject = JSON.parse('{"id":"ide-hvigor-configuration/ide-hvigor-multi-projects/ide-hvigor-multi-projects","title":"多工程构建","description":"为降低大型应用多个团队协作开发的复杂度，提供多工程开发模式，提高协作开发效率。多工程开发能力支持将大型应用拆分为多个模块，每个模块对应一个单独工程。在每个工程分别编译生成HAP后，需统一打包生成一个APP，用于上架应用市场。","source":"@site/docs/ide-hvigor-configuration/ide-hvigor-multi-projects/ide-hvigor-multi-projects.md","sourceDirName":"ide-hvigor-configuration/ide-hvigor-multi-projects","slug":"/ide-hvigor-configuration/ide-hvigor-multi-projects/","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-hvigor-multi-projects/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"多工程构建","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-multi-projects","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"预构建库快速链接","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-hvigor-so/"},"next":{"title":"HAP唯一性校验逻辑","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-hvigor-verification-rule/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-hvigor-configuration/ide-hvigor-multi-projects/ide-hvigor-multi-projects.md


const frontMatter = {
	title: '多工程构建',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-multi-projects',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '多工程构建';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "多工程构建",
        children: "多工程构建"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为降低大型应用多个团队协作开发的复杂度，提供多工程开发模式，提高协作开发效率。多工程开发能力支持将大型应用拆分为多个模块，每个模块对应一个单独工程。在每个工程分别编译生成HAP后，需统一打包生成一个APP，用于上架应用市场。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "分别在每个工程的工程级build-profile.json5配置文件中，设置multiProjects字段值为true。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"app\": {\n    \"multiProjects\": true,\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "准备好HAP打包工具app_packing_tool.jar（在 $DevEco Studio安装目录/sdk/default/openharmony/toolchains/lib下）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在HAP打包工具目录下，执行命令将多个HAP进行打包，示例如下。更多关于打包工具的使用请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-debug-optimize/debugging-commands/packing-unpacking/packing-tool#%E5%A4%9A%E5%B7%A5%E7%A8%8B%E6%89%93%E5%8C%85%E6%8C%87%E4%BB%A4",
            children: "打包工具"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "java -jar app_packing_tool.jar --mode multiApp --hap-list D:\\project\\MyApplication\\1.hap,D:\\project\\MyApplication1\\2.hap --out-path D:\\project\\final.app\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "hap-list：多个HAP文件路径，用逗号隔开。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "out-path：生成的APP文件路径，如\"D:\\project\\final.app\"。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
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