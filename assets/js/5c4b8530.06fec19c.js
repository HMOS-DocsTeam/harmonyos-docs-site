"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["853850"], {
690952(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_compilation_tool_chain_arkts_arkguard_bytecode_bytecode_obfuscation_bytecode_obfuscation_md_5c4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-compilation-tool-chain-arkts-arkguard-bytecode-bytecode-obfuscation-bytecode-obfuscation-md-5c4.json
var site_docs_arkts_arkts_compilation_tool_chain_arkts_arkguard_bytecode_bytecode_obfuscation_bytecode_obfuscation_md_5c4_namespaceObject = JSON.parse('{"id":"arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation/bytecode-obfuscation","title":"ArkGuard字节码混淆原理及功能","description":"术语清单","source":"@site/docs/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation/bytecode-obfuscation.md","sourceDirName":"arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation","slug":"/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation/","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"ArkGuard字节码混淆原理及功能","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/bytecode-obfuscation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkGuard字节码混淆工具概述","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-overview/"},"next":{"title":"ArkGuard字节码混淆开启指南","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation/bytecode-obfuscation.md


const frontMatter = {
	title: 'ArkGuard字节码混淆原理及功能',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/bytecode-obfuscation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkGuard字节码混淆原理及功能';

const assets = {

};



const toc = [{
  "value": "术语清单",
  "id": "术语清单",
  "level": 2
}, {
  "value": "混淆生效范围",
  "id": "混淆生效范围",
  "level": 2
}, {
  "value": "适用语言",
  "id": "适用语言",
  "level": 3
}, {
  "value": "混淆能力",
  "id": "混淆能力",
  "level": 3
}, {
  "value": "混淆能力局限性",
  "id": "混淆能力局限性",
  "level": 3
}, {
  "value": "混淆机制及流程",
  "id": "混淆机制及流程",
  "level": 2
}, {
  "value": "混淆选项",
  "id": "混淆选项",
  "level": 2
}, {
  "value": "已有混淆选项汇总",
  "id": "已有混淆选项汇总",
  "level": 3
}, {
  "value": "-disable-obfuscation",
  "id": "-disable-obfuscation",
  "level": 3
}, {
  "value": "-enable-property-obfuscation",
  "id": "-enable-property-obfuscation",
  "level": 3
}, {
  "value": "-enable-string-property-obfuscation",
  "id": "-enable-string-property-obfuscation",
  "level": 3
}, {
  "value": "-enable-toplevel-obfuscation",
  "id": "-enable-toplevel-obfuscation",
  "level": 3
}, {
  "value": "-enable-export-obfuscation",
  "id": "-enable-export-obfuscation",
  "level": 3
}, {
  "value": "-enable-filename-obfuscation",
  "id": "-enable-filename-obfuscation",
  "level": 3
}, {
  "value": "-compact",
  "id": "-compact",
  "level": 3
}, {
  "value": "-remove-log",
  "id": "-remove-log",
  "level": 3
}, {
  "value": "-print-namecache",
  "id": "-print-namecache",
  "level": 3
}, {
  "value": "-apply-namecache",
  "id": "-apply-namecache",
  "level": 3
}, {
  "value": "-enable-lib-obfuscation-options",
  "id": "-enable-lib-obfuscation-options",
  "level": 3
}, {
  "value": "-enable-bytecode-obfuscation",
  "id": "-enable-bytecode-obfuscation",
  "level": 3
}, {
  "value": "-enable-bytecode-obfuscation-debugging",
  "id": "-enable-bytecode-obfuscation-debugging",
  "level": 3
}, {
  "value": "保留选项",
  "id": "保留选项",
  "level": 2
}, {
  "value": "已有保留选项汇总",
  "id": "已有保留选项汇总",
  "level": 3
}, {
  "value": "-keep-property-name",
  "id": "-keep-property-name",
  "level": 3
}, {
  "value": "-keep-global-name",
  "id": "-keep-global-name",
  "level": 3
}, {
  "value": "-keep-file-name",
  "id": "-keep-file-name",
  "level": 3
}, {
  "value": "-keep-dts",
  "id": "-keep-dts",
  "level": 3
}, {
  "value": "-keep",
  "id": "-keep",
  "level": 3
}, {
  "value": "保留选项支持的通配符",
  "id": "保留选项支持的通配符",
  "level": 2
}, {
  "value": "名称类通配符",
  "id": "名称类通配符",
  "level": 3
}, {
  "value": "路径类通配符",
  "id": "路径类通配符",
  "level": 3
}, {
  "value": "混淆规则合并策略",
  "id": "混淆规则合并策略",
  "level": 2
}, {
  "value": "混淆规则合并逻辑",
  "id": "混淆规则合并逻辑",
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
    img: "img",
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
        id: "arkguard字节码混淆原理及功能",
        children: "ArkGuard字节码混淆原理及功能"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "术语清单",
      children: "术语清单"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名词"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "释义"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
              children: "HAP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAP（Harmony Ability Package）是应用安装和运行的基本单元。HAP包是由代码、资源、第三方库、配置文件等打包生成的模块包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package",
              children: "HAR"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAR（Harmony Archive）是静态共享包，通过HAR可以实现多个模块或多个工程共享ArkUI组件、资源等相关代码。通过Static Library创建HAR模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp",
              children: "HSP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HSP（Harmony Shared Package）是动态共享包，通过HSP可以实现代码和资源的共享。通过Shared Library创建HSP模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "本地HAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源码形式的HAR模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "远程HAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建后打包生成的HAR包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "本地HSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "源码形式的HSP模块。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "远程HSP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建后打包生成的HSP包。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "三方库"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由第三方开发并发布的库，发布到OHPM中心仓，供其他应用使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "名称混淆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将代码中的函数名、类名、文件名等标识符修改为无意义的名称。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "混淆生效范围",
      children: "混淆生效范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "适用语言",
      children: "适用语言"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkGuard支持ArkTS/TS/JS语言，JSON仅支持文件名混淆，不支持C/C++、资源文件等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "混淆能力",
      children: "混淆能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkGuard提供的是", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "面向方舟字节码的基础名称混淆"
        })
      }), "：在可选规则下，对", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "类、接口、枚举、函数、类成员方法、变量、对象属性名、源文件名"
        })
      }), "等标识符进行重命名，并可通过保留选项配置", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "白名单"
        })
      }), "；各选项的覆盖范围与例外说明见下文", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B7%B7%E6%B7%86%E9%80%89%E9%A1%B9",
        children: "混淆选项"
      }), "。函数参数名不参与字节码名称混淆。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "不支持"
        })
      }), "以下高级混淆能力：", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "控制流混淆"
        })
      }), "（如控制流平坦化、虚假分支插入等）、", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "数据混淆"
        })
      }), "（如对常量、字面量或内存数据布局做加密与变换）、", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "指令替换或插入无关指令"
        })
      }), "、", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "虚拟机保护/加壳"
        })
      }), "等不以标识符重命名为主要手段的保护方式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "混淆能力局限性",
      children: "混淆能力局限性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1.语言的限制"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代码混淆工具在处理不同编程语言时，其类型分析机制、混淆策略和执行效率都会因目标语言的特性而呈现差异。以业界常用的ProGuard为例，其主要面向Java这类强类型语言进行混淆。由于强类型语言具有严格的类型系统，每个类型都有明确的定义来源。使得混淆过程中的类型关系追踪和处理更为精确，从而大幅减少了需要配置保留规则的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相比之下，ArkGuard混淆工具主要针对JS、TS和ArkTS语言。JS支持运行时动态修改对象、函数，而混淆是在编译阶段进行的静态处理，可能导致混淆后的名称在运行时无法被正确解析，进而引发运行时异常。TS和ArkTS虽然引入了静态类型系统，但采用了结构性类型机制，即具有相同结构的不同命名类型会被视为等价类型。因此，在TS和ArkTS中仍然无法追溯类型的确切来源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于这些特性，使用ArkGuard时需要对更多的语法场景进行白名单配置，同时，ArkGuard采用全局生效的属性保留机制，根据白名单统一保留所有同名属性，而无法支持针对特定类型进行精确保留配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体而言，可以参考以下示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假设ArkGuard支持配置指定类型的白名单，配置类A1作为白名单，类A1的属性prop1在白名单中，而A2中的prop1属性不在白名单中。此时，a2作为参数被传入test函数中，调用prop1属性时会导致功能异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// example.ts\n// 混淆前：\nclass A1 {\n  prop1: string = '';\n}\n\nclass A2 {\n  prop1: string = '';\n}\n\nfunction test(input: A1) {\n  console.info(input.prop1);\n}\n\nlet a2 = new A2();\na2.prop1 = 'prop a2';\ntest(a2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后\nclass A1 {\n    prop1: string = '';\n}\n\nclass A2 {\n    a: string = '';\n}\n\nfunction test(input: A1) {\n    console.info(input.prop1);\n}\n\nlet a2 = new A2();\na2.a = 'prop a2';\ntest(a2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "综上所述，开发者应了解这种语言差异带来的混淆效果差异，并尽量使用不重复的名称，以使在各种场景下的混淆效果更好。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2.安全保证的有限性"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与其他代码混淆工具一样，混淆只能在一定程度上增加逆向工程的难度，并不能真正阻止逆向工程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["并且，由于ArkGuard混淆工具仅支持基础混淆能力，开发者不应只依赖ArkGuard来保证应用的安全性，对于源码安全有高要求的开发者，应考虑使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/code-protect",
        children: "应用加密"
      }), "、第三方安全加固等安全措施来保护代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "混淆机制及流程",
      children: "混淆机制及流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下图为应用编译的简要流程图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(659077)/* ["default"] */.A) + "",
        width: "3332",
        height: "742"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以在模块的build-profile.json5配置文件中开启混淆功能，详细参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-guide",
        children: "字节码混淆开启指南"
      }), "，从而在编译打包的过程中自动对abc进行混淆处理。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["混淆过程中，首先读取混淆开关。在开关开启的情况下，解析混淆配置文件，并依据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B7%B7%E6%B7%86%E8%A7%84%E5%88%99%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5",
        children: "混淆规则合并策略"
      }), "合并混淆规则。然后按照混淆规则对生成的abc文件进行字节码混淆，最后将混淆后的中间文件落盘至build目录。开发者可以通过build目录中混淆后的产物，确认混淆效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用混淆功能前，建议开发者先通过文档了解", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B7%B7%E6%B7%86%E9%80%89%E9%A1%B9",
        children: "混淆选项的能力"
      }), "与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9",
        children: "混淆选项所需要保留白名单的场景"
      }), "，再根据开发需求选择对应的混淆功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "混淆选项",
      children: "混淆选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "已有混淆选项汇总",
      children: "已有混淆选项汇总"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "关闭混淆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-disable-obfuscation",
              children: "-disable-obfuscation"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "属性名称混淆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-enable-property-obfuscation",
              children: "-enable-property-obfuscation"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "字符串属性名称混淆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-enable-string-property-obfuscation",
              children: "-enable-string-property-obfuscation"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "顶层作用域名称混淆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-enable-toplevel-obfuscation",
              children: "-enable-toplevel-obfuscation"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "导入导出名称混淆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-enable-export-obfuscation",
              children: "-enable-export-obfuscation"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "文件名混淆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-enable-filename-obfuscation",
              children: "-enable-filename-obfuscation"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "代码压缩"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-compact",
              children: "-compact"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "console打印删除"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-remove-log",
              children: "-remove-log"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "名称缓存输出"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-print-namecache",
              children: "-print-namecache"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "名称缓存复用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-apply-namecache",
              children: "-apply-namecache"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "合并依赖模块选项"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-enable-lib-obfuscation-options",
              children: "-enable-lib-obfuscation-options"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开启字节码混淆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-enable-bytecode-obfuscation",
              children: "-enable-bytecode-obfuscation"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开启字节码混淆调试能力"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-enable-bytecode-obfuscation-debugging",
              children: "-enable-bytecode-obfuscation-debugging"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-disable-obfuscation",
      children: "-disable-obfuscation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭所有混淆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若配置该选项，则默认混淆以及所有已配置的混淆、保留选项的功能将全部失效。和关闭模块中build-profile.json5文件中混淆功能作用一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-enable-property-obfuscation",
      children: "-enable-property-obfuscation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启属性名称混淆，效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// test.ts\n// 混淆前：\nclass TestA {\n  static prop1: number = 0;\n}\nTestA.prop1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后：\nclass TestA {\n    static i: number = 0;\n}\nTestA.i;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若配置该选项，那么所有的属性名都会被混淆，除了下面场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在未开启-enable-export-obfuscation选项的情况下，被import/export直接导入或导出的类、对象的属性名不会被混淆。例如下面例子中的属性名data不会被混淆。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// example.ts\nexport class MyClass01 {\n  data1: string;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkUI组件中的属性名不会被混淆。例如下面例子中的message和data不会被混淆。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// example.ets\n@Component struct MyExample {\n  @State message: string = \"hello\";\n  data: number[] = [];\n\n  build() {\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["被", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section-keep-property-name",
            children: "保留选项指定的属性名"
          }), "不会被混淆。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SDK API列表中的属性名不会被混淆。SDK API列表是构建时从SDK中自动提取出来的一个名称列表，其缓存文件为systemApiCache.json，路径为工程目录下build/default/cache/{...}/release/obfuscation中。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "字符串字面量属性名不会被混淆。例如下面例子中的firstName和personAge不会被混淆。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let person = {\"firstName\": \"abc\"};\nperson[\"personAge\"] = 22;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注解成员名不会被混淆。例如下面例子中的authorName和revision不会被混淆。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@interface MyAnnotation1 {\n  authorName: string;\n  revision: number;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-enable-string-property-obfuscation",
      children: "-enable-string-property-obfuscation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启字符串属性混淆，仅在已开启属性混淆的基础上生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若想混淆字符串字面量属性名，需要在已配置-enable-property-obfuscation的基础上使用。例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-enable-property-obfuscation\n-enable-string-property-obfuscation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据上述配置，下面例子中的\"firstName\"和\"personAge\"混淆效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let person = {\"firstName\": \"abc\"};\nperson[\"personAge\"] = 22;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后：\nlet person = {\"a\": \"abc\"};\nperson[\"b\"] = 22;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用该选项时，需要注意以下事项："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        })
      }), " 如果字符串属性名包含特殊字符（除了a-z、A-Z、0-9、_之外的字符），例如let obj = {\"\\n\": 123, \"\": 4, \" \": 5}，建议不要开启-enable-string-property-obfuscation选项，因为可能无法通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section-keep-property-name",
        children: "保留选项"
      }), "来指定保留这些名字。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        })
      }), " SDK API的属性白名单中不包含声明文件中使用的字符串常量值，例如示例中的字符串'ohos.want.action.home'未包含在属性白名单中："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// SDK API文件@ohos.app.ability.wantConstant片段：\nexport enum Params {\n  ACTION_HOME = 'ohos.want.action.home'\n}\n// 开发者源码示例：\nlet params = obj1['ohos.want.action.home'];\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["因此在开启了-enable-string-property-obfuscation选项时，如果想保留代码中使用的SDK API字符串常量的属性不被混淆，例如obj['ohos.want.action.home']，那么需要使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section-keep-property-name",
        children: "-keep-property-name选项"
      }), "保留。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-enable-toplevel-obfuscation",
      children: "-enable-toplevel-obfuscation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启顶层作用域名称混淆，效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆前：\nlet count = 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后：\nlet s = 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若配置该选项，那么所有的顶层作用域的名称都会被混淆，除了下面场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在未开启-enable-export-obfuscation选项的情况下,被import/export直接导入或导出的名称不会被混淆。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前文件找不到声明的名称不会被混淆。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["被", (0,jsx_runtime.jsx)(_components.a, {
          href: "#section-keep-global-name",
          children: "保留选项"
        }), "指定的顶层作用域名称不会被混淆。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SDK API列表中的顶层作用域名称不会被混淆。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-enable-export-obfuscation",
      children: "-enable-export-obfuscation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启直接导入或导出的名称混淆，效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆前：\nnamespace ns {\n  export type customT = string;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后：\nnamespace ns {\n    export type h = string;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若配置该选项，那么非顶层作用域中导入或导出的名称会被混淆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "若想混淆顶层作用域中导入或导出的名称，需要在已配置-enable-toplevel-obfuscation的基础上使用。"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "若想混淆导入或导出的属性名，需要在已配置-enable-property-obfuscation的基础上使用。"
        })
      }), " 开启此选项时，以下特殊场景不会被混淆："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "远程HAR（真实路径在oh_modules中的包）中导出的名称和属性名不会被混淆。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["被", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9",
          children: "保留选项"
        }), "指定的名称与属性名不会被混淆。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SDK API列表中的名称不会被混淆。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-enable-filename-obfuscation",
      children: "-enable-filename-obfuscation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启文件/文件夹名称混淆，效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆前：\nimport * as m from '../test1/test2';\nimport { foo } from '../test1/test2';\n// ...\nconst module = import('../test1/test2');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后：\nimport * as m from '../a/b';\nimport { foo } from '../a/b';\nconst module = import('../a/b');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若配置该选项，那么所有的文件/文件夹名称都会被混淆，除了下面场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "oh-package.json5文件中'main'、'types'字段配置的文件/文件夹名称不会被混淆。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模块内module.json5文件中'srcEntry'字段配置的文件/文件夹名称不会被混淆。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["被", (0,jsx_runtime.jsx)(_components.a, {
          href: "#section-keep-file-name",
          children: "-keep-file-name"
        }), "指定的文件/文件夹名称不会被混淆。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "非ECMAScript模块引用方式，不会被混淆（例如：const module = require('./module')）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "非路径引用方式，例如import module from 'json5'中的json5不会被混淆。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(470531)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于系统会在应用运行时加载某些指定的文件，针对这类文件，开发者需要手动在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section-keep-file-name",
        children: "-keep-file-name"
      }), "选项中配置相应的白名单，防止指定文件被混淆，导致运行失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译入口、Ability组件、Worker多线程，这三种不能混淆的文件名在DevEco Studio 5.0.3.500版本已被自动收集进白名单中，无需再手动配置，其它不能混淆文件名的场景仍需开发者手动配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-compact",
      children: "-compact"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除不必要的空格符和所有的换行符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若配置该选项，所有代码会被压缩到一行。效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// test.ts\n// 混淆前：\nclass TestA {\n  static prop1: number = 0;\n}\nTestA.prop1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后：\nclass TestA { static prop1: number = 0; } TestA.prop1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(26744)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "release模式构建的应用栈信息仅包含代码行号，不包含列号，因此-compact功能开启后无法依据报错栈中的行号定位到源码具体位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-remove-log",
      children: "-remove-log"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除对console.*语句的调用，要求console.*语句返回值未被调用，效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆前：\nif (flag) {\n  console.info(\"hello\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后：\nif (flag) {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若配置该选项，以下场景中的console.*语句会被删除："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文件顶层的调用"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "console.info(\"in tolevel\");\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "代码块中的调用"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function foo1() {\n  console.info('in block');\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "module或namespace中的调用"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// example.ts\nnamespace ns {\n  console.info('in ns');\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "switch语句中的调用"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "switch (value) {\n  case 1:\n    console.info(\"in switch case\");\n    break;\n  default:\n    console.info(\"default\");\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-print-namecache",
      children: "-print-namecache"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将名称缓存保存到指定的文件路径filepath中，名称缓存包含名称混淆前后的映射。其中，filepath为必选参数，支持相对路径和绝对路径，相对路径的起始位置为混淆配置文件的当前目录。filepath参数中的文件名请以.json为后缀。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-print-namecache\n./customCache/nameCache.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(461206)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每次全量构建工程时都会生成新的namecache.json文件，因此开发者每次发布新版本时都要注意保存一个该文件的副本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-apply-namecache",
      children: "-apply-namecache"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "复用指定的名称缓存文件filepath。其中，filepath为必选参数，支持相对路径和绝对路径，相对路径的起始位置为混淆配置文件的当前目录。filepath参数中的文件名请以.json为后缀。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该选项应该在增量编译场景中被使用。开启该选项后，名称将会被混淆成缓存映射对应的名称，若找不到对应的缓存，则会被混淆成新的随机名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-apply-namecache\n./customCache/nameCache.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认情况下，DevEco Studio会在临时的缓存目录中保存缓存文件，并且在增量编译场景中自动应用该缓存文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "缓存目录：build/default/cache/{...}/release/obfuscation。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-enable-lib-obfuscation-options",
      children: "-enable-lib-obfuscation-options"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置此开关后，依赖模块的混淆选项将被合并到当前编译模块的混淆配置中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["混淆配置分为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B7%B7%E6%B7%86%E9%80%89%E9%A1%B9",
        children: "混淆选项"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9",
        children: "保留选项"
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认情况下，生效的混淆配置为当前编译模块的混淆配置与依赖模块的保留选项的合并结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启用该开关后，生效的混淆配置为当前编译模块的混淆配置与依赖模块的混淆配置的合并结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["混淆规则合并逻辑参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B7%B7%E6%B7%86%E8%A7%84%E5%88%99%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5",
        children: "混淆规则合并策略"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-enable-bytecode-obfuscation",
      children: "-enable-bytecode-obfuscation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字节码混淆控制开关。默认不开启。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-enable-bytecode-obfuscation-debugging",
      children: "-enable-bytecode-obfuscation-debugging"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["控制字节码混淆是否输出调试信息，开启后会生成混淆日志，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-guide#%E6%9F%A5%E7%9C%8B%E6%B7%B7%E6%B7%86%E6%95%88%E6%9E%9C",
        children: "混淆效果"
      }), "，默认不开启。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要在已配置-enable-bytecode-obfuscation的基础上使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "保留选项",
      children: "保留选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "已有保留选项汇总",
      children: "已有保留选项汇总"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "选项"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "指定保留属性名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-keep-property-name",
              children: "-keep-property-name"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "指定保留顶层作用域或导入导出元素名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-keep-global-name",
              children: "-keep-global-name"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "指定保留文件/文件夹名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-keep-file-name",
              children: "-keep-file-name"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "指定保留声明文件中的所有名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-keep-dts",
              children: "-keep-dts"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "指定保留源码文件中的所有名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-keep",
              children: "-keep"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-keep-property-name",
      children: "-keep-property-name"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["指定想保留的属性名，支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%90%8D%E7%A7%B0%E7%B1%BB%E9%80%9A%E9%85%8D%E7%AC%A6",
        children: "名称类通配符"
      }), "。按如下方式进行配置，表示保留名称为age、firstName和lastName的属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-property-name\nage\nfirstName\nlastName\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用该选项时，需要注意以下事项："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        })
      }), " 该选项在开启-enable-property-obfuscation时生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        })
      }), " 属性白名单作用于全局。即代码中出现多个重名属性，只要与-keep-property-name配置白名单名称相同，均不会被混淆。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "哪些属性名应该被保留?"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.如果代码中通过字符串拼接、变量访问或使用defineProperty方法来定义对象属性，则这些属性名应被保留。例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// example.js\nlet obj = {x0: 0, x1: 0, x2: 0};\nfor (let i = 0; i <= 2; i++) {\n    console.info(obj['x' + i]); // x0, x1, x2应该被保留。\n}\n\nObject.defineProperty(obj, 'y', {}); // y应该被保留。\nObject.getOwnPropertyDescriptor(obj, 'y'); // y应该被保留。\nconsole.info(obj.y);\n\nobj.s1 = 'a';\nlet key = 's1';\nconsole.info(obj[key]); // key对应的变量值s应该被保留。\n\nobj.t1 = 'b';\nconsole.info(obj['t' + '1']); // t1应该被保留。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于如下的字符串常量形式的属性调用，可以选择性保留："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆配置：\n// -enable-property-obfuscation\n// -enable-string-property-obfuscation\nobj2.t = \"0\";\nconsole.info(obj2['t']); // 此时，'t'会被正确混淆，t可以选择性保留。\n\nobj2['v'] = \"0\";\nconsole.info(obj2['v']); // 此时，'v'会被正确混淆，v可以选择性保留。\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2.对于间接导出的场景，例如export MyClass和let a = MyClass; export {a};，如果不想混淆它们的属性名，那么需要使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9",
        children: "保留选项"
      }), "来保留这些属性名。另外，对于直接导出的类或对象的属性的属性名，例如下面例子中的firstName和personAge，如果不想混淆它们，那么也需要使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9",
        children: "保留选项"
      }), "来保留这些属性名。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// myclass.ts\nexport class MyClass02 {\n  person = {firstName: \"123\", personAge: 100};\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.在ArkTS/TS/JS文件中使用so库的API（例如示例中的foo）时，需手动保留API名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const add: (a: number, b: number) => number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// test.ets\nimport testNapi from 'libentry.so'\n// ...\ntestNapi.add(2, 3); // add需要保留，示例如：-keep-property-name foo。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4.JSON数据解析及对象序列化时，需要保留使用到的字段，例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 示例JSON文件结构(test.json)：\n/*\n * {\n *   \"jsonProperty\": \"value\",\n *   \"otherProperty\": \"value2\"\n * }\n */\nimport jsonData from './test.json';\n// ...\nlet jsonProp = jsonData.jsonProperty; // jsonProperty应该被保留\n\nclass jsonTest {\n  prop1: string = '';\n  prop2: number = 0;\n}\n\nlet obj = new jsonTest();\nconst jsonStr = JSON.stringify(obj); // prop1 和 prop2 会被混淆，应该被保留\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "5.使用到的数据库相关的字段，需要手动保留。例如，数据库键值对类型（ValuesBucket）中的属性："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const valueBucket: ValuesBucket = {\n  ID1: 'ID1', // ID1应该被保留。\n  NAME1: 'jack', // NAME1应该被保留。\n  AGE1: 20, // AGE1应该被保留。\n  SALARY1: 100 // SALARY1应该被保留。\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6.源码中自定义装饰器修饰了成员变量、成员方法、参数，同时其源码编译的中间产物为js文件时（如编译release源码HAR或者源码包含@ts-ignore、@ts-nocheck），这些装饰器所在的成员变量/成员方法名称需要被保留。这是由于ts高级语法特性转换为js标准语法时，将上述装饰器所在的成员变量/成员方法名称硬编码为字符串常量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function CustomDecorator(target: Object, propertyKey: string) {}\nfunction MethodDecorator(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {}\nfunction ParamDecorator(target: Object, propertyKey: string, parameterIndex: number) {}\n\nclass A {\n  // 1.成员变量装饰器。\n  @CustomDecorator\n  propertyName1: string = \"\"   // propertyName1 需要被保留。\n  // 2.成员方法装饰器。\n  @MethodDecorator\n  methodName1() {} // methodName1 需要被保留。\n  // 3.方法参数装饰器。\n  methodName2(@ParamDecorator param: string): void {} // methodName2 需要被保留。\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-keep-global-name",
      children: "-keep-global-name"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["指定要保留的顶层作用域及导入和导出元素的名称，支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%90%8D%E7%A7%B0%E7%B1%BB%E9%80%9A%E9%85%8D%E7%AC%A6",
        children: "名称类通配符"
      }), "。可按如下方式进行配置："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-global-name\nPerson\nprintPersonName\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "namespace中导出的名称也可以通过-keep-global-name选项保留，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// example.ts\nexport namespace Ns {\n  export const myAge = 18 // -keep-global-name myAge 保留变量myAge。\n  export function myFunc() {} // -keep-global-name myFunc 保留函数myFunc。\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(81329)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "-keep-global-name指定的白名单作用于全局。即代码中出现多个顶层作用域名称或者导出名称，只要与-keep-global-name配置的白名单名称相同，均不会被混淆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "哪些顶层作用域的名称应该被保留?"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.在JavaScript中全局变量是globalThis的属性。如果在代码中使用globalThis去访问全局变量，那么该变量名应该被保留。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "var a = 0;\nconsole.info(globalThis.a);  // a 应该被保留。\nfunction foo2(){}\nglobalThis.foo2();           // foo2 应该被保留。\nvar c = \"0\";\nconsole.info(c);             // c 可以被正确地混淆。\nfunction bar(){}\nbar();                      // bar 可以被正确地混淆。\nclass MyClass {}\nlet d = new MyClass();      // MyClass 可以被正确地混淆。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.当以命名导入的方式导入 so 库的 API时，若同时开启-enable-toplevel-obfuscation和-enable-export-obfuscation选项，需要手动保留API的名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/cpp/types/libentry/Index.d.ts。\ndeclare function testNapi2(): void;\ndeclare function testNapi3(): void;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// example.ets\nimport { testNapi2, testNapi3 as myNapi } from 'libentry.so' // testNapi2 和 testNapi3 应该被保留。\n// ...\ntestNapi2();\nmyNapi();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-keep-file-name",
      children: "-keep-file-name"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["指定要保留的文件/文件夹的名称（不需要写文件后缀），支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%90%8D%E7%A7%B0%E7%B1%BB%E9%80%9A%E9%85%8D%E7%AC%A6",
        children: "名称类通配符"
      }), "。例如："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-file-name\nindex\nentry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "哪些文件名应该被保留?"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1.在使用require引入文件路径时，由于ArkTS不支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-runtime/arkts-runtime-module/module-principle#commonjs%E6%A8%A1%E5%9D%97",
        children: "CommonJS"
      }), "语法，因此这种情况下路径应该被保留。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// example.js\nconst module1 = require('./file1'); // file1 应该被保留。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.对于动态导入的路径名，由于无法识别import函数中的参数是否为路径，因此这种情况下路径应该被保留。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// file2.ts\nexport function foo () {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// main.ts\nconst moduleName = './file2'         // moduleName对应的路径名file2应该被保留。\nconst module2 = import(moduleName)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3.在使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-cross-package",
        children: "跨包路由"
      }), "进行路由跳转时，传递给动态路由的路径应该被保留。动态路由提供系统路由表和自定义路由表两种方式。若采用自定义路由表进行跳转，配置白名单的方式与上述第二种动态引用场景一致。而若采用系统路由表进行跳转，则需要将模块下resources/base/profile/route_map.json5文件中pageSourceFile字段对应的路径添加到白名单中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"routerMap\": [\n    {\n      \"name\": \"PageOne\",\n      \"pageSourceFile\": \"src/main/ets/pages/directory/PageOne.ets\",  // 路径都应该被保留\n      \"buildFunction\": \"PageOneBuilder\",\n      \"data\": {\n        \"description\" : \"this is PageOne\"\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-keep-dts",
      children: "-keep-dts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定路径filepath的.d.ets文件中的名称（例如类名、属性名等）会被添加至-keep-global-name和-keep-property-name白名单中。请注意，filepath仅支持绝对路径，并且可以指定为一个目录。在这种情况下，该目录中所有.d.ets文件中的名称都将被保留。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-keep",
      children: "-keep"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "保留指定相对路径filepath中的所有名称（例如类名、属性名等）不被混淆。filepath可以是文件与文件夹，若是文件夹，则文件夹下的文件及子文件夹中文件都不混淆。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["filepath仅支持相对路径，./与../为相对于混淆配置文件所在目录，支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%B7%AF%E5%BE%84%E7%B1%BB%E9%80%9A%E9%85%8D%E7%AC%A6",
        children: "路径类通配符"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep\n./src/main/ets/fileName.ts   // fileName.ts中的名称不混淆\n../folder                    // folder目录下文件及子文件夹中的名称都不混淆\n../oh_modules/json5          // 引用的三方库json5里所有文件中的名称都不混淆\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用该选项时，需要注意以下事项："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        })
      }), " 被-keep filepath所保留的文件，其依赖链路上的文件中导出名称及其属性都会被保留。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        })
      }), " 该功能不影响文件名混淆-enable-filename-obfuscation的功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "保留选项支持的通配符",
      children: "保留选项支持的通配符"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "名称类通配符",
      children: "名称类通配符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "名称类通配符使用方式如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "通配符"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示例"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "匹配任意单个字符"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"AB?\"能匹配\"ABC\"等，但不能匹配\"AB\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "匹配任意数量的任意字符"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"*AB*\"能匹配\"AB\"、\"aABb\"、\"cAB\"、\"ABc\"等"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "保留所有以a开头的属性名称："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-property-name\na*\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "保留所有单个字符的属性名称："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-property-name\n?\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "保留所有属性名称："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-property-name\n*\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "路径类通配符",
      children: "路径类通配符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "路径类通配符使用方式如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "通配符"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示例"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "匹配任意单个字符，除了路径分隔符/。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"../a?\"能匹配\"../ab\"等，但不能匹配\"../a/\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "匹配任意数量的任意字符，除了路径分隔符/。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"../a*/c\"能匹配\"../ab/c\"，但不能匹配\"../ab/d/s/c\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "**"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "匹配任意数量的任意字符。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"../a**/c\"能匹配\"../ab/c\"，也能匹配\"../ab/d/s/c\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "!"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示非，只能写在某个路径最前端，用来排除用户配置的白名单中已有的某种情况。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"!../a/b/c.ets\"表示除\"../a/b/c.ets\"以外。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示路径../a/b/中所有文件夹（不包含子文件夹）中的c.ets文件不会被混淆："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep\n../a/b/*/c.ets\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示路径../a/b/中所有文件夹（包含子文件夹）中的c.ets文件不会被混淆："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep\n../a/b/**/c.ets\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示路径../a/b/中，除了c.ets文件以外的其它文件都不会被混淆。其中，!不可单独使用，只能用来排除白名单中已有的情况："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep\n../a/b/\n!../a/b/c.ets\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示路径../a/中的所有文件（不包含子文件夹）不会被混淆："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep\n../a/*\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示路径../a/下的所有文件夹（包含子文件夹）中的所有文件不会被混淆："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep\n../a/**\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示模块内的所有文件不会被混淆："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep\n./**\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用通配符时，需要注意以下事项："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1."
        })
      }), " 以上选项，不支持配置通配符*、?、!作其它含义使用。 例如："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class A {\n    '*'= 1\n}\n-keep-property-name\n*\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此时*表示匹配任意数量的任意字符，配置效果为所有属性名称都不混淆，而不是只有*属性不被混淆。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2."
        })
      }), " -keep选项中只允许使用/路径格式，不支持\\或\\。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "混淆规则合并策略",
      children: "混淆规则合并策略"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在编译一个模块时，默认情况下，生效的混淆规则为", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "当前编译模块的混淆规则"
        })
      }), "与", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "依赖模块混淆规则"
        })
      }), "的合并结果，具体规则如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "当前编译模块混淆规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指当前模块配置文件build-profile.json5中arkOptions.obfuscation.ruleOptions.files字段指定的混淆配置文件内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "依赖模块混淆规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据依赖模块的类型，混淆规则分为以下两个来源："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "本地HAR/HSP模块"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指该模块配置文件build-profile.json5中arkOptions.obfuscation.consumerFiles字段指定的混淆配置文件内容。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "远程HAR/HSP包"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指该远程HAR/HSP包中obfuscation.txt文件内容。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当构建HAP、HSP和HAR的时候，最终的混淆规则是下列文件的合并："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前构建模块的ruleOptions.files属性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "依赖的本地HSP的consumerFiles属性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "依赖的本地HAR的consumerFiles属性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "依赖的远程HAR和远程HSP中的obfuscation.txt文件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果构建的是HAR，生成的远程HAR中的obfuscation.txt是下列文件的合并："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自身的consumerFiles属性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "依赖的本地HSP的consumerFiles属性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "依赖的本地HAR的consumerFiles属性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "依赖的远程HAR和远程HSP中的obfuscation.txt文件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果构建的是HSP，生成的远程HSP中的obfuscation.txt仅包含自身的consumerFiles属性。如果构建的是HAP，则不会生成obfuscation.txt。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "混淆规则合并逻辑",
      children: "混淆规则合并逻辑"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "混淆选项：使用或运算进行合并，即开关选项只要在参与合并的任意一个规则文件中存在，最终的合并结果中就会包含该开关选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "保留选项：合并时，对于白名单选项，其内容取并集。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "如果当前编译模块混淆配置未包含-enable-lib-obfuscation-options选项"
          })
        }), "：合并对象为当前模块的所有混淆规则与依赖模块混淆规则中的", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9",
          children: "保留选项"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "如果当前编译模块混淆配置包含-enable-lib-obfuscation-options选项"
          })
        }), "：合并对象为当前模块的所有混淆规则与依赖模块的所有混淆规则。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当consumerFiles指定的混淆配置文件中包含以下混淆规则时，这些混淆规则会被合并到远程HAR和远程HSP的obfuscation.txt文件中，而其他混淆规则不会。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆选项\n-enable-property-obfuscation\n-enable-string-property-obfuscation\n-enable-toplevel-obfuscation\n-remove-log\n// 保留选项\n-keep-property-name\n-keep-global-name\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "HSP和HAR中混淆注意事项"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果consumerFiles指定的混淆配置文件中包含上述混淆选项，当其他模块依赖该模块的时候，这些混淆选项会与主模块的混淆规则合并，从而影响主模块。因此不建议开发者在consumer-rules.txt文件中配置混淆选项，建议仅配置保留选项。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果在consumerFiles指定的混淆配置文件中添加-keep-dts选项，会被转换成-keep-global-name和-keep-property-name。"
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
461206(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
26744(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
659077(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797898-8a77e9356811ae62d2a52281de78d16c.png");

},
470531(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
81329(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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