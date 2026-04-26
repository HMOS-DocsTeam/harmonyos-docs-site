"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["641444"], {
144780(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_compilation_tool_chain_arkts_bytecode_arkts_bytecode_fundamentals_arkts_bytecode_fundamentals_md_faf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-compilation-tool-chain-arkts-bytecode-arkts-bytecode-fundamentals-arkts-bytecode-fundamentals-md-faf.json
var site_docs_arkts_arkts_compilation_tool_chain_arkts_bytecode_arkts_bytecode_fundamentals_arkts_bytecode_fundamentals_md_faf_namespaceObject = JSON.parse('{"id":"arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-fundamentals/arkts-bytecode-fundamentals","title":"方舟字节码基本原理","description":"总体设计","source":"@site/docs/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-fundamentals/arkts-bytecode-fundamentals.md","sourceDirName":"arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-fundamentals","slug":"/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-fundamentals/","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-fundamentals/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"方舟字节码基本原理","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-bytecode-fundamentals","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"方舟字节码文件格式","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-file-format/"},"next":{"title":"方舟字节码函数命名规则","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-function-name/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-fundamentals/arkts-bytecode-fundamentals.md


const frontMatter = {
	title: '方舟字节码基本原理',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-bytecode-fundamentals',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '方舟字节码基本原理';

const assets = {

};



const toc = [{
  "value": "总体设计",
  "id": "总体设计",
  "level": 2
}, {
  "value": "概述",
  "id": "概述",
  "level": 3
}, {
  "value": "术语和约束",
  "id": "术语和约束",
  "level": 3
}, {
  "value": "字节码构成",
  "id": "字节码构成",
  "level": 3
}, {
  "value": "值存储方式",
  "id": "值存储方式",
  "level": 3
}, {
  "value": "函数调用规范",
  "id": "函数调用规范",
  "level": 3
}, {
  "value": "字节码格式说明",
  "id": "字节码格式说明",
  "level": 2
}, {
  "value": "字节码汇总集合",
  "id": "字节码汇总集合",
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
    img: "img",
    li: "li",
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
        id: "方舟字节码基本原理",
        children: "方舟字节码基本原理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "总体设计",
      children: "总体设计"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方舟字节码（Ark Bytecode）是由方舟编译器编译ArkTS/TS/JS生成的，提供给方舟运行时解释执行的二进制文件。方舟字节码中的主要内容是方舟字节码指令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文旨在介绍方舟字节码指令相关的设计，将在后续章节中对构成指令的重要概念和具体的指令格式及含义进行说明，帮助开发者了解方舟字节码指令，指导开发者进行指令相关的特性开发工作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一条方舟字节码指令，由操作码（指令的名称）和指令入参列表组成。操作码包含无前缀的操作码和有前缀的操作码两种。寄存器、立即数以及string id/method id/literal id均可以作为指令的入参。除此之外，部分指令中使用累加器作为默认参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方舟字节码中，除寄存器和累加器之外，还存在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "全局变量"
        })
      }), "、", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["模块（", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://262.ecma-international.org/12.0/#sec-ecmascript-language-scripts-and-modules",
            children: "module"
          }), "）命名空间和模块变量"]
        })
      }), "、", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "词法环境和词法变量"
        })
      }), "、", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "补丁变量"
        })
      }), "4种值存储方式。指令可以使用这4种储值位置中的值作为入参。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "术语和约束",
      children: "术语和约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "术语"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文涉及的术语清单："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "术语"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "acc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "accumulator：累加器，方舟字节码中一个特殊的寄存器，用于存储大多数指令的默认输入或输出值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "比特：本文中用位表示。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hole"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尚未初始化的对象或变量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "index：索引，是string id/method id/literal id的总称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string index：字符串索引，16位的数字，用于索引到对应的字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "method id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "method index：方法索引，16位的数字，用于索引到对应的方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "literal id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "literal index：字面量索引，16位的数字，用于索引到对应的字面量数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lexical environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "词法环境：用来存放闭包变量的语义环境。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lexical variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "词法变量：词法环境中所存的闭包变量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "约束"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["本文中所有采用代码形式描述的内容均遵循", (0,jsx_runtime.jsx)(_components.a, {
          href: "/learning-arkts/introduction-to-arkts",
          children: "ArkTS语言规范"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本文仅适用于版本号为12.0.6.0的方舟字节码（版本号为方舟编译器内部保留字段，开发者无需关注）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "字节码构成",
      children: "字节码构成"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "操作码与前缀"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方舟字节码中的操作码通常被编码为一个8位的值，因此至多只能有256个操作码。随着方舟编译器运行时功能的演进，字节码的数量也在逐步增加，已经超过了256个。因此，方舟字节码引入了前缀（prefix），将操作码最大宽度从8位扩展到16位。8位操作码（无前缀的）用于表示频繁出现的指令，16位操作码（有前缀的）用于表示出现频率不高的指令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "带前缀的操作码为小端法存储的16位值，由8位操作码和8位前缀组成，编码规则为：操作码左移8位，再与前缀相或。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "前缀操作码"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "助记符"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xfe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "throw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "有条件/无条件的throw指令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xfd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "含有更宽编码宽度的立即数、id或寄存器索引的指令。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xfc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "deprecated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方舟编译器不再会产生的指令，仅用于维护运行时兼容性；  本文后续章节中将省略对这些指令的说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xfb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用运行时方法的指令。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["前缀操作码的助记符的形式为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "前缀助记符.操作码助记符"
        })
      }), "，例如，wide.stlexvar。stlexvar指令的操作码是0x0d，前缀wide是0xfd，则此带前缀的指令（wide.stlexvar）的操作码是0x0dfd。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "寄存器与累加器"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方舟虚拟机模型基于寄存器，所有的寄存器均为虚拟寄存器。当寄存器中存放原始类型的值时，宽度是64位；当寄存器中存放对象类型的值时，宽度适应为足够宽，以存放对该对象的引用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方舟字节码中，存在一个名为累加器（accumulator，也简称作acc）的不可见寄存器。acc是许多指令的默认目标寄存器，也是许多指令的默认参数。acc不占用编码宽度，有助于产生更为紧凑的字节码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo0(): number {\n  return 1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字节码中的相关指令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".function any .foo(any a0, any a1, any a2) {\n    ldai 0x1\n    return\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指令ldai 0x1：将整型字面量1加载到acc中；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指令return：返回acc中的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "立即数"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方舟字节码中部分指令采用常数形式来表示整型数值、双精度浮点型数值和跳转偏移量等数据。这类常数被称为立即数，可以是8位、16位、32位或64位。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方法索引、字符串索引、字面量索引"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方舟字节码中存放着源文件中使用到的所有方法、字符串和字面量数组的偏移量。其中，字面量数组中存放着各种字面量数据，例如整型数字、字符串偏移量和方法偏移量。在方舟字节码指令中，这些方法、字符串以及字面量数组的索引都是16位的，分别被称作方法索引（method id）、字符串索引（string id）以及字面量索引（literal id）。这些索引被编码在指令中，以引用方法、字符串和字面量数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "值存储方式",
      children: "值存储方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "全局变量"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://262.ecma-international.org/12.0/#sec-ecmascript-language-scripts-and-modules",
        children: "Script"
      }), "编译模式下，全局变量是一个存储在全局唯一的映射中的变量，其键值为全局变量的名称，值为全局变量的值。全局变量可通过全局（global）相关的指令进行访问。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let a = 1;\nlet b = 1;\nfunction foo1(): void {\n  a += 2;\n  b = 5;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字节码中的相关指令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".function any .foo(any a0, any a1, any a2) {\n    tryldglobalbyname 0x0, a\n    sta v4\n    ldai 0x2\n    add2 0x1, v4\n    trystglobalbyname 0x2, a\n    ldai 0x5\n    trystglobalbyname 0x3, b\n    ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指令tryldglobalbyname 0x0, a：将名称为a的全局变量加载进acc，不存在名称为a的全局变量时，抛出异常；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指令trystglobalbyname 0x2, a：将acc中的值存放到名称为a的全局变量上，不存在名称为a的全局变量时，抛出异常；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指令trystglobalbyname 0x3, b：将acc中的值存放到名称为b的全局变量上，不存在名称为b的全局变量时，抛出异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(499231)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述指令中出现的0x0，0x2，0x3是方舟运行时内部使用的保留数字，开发者无需关注。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模块命名空间和模块变量"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["源文件中使用到的所有的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://262.ecma-international.org/12.0/#module-namespace-exotic-object",
        children: "模块命名空间"
      }), "（module namespace）都会被编译进一个数组中，指令中使用索引来引用一个模块命名空间。例如，指令getmodulenamespace 0x1引用了索引0x1处的模块命名空间。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "源文件中使用到的所有模块变量（module variable）都会被编译进一个数组中，指令通过索引来引用这些模块变量。例如，指令stmodulevar 0x1引用了索引0x1处的模块变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在函数中，如果模块变量的声明与该函数位于同一源文件，则该变量称为局部模块变量；否则称为外部模块变量。例如，指令ldlocalmodulevar和ldexternalmodulevar分别用于加载局部模块变量和外部模块变量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["产生模块指令的相关场景，包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://262.ecma-international.org/12.0/#sec-imports",
        children: "import"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://262.ecma-international.org/12.0/#sec-exports",
        children: "export"
      }), "，主要场景列举如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "import * as：module namespace"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "import { }：module variable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "export：local export"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(459318)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块相关的逻辑是编译器的内部实现，随着方舟编译器的后续演进，可能会出现新的涉及模块指令的场景；另一方面，现有的模块命名空间和模块变量指令的相关场景，也可能会随着需求演进和代码重构，不再涉及产生模块相关指令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ModuleFoo.ts\nexport let a: number = 1;\nexport let b: number = 2;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ModuleBar.ts\nexport let c: number = 4;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ModuleIndex.ts\nimport { a, b } from \"./ModuleFoo\";\nimport * as c from \"./ModuleBar\";\n\nexport let d: number = 3;\n\na + b + d;\nc;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字节码中的相关指令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".function any .func_main_0(any a0, any a1, any a2) {\n    getmodulenamespace 0x1\n    ldai 0x3\n    stmodulevar 0x0\n    ldexternalmodulevar 0x0\n    sta v0\n    throw.undefinedifholewithname a\n    ldexternalmodulevar 0x1\n    sta v1\n    throw.undefinedifholewithname b\n    lda v1\n    add2 0x0, v0\n    sta v0\n    ldlocalmodulevar 0x0\n    sta v1\n    throw.undefinedifholewithname d\n    lda v1\n    add2 0x1, v0\n    stmodulevar 0x1\n    returnundefined\n    ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指令getmodulenamespace 0x1：获取1号槽位上的模块命名空间（c），存放到acc中；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指令stmodulevar 0x0：将acc中的值存放到当前模块的0号槽位上；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指令ldexternalmodulevar 0x0：加载外部模块的0号槽位上的值（a），存放到acc中；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指令ldlocalmodulevar 0x0：加载当前局部模块的0号槽位上的值（d），存放到acc中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "词法环境和词法变量"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方舟字节码中，词法环境（lexical environment）可以看作是一个具有多个槽位的数组，每个槽位对应一个词法变量（lexical variable），一个方法中可能会存在多个词法环境。指令中使用词法环境的相对层级编号和槽位索引，来表示一个词法变量。例如，指令ldlexvar 0x1, 0x2的含义是：将1个层次外的词法环境的2号槽位上的值存放到acc中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "|xxx|xxx|xxx|xxx|   <-- 当前词法环境外的第1个词法环境\n         ^\n         |------------ ldlexvar 0x1, 0x2\n\n|xxx|xxx|xxx|xxx|   <-- 当前词法环境\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(540711)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lexical相关的逻辑是编译器的内部实现。随着方舟编译器的演进，可能会出现新的涉及lexical指令的场景。现有的lexical指令场景也可能会因需求演进和代码重构而不再涉及lexical的相关指令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ts\nfunction foo(): void {\n  let a: number = 1;\n  function bar(): number {\n    return a;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字节码中的相关指令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".function any .foo(any a0, any a1, any a2) {\n    newlexenv 0x1\n    ...\n    definefunc 0x0, .bar, 0x0\n    sta v3\n    ldai 0x1 \n    ...\n    stlexvar 0x0, 0x0\n    ...\n}    \n\n.function any .bar(any a0, any a1, any a2) {\n    ...\n    ldlexvar 0x0, 0x0\n    ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指令newlexenv 0x1：创建一个槽位数为1的词法环境，将其存放到acc中，并进入该词法环境；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指令stlexvar 0x0, 0x0：将acc中的值存放到0个层次外的词法环境的0号槽位上；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指令ldlexvar 0x0, 0x0：将0个层次外的词法环境的0号槽位上的值存放到acc中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "共享词法环境"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["共享词法环境是一类特殊的词法环境。与一般词法环境的区别在于，共享词法环境中的每个词法变量都是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable",
        children: "sendable对象"
      }), "。方舟编译器通过共享词法环境实现词法变量在多线程中共享。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\nclass A { }\n\n@Sendable\nclass B {\n  u: A = new A();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字节码中的相关指令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".function any .#~B=#B(any a0, any a1, any a2) {\nlabel_1:\nlabel_0:\n    callruntime.ldsendablevar 0x0, 0x0\n    sta v0\n    throw.undefinedifholewithname A\n    ...\nlabel_2:\n}\n\n.function any .func_main_0(any a0, any a1, any a2) {\nlabel_1:\nlabel_0:\n    callruntime.newsendableenv 0x1\n    ...\n    callruntime.definesendableclass 0x0, .#~A=#A, _3, 0x0, v0\n    callruntime.stsendablevar 0x0, 0x0\n    ...\nlabel_2:\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指令callruntime.newsendableenv 0x1：创建一个槽位数为1的共享词法环境，并进入该词法环境；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指令callruntime.stsendablevar 0x0, 0x0：将acc中的值存放到0个层次外的共享词法环境的0号槽位上；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指令callruntime.ldsendablevar 0x0, 0x0：将0个层次外的共享词法环境的0号槽位上的值存放到acc中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "补丁变量"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方舟编译器支持补丁模式的编译，当源文件发生修改时，经过补丁模式编译，生成一个补丁字节码，配合原字节码，完成功能的更新。方舟编译器在补丁模式下编译时，产生的补丁变量会被存放在一个特殊的补丁词法环境中。方舟字节码中使用补丁词法环境上的槽位编号来引用补丁变量。例如，指令ldpatchvar 0x1加载的是槽位号为1的补丁变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function bar(): void {} // 新增语句，编译补丁\n\nfunction foo2(): void {\n  bar(); // 新增语句，编译补丁\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字节码中的相关指令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".function any foo(...) {\n    ...\n    wide.ldpatchvar 0x0\n    sta v4\n    lda v4\n    callarg0 0x0\n    ...\n}\n\n.function any patch_main_0(...) {\n    newlexenv 0x1\n    definefunc 0x1, bar:(any,any,any), 0x0\n    wide.stpatchvar 0x0\n    ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指令wide.stpatchvar 0x0：将函数bar存放到补丁词法环境的0号槽位；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指令wide.ldpatchvar 0x0：将补丁词法环境上0号槽位的值存放到acc中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数调用规范",
      children: "函数调用规范"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于一个包含了N个形参的方法，该方法所使用的寄存器中的最后N+3个会被用于传递参数。其中，前三个寄存器固定表示函数本身（FunctionObject）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://262.ecma-international.org/12.0/#sec-function-environment-records",
        children: "new.target"
      }), "（NewTarget）和函数所在的词法环境中的this（this），后续的N个寄存器依次对应这N个形参。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function foo3(a: number, b: number): void {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字节码中的相关指令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".function any .foo(any a0, any a1, any a2, any a3, any a4) {\n    // a0: FunctionObject\n    // a1: NewTarget\n    // a2: this \n    // a3: a\n    // a4: b\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "字节码格式说明",
      children: "字节码格式说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "助记符"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "语义说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，16位id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，16位立即数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，16位立即数，16位id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16_ID16_IMM16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，16位立即数，2个16位id，16位立即数，8位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，16位立即数，16位id，8位立即数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，16位立即数，16位id，8位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，2个16位立即数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，16位立即数，8位立即数，8位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，16位立即数，8位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_V8_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，16位立即数，8位寄存器，16位立即数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，16位立即数，2个8位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，32位立即数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM4_IMM4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，2个4位立即数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，64位立即数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，8位立即数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，8位立即数，16位id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16_ID16_IMM16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，8位立即数，2个16位id，16位立即数，8位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，8位立即数，16位id，8位立即数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，8位立即数，16位id，8位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，8位立即数，16位立即数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，2个8位立即数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，2个8位立即数，8位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，8位立即数，8位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，8位立即数，8位寄存器，16位立即数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，8位立即数，2个8位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，8位立即数，3个8位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8_V8_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，8位立即数，4个8位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16位前缀操作码，16位立即数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16位前缀操作码，16位立即数，16位id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16位前缀操作码，16位立即数，8位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16位前缀操作码，16位立即数，2个8位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16位前缀操作码，8位立即数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16位前缀操作码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16位前缀操作码，8位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_V8_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16位前缀操作码，8位寄存器，16位id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_V8_IMM32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16位前缀操作码，8位寄存器，32位立即数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V16_V16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，2个16位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V4_V4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，2个4位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，8位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V8_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，8位寄存器，16位立即数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V8_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，8位寄存器，8位立即数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，2个8位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V8_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，3个8位寄存器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V8_V8_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8位操作码，4个8位寄存器。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "字节码汇总集合",
      children: "字节码汇总集合"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表中汇总了当前版本的所有方舟字节码，寄存器索引、立即数和id通过每四位宽度使用一个字符替代的形式来描述。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以指令defineclasswithbuffer RR, @AAAA, @BBBB, +CCCC, vDD为例："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "defineclasswithbuffer：指示操作的操作码助记符。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RR：方舟运行时内部使用的8位保留数字，此处提及仅为完整展示指令格式，开发者无需关注。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@AAAA，@BBBB：16位id。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "+CCCC：16位立即数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vDD：8位寄存器索引。"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "操作码"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "格式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "助记符/语法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldundefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "undefined"
              })
            }), "加载进acc。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldnull"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "null"
              })
            }), "加载进acc。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldtrue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "true"
              })
            }), "加载进acc。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldfalse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "false"
              })
            }), "加载进acc。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createemptyobject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个空对象，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createemptyarray RR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的8位保留数字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个空数组，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createarraywithbuffer RR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的8位保留数字  A：16位的literal id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用索引A对应的字面量数组，创建一个数组对象，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x07"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createobjectwithbuffer RR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的8位保留数字  A：16位的literal id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用索引A对应的字面量数组，创建一个对象，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x08"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newobjrange RR, +AA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的8位保留数字  A：参数数量  B：类对象  B + 1, ..., B + A - 1：传递给构造函数的参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以B + 1, ..., B + A - 1作为参数，创建一个B类的实例，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x09"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newlexenv +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：词法环境中的槽位数目"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个槽位数为A的词法环境，将其存放到acc中，并进入该词法环境。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "add2 RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字  A：操作数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A + acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sub2 RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字  A：操作数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A - acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mul2 RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字  A：操作数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A * acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "div2 RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字  A：操作数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A / acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mod2 RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字  A：操作数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A % acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eq RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字  A：操作数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A == acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "noteq RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字  A：操作数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A != acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "less RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字  A：操作数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A < acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lesseq RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字  A：操作数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A <= acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "greater RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字  A：操作数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A > acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "greatereq RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字  A：操作数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A >= acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shl2 RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字  A：操作数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A << acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shr2 RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字  A：操作数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A >>> acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ashr2 RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字  A：操作数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A >> acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "and2 RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字  A：操作数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A & acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "or2 RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字  A：操作数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x1a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "xor2 RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字  A：操作数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A ^ acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x1b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "exp RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字  A：操作数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A ** acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x1c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "typeof RR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的8位保留数字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算typeof acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x1d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tonumber RR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的8位保留数字"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["以acc作为参数，执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-tonumber",
              children: "ToNumber"
            }), "，将结果存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x1e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tonumeric RR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的8位保留数字"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["以acc作为参数，执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-tonumeric",
              children: "ToNumeric"
            }), "，将结果存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x1f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "neg RR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算-acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "not RR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算~acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "inc RR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc + 1，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dec RR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc - 1，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "istrue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc == true，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "isfalse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc == false，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "isin RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的8位保留数字  A：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A in acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "instanceof RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的8位保留数字  A：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算A instanceof acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "strictnoteq RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的8位保留数字  A：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc !== A，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stricteq RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的8位保留数字  A：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc === A，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x29"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callarg0 RR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：函数对象  R：方舟运行时内部使用的8位保留数字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不传递参数，直接调用acc中存放的函数对象，并将结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x2a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callarg1 RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：函数对象  R：方舟运行时内部使用的8位保留数字  A：参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以A作为参数，调用acc中存放的函数对象，并将结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x2b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callargs2 RR, vAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：函数对象  R：方舟运行时内部使用的8位保留数字  A, B：参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以A，B作为参数，调用acc中存放的函数对象，并将结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x2c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callargs3 RR, vAA, vBB, vCC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：函数对象  R：方舟运行时内部使用的8位保留数字  A, B, C：参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以A, B, C作为参数，调用acc中存放的函数对象，并将结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x2d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callthis0 RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：函数对象  R：方舟运行时内部使用的8位保留数字  A：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将this的值设置为A，不传递参数，调用acc中存放的函数对象，并将结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x2e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callthis1 RR, vAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：函数对象  R：方舟运行时内部使用的8位保留数字  A：对象  B：参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将this的值设置为A，以B作为参数，调用acc中存放的函数对象，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x2f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callthis2 RR, vAA, vBB, vCC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：函数对象  R：方舟运行时内部使用的8位保留数字  A：对象  B, C：参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将this的值设置为A，以B，C作为参数，调用acc中存放的函数对象，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8_V8_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callthis3 RR, vAA, vBB, vCC, vDD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：函数对象  R：方舟运行时内部使用的8位保留数字  A：对象  B, C, D：参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将this的值设置为A，以B, C, D作为参数，调用acc中存放的函数对象，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callthisrange RR, +AA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：函数对象  R：方舟运行时内部使用的8位保留数字  A：参数数量  B：对象  B + 1, ..., B + A：参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将this的值设置为B，以B + 1，...，B + A作为参数，调用acc中存放的函数对象，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "supercallthisrange RR, +AA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的8位保留数字  A：参数数量  B, ..., B + A - 1：参数"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["以B, ..., B + A - 1作为参数, 调用super函数，并将结果存放到acc中。  当A的值是0时，B是", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "undefined"
              })
            }), "。  此指令仅出现在非箭头函数中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "definefunc RR, @AAAA, +BB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的8位保留数字  A：method id  B：方法A的形参数量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建方法A的函数对象，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "definemethod RR, @AAAA, +BB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：类对象或类对象的对象原型，方法为静态方法时，acc中是类对象  R：方舟运行时内部使用的8位保留数字  A：method id  B：方法A的形参数量"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建方法A的函数对象，将acc中的对象设置为该函数对象的", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-ecmascript-function-objects",
              children: "HomeObject"
            }), "属性，并将该函数对象存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16_ID16_IMM16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "defineclasswithbuffer RR, @AAAA, @BBBB, +CCCC, vDD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的8位保留数字  A：类的构造函数的method id  B：literal id  C：方法A的形参数量  D：父类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用索引B对应的字面量数组和父类D，创建A的类对象，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getnextpropname vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：迭代器"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-createiterresultobject",
              children: "for-in迭代器"
            }), "A的", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-%25foriniteratorprototype%25.next",
              children: "next"
            }), "方法，并将结果存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x37"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldobjbyvalue RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：属性键值  R：方舟运行时内部使用的8位保留数字  A：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载A对象的键值为acc的属性，并将结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x38"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stobjbyvalue RR, vAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的8位保留数字  A：对象  B：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到对象A的键值为B的属性上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x39"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldsuperbyvalue RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：属性键值  R：方舟运行时内部使用的8位保留数字  A：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在当前函数中，获取super的键值为acc的属性，并将其存放到acc中。若该属性为访问器属性，则将A中的对象作为调用该属性getter函数时的this参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x3a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldobjbyindex RR, +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的8位保留数字  A：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载acc中所存对象的键值为A的属性，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x3b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stobjbyindex RR, vAA, +BBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的8位保留数字  A：对象  B：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到对象A的键值为B的属性上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x3c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM4_IMM4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldlexvar +A, +B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：词法环境层级  B：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将A个层次外的词法环境的B号槽位上的值存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x3d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM4_IMM4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stlexvar +A, +B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：词法环境层级  B：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到A个层次外的词法环境的B号槽位上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x3e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lda.str @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：string id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将索引A对应的字符串存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x3f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tryldglobalbyname RR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的8位保留数字  A：string id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将名称为索引A对应的字符串的全局变量存放进acc中，不存在名称为A的全局变量时，抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "trystglobalbyname RR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的8位保留数字  A：string id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到名称为索引A对应的字符串的全局变量上，不存在名称为A的全局变量时，抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x41"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldglobalvar RRRR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的16位保留数字  A：string id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将名称为索引A对应的字符串的全局变量的值存放到acc中，该变量一定存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldobjbyname RR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的8位保留数字  A：string id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载acc中所存对象的键值为索引A对应的字符串的属性，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x43"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stobjbyname RR, @AAAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的8位保留数字  A：string id  B：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到对象B的键值为索引A对应的字符串的属性上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x44"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V4_V4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mov vA, vB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A, B：寄存器索引"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将寄存器B中的内容复制到寄存器A中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mov vAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A, B：寄存器索引"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将寄存器B中的内容复制到寄存器A中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x46"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldsuperbyname RR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的8位保留数字  A：string id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在当前函数中，获取super的键值为索引A对应的字符串的属性，并将其存放到acc中。若该属性为访问器属性，则将acc中的对象作为调用该属性getter函数时的this参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x47"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stconsttoglobalrecord RRRR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的16位保留数字  A：string id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc的值存放到全局变量中以const定义的名字为索引A对应的字符串的常量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sttoglobalrecord RRRR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的16位保留数字  A：string id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc的值存放到全局变量中以let定义的名字为索引A对应的字符串的变量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x49"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldthisbyname RR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的8位保留数字  A：string id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载this的键值为索引A对应的字符串的属性，并把结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x4a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stthisbyname RR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的8位保留数字  A：string id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到this的键值为索引A对应的字符串的属性上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x4b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldthisbyvalue RR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：属性键值  R：方舟运行时内部使用的8位保留数字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载this的键值为acc的属性，并将结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x4c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stthisbyvalue RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的8位保留数字  A：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到this的键值为A的属性上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x4d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jmp +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无条件跳转到分支A。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x4e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jmp +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无条件跳转到分支A。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x4f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jeqz +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc == 0，如果为真，则跳转到分支A。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jeqz +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc == 0，如果为真，则跳转到分支A。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x51"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jnez +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc != 0，如果为真，则跳转到分支A。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jstricteqz +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc === 0，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jnstricteqz +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc !== 0，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x54"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jeqnull +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc == null，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x55"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jnenull +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc != null，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x56"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jstricteqnull +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc === null，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x57"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jnstricteqnull +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc !== null，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x58"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jequndefined +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc == undefined，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x59"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jneundefined +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc != undefined，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x5a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jstrictequndefined +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc === undefined，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x5b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jnstrictequndefined +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc !== undefined，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x5c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jeq vAA, +BB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：值  B：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc == A，如果为真，则跳转到分支B。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x5d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jne vAA, +BB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：值  B：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc != A，如果为真，则跳转到分支B。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x5e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jstricteq vAA, +BB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  A：对象  B：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc === A，如果为真，则跳转到分支B。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x5f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jnstricteq vAA, +BB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  A：对象  B：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc !== A，如果为真，则跳转到分支B。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lda vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：寄存器索引"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将寄存器A中的内容存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x61"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sta vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc  A：寄存器索引"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的内容存放到寄存器A中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x62"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldai +AAAAAAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：常量字面量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将整型字面量A存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x63"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fldai +AAAAAAAAAAAAAAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：常量字面量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将双精度浮点型字面量A存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回acc中的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "returnundefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "undefined"
              })
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x66"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getpropiterator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将acc中所存的对象的", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-createiterresultobject",
              children: "for-in迭代器"
            }), "存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x67"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getiterator RR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的8位保留数字"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-getiterator",
              children: "GetIterator"
            }), "(acc, sync)方法，并将结果存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "closeiterator RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的8位保留数字  A：对象"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["以类型为 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-iterator-records",
              children: "iteratorRecord"
            }), " 的A作为参数，执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-iteratorclose",
              children: "IteratorClose"
            }), "，并将结果存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x69"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "poplexenv"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跳出当前的词法环境，进入外面一层词法环境。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x6a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldnan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "nan"
              })
            }), "存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x6b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldinfinity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "infinity"
              })
            }), "存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x6c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getunmappedargs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将当前函数的", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "arguments"
              })
            }), "存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x6d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldglobal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "global"
              })
            }), "对象存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x6e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldnewtarget"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将当前函数的隐式参数NewTarget存放到acc中。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x6f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldthis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将this存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x70"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldhole"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "hole"
              })
            }), "存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x71"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createregexpwithliteral RR, @AAAA, +BB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的8位保留数字  A：string id  B：指代正则表达式修饰符"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用索引A对应的字符串和B指代的修饰符，创建一个正则表达式，并存放到acc中。  B和所指代的修饰符的对应关系为：0（默认值，无修饰符），1（g），2（i），4（m），8（s），16（u），32（y）；B也可以指代符合语法规范的修饰符的组合，例如3，指代的修饰符是gi。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x72"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createregexpwithliteral RRRR, @AAAA, +BB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的16位保留数字  A：string id  B：指代正则表达式修饰符"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用索引A对应的字符串和B指代的修饰符，创建一个正则表达式，并存放到acc中。  B和所指代的修饰符的对应关系为：0（默认值，无修饰符），1（g），2（i），4（m），8（s），16（u），32（y）；B也可以指代符合语法规范的修饰符的组合，例如3，指代的修饰符是gi。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x73"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callrange RR, +AA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：函数对象  R：方舟运行时内部使用的8位保留数字  A：参数数量  B,..., B + A - 1：参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以B, ..., B + A - 1作为参数，调用acc中存放的函数对象，并将结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x74"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "definefunc RRRR, @AAAA, +BB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的16位保留数字  A：method id  B：方法A的形参数量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建方法A的函数对象，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x75"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16_ID16_IMM16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "defineclasswithbuffer RRRR, @AAAA, @BBBB, +CCCC, vDD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的16位保留数字  A：类的构造函数的method id  B：literal id  C：方法A的形参数量  D：父类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用索引B对应的字面量数组和父类D，创建A的类对象，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x76"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gettemplateobject RR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的8位保留数字"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-gettemplateobject",
              children: "GetTemplateObject"
            }), "(acc)，并将结果存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x77"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setobjectwithproto RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的8位保留数字  A：值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将acc中存放对象的 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "__proto__"
              })
            }), " 属性设置为A。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x78"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stownbyvalue RR, vAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的8位保留数字  A：对象  B：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到对象A的键值为B的属性上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x79"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stownbyindex RR, vAA, +BBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的8位保留数字  A：对象  B：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到对象A的键值为B的属性上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x7a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stownbyname RR, @AAAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的8位保留数字  A：string id  B：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到对象B的键值为索引A对应的字符串的属性上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x7b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getmodulenamespace +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：模块索引"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["对第A个模块，执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-getmodulenamespace",
              children: "GetModuleNamespace"
            }), "，并将结果存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x7c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stmodulevar +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到槽位号为A的模块变量中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x7d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldlocalmodulevar +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将槽位号为A的局部模块变量存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x7e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldexternalmodulevar +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将槽位号为A的外部模块变量存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x7f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stglobalvar RRRR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的16位保留数字  A：string id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到名字为索引A对应的字符串的全局变量上，这个变量一定存在。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createemptyarray RRRR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的16位保留数字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个空数组，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x81"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createarraywithbuffer RRRR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的16位保留数字  A：literal id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用索引A对应的字面量数组，创建一个数组对象, 并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x82"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createobjectwithbuffer RRRR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的16位保留数字  A：literal id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用索引A对应的字面量数组，创建一个对象, 并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x83"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newobjrange RRRR, +AA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的16位保留数字  A：参数数量  B：类对象  B + 1, ..., B + A - 1：传递给构造函数的参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以B + 1, ..., B + A - 1作为参数，创建一个B类的实例，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x84"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "typeof RRRR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的16位保留数字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算typeof acc，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x85"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldobjbyvalue RRRR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：属性键值  R：方舟运行时内部使用的16位保留数字  A：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载A对象的键值为acc的属性，并将结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x86"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stobjbyvalue RRRR, vAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的16位保留数字  A：对象  B：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到对象A的键值为B的属性上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x87"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldsuperbyvalue RRRR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：属性键值  R：方舟运行时内部使用的16位保留数字  A：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在当前函数中，获取super的键值为acc的属性，并将其存放到acc中。若该属性为访问器属性，则将A中的对象作为调用该属性getter函数时的this参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x88"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldobjbyindex RRRR, +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的16位保留数字  A：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载acc中所存对象的键值为A的属性，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x89"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_V8_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stobjbyindex RRRR, vAA, +BBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的16位保留数字  A：对象  B：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到对象A的键值为B的属性上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x8a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldlexvar +AA, +BB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：词法环境层级  B：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将A个层次外的词法环境的B号槽位上的值存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x8b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stlexvar +AA, +BB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：词法环境层级  B：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到A个层次外的词法环境的B号槽位上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x8c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tryldglobalbyname RRRR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的16位保留数字  A：string id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将名称为索引A对应的字符串的全局变量存放进acc中，不存在名称为A的全局变量时，抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x8d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "trystglobalbyname RRRR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的16位保留数字  A：string id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到名称为索引A对应的字符串的全局变量上，不存在名称为A的全局变量时，抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x8e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stownbynamewithnameset RR, @AAAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：函数对象  R：方舟运行时内部使用的8位保留数字  A：string id  B：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的函数对象存放到对象B的键值为索引A对应的字符串的属性上，并将函数的名称设置为索引A对应的字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x8f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V16_V16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mov vAAAA, vBBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A, B：寄存器索引"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将寄存器B中的内容复制到寄存器A中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldobjbyname RRRR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的16位保留数字  A：string id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载acc中所存对象的键值为索引A对应的字符串的属性，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x91"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stobjbyname RRRR, @AAAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的16位保留数字  A：string id  B：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到对象B的键值为索引A对应的字符串的属性上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x92"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldsuperbyname RRRR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的16位保留数字  A：string id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在当前函数中，获取super的键值为索引A对应的字符串的属性，并将其存放到acc中。若该属性为访问器属性，则将acc中的对象作为调用该属性getter函数时的this参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x93"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldthisbyname RRRR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的16位保留数字  A：string id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载this的键值为索引A对应的字符串的属性，并把结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x94"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stthisbyname RRRR, @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的16位保留数字  A：string id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到this的键值为索引A对应的字符串的属性上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x95"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldthisbyvalue RRRR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：属性键值  R：方舟运行时内部使用的16位保留数字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载this的键值为acc的属性，并将结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x96"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stthisbyvalue RRRR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的16位保留数字  A：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到this的键值为A的属性上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x97"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "asyncgeneratorreject vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：异常  A：生成器"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-generator-objects",
              children: "generator"
            }), " A和acc中存放的异常，执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-asyncgeneratorreject",
              children: "AsyncGeneratorReject"
            }), "，并将结果存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x98"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jmp +AAAAAAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无条件跳转到分支A。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x99"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stownbyvaluewithnameset RR, vAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：函数对象  R：方舟运行时内部使用的8位保留数字  A：对象  B：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到对象A的键值为B的属性上，并将函数的名称设置为B。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x9a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jeqz +AAAAAAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc == 0，如果为真，则跳转到分支A。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x9b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jnez +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc != 0，如果为真，则跳转到分支A。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x9c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jnez +AAAAAAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc != 0，如果为真，则跳转到分支A。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x9d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jstricteqz +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc === 0，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x9e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jnstricteqz +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc !== 0，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x9f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jeqnull +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc == null，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xa0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jnenull +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc != null，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xa1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jstricteqnull +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc === null，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xa2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jnstricteqnull +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc !== null，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xa3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jequndefined +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc == undefined，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xa4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jneundefined +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc != undefined，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xa5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jstrictequndefined +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc === undefined，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xa6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jnstrictequndefined +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc !== undefined，如果为真，则跳转到分支A。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xa7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jeq vAA, +BBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：值  B：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc == A，如果为真，则跳转到分支B。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xa8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jne vAA, +BBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：值  B：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc != A，如果为真，则跳转到分支B。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xa9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jstricteq vAA, +BBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：值  B：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc === A，如果为真，则跳转到分支B。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xaa"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jnstricteq vAA, +BBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：值  B：有符号的分支偏移量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc !== A，如果为真，则跳转到分支B。  指令功能未使能，暂不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getiterator RRRR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的16位保留数字"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-getiterator",
              children: "GetIterator"
            }), "(acc, sync)方法，并将结果存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "closeiterator RRRR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R：方舟运行时内部使用的16位保留数字  A：对象"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["以类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-iterator-records",
              children: "iteratorRecord"
            }), "的A作为参数，执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-iteratorclose",
              children: "IteratorClose"
            }), "，并将结果存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldsymbol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["加载", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Symbol"
              })
            }), "对象到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xae"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "asyncfunctionenter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个异步函数对象，并将这个对象存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xaf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldfunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将当前的函数对象加载到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xb0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "debugger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调试时用于暂停执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xb1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "creategeneratorobj vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：函数对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用函数对象A，创建一个generator，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xb2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createiterresultobj vAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：对象  B：布尔值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["以 value A和 done B作为参数，执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-createiterresultobject",
              children: "CreateIterResultObject"
            }), "，并将结果存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xb3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createobjectwithexcludedkeys +AA, vBB, vCC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：范围寄存器数量  B：对象  C, ..., C + A：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于对象B，创建一个排除了键值C, ..., C + A的对象，并将其存放到acc中。  这个指令用于支持使用析构和扩展语法创建对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xb4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newobjapply RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：参数列表  R：方舟运行时内部使用的8位保留数字  A：类对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用acc中存放的参数列表，创建一个A类的实例，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xb5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newobjapply RRRR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：参数列表  R：方舟运行时内部使用的16位保留数字  A：类对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用acc中存放的参数列表，创建一个A类的实例，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xb6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newlexenvwithname +AA, @BBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：词法环境中的槽位数量  B：literal id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用索引B对应的字面量数组中所存放的词法变量名称，创建一个具有A个槽位的词法环境，将这个词法环境存放到acc中，并进入该词法环境。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xb7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "createasyncgeneratorobj vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：函数对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于函数对象A，创建一个异步的generator，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xb8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "asyncgeneratorresolve vAA, vBB, vCC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：生成器  B：对象  C：布尔值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["以 generator A, value B和 done C作为参数，执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-asyncgeneratorresolve",
              children: "AsyncGeneratorResolve"
            }), "，并将结果存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xb9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "supercallspread RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：类对象  R：方舟运行时内部使用的8位保留数字  A：参数列表"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以参数列表A作为参数，调用acc中所存类的父类构造函数，并将结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xba"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "apply RR, vAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：函数对象  R：方舟运行时内部使用的8位保留数字  A：对象  B：参数列表"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将this设置为A，以参数列表B作为参数，调用acc中存放的函数对象，并将返回值存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xbb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "supercallarrowrange RR, +AA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：类对象  R：方舟运行时内部使用的8位保留数字  A：参数数量  B, ..., B + A - 1：参数"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["以B, ..., B + A - 1作为参数，调用acc中所存类的父类的构造函数，并将结果存放到acc中。  如果A的值为0，则B为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "undefined"
              })
            }), "。  此指令仅出现在箭头函数中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xbc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8_V8_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "definegettersetterbyvalue vAA, vBB, vCC, vDD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：是否需要为访问器设置名称，是一个布尔值  A：对象  B：属性键值  C：getter函数对象  D：setter函数对象"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["以getter方法 C和setter方法 D作为参数，定义对象A的键值为B的属性的访问器，并将结果对象存放到acc中。  如果C是", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "undefined"
              })
            }), "，则不会设置getter，如果D是", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "undefined"
              })
            }), "，则不会设置setter。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xbd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dynamicimport"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用acc中的值作为参数，执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-import-calls",
              children: "ImportCalls"
            }), "，并把结果存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xbe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "definemethod RRRR, @AAAA, +BB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：类对象或类对象的对象原型，方法为静态方法时，acc中是类对象  R：方舟运行时内部使用的16位保留数字  A：method id  B：方法A的形参数量"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建方法A的函数对象，将acc中的对象设置为该函数对象的", (0,jsx_runtime.jsx)(_components.a, {
              href: "%60https://262.ecma-international.org/12.0/#sec-ecmascript-function-objects%60",
              children: "[[HomeObject]]"
            }), "属性，并将该函数对象存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xbf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "resumegenerator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：生成器"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["基于acc中存放的generator，执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-generatorresume",
              children: "GeneratorResume"
            }), "，并将结果存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xc0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getresumemode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：生成器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取acc中所存放的generator的执行完成后恢复值的类型，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xc1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gettemplateobject RRRR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的16位保留数字"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-gettemplateobject",
              children: "GetTemplateObject"
            }), "(acc)，并将结果存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xc2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "delobjprop vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：属性键值  A：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除对象A的键值为acc的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xc3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "suspendgenerator vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：生成器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用acc中所存放的值，挂起generator A，并将结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xc4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "asyncfunctionawaituncaught vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：函数对象"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用函数对象A和acc的值，执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#prod-AwaitExpression",
              children: "AwaitExpression"
            }), "，并将结果存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xc5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "copydataproperties vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  A：目标对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中所存放的对象的所有属性拷贝到A中，并将A存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xc6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "starrayspread vAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：数组  B：数组索引"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将acc中的值按照", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#prod-SpreadElement",
              children: "SpreadElement"
            }), "的形式存放到数组A的以索引B起始的位置上，并将结果数组的长度存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xc7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setobjectwithproto RRRR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的16位保留数字  A：值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将acc中存放对象的 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "__proto__"
              })
            }), " 属性设置为A。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xc8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stownbyvalue RRRR, vAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的16位保留数字  A：对象  B：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到对象A的键值为B的属性上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xc9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stsuperbyvalue RR, vAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的8位保留数字  A：对象  B：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在当前函数中，将acc中的值存放到super的键值为B的属性上。若该属性为访问器属性，则将A中的对象作为调用该属性setter函数时的this参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xca"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stsuperbyvalue RRRR, vAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的16位保留数字  A：对象  B：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在当前函数中，将acc中的值存放到super的键值为B的属性上。若该属性为访问器属性，则将A中的对象作为调用该属性setter函数时的this参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xcb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_V8_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stownbyindex RRRR, vAA, +BBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的16位保留数字  A：对象  B：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到对象A的键值为B的属性上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xcc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stownbyname RRRR, @AAAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的16位保留数字  A：string id  B：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到对象B的键值为索引A对应的字符串的属性上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xcd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "asyncfunctionresolve vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：异步的函数对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用acc中的值，解析对象A的Promise对象，并将结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "asyncfunctionreject vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：异步的函数对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用acc中的值，驳回对象A的Promise对象，并将结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xcf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "copyrestargs +AA"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A：形参列表中", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#prod-FunctionRestParameter",
              children: "剩余参数"
            }), "所在的位次"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "复制剩余参数，并将复制出的参数数组副本存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xd0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stsuperbyname RR, @AAAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的8位保留数字  A：string id  B：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在当前函数中，将acc中的值存放到super的键值为索引A对应的字符串的属性上。  若该属性为访问器属性，则将B中的对象作为调用该属性setter函数时的this参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xd1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stsuperbyname RRRR, @AAAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  R：方舟运行时内部使用的16位保留数字  A：string id  B：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在当前函数中，将acc中的值存放到super的键值为索引A对应的字符串的属性上。  若该属性为访问器属性，则将B中的对象作为调用该属性setter函数时的this参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xd2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stownbyvaluewithnameset RRRR, vAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：函数对象  R：方舟运行时内部使用的8位保留数字  A：对象  B：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到对象A的键值为B的属性上，并将函数的名称设置为B。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xd3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldbigint @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：string id"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["基于索引A对应的字符串，创建", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "BigInt"
              })
            }), "类型的值，并将其存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xd4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM16_ID16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stownbynamewithnameset RRRR, @AAAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：函数对象  R：方舟运行时内部使用的16位保留数字  A：string id  B：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的函数对象存放到对象B的键值为索引A对应的字符串的属性上，并将函数的名称设置为索引A对应的字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xd5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "nop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xd6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setgeneratorstate +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：生成器对象  A：生成器状态"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将acc中存放的generator的状态设置为A (参考：", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-properties-of-generator-instances",
              children: "GeneratorState"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-properties-of-asyncgenerator-intances",
              children: "AsyncGeneratorState"
            }), ")  A可能的值有以下几项：undefined(0x0)、suspendedStart(0x1)、suspendedYield(0x2)、executing(0x3)、completed(0x4)和awaitingReturn(0x5)。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xd7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getasynciterator RR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  R：方舟运行时内部使用的8位保留数字"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-getiterator",
              children: "GetIterator"
            }), "(acc, async)，并将结果存放到acc上。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xd8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_IMM16_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ldprivateproperty RR, +AAAA, +BBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  A：词法环境层级  B：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载A个层次外的词法环境的B号槽位上的值，作为属性键值，将acc中所存放对象的该键值对应的值存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xd9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_IMM16_IMM16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stprivateproperty RR, +AAAA, +BBBB, vCC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：词法环境层级  B：槽位号  C：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载A个层次外的词法环境的B号槽位上的值，作为属性键值，将acc中的值存放到C中所存放对象的该键值上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_IMM16_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "testin RR, +AAAA, +BBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  A：词法环境层级  B：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载A个层次外的词法环境的B号槽位上的值，计算是否in acc，将结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xdb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "definefieldbyname RR, @AAAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：string id  B：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为对象B定义一个键值为A的属性，并将acc中的值存放到其中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xdc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMM8_ID16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "definepropertybyname RR, @AAAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：string id  B：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为对象B定义一个键值为A的属性，并将acc中的值存放到其中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xfb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.notifyconcurrentresult"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：并发函数的返回值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将并发函数的返回值通知运行时。  此指令仅出现在并发函数中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xfc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xfd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.createobjectwithexcludedkeys +AAAA, vBB, vCC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：范围寄存器数量  B：对象  C, ..., C + A：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基于对象B，创建一个排除了键值C, ..., C + A的对象，并将其存放到acc中。  这个指令用例支持使用析构和扩展语法创建对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0xfe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "throw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：异常"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出acc中存放的异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x01fb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM8_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.definefieldbyvalue RR, vAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：属性键值  B：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为对象B定义一个键值为A的属性，并将acc中的值存放到其中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x01fc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x01fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.newobjrange +AAAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：参数数量  B：类对象  B + 1, ..., B + A - 1：传递给构造函数的参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以B + 1, ..., B + A - 1作为参数，创建一个B类的实例，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x01fe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "throw.notexists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出异常：未定义的方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x02fb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM8_IMM32_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.definefieldbyindex RR, +AAAAAAAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：属性键值  B：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为对象B定义一个键值为A的属性，并将acc中的值存放到其中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x02fc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x02fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.newlexenv +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：词法环境中的槽位数目"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个槽位数为A的词法环境，将其存放到acc中，并进入该词法环境。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x02fe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "throw.patternnoncoercible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出异常：此对象不可以强制执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x03fb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.topropertykey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值转换为属性值，如果转换失败，则抛出错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x03fc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x03fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.newlexenvwithname +AAAA, @BBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：词法环境中的槽位数量  B：literal id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用索引B对应的字面量数组中所存放的词法变量名称，创建一个具有A个槽位的词法环境，将这个词法环境存放到acc中，并进入该词法环境。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x03fe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "throw.deletesuperproperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出异常：删除父类的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x04fb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM_16_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.createprivateproperty +AAAA, @BBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：要创建的符号数量  B：literal id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建A个符号；从索引B对应的字面量数组中获取存放的私有方法，如果其中存在私有实例方法，则额外创建一个符号（\"method\"），将所有创建出的符号按照创建顺序，依次放到当前类所在的词法环境的末尾。  此指令仅出现在定义类的时候。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x04fc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x04fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.callrange +AAAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：函数对象  A：参数数量  B, ..., B + A - 1：参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以B, ..., B + A - 1作为参数，调用acc中存放的函数对象，并将结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x04fe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "throw.constassignment vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：常量变量的名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出异常：对常量变量进行赋值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x05fb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM8_IMM_16_IMM_16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.defineprivateproperty RR, +AAAA, +BBBB, vCC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：词法环境层数  B：槽位号  C：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载A个层次外的词法环境的B号槽位上的符号，赋值为acc，将其作为私有属性添加到对象C上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x05fc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x05fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.callthisrange +AAAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：函数对象  A：参数数量  B：对象  B + 1, ..., B + A：参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将this的值设置为B，以B + 1，...，B + A作为参数，调用acc中存放的函数对象，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x05fe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "throw.ifnotobject vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果A不是一个对象，抛出异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x06fb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.callinit +RR, vAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "acc：函数对象  R：方舟运行时内部使用的8位保留数字  A：对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将this的值设置为A，不传递参数，调用acc中存放的函数对象，并将结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x06fc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x06fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.supercallthisrange +AAAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：参数数量  B, ..., B + A - 1：参数"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["以B, ..., B + A - 1作为参数, 调用super函数，并将结果存放到acc中。  当A的值是0时，B是", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "undefined"
              })
            }), "。  此指令仅出现在非箭头函数中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x06fe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_V8_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "throw.undefinedifhole vAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：对象  B：对象名称"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果A的值是", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "hole"
              })
            }), "，则抛出异常：B的值是", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "undefined"
              })
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x07fb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16_ID16_ID16_IMM16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.definesendableclass RRRR, @AAAA, @BBBB, +CCCC, vDD"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["R：方舟运行时内部使用的16位保留数字  A：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable#sendable-class",
              children: "sendable class"
            }), "的构造函数的method id  B：literal id  C：方法A的形参数量  D：父类"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用索引B对应的字面量数组和父类D，创建一个A类的对象，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x07fc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x07fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16_V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.supercallarrowrange +AAAA, vBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：类对象  A：参数数量  B, ..., B + A - 1:参数"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["以B, ..., B + A - 1作为参数，调用acc中所存类的父类的构造函数，并将结果存放到acc中。  如果A的值为0，则B为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "undefined"
              })
            }), "。  此指令仅出现在箭头函数中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x07fe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "throw.ifsupernotcorrectcall +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  A：错误种类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果super没有被正确调用，抛出错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x08fb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.ldsendableclass +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：词法环境层级"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将A个层次外的词法环境的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable#sendable-class",
              children: "sendable class"
            }), "存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x08fc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x08fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.ldobjbyindex +AAAAAAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  A：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载acc中所存对象的键值为A的属性，并将其存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x08fe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "throw.ifsupernotcorrectcall +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  A：错误种类"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果super没有被正确调用，抛出错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x09fb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.ldsendableexternalmodulevar +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：槽位号"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将槽位号为A的外部模块变量存放到acc中。此指令仅出现在sendable class和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable#sendable-function",
              children: "sendable function"
            }), "中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x09fc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x09fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_V8_IMM32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.stobjbyindex vAA, +BBBBBBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：对象  B：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到对象A的键值为B的属性上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x09fe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_ID16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "throw.undefinedifholewithname @AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：对象  A：string id"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果acc中的值是", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "hole"
              })
            }), "，则抛出异常：A的值是", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "undefined"
              })
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0afb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.wideldsendableexternalmodulevar +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将槽位号为A的外部模块变量存放到acc中。此指令仅出现在sendable class和sendable function中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0afc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0afd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_V8_IMM32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.stownbyindex vAA, +BBBBBBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：对象  B：属性键值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到对象A的键值为B的属性上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0bfb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.newsendableenv +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：共享词法环境中的槽位数目"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个槽位数为A的共享词法环境，并进入该词法环境。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0bfc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0bfd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.copyrestargs +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：形参列表中剩余参数起始的位次"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "复制剩余参数，并将复制出的参数数组副本存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0cfb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.widenewsendableenv +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：共享词法环境中的槽位数目"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个槽位数为A的共享词法环境，并进入该词法环境 。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0cfc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0cfd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.ldlexvar +AAAA, +BBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：词法环境层级  B：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将A个层次外的词法环境的B号槽位上的值存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0dfb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM4_IMM4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.stsendablevar +A +B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：共享词法环境层级  B：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到A个层次外的共享词法环境的B号槽位上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0dfc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0dfd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.stlexvar +AAAA, +BBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：词法环境层级  B：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到A个层次外的词法环境的B号槽位上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0efb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM8_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.stsendablevar +AA +BB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：共享词法环境层级  B：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到A个层次外的共享词法环境的B号槽位上 。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0efc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0efd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.getmodulenamespace +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：模块索引"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["对第A个模块，执行", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://262.ecma-international.org/12.0/#sec-getmodulenamespace",
              children: "GetModuleNamespace"
            }), "，并将结果存放到acc中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0ffb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.widestsendablevar +AAAA +BBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：共享词法环境层级  B：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到A个层次外的共享词法环境的B号槽位上。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0ffc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x0ffd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.stmodulevar +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放到槽位号为A的模块变量中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x10fb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM4_IMM4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.ldsendablevar +A +B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：共享词法环境层级  B：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将A个层次外的共享词法环境的B号槽位上的值存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x10fc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x10fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.ldlocalmodulevar +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将槽位号为A的局部模块变量存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x11fb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM8_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.ldsendablevar +AA + BB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：共享词法环境层级  B：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将A个层次外的共享词法环境的B号槽位上的值存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x11fc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x11fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.ldexternalmodulevar +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将槽位号为A的外部模块变量存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x12fb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.wideldsendablevar +AAAA +BBBB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：共享词法环境层级  B：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将A个层次外的共享词法环境的B号槽位上的值存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x12fc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x12fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.ldpatchvar +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：补丁变量槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将槽位号为A的补丁变量加载到acc中。  此指令仅出现在补丁模式编译场景下。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x13fb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.istrue +RR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc == true，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x13fc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x13fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wide.stpatchvar +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：值  A：补丁变量槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将acc中的值存放进槽位号为A的补丁变量中。  此指令仅出现在补丁模式编译场景下。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x14fb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.isfalse +RR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认入参：acc：操作数  R：方舟运行时内部使用的8位保留数字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计算acc == false，并将计算结果存放到acc中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x15fb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.ldlazymodulevar +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：槽位号"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["将槽位号为A的外部模块变量存放到acc中。此指令仅适用于通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-runtime/arkts-runtime-module/arkts-lazy-import",
              children: "lazy import"
            }), "导入的模块变量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x16fb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.wideldlazymodulevar +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将槽位号为A的外部模块变量存放到acc中。此指令仅适用于通过lazy import导入的模块变量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x17fb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.ldlazysendablemodulevar +AA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将槽位号为A的外部模块变量存放到acc中。此指令仅适用于通过lazy import导入的模块变量且仅出现在sendable class和sendable function中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x18fb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PREF_IMM16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "callruntime.wideldlazysendablemodulevar +AAAA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A：槽位号"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将槽位号为A的外部模块变量存放到acc中。此指令仅适用于通过lazy import导入的模块变量且仅出现在sendable class和sendable function中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0x14fc  0x15fc  ...  0x2efc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "（弃用的操作码）"
          })]
        })]
      })]
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
459318(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
540711(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
499231(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

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