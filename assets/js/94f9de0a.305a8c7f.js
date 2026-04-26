"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["687024"], {
138170(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkts_api_arkts_arkts_errcode_errorcode_es_2_abc_errorcode_es_2_abc_md_94f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkts-api-arkts-arkts-errcode-errorcode-es-2-abc-errorcode-es-2-abc-md-94f.json
var site_docs_ref_arkts_api_arkts_arkts_errcode_errorcode_es_2_abc_errorcode_es_2_abc_md_94f_namespaceObject = JSON.parse('{"id":"arkts-api/arkts-arkts-errcode/errorcode-es2abc/errorcode-es2abc","title":"Es2abc编译器错误码","description":"本节列出 es2abc 编译器模块的专有错误码说明。通用错误码请参考通用错误码说明文档。","source":"@site/docs-ref/arkts-api/arkts-arkts-errcode/errorcode-es2abc/errorcode-es2abc.md","sourceDirName":"arkts-api/arkts-arkts-errcode/errorcode-es2abc","slug":"/arkts-api/arkts-arkts-errcode/errorcode-es2abc/errorcode-es2abc","permalink":"/harmonyos-docs-site/ref/arkts-api/arkts-arkts-errcode/errorcode-es2abc/errorcode-es2abc","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Es2abc编译器错误码","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-es2abc","kit":"应用框架","last_updated":"2026-04-22","slug":"errorcode-es2abc"},"sidebar":"ref","previous":{"title":"编译工具链错误码","permalink":"/harmonyos-docs-site/ref/arkts-api/arkts-arkts-errcode/errorcode-ets-loader/errorcode-ets-loader"},"next":{"title":"源码混淆错误码","permalink":"/harmonyos-docs-site/ref/arkts-api/arkts-arkts-errcode/errorcode-source-obfuscation/errorcode-source-obfuscation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkts-api/arkts-arkts-errcode/errorcode-es2abc/errorcode-es2abc.md


const frontMatter = {
	title: 'Es2abc编译器错误码',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-es2abc',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'errorcode-es2abc'
};
const contentTitle = 'Es2abc编译器错误码';

const assets = {

};



const toc = [{
  "value": "10705000 语法错误",
  "id": "10705000-语法错误",
  "level": 2
}, {
  "value": "10706001 规格错误",
  "id": "10706001-规格错误",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "es2abc编译器错误码",
        children: "Es2abc编译器错误码"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(733323)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本节列出 es2abc 编译器模块的专有错误码说明。通用错误码请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10705000-语法错误",
      children: "10705000 语法错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ERROR: 10705000 Syntax Error\nSyntaxError: Concurrent function should only use import variable or local variable, 'a' is not one of them [/path/to/wrong/file.ts:9:4]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "出现语法错误，编译器无法解析源文件中的某个语法结构，通常伴随具体的文件名与位置信息（行号与列号）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "代码中存在非法或不完整的语法，例如缺失括号、拼写错误、结构嵌套不正确等；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用了当前版本不支持的语言特性；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "拼写错误导致关键字或语法结构不被识别；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "排查开发环境中是否存在加密软件，加密软件可能会修改文件编码格式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据错误提示中的文件名和具体行列号，定位到出错位置；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "修复语法错误，如添加缺失的括号或关键字；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用 DevEco Studio 的语法检查工具协助发现语法错误；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若使用新语法特性，确保当前编译器版本支持该特性；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果存在使用加密软件，请关闭加密软件后重新编译。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10706001-规格错误",
      children: "10706001 规格错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ERROR: 10706001 Found unsupported change in file, failed to generate patch abc!\n[Patch] Found lexical variable added or removed in .a, not supported!\n[Patch] Found unsupported change in file, will not generate patch!\nError:  [base_mod.js:0:0]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译器检测到源文件存在不符合增量编译（patch 模式）支持范围的变更，因而终止补丁生成。此类变更通常涉及作用域、变量声明、导入结构等对语义有显著影响的代码修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在补丁构建流程中，修改了模块的词法变量，例如新增或删除了声明；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "删除了关键函数或重新声明了已有变量；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对导入结构（import/export）或模块边界进行了破坏性修改；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文件的改动超出了 es2abc 增量补丁机制的支持范围。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查错误信息中所指文件及代码变更内容；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "避免对模块中定义的变量进行添加、删除、重命名等操作；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若确需进行语义变更，请选择完整编译而非增量编译。"
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
733323(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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