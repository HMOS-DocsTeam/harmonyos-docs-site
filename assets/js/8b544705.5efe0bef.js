"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["500069"], {
217723(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_typescript_eslint_ide_type_annotation_spacing_ide_type_annotation_spacing_md_8b5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-typescript-eslint-ide-type-annotation-spacing-ide-type-annotation-spacing-md-8b5.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_typescript_eslint_ide_type_annotation_spacing_ide_type_annotation_spacing_md_8b5_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_type-annotation-spacing/ide_type-annotation-spacing","title":"@typescript-eslint/type-annotation-spacing","description":"类型注解前后需要一致的空格风格。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_type-annotation-spacing/ide_type-annotation-spacing.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_type-annotation-spacing","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_type-annotation-spacing/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_type-annotation-spacing/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":108,"frontMatter":{"title":"@typescript-eslint/type-annotation-spacing","sidebar_position":108,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_type-annotation-spacing","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@typescript-eslint/triple-slash-reference","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_triple-slash-reference/"},"next":{"title":"@typescript-eslint/typedef","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_typedef/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-typescript-eslint/ide_type-annotation-spacing/ide_type-annotation-spacing.md


const frontMatter = {
	title: '@typescript-eslint/type-annotation-spacing',
	sidebar_position: 108,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide_type-annotation-spacing',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@typescript-eslint/type-annotation-spacing';

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
    img: "img",
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
        id: "typescript-eslinttype-annotation-spacing",
        children: "@typescript-eslint/type-annotation-spacing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类型注解前后需要一致的空格风格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@typescript-eslint/type-annotation-spacing\": \"error\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选项",
      children: "选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持配置以下选项："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "type Options = {\n  before: boolean;\n  after: boolean;\n  overrides: {\n    colon: {\n      before: boolean;\n      after: boolean;\n    };\n    arrow: {\n      before: boolean;\n      after: boolean;\n    };\n    variable: {\n      before: boolean;\n      after: boolean;\n    };\n    parameter: {\n      before: boolean;\n      after: boolean;\n    };\n    property: {\n      before: boolean;\n      after: boolean;\n    };\n    returnType: {\n      before: boolean;\n      after: boolean;\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "before/after：布尔类型，可以设置为true或者false。true表示类型注解中的冒号（:）和箭头（=>）之前/之后需要加空格，false表示类型注解中的冒号（:）和箭头（=>）之前/之后不需要加空格。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["overrides：对象类型，可以对不同的语法场景进行差异化配置，支持以下属性：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["colon：对象类型，可以对类型注解中的冒号（:）进行差异化配置，支持以下属性：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "before：布尔类型，可以设置为true或者false。默认值为false，表示类型注解中的冒号（:）之前不需要加空格；true表示类型注解中的冒号（:）之前需要加空格。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "after：布尔类型，可以设置为true或者false。默认值为false，表示类型注解中的冒号（:）之后不需要加空格；true表示类型注解中的冒号（:）之后需要加空格。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["arrow：对象类型，可以对类型注解中的箭头（=>）进行差异化配置，支持以下属性：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "before：布尔类型，可以设置为true或者false。默认值为true，表示类型注解中的箭头（=>）之前需要加空格；false表示类型注解中的箭头（=>）之前不需要加空格。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "after：布尔类型，可以设置为true或者false。默认值为true，表示类型注解中的箭头（=>）之后需要加空格；false表示类型注解中的箭头（=>）之后不需要加空格。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["variable：对象类型，可以对变量中类型注解的冒号（:）进行差异化配置，支持配置为before/after：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "before/after：布尔类型，可以设置为true或者false，true表示类型注解中的冒号（:）之前/之后需要加空格。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["parameter：对象类型，可以对参数中类型注解的冒号（:）进行差异化配置，支持配置为before/after：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "before/after：布尔类型，可以设置为true或者false，true表示类型注解中的冒号（:）之前/之后需要加空格。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["property：对象类型，可以对类/接口成员中类型注解的冒号（:）进行差异化配置，支持配置为before/after：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "before/after：布尔类型，可以设置为true或者false，true表示类型注解中的冒号（:）之前/之后需要加空格。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["returnType：对象类型，可以对函数返回类型中类型注解的冒号（:）进行差异化配置，支持配置为before/after：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "before/after：布尔类型，可以设置为true或者false，true表示类型注解中的冒号（:）之前/之后需要加空格。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"@typescript-eslint/type-annotation-spacing\": [\n  \"error\",\n  {\n    \"before\": true,\n    \"after\": true,\n    \"overrides\": {\n      \"colon\": {\n        \"before\": false,\n        \"after\": true\n      },\n      \"arrow\": {\n        \"before\": true,\n        \"after\": true\n      },\n      \"variable\": {\n        \"before\": true,\n        \"after\": false\n      },\n      \"parameter\": {\n        \"before\": false,\n        \"after\": true\n      },\n      \"property\": {\n        \"before\": true,\n        \"after\": false\n      },\n      \"returnType\": {\n        \"before\": true,\n        \"after\": false\n      }\n    }\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(109356)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选项存在优先级，overrides下的配置会覆盖overrides之外的配置：overrides.variable/parameter/property/returnType > overrides.colon/arrow > before/after。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "正例",
      children: "正例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 默认冒号前无空格，冒号后有空格\nexport const foo1: string = 'bar';\n\nexport declare function foo2(): string;\n\nexport class Foo3 {\n  public name: string = 'hello';\n}\n// 默认箭头前后都有空格\nexport declare type Foo4 = () => void;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 默认冒号前无空格，冒号后有空格\nexport const foo1 :string = 'bar';\n\nexport declare function foo2() :string;\n\nexport class Foo3 {\n  public name :string = 'hello';\n}\n// 默认箭头前后都有空格\nexport declare type Foo4 = ()=>void;\n"
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
109356(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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