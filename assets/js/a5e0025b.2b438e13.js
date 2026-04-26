"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["193742"], {
104391(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_typescript_eslint_ide_member_delimiter_style_ide_member_delimiter_style_md_a5e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-typescript-eslint-ide-member-delimiter-style-ide-member-delimiter-style-md-a5e.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_typescript_eslint_ide_member_delimiter_style_ide_member_delimiter_style_md_a5e_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_member-delimiter-style/ide_member-delimiter-style","title":"@typescript-eslint/member-delimiter-style","description":"要求接口和类型别名中的成员之间使用特定的分隔符。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_member-delimiter-style/ide_member-delimiter-style.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_member-delimiter-style","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_member-delimiter-style/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_member-delimiter-style/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":24,"frontMatter":{"title":"@typescript-eslint/member-delimiter-style","sidebar_position":24,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_member-delimiter-style","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@typescript-eslint/lines-between-class-members","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_lines-between-class-members/"},"next":{"title":"@typescript-eslint/member-ordering","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_member-ordering/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_member-delimiter-style/ide_member-delimiter-style.md


const frontMatter = {
	title: '@typescript-eslint/member-delimiter-style',
	sidebar_position: 24,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_member-delimiter-style',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@typescript-eslint/member-delimiter-style';

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
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "typescript-eslintmember-delimiter-style",
        children: "@typescript-eslint/member-delimiter-style"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "要求接口和类型别名中的成员之间使用特定的分隔符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持定义的分隔符有三种：分号、逗号、无分隔符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@typescript-eslint/member-delimiter-style\": \"error\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选项",
      children: "选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持配置以下选项："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "type BaseOption = {\n  multiline: {\n    delimiter: 'none' | 'semi' | 'comma';\n    requireLast: boolean;\n  };\n  singleline: {\n    delimiter: 'semi' | 'comma';\n    requireLast: boolean;\n  };\n}\n\ntype Options = {\n  multiline: {\n    delimiter: 'none' | 'semi' | 'comma';\n    requireLast: boolean;\n  };\n  singleline: {\n    delimiter: 'semi' | 'comma';\n    requireLast: boolean;\n  };\n  overrides: {\n    interface: BaseOption;\n    typeLiteral: BaseOption;\n  };\n  multilineDetection: 'brackets' | 'last-member';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "multiline/singleline：对象类型，分别定义多行/单行的interface/type alias成员之间分隔符风格，支持以下两种属性："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["delimiter：枚举类型，定义分隔符风格，取值范围如下：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "none：表示不需要加分隔符。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "semi：表示建议使用分号作为分隔符。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "comma：表示建议使用逗号作为分隔符。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "requireLast：布尔类型，可以设置为true或者false，true表示最后一个成员的末尾需要加分隔符，false表示最后一个成员的末尾不加分隔符。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "multilineDetection：枚举类型，判断多行的依据，可取值如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "brackets：默认值，表示interface/type alias中存在换行，即视为多行。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "last-member：表示interface/type alias的最后一个成员与右括号（“}”）处于同一行，则视为单行。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "overrides：对象类型，可以针对interface/type alias进行差异化配置，支持以下两种属性："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "interface：对象类型，可以对interface进行差异化配置，配置方式同multiline/singleline。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "typeLiteral：对象类型，可以对type alias进行差异化配置，配置方式同multiline/singleline。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"@typescript-eslint/member-delimiter-style\": [\n  \"error\",\n  {\n    // 多行interface/type alias使用逗号作为分隔符，最后一个成员末尾不加分隔符\n    \"multiline\": {\n      \"delimiter\": \"comma\",\n      \"requireLast\": false\n    },\n    // 单行interface/type alias使用分号作为分隔符，最后一个成员末尾需要加分隔符\n    \"singleline\": {\n      \"delimiter\": \"semi\",\n      \"requireLast\": true\n    },\n    // 分别对interface和type alias进行差异化配置\n    overrides: {\n      interface: {\n        \"multiline\": {\n          \"delimiter\": \"comma\",\n          \"requireLast\": false\n        },\n        \"singleline\": {\n          \"delimiter\": \"semi\",\n          \"requireLast\": true\n        }\n      },\n      typeLiteral: {\n        \"multiline\": {\n          \"delimiter\": \"comma\",\n          \"requireLast\": false\n        },\n        \"singleline\": {\n          \"delimiter\": \"semi\",\n          \"requireLast\": true\n        }\n      }\n    },\n    multilineDetection: \"brackets\",\n  },\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "正例",
      children: "正例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 默认接口/类型别名定义为多行的场景下，每个成员应以分号 (;) 分隔。 最后一个成员必须有一个分隔符。\n// 默认接口/类型别名定义为单行的场景下，每个成员应以分号 (;) 分隔。最后一个成员不能有分隔符。\n// 接口/类型别名中的任何换行符都会使其成为多行。\nexport interface Foo1 {\n  name: string;\n\n  greet(): string;\n}\n\nexport interface Foo2 { name: string }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// missing semicolon delimiter\nexport interface Foo {\n  name: string\n  greet(): string\n}\n\n// using incorrect delimiter\nexport interface Bar {\n  name: string,\n  greet(): string,\n}\n\n// missing last member delimiter\nexport interface Baz {\n  name: string;\n  greet(): string\n}\n"
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