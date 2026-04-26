"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["412320"], {
405384(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_debug_optimize_api_test_api_test_arkts_js_apis_app_ability_abilitydelegatorregistry_js_apis_app_ability_abilitydelegatorregistry_md_18f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-debug-optimize-api-test-api-test-arkts-js-apis-app-ability-abilitydelegatorregistry-js-apis-app-ability-abilitydelegatorregistry-md-18f.json
var site_docs_ref_system_debug_optimize_api_test_api_test_arkts_js_apis_app_ability_abilitydelegatorregistry_js_apis_app_ability_abilitydelegatorregistry_md_18f_namespaceObject = JSON.parse('{"id":"system-debug-optimize-api/test-api/test-arkts/js-apis-app-ability-abilitydelegatorregistry/js-apis-app-ability-abilitydelegatorregistry","title":"@ohos.app.ability.abilityDelegatorRegistry (AbilityDelegatorRegistry)","description":"AbilityDelegatorRegistry是自动化测试框架使用指南模块，该模块用于获取AbilityDelegator和AbilityDelegatorArgs对象，其中AbilityDelegator对象提供添加用于监视指定ability的生命周期状态更改的AbilityMonitor对象的能力，AbilityDelegatorArgs对象提供获取当前测试参数的能力。","source":"@site/docs-ref/system-debug-optimize-api/test-api/test-arkts/js-apis-app-ability-abilitydelegatorregistry/js-apis-app-ability-abilitydelegatorregistry.md","sourceDirName":"system-debug-optimize-api/test-api/test-arkts/js-apis-app-ability-abilitydelegatorregistry","slug":"/system-debug-optimize-api/test-api/test-arkts/js-apis-app-ability-abilitydelegatorregistry/js-apis-app-ability-abilitydelegatorregistry","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-app-ability-abilitydelegatorregistry/js-apis-app-ability-abilitydelegatorregistry","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"@ohos.app.ability.abilityDelegatorRegistry (AbilityDelegatorRegistry)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitydelegatorregistry","kit":"系统","last_updated":"2026-04-22","slug":"js-apis-app-ability-abilitydelegatorregistry"},"sidebar":"ref","previous":{"title":"JsLeakWatcher错误码","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/performance-analysis-api/performance-analysis-errcode/errorcode-jsleakwatcher/errorcode-jsleakwatcher"},"next":{"title":"@ohos.application.testRunner (TestRunner)","permalink":"/harmonyos-docs-site/ref/system-debug-optimize-api/test-api/test-arkts/js-apis-application-testrunner/js-apis-application-testrunner"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-debug-optimize-api/test-api/test-arkts/js-apis-app-ability-abilitydelegatorregistry/js-apis-app-ability-abilitydelegatorregistry.md


const frontMatter = {
	title: '@ohos.app.ability.abilityDelegatorRegistry (AbilityDelegatorRegistry)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitydelegatorregistry',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'js-apis-app-ability-abilitydelegatorregistry'
};
const contentTitle = '@ohos.app.ability.abilityDelegatorRegistry (AbilityDelegatorRegistry)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "AbilityLifecycleState",
  "id": "abilitylifecyclestate",
  "level": 2
}, {
  "value": "abilityDelegatorRegistry.getAbilityDelegator",
  "id": "abilitydelegatorregistrygetabilitydelegator",
  "level": 2
}, {
  "value": "abilityDelegatorRegistry.getArguments",
  "id": "abilitydelegatorregistrygetarguments",
  "level": 2
}, {
  "value": "AbilityDelegator",
  "id": "abilitydelegator",
  "level": 2
}, {
  "value": "AbilityDelegatorArgs",
  "id": "abilitydelegatorargs",
  "level": 2
}, {
  "value": "AbilityMonitor",
  "id": "abilitymonitor",
  "level": 2
}, {
  "value": "ShellCmdResult",
  "id": "shellcmdresult",
  "level": 2
}, {
  "value": "AbilityStageMonitor14+",
  "id": "abilitystagemonitor14",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "ohosappabilityabilitydelegatorregistry-abilitydelegatorregistry",
        children: "@ohos.app.ability.abilityDelegatorRegistry (AbilityDelegatorRegistry)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AbilityDelegatorRegistry是自动化测试框架使用指南模块，该模块用于获取", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/test-api-interface-depend/js-apis-inner-application-abilitydelegator/js-apis-inner-application-abilitydelegator",
        children: "AbilityDelegator"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/test-api-interface-depend/js-apis-inner-application-abilitydelegatorargs/js-apis-inner-application-abilitydelegatorargs",
        children: "AbilityDelegatorArgs"
      }), "对象，其中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/test-api-interface-depend/js-apis-inner-application-abilitydelegator/js-apis-inner-application-abilitydelegator",
        children: "AbilityDelegator"
      }), "对象提供添加用于监视指定ability的生命周期状态更改的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-abilitymonitor/js-apis-inner-application-abilitymonitor#abilitymonitor-1",
        children: "AbilityMonitor"
      }), "对象的能力，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/test-api-interface-depend/js-apis-inner-application-abilitydelegatorargs/js-apis-inner-application-abilitydelegatorargs",
        children: "AbilityDelegatorArgs"
      }), "对象提供获取当前测试参数的能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(481159)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块接口仅可在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ut/arkxtest-guidelines/unittest-guidelines",
        children: "单元测试框架"
      }), "中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { abilityDelegatorRegistry } from '@kit.TestKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "abilitylifecyclestate",
      children: "AbilityLifecycleState"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ability生命周期状态，该类型为枚举，可配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/test-api-interface-depend/js-apis-inner-application-abilitydelegator/js-apis-inner-application-abilitydelegator",
        children: "AbilityDelegator"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/test-api-interface-depend/js-apis-inner-application-abilitydelegator/js-apis-inner-application-abilitydelegator#getabilitystate9",
        children: "getAbilityState(ability)"
      }), "方法返回不同ability生命周期。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), " ：以下各项对应的系统能力均为SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNINITIALIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Ability处于无效状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Ability处于已创建状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FOREGROUND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Ability处于前台状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BACKGROUND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Ability处于后台状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DESTROY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Ability处于已销毁状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "abilitydelegatorregistrygetabilitydelegator",
      children: "abilityDelegatorRegistry.getAbilityDelegator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAbilityDelegator(): AbilityDelegator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取应用程序的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/test-api-interface-depend/js-apis-inner-application-abilitydelegator/js-apis-inner-application-abilitydelegator",
        children: "AbilityDelegator"
      }), "对象，该对象能够使用调度测试框架的相关功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/test-api/test-arkts/test-api-interface-depend/js-apis-inner-application-abilitydelegator/js-apis-inner-application-abilitydelegator",
              children: "AbilityDelegator"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/test-api/test-arkts/test-api-interface-depend/js-apis-inner-application-abilitydelegator/js-apis-inner-application-abilitydelegator",
              children: "AbilityDelegator"
            }), "对象。可以用来调度测试框架相关功能。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { abilityDelegatorRegistry } from '@kit.TestKit';\nimport { Want } from '@kit.AbilityKit';\n\nlet abilityDelegator = abilityDelegatorRegistry.getAbilityDelegator();\nlet want: Want = {\n  bundleName: 'com.example.myapplication',\n  abilityName: 'EntryAbility'\n};\n\nabilityDelegator.startAbility(want, (err) => {\n  if (err) {\n    console.error(`Failed start ability, error: ${JSON.stringify(err)}`);\n  } else {\n    console.info('Success start ability.');\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "abilitydelegatorregistrygetarguments",
      children: "abilityDelegatorRegistry.getArguments"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getArguments(): AbilityDelegatorArgs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取单元测试参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/test-api-interface-depend/js-apis-inner-application-abilitydelegatorargs/js-apis-inner-application-abilitydelegatorargs",
        children: "AbilityDelegatorArgs"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/test-api/test-arkts/test-api-interface-depend/js-apis-inner-application-abilitydelegatorargs/js-apis-inner-application-abilitydelegatorargs",
              children: "AbilityDelegatorArgs"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/test-api/test-arkts/test-api-interface-depend/js-apis-inner-application-abilitydelegatorargs/js-apis-inner-application-abilitydelegatorargs",
              children: "AbilityDelegatorArgs"
            }), "对象。可以用来获取测试参数。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { abilityDelegatorRegistry } from '@kit.TestKit';\n\nlet args = abilityDelegatorRegistry.getArguments();\nconsole.info(`getArguments bundleName: ${args.bundleName}`);\nconsole.info(`getArguments parameters: ${JSON.stringify(args.parameters)}`);\nconsole.info(`getArguments testCaseNames: ${args.testCaseNames}`);\nconsole.info(`getArguments testRunnerClassName: ${args.testRunnerClassName}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "abilitydelegator",
      children: "AbilityDelegator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type AbilityDelegator = _AbilityDelegator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["提供通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-abilitymonitor/js-apis-inner-application-abilitymonitor",
        children: "AbilityMonitor"
      }), "实例来监听和管理", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "生命周期变化的能力。例如获取UIAbility当前状态（如是否已创建/是否在前台等）、查询当前获焦的UIAbility、等待UIAbility进入某个生命周期节点（如等待UIAbility进入onForeground）、启动指定UIAbility、设置超时机制等功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/test-api/test-arkts/test-api-interface-depend/js-apis-inner-application-abilitydelegator/js-apis-inner-application-abilitydelegator",
              children: "_AbilityDelegator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AbilityDelegator模块。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "abilitydelegatorargs",
      children: "AbilityDelegatorArgs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type AbilityDelegatorArgs = _AbilityDelegatorArgs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供在应用程序执行测试用例期间，获取测试用例参数AbilityDelegatorArgs对象的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/test-api/test-arkts/test-api-interface-depend/js-apis-inner-application-abilitydelegatorargs/js-apis-inner-application-abilitydelegatorargs",
              children: "_AbilityDelegatorArgs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AbilityDelegatorArgs模块。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "abilitymonitor",
      children: "AbilityMonitor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type AbilityMonitor = _AbilityMonitor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["提供作为abilityDelegator中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/test-api-interface-depend/js-apis-inner-application-abilitydelegator/js-apis-inner-application-abilitydelegator#addabilitymonitor9",
        children: "addAbilityMonitor"
      }), "的入参来监听指定UIAbility的生命周期变化。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-abilitymonitor/js-apis-inner-application-abilitymonitor",
              children: "_AbilityMonitor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AbilityMonitor模块。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "shellcmdresult",
      children: "ShellCmdResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type ShellCmdResult = _ShellCmdResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供Shell命令执行结果的能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-debug-optimize-api/test-api/test-arkts/test-api-interface-depend/js-apis-inner-application-shellcmdresult/js-apis-inner-application-shellcmdresult",
              children: "_ShellCmdResult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ShellCmdResult模块。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "abilitystagemonitor14",
      children: "AbilityStageMonitor14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type AbilityStageMonitor = _AbilityStageMonitor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["提供监听指定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-abilitystage/js-apis-app-ability-abilitystage",
        children: "AbilityStage"
      }), "对象的能力。开发者可以将AbilityStageMonitor作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-debug-optimize-api/test-api/test-arkts/test-api-interface-depend/js-apis-inner-application-abilitydelegator/js-apis-inner-application-abilitydelegator#waitabilitystagemonitor9",
        children: "abilityDelegator.waitAbilityStageMonitor"
      }), "的入参来注册监听。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-abilitystagemonitor/js-apis-inner-application-abilitystagemonitor",
              children: "_AbilityStageMonitor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AbilityStageMonitor模块。"
          })]
        })
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
481159(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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