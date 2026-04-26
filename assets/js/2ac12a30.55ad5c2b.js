"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["339347"], {
156369(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_ohpm_cli_ide_ohpm_errorcode_ide_ohpm_unpublish_errorcode_ide_ohpm_unpublish_errorcode_md_2ac_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-ohpm-cli-ide-ohpm-errorcode-ide-ohpm-unpublish-errorcode-ide-ohpm-unpublish-errorcode-md-2ac.json
var site_docs_ide_ohpm_cli_ide_ohpm_errorcode_ide_ohpm_unpublish_errorcode_ide_ohpm_unpublish_errorcode_md_2ac_namespaceObject = JSON.parse('{"id":"ide-ohpm-cli/ide-ohpm-errorcode/ide-ohpm-unpublish-errorcode/ide-ohpm-unpublish-errorcode","title":"ohpm unpublish错误码","description":"00610001 执行下架命令时未指定版本号","source":"@site/docs/ide-ohpm-cli/ide-ohpm-errorcode/ide-ohpm-unpublish-errorcode/ide-ohpm-unpublish-errorcode.md","sourceDirName":"ide-ohpm-cli/ide-ohpm-errorcode/ide-ohpm-unpublish-errorcode","slug":"/ide-ohpm-cli/ide-ohpm-errorcode/ide-ohpm-unpublish-errorcode/","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-errorcode/ide-ohpm-unpublish-errorcode/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"ohpm unpublish错误码","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-unpublish-errorcode","kit":"devtools/cli","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"ohpm uninstall错误码","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-errorcode/ide-ohpm-uninstall-errorcode/"},"next":{"title":"ohpm update错误码","permalink":"/harmonyos-docs-site/ide-ohpm-cli/ide-ohpm-errorcode/ide-ohpm-update-errorcode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-ohpm-cli/ide-ohpm-errorcode/ide-ohpm-unpublish-errorcode/ide-ohpm-unpublish-errorcode.md


const frontMatter = {
	title: 'ohpm unpublish错误码',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-unpublish-errorcode',
	kit: 'devtools/cli',
	last_updated: '2026-04-24'
};
const contentTitle = 'ohpm unpublish错误码';

const assets = {

};



const toc = [{
  "value": "00610001 执行下架命令时未指定版本号",
  "id": "00610001-执行下架命令时未指定版本号",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ohpm-unpublish错误码",
        children: "ohpm unpublish错误码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "00610001-执行下架命令时未指定版本号",
      children: "00610001 执行下架命令时未指定版本号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Delete All Version Pkg Not Force."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未强制下架不同版本的包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下架时未指定版本号，且未使用强制下架。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果未指定版本，默认下架三方库的所有版本，并且需要加上 -f 配置参数。"
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