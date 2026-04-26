"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["16828"], {
729655(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_compilation_tool_chain_arkts_arkguard_bytecode_bytecode_obfuscation_practice_bytecode_obfuscation_practice_md_123_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-compilation-tool-chain-arkts-arkguard-bytecode-bytecode-obfuscation-practice-bytecode-obfuscation-practice-md-123.json
var site_docs_arkts_arkts_compilation_tool_chain_arkts_arkguard_bytecode_bytecode_obfuscation_practice_bytecode_obfuscation_practice_md_123_namespaceObject = JSON.parse('{"id":"arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-practice/bytecode-obfuscation-practice","title":"不同包类型的字节码混淆建议","description":"由于不同包类型的用途及构建流程的差异，开发者对不同包类型使用混淆有不同的注意事项。本文对HAP、HAR和HSP三种包类型分别提供建议，帮助开发者高效使用混淆。","source":"@site/docs/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-practice/bytecode-obfuscation-practice.md","sourceDirName":"arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-practice","slug":"/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-practice/","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-practice/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"不同包类型的字节码混淆建议","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/bytecode-obfuscation-practice","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkGuard字节码混淆开启指南","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-guide/"},"next":{"title":"ArkGuard字节码混淆常见问题","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-questions/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-practice/bytecode-obfuscation-practice.md


const frontMatter = {
	title: '不同包类型的字节码混淆建议',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/bytecode-obfuscation-practice',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '不同包类型的字节码混淆建议';

const assets = {

};



const toc = [{
  "value": "推荐混淆选项",
  "id": "推荐混淆选项",
  "level": 2
}, {
  "value": "HAP包混淆建议",
  "id": "hap包混淆建议",
  "level": 2
}, {
  "value": "HAR包混淆建议",
  "id": "har包混淆建议",
  "level": 2
}, {
  "value": "HAR包通用建议",
  "id": "har包通用建议",
  "level": 3
}, {
  "value": "本地源码HAR包",
  "id": "本地源码har包",
  "level": 3
}, {
  "value": "发布态源码HAR包",
  "id": "发布态源码har包",
  "level": 3
}, {
  "value": "发布态字节码HAR包",
  "id": "发布态字节码har包",
  "level": 3
}, {
  "value": "HSP包混淆建议",
  "id": "hsp包混淆建议",
  "level": 2
}, {
  "value": "HSP包通用建议",
  "id": "hsp包通用建议",
  "level": 3
}, {
  "value": "本地源码HSP包",
  "id": "本地源码hsp包",
  "level": 3
}, {
  "value": "集成态HSP包",
  "id": "集成态hsp包",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "不同包类型的字节码混淆建议",
        children: "不同包类型的字节码混淆建议"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于不同包类型的用途及构建流程的差异，开发者对不同包类型使用混淆有不同的注意事项。本文对", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/hap-package",
        children: "HAP"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/har-package",
        children: "HAR"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-dev/in-app-hsp",
        children: "HSP"
      }), "三种包类型分别提供建议，帮助开发者高效使用混淆。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了对混淆在不同包类型下的行为有更清晰的理解，建议开发者在对不同包类型进行配置前，充分了解混淆原理及混淆开启流程，并优先阅读", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-package-fundamentals/application-package-structure/application-package-structure-stage",
        children: "Stage模型应用程序包结构"
      }), "（了解不同包类型之间的差异点）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "推荐混淆选项",
      children: "推荐混淆选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推荐开发者在默认混淆的基础上，在混淆配置文件中开启以下四项基础混淆选项："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "顶层作用域名称混淆（-enable-toplevel-obfuscation）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "属性名称混淆（-enable-property-obfuscation）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入导出名称混淆（-enable-export-obfuscation）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文件名混淆（-enable-filename-obfuscation）。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启混淆功能后，需要配置白名单进行适配，来保证应用运行功能正常。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于新开发的应用，建议直接打开以上选项，在开发迭代过程中增加白名单配置。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["对于已开发一定功能的应用，建议按照以上顺序逐步打开各个选项，对比不同选项的混淆产物，熟悉新增选项的具体效果，参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-guide#%E6%B7%B7%E6%B7%86%E9%80%89%E9%A1%B9%E9%85%8D%E7%BD%AE%E6%8C%87%E5%AF%BC",
          children: "混淆选项配置指导"
        }), "排查适配。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用功能调试正常后，还可继续开启日志删除（-remove-log）等功能以发布release应用包。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hap包混淆建议",
      children: "HAP包混淆建议"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开启混淆规则。建议开启", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E6%8E%A8%E8%8D%90%E6%B7%B7%E6%B7%86%E9%80%89%E9%A1%B9",
            children: "推荐的混淆选项"
          }), "，其它选项按需添加。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["HAP包的开发者需要重点知悉", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation#%E6%B7%B7%E6%B7%86%E8%A7%84%E5%88%99%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5",
            children: "混淆规则的合并策略"
          }), "，确认清楚了解所有潜在影响本模块编译时混淆规则的情况。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在此基础上，还需了解哪种依赖包内的代码会跟随本模块一起参与编译混淆，因为这会影响混淆新生成的名称，以及部分全局生效（如属性名称）的白名单，进而影响到本模块最终的混淆效果。具体而言："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当依赖本地HAR包时，它的代码会跟随本模块一起混淆，因此在这部分代码中混淆前后的名称会一起体现在编译中间产物的obfuscation/nameCache.json文件中。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当依赖发布态源码HAR包时，它被安装在工程级的oh_modules目录下的代码会跟随本模块一起混淆，因此在这部分代码中混淆前后的名称也会一起体现在编译中间产物的obfuscation/nameCache.json文件中。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当依赖发布态字节码HAR包或HSP包时，参与编译的是其中的二进制字节码和声明文件，由于ArkGuard工具是字节码混淆，且为了保证声明文件中的接口与二进制中的实现的一致性，不会对这部分代码进行混淆。但是，若三方库未正确提供接口的声明或者未在consumer-rules中配置白名单，在HAP中使用这些三方库接口的地方可能会被混淆，此时HAP包开发者可以自行配置，来保证运行时的正确性。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为保证与发布态三方库交互使用的正确性，ArkGuard会自动收集本模块依赖的安装到oh_modules中的模块的export导出名称及其相关属性等名称到不混淆名单中，由于开发者可以引用依赖模块中的任意路径下的文件，因此导出名称的收集不仅限于入口文件（如Index.ets），而是涵盖了oh_modules三方库中所有文件的export导出名称。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于本地源码HAR包和本地HSP包，ArkGuard不会自动收集所有文件中的export导出名称到不混淆名单中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下表总结了常见依赖包的编译混淆情况："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "依赖模块"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "实际参与编译的文件"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否跟随本模块参与混淆"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否会传递保留配置给本模块"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "是否收集导出名称到不混淆名单中"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E6%9C%AC%E5%9C%B0%E6%BA%90%E7%A0%81har%E5%8C%85",
                  children: "本地源码HAR包"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "模块在本地的源码目录"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E5%8F%91%E5%B8%83%E6%80%81%E6%BA%90%E7%A0%81har%E5%8C%85",
                  children: "发布态源码HAR包"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "工程级的oh_modules下的模块目录"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E5%8F%91%E5%B8%83%E6%80%81%E5%AD%97%E8%8A%82%E7%A0%81har%E5%8C%85",
                  children: "发布态字节码HAR包"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "二进制字节码和声明文件"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E6%9C%AC%E5%9C%B0%E6%BA%90%E7%A0%81hsp%E5%8C%85",
                  children: "本地源码HSP包"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "NA"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E9%9B%86%E6%88%90%E6%80%81hsp%E5%8C%85",
                  children: "集成态HSP包"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "二进制字节码和声明文件"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["了解需要", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9",
            children: "配置白名单的场景"
          }), "，将白名单配置到obfuscation-rules.txt文件中。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构建应用，验证HAP包功能。若功能异常，则继续排查是否遗漏白名单。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用功能正常，则可以发布应用包。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "har包混淆建议",
      children: "HAR包混淆建议"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "har包通用建议",
      children: "HAR包通用建议"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HAR包的开发者需充分了解", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-guide#%E4%B8%89%E7%A7%8D%E6%B7%B7%E6%B7%86%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",
          children: "三种混淆配置文件"
        }), "以及", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation#%E6%B7%B7%E6%B7%86%E8%A7%84%E5%88%99%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5",
          children: "混淆规则的合并策略"
        }), "，以及在被HAP包使用时的", (0,jsx_runtime.jsx)(_components.a, {
          href: "#hap%E5%8C%85%E6%B7%B7%E6%B7%86%E5%BB%BA%E8%AE%AE",
          children: "HAP包混淆建议"
        }), "中的注意事项，确保被应用依赖时本模块所有功能正常。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["由于HAR包会影响使用它的主模块的混淆流程，", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["无论HAR包本身是否开启混淆，都应该配置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-guide#%E4%B8%89%E7%A7%8D%E6%B7%B7%E6%B7%86%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",
              children: "consumer-rules.txt"
            }), "，来保证主模块在开启任意混淆的情况下，HAR包内部实现的功能都保持正常"]
          })
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["由于consumer配置的传递性，", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "HAR包开发者不应该在其中配置开启某种混淆的能力，只应该配置保留某个白名单的规则，并且为减少对依赖方的影响范围，只建议使用-keep-global-name和-keep-property-name两种白名单配置能力。"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "本地源码har包",
      children: "本地源码HAR包"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["作为一个未发布的静态包，本地源码HAR包不会独立进行编译混淆，而是会跟随依赖它的主模块（如HAP）一同进行编译混淆，开发者需参阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hap%E5%8C%85%E6%B7%B7%E6%B7%86%E5%BB%BA%E8%AE%AE",
        children: "HAP包混淆建议"
      }), "了解相关行为。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "发布态源码har包",
      children: "发布态源码HAR包"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开启混淆规则。建议开启", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E6%8E%A8%E8%8D%90%E6%B7%B7%E6%B7%86%E9%80%89%E9%A1%B9",
            children: "推荐的混淆选项"
          }), "，其它选项按需添加。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["了解需要", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation#%E5%B7%B2%E6%9C%89%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9%E6%B1%87%E6%80%BB",
            children: "配置白名单的场景"
          }), "，配置HAR中的白名单："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "obfuscation-rules.txt中配置HAR包对外导出接口及其相关属性名称、此次构建过程不能被混淆的名称等。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "consumer-rules.txt配置不能被二次混淆的接口、属性等名称。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HAR包功能验证。需注意，在构建本模块HAR时会进行一次混淆，当发布后的HAR包被依赖时，如果使用方开启混淆，则本HAR包发布后的代码还会跟随使用方被二次混淆，因为需要充分验证使用方开启混淆时HAR包功能是否正常。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发布HAR包。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(76636)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当被其他模块依赖时，有以下两点需要注意："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ArkGuard会在使用方（如HAP）混淆时收集本发布态HAR包的export导出名称及其相关属性等名称到不混淆名单中。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkGuard会在使用方（如HAP）混淆时收集本发布态HAR包的obfuscation.txt文件中的白名单，但不会继续收集本HAR包依赖的HAR包（四方库）中的obfuscation.txt文件的白名单（这是由于在构建三方库时，已收集过四方库的名单）。因此，", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "若发布态HAR包依赖其他HAR包，应锁定其版本号，避免采用动态版本依赖机制。"
          })
        }), " 否则当四方库升级后，若白名单发生变更，则不会在HAP中生效，易引起稳定性问题。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "发布态字节码har包",
      children: "发布态字节码HAR包"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字节码HAR包的混淆适配流程与发布态源码HAR包基本一致。但是由于ArkGuard是字节码混淆工具，因此当release编译构建发布一个字节码HAR包时，在构建本模块HAR时会进行一次混淆，当发布后的HAR包被使用方依赖时，如果使用方开启混淆，ArkGuard不会对字节码HAR包进行二次混淆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hsp包混淆建议",
      children: "HSP包混淆建议"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hsp包通用建议",
      children: "HSP包通用建议"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HSP包的开发者需充分了解", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-guide#%E4%B8%89%E7%A7%8D%E6%B7%B7%E6%B7%86%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",
          children: "三种混淆配置文件"
        }), "以及", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation#%E6%B7%B7%E6%B7%86%E8%A7%84%E5%88%99%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5",
          children: "混淆规则的合并策略"
        }), "，以及在被HAP包使用时的", (0,jsx_runtime.jsx)(_components.a, {
          href: "#hap%E5%8C%85%E6%B7%B7%E6%B7%86%E5%BB%BA%E8%AE%AE",
          children: "HAP包混淆建议"
        }), "中的注意事项，确保被应用依赖时本模块所有功能正常。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于HSP包是独立构建，并且只会构建一次，因此要重点关注模块内部的混淆效果，同时让其他模块正常调用接口即可。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["由于consumer配置的传递性，", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "HSP包开发者不应该在其中配置开启某种混淆的能力，只应该配置保留某个白名单的规则，并且为减少对依赖方的影响范围，只建议使用-keep-global-name和-keep-property-name两种白名单配置能力。"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "本地源码hsp包",
      children: "本地源码HSP包"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本地源码HSP包要明确对外提供哪些接口及其相关属性，并将这些名称配置到obfuscation-rules.txt及consumer-rules.txt中。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["对于模块内部混淆效果，开发者可以参阅", (0,jsx_runtime.jsx)(_components.a, {
          href: "#hap%E5%8C%85%E6%B7%B7%E6%B7%86%E5%BB%BA%E8%AE%AE",
          children: "HAP包混淆建议"
        }), "中的所有建议。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "功能验证时，应同时构建主模块和HSP包，然后验证HSP包提供的全部接口功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "集成态hsp包",
      children: "集成态HSP包"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "集成态HSP包要明确对外提供哪些接口及其相关属性，并将这些名称配置到obfuscation-rules.txt中。consumer-rules.txt文件中无需配置，因为打包后的tgz压缩包中包含HAR与HSP两个子压缩包，HAR包中的声明文件内定义的对外导出接口及其属性会被自动收集到白名单中。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["对于集成态HSP包的内部混淆效果，开发者可以参阅", (0,jsx_runtime.jsx)(_components.a, {
          href: "#hap%E5%8C%85%E6%B7%B7%E6%B7%86%E5%BB%BA%E8%AE%AE",
          children: "HAP包混淆建议"
        }), "中的所有建议。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "集成态HSP包在发布后会被各方依赖，需要充分验证使用方开启混淆时HSP包接口可以被正常调用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(618916)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HSP生成obfuscation.txt的规则来源，仅来自当前模块的consumer-rules.txt文件，不包含依赖模块的consumer-rules.txt文件或obfuscation.txt文件。"
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
618916(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
76636(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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