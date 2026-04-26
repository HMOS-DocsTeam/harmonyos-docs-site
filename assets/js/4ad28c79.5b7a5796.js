"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["663364"], {
276315(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_typescript_eslint_ide_switch_exhaustiveness_check_ide_switch_exhaustiveness_check_md_4ad_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-typescript-eslint-ide-switch-exhaustiveness-check-ide-switch-exhaustiveness-check-md-4ad.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_typescript_eslint_ide_switch_exhaustiveness_check_ide_switch_exhaustiveness_check_md_4ad_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_switch-exhaustiveness-check/ide_switch-exhaustiveness-check","title":"@typescript-eslint/switch-exhaustiveness-check","description":"要求switch语句对于联合类型中值的判断是详尽无遗的。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_switch-exhaustiveness-check/ide_switch-exhaustiveness-check.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_switch-exhaustiveness-check","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_switch-exhaustiveness-check/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_switch-exhaustiveness-check/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":106,"frontMatter":{"title":"@typescript-eslint/switch-exhaustiveness-check","sidebar_position":106,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_switch-exhaustiveness-check","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@typescript-eslint/strict-boolean-expressions","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_strict-boolean-expressions/"},"next":{"title":"@typescript-eslint/triple-slash-reference","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_triple-slash-reference/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_switch-exhaustiveness-check/ide_switch-exhaustiveness-check.md


const frontMatter = {
	title: '@typescript-eslint/switch-exhaustiveness-check',
	sidebar_position: 106,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_switch-exhaustiveness-check',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@typescript-eslint/switch-exhaustiveness-check';

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
        id: "typescript-eslintswitch-exhaustiveness-check",
        children: "@typescript-eslint/switch-exhaustiveness-check"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "要求switch语句对于联合类型中值的判断是详尽无遗的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当switch语句中的判断条件是字面量值的集合或者是一个枚举类型，如果case语句中缺少任何一个值的判断，并且没有default语句时，此规则会告警。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@typescript-eslint/switch-exhaustiveness-check\": \"error\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选项",
      children: "选项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详情请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://typescript-eslint.nodejs.cn/rules/switch-exhaustiveness-check/#options",
        children: "@typescript-eslint/switch-exhaustiveness-check选项"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "正例",
      children: "正例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "type Day =\n  | 'Monday'\n  | 'Tuesday'\n  | 'Wednesday'\n  | 'Thursday'\n  | 'Friday'\n  | 'Saturday'\n  | 'Sunday';\n\ndeclare const day1: Day;\n\nlet result = '0';\n\nswitch (day1) {\n  case 'Monday':\n    result = '1';\n    break;\n  case 'Tuesday':\n    result = '2';\n    break;\n  case 'Wednesday':\n    result = '3';\n    break;\n  case 'Thursday':\n    result = '4';\n    break;\n  case 'Friday':\n    result = '5';\n    break;\n  case 'Saturday':\n    result = '6';\n    break;\n  case 'Sunday':\n    result = '7';\n    break;\n}\n\ndeclare const day2: Day;\n\nresult = '0';\n\nswitch (day2) {\n  case 'Monday':\n    result = '1';\n    break;\n  default:\n    result = '42';\n}\nconsole.info(result);\n\nenum Fruit {\n  apple = 'apple',\n  banana = 'banana',\n  cherry = 'cherry'\n}\n\ndeclare const fruit: Fruit;\n\nswitch (fruit) {\n  case Fruit.apple:\n    console.log('an apple');\n    break;\n\n  case Fruit.banana:\n    console.log('a banana');\n    break;\n\n  case Fruit.cherry:\n    console.log('a cherry');\n    break;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "type Day =\n  | 'Monday'\n  | 'Tuesday'\n  | 'Wednesday'\n  | 'Thursday'\n  | 'Friday'\n  | 'Saturday'\n  | 'Sunday';\n\ndeclare const day: Day;\nlet result = '0';\n\nswitch (day) {\n  // 只处理了'Monday'，缺少其他值的判断，并且也没有default分支\n  case 'Monday':\n    result = '1';\n    break;\n}\nconsole.info(result);\n"
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