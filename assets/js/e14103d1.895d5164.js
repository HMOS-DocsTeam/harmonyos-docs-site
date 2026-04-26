"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["593215"], {
497902(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_compilation_tool_chain_arkts_bytecode_arkts_bytecode_function_name_arkts_bytecode_function_name_md_e14_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-compilation-tool-chain-arkts-bytecode-arkts-bytecode-function-name-arkts-bytecode-function-name-md-e14.json
var site_docs_arkts_arkts_compilation_tool_chain_arkts_bytecode_arkts_bytecode_function_name_arkts_bytecode_function_name_md_e14_namespaceObject = JSON.parse('{"id":"arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-function-name/arkts-bytecode-function-name","title":"方舟字节码函数命名规则","description":"概述","source":"@site/docs/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-function-name/arkts-bytecode-function-name.md","sourceDirName":"arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-function-name","slug":"/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-function-name/","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-function-name/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"方舟字节码函数命名规则","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-bytecode-function-name","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"方舟字节码基本原理","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-fundamentals/"},"next":{"title":"编译期自定义修改方舟字节码","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-bytecode/customize-bytecode-during-compilation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-function-name/arkts-bytecode-function-name.md


const frontMatter = {
	title: '方舟字节码函数命名规则',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-bytecode-function-name',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '方舟字节码函数命名规则';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "入口函数",
  "id": "入口函数",
  "level": 2
}, {
  "value": "非入口函数",
  "id": "非入口函数",
  "level": 2
}, {
  "value": "前缀",
  "id": "前缀",
  "level": 3
}, {
  "value": "原函数名",
  "id": "原函数名",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "方舟字节码函数命名规则",
        children: "方舟字节码函数命名规则"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文介绍字节码文件中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-file-format#method",
        children: "Method"
      }), "的name_off字段指向的字符串的命名规则，该命名规则从方舟字节码文件版本12.0.4.0开始生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "入口函数",
      children: "入口函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块加载时被执行的函数，名称固定为func_main_0。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "非入口函数",
      children: "非入口函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其他函数在字节码文件中的名称结构如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#前缀#原函数名\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的章节将会详细介绍前缀和原函数名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "前缀",
      children: "前缀"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "前缀包含函数定义时所在的作用域信息，具体包括以下几个部分："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "作用域标签"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "作用域名称"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "重名序号"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "前缀的结构为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<作用域标签1><作用域名称1>[<重名序号>]<作用域标签2><作用域名称2><[重名序号]>...<作用域标签n><作用域名称n>[<重名序号>]<作用域标签n+1>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中<>仅为便于阅读的分割标识，并不包含在实际的前缀中，[]表示可以为空。仅当出现重名作用域时才需要[<重名序号>]，即[<重名序号>]可以为空。最后一个作用域标签是本函数所对应的标签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "作用域标签"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "作用域标签表示作用域的类型。作用域和对应的作用域标签如下表所示，其他的作用域不会被记录进函数名中："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "作用域"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "作用域标签"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "class关键字定义的作用域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "实例函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类的实例成员函数定义的作用域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "静态函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类的静态成员函数定义的作用域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "构造函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "="
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类的构造函数定义的作用域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "普通函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "除了以上类型的其它所有函数定义的作用域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "namespace/module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "&"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "namespace或module关键字定义的作用域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "enum关键字定义的作用域。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "作用域名称"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["源代码中定义作用域时所使用的名称。匿名则为空字符串。为了降低字节码体积，方舟编译器会对较长的作用域名称进行优化，此时作用域名称以@十六进制数字的形式体现。这个数字代表作用域名称的字符串在一个字符串数组中的索引：在字节码文件中源代码对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-file-format#class",
        children: "Class"
      }), "中有一个名为scopeNames的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-file-format#field",
        children: "field"
      }), ", 这个field的值是指向一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-file-format#literalarray",
        children: "LiteralArray"
      }), "的偏移，这个LiteralArray存储的是一个字符串数组。十六进制数字就是代表作用域名称在这个数组中的索引。原函数名不会转换为索引。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例子："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// test1.ts\nfunction longFuncName() { // longFuncName的函数名为\"#*#longFuncName\"，其中\"longFuncName\"是原函数名，不会转换为索引。\n  function A() { } // A的函数名\"#*@0*#A\"，其中\"@0\"表示在其对应LiteralArray中，索引为0的字符串，此时这个字符串是\"longFuncName\"。即这个函数原本的名称为\"#*longFuncName*#A\"。\n  function B() { } // B的函数名\"#*@0*#B\"。\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "重名序号"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果源码中相同作用域下出现了同名的实体，同名的名称后会加上重名序号，重名序号以^十六进制数字的形式表示。出现重名时，第一个不编号（即重名序号为空），从第二个开始编号，编号从1开始。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例子："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "namespace A {\n  function bar() { } // bar的函数名为\"#&A*#bar\"。\n}\n\nnamespace A {\n  function foo() { } // foo的函数名为\"#&A^1*#foo\"，其中\"^1\" 为重名序号。\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "原函数名",
      children: "原函数名"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "原函数名代表函数在源代码中的名字，匿名函数的名称为空字符串。同样的，如果源码中相同作用域下出现了同名的函数，重名的名称后面会加上重名序号（包括匿名函数）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo() {}; // 原函数名为\"foo\"。\n() => { }; // 原函数名为\"\"。\n() => { }; // 原函数名为\"^1\"。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "特殊情况"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果匿名函数被赋值给一个变量，该变量名即为函数名。例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let a = () => {} // 原函数名为\"a\"。\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果匿名函数在对象字面量中定义并且被赋值给了一个字面量属性："
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果属性名中不包含\\和.，则其原函数名即为该属性名。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// test2.ts\nlet B = {\n  b : () => {} // 原函数名为\"b\"。\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果属性名包含\\，.，为防止二义性，其原函数名会按照匿名函数命名。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// test3.ts\nlet a = {\n  \"a.b#c^2\": () => {}, // 原函数名为\"\"。\n  \"x\\\\y#\": () => {} // 原函数名为\"^1\"。\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发者应尽量避免使用除字母、数字、下划线以外的字符命名函数，以免出现二义性。"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "namespace A { // namespace在字节码中的函数名为\"#&#A\"。\n  class B { // 构造函数在字节码中的函数名为\"#&A~B=#B\"。\n    m() { // 函数m在字节码中的函数名为\"#&A~B>#m\"。\n      return () => {} // 匿名函数在字节码中的函数名为\"#&A~B>m*#\"。\n    }\n    static s() {} // 静态函数s在字节码中的函数名为\"#&A~B<#s\"。\n  }\n  enum E { // enum在字节码中的函数名为\"#&A%#E\"。\n\n  }\n}\n"
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