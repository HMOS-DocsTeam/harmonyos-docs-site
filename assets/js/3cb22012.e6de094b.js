"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["465543"], {
586864(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkts_api_arkts_arkts_errcode_errorcode_tsc_errorcode_tsc_md_3cb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkts-api-arkts-arkts-errcode-errorcode-tsc-errorcode-tsc-md-3cb.json
var site_docs_ref_arkts_api_arkts_arkts_errcode_errorcode_tsc_errorcode_tsc_md_3cb_namespaceObject = JSON.parse('{"id":"arkts-api/arkts-arkts-errcode/errorcode-tsc/errorcode-tsc","title":"Typescript Compiler错误码介绍","description":"TSC(Typescript Compiler)的错误码以\'105\'开头，是TSC编译流程中的报错提示，会在编辑器、控制台或日志文件中显示输出错误码和相对应的报错描述。","source":"@site/docs-ref/arkts-api/arkts-arkts-errcode/errorcode-tsc/errorcode-tsc.md","sourceDirName":"arkts-api/arkts-arkts-errcode/errorcode-tsc","slug":"/arkts-api/arkts-arkts-errcode/errorcode-tsc/errorcode-tsc","permalink":"/harmonyos-docs-site/ref/arkts-api/arkts-arkts-errcode/errorcode-tsc/errorcode-tsc","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Typescript Compiler错误码介绍","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-tsc","kit":"应用框架","last_updated":"2026-04-22","slug":"errorcode-tsc"},"sidebar":"ref","previous":{"title":"语言基础类库错误码","permalink":"/harmonyos-docs-site/ref/arkts-api/arkts-arkts-errcode/errorcode-utils/errorcode-utils"},"next":{"title":"编译工具链错误码","permalink":"/harmonyos-docs-site/ref/arkts-api/arkts-arkts-errcode/errorcode-ets-loader/errorcode-ets-loader"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkts-api/arkts-arkts-errcode/errorcode-tsc/errorcode-tsc.md


const frontMatter = {
	title: 'Typescript Compiler错误码介绍',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-tsc',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'errorcode-tsc'
};
const contentTitle = 'Typescript Compiler错误码介绍';

const assets = {

};



const toc = [{
  "value": "10505001 TSC原生报错",
  "id": "10505001-tsc原生报错",
  "level": 2
}, {
  "value": "关键字或符号的缺失",
  "id": "关键字或符号的缺失",
  "level": 3
}, {
  "value": "多个默认导出",
  "id": "多个默认导出",
  "level": 3
}, {
  "value": "赋值类型与接收类型不一致",
  "id": "赋值类型与接收类型不一致",
  "level": 3
}, {
  "value": "js文件中接口导出异常",
  "id": "js文件中接口导出异常",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "typescript-compiler错误码介绍",
        children: "Typescript Compiler错误码介绍"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TSC(Typescript Compiler)的错误码以'105'开头，是TSC编译流程中的报错提示，会在编辑器、控制台或日志文件中显示输出错误码和相对应的报错描述。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10505001-tsc原生报错",
      children: "10505001 TSC原生报错"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TSC原生报错：以'001'结尾，是Typescript Compiler检查中已有的原生报错规则。在TSC的编译流程中，常见的TSC原生报错原因包括：关键字或符号的缺失、赋值类型与接收类型不一致、类型或变量未定义等。这些问题通常是未按照", (0,jsx_runtime.jsx)(_components.a, {
        href: "/learning-arkts/introduction-to-arkts",
        children: "语言规范"
      }), "编写代码导致的，开发者可以根据报错描述修改代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "关键字或符号的缺失",
      children: "关键字或符号的缺失"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误示例场景："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "declare type AAA = 'BBB;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unterminated string literal."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字符串字面量未正确终止。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字符串字面量没有在预期的位置正确终止，可能是缺少了结束引号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据报错描述，补全代码块的引号，修改后代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "declare type AAA = 'BBB';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多个默认导出",
      children: "多个默认导出"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误示例场景："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export default A;\nexport default B;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A module cannot have multiple default exports."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个模块不能有多个默认导出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个模块中定义了多个默认导出。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据报错描述，删除多余的默认导出，修改后代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export default A;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "赋值类型与接收类型不一致",
      children: "赋值类型与接收类型不一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误示例场景："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let a: number = 1;\nlet b: string = '2';\na = b;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Type 'string' is not assignable to type 'number'."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类型 'string' 不能赋值给类型 'number'。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将一个变量的值赋给另一个不同类型的变量时，会发生类型不匹配错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据报错描述，确保类型一致性，进行相应的类型赋值修改，修改后代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let a: number = 1;\nlet b: number = 2;\na = b;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "js文件中接口导出异常",
      children: "js文件中接口导出异常"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误示例场景："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "har1包中有js文件，存在导出接口："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// har1's src/main/ets/FileJs.js\nexport let fileJs = 1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "har2包引用har1包中该接口："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileJs } from 'har1/src/main/ets/FileJs';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误信息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cannot find module XXX or its corresponding type declarations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当字节码har中有js文件时，编译无法生成声明文件，导致其余模块无法导入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "js文件在编译时tsc不会生成对应的声明文件，导致其余模块无法导入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若har包中的js文件需要提供对外导出功能，开发者需要："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.在js文件同级目录中手动编写对应的.d.ts声明文件，并随har包一起编译发布，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// har1's src/main/ets/FileJs.d.ts\nexport declare let fileJs: number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.在har1包顶层的Index.ets文件中增加export导出语句，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export { fileJs } from './src/main/ets/FileJs';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.在har2包引用har1包中该接口，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileJs } from 'har1/src/main/ets/FileJs';\n"
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