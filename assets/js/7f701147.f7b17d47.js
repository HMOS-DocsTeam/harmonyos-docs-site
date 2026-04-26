"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["626465"], {
801589(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_typescript_eslint_ide_no_loop_func_ide_no_loop_func_md_7f7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-typescript-eslint-ide-no-loop-func-ide-no-loop-func-md-7f7.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_typescript_eslint_ide_no_loop_func_ide_no_loop_func_md_7f7_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-loop-func/ide_no-loop-func","title":"@typescript-eslint/no-loop-func","description":"禁止在循环语句内包含不安全引用的函数声明。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-loop-func/ide_no-loop-func.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-loop-func","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-loop-func/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-loop-func/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":49,"frontMatter":{"title":"@typescript-eslint/no-loop-func","sidebar_position":49,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_no-loop-func","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@typescript-eslint/no-invalid-void-type","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-invalid-void-type/"},"next":{"title":"@typescript-eslint/no-loss-of-precision","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-loss-of-precision/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-loop-func/ide_no-loop-func.md


const frontMatter = {
	title: '@typescript-eslint/no-loop-func',
	sidebar_position: 49,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_no-loop-func',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@typescript-eslint/no-loop-func';

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
        id: "typescript-eslintno-loop-func",
        children: "@typescript-eslint/no-loop-func"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "禁止在循环语句内包含不安全引用的函数声明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该规则仅支持对.js/.ts文件进行检查。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@typescript-eslint/no-loop-func\": \"error\"\n  }\n}\n"
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
        children: "const a = function(): void {\n  console.info('hello');\n};\n\nfor (let i = 10; i; i--) {\n  a();\n}\n\nfor (let i = 10; i; i--) {\n  const b = function(): void {\n    a();\n  }; // OK, no references to variables in the outer scopes.\n  b();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const num = 10;\nfor (let i = num; i; i--) {\n  // 变量i是不安全的引用\n  (function(): number {\n    return i;\n  })();\n}\n\nlet i1 = 0;\nwhile (i1 < num) {\n  // 变量i是不安全的引用\n  const a = function(): number {\n    return i1;\n  };\n  a();\n\n  i1++;\n}\n\nlet i2 = 0;\ndo {\n  // 变量i是不安全的引用\n  function a(): number {\n    return i2;\n  }\n  a();\n\n  i2++;\n} while (i2 < num);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则集",
      children: "规则集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "plugin:@typescript-eslint/all\n"
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