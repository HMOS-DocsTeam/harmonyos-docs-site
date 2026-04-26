"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["418607"], {
345194(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_compilation_tool_chain_arkts_arkguard_source_obfuscation_guide_source_obfuscation_guide_md_218_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-compilation-tool-chain-arkts-arkguard-source-obfuscation-guide-source-obfuscation-guide-md-218.json
var site_docs_arkts_arkts_compilation_tool_chain_arkts_arkguard_source_obfuscation_guide_source_obfuscation_guide_md_218_namespaceObject = JSON.parse('{"id":"arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-guide/source-obfuscation-guide","title":"ArkGuard混淆开启指南","description":"开启源码混淆","source":"@site/docs/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-guide/source-obfuscation-guide.md","sourceDirName":"arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-guide","slug":"/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-guide/","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"ArkGuard混淆开启指南","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/source-obfuscation-guide","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkGuard混淆原理及功能","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation/"},"next":{"title":"不同包类型的源码混淆建议","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-practice/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-guide/source-obfuscation-guide.md


const frontMatter = {
	title: 'ArkGuard混淆开启指南',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/source-obfuscation-guide',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkGuard混淆开启指南';

const assets = {

};



const toc = [{
  "value": "开启源码混淆",
  "id": "开启源码混淆",
  "level": 2
}, {
  "value": "开启混淆步骤",
  "id": "开启混淆步骤",
  "level": 3
}, {
  "value": "三种混淆配置文件",
  "id": "三种混淆配置文件",
  "level": 3
}, {
  "value": "混淆选项配置指导",
  "id": "混淆选项配置指导",
  "level": 3
}, {
  "value": "说明",
  "id": "说明",
  "level": 3
}, {
  "value": "查看混淆效果",
  "id": "查看混淆效果",
  "level": 2
}, {
  "value": "报错栈还原",
  "id": "报错栈还原",
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
        id: "arkguard混淆开启指南",
        children: "ArkGuard混淆开启指南"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开启源码混淆",
      children: "开启源码混淆"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开启混淆步骤",
      children: "开启混淆步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统已集成源码混淆功能，开发者可通过以下方式在DevEco Studio中启用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启混淆开关"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在本模块build-profile.json5配置文件中的arkOptions.obfuscation.ruleOptions字段中，通过enable字段配置是否开启混淆。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"arkOptions\": {\n  \"obfuscation\": {\n    \"ruleOptions\": {\n      \"enable\": true, // 开启混淆开关。\n      \"files\": [\"./obfuscation-rules.txt\"] // 指定配置混淆规则文件, 在编译本模块时生效。\n    },\n    // ...\n  }\n},\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置混淆规则"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打开混淆开关，仅开启默认混淆功能，默认混淆范围为局部变量和参数。如需开启更多混淆功能，请在files字段指定的混淆配置文件obfuscation-rules.txt中进行选项配置。需要注意的是，不同版本的DevEco Studio，obfuscation-rules.txt文件中的默认值可能会有所不同。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以DevEco Studio5.0.3.600及更高版本为例，混淆配置文件如下所示，该配置内容表示开启属性名称混淆、顶层作用域名称混淆、文件名混淆及导入导出名称混淆功能："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "-enable-property-obfuscation\n-enable-toplevel-obfuscation\n-enable-filename-obfuscation\n-enable-export-obfuscation\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者可以使用#在混淆规则文件中添加注释，每行以#开头的文本将被视为注释。使用方法如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "# options:\n-enable-property-obfuscation\n-enable-toplevel-obfuscation\n-enable-filename-obfuscation\n# -enable-export-obfuscation\n-keep-property-name # white list for dynamic property names\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["推荐参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E6%B7%B7%E6%B7%86%E9%80%89%E9%A1%B9%E9%85%8D%E7%BD%AE%E6%8C%87%E5%AF%BC",
            children: "混淆选项配置指导"
          }), "进行混淆选项的配置。关于混淆过程中涉及的所有配置文件的详情，请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%B8%89%E7%A7%8D%E6%B7%B7%E6%B7%86%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",
            children: "三种混淆配置文件"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(7667)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在DevEco Studio 5.0.3.600之前，新建工程默认开启源码混淆，自动对API 10及以上版本的Stage模型进行混淆。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在DevEco Studio 5.0.3.600及更高版本中，新建工程的默认设置为关闭源码混淆。若需开启混淆，需将模块的build-profile.json5文件中的ruleOptions.enable字段设置为true。同时，混淆规则配置文件 obfuscation-rules.txt 默认启用了以下四项推荐的混淆选项：-enable-property-obfuscation、-enable-toplevel-obfuscation、-enable-filename-obfuscation和-enable-export-obfuscation。开发者可以根据需要进一步修改混淆配置。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置混淆保留选项"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开启混淆后，代码中的方法、属性或路径被混淆。但是在程序运行时，如果访问未混淆的方法、属性或路径，可能导致功能不可用。因此需要根据不同的场景配置保留选项。关于保留选项的排查场景和配置方法，参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9",
            children: "保留选项"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["排查场景和配置字段时，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-build-obfuscation#section19439175917123",
            children: "混淆助手配置保留选项"
          }), "，快速识别需要配置的保留选项和白名单字段。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指定release编译"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["源码混淆仅支持release编译，不支持debug编译。开启混淆开关后，release编译会进行混淆，debug编译则不会。开发者可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide#section192461528194916",
            children: "指定构建模式"
          }), "查看和修改构建模式。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(677241)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "release编译支持混淆，而debug编译不支持混淆。若要明确应用行为差异是否由混淆引起，应通过开启或关闭混淆开关进行排查，而不是仅通过切换编译模式。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "三种混淆配置文件",
      children: "三种混淆配置文件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "obfuscation-rules.txt"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在HAP、HAR和HSP模块的build-profile.json5配置文件中，均包含arkOptions.obfuscation.ruleOptions.files字段，该字段用于指定当前模块在编译过程中所应用的混淆规则，新建工程时，系统默认会生成混淆规则文件obfuscation-rules.txt作为初始配置。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "consumer-rules.txt"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对于HAR和HSP模块，在build-profile.json5中额外有一个arkOptions.obfuscation.consumerFiles字段，用于指定当本包被依赖时，期望在当前编译流程生效的混淆规则，新建HAR或HSP模块时会创建默认文件consumer-rules.txt。它与obfuscation-rules.txt的区别是：", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "obfuscation-rules.txt在编译本模块时生效，consumer-rules.txt在编译依赖本模块的其他模块时生效"
            })
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "build-profile.json5配置示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"arkOptions\": {\n  \"obfuscation\": {\n    \"ruleOptions\": {\n      \"enable\": true, // 开启混淆开关。\n      \"files\": [\"./obfuscation-rules.txt\"] // 指定配置混淆规则文件, 在编译本模块时生效。\n    },\n    \"consumerFiles\": [\"./consumer-rules.txt\"] // 指定配置混淆规则文件, 在编译依赖本模块的其他模块时生效。\n  }\n},\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(130018)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果在consumer-rules.txt文件中配置了", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#%E6%B7%B7%E6%B7%86%E9%80%89%E9%A1%B9",
            children: "混淆选项"
          }), "，可能会对依赖了HAR或HSP的主模块产生影响。因此，建议仅在该文件中配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#%E4%BF%9D%E7%95%99%E9%80%89%E9%A1%B9",
            children: "保留选项"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "obfuscation.txt"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["不同于以上两种开发者可自行修改的配置文件，obfuscation.txt是在编译构建HAR或HSP时根据consumer-rules.txt和依赖模块的混淆规则文件自动生成的文件，它作为一种编译产物存在于发布的HAR或HSP包中。在其他应用依赖该发布包时，会合并其中的混淆规则应用于当前编译流程。obfuscation.txt内容的生成及合并逻辑请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#%E6%B7%B7%E6%B7%86%E8%A7%84%E5%88%99%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5",
            children: "混淆规则合并策略"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(593708)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对三方库中obfuscation.txt文件，只有在模块的oh-package.json5文件中依赖三方库时，三方库中的obfuscation.txt文件才会生效。如果在工程的oh-package.json5文件中进行依赖，则三方库的obfuscation.txt文件不会生效。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表简要总结了三种混淆配置文件的差异："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "配置文件（示例）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "配置类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可修改配置"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否影响本模块的混淆"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否影响其他模块的混淆"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "obfuscation-rules.txt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "consumer-rules.txt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "obfuscation.txt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编译产物"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不涉及，构建HAR或HSP时自动生成。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不涉及"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "混淆选项配置指导",
      children: "混淆选项配置指导"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开启-enable-toplevel-obfuscation选项时，如果代码中使用globalThis访问全局变量，可能会导致访问失败。此时，需要使用-keep-global-name选项来保留该全局变量的名称。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["待上述选项应用适配成功后，开启-enable-property-obfuscation选项。此选项开启后，以下场景需要适配：\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "若代码中存在静态定义、动态访问的情况，或动态定义、静态访问的情况，需要使用-keep-property-name保留属性名称。示例如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 静态定义，动态访问：属性名在对象定义时是静态的，但访问时通过动态构建属性名（通常使用字符串拼接）来访问\n// ArkGuardAbility.ts\nconst obj001 = {\n  staticName: 'value'  // 静态定义属性\n};\nconst fieldName = 'static' + 'Name';  // 动态构建属性名，需使用-keep-property-name staticName来保留该属性名\nconsole.info(obj001[fieldName]);  // 使用方括号语法动态访问属性\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 动态定义，静态访问：属性名通过动态表达式在对象定义时确定，但访问时直接使用点语法（假设开发者知道属性名的结果）\n// ArkGuardAbility.ts\nconst dynamicExpression = 'dynamicPropertyName';\nconst obj002 = {\n  [dynamicExpression]: 'value'  // 动态定义属性\n};\nconsole.info(obj002.dynamicPropertyName);// 使用点语法静态访问属性，需使用-keep-property-name dynamicPropertyName来保留该属性名\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "若代码中使用点语法访问未在ArkTS/TS/JS代码中定义的字段，比如访问native实现的so库，字段固定的json文件与数据库等场景："
            }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["若在代码中引用so库的api，如import testNapi from 'library.so';testNapi.foo();需要使用-keep-property-name foo保留属性名称，详见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation#section-keep-property-name",
                  children: "选项说明"
                }), "。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "若在代码中使用json文件中的字段，需要使用-keep-property-name保留json文件中的字段名称。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "若在代码中使用数据库相关的字段，需要使用-keep-property-name保留数据库中的字段名称。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "若构建HAR模块并发布给其他模块使用的场景，要在HAR模块中的consumer-rules.txt文件中将不能被二次混淆的属性使用-keep-property-name保留。consumer-rules.txt文件在构建HAR时会生成obfuscation.txt文件。此HAR被其它模块依赖时，DevEco Studio会解析obfuscation.txt文件，读取文件中的白名单。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["验证应用功能，排查遗漏的场景。若应用出现功能异常，依据混淆后的报错栈从对应的", (0,jsx_runtime.jsx)(_components.a, {
                href: "#%E6%9F%A5%E7%9C%8B%E6%B7%B7%E6%B7%86%E6%95%88%E6%9E%9C",
                children: "中间产物"
              }), "中找到报错行的代码，排查需要配置的白名单并使用-keep-property-name进行保留。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["待上述选项应用适配成功后，开启-enable-export-obfuscation选项。此选项开启后，以下场景需要适配：\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "若构建HSP模块，它会提供接口及其属性给其它模块调用，因此需要将对外接口使用-keep-global-name来保留、将对外暴露的class/interface等语法中的属性使用-keep-property-name保留。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "若构建HAR模块并发布给其他模块使用的场景，要在HAR模块中的obfuscation-rules.txt文件中将对外接口使用-keep-global-name来保留，将对外暴露的class/interface等语法中的属性使用-keep-property-name保留。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "若在代码中引用so库的api，如import { napiA } from 'library.so'；需要使用-keep-global-namenapiA保留so接口名称。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["验证应用功能以及模块被依赖时的接口调用功能，排查遗漏的场景。若应用出现功能异常，依据混淆后的报错栈从对应的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%9F%A5%E7%9C%8B%E6%B7%B7%E6%B7%86%E6%95%88%E6%9E%9C",
              children: "中间产物"
            }), "中找到报错行的代码，排查需要配置的白名单并进行保留。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["待上述选项应用适配成功后，开启-enable-filename-obfuscation选项。此选项开启后，以下场景需要适配：\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "若代码中有动态import语句，如const path = './filePath'; import(path)，会出现文件引用失败的情况，需要使用-keep-file-name filePath来保留这个文件名。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["若应用中有描述路由表信息的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#routermap%E6%A0%87%E7%AD%BE",
              children: "routerMap配置"
            }), "，其中的pageSourceFile字段标记页面在模块的路径，需要使用-keep-file-name来保留这个路径。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "若代码中有传入ohmUrl进行页面跳转，如router.pushUrl({url: '@bundle:com.example.routerPage/Library/Index'})，使用-keep-file-name来保留这个路径。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["验证应用功能，排查遗漏的场景。若应用出现功能异常，且报错栈中的路径为混淆后的路径，可以在模块中的build/default/[...]/release/obfuscation/nameCache.json文件中查询到原始路径，进而找到源码文件。另外，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-command-line-hstack",
              children: "插件hstack"
            }), "支持自动还原混淆后的报错堆栈。在定位到需要保留的路径后，使用-keep-file-name来保留此路径。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "说明",
      children: "说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "目前不支持在hvigor构建流程中添加自定义混淆插件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "混淆后的远程HAR包被某模块依赖，如果该模块开启混淆，HAR包会被二次混淆。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查看混淆效果",
      children: "查看混淆效果"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "混淆结束后，会在编译产物的build目录中生成混淆后的中间产物。开发者可以查看这些中间产物以确认混淆效果。同时，该目录中还会生成名称映射表和系统API白名单文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "混淆后的文件目录：build/default/[...]/release/模块名。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "混淆名称映射表及系统API白名单目录：build/default/[...]/release/obfuscation。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "名称映射表文件：nameCache.json，该文件记录了源码名称混淆的映射关系。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "系统API白名单文件：systemApiCache.json，该文件记录了SDK中的接口与属性名称，工程源码中与其重名的元素不会被混淆。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(378200)/* ["default"] */.A) + "",
            width: "381",
            height: "423"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "报错栈还原",
      children: "报错栈还原"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["经过混淆的应用程序，代码名称会更改，导致crash时打印的报错栈难以理解。可使用DevEco Studio命令工具Command Line Tools中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-command-line-hstack",
        children: "hstack插件"
      }), "还原源码堆栈，进而分析问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请备份应用编译过程中生成的sourceMaps.map文件和混淆名称映射文件nameCache.json，反混淆工具需要这些文件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果使用自建在线平台或流水线构建应用，则会获取不到编译过程中生成的sourceMaps.map文件和混淆名称映射文件namecache.json，可以使用本地编译生成的对应文件进行代替。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "源代码映射信息文件：sourceMaps.map，该文件记录了压缩/转换后的代码到原始源代码之间的映射关系。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(554674)/* ["default"] */.A) + "",
        width: "566",
        height: "680"
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
130018(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
554674(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477547-5eaeb21d0c073157a111c4f3301537cf.png");

},
7667(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
677241(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
593708(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
378200(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957546-9475b50b7e23f86cfcf05dd3da7ca3bd.png");

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