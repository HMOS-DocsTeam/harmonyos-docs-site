"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["110553"], {
930744(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_compilation_tool_chain_arkts_arkguard_source_obfuscation_source_obfuscation_md_bfe_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-compilation-tool-chain-arkts-arkguard-source-obfuscation-source-obfuscation-md-bfe.json
var site_docs_arkts_arkts_compilation_tool_chain_arkts_arkguard_source_obfuscation_source_obfuscation_md_bfe_namespaceObject = JSON.parse('{"id":"arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation/source-obfuscation","title":"ArkGuard混淆原理及功能","description":"术语清单","source":"@site/docs/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation/source-obfuscation.md","sourceDirName":"arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation","slug":"/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation/","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"ArkGuard混淆原理及功能","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/source-obfuscation","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkGuard源码混淆工具概述","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-overview/"},"next":{"title":"ArkGuard混淆开启指南","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation/source-obfuscation.md


const frontMatter = {
	title: 'ArkGuard混淆原理及功能',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/source-obfuscation',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkGuard混淆原理及功能';

const assets = {

};



const toc = [{
  "value": "术语清单",
  "id": "术语清单",
  "level": 2
}, {
  "value": "混淆能力范围",
  "id": "混淆能力范围",
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
  "value": "默认混淆",
  "id": "默认混淆",
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
  "value": "-remove-comments",
  "id": "-remove-comments",
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
  "value": "-print-kept-names",
  "id": "-print-kept-names",
  "level": 3
}, {
  "value": "-extra-options strip-language-default",
  "id": "-extra-options-strip-language-default",
  "level": 3
}, {
  "value": "-extra-options strip-system-api-args",
  "id": "-extra-options-strip-system-api-args",
  "level": 3
}, {
  "value": "-extra-options strip-not-compiled-module-name",
  "id": "-extra-options-strip-not-compiled-module-name",
  "level": 3
}, {
  "value": "-keep-parameter-names",
  "id": "-keep-parameter-names",
  "level": 3
}, {
  "value": "-enable-lib-obfuscation-options",
  "id": "-enable-lib-obfuscation-options",
  "level": 3
}, {
  "value": "-use-keep-in-source",
  "id": "-use-keep-in-source",
  "level": 3
}, {
  "value": "-keep-object-props",
  "id": "-keep-object-props",
  "level": 3
}, {
  "value": "-remove-nosideeffects-calls",
  "id": "-remove-nosideeffects-calls",
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
  "value": "-keep-comments",
  "id": "-keep-comments",
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
  "level": 3
}, {
  "value": "混淆规则合并策略",
  "id": "混淆规则合并策略",
  "level": 2
}, {
  "value": "混淆各功能起始API版本",
  "id": "混淆各功能起始api版本",
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
        id: "arkguard混淆原理及功能",
        children: "ArkGuard混淆原理及功能"
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
            children: "将代码中的类名、方法名、变量名、属性名、export变量名等标识符修改为简洁且无意义的修饰符。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "混淆能力范围",
      children: "混淆能力范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "适用语言",
      children: "适用语言"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkGuard支持ArkTS、TS和JS语言，不支持C/C++、JSON、资源文件等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "混淆能力",
      children: "混淆能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkGuard支持名称混淆、代码压缩和注释删除的基础混淆功能，不支持控制流混淆、数据混淆等高级混淆功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["名称混淆主要提供", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "名称重命名"
        })
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "配置保留白名单"
        })
      }), "的能力。"]
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
      children: "源码混淆工具在处理不同编程语言时，其类型分析机制、混淆策略和执行效率都会因目标语言的特性而呈现差异。以业界常用的ProGuard为例，其主要面向Java这类强类型语言进行混淆。由于强类型语言具有严格的类型系统，每个类型都有明确的定义来源。这种特性使得混淆过程中的类型关系追踪和处理更为精确，从而大幅减少了需要配置保留规则的场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相比之下，ArkGuard混淆工具主要针对JS、TS和ArkTS语言。JS支持运行时动态修改对象和函数，而混淆是在编译阶段进行的静态处理，这种差异可能导致混淆后的名称在运行时无法被正确解析，进而引发运行时异常。TS和ArkTS虽然引入了静态类型系统，但采用了结构性类型机制，即具有相同结构的不同命名类型会被视为等价类型。因此，在TS和ArkTS中仍然无法追溯类型的确切来源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于这些特性，使用ArkGuard时需要对更多语法场景进行白名单配置，同时，ArkGuard采用全局生效的属性保留机制，根据白名单统一保留所有同名属性，无法针对特定类型精确保留。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假设ArkGuard支持配置指定类型的白名单。配置类A1作为白名单，A1的属性prop1在白名单中，而A2的prop1属性不在白名单中。a2作为参数传入test函数，并在test函数内访问其属性。混淆前，可以正常访问prop1属性；混淆后，A1的属性prop1未被混淆，但A2的prop1属性被混淆，导致test函数中访问prop1属性时功能异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此，ArkGuard不支持针对特定类型的精确保留配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆前：\n// ArkGuardAbility.ts\nclass A1 {\n  prop1: string = '';\n}\n\nclass A2 {\n  prop1: string = '';\n}\n\nfunction test(input: A1) {\n  console.info(input.prop1);\n}\n\nlet a2 = new A2();\na2.prop1 = 'prop a2';\ntest(a2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后\n// example.ts\nclass A1 {\n  prop1: string = '';\n}\n\nclass A2 {\n  a: string = '';\n}\n\nfunction test(input: A1) {\n  console.info(input.prop1);\n}\n\nlet a2 = new A2();\na2.a = 'prop a2';\ntest(a2);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "综上所述，开发者应了解语言差异对混淆效果的影响，尽量使用不重复的名称，优化混淆效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2.安全保证的有限性"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与其他源码混淆工具类似，混淆只能在一定程度上增加逆向工程的难度，并不能完全阻止逆向工程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["并且，由于ArkGuard混淆工具仅支持基础混淆功能，开发者不应只依赖ArkGuard来保证应用的安全性，对于源码安全有高要求的开发者，应考虑使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/code-protect",
        children: "应用加密"
      }), "、安全加固等安全措施来保护代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "混淆机制及流程",
      children: "混淆机制及流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下图为应用编译的简要流程图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(619971)/* ["default"] */.A) + "",
        width: "1452",
        height: "257"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以在模块的build-profile.json5配置文件中开启混淆功能，详细参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-guide",
        children: "ArkGuard混淆开启指南"
      }), "，从而在编译打包的过程中自动对源码进行混淆处理。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["混淆过程中，首先读取混淆开关。在开关开启的情况下，解析混淆配置文件，并依据", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B7%B7%E6%B7%86%E8%A7%84%E5%88%99%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5",
        children: "混淆规则合并策略"
      }), "合并混淆规则。然后按照混淆规则对经过语法转换的中间文件进行混淆，最后将混淆后的中间文件落盘至build目录。开发者可以通过build目录中混淆后的产物，确认混淆效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用混淆功能前，建议开发者先通过文档了解", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#%E6%B7%B7%E6%B7%86%E9%80%89%E9%A1%B9",
        children: "混淆选项的能力"
      }), "与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9",
        children: "混淆选项所需要保留白名单的场景"
      }), "，再根据开发需求选择对应的混淆功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "混淆选项",
      children: "混淆选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "已有混淆选项汇总",
      children: "已有混淆选项汇总"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "默认混淆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启混淆后生效"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
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
            children: "开启属性名称混淆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-enable-property-obfuscation",
              children: "-enable-property-obfuscation"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开启字符串属性名称混淆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-enable-string-property-obfuscation",
              children: "-enable-string-property-obfuscation"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开启顶层作用域名称混淆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-enable-toplevel-obfuscation",
              children: "-enable-toplevel-obfuscation"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开启导入导出名称混淆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-enable-export-obfuscation",
              children: "-enable-export-obfuscation"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开启文件名混淆"
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
            children: "声明文件注释删除"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-remove-comments",
              children: "-remove-comments"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除console.*语句"
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
            children: "输出未混淆名单"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-print-kept-names",
              children: "-print-kept-names"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "缩减语言预置白名单"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-extra-options-strip-language-default",
              children: "-extra-options strip-language-default"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "缩减系统预置白名单"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-extra-options-strip-system-api-args",
              children: "-extra-options strip-system-api-args"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不保留未参与编译模块名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-extra-options-strip-not-compiled-module-name",
              children: "-extra-options strip-not-compiled-module-name"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "保留声明文件参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-keep-parameter-names",
              children: "-keep-parameter-names"
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
            children: "通过注释在源码中标记白名单"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-use-keep-in-source",
              children: "-use-keep-in-source"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "保留对象字面量属性名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-keep-object-props",
              children: "-keep-object-props"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "删除指定的方法调用语句"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-remove-nosideeffects-calls",
              children: "-remove-nosideeffects-calls"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "默认混淆",
      children: "默认混淆"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启混淆后默认生效，仅混淆局部变量名及参数名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-disable-obfuscation",
      children: "-disable-obfuscation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭所有混淆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置该选项后，默认混淆（仅混淆局部变量及参数名）和其他已配置的混淆选项、保留选项将全部失效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-enable-property-obfuscation",
      children: "-enable-property-obfuscation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(251839)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开启该选项后，在需要", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section-keep-property-name",
        children: "手动配置白名单的场景中"
      }), "，请将对应的属性名配置到白名单中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置该选项后，开启属性名称混淆，效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆前：\nclass TestA {\n  static prop1: number = 0;\n}\nTestA.prop1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后：\nclass TestA {\n  static i: number = 0;\n}\nTestA.i;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置该选项后，所有属性名将被混淆，以下场景除外："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在未开启-enable-export-obfuscation选项的情况下，被import/export直接导入或导出的类或对象的属性名不会被混淆。例如，下面例子中的属性名data1不会被混淆。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkGuardAbility.ts\nexport class MyClass01 {\n  data1: string;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkUI组件中的属性名不会被混淆。例如，下面例子中的message和data不会被混淆。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkGuardAbility.ets\n@Component struct MyExample {\n  @State message: string = \"hello\";\n  data: number[] = [];\n  // ...\n  build() {\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["被", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section-keep-property-name",
            children: "保留选项"
          }), "指定的属性名不会被混淆。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SDK API列表中的属性名不会被混淆。SDK API列表是构建时从SDK中自动提取出来的一个名称列表。其缓存文件为systemApiCache.json，路径为工程目录/build/default/cache/{...}/release/obfuscation。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "字符串字面量属性名不会被混淆，并且与其同名的属性名也不会被混淆。例如，下面例子中的exampleName和exampleAge不会被混淆。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 混淆前：\n// ArkGuardAbility.ts\nlet person = {\"exampleName\": \"abc\"};\nperson[\"exampleAge\"] = 22;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let person1 = {exampleName: \"aaa\"};\nlet name = person1.exampleName;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注解成员名不会被混淆。例如，下面例子中的authorName和revision不会被混淆。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@interface MyAnnotation1 {\n  authorName: string;\n  revision: number = 1;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-enable-string-property-obfuscation",
      children: "-enable-string-property-obfuscation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若要混淆字符串字面量属性名，需在已启用-enable-property-obfuscation的情况下使用。例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-enable-property-obfuscation\n-enable-string-property-obfuscation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据上述配置，exampleName和exampleAge的混淆效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆前：\n// ArkGuardAbility.ts\nlet person = {\"exampleName\": \"abc\"};\nperson[\"exampleAge\"] = 22;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后：\n// example.ts\nlet person = {\"a\": \"abc\"};\nperson[\"b\"] = 22;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用该选项时，需要注意以下事项："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果代码里面有字符串属性名包含特殊字符（除了a-z、A-Z、0-9、_之外的字符），例如let obj = {\"\\n\": 123, \"\": 4, \" \": 5}，建议不要开启-enable-string-property-obfuscation选项，因为可能无法通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section-keep-property-name",
            children: "-keep-property-name"
          }), "来保留这些名称。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SDK API的属性白名单中不包含声明文件中使用的字符串常量值，例如示例中的字符串'ohos.want.action.home'未包含在属性白名单中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// SDK API文件@ohos.app.ability.wantConstant片段：\nexport enum Params {\n  ACTION_HOME = 'ohos.want.action.home'\n}\n\n// 开发者源码示例：\nconst obj1: Record<string, string> = {\n  'ohos.want.action.home': 'value'\n}\nlet params = obj1['ohos.want.action.home'];\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["因此，在开启-enable-string-property-obfuscation选项后，如果希望保留代码中使用的SDK API字符串常量的属性不被混淆，例如obj['ohos.want.action.home']，可以使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section-keep-property-name",
            children: "-keep-property-name"
          }), "选项进行保留。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-enable-toplevel-obfuscation",
      children: "-enable-toplevel-obfuscation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(311103)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开启该选项后，在需要", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section-keep-global-name",
        children: "手动配置白名单的场景中"
      }), "，请将对应的顶层作用域名称配置到白名单中。"]
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
      children: "配置该选项后，所有顶层作用域的名称都会被混淆，以下场景除外："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在未开启-enable-export-obfuscation选项的情况下，被import/export直接导入或导出的名称不会被混淆。"
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
        children: "// 混淆后：\nnamespace ns {\n  export type h = string;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若仅配置该选项，那么只有非顶层作用域中导入或导出的名称会被混淆。", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "若想混淆顶层作用域中导入或导出的名称，需要在已配置-enable-toplevel-obfuscation的基础上使用；若想混淆导入或导出的属性名，需要在已配置-enable-property-obfuscation的基础上使用。"
        })
      }), " 开启此选项时，以下特殊场景不会被混淆："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "远程HAR(真实路径在oh_modules中的包)中导出的名称和属性名不会被混淆。"
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
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(321214)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开启该选项后，在需要", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section-keep-file-name",
        children: "手动配置白名单的场景中"
      }), "，请将对应的文件夹/文件名称配置到白名单中。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启文件/文件夹名称混淆，效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// FilenameObfuscationTest/FilenameObfuscationTest.ts\nexport function foo () {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ArkGuardAbility.ts\n// 混淆前：\nimport * as m from '../FilenameObfuscationTest/FilenameObfuscationTest';\nimport { foo } from '../FilenameObfuscationTest/FilenameObfuscationTest';\n// ...\nm.foo();\nfoo();\nasync function func1() {\n  const modules = await import('../FilenameObfuscationTest/FilenameObfuscationTest');\n  const result = modules.foo();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// example.ts\n// 混淆后：\nimport * as m from \"@normalized:N&&&entry/src/main/ets/c/d&\";\nimport { foo } from \"@normalized:N&&&entry/src/main/ets/c/d&\";\nm.foo();\nfoo();\nasync function func() {\n    const f = await import(\"@normalized:N&&&entry/src/main/ets/c/d&\");\n    const g = f.foo();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置该选项后，所有文件和文件夹名称都将被混淆，以下场景除外："
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
        children: "非ECMAScript模块引用方式（例如：const module = require('./module')）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "非路径引用方式，例如import module from 'json5'中的json5不会被混淆。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(397253)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于系统会在应用运行时加载某些指定的文件，针对这类文件，开发者需要手动在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section-keep-file-name",
        children: "-keep-file-name"
      }), "选项中配置相应的白名单，防止指定文件被混淆，导致运行失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译入口、Ability组件、Worker多线程，这三种不能混淆的文件名在DevEco Studio 5.0.3.500及以上版本已被自动收集进白名单中，无需再手动配置，其它不能混淆文件名的场景仍需开发者手动配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-compact",
      children: "-compact"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除在代码中不参与语法结构、不影响程序运行的空格符和所有的换行符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置该选项后，所有代码会被压缩到一行。效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆前：\nclass TestA {\n  static prop1: number = 0;\n}\nTestA.prop1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后：\nclass TestA { static prop1: number = 0; } TestA.prop1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(273801)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "release模式构建的应用栈信息仅包含代码行号，不包含列号，因此-compact功能开启后无法依据报错栈中的行号定位到源码具体位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-remove-comments",
      children: "-remove-comments"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除编译生成的声明文件中的JsDoc注释，效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "混淆前："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/**\n * @todo\n */\ndeclare let count1: number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "混淆后："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "declare let count: number;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section-keep-comments",
        children: "-keep-comments"
      }), "配置保留声明文件中的JsDoc注释。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(98037)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "编译生成的源码文件中的注释默认全部删除，不支持保留配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-remove-log",
      children: "-remove-log"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "删除对console.*语句的调用，要求console.*语句的返回值未被使用。效果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆前：\nfunction add(a: number, b: number) {\n  console.info(\"result\", a + b);\n  return a + b;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆后：\nfunction add(a: number, b: number) {\n    return a + b;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若配置该选项，以下场景中的console.*语句将被删除。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文件顶层的调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "console.info(\"in tolevel\");\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "代码块中的调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function foo1() {\n  console.info('in block');\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "module或namespace中的调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkGuardAbility.ts\nnamespace ns {\n  console.info('in ns');\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "switch语句中的调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function getDayName(day: number): string {\n  switch (day) {\n    case 1:\n      console.info(\"Matched case 1: 星期一\");\n      return \"星期一\";\n    case 2:\n      console.info(\"Matched case 2: 星期二\");\n      return \"星期二\";\n    default:\n      console.error(\"No matching case for day:\", day);\n      return \"无效的日期\";\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-print-namecache",
      children: "-print-namecache"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将名称缓存保存到指定的文件路径filepath中，名称缓存包含名称混淆前后的映射。其中，filepath为必选参数，支持相对路径和绝对路径，相对路径的起始位置为混淆配置文件的当前目录。filepath参数中的文件名请使用.json为后缀。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-print-namecache\n./customCache/nameCache.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(378763)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "每次全量构建工程都会生成新的nameCache.json文件，因此发布新版本时需保存该文件的副本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-apply-namecache",
      children: "-apply-namecache"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "复用指定的名称缓存文件filepath。filepath为必选参数，支持相对路径和绝对路径。相对路径的起始位置为混淆配置文件的当前目录。filepath参数中的文件名请以.json为后缀。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该选项适用于增量编译。开启后，名称将根据缓存文件映射进行混淆，新添加的第三方依赖库可能会导致混淆白名单发生改变，进而影响混淆结果。如果找不到对应的缓存，名称将被混淆为新的随机名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-apply-namecache\n./customCache/nameCache.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认情况下，DevEco Studio在临时缓存目录中保存缓存文件，并在增量编译时自动应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "缓存目录：build/default/cache/{...}/release/obfuscation。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-print-kept-names",
      children: "-print-kept-names"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该选项支持输出未混淆名单和全量白名单，并支持配置filepath。filepath为可选参数，仅支持相对路径。相对路径的起始位置为混淆配置文件的当前目录。filepath参数中的文件名请以.json为后缀。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持输出未混淆名单和全量白名单。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当filepath参数缺省时，未混淆名单（keptNames.json）和全量白名单（whitelist.json）默认输出到缓存路径build/default/cache/{...}/release/obfuscation中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若开发者配置了filepath参数，未混淆名单将输出到filepath参数指定的路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一次全量编译流程中收集到的白名单分为以下七种："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(1)'sdk'：表示系统api。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(2)'lang'：表示语言中的关键字。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(3)'conf'：表示用户配置的保留选项中的白名单。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(4)'struct'：表示ArkUI的struct中的属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(5)'exported'：表示被导出的名称及其属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(6)'strProp'：表示字符串属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(7)'enum'：表示enum中的成员。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中，'sdk'类白名单单独输出到缓存路径build/default/cache/{...}/release/obfuscation/下的systemApiCache.json文件中，其他类型白名单则都输出到whitelist.json文件中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["未混淆名单（keptNames.json）中包含未混淆的名称及其原因。未混淆的原因包括：与SDK白名单重名、与语言白名单重名、与用户配置白名单重名、与结构体白名单重名、与导出白名单重名、与字符串属性白名单重名（未开启", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section-enable-string-property-obfuscation",
        children: "字符串属性混淆"
      }), "的情况下）以及与枚举白名单重名。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用该选项时，需要注意以下事项："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在编译HAR模块且开启属性混淆的情况下，'enum'白名单将收集enum中的成员名称。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "enum Test1 {\n  member1,\n  member2\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "enum白名单内容为['member1', 'member2']。这是由于历史版本的har模块的编译中间产物为js文件，在js文件中enum类型会转换为一个立即执行函数，而enum成员会被转化为一个字符串属性和一个字符串常量。因此，为了保证开启属性混淆的情况下功能正常，需要将enum成员名称收集为白名单。在编译新版字节码har模块时，此特性仍然被保留。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在编译HAP/HSP/字节码HAR模块且开启属性混淆的情况下，当enum的成员被初始化时，'enum'白名单会收集初始化表达式中包含的变量名称。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkGuardAbility.ts\nlet outdoor = 1;\nenum Test2 {\n  member1,\n  member2 = outdoor + member1 + 2\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中，编译HAP/HSP模块时，enum白名单内容为['outdoor', 'member1']；编译字节码HAR模块时，enum白名单内容为['outdoor', 'member1', 'member2']。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-extra-options-strip-language-default",
      children: "-extra-options strip-language-default"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["混淆的预置语言白名单中", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "默认包含了typescript的系统接口中关于dom、webworker、scriphost等API的名称以及Web API的名称"
        })
      }), "。如果开发者源码中的属性与这部分名称重名，混淆工具会对这些属性进行保留。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者需要混淆这部分代码，需要配置-extra-options strip-language-default选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持此选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可通过以下方式确定混淆工具默认保留的API的具体减少范围："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启-print-kept-names选项，对比开启和关闭-extra-options strip-language-default选项时，全量白名单（whitelist.json）中lang字段的内容差异，该差异即为预置语言白名单的具体减少范围。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-extra-options-strip-system-api-args",
      children: "-extra-options strip-system-api-args"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前混淆的系统API白名单中", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "默认包含了系统API中的局部变量名称"
        })
      }), "，且系统API白名单默认对开发者源码中的局部变量生效。如果开发者源码中的属性与系统API中的局部变量重名或源码中的局部变量与系统API白名单重名，混淆工具会对这部分属性和局部变量名称进行保留。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要混淆这部分代码时，配置-extra-options strip-system-api-args选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持此选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统API白名单文件（systemApiCache.json）的ReservedLocalNames、ReservedPropertyNames和ReservedGlobalNames字段可以查看系统API白名单的具体内容。系统API白名单文件位于模块目录下build/default/cache/{...}/release/obfuscation路径中，记录了SDK中的接口与属性名称，与其重名的源码不会被混淆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可通过以下方式确定系统白名单减少的具体范围："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过对比开启和关闭-extra-options strip-system-api-args选项时系统API白名单文件（systemApiCache.json）中ReservedLocalNames和ReservedPropertyNames字段的内容差异，该差异即为系统白名单的具体减少范围，ReservedGlobalNames字段的内容不会产生变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-extra-options-strip-not-compiled-module-name",
      children: "-extra-options strip-not-compiled-module-name"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前混淆的白名单中", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "默认包含了项目中所有的模块名称"
        })
      }), "。如果开发者源码中的文件名与模块名称重名，混淆工具会保留这些文件名。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可通过配置-extra-options strip-not-compiled-module-name选项来混淆与未参与编译的模块同名的文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，支持此选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启该选项后，仅编译的模块及其直接和间接依赖的本地源码Har模块名称加入混淆白名单，其余模块名称不会被保留。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用-extra-options选项的方法如下"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在混淆配置文件中添加-extra-options前缀和选项，且前缀与选项之间不能包含其他内容。支持开启单个选项或同时开启多个选项。例如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用-extra-options前缀开启单个选项，有如下2种使用方式："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 方式一\n-extra-options\nstrip-language-default\n\n# 方式二\n-extra-options strip-language-default\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用-extra-options前缀同时开启多个选项，有如下5种使用方式："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 方式一\n-extra-options strip-language-default, strip-system-api-args, strip-not-compiled-module-name\n\n# 方式二\n-extra-options strip-language-default strip-system-api-args strip-not-compiled-module-name\n\n# 方式三\n-extra-options\nstrip-language-default strip-system-api-args strip-not-compiled-module-name\n\n# 方式四\n-extra-options\nstrip-language-default\nstrip-system-api-args\nstrip-not-compiled-module-name\n\n# 方式五\n-extra-options strip-language-default\n-extra-options strip-system-api-args\n-extra-options strip-not-compiled-module-name\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-keep-parameter-names",
      children: "-keep-parameter-names"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持保留声明文件中对外接口的参数名称。开启此选项后，有如下效果："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于函数与类中成员方法，如果函数或方法名称没有被混淆，则保留其参数名称。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于类的构造器，如果类名没有被混淆，则保留构造器中的参数名称。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用该选项时，需要注意以下事项："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于非上述场景（如匿名函数）中的参数名称，无法通过此选项保留。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "源码文件中的参数名称仍然会被混淆，无法通过此选项保留。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-enable-lib-obfuscation-options",
      children: "-enable-lib-obfuscation-options"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置此开关后，依赖模块的混淆选项将被合并到当前编译模块的混淆配置中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持此选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["混淆配置分为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B7%B7%E6%B7%86%E9%80%89%E9%A1%B9",
        children: "混淆选项"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9",
        children: "保留选项"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "默认情况下"
          })
        }), "，生效的混淆配置为当前编译模块的混淆配置与依赖模块的保留选项的合并结果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "启用该开关后"
          })
        }), "，生效的混淆配置为当前编译模块的混淆配置与依赖模块的混淆配置的合并结果。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["混淆规则合并逻辑参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E6%B7%B7%E6%B7%86%E8%A7%84%E5%88%99%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5",
        children: "混淆规则合并策略"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-use-keep-in-source",
      children: "-use-keep-in-source"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 19开始，支持在.ts和.ets源码中通过以下两种注释标记到白名单中，不支持在声明文件中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// @KeepSymbol：用来标记需要保留的名称，通常写在代码上一行，表示该名称在编译时不会被混淆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// @KeepAsConsumer：用来标记需要保留的名称，通常写在代码上一行，表示该名称在编译时不会被混淆。在HAR/HSP模块中，被@KeepAsConsumer标记的名称还会生成在obfuscation.txt中；在HAP模块中，@KeepAsConsumer和@KeepSymbol的效果相同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(738188)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上两种标记均为注释，不可去除\"//\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "当前支持这两种标记的语法如下："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注：以下均以// @KeepSymbol为例，// @KeepAsConsumer支持的场景和// @KeepSymbol相同。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "类"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持对类中的以下语法进行标记："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类声明"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "构造函数"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "字段和方法"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 保留类名和所有成员名\n// @KeepSymbol\nclass MyClass02 {\n  prop01: string = \"prop\"; // MyClass02和prop01不会被混淆\n}\n\n// 通过构造函数保留类名\nclass MyClass03 {\n  prop02: string = \"prop\";\n  // @KeepSymbol\n  constructor() {}; // MyClass03不会被混淆\n}\n\n// 保留类名和指定的字段名和方法，类中MyClass04，prop03_1，method03_2不会被混淆\nclass MyClass04 {\n  // @KeepSymbol\n  prop03_1: string = \"prop\";\n  prop03_2: number = 1;\n  constructor() {};\n\n  method03_1(): void {};\n  // @KeepSymbol\n  method03_2(): void {};\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持对接口中的以下语法进行标记："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "接口声明"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "字段和方法"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 保留接口名和所有成员名，MyInterface01，name01，foo01不会被混淆\n// @KeepSymbol\ninterface MyInterface01 {\n  name01: string;\n  foo01(): void;\n}\n\n// 保留接口名和指定的字段和方法名，MyInterface02，name02不会被混淆\ninterface MyInterface02 {\n  // @KeepSymbol\n  name02: string;\n  foo02(): void;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "枚举"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持对枚举中的以下语法进行标记："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "枚举声明"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "枚举成员"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 保留枚举名和所有成员名，Color01，RED01，BLUE01不会被混淆\n// @KeepSymbol\nenum Color01 {\n  RED01,\n  BLUE01\n}\n\n// 保留枚举名指定的枚举成员名\nenum Color02 {\n  RED02,\n  // @KeepSymbol\n  BLUE02 // Color02，BLUE02不会被混淆\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "函数"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持对函数名进行标记。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 保留函数名，MyAdd不会被混淆\n// @KeepSymbol\nfunction MyAdd(a: number, b:number): number {\n  return a + b;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "命名空间"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持对命名空间名称进行标记。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 保留命名空间名以及内部直接导出的成员名称，MyNameSpace以及foo不会被混淆\n// @KeepSymbol\nnamespace MyNameSpace {\n  export function foo(){};\n  function bar(){};\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "全局变量"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅支持全局变量的标记，不支持局部变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 保留被标记的变量名，myVal不会被混淆\n// @KeepSymbol\nconst myVal = 1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注解"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅支持标记并保留注解声明。标记注解成员无效，注解成员本身不会被混淆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，支持标记注解声明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 保留被标记的注解声明，MyAnnotation不会被混淆\n// @KeepSymbol\n@interface MyAnnotation2 {\n  // 标记注解成员无效，authorName不会被收集到白名单\n  // @KeepSymbol\n  authorName: string;\n  revision: number = 1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "白名单添加规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "被标记的名称根据以下规则添加到混淆白名单，被KeepAsConsumer保留的名称还会生成到obfuscation.txt文件中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果该名称位于顶层作用域或被直接导出，则会被添加到-keep-global-name中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果该名称被直接导出，还会被添加到-keep-property-name中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果该名称是属性，还会被添加到-keep-property-name中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "局部变量名不会被添加到白名单（不会被保留）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// @KeepAsConsumer\nexport class MyClass05 {\n  prop01: string = \"prop\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述示例中MyClass会被添加到-keep-global-name和-keep-property-name中，prop01会被添加到-keep-property-name中，同时，该规则还会写入obfuscation.txt文件中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "-use-keep-in-source不支持的场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "暂不支持字符串属性、数字属性以及计算属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ArkGuardAbility.ts\nconst myMethodName = \"myMethod\";\n\n// 11，aa，myMethod不会被收集到白名单中\nclass MyClass06 {\n  // @KeepSymbol\n  11:11;\n  // @KeepSymbol\n  'aa':'aa';\n  // @KeepSymbol\n  [myMethodName](){}\n}\n\n// RED不会被收集到白名单中\nenum MyEnum {\n  // @KeepSymbol\n  'RED',\n  BLUE\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-keep-object-props",
      children: "-keep-object-props"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，支持使用-keep-object-props配置选项保留对象字面量中的属性名称和字符串属性名称。使用方法如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅开启属性混淆（-enable-property-obfuscation）时，配置保留对象字面量（-keep-object-props）选项后，对象字面量中的属性名称会被收集到白名单中，不会被混淆。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同时开启属性混淆（-enable-property-obfuscation）和字符串属性混淆（-enable-string-property-obfuscation）时，配置保留对象字面量（-keep-object-props）选项后，对象字面量中的属性名称和字符串属性名称会被收集到白名单中，不会被混淆。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(3236)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当在开启属性混淆选项或者同时开启属性混淆和字符串属性混淆前提下，使用-keep-object-props选项才生效，否则不生效。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "支持的场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持保留对象字面量的属性名称以及字符串属性名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// example.ts\nconst propertyObj = {\n    propertyKey1: 'value',\n    propertyKey2: {\n        propertyKey3: 'value'\n    }\n};\nconst stringPropertyObj = {\n    'stringPropertyKey1': 'Alice',\n    'stringPropertyKey2': {\n        'stringPropertyKey3': 'additional data'\n    }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启属性混淆时，如果配置了-keep-object-props选项，对于对象字面量中的属性名称，将不会被混淆。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "混淆配置选项文件obfuscation-rules.txt如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "-keep-object-props\n-enable-property-obfuscation\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启上述obfuscation-rules.txt配置文件的混淆选项后，示例代码中的属性名称propertyKey1、propertyKey2、propertyKey3将被收集到白名单中，不会被混淆。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启属性混淆和字符串属性混淆时，如果配置了-keep-object-props选项，对于对象字面量中的属性名称和字符串属性名称，将不会被混淆。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "混淆配置选项文件obfuscation-rules.txt如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "-keep-object-props\n-enable-property-obfuscation\n-enable-string-property-obfuscation\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启上述obfuscation-rules.txt配置文件的混淆选项后，示例代码中的属性名称propertyKey1、propertyKey2、propertyKey3以及字符串属性名称stringPropertyKey1、stringPropertyKey2、stringPropertyKey3将被收集到白名单中，不会被混淆。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "不支持的场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持非对象字面量的属性名场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// example.ts\n// -keep-object-props不生效场景：typeLiteral1、typeLiteral2、typeLiteral3、typeLiteral4、typeLiteral5均不为对象字面量中的属性，开启属性混淆或者同时开启属性混淆和字符串属性混淆的前提下，即使开启-keep-object-props选项也会被混淆。\ninterface TypeLiteralDemo {\n  typeLiteral1: {\n    typeLiteral2: number,\n    'typeLiteral3': string\n  },\n  typeLiteral4: string,\n  'typeLiteral5': string\n}\n\n// -keep-object-props不生效场景：Symbol.iterator、dynamic、Property均为复杂的计算属性，在开启属性混淆或者开启属性混淆和字符串属性混淆的前提下，开启-keep-object-props选项前后均不会被混淆。\nconst complexComputedPropertyObj = {\n  [Symbol.iterator]: 'value',\n  [\"dynamic\" + \"Property\"]: 'value'\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-remove-nosideeffects-calls",
      children: "-remove-nosideeffects-calls"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，支持删除指定名称的方法调用，要求方法调用的返回值未被使用。该功能适用于删除自定义日志方法调用等场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持的方法调用方式有如下几种："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "直接调用：method，匹配method()。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点号调用：A.B，匹配A.B()。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["方括号调用：A[\"B\"]，匹配A", (0,jsx_runtime.jsx)(_components.a, {
          href: "",
          children: "\"B\""
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["嵌套调用：A.B[\"method\"]，匹配A.B", (0,jsx_runtime.jsx)(_components.a, {
          href: "",
          children: "\"method\""
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通配符匹配：通过名称类通配符进行模式匹配，如*.log，匹配任意对象的log()。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用该选项时，需要注意以下事项："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用该选项在删除方法调用时不会分析其内部的副作用，需确保删除的方法调用不影响应用功能。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置项需与源码中实际调用处的完整名称一致，而非声明处的名称。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如，下面例子中的配置项MyLog.debug不是调用处的名称，Log.debug()不会被删除："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// obfuscation-rules.txt或consumer-rules.txt：\n-remove-nosideeffects-calls\nMyLog.debug\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// a.ts\nexport class MyLog {\n  public static debug(message: string) {\n    console.info(message);\n  }\n}\n\n// b.ts\nimport { MyLog as Log } from './a'\n\nLog.debug(\"this is alias\");\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置项间可用逗号、空格或换行的方式分隔。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在混淆配置文件obfuscation-rules.txt或consumer-rules.txt:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-remove-nosideeffects-calls\nlogger\nLog.debug*\nexample[\"log\"].info\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据上述配置，在以下场景中的方法调用语句将被删除:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文件顶层的调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function logger(msg: string) {\n  console.info(msg);\n}\n\nlogger(\"in top level\"); // 经过混淆，该方法调用会被删除\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "代码块的调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class Log {\n  public static debugBlock(msg: string) {\n    console.info(msg);\n  }\n}\n\nfunction foo() {\n  Log.debugBlock(\"in block\"); // 经过混淆，该方法调用会被删除\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "module或namespace中的调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// example.ts\nclass Log {\n  public static debugNamespace(msg: string) {\n    console.info(msg);\n  }\n}\n\nnamespace ns {\n  Log.debugNamespace(\"in namespace\"); // 经过混淆，该方法调用会被删除\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "switch语句中的调用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "interface Logger {\n  info: (msg: string, res?: number) => void;\n}\n\nconst logFunc: Logger = {\n  info: (msg: string, res?: number): void => {\n    console.info(msg, res);\n  }\n}\n\nconst example: Record<string, Logger> = {\n  [\"log\"]: logFunc\n}\n\nfunction getDayName(day: number): string {\n  switch (day) {\n    case 1:\n      example[\"log\"].info(\"Matched case 1: 星期一\"); // 经过混淆，该方法调用会被删除\n      return \"星期一\";\n    case 2:\n      example[\"log\"].info(\"Matched case 2: 星期二\"); // 经过混淆，该方法调用会被删除\n      return \"星期二\";\n    default:\n      example[\"log\"].info(\"No matching case for day:\", day); // 经过混淆，该方法调用会被删除\n      return \"无效的日期\";\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "保留选项",
      children: "保留选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启混淆后，代码中的方法、属性或路径被混淆。但是在程序运行时，如果访问未混淆的方法、属性或路径，可能导致功能不可用。因此需要根据不同的场景配置保留选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["排查场景和配置字段时，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-obfuscation#section19439175917123",
        children: "混淆助手配置保留选项"
      }), "，快速识别需要配置的保留选项和白名单字段。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "已有保留选项汇总",
      children: "已有保留选项汇总"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "指定保留注释"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#section-keep-comments",
              children: "-keep-comments"
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
        href: "#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9%E6%94%AF%E6%8C%81%E7%9A%84%E9%80%9A%E9%85%8D%E7%AC%A6",
        children: "名称类通配符"
      }), "。按如下方式进行配置，表示保留名称为firstName和lastName的属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-property-name\nfirstName\nlastName\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用该选项时，需要注意以下事项："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该选项在开启-enable-property-obfuscation时生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "属性白名单作用于全局。即代码中出现多个重名属性，只要与-keep-property-name配置白名单名称相同，均不会被混淆。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要手动配置白名单的属性名"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.如果代码中通过字符串拼接、变量访问或使用defineProperty方法定义对象属性，则这些属性名应被保留。例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// example.js\nvar obj = {x0: '0', x1: '1', x2: '2'};\nfor (var i = 0; i <= 2; i++) {\n    console.info(obj['x' + i]);  // x0, x1, x2应该被保留\n}\n\nObject.defineProperty(obj, 'y', {});  // y应该被保留\nObject.getOwnPropertyDescriptor(obj, 'y');  // y应该被保留\nconsole.info(obj.y);\n\nobj.s1 = 'a';\nlet key = 's1';\nconsole.info(obj[key]);        // key对应的变量值s1应该被保留\n\nobj.t1 = 'b';\nconsole.info(obj['t' + '1']);        // t1应该被保留\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于如下的字符串常量形式的属性调用，可以选择性保留："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆配置：\n// -enable-property-obfuscation\n// -enable-string-property-obfuscation\n\n// ArkGuardAbility.ts\nvar obj2 = {t:'1', m:'2'};\nobj2.t = 'a';\nconsole.info(obj2['t']); // 此时，'t'会被正确混淆，t可以选择性保留\n\nobj2['m'] = 'b';\nconsole.info(obj2['m']); // 此时，'m'会被正确混淆，m可以选择性保留\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2.对于间接或直接导出的类或对象的属性名的场景，如果混淆后出现问题，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section-keep-property-name",
        children: "-keep-property-name"
      }), "来保留这些属性名。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 间接导出MyClass07\nclass MyClass07 {\n  greet() {}\n}\nlet alias = new MyClass07();\nexport { alias };\n\n// 直接导出MyClass08\nexport class MyClass08 {\n  exampleName: 'jack'\n  exampleAge: 100\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.在ArkTS/TS/JS文件中使用so库的API（如示例中的add）时，需手动保留API名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/cpp/types/libentry/Index.d.ts\nexport const addNum: (a: number, b: number) => number;\n\n// example.ets\nimport testNapi from 'libentry.so';\n\ntestNapi.addNum(2, 3); // addNum需要保留，示例如：-keep-property-name addNum\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4.JSON数据解析和对象序列化时，需要保留使用到的字段，例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"jsonProperty\": \"value\",\n  \"otherProperty\": \"value2\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import jsonData from './ImportJson.json';\n// ...\nlet jsonProp = jsonData.jsonProperty; // jsonProperty应该被保留\n\nclass jsonTest {\n  prop1: string = '';\n  prop2: number = 0\n}\n\nlet obj = new jsonTest();\nconst jsonStr = JSON.stringify(obj); // prop1 和 prop2 会被混淆，应该被保留\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "5.使用到的数据库相关的字段，需要手动保留。例如，数据库键值对类型（ValuesBucket）中的属性："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ValuesBucket } from '@kit.ArkData';\n// ...\nconst valueBucket: ValuesBucket = {\n  ID1: 'ID1', // ID1应该被保留\n  NAME1: 'jack', // NAME1应该被保留\n  AGE1: 20, // AGE1应该被保留\n  SALARY1: 100 // SALARY1应该被保留\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6.源码中自定义装饰器修饰了成员变量、成员方法、参数，同时其源码编译的中间产物为js文件时（如编译release源码HAR或者源码包含@ts-ignore、@ts-nocheck），这些装饰器所在的成员变量/成员方法名称需要被保留。这是由于ts高级语法特性转换为js标准语法时，将上述装饰器所在的成员变量/成员方法名称硬编码为字符串常量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function CustomDecorator(target: Object, propertyKey: string) {}\nfunction MethodDecorator(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {}\nfunction ParamDecorator(target: Object, propertyKey: string, parameterIndex: number) {}\n\nclass A {\n  // 1.成员变量装饰器\n  @CustomDecorator\n  propertyName1: string = \"\"   // propertyName1 需要被保留\n  // 2.成员方法装饰器\n  @MethodDecorator\n  methodName1() {} // methodName1 需要被保留\n  // 3.方法参数装饰器\n  methodName2(@ParamDecorator param: string): void {} // methodName2 需要被保留\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "7.使用到的数据请求相关的字段需要手动保留，例如，传递给数据请求方的字段需要手动保留："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ArkGuardAbility.ets\nimport { UIAbility } from '@kit.AbilityKit';\nimport { http } from '@kit.NetworkKit';\n// ...\nexport default class EntryAbility extends UIAbility {\n  onForeground(): void {\n    let httpRequest = http.createHttp();\n    httpRequest.request('https://www.example/Login',\n      {\n        method: http.RequestMethod.POST,\n        header: { 'Content-Type': 'application/json' },\n        extraData: { usernameTest: 'test1', passwordTest: 'test2'}, // usernameTest 和 passwordTest 需要被保留\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "8.使用到的数字字面量属性需要手动保留，例如："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class MyClass09 {\n  123 = 'numeric-prop'; // 数字字面量属性\n  [456] = 'computed'; // 计算属性中的数字\n  method() {\n    console.info(this[123]); // 123和456需要被保留\n    console.info(this[456]);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-keep-global-name",
      children: "-keep-global-name"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["指定要保留的顶层作用域及导入和导出元素的名称，支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9%E6%94%AF%E6%8C%81%E7%9A%84%E9%80%9A%E9%85%8D%E7%AC%A6",
        children: "名称类通配符"
      }), "。配置方式如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-global-name\nPerson\nprintPersonName\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "namespace中导出的名称也可以通过-keep-global-name选项保留，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ArkGuardAbility.ts\nexport namespace Ns {\n  export const myAge = 18 // -keep-global-name myAge 保留变量myAge\n  export function myFunc() {} // -keep-global-name myFunc 保留函数myFunc\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用该选项时，需要注意以下事项："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该选项在开启-enable-toplevel-obfuscation或-enable-export-obfuscation时生效。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "-keep-global-name指定的白名单作用于全局。即代码中出现多个顶层作用域名称或者导出名称，只要与-keep-global-name配置的白名单名称相同，均不会被混淆。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要手动配置白名单的顶层作用域名称"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当以命名导入的方式导入so库的API时，如果同时开启-enable-toplevel-obfuscation和-enable-export-obfuscation选项，需要手动保留API的名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/cpp/types/libentry/Index.d.ts\ndeclare function testNapi2(): void;\ndeclare function testNapi3(): void;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ArkGuardAbility.ets\nimport { testNapi2, testNapi3 as myNapi } from 'libentry.so'; // testNapi2 和 testNapi3 应该被保留\n// ...\ntestNapi2();\nmyNapi();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-keep-file-name",
      children: "-keep-file-name"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["指定要保留的文件或文件夹名称（不需要写文件后缀），支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9%E6%94%AF%E6%8C%81%E7%9A%84%E9%80%9A%E9%85%8D%E7%AC%A6",
        children: "名称类通配符"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以文件路径\"utils/file.ets\"为例，配置白名单的方法如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-file-name\nutils\nfile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用该选项时，需要注意以下事项："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该选项在开启-enable-filename-obfuscation时生效。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "-keep-file-name指定的白名单作用于全局。即不同层级的文件或文件夹名称，只要与-keep-file-name配置的白名单名称相同，均不会被混淆。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不支持使用路径类通配符，例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# 这种写法仅保留该条路径，pages目录下的文件和文件夹名称依旧会被混淆\n-keep-file-name\n./src/main/ets/components/pages/**\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要手动配置白名单的文件名"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1.在使用require引入文件路径时，由于ArkTS不支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-runtime/arkts-runtime-module/module-principle#commonjs%E6%A8%A1%E5%9D%97",
        children: "CommonJS"
      }), "语法，因此这种情况下路径应该被保留。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ArkGuardAbility.js\nconst module1 = require('./RequireFile'); // RequireFile 应该被保留\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.对于动态导入的路径名，由于无法识别import函数中的参数是否为路径，因此在这种情况下应保留路径。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// DynamicImportFile.ts\nexport function foo () {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// main.ts\nconst moduleName = './DynamicImportFile'; // moduleName对应的路径名DynamicImportFile应该被保留\nasync function func2() {\n  const modules = await import(moduleName);\n  const result = modules.foo();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3.对于API version 19及之前版本，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-cross-package",
        children: "跨包路由"
      }), "进行路由跳转时，传递给动态路由的路径应被保留。动态路由提供系统路由表和自定义路由表两种方式："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若采用自定义路由表进行跳转，配置白名单的方式与第二种动态引用场景一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若采用系统路由表进行跳转，则需将模块下resources/base/profile/route_map.json文件中pageSourceFile字段对应的路径添加到白名单中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于API version 20及之后版本，不再需要手动配置白名单。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"routerMap\": [\n    {\n      \"name\": \"PageOne\",\n      \"pageSourceFile\": \"src/main/ets/pages/directory/PageOne.ets\",\n      \"buildFunction\": \"PageOneBuilder\",\n      \"data\": {\n        \"description\" : \"this is PageOne\"\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["4.对于API version 19及之前版本，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/app-startup",
        children: "应用启动框架AppStartup"
      }), "时，启动参数配置文件和启动任务文件的路径应保留。这些路径配置在本模块的resources/base/profile/startup_config.json文件中，分别对应configEntry字段和startupTasks对象的srcEntry字段。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于API version 20及之后版本，不再需要手动配置白名单。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startup_config.json文件示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"startupTasks\": [\n    {\n      \"name\": \"StartupTask_001\",\n      \"srcEntry\": \"./ets/startup/StartupTask_001.ets\",\n      \"dependencies\": [\n        \"StartupTask_002\"\n      ],\n      \"runOnThread\": \"taskPool\",\n      \"waitOnMainThread\": false\n    },\n    {\n      \"name\": \"StartupTask_002\",\n      \"srcEntry\": \"./ets/startup/StartupTask_002.ets\",\n      \"runOnThread\": \"taskPool\",\n      \"waitOnMainThread\": false\n    }\n  ],\n  \"configEntry\": \"./ets/startup/StartupConfig.ets\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置白名单方式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-file-name\n# 启动任务文件路径为：\"./ets/startup/StartupTask_001.ets\" 和 \"./ets/startup/StartupTask_002.ets\"。\nstartup\nStartupTask_001\nStartupTask_002\n\n# 启动参数配置文件路径为：\"./ets/startup/StartupConfig.ets\"。\nStartupConfig\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "5.使用三方库提供的路由跳转方法时，若开启文件名混淆规则，文件路径会被混淆，从而导致跳转失败。因此需要将路由跳转的路径都配置到-keep-file-name下，让其不被混淆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-keep-comments",
      children: "-keep-comments"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["保留编译生成的声明文件中class、function、namespace、enum、struct、interface、module、type及属性上方的JsDoc注释，支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9%E6%94%AF%E6%8C%81%E7%9A%84%E9%80%9A%E9%85%8D%E7%AC%A6",
        children: "名称类通配符"
      }), "。例如想保留声明文件中Human类上方的JsDoc注释，可进行以下配置："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep-comments\nHuman\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用该选项时，需要注意以下事项："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该选项在开启-remove-comments时生效。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当编译生成的声明文件中class、function、namespace、enum、struct、interface、module、type及属性的名称被混淆时，该元素上方的JsDoc注释无法通过-keep-comments保留。例如，当在-keep-comments中配置了exportClass时，如果exportClass类名被混淆，其JsDoc注释无法被保留。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/**\n * @class exportClass\n */\nexport class exportClass {}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-keep-dts",
      children: "-keep-dts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定路径filepath的.d.ts文件中的名称（如变量名、类名、属性名等）将被添加到-keep-global-name和-keep-property-name白名单中。请确保filepath为绝对路径，也可以指定为一个目录。如果指定为目录，则该目录下所有.d.ts文件中的名称都将被保留。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-keep",
      children: "-keep"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "保留指定相对路径filepath中的所有名称（例如变量名、类名、属性名等）不被混淆。filepath可以是文件或文件夹，若是文件夹，则文件夹下的文件及子文件夹中文件都不混淆。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["filepath仅支持相对路径，./和../为相对于混淆配置文件所在目录，支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9%E6%94%AF%E6%8C%81%E7%9A%84%E9%80%9A%E9%85%8D%E7%AC%A6",
        children: "路径类通配符"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep\n./src/main/ets/fileName.ts   // fileName.ts中的名称不混淆\n../folder                    // folder目录下文件及子文件夹中的名称都不混淆\n../oh_modules/json5          // 引用的三方库json5里所有文件中的名称都不混淆\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "如何在模块中保留远程HAR包"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式一"
        })
      }), "：指定远程HAR包在模块级oh_modules中的具体路径（该路径为软链接路径，真实路径为工程级oh_modules中的文件路径）。因为在配置模块级oh_modules中的路径作为白名单时，需要具体到包名或之后的目录才能正确地软链接到真实的目录路径，所以不能仅配置HAR包的上级目录名称。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 正例\n-keep\n./oh_modules/harName1         // harName1目录下所有文件及子文件夹中的名称都不混淆\n./oh_modules/harName1/src     // src目录下所有文件及子文件夹中的名称都不混淆\n./oh_modules/folder/harName2  // harName2目录下所有文件及子文件夹中的名称都不混淆\n\n// 反例\n-keep\n./oh_modules                  // 保留模块级oh_modules里HAR包时，不支持配置HAR包的上级目录名称\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "方式二"
        })
      }), "：指定远程HAR包在工程级oh_modules中的具体路径。工程级oh_modules中的文件路径均为真实路径，可直接配置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "-keep\n../oh_modules                  // 工程级oh_modules目录下所有文件及子文件夹中的名称都不混淆\n../oh_modules/harName3          // harName3目录下所有文件及子文件夹中的名称都不混淆\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模块级oh_modules和工程级oh_modules在DevEco Studio中的目录结构如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(170922)/* ["default"] */.A) + "",
        width: "640",
        height: "537"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用该选项时，需要注意以下事项："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用-keep filepath保留的文件，其依赖链路上的文件中导出的名称及其属性也会被保留。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该功能不影响文件名混淆-enable-filename-obfuscation的功能。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用-keep规则保留某个文件时，该文件中的代码不会被混淆，但是在其他文件中引用该文件中的属性名称时，仍然可能被混淆，此时可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-questions#%E8%B7%A8%E6%96%87%E4%BB%B6%E8%B0%83%E7%94%A8%E6%9F%90%E5%B1%9E%E6%80%A7%E8%AF%A5%E5%B1%9E%E6%80%A7%E5%9C%A8%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6%E4%B8%AD%E4%BF%9D%E7%95%99%E5%9C%A8%E5%8F%A6%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6%E4%B8%AD%E8%A2%AB%E6%B7%B7%E6%B7%86",
          children: "-keep规则常见案例"
        }), "来解决。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "保留选项支持的通配符",
      children: "保留选项支持的通配符"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "名称类通配符"
        })
      })
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
            children: "\"AB?\"能匹配\"ABC\"等，但不能匹配\"AB\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "匹配任意数量的任意字符"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"*AB*\"能匹配\"AB\"、\"aABb\"、\"cAB\"、\"ABc\"等。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      }), "："]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "路径类通配符"
        })
      })
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
            children: "匹配任意数量的任意字符，但不包括路径分隔符/。"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用示例"
        })
      }), "："]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以上选项不支持将通配符*、?、!用作其他含义。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "例如："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class A {\n  '*'= 1\n}\n\n-keep-property-name\n*\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此时*表示匹配任意数量的任意字符，配置效果为所有属性名称都不会被混淆，而不是只有*属性不被混淆。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "-keep选项中只允许使用/路径格式，不支持\\或\\。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "混淆规则合并策略",
      children: "混淆规则合并策略"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在编译一个模块时，生效的混淆规则是", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "当前编译模块混淆规则"
        })
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
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
      children: "构建HAP、HSP和HAR时，最终的混淆规则是以下文件的合并："
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
      children: "如果构建HAR，生成的远程HAR中的obfuscation.txt是以下文件的合并："
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
      children: "构建HSP时，生成的远程HSP中的obfuscation.txt仅包含自身的consumerFiles属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构建HAP时，不会生成obfuscation.txt文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "混淆规则合并逻辑"
        })
      })
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
      children: "对于API version 18之前版本，如果consumerFiles指定的混淆配置文件中包含以下混淆选项和保留选项，这些规则将被同步生成到远程HAR和HSP的obfuscation.txt文件中，其他混淆规则不会被保留。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 混淆选项\n-enable-property-obfuscation\n-enable-string-property-obfuscation\n-enable-toplevel-obfuscation\n-compact\n-remove-log\n\n// 保留选项\n-keep-property-name\n-keep-global-name\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在API version 18之前的版本，主模块会自动合并其依赖的远程HAR或HSP中的obfuscation.txt配置文件中的混淆选项及保留选项。这可能导致主模块的混淆规则被意外修改，从而影响最终的混淆效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于API version 18及之后版本，默认仅上述保留选项会被主模块合并从而生效，而其他混淆选项不会。这种设计避免了其他模块依赖远程HAR或HSP时受其混淆配置的影响。同时，远程HAR或HSP在打包时使用自身的obfuscation-rules.txt文件中的混淆规则，并不会影响其实际混淆效果。如果需要恢复到API version 18之前的混淆规则合并逻辑，可以通过配置-enable-lib-obfuscation-options选项实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "HSP和HAR中混淆注意事项"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果consumerFiles指定的混淆配置文件中包含上述混淆选项，当其他模块依赖该模块时，这些选项会与主模块的混淆规则合并，从而影响主模块。因此不建议开发者在consumer-rules.txt文件中配置混淆选项，建议仅配置保留选项。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果在consumerFiles指定的混淆配置文件中添加-keep-dts选项，该选项会被转换成-keep-global-name和-keep-property-name。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "混淆各功能起始api版本",
      children: "混淆各功能起始API版本"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "混淆选项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "起始API版本"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-disable-obfuscation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭混淆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-enable-property-obfuscation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "属性混淆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-enable-string-property-obfuscation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串字面量属性名混淆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-enable-toplevel-obfuscation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "顶层作用域名称混淆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-enable-filename-obfuscation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HAR包文件/文件夹名称混淆  HAP/HSP文件/文件夹名称混淆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10  12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-enable-export-obfuscation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向外导入或导出的名称混淆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-compact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "去除不必要的空格符和所有的换行符"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-remove-log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除特定场景中的console.*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-print-namecache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将名称缓存保存到指定的文件路径"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-apply-namecache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "复用指定的名称缓存文件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-remove-comments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除文件中所有注释"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-keep-property-name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留属性名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-keep-global-name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留顶层作用域的名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-keep-file-name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留HAR包的文件/文件夹的名称  保留HAP/HSP包的文件/文件夹的名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10  12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-keep-dts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留指定路径的.d.ts文件中的名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-keep-comments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留编译生成的声明文件中class、function、namespace、enum、struct、interface、module、type及属性上方的JsDoc注释"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-keep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留指定路径中的所有名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "通配符"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "名称类和路径类的保留选项支持通配符"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-print-kept-names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出未混淆名单"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-extra-options strip-language-default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩减语言预置白名单"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-extra-options strip-system-api-args"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缩减系统预置白名单"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-extra-options strip-not-compiled-module-name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不保留未参与编译模块名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-keep-parameter-names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留声明文件参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-enable-lib-obfuscation-options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "合并依赖模块选项"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-use-keep-in-source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过注释在源码中标记白名单"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-keep-object-props"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "保留对象字面量属性名称"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-remove-nosideeffects-calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除特定场景中指定的方法调用"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
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
311103(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
98037(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
738188(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
397253(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
619971(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797896-48936a7e071d03e9d3fc07fff885de57.png");

},
3236(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
251839(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
378763(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
321214(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIQUlEQVRo3u2ae1DTVxbHP4gmPMLDhKcPEkAelqW2CsWyikLFik6VHV91hrGKdZmiOz6KY92hI+3Stajja6qWioiIi6i1rFWLUhCRUqkIVpYFBFHQBgUJ8taAsn9EwqYgVsA1XXNmMpPc+/3dc+/9/s6555wbvaa8YRHAenSiVTJItwU6YnSiI0ZHjE50xOiI0YkWyODnraC1TcLOb15juPUQAr0vYjikVrfr2kDMup2OxMQfAKAhchEh088MuI5d+0WEvtf0xP7SW6M4dQ78POtxd67ps56vDlnToW/M9coW1ixWIBErf5/EFMm9iYk/SnhYEPLbTXwYHsecSZORGF8dMB2RuyzJKRrCvyuFfLKsscfN+ktEFVl5pYQGebNx9dOJ+e6sSY/t2ZdbOJ5RiFKpxHCwC2+8KuwRF+DbqN3EfLTxFjKplLk+d1E0mxGbAH/bY862lQOnI6eghR/yKzirVNKhN46F0+vxGtuigXnFyZSsPPi5qIHSciFODg96HfPgGTHJp3/sFbNpf0mP7WEhfgT4FmsvMRmF/qRl7mdn1BLMhLmYCasIDwsicnMCIfPmMHpY9oDo+XZ3M8si3TmRUU7iiQL0OlwQWY3VwEzxaeTUOWsEgkEkpdrwpxkj1X0ig1akFpc08O7OQkbJ/Ghpvk/yyULkdfX4jHPgDQ+ZBi7l+2L+dU3OhHGjGe9hC4DtALm350JMa5uE5eEZyKRS3nLvcltzfe4SuRmi9jQQN4DVuZ3hVdhaulJVo8TdxZB3lqT3iCssk1NYBrHHStVtLlILvvuqCxN9xAFzUTvmAOJBSO2GIq+rR2xhjWhIEyYmAgBqFA/p0DcCwFDwQIOQQ6eG8e50eb/WpPc8ipiJ56axdFUsR6IX4SnL57rCFQB7cTEnL3uwbO1eThx4j8luqf3WlXzGAluLFrX7ik+240yOngamuUVJ6vlLuDo74mpvpTnAw0YSNirUPx3eVlJdc7dfcwoL8SMipFi7LKa22Zmlq2KZPXMqnrJ8Pj1gT2xCEgBR6xczy+sqMqmU5eEZXDws6Vf4nHzGgn98b0zbgyHMKjdg0RwFCwMrWRioiYs+4kDqeXC1tyJhQ0WvY659X/US5f7ct+jNY4wlZsYN2ufKtidZA7B8wVDgDrEJyeq+3XHpzPc2Z9NffZkbEkdydjALJqX0WZehkRENdffIulSEvNqRW9WWhIfW9Gv+IXPLATifJ8VmhO0zPavfXkfI3BLty/yL5N5s+SKJFR/Mx17c3ZQd7FQL9ZTlM3vmVJauiqW22bnP+t6eUElMpJCJHq4Ullyj+MbDAVtLdl4pX+49Ru0vpYgG3+v1U1l2lS/3HuOX2/e1M4+J2qMy4eCAenWbTCrlRkXF4+82wHW1RX19XGVhnwb3Pa8ZYV1NwucC1m1zZ8NKVf6wOsoWU3MzNUZRryKsqbWDiGhXjeeHmdXx53fvPHF8c5OOp0ZaFYZ62ptgZhT6c/SfXeFxp/hNfJ3Yx8QMsxGp2+3Fxaz4YD5bvkhiwbT+h89rFjWpk8trN9soSL/SDZN5IY8rRaYabaHzHXp3T6bOlFY/xYUZmwAF2kdMa5uErXtKuoXHvybD1lIzUw4OqGf7bog+3N6vpHNfshXpF5WYGLSStLWRHRFSmu53WcaRk3fZHJ3OJC93Itc4ajxrb9X7mXC1IBdrC8NeMTdutWinxSRne5KWGUvcjiUY6Odq9P03GTIbTZdgJqwiav1i1n6yj0D/vofPldX6ZOZcJnjem0Bjt4QxS6yyCmMjAW4jsp5p7PSfKn+fRczaZmc+25aG38TxTHbJ7db/il1XcVEi6l5onOVVxm6plK17SvDa1Lfw+frNZgCchrcNyKaczrLDZ0w1U70lnM+D9kfg5qDP3XsdnM5qwNxsCKsXql6465Ud2NvpUVcP35ytJu6omEVzFC8+Ktt3ciQ3Kir4OFTaY7+9uJjZM6cSHhaEjai8W7+BfgMRH04hLfMCydmefar4/nCpGDcXR6b9sf9XCrUKAbsOtXA88xblcgMa28QknirB0ETMO5PbsLe34VKRnMOpAgJ8G0k8/YCz+RISU9pIy7lJXpkJtQrBi7WYIrk3EZ8fIDgosMfwuFOWzmjEWvzkE3SySy5+E8fz2bY0pno4P1P1uUxuiFKpxEVmRllFMwdT7btheovKfh2ZbT84lLTsfN7yfpXw0BqC1qleuOKye4TMbWF5uwiBvjMyayWrNogpLL+Kra0FcX9/xOwVdsQe/hH9jj+wdZ3ixRETfbgdgBXznhy/1zXoMWdVHlYSEV9vGclQ044ecR+HSvFdcIF9J30Im/fbiSm6pnKPzjIh0Ez8sSs94qwsLbhSVMaVou59nZFZrULAxYJWBAIBMyboA2BkoJrv9TsigtY9vg7Qh9LbUFhWjVKpRDZciESsZMHMEQgNDLjXqEetQtCv+5o+E5NR6E9M/H6i1i/GTJj3RFx+oWph1bVN1NXDUFOe6PKCgwKJ+PwAMyb8tvC5tFyItWQwHm6j8PeswWtsC986+T3zWjojM4lYyY6P9EhKGa22oKCA+9y/P5ZHdM9VnOzM8X/Tm9mTq9VVg9ccjbpdO/xPi5izVtpxraKKlN12GOj3XhvKK1QtaqxbR6+4+ge2jJmZwvsLA9m28ideZunT4Z94bhppmRdYEzrlqaR0EvI0UjrD5/CwIGLik8kt932piemTK8vJ7zrYTl72GNAJmRg/Urmpm0I8HHTEPJN4vS4mJh6Wrd37XCYlk0pxGvngpbYYPd2//f+Pzhid6IjREaMTHTE60RGjI0YnzyGPydBtg/bJfwCln/+4V4N0SAAAAABJRU5ErkJggg==");

},
273801(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
170922(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437591-e01801fa4f52284ed77e722dd8a8ad3b.png");

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