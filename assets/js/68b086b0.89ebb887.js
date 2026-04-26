"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["990932"], {
897390(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_typescript_eslint_ide_no_floating_promises_ide_no_floating_promises_md_68b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-typescript-eslint-ide-no-floating-promises-ide-no-floating-promises-md-68b.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_typescript_eslint_ide_no_floating_promises_ide_no_floating_promises_md_68b_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-floating-promises/ide_no-floating-promises","title":"@typescript-eslint/no-floating-promises","description":"要求正确处理Promise表达式。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-floating-promises/ide_no-floating-promises.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-floating-promises","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-floating-promises/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-floating-promises/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":42,"frontMatter":{"title":"@typescript-eslint/no-floating-promises","sidebar_position":42,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_no-floating-promises","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@typescript-eslint/no-extra-semi","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-extra-semi/"},"next":{"title":"@typescript-eslint/no-for-in-array","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-for-in-array/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_no-floating-promises/ide_no-floating-promises.md


const frontMatter = {
	title: '@typescript-eslint/no-floating-promises',
	sidebar_position: 42,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_no-floating-promises',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@typescript-eslint/no-floating-promises';

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
        id: "typescript-eslintno-floating-promises",
        children: "@typescript-eslint/no-floating-promises"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "要求正确处理Promise表达式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "floating-promise是指在创建Promise时，没有使用任何代码来处理它可能引发的错误，这是一种不正确的使用方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@typescript-eslint/no-floating-promises\": \"error\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选项",
      children: "选项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://typescript-eslint.nodejs.cn/rules/no-floating-promises/#options",
        children: "@typescript-eslint/no-floating-promises选项"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "正例",
      children: "正例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export async function bar() {\n  const promise = new Promise<string>(resolve => {\n    resolve('value');\n    return 'finish';\n  });\n  await promise;\n\n  Promise.reject('value').catch(() => {\n    console.error('error');\n  });\n\n  await Promise.reject('value').finally(() => {\n    console.info('finally');\n  });\n\n  await Promise.all(['1', '2', '3'].map(x => x + '1'));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export async function bar() {\n  const promise = new Promise<string>(resolve => {\n    resolve('value');\n    return 'finish';\n  });\n  promise;\n\n  Promise.reject('value').catch();\n\n  await Promise.reject('value').finally();\n\n  ['1', '2', '3'].map(async x => x + '1');\n}\n"
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