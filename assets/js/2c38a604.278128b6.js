"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["630143"], {
11963(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_build_customization_ide_hvigor_compilation_options_customizing_ide_hvigor_compilation_options_customizing_guide_ide_hvigor_compilation_options_customizing_guide_md_2c3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-build-customization-ide-hvigor-compilation-options-customizing-ide-hvigor-compilation-options-customizing-guide-ide-hvigor-compilation-options-customizing-guide-md-2c3.json
var site_docs_ide_build_customization_ide_hvigor_compilation_options_customizing_ide_hvigor_compilation_options_customizing_guide_ide_hvigor_compilation_options_customizing_guide_md_2c3_namespaceObject = JSON.parse('{"id":"ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide/ide-hvigor-compilation-options-customizing-guide","title":"能力说明","description":"Hvigor支持灵活定制构建模式，当您创建新工程时，DevEco Studio会自动创建\\"debug\\" 、\\"release\\"和\\"test\\" 构建模式。\\"test\\"模式虽然没有出现在工程级build-profile.json5配置文件中，但是利用测试框架开启测试时，会自动使用\\"test\\"构建模式。","source":"@site/docs/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide/ide-hvigor-compilation-options-customizing-guide.md","sourceDirName":"ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide","slug":"/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide/","permalink":"/harmonyos-docs-site/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"能力说明","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-compilation-options-customizing-guide","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"自定义.hvigor目录路径","permalink":"/harmonyos-docs-site/ide-hvigor-configuration/ide-hvigor-path/"},"next":{"title":"实践说明","permalink":"/harmonyos-docs-site/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-sample/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-build-customization/ide-hvigor-compilation-options-customizing/ide-hvigor-compilation-options-customizing-guide/ide-hvigor-compilation-options-customizing-guide.md


const frontMatter = {
	title: '能力说明',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-compilation-options-customizing-guide',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '能力说明';

const assets = {

};



const toc = [{
  "value": "指定构建模式",
  "id": "指定构建模式",
  "level": 2
}, {
  "value": "界面设置",
  "id": "界面设置",
  "level": 3
}, {
  "value": "命令行设置",
  "id": "命令行设置",
  "level": 3
}, {
  "value": "定制构建模式",
  "id": "定制构建模式",
  "level": 2
}, {
  "value": "定义编译选项",
  "id": "定义编译选项",
  "level": 3
}, {
  "value": "合并编译选项规则",
  "id": "合并编译选项规则",
  "level": 3
}, {
  "value": "编译选项继承覆写关系示意图",
  "id": "编译选项继承覆写关系示意图",
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
        id: "能力说明",
        children: "能力说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hvigor支持灵活定制构建模式，当您创建新工程时，DevEco Studio会自动创建\"debug\" 、\"release\"和\"test\" 构建模式。\"test\"模式虽然没有出现在工程级build-profile.json5配置文件中，但是利用测试框架开启测试时，会自动使用\"test\"构建模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指定构建模式",
      children: "指定构建模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "界面设置",
      children: "界面设置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DevEco Studio支持界面配置Build Mode配置选项，点击右上角", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(119612)/* ["default"] */.A) + "",
        width: "22",
        height: "20"
      }), "图标选择构建模式："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(693849)/* ["default"] */.A) + "",
        width: "528",
        height: "351"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内置三个选项：<Default>，debug，release。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者在build-profile.json5文件中，自定义了其他构建模式，Build Mode配置界面会提供对应选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "<Default>"
          })
        }), "：默认选项，选择此项，构建APP包，使用release构建模式；构建HAP/HSP/HAR包，使用debug构建模式。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "debug"
          })
        }), "：构建APP/HAP/HSP/HAR包，均使用debug构建模式，buildOption中的debuggable默认为true。此时的构建产物默认包含大量的调试信息，例如变量名、函数名、行号等，可以直接进行调试。这些调试信息会增加程序的体积，可能导致程序的运行速度降低。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "release"
          })
        }), "：构建APP/HAP/HSP/HAR包，均使用release构建模式，buildOption中的debuggable默认为false。此时的构建产物会去掉大量的调试信息，只包含应用程序必要的代码和数据，以减小程序的体积，并且会对编译的字节码进行优化，提高程序的运行速度。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(1979)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["DevEco Studio界面设置或命令行中指定的buildMode构建模式，只代表当前选择的buildMode的名称，最终编译产物是否是Debug应用取决于buildOption配置中的debuggable字段，构建模式使用的具体buildOption配置信息，请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile#section1010733210421",
          children: "模块级buildOption"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LiteWearable设备使用标准JS运行时，因此对应的应用开发在release模式下的构建产物中包含JS源码，请注意代码资产保护。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "命令行设置",
      children: "命令行设置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用命令行参数-p buildMode指定构建模式，比如指定\"release\"模式，构建entry模块的HAP包："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hvigorw --mode module -p product=default -p module=entry@default -p buildMode=release assembleHap\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用命令行参数-p debuggable=true指定\"debug\"构建模式，-p debuggable=false指定\"release\"构建模式，比如指定\"release\"模式，构建entry模块的HAP包："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hvigorw --mode module -p product=default -p module=entry@default -p debuggable=false assembleHap\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当未指定构建模式时，构建APP包，默认release模式；构建HAP/HSP/HAR包时，默认debug模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "定制构建模式",
      children: "定制构建模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hvigor支持定制构建模式，采用buildOption字段声明编译选项，并通过buildModeBinder来绑定target、 buildOption以及buildMode三者之间的组合关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "定义编译选项",
      children: "定义编译选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "工程级build-profile.json5文件："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
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
            children: "buildModeSet"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建模式合集，可配置多个。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构建模式名称。  内置三种类型，此三项无需用户显性配置：   - debug：开发、调试推荐选项 - release：打包、发布推荐选项 - test：运行ohosTest测试套件推荐选项 说明：  1. 项目中全局唯一，不区分大小写  2. 仅允许在工程级build-profile.json5中声明、定义  3. 相同的buildMode会被覆盖，按照配置顺序，后者覆盖前者  4. 三种模式均支持开发者自定义"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildOption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["构建模式使用的具体配置信息，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app#section14222051575",
              children: "工程级buildOption"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "products"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["产品品类，可配置多个。如需配置多个，相关说明请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-customized-multi-targets-and-products",
              children: "配置多目标产物"
            }), "章节。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "buildOption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["产品的编译构建配置，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app#section14222051575",
              children: "工程级buildOption"
            }), "。  说明：  product的buildOption会对buildMode的buildOption继承覆写，即相同配置项product的优先级更高。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模块级build-profile.json5文件："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
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
            children: "buildOption"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["构建模式使用的具体配置信息，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile#section1010733210421",
              children: "模块级buildOption"
            }), "，其中不支持配置name、debuggable和copyFrom字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildOptionSet"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "buildOption的集合，定义可用的底层配置选项集。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "buildOption的名称。  当前模块级build-profile.json5中已有顶层独立的buildOption配置，buildOptionSet优先级比buildOption更高。  说明：  1. 同模块中唯一，不区分大小写。 2. 相同的名称会被覆盖，按照配置顺序，后者覆盖前者。 3. 内置三种：default、debug、release。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "copyFrom"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置已定义的buildOption的name，表示从本模块已有的buildOption复制配置，然后再覆写。  说明：  1. 仅限在同一模块的build-profile.json5中复制。 2. 目标buildOption不存在时，构建告警，回落为从内置的default选项中复制。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildModeBinder"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为某一buildMode建立target与buildOption之间的映射关系。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "buildModeName"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定待建立映射的buildMode。  说明：  1. 模块级中无法定义buildMode，此处名称须在工程级的buildModeSet中选取。 2. 对于系统内置的三种buildMode（debug / release / test）, Hvigor会分配默认绑定：    - debug mode：优先分配debug buildOption，测试包（ohosTest）分配default buildOption。    - release mode：优先分配release buildOption，测试包（ohosTest）分配 default buildOption。    - test mode：【测试套使用】测试包（ohosTest）分配default buildOption，主包分配debug buildOption。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mappings"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "绑定target使用的buildOption。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "targetName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定待绑定的target。  说明：  仅在本模块选择。"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buildOptionName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定待绑定的buildOption。  说明：  仅在本模块选择。"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "targets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "buildOption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["构建模式使用的具体配置信息，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile#section1010733210421",
              children: "模块级buildOption"
            }), "，其中不支持配置name、debuggable和copyFrom字段，优先级比buildOptionSet更高。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "合并编译选项规则",
      children: "合并编译选项规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "工程级默认有三种buildMode：debug，release，test。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模块级默认有三种buildOption：default，debug，release。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当buildModeBinder未定义target与buildOption的匹配关系时：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "release构建模式：为target匹配release option，但ohosTest分配default option；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "debug构建模式：为target匹配debug option，但ohosTest分配default option；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "test构建模式：为target匹配debug option，ohosTest分配default option；"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "自定义构建模式：所有target均匹配default option。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "工程级build-profile.json5中product的buildOption会对buildMode的buildOption继承覆写，即相同配置项product的优先级更高。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模块级别的buildOption作为一个公共配置会被继承到buildOptionSet中的每一个buildOption中，如有copyFrom字段，也是先继承再进行复制，即buildOptionSet优先级比buildOption更高。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "根据模块级中的buildModeBinder字段可以找到target对应的唯一buildOption；target中的buildOption优先级更高，采用继承覆盖策略与对应buildOption进行合并。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "命令行选项为最高优先级，在已整合的配置项基础上，采用覆写的方式，定点修订。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "编译选项继承覆写关系示意图",
      children: "编译选项继承覆写关系示意图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "优先级：命令行配置>targets配置>buildOptionSet配置>buildOption配置>products配置>buildModeSet配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(340302)/* ["default"] */.A) + "",
        width: "880",
        height: "469"
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
1979(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
693849(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833281-bd0c99987f484e8de20f37c5691b0208.png");

},
119612(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAA3ElEQVQ4EcWVvQ2EMAxGmThCKemYgMzBBNBQI1qooWAQn14kIzj+UiR3hRVjx8+fnADZuq6yLEtUg5nFhirv/+CmaQRTRW9rkOK+78U55w3/DUr+ETwMg5RlKcaYgxEj99TgFkyhtfYA3Dcg9wS/BM/zvCnN81zqupZpmrzhE6MJytl7pfwSzBxVHaCu66QoCm/4xDR/N/MTuG1bqapqKxzH0QMVRANi+sxear5V/w5M5ySjAJzs8IAnuW56EMCjvyAKZ2XmUV/pPTzJR2jfINQ/3ePQwrd9Wapf0wczL8bsGBhAegAAAABJRU5ErkJggg==");

},
340302(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913352-6a36deb370ab27b050f849cb7a875e51.png");

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