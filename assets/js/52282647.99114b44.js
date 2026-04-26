"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["507652"], {
608160(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_build_obfuscation_ide_build_obfuscation_md_522_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-build-obfuscation-ide-build-obfuscation-md-522.json
var site_docs_ide_build_obfuscation_ide_build_obfuscation_md_522_namespaceObject = JSON.parse('{"id":"ide-build-obfuscation/ide-build-obfuscation","title":"混淆加固","description":"DevEco Studio原先默认开启源码混淆功能，会对API 10及以上的Stage工程，且编译模式是release时，自动进行简单的源码混淆，仅对参数名和局部变量名进行混淆。","source":"@site/docs/ide-build-obfuscation/ide-build-obfuscation.md","sourceDirName":"ide-build-obfuscation","slug":"/ide-build-obfuscation/","permalink":"/harmonyos-docs-site/ide-build-obfuscation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"混淆加固","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-build-obfuscation","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"API使用示例","permalink":"/harmonyos-docs-site/ide-build-expanding/ide-hvigor-apis/ide-build-expanding-sample/"},"next":{"title":"使用日志记录","permalink":"/harmonyos-docs-site/ide-hvigor-faq/ide-hvigor-log/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-build-obfuscation/ide-build-obfuscation.md


const frontMatter = {
	title: '混淆加固',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-build-obfuscation',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '混淆加固';

const assets = {

};



const toc = [{
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "字段说明",
  "id": "字段说明",
  "level": 2
}, {
  "value": "使能混淆",
  "id": "使能混淆",
  "level": 2
}, {
  "value": "使能高阶混淆",
  "id": "使能高阶混淆",
  "level": 2
}, {
  "value": "配置所有混淆规则",
  "id": "配置所有混淆规则",
  "level": 3
}, {
  "value": "HAR/HSP配置保留选项",
  "id": "harhsp配置保留选项",
  "level": 3
}, {
  "value": "通过混淆助手配置保留选项",
  "id": "通过混淆助手配置保留选项",
  "level": 2
}, {
  "value": "扫描代码",
  "id": "扫描代码",
  "level": 3
}, {
  "value": "配置推荐白名单",
  "id": "配置推荐白名单",
  "level": 3
}, {
  "value": "配置待排查白名单",
  "id": "配置待排查白名单",
  "level": 3
}, {
  "value": "查看历史记录",
  "id": "查看历史记录",
  "level": 3
}, {
  "value": "扫描任务",
  "id": "扫描任务",
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
        id: "混淆加固",
        children: "混淆加固"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio原先默认开启源码混淆功能，会对API 10及以上的Stage工程，且编译模式是release时，自动进行简单的源码混淆，仅对参数名和局部变量名进行混淆。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从DevEco Studio NEXT Developer Beta3（5.0.3.600）版本开始，新建工程及模块默认关闭源码混淆功能，如果在模块级build-profile.json5配置文件中开启源码混淆，则混淆规则配置文件obfuscation-rules.txt中默认开启推荐的混淆规则，包含-enable-property-obfuscation、-enable-toplevel-obfuscation、-enable-filename-obfuscation、-enable-export-obfuscation四项混淆项，开发者可进一步在obfuscation-rules.txt文件中选择开启的混淆项，关于混淆项的介绍请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#%E6%B7%B7%E6%B7%86%E9%80%89%E9%A1%B9",
        children: "混淆规则"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅支持Stage工程。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide#section192461528194916",
          children: "构建模式"
        }), "为release模式时生效。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模块及模块依赖的HAR和HSP均未关闭混淆。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "字段说明",
      children: "字段说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可在模块级build-profile.json5文件中进行源码混淆相关配置。obfuscation字段说明如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "配置项"
          }), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ruleOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "混淆规则配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否启用源码混淆：   - true：启用。 - false（默认值）：不启用。   说明：  从DevEco Studio NEXT Developer Beta3（5.0.3.600）版本开始，默认值由true改为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["配置混淆规则文件的相对路径，默认使用obfuscation-rules.txt文件。文件中配置的混淆规则仅在本模块编译时生效（包含依赖代码）。  说明：  - 规则文件中支持配置所有", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation",
              children: "混淆规则"
            }), "。 - 支持配置多个文件，文件名称支持自定义，当存在多个混淆规则文件时，规则合并以及合并后的作用范围可参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#%E6%B7%B7%E6%B7%86%E8%A7%84%E5%88%99%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5",
              children: "混淆规则合并策略"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "consumerFiles"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串/字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["仅HAR/HSP模块可配置，配置传递给集成方的混淆规则文件的相对路径，支持配置多个文件，文件名称支持自定义。  说明：  - 为保证HAR/HSP模块可被正确集成使用，若有不希望被集成方混淆的内容，建议在规则文件中配置对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9",
              children: "保留选项"
            }), "，例如HAR/HSP模块中导出的变量或函数。  - 规则文件中配置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#%E6%B7%B7%E6%B7%86%E9%80%89%E9%A1%B9",
              children: "混淆选项"
            }), "会与集成方的混淆规则进行合并，进而影响集成方的编译混淆，因此，建议仅配置", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9",
              children: "保留选项"
            }), "。 - 从DevEco Studio 5.1.0 Release版本开始支持在HSP模块中配置该字段。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使能混淆",
      children: "使能混淆"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为保护代码资产，建议开启混淆，您可以在模块级的build-profile.json5配置文件中开启源码混淆功能："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"arkOptions\": {\n  \"obfuscation\": {\n    \"ruleOptions\": {\n      \"enable\": true  // 配置true，即可开启源码混淆功能\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio NEXT Developer Beta3（5.0.3.600）版本开始，开启混淆后，混淆规则配置文件obfuscation-rules.txt中默认开启推荐的混淆规则，包含-enable-property-obfuscation、-enable-toplevel-obfuscation、-enable-filename-obfuscation、-enable-export-obfuscation四项混淆项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(292184)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide#section192461528194916",
        children: "release模式"
      }), "编译发布时，建议开启混淆，需要正确配置混淆规则，否则可能会有", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-questions",
        children: "运行时问题"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使能高阶混淆",
      children: "使能高阶混淆"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section18326541833",
        children: "开启混淆"
      }), "后，若您需要更高阶的混淆能力，可以通过以下操作配置高阶混淆规则。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置所有混淆规则",
      children: "配置所有混淆规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开模块级build-profile.json5文件，在\"files\"字段下配置混淆规则文件的相对路径，支持配置多个文件，默认为./obfuscation-rules.txt。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"apiType\": \"stageMode\",\n  ...\n  \"buildOptionSet\": [\n    {\n      \"name\": \"release\",\n      \"arkOptions\": {\n        \"obfuscation\": {\n          \"ruleOptions\": {\n            \"enable\": true,\n            \"files\": [\n              \"./obfuscation-rules.txt\"  // 混淆规则文件\n            ]\n          }\n        }\n      }\n    },\n  ],\n  ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打开模块目录内的obfuscation-rules.txt文件配置混淆规则，具体的配置规则请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation",
            children: "配置混淆规则"
          }), "，对于不需要混淆的内容，请配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9",
            children: "保留选项"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当存在多个混淆规则文件时，规则合并以及合并后的作用范围可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#%E6%B7%B7%E6%B7%86%E8%A7%84%E5%88%99%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5",
            children: "混淆规则合并策略"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(963977)/* ["default"] */.A) + "",
            width: "229",
            height: "142"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "harhsp配置保留选项",
      children: "HAR/HSP配置保留选项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为保证HAR/HSP模块可被正确集成使用，若有不希望被集成方混淆的内容，建议在规则文件中配置对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9",
        children: "保留选项"
      }), "，例如HAR/HSP模块中导出的变量或函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开模块级build-profile.json5文件，在\"consumerFiles\"字段下配置传递给集成方的混淆规则文件的相对路径，支持配置多个文件，默认为./consumer-rules.txt，对应编译后HAR包中的obfuscation.txt文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"apiType\": \"stageMode\",\n  ...\n  \"buildOptionSet\": [\n    {\n      \"name\": \"release\",\n      \"arkOptions\": {\n        \"obfuscation\": {\n          \"ruleOptions\": {\n            \"enable\": true,\n            \"files\": [\n              \"./obfuscation-rules.txt\"   \n            ]\n          },\n          \"consumerFiles\": [              // 该模块被依赖时的混淆规则\n            \"./consumer-rules.txt\"   \n          ]\n        }\n      }\n    },\n  ],\n  ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["打开模块目录内的consumer-rules.txt文件配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9",
            children: "保留选项"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当存在多个混淆规则文件时，规则合并以及合并后的作用范围可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#%E6%B7%B7%E6%B7%86%E8%A7%84%E5%88%99%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5",
            children: "混淆规则合并策略"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(363645)/* ["default"] */.A) + "",
            width: "236",
            height: "182"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过混淆助手配置保留选项",
      children: "通过混淆助手配置保留选项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开启混淆后，代码中的方法、属性或路径被混淆，但运行的时候访问的是未混淆的方法、属性或路径，可能导致功能不可用，因此需要将对应的字段配置保留选项。关于保留选项的排查场景及配置方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9",
        children: "保留选项"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要排查的场景和配置的字段有很多，因此DevEco Studio提供了混淆助手工具（ObfuscationHelper），可以根据模块和场景对源码进行扫描，快速", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section3989185975217",
        children: "识别需要配置的保留选项和白名单字段"
      }), "，开发者可以一键生成白名单混淆规则文件。由于某些场景是动态访问名称、属性，需要在运行的时候才能确定的字段，ObfuscationHelper会识别该类场景，开发者需要根据业务进一步", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section42331014105310",
        children: "排查识别白名单后进行配置"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "扫描代码",
      children: "扫描代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过以下任意一种方式打开ObfuscationHelper："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["点击菜单栏", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Tools >"
                })
              }), " ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "ObfuscationHelper"
                })
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在模块目录上点击鼠标右键，在弹出的菜单中选择", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "ObfuscationHelper"
                })
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(918009)/* ["default"] */.A) + "",
                width: "341",
                height: "240"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击模块下拉选择框，选择待扫描的模块。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果模块之前被扫描过，并且生成了排查白名单，则会生成相应的历史记录。选择对应的历史记录，在本次扫描完成后，会自动关联历史的排查记录，历史已经排查过的白名单字段无需再重复排查。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从DevEco Studio 6.0.0 Beta1开始支持关联历史记录。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(743641)/* ["default"] */.A) + "",
            width: "808",
            height: "402"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据涉及的混淆场景，选择一个或多个扫描任务，点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "开始扫描"
            })
          }), "。关于扫描任务的介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section18125192133818",
            children: "扫描任务"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(782711)/* ["default"] */.A) + "",
            width: "612",
            height: "729"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["等待扫描成功后，进入", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section3989185975217",
            children: "推荐白名单"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "#section42331014105310",
            children: "待排查白名单"
          }), "配置页面。在扫描的过程中，也可以点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "停止扫描"
            })
          }), "按钮，结束扫描。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(424603)/* ["default"] */.A) + "",
            width: "805",
            height: "796"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置推荐白名单",
      children: "配置推荐白名单"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在推荐白名单配置页面，可以查看扫描出来的推荐配置的保留选项和白名单字段，并一键生成白名单混淆规则文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "使用DevEco Studio 6.0.0 Beta1及以上版本，按以下步骤操作："
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在页面上方，按照以下的树状结构呈现扫描结果。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "模块名\n----混淆选项\n--------扫描任务：扫描出来推荐配置白名单字段的数量\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "选中一个扫描任务，在页面下方会按照以下的树状结构，显示推荐的保留选项和白名单字段。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "保留选项\n----关键代码\n--------白名单字段 --> 字段所在文件:代码行\n"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "关键代码"
                    })
                  }), "：点击关键代码，可以跳转到代码所在的文件和代码行。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(855177)/* ["default"] */.A) + "",
                    width: "1383",
                    height: "622"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "白名单字段"
                    })
                  }), "：点击白名单字段，可以跳转到字段所在的文件和代码行。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(743406)/* ["default"] */.A) + "",
                    width: "1384",
                    height: "592"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果需要将白名单文件生成到工程中，可以点击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "生成推荐白名单"
                })
              }), "按钮，ObfuscationHelper会在对应模块下生成推荐白名单文件Hm-recommend-keep-list.txt/Hm-recommend-consumer-keep-list.txt，并提示对应的文件路径。同时在工程根目录下生成对应的白名单Excel表格obfuscation-helper-xxx.xlsx。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(346271)/* ["default"] */.A) + "",
                width: "516",
                height: "287"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "OK"
                  })
                }), "，会关闭提示框，停留在推荐白名单场景。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "跳转待排查"
                  })
                }), "，会关闭提示框，进入到待排查白名单场景。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果勾选", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "合并白名单文件"
                })
              }), "，点击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "OK"
                })
              }), "或者", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "跳转待排查"
                })
              }), "时，会在工程根目录下生成合并后的白名单文件Hm-merge-recommend-keep-list.txt，该文件会合并entry模块的Hm-recommend-keep-list.txt和所有模块的Hm-recommend-consumer-keep-list.txt。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如以下模块下生成推荐白名单文件："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(434609)/* ["default"] */.A) + "",
                width: "1571",
                height: "494"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在混淆配置中添加白名单文件，有两种方式。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["在各模块的build-profile.json5中，将Hm-recommend-keep-list.txt加入到混淆配置files字段下，将Hm-recommend-consumer-keep-list.txt加入到consumerFiles字段下。关于字段的介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#section88021016154414",
                  children: "字段说明"
                }), "。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "将合并后的文件Hm-merge-recommend-keep-list.txt配置在entry模块build-profile.json5的files字段下。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(993913)/* ["default"] */.A) + "",
                width: "1127",
                height: "759"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "使用DevEco Studio 6.0.0 Beta1以下版本，按以下步骤操作："
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在页面上方，按照以下的树状结构呈现扫描结果。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "模块名\n----混淆选项\n--------扫描任务：扫描出来推荐配置白名单字段的数量\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "选中一个扫描任务，在页面下方会按照以下的树状结构，显示推荐的保留选项和白名单字段。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "保留选项\n----关键代码\n--------白名单字段 --> 字段所在文件:代码行\n"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "关键代码"
                    })
                  }), "：点击关键代码，可以跳转到代码所在的文件和代码行。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(730687)/* ["default"] */.A) + "",
                    width: "1108",
                    height: "630"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "白名单字段"
                    })
                  }), "：点击白名单字段，可以跳转到字段所在的文件和代码行。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.img, {
                    src: (__webpack_require__(716105)/* ["default"] */.A) + "",
                    width: "1252",
                    height: "705"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果需要将白名单文件生成到工程中，可以点击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "生成推荐白名单"
                })
              }), "按钮，ObfuscationHelper会在对应模块下生成Hm-recommend-keep-list.txt文件，并提示对应的文件路径。同时在工程根目录下生成对应的白名单Excel表格obfuscation-helper-xxx.xlsx。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(429330)/* ["default"] */.A) + "",
                width: "515",
                height: "201"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "点击OK，会关闭提示框，停留在推荐白名单场景。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "点击跳转待排查，会关闭提示框，进入到待排查白名单场景。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如以下模块下生成推荐白名单文件："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(356467)/* ["default"] */.A) + "",
                width: "1839",
                height: "820"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在模块下的build-profile.json5中，将模块下生成的推荐白名单文件Hm-recommend-keep-list.txt加入到混淆配置files或consumerFiles字段下。关于字段的介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "#section88021016154414",
                children: "字段说明"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(132109)/* ["default"] */.A) + "",
                width: "1333",
                height: "693"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置待排查白名单",
      children: "配置待排查白名单"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在待排查白名单配置页面，可以查看扫描出来的关键代码，需要开发者根据业务进一步排查，识别白名单字段并配置到文件中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "使用DevEco Studio 6.0.0 Beta1及以上版本，按以下步骤操作："
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在页面上方，按照以下的树状结构呈现扫描结果。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "模块名\n----混淆选项\n--------扫描任务：扫描出来待排查的关键代码的数量\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "选中一个扫描任务，在页面下方会显示待排查的代码。点击关键代码，可以跳转到代码所在的文件和代码行。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(97156)/* ["default"] */.A) + "",
                width: "1312",
                height: "702"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["跳转到关键代码后，根据具体场景识别是否需要配置白名单字段，排查方式请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "#section18125192133818",
                children: "扫描任务"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["如果排查后不需要配置白名单，点击", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "待排查"
                  })
                }), "，选择", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "已排查"
                  })
                }), "，标记该项已经排查。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["如果排查后需要配置白名单，点击", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "添加白名单"
                  })
                }), "，在输入框中输入保留选项和白名单字段，点击", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "保存白名单"
                  })
                }), "。保存后该排查项会被标记为已排查。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "被标记为已排查的排查项，后续再次扫描该模块和场景时，如果关联本次的排查记录，将不再需要重复排查。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(625511)/* ["default"] */.A) + "",
                width: "701",
                height: "578"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["排查完成后，点击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "生成排查白名单"
                })
              }), "按钮，ObfuscationHelper会在对应模块下生成排查白名单文件Hm-manual-keep-list.txt/Hm-manual-consumer-keep-list.txt，并提示对应的文件路径。同时在工程根目录下生成对应的白名单Excel表格obfuscation-helper-xxx.xlsx。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(219268)/* ["default"] */.A) + "",
                width: "512",
                height: "263"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果勾选", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "合并白名单文件"
                })
              }), "，点击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "OK"
                })
              }), "，会在工程根目录下生成合并后的白名单文件Hm-merge-manual-keep-list.txt，该文件会合并entry模块的Hm-manual-keep-list.txt和所有模块的Hm-manual-consumer-keep-list.txt。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如以下模块下生成排查白名单文件："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(702925)/* ["default"] */.A) + "",
                width: "1874",
                height: "795"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在混淆配置中添加白名单文件，有两种方式。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["在各模块的build-profile.json5中，将Hm-manual-keep-list.txt加入到混淆配置files字段下，将Hm-manual-consumer-keep-list.txt加入到consumerFiles字段下。关于字段的介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#section88021016154414",
                  children: "字段说明"
                }), "。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "将合并后的文件Hm-merge-manual-keep-list.txt配置在entry模块build-profile.json5的files字段下。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(16698)/* ["default"] */.A) + "",
                width: "1124",
                height: "699"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "使用DevEco Studio 6.0.0 Beta1以下版本，按以下步骤操作："
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在页面上方，按照以下的树状结构呈现扫描结果。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "模块名\n----混淆选项\n--------扫描任务：扫描出来待排查的关键代码的数量\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "选中一个扫描任务，在页面下方会按照“关键代码 --> 代码所在文件: 代码行”的结构，显示待排查的代码。点击关键代码，可以跳转到代码所在的文件和代码行。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(24187)/* ["default"] */.A) + "",
                width: "1251",
                height: "698"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["跳转到关键代码后，根据具体场景识别是否需要配置白名单字段，排查方式请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "#section18125192133818",
                children: "扫描任务"
              }), "。如果存在需要配置的字段，在上方的输入框中，输入保留选项和对应的白名单字段。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(151366)/* ["default"] */.A) + "",
                width: "672",
                height: "508"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["排查完成后，点击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "生成排查白名单"
                })
              }), "按钮，ObfuscationHelper会在对应模块下生成Hm-manual-keep-list.txt文件，并提示对应的文件路径。同时在工程根目录下生成对应的白名单Excel表格obfuscation-helper-xxx.xlsx。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(450748)/* ["default"] */.A) + "",
                width: "515",
                height: "190"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "如以下模块下生成排查白名单文件："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(295345)/* ["default"] */.A) + "",
                width: "1865",
                height: "671"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在模块下的build-profile.json5中，将模块下生成的排查白名单文件Hm-manual-keep-list.txt加入到混淆配置files或consumerFiles字段下。关于字段的介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "#section88021016154414",
                children: "字段说明"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(205373)/* ["default"] */.A) + "",
                width: "1143",
                height: "603"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看历史记录",
      children: "查看历史记录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击生成推荐白名单或者待排查白名单后，会生成一条历史记录，方便开发者后续查看和继续排查白名单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在ObfuscationHelper的首页，点击底部的", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "历史记录"
        })
      }), "按钮，可查看所有的历史记录。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(610269)/* ["default"] */.A) + "",
        width: "844",
        height: "335"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "保存路径是历史记录的缓存文件，鼠标悬停在保存路径上，可以查看白名单文件和Excel表格保存的路径。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击查看详情图标", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(311529)/* ["default"] */.A) + "",
          width: "13",
          height: "14"
        }), "，可以跳转到对应的白名单场景配置页面。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击删除图标，可以删除指定的历史记录，以及对应的缓存文件和Excel表格，但是不会删除白名单文件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "扫描任务",
      children: "扫描任务"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是ObfuscationHelper的扫描任务，关于保留选项的原理介绍和排查场景请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation",
        children: "混淆规则"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "属性混淆"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "JSON数据解析及对象序列化"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在使用JSON/ArkTSUtils.ASON进行转换时，对象类型中的属性需要被保留。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// JSON.parse\nclass JSONTest {\n  prop1: string = \"\"\n  prop2: number = 0\n}\n// 示例JSON文件test.json\n/*\n{\n  \"prop1\": \"value\",\n  \"prop2\": 10\n}\n*/\nconst jsonData = buffer.from(this.context.resourceManager.getRawFileContentSync(\"test.json\")).toString();\nlet demo: JSONTest = JSON.parse(jsonData)       // JSONTest加入keep-property-name\nlet demo = JSON.parse(jsonData) as JSONTest     // JSONTest加入keep-property-name\nlet demo = JSON.parse(jsonData) as ESObject as JSONTest      // JSONTest加入keep-property-name\nlet demo: ESObject = JSON.parse(jsonData)       // 没有明确类型的，包括(ESObject、Object、object)加入待排查白名单中，需要将jsonData中所有的key，如prop1/prop2加入keep-property-name\n\n// ArkTSUtils.ASON.parse\nlet demo: JSONTest = ArkTSUtils.ASON.parse(jsonData)      // JSONTest加入keep-property-name\nlet demo = ArkTSUtils.ASON.parse(jsonData) as JSONTest    // JSONTest加入keep-property-name\nlet demo = ArkTSUtils.ASON.parse(jsonData) as ESObject as ESObject as JSONTest    // JSONTest加入keep-property-name\nlet demo: ESObject = ArkTSUtils.ASON.parse(jsonData)      // 没有明确类型的，包括(ESObject、Object、object)加入待排查白名单中，需要将jsonData中所有的key，如prop1/prop2加入keep-property-name\n\n// JSON.stringify\nlet type = new JSONTest()\nlet str = JSON.stringify(type)    // JSON.stringify加入待排查白名单，需要将JSONTest中的所有属性加入-keep-property-name\n\n// ArkTSUtils.ASON.stringify\nlet type = new JSONTest()\nlet str = ArkTSUtils.ASON.stringify(type)  // ArkTSUtils.ASON.stringify加入待排查白名单，需要将JSONTest中的所有属性加入-keep-property-name\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "通过字符串访问的对象属性"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过中括号形式访问的对象属性，以及Object.defineProperty/Object.defineProperties/Object.getOwnPropertyDescriptor接口中的属性需要被保留。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过中括号形式访问的属性如obj['name']，如果name是变量，加入待排查白名单，需要将name对应的内容加入-keep-property-name\nObject.defineProperty(obj, 'y', {})   // 如果y是变量，加入待排查白名单，需要将y对应的内容加入-keep-property-name\nObject.defineProperties(obj, {        // 属性prop1/prop2加入推荐白名单-keep-property-name\n  prop1: {\n    value: 'Hello',\n    writable: true,\n    enumerable: true,\n    configurable: true\n  },\n  prop2: {\n    value: 'Hello',\n    writable: true,\n    enumerable: true,\n    configurable: true\n  } \n});\nObject.getOwnPropertyDescriptor(obj, 'bbb');    // 如果bbb是变量，加入待排查白名单，需要将bbb对应的内容加入-keep-property-name\nobj.s=0; let key='s'; obj[key]    // key是变量，加入待排查白名单，需要将key对应的内容s加入keep-property-name\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C++侧访问/操作ArkTS对象属性"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者需要根据C++接口来排查与其相关的ArkTS中的属性字符串，并手动加入白名单中，涉及的C++接口参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-property",
            children: "使用Node-API接口设置ArkTS对象的属性"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//index.ets\nfunc() {\n  let obj: NapiTestClassObj = { napiTestClassObjData: 0, napiTestClassObjMessage: \"hello world\" };\n  let result: ESObject = testNapi.setProperty(obj, \"napiTestClassObjMessage\", \"100\");    // 根据napi_set_property接口排查到ArkTS中的属性napiTestClassObjMessage被修改，需要将napiTestClassObjMessage加入-keep-property-name白名单\n  if (obj.napiTestClassObjMessage === \"100\") {\n    console.log(\"setProperty success\");\n    return true;\n  }\n  return false;\n}\n//napi_init.cpp\nstatic napi_value SetProperty(napi_env env, napi_callback_info info) {\n    size_t argc = 3;\n    napi_value args[3];\n    napi_status status = napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_get_cb_info fail\");\n    }\n    status = napi_set_property(env, args[0], args[1], args[2]);    // 扫描napi_set_property关键API\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_set_property fail\");\n        return nullptr;\n    }\n    return args[0];\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "数据库键值对类型（ValuesBucket）中的属性"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "数据库键值对类型（ValuesBucket）中的属性需要被保留。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const valueBucket: ValuesBucket = {\n  'ID1': ID1,    // ID1、NAME1、AGE1、SALARY1加入到-keep-property-name\n  'NAME1': name,\n  'AGE1': age,\n  'SALARY1': salary\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "自定义装饰器修饰的成员变量、方法、参数"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义装饰器修饰的成员变量、方法、参数，需要排查是否加入白名单。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function logClass(target: any) {\n  console.log('类被创建：', target);    // MyClass未参与混淆，因此被@logClass修饰的类名不需要加入白名单\n  return target;\n}\nexport function logMethod(target: any, methodName: string, descriptor: PropertyDescriptor) {\n  const originalMethod = descriptor.value;\n  descriptor.value = function (...args: any[]) {\n   if(methodName === 'myMethod'){    // methodName会被混淆，与'myMethod'作比较不符合预期，因此被@logMethod修饰的方法名myMethod需要加入白名单\n      console.log('调用myMethod方法')\n    }\n    console.log(`方法 ${methodName} 即将被调用，参数为：`, args);\n    const result = originalMethod.apply(this, args);\n    console.log(`方法 ${methodName} 调用完毕，结果为：`, result);\n    return result;\n  };\n  return descriptor;\n}\nfunction logProperty(target: any, propertyName: string) {\n  let value;\n  const getter = function () {\n    console.log(`正在获取属性 ${propertyName}`);   // propertyName会被混淆，但不影响运行结果，不需要加入白名单\n    return value;\n  };\n  const setter = function (newValue: any) {\n    console.log(`正在设置属性 ${propertyName}，新值为：${newValue}`);\n    value = newValue;\n  };\n  Object.defineProperty(target, propertyName, {\n    get: getter,\n    set: setter,\n    enumerable: true,\n    configurable: true\n  });\n  return;\n}\n@logClass\nclass MyClass {    // 自定义装饰器修饰的类名，需要排查MyClass是否加入白名单\n  @logProperty\n  myProperty: number;    // 自定义装饰器修饰的属性，需要排查myProperty是否加入白名单\n  constructor() {\n    this.myProperty = 10;\n  }\n  @abcd\n  @logMethod\n  myMethod(arg1: number, arg2: number) {    // 自定义装饰器修饰的方法，需要排查myMethod是否加入白名单\n    return arg1 + arg2;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Record类型对象的属性"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Record类型对象的属性需要被保留。该场景从DevEco Studio 6.0.1 Beta1版本开始支持。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 支持扫描的场景\nexport function hello() {\n  const person: Record<string, Object> = {\n    ddName: 'zhangsan',    // Record类型对象person的属性ddName、ggAge、isWfStudent，加入到-keep-property-name\n    ggAge: 25,\n    isWfStudent: true\n  }\n  person.wwArea = '112';     // 通过点语法新增的属性wwArea，加入到-keep-property-name\n  return person;\n}\n// 不支持扫描的场景\n// 1、调用该方法获取Record类型对象，通过点语法添加sssd属性不支持扫描，该属性会被混淆\nlet ret = hello();\nret.sssd = '1111';\n// 2、隐式Record类型的对象parameters的属性a123、b123不支持扫描，会被混淆\nexport function sendPost3() {\n  const want: Want = {\n    action: 'ohos.want.action.viewData',\n    entities: ['entity.system.browsable'],\n    uri: '123',\n    parameters: {\n      a123: 1,\n      b123: 2\n    }\n  };\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "顶层作用域名称混淆"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "namespace中导出的名称"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "namespace中导出的名称、嵌套namespace中导出的名称都需要被保留。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export namespace namespace1 {\n  export class namespace1Class1 {      // namespace1Class1加入推荐白名单-keep-global-name\n  }\n  export namespace namespace1_1 {      // namespace1_1加入推荐白名单-keep-global-name\n    export let namespace1Property1_1: string = '111';      // namespace1Property1_1加入推荐白名单-keep-global-name\n    export function namespace1Func1_1() {      // namespace1Func1_1加入推荐白名单-keep-global-name\n      console.log('namespace1Func1_1 execute success');\n    }\n    export class namespaceClass1_1{      // namespaceClass1_1加入推荐白名单-keep-global-name\n      func(){\n        console.log(\"\"namespaceClass1_1 success\"\")\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "动态导入的名称"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "动态导入的接口名、属性名和类名，需要被保留。该场景从DevEco Studio 6.0.0 Beta2版本开始支持。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导入模块后，使用的类名TestClass加入推荐白名单keep-global-name\ntry {\n  let test = (await import('../model/TestClass')).TestClass\n  console.warn(TAG, 'test = ', test);\n  // console.warn(TAG, 'test TestClass = ', test.);\n  console.warn(TAG, 'test staticGlsAdd = ', test.staticGlsAdd(5, 6));\n} catch (e) {\n  console.warn(TAG, `error = ${e}`);\n}\n// 导入模块后，使用的方法名componentClass加入推荐白名单keep-global-name\nlet util = await import('harlibrary/src/main/ets/utils/Util');\ntry {\n    console.warn(TAG, 'util = ', util);\n    console.warn(TAG, 'call util function = ', await util.componentClass());\n} catch (e) {\n    console.warn(TAG, `error = ${e}`);\n}\n// 导入模块后，使用default后调用的方法warn加入推荐白名单keep-global-name\nimport('hsplibrary/src/main/ets/utils/Logger').then(logger => {\n    try {\n    console.warn(TAG, 'import Logger success.');\n    logger.default.warn('this is logger warn')\n    } catch (e) {\n    console.warn(TAG, `error = ${e}`);\n    }\n})\n// 将动态导入封装为方法，导出的类实例如果是变量，加入待排查白名单，需要排查后将变量对应的值加入keep-global-name\npublic static importFile<T>(modulePath: string, resultClassName: string) {\n    return import(modulePath).then((ns: ESObject) => {\n      let res: T = new ns[resultClassName]();   // 该行加入待排查白名单，排查后将resultClassName对应的值TestClass加入keep-global-name\n      return res;\n    }).catch((err: Error) => {\n      console.warn('chisj debug: importFile error = ', err);\n      return undefined;\n    });\n  }\n// Index.ets\nlet modulePath = '../model/TestClass';\nlet className = 'TestClass';\nImportUtil.importFile<ESObject>(modulePath, className).then((ns:ESObject) => {\n    try {\n    console.warn(TAG, 'import importFile success')\n    console.warn(TAG, 'ns = ', ns)\n    console.warn(TAG, 'calcAdd = ', ns?.calcAdd(1, 2));\n    } catch (e) {\n    console.warn(TAG, `error = ${e}`);\n    }\n})\n// 将动态导入封装为方法，导出的模块myModule调用的方法Calc加入推荐白名单\n// ImportUtil.ts\nexport function dynamicImport<T>(modulePath: string): Promise<T> {\n  return import(modulePath).then(module => {\n    // 有些模块可能有默认导出，这里处理一下\n    return module.default || module as T;\n  });\n}\n// Index.ets\nconst myModule = await dynamicImport<typeof import('harlibrary')>('harlibrary');\nconsole.warn(TAG, '1 calc = ', myModule.Calc(1, 2))\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "文件名名称混淆"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "动态导入的路径名"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块下build-profile.json5文件中，sources字段对应的路径名需要被保留。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 模块级build-profile.json5\n{\n  \"apiType\": \"stageMode\",\n  \"buildOption\": {\n    \"arkOptions\": {\"runtimeOnly\": {\"sources\": [\"./aaa/bbb\", \"./ccc/dddd\"]}}  //./aaa/bbb和./ccc/dddd加入keep-file-name\n  },\n  \"buildOptionSet\": [\n    {\n      \"name\": \"release\",\n      \"arkOptions\": {\n        \"runtimeOnly\": {\"sources\": [\"./e/f\", \"./g/h\"]},  // ./e/f和./g/h加入keep-file-name\n        \"obfuscation\": {\n          \"ruleOptions\": {\n            \"enable\": true,\n            \"files\": [\n              \"./obfuscation-rules.txt\"\n            ]\n          }\n        }\n      },\n    },\n  ],\n......\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "传递给动态路由的路径名"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "模块下resources/base/profile/route_map.json中，pageSourceFile字段对应的路径名需要被保留。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 模块下resources/base/profile/route_map.json文件\n{\n  \"routerMap\": [\n    {\n      \"name\": \"PageOne\",\n      \"pageSourceFile\": \"src/main/ets/pages/directory/PageOne.ets\",  // src/main/ets/pages/directory/PageOne.ets加入keep-file-name\n      \"buildFunction\": \"PageOneBuilder\",\n      \"data\": {\n        \"description\" : \"this is PageOne\"\n      }\n    }\n  ]\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "导入/导出名称混淆"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "从so库导入的接口"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从so库中导入的接口及其点式调用的属性，需要被保留。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import testNapi from \"xxxx.so\"    // testNapi加入keep-global-name\nimport {testNapi} from \"xxxx.so\"  // testNapi加入keep-global-name\nimport {testNapi as napi} from \"xxxx.so\"    // testNapi加入keep-global-name\ntestNapi.add()    // add加入-keep-property-name\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "hsp对外暴露的接口"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "hsp的入口文件(一般为index.ets)中导出的接口名及其属性名，需要被保留。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 导出的常量\nexport const LOCAL_NUM = 100  // LOCAL_NUM加入keep-global-name\n// 导出的方法\nexport function harFun() {    // harFun加入keep-global-name\n}\n// 导出的类名及其属性(包括该类的父类和属性)，如果属性也是一个类，该类也需要以同样的方式保留。\nclass FatherClass {\n  prop4: string = \"bbb\"\n}\nclass SubClass {\n  prop3: string = \"bbb\"\n}\nexport class HSPClass extends FatherClass{    // 类名称HSPClass加入到-keep-global-name\n  prop1: string = \"aaa\" \n  prop2: SubClass = new SubClass()    // 属性prop1,prop2,prop3,prop4加入到-keep-property-name\n}\n\n// 导出的namespace，包括其中的方法、常量、类(保留方式同上)、子namespace\nexport namespace NmSpace {\n  export const NUM_NAME_SPACE = 100   // 常量NUM_NAME_SPACE加入-keep-global-name\n  export class classNameSpace {       // 类名称classNameSpace加入-keep-global-name\n     prop: string = \"bbb\"             // 类属性prop加入-keep-property-name\n  }\n  export function funNameSpace() {    // 方法funNameSpace加入-keep-global-name\n  }\n}\n// 将入口文件相对路径,如 ./index.ets加入keep保留选项。\n// 将入口文件名如index.ets加入keep-file-name保留选项。\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "从hsp导入的接口"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从hsp中导入的接口及其点式调用的属性，需要被保留。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import MyClass1 from \"xxxx\"     // MyClass1加入keep-global-name\nimport {MyClass2} from \"xxxx\"   // MyClass2加入keep-global-name\nimport {MyClass3 as MyClass} from \"xxxx\"    // MyClass3加入keep-global-name\nMyClass1.add()    // add加入keep-property-name\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "har对外暴露的接口"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#li15198347161014",
            children: "hsp对外暴露的接口"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "仅当hap->hsp->har，同时hap->har时，该har会被扫描，其中->表示依赖关系。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(482269)/* ["default"] */.A) + "",
            width: "735",
            height: "244"
          })
        }), "\n"]
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
782711(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913836-879e87c154d3d6a9ca9c5370d3e89477.png");

},
295345(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753779-c0ed9445ecfd9ac7e3005336e3757fe4.png");

},
963977(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
424603(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913824-ed34e9ae3e3ea238383e438b16a63667.png");

},
205373(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913806-8af5b4cfd067fa15c667b7db330276ee.png");

},
132109(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913796-f576fa9f210990ffa2ad08db94e364b5.png");

},
363645(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
625511(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753765-d9e171f3596a8916398480e7880189ec.png");

},
610269(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753816-d47e02b05723c3480ef7f7fbe8e501bd.png");

},
292184(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
97156(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833733-0e666c99b7d1a144e67c5a51caea71d9.png");

},
151366(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753820-86d3dc84f501826c9ee255fbe5637d8d.png");

},
24187(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833759-5a9b20b2735742969982d9ee22232d39.png");

},
482269(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833755-f01553690c7cebe13bb4a22d8f52ea7d.png");

},
743406(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833741-3cbee5e5497bd6df6d441551272648e2.png");

},
855177(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833717-a944e915f6713d8cdb79f3faf711961a.png");

},
702925(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913800-c6c52ff5c54544df233693555d20d913.png");

},
429330(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753838-aa2817f206c754ddc7e4cf8fd8f39a57.png");

},
743641(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913790-df66ec3e288873eb05083425766e61b9.png");

},
716105(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753812-c4eb33ce1f6ae8ebd1d804e4473451cf.png");

},
356467(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753828-d68b07d6e59ade9ba3aec013bd7c32ba.png");

},
311529(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAAvklEQVQoFY1RURHDMAjFCXUQCcRBJSAhEjIHSKiESMgcIKESkMB6pZe1u/Zu7wvI48EL4P8BpmmCZ+ScQweWZXlSNDNENDN3h967u6vq+wpVdXciCsLBm+d5K53BzDe8p9Fb50VPRF47Wmvnnhte3dFai11jfWZe1/XrY2gwMxEx83AaT4ePSMwspRRxKUVESimXfxk8RDzzIr6ZW2tFxJwzAIjIl3dOoqqqvffYYdiHlNLPeYkoGswsrrLN/QACGIu8sGZFqgAAAABJRU5ErkJggg==");

},
219268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753775-32701116f6edd5f1779006d6dcfb5675.png");

},
730687(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833729-9da6c34fbed9a5df914743c9c673f0e2.png");

},
450748(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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Tn38uMmExjpONiv2QGBwApU5QU990GLw4ddJy0j1XFb6Lb22eeamt7YpDffo62fph5szs1s/BHAC/wkTfR3jlmedyEH5s831cyQNUybrZOmHCSlzWecEcILCBUIOCtEMewVLP+wrzPxiAjhBTES2kQNB0bQCS9+0FWe+FTgBECEAAQhAoNYEcIJaLx/JQwACEKiAAE5QAURCQAACEKg1AZyg1stH8hCAAAQqIIATVACREBCAAARqTQAnqPXykTwEIACBCgjgBBVAJAQEIACBWhPACWq9fCQPAQhAoAICOEEFEAkBAQhAoNYEcIJaLx/JQwACEKiAAE5QAURCQAACEKg1AZyg1stH8hCAAAQqIIATVACREBCAAARqTQAnqPXykTwEIACBCgjgBBVAJAQEIACBWhPACWq9fCQPAQhAoAICOEEFEAkBAQhAoNYEcIJaLx/JQwACEKiAAE5QAURCQAACEKg1AZyg1stH8hCAAAQqIIATVACREBCAAARqTQAnqPXykTwEIACBCgjgBBVAJAQEIACBWhPACWq9fCQPAQhAoAICOEEFEAkBAQhAoNYEcIJaLx/JQwACEKiAAE5QAURCQAACEKg1AZyg1stH8hCAAAQqIIATVACREBCAAARqTQAnqPXykTwEIACBCgjgBBVAJAQEIACBWhPACWq9fCQPAQhAoAICOEEFEAkBAQhAoNYEcIJaLx/JQwACEKiAAE5QAURCQAACEKg1AZyg1stH8hCAAAQqIIATVACREBCAAARqTQAnqPXykTwEIACBCgjgBBVAJAQEIACBWhPACWq9fCQPAQhAoAICOEEFEAkBAQhAoNYEcIJaLx/JQwACEKiAAE5QAURCQAACEKg1AZyg1stH8hCAAAQqIIATVACREBCAAARqTQAnqPXykTwEIACBCgjgBBVAJAQEIACBWhPACWq9fCQPAQhAoAICOEEFEAkBAQhAoNYEcIJaLx/JQwACEKiAAE5QAURCQAACEKg1AZyg1stH8hCAAAQqIIATVACREBCAAARqTQAnqPXykTwEIACBCgjgBBVAJAQEIACBWhPACWq9fCQPAQhAoAICOEEFEAkBAQhAoNYEcIJaLx/JQwAChQROzfUPHO3/4rmFHx7qP9JbaNrrJ9P93bMLMy8X8tEVOIGmQRkCEBgGAmfn+0/NLGzbu7B1N6+F7+5feOnUQvm64gTlfKiFAATqR+Cx6cQAtu1ZuKehr3PfCkZ4z94lzAAnqN9RTsYQgEAJgenf9N2lwP/sPbdj/NxDE4tNft036v1gx/6yywKcoOSIogoCEKgfge5Bc0Gwbc+5ByfOPTB67o4Hn//o1/Z9ZMtY017/sG3qG7tOPzSx+J2xc84aZ4ufGeAE9TvQyRgCECgi8Nr8wt17jBPcN7q4Y3zxb7/Z+/CWsSa/vm7NwN0m2j1beFmAExQdUeyHAATqR+DYK/7W0P3ji9964tUme4Cb+8e3TT00sXjPHnNZ8Ng0TlC/Q5qMIQCBZRN44bfeCR4YX/zaz17BCT5y57h1AnOd9P1eIU+uCQrRUAEBCNSOwJETiRN89aenPrxlnJc4wSM9rglqd0STMAQgsHwCkRP8xZZxXjjB8o8jekAAAnUmgBNknQ8nqPMRTe4QgMDyCeAEOMHyjxp6QAACw0UAJ8AJhuuIZjYQgMDyCWgn+I+fnPrQ5vGL87px55nz6ufY6KQe984ZWzcz43YmjcMe3bjyMneHln8c0QMCEKgzgYvvBDdumvxeygXEEM7cuWnMybp2ghs3zYy5JhfFBj60OfkUKZ8dqvOhTe4QgMDABDJOMPGhzav7+uToohN2ex1gxrpx+/FjXutn3ejBCcymL5+fu3PT+Grn5uJzTTDw4UNDCEBgKAhETnDj5olVfW3YNBtO8Gf1QLd6e1j83vbxGzdPbPF3h2Y37JxzHjG20+y/OC+cYCgObSYBAQgMTOBiO4FXdq/4ouwbwmWBU/zgBHPONo6NTkrLi1DACQY+fGgIAQgMBYH14gThWsGJvncCdzlwPraN1TYDnGAoDm0mAQEIDExgvThB/jXBcf9s+czxWzdxd2jgRaUhBCAAgWURiJxgw+aJVX3dEBT/2OikHuiW8Jzg4e3jG9RzAml/fmZWt1/VMtcEyzqEaAwBCNSewEV2gkTlz58XM7ghPBYWuQ/PCYz6B5M4P7bTmMRFeOEEtT+smQAEILAsAhkn2Ldh8+q+btg09XDu9wnOHL9l04QbPTjBkQ2b96n2iw9v9w1WNUmcYFmHEI0hAIHaE7j4TuBEXM70w3cLprS4aycwZhDuKZ0/P7cluIVuX20ZJ6j9Yc0EIACBZRGInOCGTft44QTLOoRoDAEI1J4ATpB1Ppyg9oc1E4AABJZFACfACZZ1wNAYAhAYQgJpJ3glK4sN3MM1wRAe6EwJAhAoIfDrU+ZPt2/dvfDA+OJ/7jpz/aZ9DX/95dcOihPsnOTvGJccO1RBAALDQuC3Z/xftP/O2OJ9e/vXb9rf8NdnHzz60MTi3XvObd29sOtZnGBYDnTmAQEIlBO4d9xcE2wfPffQxOKXHz3ZZCf46F3T94+e2zFubGDr7oUDRwvJjRTWUAEBCECghgR+edhfFtw/Zszgvr39b+w6c+dPXmnaa+sTr+2YWHxw4tw9e4wNbNu7cGqucDlxgkI0VEAAAnUkcPJM/9ujRvvclcH/jp17YHyxga/7xxfvG13cZu8Lbd298NRM4a2hfr+PE9TxUCdnCECgjMCRE4kZOEto+L+PTS+cnS8jhhOU0aEOAhCoKYGTZ/q/PNx3zwwaawN371noHlyY/s3Sa4gTLM2IFhCAQH0JnJzrHz3ZP3Kica+XT/dfmy+7I6TXFCfQNChDAAIQaCIBnKCJq86cIQABCGgCOIGmQRkCEIBAEwngBE1cdeYMAQhAQBPACTQNyhCAAASaSOD/ATRWmgltKkE+AAAAAElFTkSuQmCC");

},
16698(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753771-cceea4e610bfdd1cdbd19a7192b206be.png");

},
346271(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753757-37bd321f5f83ff2bbdb30ff5c36f3b59.png");

},
434609(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833713-f02c7fb9d5d89b1f940b2e04c145806f.png");

},
993913(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913816-9f343dcdbc93cfa42427cee95f4ace69.png");

},
918009(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913810-ba658cf70bcabd298a397301d6be1bf8.png");

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