"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["727360"], {
245539(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_hvigor_configuration_file_ide_hvigor_configuration_file_overview_ide_hvigor_configuration_file_overview_md_043_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-hvigor-configuration-file-ide-hvigor-configuration-file-overview-ide-hvigor-configuration-file-overview-md-043.json
var site_docs_ide_hvigor_configuration_file_ide_hvigor_configuration_file_overview_ide_hvigor_configuration_file_overview_md_043_namespaceObject = JSON.parse('{"id":"ide-hvigor-configuration-file/ide-hvigor-configuration-file-overview/ide-hvigor-configuration-file-overview","title":"配置文件概述","description":"工程应用代码包含hvigor-config.json5、build-profile.json5等构建配置文件，用于配置构建环境，定制构建流程，包括构建工具版本和依赖、多目标构建配置等。","source":"@site/docs/ide-hvigor-configuration-file/ide-hvigor-configuration-file-overview/ide-hvigor-configuration-file-overview.md","sourceDirName":"ide-hvigor-configuration-file/ide-hvigor-configuration-file-overview","slug":"/ide-hvigor-configuration-file/ide-hvigor-configuration-file-overview/","permalink":"/harmonyos-docs-site/ide-hvigor-configuration-file/ide-hvigor-configuration-file-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"配置文件概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-configuration-file-overview","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"构建产物说明","permalink":"/harmonyos-docs-site/ide-hvigor/ide-compile-build/"},"next":{"title":"hvigor-config.json5文件","permalink":"/harmonyos-docs-site/ide-hvigor-configuration-file/ide-hvigor-set-options/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-hvigor-configuration-file/ide-hvigor-configuration-file-overview/ide-hvigor-configuration-file-overview.md


const frontMatter = {
	title: '配置文件概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-configuration-file-overview',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '配置文件概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "配置文件概述",
        children: "配置文件概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["工程应用代码包含hvigor-config.json5、build-profile.json5等构建配置文件，用于配置构建环境，定制构建流程，包括构建工具版本和依赖、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-customized-multi-targets-and-products",
        children: "多目标构建配置"
      }), "等。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-set-options",
        children: "hvigor-config.json5文件"
      }), "在工程的hvigor目录下，主要包含以下内容："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指定当前工程的开发态构建工具版本号、构建任务和脚本的依赖版本等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指定构建工具的相关能力，包括日志级别、执行策略等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指定构建的运行时node的相关配置参数，以及其他传递给构建脚本的额外参数等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "build-profile.json5文件分为工程级与模块级，其中buildOption在工程级文件和模块级文件均可配置，其中相同字段以模块级的字段为准，不同字段模块级的buildOption配置会继承工程级配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app",
        children: "工程级build-profile.json5文件"
      }), "在工程根目录下，主要包含以下内容："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "工程结构的信息，即应用工程中需要参与构建的所有模块，包括模块名、模块路径等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用构建所需基础配置信息，包括应用名、SDK版本、签名等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "构建多目标应用的定制化配置，包括product、buildMode等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["每个模块下也有一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile",
        children: "build-profile.json5文件"
      }), "，主要包含以下内容："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模块级配置信息，包括API模型类型、构建多目标产物target配置等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模块在编译构建过程中的定制化配置，包括ArkTS/C++源码和资源的编译配置，打包配置等。"
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