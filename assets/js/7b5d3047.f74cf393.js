"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["221354"], {
664667(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_compilation_tool_chain_tool_disassembler_tool_disassembler_md_7b5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-compilation-tool-chain-tool-disassembler-tool-disassembler-md-7b5.json
var site_docs_arkts_arkts_compilation_tool_chain_tool_disassembler_tool_disassembler_md_7b5_namespaceObject = JSON.parse('{"id":"arkts/arkts-compilation-tool-chain/tool-disassembler/tool-disassembler","title":"Disassembler反汇编工具","description":"简介","source":"@site/docs/arkts/arkts-compilation-tool-chain/tool-disassembler/tool-disassembler.md","sourceDirName":"arkts/arkts-compilation-tool-chain/tool-disassembler","slug":"/arkts/arkts-compilation-tool-chain/tool-disassembler/","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/tool-disassembler/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Disassembler反汇编工具","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/tool-disassembler","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"方舟字节码生成常见问题","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-bytecode/es2abc-faq/"},"next":{"title":"ArkGuard源码混淆工具概述","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-compilation-tool-chain/tool-disassembler/tool-disassembler.md


const frontMatter = {
	title: 'Disassembler反汇编工具',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/tool-disassembler',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Disassembler反汇编工具';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "命令行说明",
  "id": "命令行说明",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "disassembler反汇编工具",
        children: "Disassembler反汇编工具"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Disassembler是ArkTS反汇编工具。如果需要分析方舟字节码文件（*.abc）相关问题，开发者可以使用Disassembler将方舟字节码文件反编译为可读的汇编指令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "工具随DevEco Studio SDK发布。以Windows平台为例，Disassembler工具位于DevEco Studio/sdk/default/openharmony/toolchains/ark_disasm.exe。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "命令行说明",
      children: "命令行说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "反汇编命令如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ark_disasm.exe [options] input_file output_file\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "[options]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "命令选项，详见下文options选项说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "input_file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待反汇编的方舟字节码文件路径。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "output_file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "反汇编内容的输出文件路径。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "options选项说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "存在入参"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启用输出调试信息，默认输出到屏幕。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--debug-file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果使能了--debug，指定调试信息的输出文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--help"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打印帮助提示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--skip-string-literals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跳过对字符串字面量的反汇编。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--quiet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能所有'--skip-'开头的选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--verbose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使能输出额外信息（字节位置、方舟字节码格式、操作码）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示配套的方舟字节码文件版本号以及最低支持的方舟字节码文件版本。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假设已存在方舟字节码文件：test.abc，其源代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let i = 99;\nfunction show(){return i;}\nshow();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行如下命令生成反汇编文件：test.txt，文件内包含操作码及格式等信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ark_disasm.exe test.abc test.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看反汇编文件的内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "cat test.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内容如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# source binary: test.abc                                                    // 反汇编的方舟字节码文件\n\n.language ECMAScript\n\n# ====================\n# LITERALS                                                                   // 字面量数据\n\n0 0x203 { 0 [\n    MODULE_REQUEST_ARRAY: {\n    };\n]}\n\n# ====================\n# RECORDS                                                                    // 模块定义数据\n\n.record _ESConcurrentModuleRequestsAnnotation {                              // _开头这些都是固定的模块数据\n}\n\n.record test {                                                               // 一个js文件对应一个模块数据，包含了模块的相关信息（在方舟字节码文件中的位置，是否是commonjs ...）\n    u8 isCommonjs = 0x0\n    u32 moduleRecordIdx = 0x203\n    ......\n}\n\n# ====================\n# METHODS                                                                    // 方法定义数据\n\nL_ESSlotNumberAnnotation:\n    u32 slotNumberIdx { 0x0 }\n.function any test.#*#show(any a0, any a1, any a2) <static> {                // 此方法源码中的show方法，同时这里也说明了，它属于test模块\n    ldlexvar 0x0, 0x0\n    ......\n}\n\nL_ESSlotNumberAnnotation:\n    u32 slotNumberIdx { 0x3 }\n.function any test.func_main_0(any a0, any a1, any a2) <static> {            // 此方法是自动生成的，可以理解成整个js文件就是一个方法，方法名为func_main_0\n    newlexenv 0x1\n    ......\n}\n\n# ====================\n# STRING                                                                     // 符号表信息\n\n[offset:0x88, name_value:i]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用参数--verbose，可打印偏移量等更多详细信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ark_disasm.exe --verbose test.abc test.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此处列出部分示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".record _ESSlotNumberAnnotation { # offset: 0x00cd, size: 0x0026 (38)                                  // 这里打印了模块在方舟字节码文件中具体的位置和大小\n}\n\n.record test { # offset: 0x00f3, size: 0x0098 (152)                                                    // 这里打印了模块在方舟字节码文件中具体的位置\n    u32 moduleRecordIdx = 0x203 # offset: 0x0144                                                   // 这里打印了模块信息的位置\n}\n......\n.function any test.#*#show(any a0, any a1, any a2) <static> { # offset: 0x0153, code offset: 0x0245    // 这里打印了方法信息具体的位置和方法中指令的具体位置\n#   CODE:\n    ldlexvar 0x0, 0x0 # offset: 0x0249, [IMM4_IMM4].........[0x3c 0x00]                            // 这里打印了每条指令的具体位置\n    ......\n}\n"
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