"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["99417"], {
50652(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ut_arkxtest_guidelines_unittest_guidelines_unittest_guidelines_md_adf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ut-arkxtest-guidelines-unittest-guidelines-unittest-guidelines-md-adf.json
var site_docs_ut_arkxtest_guidelines_unittest_guidelines_unittest_guidelines_md_adf_namespaceObject = JSON.parse('{"id":"ut/arkxtest-guidelines/unittest-guidelines/unittest-guidelines","title":"单元测试框架使用指导","description":"概述","source":"@site/docs/ut/arkxtest-guidelines/unittest-guidelines/unittest-guidelines.md","sourceDirName":"ut/arkxtest-guidelines/unittest-guidelines","slug":"/ut/arkxtest-guidelines/unittest-guidelines/","permalink":"/harmonyos-docs-site/ut/arkxtest-guidelines/unittest-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"单元测试框架使用指导","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/unittest-guidelines","kit":"testing","last_updated":"2026-04-21"},"sidebar":"docs","previous":{"title":"HarmonyOS 开发者测试服务概述","permalink":"/harmonyos-docs-site/app-testing-overview/"},"next":{"title":"UI测试框架使用指导","permalink":"/harmonyos-docs-site/ut/arkxtest-guidelines/uitest-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ut/arkxtest-guidelines/unittest-guidelines/unittest-guidelines.md


const frontMatter = {
	title: '单元测试框架使用指导',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/unittest-guidelines',
	kit: 'testing',
	last_updated: '2026-04-21'
};
const contentTitle = '单元测试框架使用指导';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "框架能力全景",
  "id": "框架能力全景",
  "level": 2
}, {
  "value": "单元测试框架发布方式",
  "id": "单元测试框架发布方式",
  "level": 2
}, {
  "value": "基于ArkTS编写和执行测试脚本",
  "id": "基于arkts编写和执行测试脚本",
  "level": 2
}, {
  "value": "搭建环境",
  "id": "搭建环境",
  "level": 3
}, {
  "value": "新建测试脚本",
  "id": "新建测试脚本",
  "level": 3
}, {
  "value": "编写单元测试脚本",
  "id": "编写单元测试脚本",
  "level": 3
}, {
  "value": "DevEco Studio执行测试脚本",
  "id": "deveco-studio执行测试脚本",
  "level": 3
}, {
  "value": "命令行执行测试脚本",
  "id": "命令行执行测试脚本",
  "level": 3
}, {
  "value": "单元测试框架能力使用说明",
  "id": "单元测试框架能力使用说明",
  "level": 2
}, {
  "value": "基础流程能力",
  "id": "基础流程能力",
  "level": 3
}, {
  "value": "断言能力",
  "id": "断言能力",
  "level": 3
}, {
  "value": "Mock能力",
  "id": "mock能力",
  "level": 3
}, {
  "value": "数据驱动",
  "id": "数据驱动",
  "level": 3
}, {
  "value": "专项能力",
  "id": "专项能力",
  "level": 3
}, {
  "value": "单元测试框架常见问题",
  "id": "单元测试框架常见问题",
  "level": 2
}, {
  "value": "完整示例",
  "id": "完整示例",
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
        id: "单元测试框架使用指导",
        children: "单元测试框架使用指导"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单元测试框架（JsUnit），是自动化测试框架基础底座，提供测试脚本识别、调度、执行和结果汇总的能力。开发者可在测试脚本中调用UI测试框架和白盒性能测试框架接口编写测试用例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本指南介绍单元测试框架的主要功能、实现原理和开发步骤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "框架能力全景",
      children: "框架能力全景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单元测试框架支持的功能特性如下。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "特性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%9F%BA%E7%A1%80%E6%B5%81%E7%A8%8B%E8%83%BD%E5%8A%9B",
              children: "基础流程能力"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持测试用例识别调度及异步执行测试用例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%96%AD%E8%A8%80%E8%83%BD%E5%8A%9B",
              children: "断言能力"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断用例实际结果值与预期值是否相符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#mock%E8%83%BD%E5%8A%9B",
              children: "Mock能力"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持函数级Mock能力，对定义的函数进行Mock并修改函数的行为，使其返回指定的值或者执行指定操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E6%95%B0%E6%8D%AE%E9%A9%B1%E5%8A%A8",
              children: "数据驱动能力"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提供数据驱动能力，支持复用同一个测试脚本，使用不同输入数据驱动测试脚本执行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%89%A7%E8%A1%8C%E6%B5%8B%E8%AF%95%E8%84%9A%E6%9C%AC",
              children: "专项能力"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持测试套与用例筛选、随机执行、压力测试、超时设置、遇错即停模式和跳过执行模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1.单元测试框架主要功能"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(311159)/* ["default"] */.A) + "",
        width: "714",
        height: "407"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "单元测试框架发布方式",
      children: "单元测试框架发布方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["单元测试框架以ohpm包独立发布，版本信息详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Fhypium",
        children: "服务组件官网"
      }), "。开发者下载DevEco Studio后，在应用工程中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-ohpm-cli/ide-oh-package-json5",
        children: "oh-package.json5"
      }), "文件中devDependencies节点中配置版本号即可使用对应版本框架功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "配置示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"devDependencies\": {\n    \"@ohos/hypium\": \"1.0.25\"\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基于arkts编写和执行测试脚本",
      children: "基于ArkTS编写和执行测试脚本"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "搭建环境",
      children: "搭建环境"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["测试脚本基于DevEco Studio编写，请下载", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/download/",
        children: "DevEco Studio"
      }), "并完成", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hdc#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87",
        children: "hdc配置"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "新建测试脚本",
      children: "新建测试脚本"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-app-test/ide-test/ide-code-test/ide-instrument-test#section36049271219",
        children: "DevEco Studio指导"
      }), "创建ArkTS测试用例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "编写单元测试脚本",
      children: "编写单元测试脚本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个完整的测试脚本需要包含以下基本元素："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "依赖导包，以便使用单元测试框架提供的接口，以及其他测试脚本中需要依赖使用的接口。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "测试代码编写，编写测试用例的相关测试逻辑。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "断言接口调用，设置测试代码中的检查点，用于检查用例是否符合预期。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面提供一个简单示例，测试场景：启动被测试页面，检查设备当前显示的页面是否为预期启动的页面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, expect, it, Level, Size, TestType } from '@ohos/hypium';\nimport { abilityDelegatorRegistry } from '@kit.TestKit';\nimport { UIAbility, Want } from '@kit.AbilityKit';\n\nconst delegator = abilityDelegatorRegistry.getAbilityDelegator();\n\nfunction sleep(time: number) {\n  return new Promise<void>((resolve: Function) => setTimeout(resolve, time));\n}\n\nexport default function abilityTest() {\n  describe('ActsAbilityTest', () => {\n    // 测试套名称为ActsAbilityTest\n    // 可根据此处设置的用例类型、用例规模、用例级别进行用例筛选\n    it('testExample', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, async (done: Function) => {\n      // 测试用例名称为testExample\n      await sleep(500);\n      const bundleName = abilityDelegatorRegistry.getArguments().bundleName;\n      // 启动被测试Ability\n      const want: Want = {\n        bundleName: bundleName,\n        abilityName: 'EntryAbility'\n      }\n      await delegator.startAbility(want);\n      await sleep(500);\n      // 获取设备上前台显示的页面并断言检查\n      const ability: UIAbility = await delegator.getCurrentTopAbility();\n      expect(ability.context.abilityInfo.name).assertEqual('EntryAbility');\n      done();\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deveco-studio执行测试脚本",
      children: "DevEco Studio执行测试脚本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连接目标测试设备（如手机），在DevEco Studio页面点击对应按钮执行测试脚本，当前支持以下四种方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "测试包级别执行，即执行测试包内的全部用例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "测试类级别执行，即执行*.ets文件里的所有测试用例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "测试套级别执行，即执行describe接口中定义的全部测试用例。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "测试用例级别执行，即执行指定it接口也就是单条测试用例。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下面给出测试类级别即测试文件执行示例，其他请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-app-test/ide-test/ide-code-test/ide-instrument-test#section1574003717165",
        children: "运行模式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(787857)/* ["default"] */.A) + "",
        width: "459",
        height: "476"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查看测试结果"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试执行后可直接在DevEco Studio中查看测试结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(9133)/* ["default"] */.A) + "",
        width: "1742",
        height: "508"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查看测试用例覆盖率"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["执行测试用例后可以查看测试用例覆盖率，具体操作请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-app-test/ide-test/ide-code-test/ide-instrument-test#section1989615417457",
        children: "覆盖率统计模式"
      }), "章节内的内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "命令行执行测试脚本",
      children: "命令行执行测试脚本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "脚本执行需连接硬件设备，开发者安装测试包到连接设备上，在命令行窗口中通过执行aa test命令并设置执行参数，触发执行测试用例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "aa test工具命令列表"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是单元测试过程中的常用命令，其他aa test命令及含义说明参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/aa-tool",
        children: "命令指南说明"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示例"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--bundleName/-b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定应用Bundle名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- b com.test.example"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--packageName/-p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定应用模块名，适用于FA模型应用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- p com.test.example.entry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "--moduleName/-m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定应用模块名，适用于Stage模型应用。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-m entry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "特定参数，以<key, value>键值对方式传入。框架支持通过-s参数键值配置多种用例执行方式，-s的参数及对应含义参见下表。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- s unittest /ets/testrunner/OpenHarmonyTestRunner"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数含义及取值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "示例"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unittest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用例执行所使用OpenHarmonyTestRunner对象，取值可为OpenHarmonyTestRunner或用户自定义runner名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-s unittest OpenHarmonyTestRunner"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "筛选执行方式，即指定要执行的测试套或测试用例。取值为describeName，describeName#itName，其中describeName为测试套名称、itName为测试用例名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-s class attributeTest#testAttributeIt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "notClass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "排除执行方式，即指定不需要执行的测试套或测试用例。取值为describeName，describeName#itName，其中describeName为测试套名称、itName为测试用例名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-s notClass attributeTest#testAttributeIt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "itName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "筛选执行方式， 指定要执行的测试用例。取值为itName。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-s itName testAttributeIt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "timeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置测试用例执行的超时时间。取值为正整数（单位ms），默认值：5000。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-s timeout 15000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "breakOnError"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["遇错即停方式，设置是否在用例失败时立即停止测试。取值为true（停止）/false（继续），默认为false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.6版本开始支持。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-s breakOnError true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "random"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["随机执行方式，设置为true时随机顺序执行测试用例。取值为true（设置）/false（不设置），默认为false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.3版本开始支持。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-s random true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "testType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "筛选执行方式，指定筛选执行的用例类型。取值为function，performance，power，reliability，security，global，compatibility，user，standard，safety，resilience。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-s testType function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "筛选执行方式，指定筛选执行的用例级别。取值为0，1，2，3，4。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-s level 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "筛选执行方式，指定筛选执行的用例规模。取值为small，medium，large。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-s size small"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stress"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["压力执行方式，指定执行用例的执行次数，设置后框架按照设置次数重复执行。取值为正整数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.5版本开始支持。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-s stress 1000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "skipMessage"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["控制显示待执行的测试用例信息全集中，是否包含被设置跳过执行的测试套和用例的信息。取值为true（不显示相关信息）/false（显示相关信息），默认为false。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.17版本开始支持。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-s skipMessage true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "runSkipped"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["跳过执行方式，指定要执行的跳过测试套&跳过用例。取值为all，skipped，describeName#itName。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.17版本开始支持。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-s runSkipped all"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行测试脚本"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(924476)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下文参数配置和命令示例均基于Stage模型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["执行命令参数需基于@ohos/hypium框架发布版本，且测试应用包需集成该版本，否则命令参数无法响应，具体配置方式参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E6%A1%86%E6%9E%B6%E5%8F%91%E5%B8%83%E6%96%B9%E5%BC%8F",
        children: "发布方式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码1"
        })
      }), "：执行所有测试用例"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: " hdc shell aa test -b xxx -m xxx -s unittest OpenHarmonyTestRunner\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码2"
        })
      }), "：执行指定的describe测试套用例，指定多个需用逗号隔开"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  hdc shell aa test -b xxx -m xxx -s unittest OpenHarmonyTestRunner -s class s1,s2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码3"
        })
      }), "：执行指定测试套中指定的用例，指定多个需用逗号隔开"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  hdc shell aa test -b xxx -m xxx -s unittest OpenHarmonyTestRunner -s class testStop#stop_1,testStop1#stop_0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码4"
        })
      }), "：执行除指定配置外的所有用例，设置不执行多个测试套需用逗号隔开"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  hdc shell aa test -b xxx -m xxx -s unittest OpenHarmonyTestRunner -s notClass testStop\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码5"
        })
      }), "：执行指定it名称的所有用例，指定多个需用逗号隔开"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  hdc shell aa test -b xxx -m xxx -s unittest OpenHarmonyTestRunner -s itName stop_0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码6"
        })
      }), "：用例执行超时时长配置"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  hdc shell aa test -b xxx -m xxx -s unittest OpenHarmonyTestRunner -s timeout 15000\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码7"
        })
      }), "：用例以遇错即停模式执行用例"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  hdc shell aa test -b xxx -m xxx -s unittest OpenHarmonyTestRunner -s breakOnError true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码8"
        })
      }), "：执行测试类型匹配的测试用例"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  hdc shell aa test -b xxx -m xxx -s unittest OpenHarmonyTestRunner -s testType function\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码9"
        })
      }), "：执行测试级别匹配的测试用例"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  hdc shell aa test -b xxx -m xxx -s unittest OpenHarmonyTestRunner -s level 0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码10"
        })
      }), "：执行测试规模匹配的测试用例"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  hdc shell aa test -b xxx -m xxx -s unittest OpenHarmonyTestRunner -s size small\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码11"
        })
      }), "：执行测试用例指定次数"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  hdc shell aa test -b xxx -m xxx -s unittest OpenHarmonyTestRunner -s stress 1000\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查看测试结果"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在命令行模式执行过程中，框架会打印如下日志信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OHOS_REPORT_STATUS: class=ActsAbilityTest\nOHOS_REPORT_STATUS: current=1\nOHOS_REPORT_STATUS: id=JS\nOHOS_REPORT_STATUS: numtests=447\nOHOS_REPORT_STATUS: stream=\nOHOS_REPORT_STATUS: test=testExample\nOHOS_REPORT_STATUS_CODE: 1\n\nOHOS_REPORT_STATUS: class=ActsAbilityTest\nOHOS_REPORT_STATUS: current=1\nOHOS_REPORT_STATUS: id=JS\nOHOS_REPORT_STATUS: numtests=447\nOHOS_REPORT_STATUS: stream=\nOHOS_REPORT_STATUS: test=testExample\nOHOS_REPORT_STATUS_CODE: 0\nOHOS_REPORT_STATUS: consuming=4\n"
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "日志输出字段"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "日志输出字段含义"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OHOS_REPORT_SUM"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前执行的测试套中用例总数。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OHOS_REPORT_STATUS: class"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前执行用例所属测试套名称。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OHOS_REPORT_STATUS: id"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前用例执行语言，默认JS。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OHOS_REPORT_STATUS: numtests"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前测试包中测试用例总数。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OHOS_REPORT_STATUS: stream"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前用例发生错误时，记录错误信息。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OHOS_REPORT_STATUS: test"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前用例执行的it name。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OHOS_REPORT_STATUS_CODE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前用例执行状态。1表示用例开始执行，0表示用例执行通过，-1表示用例执行报错，-2表示用例执行失败。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "OHOS_REPORT_STATUS: consuming"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前用例执行消耗的时长（ms）。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "命令行执行完成后，框架会打印如下相关日志信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OHOS_REPORT_RESULT: stream=Tests run: 447, Failure: 0, Error: 1, Pass: 201, Ignore: 245\nOHOS_REPORT_CODE: 0\n\nOHOS_REPORT_RESULT: breakOnError model, Stopping whole test suite if one specific test case failed or error\nOHOS_REPORT_STATUS: taskconsuming=16029\n"
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "日志输出字段"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "日志输出字段含义"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "run"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前测试包用例总数。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Failure"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前测试失败用例数量。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Error"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前执行用例发生错误用例数量。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Pass"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前执行用例通过用例数量。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Ignore"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "当前未执行用例数量。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "taskconsuming"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "执行当前测试用例总耗时（ms）。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(943171)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当按照遇错即停方式执行时，用例发生错误时，注意查看Ignore字段以及错误中断时的提示信息。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "单元测试框架能力使用说明",
      children: "单元测试框架能力使用说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基础流程能力",
      children: "基础流程能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单元测试框架提供执行测试脚本所需的基础流程接口，开发者需要实现相关接口，框架侧在运行时通过基础流程接口识别测试用例，调度执行并汇总测试结果。当前支持的基础流程接口如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "describe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一个测试套，测试套中可以定义多个测试用例函数，但不支持异步函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "it"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义一条测试用例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "beforeAll"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在测试套内定义一个预置条件，在所有测试用例开始前执行且仅执行一次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "beforeEach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在测试套内定义一个预置条件，在每条测试用例开始前执行，执行次数与it定义的测试用例数一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "beforeEachIt"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在测试套内定义一个单元预置条件，在每条测试用例开始前执行。  外层测试套定义的beforeEachIt会在内部测试套中的测试用例执行前执行。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.25版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "afterEach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在测试套内定义一个单元清理条件，在每条测试用例结束后执行，执行次数与it定义的测试用例数一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "afterEachIt"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在测试套内定义一个单元预置条件，在每条测试用例结束后执行。  外层测试套定义的afterEachIt会在内部测试套中的测试用例执行结束后执行。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.25版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "afterAll"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在测试套内定义一个清理条件，在所有测试用例结束后执行且仅执行一次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "beforeItSpecified"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在测试套内定义一个单元预置条件，仅在指定测试用例开始前执行。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.15版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "afterItSpecified"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在测试套内定义一个单元清理条件，仅在指定测试用例结束后执行。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.15版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "expect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持bool类型判断等多种断言能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xdescribe"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义一个跳过的测试套，测试套中可以定义多个测试用例函数，但不支持异步函数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.17版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "xit"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义一条跳过的测试用例。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.17版本开始支持。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码1"
        })
      }), "：beforeAll/beforeEach/afterEach/afterAll使用示例"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, Level } from '@ohos/hypium';\n\nexport default function exampleTest() {\n\n  describe('order1_sample', () => {\n    let testNumA: number = 1;\n    let testNumB: number = 1;\n\n    beforeAll(() => {\n      testNumA++;\n    })\n\n    beforeEach(() => {\n      testNumA++;\n      testNumB++;\n    })\n\n    afterEach(() => {\n      testNumA++;\n    })\n\n    afterAll(() => {\n      let expectValue: number = 5;\n      expect(testNumA).assertEqual(expectValue);\n    })\n\n    it('testExampleA', Level.LEVEL1, async (done: Function) => {\n      let expectA: number = 3;\n      let expectB: number = 2;\n      expect(testNumA).assertEqual(expectA);\n      expect(testNumB).assertEqual(expectB);\n      done();\n    })\n\n    it('testExampleB', Level.LEVEL1, async (done: Function) => {\n      let expectA: number = 5;\n      let expectB: number = 3;\n      expect(testNumA).assertEqual(expectA);\n      expect(testNumB).assertEqual(expectB);\n      done();\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码2"
        })
      }), "：beforeItSpecified/afterItSpecified使用示例，从1.0.15版本开始支持"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { afterItSpecified, beforeItSpecified, describe, expect, it, Level } from '@ohos/hypium';\n\nexport default function exampleTest() {\n\n  describe('order2_sample', () => {\n    let testNumA: number = 1;\n    let testNumB: number = 1;\n\n    beforeItSpecified(['testExampleB'], () => {\n      testNumB++;\n    })\n    afterItSpecified(['testExampleA'], () => {\n      testNumA++;\n    })\n\n    it('testExampleA', Level.LEVEL1, async (done: Function) => {\n      expect(testNumA).assertEqual(1);\n      expect(testNumB).assertEqual(1);\n      done();\n    })\n\n    it('testExampleB', Level.LEVEL1, async (done: Function) => {\n      expect(testNumA).assertEqual(2);\n      expect(testNumB).assertEqual(2);\n      done();\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码3"
        })
      }), "：xit使用示例，从1.0.17版本开始支持"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, it, Level, xit } from '@ohos/hypium';\n\nexport default function describeExampleTest() {\n\n  describe('order3_sample', () => {\n    xit('testExampleA', Level.LEVEL1, async (done: Function) => {\n      done();\n    })\n\n    it('testExampleB', Level.LEVEL1, async (done: Function) => {\n      done();\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码4"
        })
      }), "：beforeEachIt/afterEachIt使用示例，从1.0.25版本开始支持"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, beforeEach, afterEach, beforeEachIt, afterEachIt, it, expect } from '@ohos/hypium';\nlet str = \"\";\nexport default function test() {\n  describe('test0', () => {\n    beforeEach(async () => {\n      str += \"A\"\n    })\n    beforeEachIt(async () => {\n      str += \"B\"\n    })\n    afterEach(async () => {\n      str += \"C\"\n    })\n    afterEachIt(async () => {\n      str += \"D\"\n    })\n    it('test0000', 0, () => {\n      expect(str).assertEqual(\"BA\");\n    })\n    describe('test1', () => {\n      beforeEach(async () => {\n        str += \"E\"\n      })\n      beforeEachIt(async () => {\n        str += \"F\"\n      })\n      it('test1111', 0, async () => {\n        expect(str).assertEqual(\"BACDBFE\");\n      })\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "断言能力",
      children: "断言能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单元测试框架提供了丰富的断言接口，供开发者在不同测试场景下使用，详细接口可查看下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertClose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检验实际值和预期值之间的数值差异是否在指定的允许误差范围内。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertContain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检验实际值中是否包含预期值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertEqual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检验实际值是否等于预期值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertFail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "抛出一个错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertFalse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检验实际值是否是false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertTrue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检验实际值是否是true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertInstanceOf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检验实际值是否是预期类型，支持基础类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertLarger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检验实际值是否大于预期值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertLargerOrEqual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检验实际值是否大于或等于预期值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertLess"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检验实际值是否小于预期值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertLessOrEqual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检验实际值是否小于或等于预期值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertNull"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检验实际值是否是null。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertThrowError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检验实际值抛出Error内容是否为预期的异常类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertUndefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检验实际值是否是undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertNaN"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检验实际值是否是NaN。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.4版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertNegUnlimited"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检验实际值是否等于Number.NEGATIVE_INFINITY。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.4版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertPosUnlimited"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检验实际值是否等于Number.POSITIVE_INFINITY。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.4版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertDeepEquals"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检验实际值和预期值是否完全相等。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.4版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertPromiseIsPending"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检验Promise是否处于Pending状态。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.4版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertPromiseIsRejected"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检验Promise是否处于Rejected状态。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.4版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertPromiseIsRejectedWith"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检验Promise是否处于Rejected状态，并且比较执行的结果值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.4版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertPromiseIsRejectedWithError"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检验Promise是否处于Rejected状态并包含异常，比较异常类型和异常信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.4版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertPromiseIsResolved"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检验Promise是否处于Resolved状态。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.4版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "assertPromiseIsResolvedWith"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["检验Promise是否处于Resolved状态并比较结果值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.4版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "not"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["断言取反，支持上述所有断言功能。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.4版本开始支持。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, expect, it, Level } from '@ohos/hypium';\n\nexport default function exampleTest() {\n  describe('ExampleTest', () => {\n    it('assertCloseTest', Level.LEVEL1, () => {\n      let a: number = 100;\n      let b: number = 0.1;\n      let c: number = 99;\n      expect(a).assertClose(c, b);\n    })\n\n    it('assertContain_1', Level.LEVEL1, () => {\n      let a = 'abc';\n      expect(a).assertContain('b');\n    })\n\n    it('assertContain_2', Level.LEVEL1, () => {\n      let a = [1, 2, 3];\n      expect(a).assertContain(1);\n    })\n\n    it('assertEqualTest', Level.LEVEL1, () => {\n      expect(3).assertEqual(3);\n    })\n\n    it('assertFailTest', Level.LEVEL1, () => {\n      expect().assertFail(); // 用例失败\n    })\n\n    it('assertFalseTest', Level.LEVEL1, () => {\n      expect(false).assertFalse();\n    })\n\n    it('assertTrueTest', Level.LEVEL1, () => {\n      expect(true).assertTrue();\n    })\n\n    it('assertInstanceOfTest', Level.LEVEL1, () => {\n      let a: string = 'strTest';\n      expect(a).assertInstanceOf('String');\n    })\n\n    it('assertLargerTest', Level.LEVEL1, () => {\n      expect(3).assertLarger(2);\n    })\n\n    it('assertLessTest', Level.LEVEL1, () => {\n      expect(2).assertLess(3);\n    })\n\n    it('assertNullTest', Level.LEVEL1, () => {\n      expect(null).assertNull();\n    })\n\n    it('assertThrowErrorTest', Level.LEVEL1, () => {\n      expect(() => {\n        throw new Error('test');\n      }).assertThrowError('test');\n    })\n\n    it('assertUndefinedTest', Level.LEVEL1, () => {\n      expect(undefined).assertUndefined();\n    })\n\n    it('assertLargerOrEqualTest', Level.LEVEL1, () => {\n      expect(3).assertLargerOrEqual(3);\n    })\n\n    it('assertLessOrEqualTest', Level.LEVEL1, () => {\n      expect(3).assertLessOrEqual(3);\n    })\n\n    it('assertNaNTest', Level.LEVEL1, () => {\n      expect(Number.NaN).assertNaN(); // true\n    })\n\n    it('assertNegUnlimitedTest', Level.LEVEL1, () => {\n      expect(Number.NEGATIVE_INFINITY).assertNegUnlimited(); // true\n    })\n\n    it('assertPosUnlimitedTest', Level.LEVEL1, () => {\n      expect(Number.POSITIVE_INFINITY).assertPosUnlimited(); // true\n    })\n\n    it('deepEquals_null_true', Level.LEVEL1, () => {\n      expect(null).assertDeepEquals(null);\n    })\n\n    it('deepEquals_array_not_have_true', Level.LEVEL1, () => {\n      const a: Array<number> = [];\n      const b: Array<number> = [];\n      expect(a).assertDeepEquals(b);\n    })\n\n    it('deepEquals_map_equal_length_success', Level.LEVEL1, () => {\n      const a: Map<number, number> = new Map();\n      const b: Map<number, number> = new Map();\n      a.set(1, 100);\n      a.set(2, 200);\n      b.set(1, 100);\n      b.set(2, 200);\n      expect(a).assertDeepEquals(b);\n    })\n\n    it('deepEquals_obj_success_1', Level.LEVEL1, () => {\n      const a: SampleTest = { x: 1 };\n      const b: SampleTest = { x: 1 };\n      expect(a).assertDeepEquals(b);\n    })\n\n    it('deepEquals_regExp_success_0', Level.LEVEL1, () => {\n      const a: RegExp = new RegExp('/test/');\n      const b: RegExp = new RegExp('/test/');\n      expect(a).assertDeepEquals(b);\n    })\n\n    it('assertPromiseIsPendingTest', Level.LEVEL1, async () => {\n      let p: Promise<void> = new Promise<void>(() => {\n      });\n      await expect(p).assertPromiseIsPending();\n    })\n\n    it('assertPromiseIsRejectedTest', Level.LEVEL1, async () => {\n      let info: PromiseInfo = { res: 'no' };\n      let p: Promise<PromiseInfo> = Promise.reject(info);\n      await expect(p).assertPromiseIsRejected();\n    })\n\n    it('assertPromiseIsRejectedWithTest', Level.LEVEL1, async () => {\n      let info: PromiseInfo = { res: 'reject value' };\n      let p: Promise<PromiseInfo> = Promise.reject(info);\n      await expect(p).assertPromiseIsRejectedWith(info);\n    })\n\n    it('assertPromiseIsRejectedWithErrorTest', Level.LEVEL1, async () => {\n      let p1: Promise<TypeError> = Promise.reject(new TypeError('number'));\n      await expect(p1).assertPromiseIsRejectedWithError(TypeError);\n    })\n\n    it('assertPromiseIsResolvedTest', Level.LEVEL1, async () => {\n      let info: PromiseInfo = { res: 'result value' };\n      let p: Promise<PromiseInfo> = Promise.resolve(info);\n      await expect(p).assertPromiseIsResolved();\n    })\n\n    it('assertPromiseIsResolvedWithTest', Level.LEVEL1, async () => {\n      let info: PromiseInfo = { res: 'result value' };\n      let p: Promise<PromiseInfo> = Promise.resolve(info);\n      await expect(p).assertPromiseIsResolvedWith(info);\n    })\n\n    it('test_message', Level.LEVEL1, () => {\n      expect(1).message('1 is not equal 2!').assertEqual(2); // fail\n    })\n  })\n}\n\ninterface SampleTest {\n  x: number;\n}\n\ninterface PromiseInfo {\n  res: string;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mock能力",
      children: "Mock能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从@ohos/hypium 1.0.1版本开始，单元测试框架支持Mock能力。配置方式参考上文", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E6%A1%86%E6%9E%B6%E5%8F%91%E5%B8%83%E6%96%B9%E5%BC%8F",
        children: "发布方式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(777055)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅支持Mock应用工程中自定义对象，不支持Mock系统API对象。如需Mock系统API，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-app-test/ide-test/ide-test-mock#section8353132513310",
        children: "系统模块Mock指南"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "基础类"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "MockKit是Mock的基础类，用于指定需要Mock的实例和函数。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mockFunc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mock某个类实例中的函数，支持使用异步函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mockPrivateFunc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mock某个类的实例上的私有方法。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.25版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mockProperty"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mock某个类的实例上的属性。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：从@ohos/hypium 1.0.25版本开始支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "verify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "验证函数在对应参数下的执行行为是否符合预期，返回一个VerificationMode类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ignoreMock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用ignoreMock可以还原实例中被Mock后的函数，对被Mock后的函数有效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用例执行完毕后，对被Mock对象实例进行还原处理（还原之后对象恢复被Mock之前的功能）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "clearAll"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用例执行完毕后，进行数据和内存清理，不会还原实例中被Mock后的函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "VerificationMode"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VerificationMode用于验证被Mock函数的被调用次数，需同verify函数结合使用。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "times"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "验证函数被调用过的次数符合预期。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "验证函数被调用过一次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "atLeast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "验证函数最少被调用的次数符合预期。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "atMost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "验证函数最多被调用的次数符合预期。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "never"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "验证函数从未被调用过。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "when"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "when是一个函数，用于设置函数期望被Mock的值。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "when"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对传入后函数做检查，检查是否被Mock并标记过，返回一个内置函数，函数执行后返回一个类用于设置Mock值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用when函数之后，需使用如下函数设置函数被Mock后的返回值。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "afterReturn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定一个自定义的期望返回值，比如某个字符串或者一个Promise。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "afterReturnNothing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定预期没有返回值，即undefined。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "afterAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定预期返回一个函数执行的操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "afterThrow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定预期抛出异常，并指定异常描述信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ArgumentMatchers相关接口"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArgumentMatchers用于用户自定义函数参数，当开发者想基于某类规则设定预期返回值时，可以使用。它以枚举值或函数的形式提供给开发者使用。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "any"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定用户传任何类型参数（undefined和null除外），执行的结果返回所设置的预期值，使用ArgumentMatchers.any方式调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "anyString"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定用户传任何字符串参数，执行的结果都是预期的值，使用ArgumentMatchers.anyString方式调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "anyBoolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定用户传任何boolean类型参数，执行的结果都是预期的值，使用ArgumentMatchers.anyBoolean方式调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "anyFunction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定用户传任何function类型参数，执行的结果都是预期的值，使用ArgumentMatchers.anyFunction方式调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "anyNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定用户传任何数字类型参数，执行的结果都是预期的值，使用ArgumentMatchers.anyNumber方式调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "anyObj"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定用户传任何对象类型参数，执行的结果都是预期的值，使用ArgumentMatchers.anyObj方式调用。"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "matchRegexs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设定用户传任何符合正则表达式验证的参数，执行的结果都是预期的值，使用ArgumentMatchers.matchRegexs(Regex)方式调用。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(375723)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Mock能力时必须导入Mock能力模块： MockKit，when，开发者可根据实际需求导入对应模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如：import { describe, expect, it, MockKit, when} from '@ohos/hypium'"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码1"
        })
      }), "：使用afterReturn/afterReturnNothing设置预期返回值"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, expect, it, MockKit, when } from '@ohos/hypium';\n\nclass ClassName {\n  constructor() {\n  }\n\n  method_1(arg: string) {\n    return '888888';\n  }\n}\n\nexport default function afterReturnTest() {\n  describe('afterReturn_sample', () => {\n    it('afterReturnTest', 0, () => {\n      // 创建一个Mock能力的对象MockKit\n      let mocker: MockKit = new MockKit();\n      // 初始化ClassName的对象claser，作为被Mock的对象实例\n      let claser: ClassName = new ClassName();\n      // 进行Mock操作，对ClassName类的method_1函数进行Mock\n      let mockfunc: Function = mocker.mockFunc(claser, claser.method_1);\n      // 期望claser.method_1函数被Mock后, 以'testA'为入参时调用函数返回结果'1',以'testB''为入参时调用函数返回结果undefined\n      when(mockfunc)('testA').afterReturn('1');\n      when(mockfunc)('testB').afterReturnNothing();\n      // 对Mock后的函数进行断言，看是否符合预期。分别传入参数'testA'和'testB'时，应该返回自定义的预期结果1和undefined\n      expect(claser.method_1('testA')).assertEqual('1'); // 断言执行通过\n      expect(claser.method_1('testB')).assertUndefined(); // 断言执行通过\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码2"
        })
      }), "：使用ArgumentMatchers设定参数类型为any即接受任何参数（undefined和null除外）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ArgumentMatchers, describe, expect, it, MockKit, when } from '@ohos/hypium';\n\nclass ClassName {\n  constructor() {\n  }\n\n  method_1(arg: string) {\n    return '888888';\n  }\n}\n\nexport default function argumentMatchersAnyTest() {\n  describe('argumentMatchersForAny_sample', () => {\n    it('testMockfunc', 0, () => {\n      // 创建一个Mock能力的对象MockKit\n      let mocker: MockKit = new MockKit();\n      // 初始化ClassName的对象claser\n      let claser: ClassName = new ClassName();\n      // 进行Mock操作，对ClassName类的method_1函数进行Mock\n      let mockfunc: Function = mocker.mockFunc(claser, claser.method_1);\n      // 期望claser.method_1函数被Mock后, 参数为任一类型在被调用时均返回结果'1'\n      when(mockfunc)(ArgumentMatchers.any).afterReturn('1');\n      // 传入不同参数验证是否符合预期\n      expect(claser.method_1('test')).assertEqual('1'); // 断言执行通过\n      expect(claser.method_1('123')).assertEqual('1'); // 断言执行通过\n      expect(claser.method_1('true')).assertEqual('1'); // 断言执行通过\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码3"
        })
      }), "：使用ArgumentMatchers设定参数类型为String"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ArgumentMatchers, describe, expect, it, MockKit, when } from '@ohos/hypium';\n\nclass ClassName {\n  constructor() {\n  }\n\n  method_1(arg: string) {\n    return '888888';\n  }\n}\n\nexport default function argumentMatchersTest() {\n  describe('argumentMatchersForString_sample', () => {\n    it('testMockfunc', 0, () => {\n      // 创建一个Mock能力的对象MockKit\n      let mocker: MockKit = new MockKit();\n      // 初始化ClassName的对象claser\n      let claser: ClassName = new ClassName();\n      // 进行Mock操作,对ClassName类的method_1函数进行Mock\n      let mockfunc: Function = mocker.mockFunc(claser, claser.method_1);\n      // 期望claser.method_1函数被Mock后, 以任何string类型为参数调用函数时返回结果'1'\n      when(mockfunc)(ArgumentMatchers.anyString).afterReturn('1');\n      // 传入不同string类型参数，验证是否符合预期\n      expect(claser.method_1('test')).assertEqual('1'); // 断言执行通过\n      expect(claser.method_1('abc')).assertEqual('1'); // 断言执行通过\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码4"
        })
      }), "：使用ArgumentMatchers设定参数类型为matchRegexs（Regex）即正则表达式"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ArgumentMatchers, describe, expect, it, MockKit, when } from '@ohos/hypium';\n\nclass ClassName {\n  constructor() {\n  }\n\n  method_1(arg: string) {\n    return '888888';\n  }\n}\n\nexport default function matchRegexsTest() {\n  describe('argumentMatchersForRegex_sample', () => {\n    it('testMockfunc', 0, () => {\n      // 创建一个Mock能力的对象MockKit\n      let mocker: MockKit = new MockKit();\n      // 初始化ClassName的对象claser\n      let claser: ClassName = new ClassName();\n      // 进行Mock操作，对ClassName类的method_1函数进行Mock\n      let mockfunc: Function = mocker.mockFunc(claser, claser.method_1);\n      // 期望claser.method_1函数被Mock后, 以\"test\"为入参调用函数时返回结果'1'\n      when(mockfunc)(ArgumentMatchers.matchRegexs(new RegExp(\"test\"))).afterReturn('1');\n      // 传入test参数后验证是否符合预期\n      expect(claser.method_1('test')).assertEqual('1'); // 断言执行通过\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码5"
        })
      }), "：使用verify函数验证被Mock函数在对应参数下的执行行为是否符合预期"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, it, MockKit } from '@ohos/hypium';\n\nclass ClassName {\n  constructor() {\n  }\n\n  method_1(...arg: string[]) {\n    return '888888';\n  }\n\n  method_2(...arg: string[]) {\n    return '999999';\n  }\n}\n\nexport default function verifyTest() {\n  describe('verify_sample', () => {\n    it('testMockfunc', 0, () => {\n      // 创建一个Mock能力的对象MockKit\n      let mocker: MockKit = new MockKit();\n      // 初始化ClassName的对象claser\n      let claser: ClassName = new ClassName();\n      // 进行Mock操作，对ClassName类的method_1和method_2两个函数进行Mock\n      mocker.mockFunc(claser, claser.method_1);\n      mocker.mockFunc(claser, claser.method_2);\n      // 函数调用\n      claser.method_1('abc', 'ppp');\n      claser.method_1('abc');\n      claser.method_1('xyz');\n      claser.method_1();\n      claser.method_1('abc', 'xxx', 'yyy');\n      claser.method_1();\n      claser.method_2('111');\n      claser.method_2('111', '222');\n      // 对Mock后的两个函数进行验证，验证method_2,参数仅为'111'时执行过一次\n      mocker.verify('method_2', ['111']).once(); // 断言执行通过\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码6"
        })
      }), "：使用ignoreMock函数还原指定被Mock函数实现"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ArgumentMatchers, describe, expect, it, MockKit, when } from '@ohos/hypium';\n\nclass ClassName {\n  constructor() {\n  }\n\n  method_1(...arg: number[]) {\n    return '888888';\n  }\n\n  method_2(...arg: number[]) {\n    return '999999';\n  }\n}\n\nexport default function ignoreMockTest() {\n  describe('ignoreMock_sample', () => {\n    it('testMockfunc', 0, () => {\n      // 创建一个Mock能力的对象MockKit\n      let mocker: MockKit = new MockKit();\n      // 初始化ClassName的对象claser\n      let claser: ClassName = new ClassName();\n      // 进行Mock操作，对ClassName类的method_1和method_2两个函数进行Mock\n      let func_1: Function = mocker.mockFunc(claser, claser.method_1);\n      let func_2: Function = mocker.mockFunc(claser, claser.method_2);\n      // 期望claser.method_1函数被Mock后, 以number类型为入参时调用函数返回结果'4'\n      when(func_1)(ArgumentMatchers.anyNumber).afterReturn('4');\n      // 期望claser.method_2函数被Mock后, 以number类型为入参时调用函数返回结果'5'\n      when(func_2)(ArgumentMatchers.anyNumber).afterReturn('5');\n      // 函数调用\n      expect(claser.method_1(123)).assertEqual(\"4\");\n      expect(claser.method_2(456)).assertEqual(\"5\");\n      // 现在对Mock后的两个函数的其中一个函数method_1进行还原处理\n      mocker.ignoreMock(claser, claser.method_1);\n      // 调用claser.method_1函数\n      expect(claser.method_1(123)).assertEqual('888888'); // 断言执行通过\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码7"
        })
      }), "：使用clear函数还原类中所有被Mock函数原有实现"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ArgumentMatchers, describe, expect, it, MockKit, when } from '@ohos/hypium';\n\nclass ClassName {\n  constructor() {\n  }\n\n  method_1(...arg: number[]) {\n    return '888888';\n  }\n\n  method_2(...arg: number[]) {\n    return '999999';\n  }\n}\n\nexport default function clearTest() {\n  describe('clearMock_sample', () => {\n    it('testMockfunc', 0, () => {\n      // 创建一个Mock能力的对象MockKit\n      let mocker: MockKit = new MockKit();\n      // 初始化ClassName的对象claser\n      let claser: ClassName = new ClassName();\n      // 进行Mock操作，对ClassName类的method_1和method_2两个函数进行Mock\n      let func_1: Function = mocker.mockFunc(claser, claser.method_1);\n      let func_2: Function = mocker.mockFunc(claser, claser.method_2);\n      // 期望claser.method_1函数被Mock后, 以任何number类型为参数调用函数时返回结果'4'\n      when(func_1)(ArgumentMatchers.anyNumber).afterReturn('4');\n      // 期望claser.method_2函数被Mock后, 以任何number类型为参数调用函数时返回结果'5'\n      when(func_2)(ArgumentMatchers.anyNumber).afterReturn('5');\n      // 函数调用\n      expect(claser.method_1(123)).assertEqual('4');\n      expect(claser.method_2(123)).assertEqual('5');\n      // 还原obj上所有的Mock能力\n      mocker.clear(claser);\n      // 调用claser.method_1,claser.method_2函数，测试结果\n      expect(claser.method_1(123)).assertEqual('888888'); // 断言执行通过\n      expect(claser.method_2(123)).assertEqual('999999'); // 断言执行通过\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码8"
        })
      }), "：使用afterThrow函数抛出指定异常信息"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, expect, it, MockKit, when } from '@ohos/hypium';\n\nclass ClassName {\n  constructor() {\n  }\n\n  method_1(arg: string) {\n    return '888888';\n  }\n}\n\nexport default function afterThrowTest() {\n  describe('afterThrow_sample', () => {\n    it('testMockfunc', 0, () => {\n      // 创建一个Mock能力的对象MockKit\n      let mocker: MockKit = new MockKit();\n      // 初始化ClassName的对象claser\n      let claser: ClassName = new ClassName();\n      // 进行Mock操作,对ClassName类的method_1函数进行Mock\n      let mockfunc: Function = mocker.mockFunc(claser, claser.method_1);\n      // 期望claser.method_1函数被Mock后, 以'test'为参数调用函数时抛出error xxx异常\n      when(mockfunc)('test').afterThrow('error xxx');\n      // 执行Mock后的函数，捕捉异常并使用assertEqual对比msg否符合预期\n      try {\n        claser.method_1('test');\n      } catch (e) {\n        expect(e).assertEqual('error xxx'); // 断言执行通过\n      }\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码9"
        })
      }), "：Mock异步返回Promise对象"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, expect, it, MockKit, when } from '@ohos/hypium';\n\nclass ClassName {\n  constructor() {\n  }\n\n  async method_1(arg: string) {\n    return new Promise<string>((resolve: Function, reject: Function) => {\n      setTimeout(() => {\n        resolve('Data conversion');\n      }, 2000);\n    });\n  }\n}\n\nexport default function mockPromiseTest() {\n  describe('returnPromise_sample', () => {\n    it('testMockfunc', 0, async (done: Function) => {\n      // 创建一个Mock能力的对象MockKit\n      let mocker: MockKit = new MockKit();\n      // 初始化ClassName的对象claser\n      let claser: ClassName = new ClassName();\n      // 进行Mock操作对ClassName类的method_1函数进行Mock\n      let mockfunc: Function = mocker.mockFunc(claser, claser.method_1);\n      // 期望claser.method_1函数被Mock后, 以'test'为参数调用函数时返回一个Promise对象\n      when(mockfunc)('test').afterReturn(new Promise<string>((resolve: Function, reject: Function) => {\n        resolve('success something');\n      }));\n      // 执行Mock后的函数，即对定义的Promise进行后续执行\n      let result = await claser.method_1('test');\n      expect(result).assertEqual('success something'); // 断言执行通过\n      done();\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码10"
        })
      }), "：使用times/atLeast函数验证被Mock函数调用次数"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, it, MockKit, when } from '@ohos/hypium';\n\nclass ClassName {\n  constructor() {\n  }\n\n  method_1(...arg: string[]) {\n    return '888888';\n  }\n}\n\nexport default function verifyTimesTest() {\n  describe('verifyTimes_sample', () => {\n    it('test_verify_times', 0, () => {\n      // 创建一个Mock能力的对象MockKit\n      let mocker: MockKit = new MockKit();\n      // 初始化ClassName的对象claser\n      let claser: ClassName = new ClassName();\n      // 进行Mock操作对ClassName类的method_1函数进行Mock\n      let func_1: Function = mocker.mockFunc(claser, claser.method_1);\n      // 期望被Mock后的函数返回结果'4'\n      when(func_1)('123').afterReturn('4');\n      // 函数调用\n      claser.method_1('123', 'ppp');\n      claser.method_1('abc');\n      claser.method_1('xyz');\n      claser.method_1();\n      claser.method_1('abc', 'xxx', 'yyy');\n      claser.method_1('abc');\n      claser.method_1();\n      // 验证函数method_1且参数为'abc'时，执行过的次数是否为2\n      mocker.verify('method_1', ['abc']).times(2); // 断言执行通过\n      // 验证函数method_1且参数为空时，是否至少执行过2次\n      mocker.verify('method_1', []).atLeast(2); // 断言执行通过\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码11"
        })
      }), "：Mock静态函数（从@ohos/hypium 1.0.16版本开始支持）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ArgumentMatchers, describe, expect, it, MockKit, when } from '@ohos/hypium';\n\nclass ClassName {\n  constructor() {\n  }\n\n  static method_1() {\n    return 'ClassName_method_1_call';\n  }\n}\n\nexport default function staticTest() {\n  describe('mockStatic_sample', () => {\n    it('staticTest_001', 0, () => {\n      let really_result = ClassName.method_1();\n      expect(really_result).assertEqual('ClassName_method_1_call');\n      // 创建MockKit对象\n      let mocker: MockKit = new MockKit();\n      // Mock类ClassName对象的某个函数method_1\n      let func_1: Function = mocker.mockFunc(ClassName, ClassName.method_1);\n      // 期望被mock后的函数返回结果'mock_data'\n      when(func_1)(ArgumentMatchers.any).afterReturn('mock_data');\n      let mock_result = ClassName.method_1();\n      expect(mock_result).assertEqual('mock_data'); // 断言执行通过\n      // 清除Mock能力\n      mocker.clear(ClassName);\n      let really_result1 = ClassName.method_1();\n      expect(really_result1).assertEqual('ClassName_method_1_call'); // 断言执行通过\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码12"
        })
      }), "：Mock私有函数（从@ohos/hypium 1.0.25版本开始支持）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, it, expect, MockKit, when, ArgumentMatchers } from '@ohos/hypium';\n\nclass ClassName {\n  constructor() {\n  }\n  method(arg: number):number {\n    return this.method_1(arg);\n  }\n  private method_1(arg: number) {\n    return arg;\n  }\n}\n\nexport default function staticTest() {\n  describe('privateTest', () => {\n    it('private_001', 0, () => {\n      let claser: ClassName = new ClassName();\n      let really_result = claser.method(123);\n      expect(really_result).assertEqual(123);\n      // 1.创建MockKit对象\n      let mocker: MockKit = new MockKit();\n      // 2.Mock类ClassName对象的私有方法，比如method_1\n      let func_1: Function = mocker.mockPrivateFunc(claser, \"method_1\");\n      // 3.期望被Mock后的函数返回结果为456\n      when(func_1)(ArgumentMatchers.any).afterReturn(456);\n      let mock_result = claser.method(123);\n      expect(mock_result).assertEqual(456);\n      // 清除Mock能力\n      mocker.clear(claser);\n      let really_result1 = claser.method(123);\n      expect(really_result1).assertEqual(123);\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码13"
        })
      }), "：Mock成员变量（从@ohos/hypium 1.0.25版本开始支持）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, it, expect, MockKit, when, ArgumentMatchers } from '@ohos/hypium';\n\nclass ClassName {\n  constructor() {\n  }\n  data = 1;\n  private priData = 2;\n  method() {\n    return this.priData;\n  }\n}\n\nexport default function staticTest() {\n  describe('propertyTest', () => {\n    it('property_001', 0, () => {\n      let claser: ClassName = new ClassName();\n      let data = claser.data;\n      expect(data).assertEqual(1);\n      let priData = claser.method();\n      expect(priData).assertEqual(2);\n      // 1.创建MockKit对象\n      let mocker: MockKit = new MockKit();\n      // 2.Mock类ClassName对象的成员变量data\n      mocker.mockProperty(claser, \"data\", 3);\n      mocker.mockProperty(claser, \"priData\", 4);\n      // 3.期望被Mock后的成员和私有成员的值分别为3，4\n      let mock_result = claser.data;\n      let mock_private_result = claser.method();\n      expect(mock_result).assertEqual(3);\n      expect(mock_private_result).assertEqual(4);\n      // 清除Mock能力\n      mocker.ignoreMock(claser, \"data\");\n      mocker.ignoreMock(claser, \"priData\");\n      let really_result = claser.data;\n      expect(really_result).assertEqual(1);\n      let really_private_result = claser.method();\n      expect(really_private_result).assertEqual(2);\n    })\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据驱动",
      children: "数据驱动"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["单元测试框架的数据驱动能力从", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Fhypium",
        children: "@ohos/hypium 1.0.2版本"
      }), "开始支持。开发者可以复用测试用例代码，通过数据配置文件配置输入数据和预期结果数据，在用例实现中获取数据进行相应实现和断言处理，减少冗余测试代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据驱动能力可以根据测试数据配置来驱动测试用例的执行次数和每次执行时传入的参数，使用时依赖data.json配置文件，文件内容如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(940094)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "data.json与测试用例*.test.js或*.test.ets文件同目录。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "data.json文件中的参数配置名称需同测试用例中定义参数名称保持一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"suites\": [{\n    \"describe\": [\"paramExampleTest\"],\n    \"stress\": 4,\n    \"params\": {\n      \"suiteParams1\": \"suiteParams001\",\n      \"suiteParams2\": \"suiteParams002\"\n    },\n    \"items\": [{\n      \"it\": \"testDataDriverAsync\"\n    },\n      {\n        \"it\": \"testDataDriverParam\",\n        \"stress\": 2,\n        \"params\":[\n          {\n            \"ts1\": \"ts1\",\n            \"ts2\": \"ts2\"\n          }\n        ]\n      }]\n  }]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置参数说明："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "配置项名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"suite\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测试套配置。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"describe\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测试套名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"items\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测试用例。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"it\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测试用例名称。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"params\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测试套/测试用例可传入使用的参数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"stress\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测试套/测试用例指定执行次数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stage模型在测试工程中的TestAbility目录下TestAbility.ets文件中导入data.json（FA模型在测试工程中的TestAbility目录下的app.js或app.ets文件中导入data.json），并在文件中的Hypium.hypiumTest()函数执行前设置参数数据，参考下面示例代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { abilityDelegatorRegistry } from '@kit.TestKit';\nimport { Hypium } from '@ohos/hypium';\nimport testsuite from '../test/List.test';\nimport data from '../test/data.json';\nimport Logger from '../util/Logger';\nimport { window } from '@kit.ArkUI';\n\nconst TAG = 'testTag';\n\nexport default class TestAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    Logger.info(TAG, 'TestAbility onCreate');\n    Logger.info(TAG, 'want param:' + JSON.stringify(want));\n    Logger.info(TAG, 'launchParam:' + JSON.stringify(launchParam));\n    let abilityDelegator = abilityDelegatorRegistry.getAbilityDelegator();\n    let abilityDelegatorArguments = abilityDelegatorRegistry.getArguments();\n    Logger.info(TAG, 'start run testcase!!!');\n    // 设置数据\n    Hypium.setData(data);\n    Hypium.hypiumTest(abilityDelegator, abilityDelegatorArguments, testsuite);\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { describe, it } from '@ohos/hypium';\n\nexport default function abilityTest() {\n  describe('AbilityTest', () => {\n    it('testDataDriverAsync', 0, async (done: Function, data: ParamObj) => {\n      done();\n    });\n\n    it('testDataDriver', 0, () => {\n    });\n  })\n}\n\ninterface ParamObj {\n  name: string,\n  value: string\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(515594)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若要使用数据驱动传入参数功能，测试用例it的func必须传入两个参数：done和data，且入参顺序不可调整。若不使用数据驱动传入参数功能，func可以不传参或仅传入done。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "专项能力",
      children: "专项能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["专项能力提供脚本执行配置能力，包括筛选执行、压力执行、随机执行等，通过命令行方式执行，具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%89%A7%E8%A1%8C%E6%B5%8B%E8%AF%95%E8%84%9A%E6%9C%AC",
        children: "命令行执行测试脚本"
      }), "章节介绍。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "单元测试框架常见问题",
      children: "单元测试框架常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "用例中增加的打印日志在用例结果之后才打印"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用例中新增的日志打印信息未在执行过程中出现，而是在执行结束之后才显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此类情况仅在用例调用异步接口时出现。为确保日志正确捕获执行过程，用例中所有日志信息必须在用例执行结束前打印。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当被调用的异步接口数量超过两个时，建议将接口调用封装成Promise方式调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "执行用例时报用例超时错误"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用例执行结束，控制台提示execute time XXms错误，即用例执行超时。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用例执行异步接口时，如果未调用done函数，会导致用例无法正常结束，最终超时。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用例调用函数耗时过长，超过用例执行设置的超时时间（默认5000ms）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用例调用函数时断言失败抛出异常，导致用例执行超时终止。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决方法"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查用例代码逻辑，确保断言失败时能走到done函数，完成用例执行。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可在DevEco Studio的Run/Debug Configurations中修改用例执行超时参数，避免执行超时。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "检查用例代码逻辑，确保断言通过。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/Test/jsunit",
        children: "测试框架"
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
9133(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002581377645-ab151349eee7a466a18b7baac9e2dbc8.png");

},
940094(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
311159(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002581217681-ec8d7b01fc32f54b670242b5ab354124.png");

},
787857(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002550777586-2b4ea0246115ef978b15342110541185.png");

},
924476(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
375723(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
943171(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
777055(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
515594(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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