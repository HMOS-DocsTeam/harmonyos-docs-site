"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["478637"], {
80933(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_code_linter_ide_code_linter_md_bb6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-code-linter-ide-code-linter-md-bb6.json
var site_docs_ide_code_edit_ide_code_check_ide_code_linter_ide_code_linter_md_bb6_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-code-linter/ide-code-linter","title":"Code Linter代码检查","description":"Code Linter支持对模块内文件或文件夹中的代码进行最佳实践/编程规范方面的检查。检查规则支持配置，配置方式请参考配置代码检查规则。","source":"@site/docs/ide-code-edit/ide-code-check/ide-code-linter/ide-code-linter.md","sourceDirName":"ide-code-edit/ide-code-check/ide-code-linter","slug":"/ide-code-edit/ide-code-check/ide-code-linter/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-code-linter/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Code Linter代码检查","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"代码实时检查及快速修复","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-realtime-check/"},"next":{"title":"规则变更说明","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-codelinter-rules-change/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-code-linter/ide-code-linter.md


const frontMatter = {
	title: 'Code Linter代码检查',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-linter',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = 'Code Linter代码检查';

const assets = {

};



const toc = [{
  "value": "配置代码检查规则",
  "id": "配置代码检查规则",
  "level": 2
}, {
  "value": "通过DevEco Studio进行代码检查",
  "id": "通过deveco-studio进行代码检查",
  "level": 2
}, {
  "value": "操作方法",
  "id": "操作方法",
  "level": 3
}, {
  "value": "查看和处理代码检查结果",
  "id": "查看和处理代码检查结果",
  "level": 3
}, {
  "value": "通过命令行进行代码检查",
  "id": "通过命令行进行代码检查",
  "level": 2
}, {
  "value": "实践说明",
  "id": "实践说明",
  "level": 2
}, {
  "value": "示例1：调用类Foo下bar方法时，Code Linter告警",
  "id": "示例1调用类foo下bar方法时code-linter告警",
  "level": 3
}, {
  "value": "示例2：对类名Foo的命名风格校验",
  "id": "示例2对类名foo的命名风格校验",
  "level": 3
}, {
  "value": "示例3：检查代码文件的命名风格",
  "id": "示例3检查代码文件的命名风格",
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
        id: "code-linter代码检查",
        children: "Code Linter代码检查"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Code Linter支持对模块内文件或文件夹中的代码进行最佳实践/编程规范方面的检查。检查规则支持配置，配置方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section19310459444",
        children: "配置代码检查规则"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可根据扫描结果中告警提示手工修复代码缺陷，或者执行一键式自动修复，在代码开发阶段，确保代码质量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置代码检查规则",
      children: "配置代码检查规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["新建工程时，工程根目录下默认创建code-linter.json5配置文件，可对代码检查的范围及对应生效的检查规则进行配置。若使用历史工程进行开发，可在工程中右键选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Linter > Generate Config File"
        })
      }), "创建code-linter.json5配置文件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中files和ignore配置项共同确定了代码检查范围，ruleSet和rules配置项共同确定了生效的规则范围。具体配置项功能如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "files"
        })
      }), "：配置待检查的文件名单，如未指定目录，将检查当前被选中的文件或文件夹中所有的.ets文件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ignore"
        })
      }), "：配置无需检查的文件目录，其指定的目录或文件需使用相对路径格式，相对于code-linter.json5所在工程根目录，例如：build/**/*。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ruleSet"
        })
      }), "：配置检查使用的规则集，规则集支持一次导入多条规则。规则详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-codelinter-rule",
        children: "Code Linter代码检查规则"
      }), "。目前支持的规则集包括："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通用规则@typescript-eslint"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安全规则@security"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "性能规则@performance"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "预览规则@previewer"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一次开发多端部署规则@cross-device-app-dev"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS代码风格规则@hw-stylistic"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "正确性规则@correctness"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "兼容性规则@compatibility"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(19693)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "以上规则集均分为all和recommended两种规则集。all规则集是规则全集，包含所有规则；recommended规则集是推荐使用的规则集合。all规则集包含recommended规则集。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不在工程根目录新建code-linter.json5文件的情况下，Code Linter默认会检查@performance/recommended和@typescript-eslint/recommended规则集包含的规则。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "rules"
        })
      }), "：可以基于ruleSet配置的规则集，新增额外规则项，或修改ruleSet中规则默认配置，例如：将规则集中某条规则告警级别由warn改为error。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "overrides"
        })
      }), "：针对工程根目录下部分特定目录或文件，可配置定制化检查的规则。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "extRuleSet"
        })
      }), "：配置需要检查的自定义规则，具体请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony-sig/homecheck/blob/master/document/developer/ExtRule%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A7%84%E5%88%99%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97.md",
        children: "自定义规则开发指南"
      }), "。该字段从DevEco Studio 5.1.0 Release版本开始支持。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"files\":   //用于表示配置适用的文件范围的 glob 模式数组。在没有指定的情况下，应用默认配置\n  [\n    \"**/*.js\", //字符串类型\n    \"**/*.ts\"\n  ],\n  \"ignore\":  //一个表示配置对象不应适用的文件的 glob 模式数组。如果没有指定，配置对象将适用于所有由 files 匹配的文件\n  [\n    \"build/**/*\",    //字符串类型\n    \"node_modules/**/*\"\n  ],\n  \"ruleSet\":       //设置检查待应用的规则集\n  [\n    \"plugin:@typescript-eslint/recommended\"    //快捷批量引入的规则集, 枚举类型：plugin:@typescript-eslint/all, plugin:@typescript-eslint/recommended, plugin:@cross-device-app-dev/all, plugin:@cross-device-app-dev/recommended等\n  ],\n  \"rules\":         //可以对ruleSet配置的规则集中特定的某些规则进行修改、去使能, 或者新增规则集以外的规则；ruleSet和rules共同确定了代码检查所应用的规则\n  {\n    \"@typescript-eslint/no-explicit-any\":  // ruleId后面跟数组时, 第一个元素为告警级别, 后面的对象元素为规则特定开关配置\n    [\n      \"error\",              //告警级别: 枚举类型, 支持配置为suggestion, error, warn, off\n      {\n        \"ignoreRestArgs\": true   //规则特定的开关配置, 为可选项, 不同规则其下层的配置项不同\n      }\n    ],\n    \"@typescript-eslint/explicit-function-return-type\": 2,   // ruleId后面跟单独一个数字时, 表示仅设置告警级别, 枚举值为: 3(suggestion), 2(error), 1(warn), 0(off)\n    \"@typescript-eslint/no-unsafe-return\": \"warn\"            // ruleId后面跟单独一个字符串时, 表示仅设置告警级别, 枚举值为: suggestion, error, warn, off\n  },\n  \"overrides\":      //针对特定的目录或文件采用定制化的规则配置\n  [\n    {\n      \"files\":   //指定需要定制化配置规则的文件或目录\n      [\n        \"entry/**/*.ts\"   //字符串类型\n      ],\n      \"excluded\":\n      [\n        \"entry/**/*.test.js\" //指定需要排除的目录或文件, 被排除的目录或文件不会按照定制化的规则配置被检查; 字符串类型\n      ],\n      \"rules\":   //支持对overrides外公共配置的规则进行修改、去使能, 或者新增公共配置以外的规则; 该配置将覆盖公共配置\n      {\n        \"@typescript-eslint/explicit-function-return-type\":  // ruleId: 枚举类型\n        [\n          \"warn\",     //告警级别: 枚举类型, 支持配置为error, warn, off; 覆盖公共配置, explicit-function-return-type告警级别为warn\n          {\n             \"allowExpressions\": true    //规则特定的开关配置, 为可选项, 不同规则其下层的配置项不同\n          }\n        ],\n        \"@typescript-eslint/no-unsafe-return\": \"off\"   // 覆盖公共配置, 不检查no-unsafe-return规则\n      },\n      \"extRules\": {     //支持对overrides外自定义规则集配置的规则进行修改、去使能; 该配置将覆盖自定义规则配置\n        \"@extrulesproject/foreach-args-check\": \"off\"   // 覆盖自定义规则配置, 不检查@extrulesproject/foreach-args-check规则\n      }\n    }\n  ],\n  \"extRuleSet\": [     //自定义规则集的配置\n    {\n        \"ruleSetName\": \"extrulesproject\",     //自定义规则库的名称。格式为@group/packagename或者packagename，全局唯一。除@和/外，group和packagename只能包含小写字母、数字、下划线（_）和中划线(-)。总长度小于等于128个字符。另外，group和packagename必须以字母开头，不能作为ArkTS的保留关键字\n        \"packagePath\": \"D:\\\\checker\\\\extrulesproject-1.0.0.tgz\",     //自定义规则安装包路径，需使用绝对路径\n        \"extRules\": {     //自定义规则名称以及告警等级，枚举值为: 3(suggestion), 2(error), 1(warn), 0(off)\n          \"@extrulesproject/foreach-args-check\": 1\n        }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过deveco-studio进行代码检查",
      children: "通过DevEco Studio进行代码检查"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "操作方法",
      children: "操作方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在已打开的代码编辑器窗口单击右键点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Linter"
        })
      }), "，或在工程管理窗口中鼠标选中单个或多个工程文件/目录，右键选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Linter"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "> Full Linter"
        })
      }), "执行代码全量检查。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(699774)/* ["default"] */.A) + "",
        width: "792",
        height: "437"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如只需对Git工程中增量文件（包含新增/修改/重命名）进行检查，可在commit界面右下角点击齿轮图标，选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Incremental Linter"
        })
      }), "执行增量检查。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(56903)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1118",
        height: "935"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(702141)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "若未配置代码检查规则文件，直接执行Code Linter，将按照默认的编程规范规则对.ets文件进行检查。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Code Linter不对如下文件及目录进行检查：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "src/ohosTest文件夹"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "/src/test文件夹"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "node_modules文件夹"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "oh_modules文件夹"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "build文件夹"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: ".preview文件夹"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "hvigorfile.ts文件"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "hvigorfile.js文件"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "BuildProfile.ets文件"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看和处理代码检查结果",
      children: "查看和处理代码检查结果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["扫描完成后，在底部工具面板查看检查结果。勾选", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Defects"
        })
      }), "中不同告警等级，可分别查看对应告警级别的信息。点击", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Filter by scene"
        })
      }), "下拉菜单，可以筛选不同规则的检查结果。双击某条告警结果，可以跳转到对应代码缺陷位置；选中告警结果时，可以在右侧", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Defect Description窗口"
        })
      }), "查看告警对应的规则详细说明，其中包含正向和反向示例，并根据其中的建议修改代码；搜索规则时，可设定是否全词匹配和大小写敏感。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["单击", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(303395)/* ["default"] */.A) + "",
        width: "20",
        height: "20"
      }), "图标，查看可修复的代码规则，点击", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(220729)/* ["default"] */.A) + "",
        width: "18",
        height: "18"
      }), "代码修复图标，可以一键式批量修复告警，并刷新检查结果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(950369)/* ["default"] */.A) + "",
        width: "1152",
        height: "318"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "屏蔽告警信息"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在某些特殊场景下，若扫描结果中出现误报，点击单条告警结果后的", (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(407066)/* ["default"] */.A) + "",
          width: "16",
          height: "16"
        }), (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ignore"
          })
        }), "图标****，", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "可以忽略对告警所在行的code linter检查；或勾选文件名称或多条待屏蔽的告警，点击左侧工具面板"
          })
        }), "Ignore****图标批量执行操作；"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在文件顶部添加注释/* eslint-disable */可以屏蔽整个文件执行code linter检查，在eslint-disable 后加入一个或多个以逗号分隔的规则Id，可以屏蔽具体检查规则；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在需要忽略检查的代码块前后分别添加/* eslint-disable */和/* eslint-enable */添加注释信息，再执行****Code Linter，****将不再显示该代码块扫描结果；在待屏蔽的代码行前一行添加/* eslint-disable-next-line */，也可屏蔽对该代码行的Code Linter检查。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如需恢复忽略的报错信息，可以直接删除该行上方的注释，重新执行", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Linter"
        })
      }), "检查。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(295891)/* ["default"] */.A) + "",
        width: "705",
        height: "318"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "导出检查结果"
        })
      }), "：点击工具面板左侧", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(320024)/* ["default"] */.A) + "",
        width: "16",
        height: "16"
      }), "导出按钮，即可导出检查结果到excel文件，包含告警所在行，告警明细，告警级别等信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(641310)/* ["default"] */.A) + "",
        width: "705",
        height: "318"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过命令行进行代码检查",
      children: "通过命令行进行代码检查"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.1 Beta1开始，支持通过命令行方式进行代码检查。在DevEco Studio安装包\\deveco-studio\\plugins\\codelinter\\run目录下打开cmd或者bash窗口，执行如下命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "node ./index.js [options] [dir]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["options：可选配置，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-command-line-codelinter#table25697717185",
        children: "表codelinter命令行配置"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dir：待检查的工程根目录，可选，默认为当前上下文目录。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(777319)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用命令行检查时，需要依赖于Node.js环境，本地安装的Node.js版本和DevEco Studio中tools目录下的Node.js版本需要保持一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实践说明",
      children: "实践说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以@typescript-eslint/no-restricted-syntax（使用某类语法时，codelinter告警）、@typescript-eslint/naming-convention（命名风格校验）和@hw-stylistic/file-naming-convention（检查代码文件的命名风格）三个规则为例，介绍Code Linter配置文件的使用方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1调用类foo下bar方法时code-linter告警",
      children: "示例1：调用类Foo下bar方法时，Code Linter告警"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "在配置文件中定义规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS工程中，pages/Index.ets文件下增加以下用例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Foo {\n  static bar() {}\n}\n\nFoo.bar();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工程根目录下新建code-linter.json5文件（文件名不可修改），新增以下配置："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"rules\": {\n    \"@typescript-eslint/no-restricted-syntax\": [\n      // 告警级别: 枚举类型, 支持配置为error, warn, off\n      \"error\",\n      {\n        // selector属性必选，配置要禁用的语法\n        // 可通过特定DSL筛选待限制的语句，CallExpression表示方法调用表达式，后面的中括号里面是筛选条件（根据语法树Node节点来确定）\n        // 其中callee.object.name根据指定的名称筛选调用方法的对象（class，namespace或module），以上示例中为\"Foo\"\n        // callee.property.name则根据指定的名称筛选被调用的方法，以上示例中为\"bar\"\n        \"selector\": \"CallExpression[callee.object.name='Foo'][callee.property.name='bar']\",\n        // message属性可选，配置要展示的报错信息\n        \"message\": \"Foo.bar() is not allowed\"\n      }\n    ]\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(787264)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如需在code-linter.json5文件中配置其他字段，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#section19310459444",
        children: "配置代码检查规则"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "执行代码检查"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对pages/Index.ets文件执行代码检查，检查结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(590761)/* ["default"] */.A) + "",
        width: "601",
        height: "141"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2对类名foo的命名风格校验",
      children: "示例2：对类名Foo的命名风格校验"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "在配置文件中定义规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS工程中，pages/Index.ets文件下增加以下用例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class foo {    //此处构造一个命名风格错误的示例，foo为错误使用类名，正确类名应为Foo\n  bar() {} \n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工程根目录下新建code-linter.json5文件，新增以下配置："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"rules\": {\n    \"@typescript-eslint/naming-convention\": [\n      \"error\",\n      {\n        // selector属性必选，配置要检查的语法，这里配置的class表示检查自定义组件名\n        \"selector\": \"class\",\n        // format属性必选，配置期望的命名风格，支持枚举值，这里配置的PascalCase表示大驼峰风格\n        \"format\": [\"PascalCase\"],\n        // custom属性可选，配置用户自定义的命名风格\n        \"custom\": {\n          // regex属性必选，配置具体的正则\n          \"regex\": \"^[a-zA-Z]+$\",\n          // match属性必选，配置为true表示正则未命中时报错；配置为false表示正则命中时报错\n          \"match\": true\n        }\n      }\n    ]\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 字段说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持配置的参数"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置要检查的语法"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串、字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- variable：变量 - function：函数 - parameter：参数 - parameterProperty：参数属性 - accessor：get/set方法 - enumMember：枚举成员 - classMethod：类方法 - structMethod：自定义组件中的方法 - objectLiteralMethod：对象方法 - typeMethod：接口方法 - classProperty：类属性 - structProperty：自定义组件中的属性 - objectLiteralProperty：对象属性 - typeProperty：接口属性 - class：类 - struct：自定义组件 - interface：接口 - typeAlias：类型别名 - enum：枚举 - typeParameter：泛型参数 - default：包含以上所有的类型 - variableLike：包含variable，function，parameter - memberLike：包含classProperty，structProperty，objectLiteralProperty，typeProperty，parameterProperty ，enumMember，classMethod，objectLiteralMethod，typeMethod，accessor - typeLike：包含class，struct，interface，typeAlias，enum，typeParameter - method：包含classMethod，structMethod，objectLiteralMethod，typeMethod - property：包含classProperty，objectLiteralProperty，typeProperty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置期望的命名风格"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- camelCase：小驼峰命名风格，比如getName，getID（支持连续大写字母），不支持下划线 - strictCamelCase：严格小驼峰命名风格，除了不支持连续大写字母（getID），其他的和camelCase相同 - PascalCase：大驼峰命名风格，比如Foo，CC，除了要求第一个字母大写，其他的和camelCase相同 - StrictPascalCase：大驼峰命名风格，除了不支持连续大写字母（CC），其他的和PascalCase相同 - snake_case：小写字母+下划线+小写字母的命名风格，比如a_a，不支持_a，a_a_ - UPPER_CASE：大写字母+下划线+大写字母的命名风格，比如A_A，不支持_A，A_A_"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "custom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置用户自定义的命名风格"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- regex：属性必选，配置具体的正则 - match：属性必选，配置为true表示正则未命中时报错，配置为false表示正则命中时报错"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "leadingUnderscore/trailingUnderscore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置是否允许以下划线开头/以下划线结尾的命名风格"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- allow：允许以一个下划线开头/结尾的命名风格，比如_name - allowDouble：允许以两个下划线开头/结尾的命名风格，比如__name - allowSingleOrDouble：允许以一个或者两个下划线开头/结尾的命名风格（allow+allowDouble） - forbid：禁止以下划线开头/结尾的命名风格，比如_name，__name - require：必须是以下划线开头/结尾的命名风格，比如_name，__name - requireDouble：必须是以两个下划线开头/结尾的命名风格，比如__name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "prefix/suffix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置固定前缀/后缀的命名风格。如果前缀/后缀未匹配则报错"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户自定义前缀/后缀"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "过滤特定的命名风格，检查或者不检查正则命中的命名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置格式与custom相似  match：设置为true表示只检查正则命中的名字，设置为false表示不检查正则命中的名字  regex：设置过滤的正则  说明：  支持直接配置一个字符串，这个字符串配置的是regex，此时match相当于配置的是true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "modifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "匹配修饰符，只有包含特定修饰符的命名才会检查"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- abstract：匹配abstract关键字 - override：匹配override关键字 - private：匹配private关键字 - protected：匹配protected关键字 - static：匹配static关键字 - async：匹配async关键字 - const：匹配const关键字 - destructured：匹配解构语法 - exported：匹配export关键字 - global：匹配全局声明 - #private：匹配私有符号# - public：匹配public级别的访问修饰符 - requiresQuotes：匹配字符串类型的命名，并且 字符串中包含特殊字符 - unused：匹配未使用的声明"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "匹配类型，只有特定类型的名字才会检查"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- array：数组类型 - boolean：布尔类型 - function：函数类型 - number：数字类型 - string：字符串类型"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(74363)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上配置的参数有校验优先级：filter > types > modifiers > validate leading underscore > validate trailing underscore > validate prefix > validate suffix > validate custom > validate format。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "执行代码检查"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对pages/Index.ets文件执行代码检查，检查结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(274679)/* ["default"] */.A) + "",
        width: "887",
        height: "169"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3检查代码文件的命名风格",
      children: "示例3：检查代码文件的命名风格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "在配置文件中定义规则"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkTS工程中，pages目录下新建test.ets文件；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在工程根目录下新建code-linter.json5文件，新增以下配置："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"rules\": {\n    \"@hw-stylistic/file-naming-convention\": [\n      // 告警级别：枚举类型，支持配置为error，warn，off\n      \"error\",\n      {\n        // selector属性可选，支持配置为code或者resources\n        // code表示检查代码文件的命名风格\n        // resources表示检查资源文件的命名风格\n        \"selector\": \"code\"\n      }\n    ]\n  },\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(131389)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果selector属性不配置，默认检查代码文件和资源文件的命名风格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "执行代码检查"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对pages/test.ets文件执行代码检查，检查结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(326816)/* ["default"] */.A) + "",
        width: "886",
        height: "168"
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
74363(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
131389(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
787264(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
220729(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE1SURBVDhPzZOxioNAEIbvie0EIQhWgjaBWGihYOETxCJFihSCFhaKNoKVlRaCaBHEZo6Z7Ipi4gl3xX2wuPsP8y27i1/wR+yK+r4H27ZBlmUQBIGGaZqsumZXpOs6nE4nSNMUbrcbie73O6uu+SgKgoAa8zyfJZghuPY8j+acj6LL5UINXBLHMeV8jWPJrigMQ0iShJrwG0URzblsya7IdV2acxmXZFlGd7fkrYjvWBQFS14yzLuuA03TwHEcVnmxEXFJWZa0rusaHo8Hvdz1egVJkug1h2GgOmcleidRVXU+Fg7f92EcR6ovmUUoEUVxI8Hdm6ahbA8SoURRFKiqikIuOZ/P0LYtZT8xi7ARBVxiGAb9IkdZHQ0FOCzLgufzySrH2Fw2Pus0TSw5zkr0G/6bCOAbDSulG4QEFYUAAAAASUVORK5CYII=");

},
320024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAAQABABAREA/8QAFgABAQEAAAAAAAAAAAAAAAAABwQI/8QAJBAAAQMFAAIBBQAAAAAAAAAAAQIDBgQFBwgREhQAEyEjMUH/2gAIAQEAAD8A0fn3budXmRSnAOusEmdNLLLXotl5nNTHfasNiYNL7DzyXW3FdqEtlIbQ8hCCs/c+PCTDVfdfJuNcfw6N7IxDIcxtclRY0xyf0NjW7SlNwCU+vcat5xKVOsvK8A4guLcSOqHmCDdSbP684DzpszAM05GXH6yVyGmdpPpWauqusOWhhBX+JlQBSVEcJHSOjqSFE6k+yer9113xBq/iPL78zkVhlcTpWVGOV9AaxLFe0VuBLrXgj99CPMn+Ak/P/9k=");

},
590761(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753677-d408ac7b79401333b57da23263033921.png");

},
303395(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAAUABQBAREA/8QAGAAAAwEBAAAAAAAAAAAAAAAABggJAwf/xAAjEAACAQQCAgMBAQAAAAAAAAABAgMEBQYHABEIIRITMQkV/9oACAEBAAA/AKoSyxQRPPPIsccal3dz0qqPZJJ/BxSNL+dNv8ifMC86U1StBV4Ji2NVtwrL0yM0l0rI6mmhDUzBgFgUzEBiD9nth0PiS3XOWeSmk6vyE1XXati2ResLobpKn+nVWlI2lrKMKwekcuOxE5KlviQWCfE9ozq0f/5w6d3vszb15rdG5tkGAYFBOseQZHFHCatqNXLxUUbshVqh1IJAH1r6d1bqNGunzGtpILhRz0FSGMNTE0MgVyjFWBB6ZSCD0f0EEcGNV6qwLSuDW3XOtcfgs9itSFYYIyWZ2J7eSRz2zyMfbMxJJ4W8/9k=");

},
702141(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
274679(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833645-0b709a3626c1a2bb14af8096a2a867d9.png");

},
699774(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913722-820f06f9fccae6a41f2b40b363fe4168.png");

},
19693(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
641310(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913724-f4c9bc0e67849b2372c0687882c0a580.png");

},
56903(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913730-9c011fe5f8dae3c5793b32ba7c0d31ee.png");

},
295891(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833661-2910f74b4c29feee5d13385a101256c6.png");

},
407066(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAQABADAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQn/xAAkEAABBAICAgEFAAAAAAAAAAABAgMEBQYREiEAUTEiMmFxgf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwChFxkua2c7I2K+3qqSooXOD8sx1vywkICypKCeB336Pr34B8HLsyrKaBkUHIIN/RTprccKmxVMzUcnOBRpB4kjR+o7/WvAVyunucdubbIKmtfs6vIIoj2kWMgLfZWlBQl5tB6X0e0/0/gDMWoLLImqGoTAmQ8Zxx4SkvTWQy/YPpKighsfagct7Pzv38B//9k=");

},
326816(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913728-c3d68b9804d5e3f1504b7fc823fdcc43.png");

},
950369(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913734-601052abf36bbeb33b7e4419679535b1.png");

},
777319(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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