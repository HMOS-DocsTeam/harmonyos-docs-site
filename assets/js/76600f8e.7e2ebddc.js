"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["838618"], {
894549(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_stage_model_application_components_uiability_uiability_intra_device_interaction_uiability_intra_device_interaction_md_766_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-stage-model-application-components-uiability-uiability-intra-device-interaction-uiability-intra-device-interaction-md-766.json
var site_docs_ability_kit_stage_model_development_stage_model_application_components_uiability_uiability_intra_device_interaction_uiability_intra_device_interaction_md_766_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-intra-device-interaction/uiability-intra-device-interaction","title":"启动应用内的UIAbility组件","description":"UIAbility是系统调度的最小单元。在设备内的功能模块之间跳转时，会涉及到启动特定的UIAbility，包括应用内的其他UIAbility、或者其他应用的UIAbility（例如启动三方支付UIAbility）。","source":"@site/docs/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-intra-device-interaction/uiability-intra-device-interaction.md","sourceDirName":"ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-intra-device-interaction","slug":"/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-intra-device-interaction/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-intra-device-interaction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"启动应用内的UIAbility组件","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-intra-device-interaction","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"UIAbility组件与UI的数据同步","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-data-sync-with-ui/"},"next":{"title":"通过Call调用实现多端协同","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-cross-device-interaction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-intra-device-interaction/uiability-intra-device-interaction.md


const frontMatter = {
	title: '启动应用内的UIAbility组件',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-intra-device-interaction',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '启动应用内的UIAbility组件';

const assets = {

};



const toc = [{
  "value": "启动应用内的UIAbility",
  "id": "启动应用内的uiability",
  "level": 2
}, {
  "value": "启动应用内的UIAbility并获取返回结果",
  "id": "启动应用内的uiability并获取返回结果",
  "level": 2
}, {
  "value": "启动UIAbility的指定页面",
  "id": "启动uiability的指定页面",
  "level": 2
}, {
  "value": "概述",
  "id": "概述",
  "level": 3
}, {
  "value": "调用方UIAbility指定启动页面",
  "id": "调用方uiability指定启动页面",
  "level": 3
}, {
  "value": "目标UIAbility冷启动",
  "id": "目标uiability冷启动",
  "level": 3
}, {
  "value": "目标UIAbility热启动",
  "id": "目标uiability热启动",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "启动应用内的uiability组件",
        children: "启动应用内的UIAbility组件"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "是系统调度的最小单元。在设备内的功能模块之间跳转时，会涉及到启动特定的UIAbility，包括应用内的其他UIAbility、或者其他应用的UIAbility（例如启动三方支付UIAbility）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文主要介绍启动应用内的UIAbility组件的方式。应用间的组件跳转详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/inter-app-redirection/link-between-apps-overview",
        children: "应用间跳转"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%90%AF%E5%8A%A8%E5%BA%94%E7%94%A8%E5%86%85%E7%9A%84uiability",
          children: "启动应用内的UIAbility"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%90%AF%E5%8A%A8%E5%BA%94%E7%94%A8%E5%86%85%E7%9A%84uiability%E5%B9%B6%E8%8E%B7%E5%8F%96%E8%BF%94%E5%9B%9E%E7%BB%93%E6%9E%9C",
          children: "启动应用内的UIAbility并获取返回结果"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%90%AF%E5%8A%A8uiability%E7%9A%84%E6%8C%87%E5%AE%9A%E9%A1%B5%E9%9D%A2",
          children: "启动UIAbility的指定页面"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启动应用内的uiability",
      children: "启动应用内的UIAbility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当一个应用内包含多个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "时，存在应用内启动UIAbility的场景。例如在支付应用中从入口UIAbility启动收付款UIAbility。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "假设应用中有两个UIAbility：EntryAbility和FuncAbility（可以在同一个Module中，也可以在不同的Module中），需要从EntryAbility的页面中启动FuncAbility。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在EntryAbility中，通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability",
            children: "startAbility()"
          }), "方法启动UIAbility，", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
            children: "want"
          }), "为UIAbility实例启动的入口参数，其中bundleName为待启动应用的Bundle名称，abilityName为待启动的Ability名称，moduleName在待启动的UIAbility属于不同的Module时添加，parameters为自定义信息参数。示例中的context的获取方式请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
            children: "获取UIAbility的上下文信息"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TAG: string = '[MainPage]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\n@Entry\n@Component\nstruct MainPage {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Column() {\n      List({ initialIndex: 0, space: 8 }) {\n\n        ListItem() {\n          Row() {\n            // ...\n          }\n          .onClick(() => {\n            // context为Ability对象的成员，在非Ability对象内部调用需要\n            // 将Context对象传递过去\n            let wantInfo: Want = {\n              deviceId: '', // deviceId为空表示本设备\n              bundleName: 'com.samples.uiabilityinteraction',\n              moduleName: 'entry', // moduleName非必选\n              abilityName: 'FuncAbilityA',\n              parameters: {\n                // 自定义信息\n                // 请将$r('app.string.main_page_return_info')替换为实际资源文件，在本示例中该资源文件的value值为\"来自EntryAbility MainPage页面\"\n                info: $r('app.string.main_page_return_info')\n              },\n            };\n            // context为调用方UIAbility的UIAbilityContext\n            this.context.startAbility(wantInfo).then(() => {\n              hilog.info(DOMAIN_NUMBER, TAG, 'startAbility success.');\n            }).catch((error: BusinessError) => {\n              hilog.error(DOMAIN_NUMBER, TAG, 'startAbility failed.');\n            });\n          })\n        }\n\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在FuncAbility的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
            children: "onCreate()"
          }), "或者", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onnewwant",
            children: "onNewWant()"
          }), "生命周期回调文件中接收EntryAbility传递过来的参数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n// ···\n\nexport default class FuncAbilityA extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    // 接收调用方UIAbility传过来的参数\n    let funcAbilityWant = want;\n    let info = funcAbilityWant?.parameters?.info;\n    // ···\n  }\n\n// ···\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(505727)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在被拉起的FuncAbility中，可以通过获取传递过来的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
            children: "want"
          }), "参数的parameters来获取拉起方", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
            children: "UIAbility"
          }), "的PID、Bundle Name等信息。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在FuncAbility业务完成之后，如需要停止当前", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
            children: "UIAbility"
          }), "实例，在FuncAbility中通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#terminateself",
            children: "terminateSelf()"
          }), "方法实现。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[FuncAbilityAPage]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\n@Entry\n@Component\nstruct FuncAbilityAPage {\n\n  build() {\n    Column() {\n      // 请将$r('app.string.Stop_AbilityA')替换为实际资源文件，在本示例中该资源文件的value值为\"StopFuncAbilityA\"\n      Button($r('app.string.Stop_AbilityA'))\n        .onClick(() => {\n          let context = this.getUIContext().getHostContext() as common.UIAbilityContext; // UIAbilityContext\n          // context为需要停止的UIAbility实例的AbilityContext\n          context.terminateSelf((err) => {\n            if (err.code) {\n              hilog.error(DOMAIN_NUMBER, TAG, `Failed to terminate self. Code is ${err.code}, message is ${err.message}`);\n              return;\n            }\n          });\n        })\n        // ...\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(98170)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用terminateSelf()方法停止当前UIAbility实例时，默认会保留该实例的快照（Snapshot），即在最近任务列表中仍然能查看到该实例对应的任务。如不需要保留该实例的快照，可以在其对应UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "中，将", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#abilities%E6%A0%87%E7%AD%BE",
            children: "abilities标签"
          }), "的removeMissionAfterTerminate字段配置为true。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如需要关闭应用所有的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
            children: "UIAbility"
          }), "实例，可以调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext",
            children: "ApplicationContext"
          }), "的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext#applicationcontextkillallprocesses",
            children: "killAllProcesses()"
          }), "方法实现关闭应用所有的进程。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启动应用内的uiability并获取返回结果",
      children: "启动应用内的UIAbility并获取返回结果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在一个EntryAbility启动另外一个FuncAbility时，希望在被启动的FuncAbility完成相关业务后，能将结果返回给调用方。例如在应用中将入口功能和账号登录功能分别设计为两个独立的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "，在账号登录UIAbility中完成登录操作后，需要将登录的结果返回给入口UIAbility。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在EntryAbility中，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startabilityforresult-2",
            children: "startAbilityForResult()"
          }), "接口启动FuncAbility，异步回调中的data用于接收FuncAbility停止自身后返回给EntryAbility的信息。示例中的context的获取方式请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
            children: "获取UIAbility的上下文信息"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TAG: string = '[MainPage]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\n@Entry\n@Component\nstruct MainPage {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Column() {\n      List({ initialIndex: 0, space: 8 }) {\n\n        // ...\n\n        ListItem() {\n          Row() {\n            // ...\n          }\n          .onClick(() => {\n            let context = this.getUIContext().getHostContext() as common.UIAbilityContext; // UIAbilityContext\n            const RESULT_CODE: number = 1001;\n            let want: Want = {\n              deviceId: '', // deviceId为空表示本设备\n              bundleName: 'com.samples.uiabilityinteraction',\n              moduleName: 'entry', // moduleName非必选\n              abilityName: 'FuncAbilityA',\n              parameters: {\n                // 自定义信息\n                // 请将$r('app.string.main_page_return_info')替换为实际资源文件，在本示例中该资源文件的value值为\"来自EntryAbility MainPage页面\"\n                info: $r('app.string.main_page_return_info')\n              }\n            };\n            context.startAbilityForResult(want).then((data) => {\n              if (data?.resultCode === RESULT_CODE) {\n                // 解析被调用方UIAbility返回的信息\n                let info = data.want?.parameters?.info;\n                hilog.info(DOMAIN_NUMBER, TAG, JSON.stringify(info) ?? '');\n                if (info !== null) {\n                  this.getUIContext().getPromptAction().showToast({\n                    message: JSON.stringify(info)\n                  });\n                }\n              }\n              hilog.info(DOMAIN_NUMBER, TAG, JSON.stringify(data.resultCode) ?? '');\n            }).catch((err: BusinessError) => {\n              hilog.error(DOMAIN_NUMBER, TAG, `Failed to start ability for result. Code is ${err.code}, message is ${err.message}`);\n            });\n          })\n        }\n\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在FuncAbility停止自身时，需要调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#terminateselfwithresult",
            children: "terminateSelfWithResult()"
          }), "方法，入参", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-abilityresult/js-apis-inner-ability-abilityresult",
            children: "abilityResult"
          }), "为FuncAbility需要返回给EntryAbility的信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[FuncAbilityAPage]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\n@Entry\n@Component\nstruct FuncAbilityAPage {\n\n  build() {\n    Column() {\n      // ...\n\n      List({ initialIndex: 0 }) {\n        ListItem() {\n          Row() {\n            // ...\n          }\n          .onClick(() => {\n            let context = this.getUIContext().getHostContext() as common.UIAbilityContext; // UIAbilityContext\n            const RESULT_CODE: number = 1001; // FuncAbilityA返回的结果\n            let abilityResult: common.AbilityResult = {\n              resultCode: RESULT_CODE,\n              want: {\n                bundleName: 'com.samples.uiabilityinteraction',\n                moduleName: 'entry', // moduleName非必选\n                abilityName: 'FuncAbilityA',\n                parameters: {\n                  // 请将$r('app.string.ability_return_info')替换为实际资源文件，在本示例中该资源文件的value值为\"来自FuncAbility Index页面\"\n                  info: context.resourceManager.getStringSync($r('app.string.ability_return_info').id)\n                },\n              },\n            };\n            context.terminateSelfWithResult(abilityResult, (err) => {\n              if (err.code) {\n                hilog.error(DOMAIN_NUMBER, TAG, `Failed to terminate self with result. Code is ${err.code}, message is ${err.message}`);\n                return;\n              }\n            });\n          })\n        }\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["FuncAbility停止自身后，EntryAbility通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startabilityforresult-2",
            children: "startAbilityForResult()"
          }), "方法回调接收被FuncAbility返回的信息，RESULT_CODE需要与前面的数值保持一致。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TAG: string = '[MainPage]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\n@Entry\n@Component\nstruct MainPage {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Column() {\n      List({ initialIndex: 0, space: 8 }) {\n\n        // ...\n\n        ListItem() {\n          Row() {\n            // ...\n          }\n          .onClick(() => {\n            let context = this.getUIContext().getHostContext() as common.UIAbilityContext; // UIAbilityContext\n            const RESULT_CODE: number = 1001;\n            let want: Want = {\n              deviceId: '', // deviceId为空表示本设备\n              bundleName: 'com.samples.uiabilityinteraction',\n              moduleName: 'entry', // moduleName非必选\n              abilityName: 'FuncAbilityA',\n              parameters: {\n                // 自定义信息\n                // 请将$r('app.string.main_page_return_info')替换为实际资源文件，在本示例中该资源文件的value值为\"来自EntryAbility MainPage页面\"\n                info: $r('app.string.main_page_return_info')\n              }\n            };\n            context.startAbilityForResult(want).then((data) => {\n              if (data?.resultCode === RESULT_CODE) {\n                // 解析被调用方UIAbility返回的信息\n                let info = data.want?.parameters?.info;\n                hilog.info(DOMAIN_NUMBER, TAG, JSON.stringify(info) ?? '');\n                if (info !== null) {\n                  this.getUIContext().getPromptAction().showToast({\n                    message: JSON.stringify(info)\n                  });\n                }\n              }\n              hilog.info(DOMAIN_NUMBER, TAG, JSON.stringify(data.resultCode) ?? '');\n            }).catch((err: BusinessError) => {\n              hilog.error(DOMAIN_NUMBER, TAG, `Failed to start ability for result. Code is ${err.code}, message is ${err.message}`);\n            });\n          })\n        }\n\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启动uiability的指定页面",
      children: "启动UIAbility的指定页面"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "可以对应多个页面，在不同的场景下启动该UIAbility时需要展示不同的页面，例如从一个UIAbility的页面中跳转到另外一个UIAbility时，希望启动目标UIAbility的指定页面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UIAbility的启动分为两种情况：UIAbility冷启动和UIAbility热启动。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UIAbility冷启动：指的是UIAbility实例处于完全关闭状态下被启动，这需要完整地加载和初始化UIAbility实例的代码、资源等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UIAbility热启动：指的是UIAbility实例已经启动并在前台运行过，由于某些原因切换到后台，再次启动该UIAbility实例，这种情况下可以快速恢复UIAbility实例的状态。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文主要讲解", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%9B%AE%E6%A0%87uiability%E5%86%B7%E5%90%AF%E5%8A%A8",
        children: "目标UIAbility冷启动"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%9B%AE%E6%A0%87uiability%E7%83%AD%E5%90%AF%E5%8A%A8",
        children: "目标UIAbility热启动"
      }), "两种启动指定页面的场景，以及在讲解启动指定页面之前会讲解到在调用方如何指定启动页面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调用方uiability指定启动页面",
      children: "调用方UIAbility指定启动页面"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用方", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "启动另外一个UIAbility时，通常需要跳转到指定的页面。例如FuncAbility包含两个页面（Index对应首页，Second对应功能A页面），此时需要在传入的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
        children: "want"
      }), "参数中配置指定的页面路径信息，可以通过Want中的parameters参数增加一个自定义参数传递页面跳转信息。示例中的context的获取方式请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
        children: "获取UIAbility的上下文信息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TAG: string = '[MainPage]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\n@Entry\n@Component\nstruct MainPage {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  build() {\n    Column() {\n      List({ initialIndex: 0, space: 8 }) {\n\n        // ...\n\n        ListItem() {\n          Row() {\n            // ...\n          }\n          .onClick(() => {\n            let context = this.getUIContext().getHostContext() as common.UIAbilityContext; // UIAbilityContext\n            let want: Want = {\n              deviceId: '', // deviceId为空表示本设备\n              bundleName: 'com.samples.uiabilityinteraction',\n              moduleName: 'entry', // moduleName非必选\n              abilityName: 'ColdStartAbility',\n              parameters: { // 自定义参数传递页面信息\n                router: 'funcA'\n              }\n            };\n            // context为调用方UIAbility的UIAbilityContext\n            context.startAbility(want).then(() => {\n              hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in starting ability.');\n            }).catch((err: BusinessError) => {\n              hilog.error(DOMAIN_NUMBER, TAG, `Failed to start ability. Code is ${err.code}, message is ${err.message}`);\n            });\n          })\n        }\n\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "目标uiability冷启动",
      children: "目标UIAbility冷启动"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["目标", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "冷启动时，在目标UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
        children: "onCreate()"
      }), "生命周期回调中，接收调用方传过来的参数。然后在目标UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagecreate",
        children: "onWindowStageCreate()"
      }), "生命周期回调中，解析调用方传递过来的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
        children: "want"
      }), "参数，获取到需要加载的页面信息url，传入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-windowstage/arkts-apis-window-windowstage#loadcontent9",
        children: "windowStage.loadContent()"
      }), "方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, Want, UIAbility } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window, UIContext } from '@kit.ArkUI';\n\nconst DOMAIN_NUMBER: number = 0xFF00;\nconst TAG: string = '[ColdStartAbility]';\n\nexport default class ColdStartAbility extends UIAbility {\n  private funcAbilityWant: Want | undefined = undefined;\n  private uiContext: UIContext | undefined = undefined;\n\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    // 接收调用方UIAbility传过来的参数\n    this.funcAbilityWant = want;\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // Main window is created, set main page for this ability\n    hilog.info(DOMAIN_NUMBER, TAG, '%{public}s', 'Ability onWindowStageCreate');\n    // Main window is created, set main page for this ability\n    let url = 'pages/Index';\n    if (this.funcAbilityWant?.parameters?.router && this.funcAbilityWant.parameters.router === 'funcA') {\n      url = 'pages/ColdPage';\n    }\n    windowStage.loadContent(url, (err, data) => {\n    // ···\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "目标uiability热启动",
      children: "目标UIAbility热启动"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在应用开发中，会遇到目标", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "实例之前已经启动过的场景，这时再次启动目标UIAbility时，不会重新走初始化逻辑，只会直接触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onnewwant",
        children: "onNewWant()"
      }), "生命周期方法。为了实现跳转到指定页面，需要在onNewWant()中解析参数进行处理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如短信应用和联系人应用配合使用的场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户先打开短信应用，短信应用的UIAbility实例启动，显示短信应用的主页。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户将设备回到桌面界面，短信应用进入后台运行状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户打开联系人应用，找到联系人张三。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户点击联系人张三的短信按钮，会再次启动短信应用的UIAbility实例。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["由于短信应用的UIAbility实例已经启动过了，此时会触发该UIAbility的onNewWant()回调，而不会再走", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
          children: "onCreate()"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagecreate",
          children: "onWindowStageCreate()"
        }), "等初始化逻辑。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图1 目标UIAbility热启动"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(247144)/* ["default"] */.A) + "",
        width: "709",
        height: "700"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发步骤如下所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["冷启动短信应用的UIAbility实例时，在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onwindowstagecreate",
            children: "onWindowStageCreate()"
          }), "生命周期回调中，通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getuicontext10",
            children: "getUIContext()"
          }), "接口获取UI上下文实例", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
            children: "UIContext"
          }), "对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { Want, UIAbility } from '@kit.AbilityKit';\nimport { window, UIContext } from '@kit.ArkUI';\nconst DOMAIN_NUMBER: number = 0xFF00;\nconst TAG: string = '[HotStartAbility]';\n\nexport default class HotStartAbility extends UIAbility {\n  private funcAbilityWant: Want | undefined = undefined;\n  private uiContext: UIContext | undefined = undefined;\n // ···\n \n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // Main window is created, set main page for this ability\n    hilog.info(DOMAIN_NUMBER, TAG, '%{public}s', 'Ability onWindowStageCreate');\n    let url = 'pages/Index';\n    windowStage.loadContent(url, (err, data) => {\n      if (err.code) {\n        return;\n      }\n\n      let windowClass: window.Window;\n      windowStage.getMainWindow((err, data) => {\n        if (err.code) {\n          hilog.error(DOMAIN_NUMBER, TAG, `Failed to obtain the main window. Code is ${err.code}, message is ${err.message}`);\n          return;\n        }\n        windowClass = data;\n        this.uiContext = windowClass.getUIContext();\n      });\n      hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');\n    });\n  }\n\n// ···\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在短信应用UIAbility的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onnewwant",
            children: "onNewWant()"
          }), "回调中通过AppStorage设置全局变量nameForNavi的值，并进行指定页面的跳转。此时再次启动该短信应用的UIAbility实例时，即可跳转到该短信应用的UIAbility实例的指定页面。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "导入相关模块，并在onNewWant()生命周期回调中设置全局变量nameForNavi的值。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { Want, UIAbility, AbilityConstant } from '@kit.AbilityKit';\n// ···\nconst DOMAIN_NUMBER: number = 0xFF00;\nconst TAG: string = '[HotStartAbility]';\n\nexport default class HotStartAbility extends UIAbility {\n// ···\n\n  onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    hilog.info(DOMAIN_NUMBER, TAG, '%{public}s', 'onNewWant');\n    AppStorage.setOrCreate<string>('nameForNavi', 'pageOne');\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "在Index页面显示时触发onPageShow回调，获取全局变量nameForNavi的值，并进行执行页面的跳转。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "@Entry\n@Component\nstruct Index {\n  @State message: string = 'Index';\n  pathStack: NavPathStack = new NavPathStack();\n\n  onPageShow(): void {\n    let somePage = AppStorage.get<string>('nameForNavi')\n    if (somePage) {\n      this.pathStack.pushPath({ name: somePage }, false);\n      AppStorage.delete('nameForNavi');\n    }\n  }\n\n  build() {\n    Navigation(this.pathStack) {\n      Text(this.message)\n        .id('Index')\n        // 请将$r('app.float.page_text_font_size')替换为实际资源文件，在本示例中该资源文件的value值为\"50fp\"\n        .fontSize($r('app.float.page_text_font_size'))\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n    }\n    .mode(NavigationMode.Stack)\n    .height('100%')\n    .width('100%')\n    .margin({top:250})\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "实现Navigation子页面。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "@Builder\nexport function PageOneBuilder() {\n  PageOne();\n}\n\n@Component\nexport struct PageOne {\n  @State message: string = 'PageOne';\n  pathStack: NavPathStack = new NavPathStack();\n\n  build() {\n    NavDestination() {\n      Text(this.message)\n        .id('PageOne')\n        // 请将$r('app.float.page_text_font_size')替换为实际资源文件，在本示例中该资源文件的value值为\"50fp\"\n        .fontSize($r('app.float.page_text_font_size'))\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n    }\n    .onReady((context: NavDestinationContext) => {\n      this.pathStack = context.pathStack;\n    })\n    .height('100%')\n    .width('100%')\n    .margin({top:250})\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在系统配置文件route_map.json中配置子页信息（参考", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-cross-package#%E7%B3%BB%E7%BB%9F%E8%B7%AF%E7%94%B1%E8%A1%A8",
                children: "系统路由表"
              }), "）。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// route_map.json\n{\n  \"routerMap\": [\n    {\n      \"name\": \"pageOne\",\n      \"pageSourceFile\": \"src/main/ets/pages/PageOne.ets\",\n      \"buildFunction\": \"PageOneBuilder\",\n      \"data\": {\n        \"description\": \"this is pageOne\"\n      }\n    }\n  ]\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在", (0,jsx_runtime.jsx)(_components.a, {
                href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#routermap%E6%A0%87%E7%AD%BE",
                children: "module.json5配置文件"
              }), "中配置routerMap路由映射。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"module\": {\n    // ···\n    \"routerMap\": \"$profile:router_map\",\n    // ···\n  }\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(178002)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当被调用方", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-launch-type",
        children: "UIAbility组件启动模式"
      }), "设置为multiton启动模式时，每次启动都会创建一个新的实例，那么onNewWant()回调就不会被用到。"]
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
505727(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
247144(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797842-e052d9728581e18017be3e35acd471b2.png");

},
98170(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
178002(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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