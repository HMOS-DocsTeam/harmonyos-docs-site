"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["465715"], {
226012(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ability_api_ability_arkts_stage_model_js_apis_app_ability_sendablecontextmanager_js_apis_app_ability_sendablecontextmanager_md_57c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ability-api-ability-arkts-stage-model-js-apis-app-ability-sendablecontextmanager-js-apis-app-ability-sendablecontextmanager-md-57c.json
var site_docs_ref_ability_api_ability_arkts_stage_model_js_apis_app_ability_sendablecontextmanager_js_apis_app_ability_sendablecontextmanager_md_57c_namespaceObject = JSON.parse('{"id":"ability-api/ability-arkts/stage-model/js-apis-app-ability-sendablecontextmanager/js-apis-app-ability-sendablecontextmanager","title":"@ohos.app.ability.sendableContextManager (sendable上下文管理)","description":"sendableContextManager模块提供Context与SendableContext相互转换的能力。","source":"@site/docs-ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-sendablecontextmanager/js-apis-app-ability-sendablecontextmanager.md","sourceDirName":"ability-api/ability-arkts/stage-model/js-apis-app-ability-sendablecontextmanager","slug":"/ability-api/ability-arkts/stage-model/js-apis-app-ability-sendablecontextmanager/js-apis-app-ability-sendablecontextmanager","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-sendablecontextmanager/js-apis-app-ability-sendablecontextmanager","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":37,"frontMatter":{"title":"@ohos.app.ability.sendableContextManager (sendable上下文管理)","sidebar_position":37,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-sendablecontextmanager","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-app-ability-sendablecontextmanager"},"sidebar":"ref","previous":{"title":"@ohos.app.ability.UIExtensionContentSession (UIExtensionAbility界面操作类)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiextensioncontentsession/js-apis-app-ability-uiextensioncontentsession"},"next":{"title":"@ohos.app.appstartup.StartupConfig (启动框架配置信息)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/stage-model/js-apis-app-appstartup-startupconfig/js-apis-app-appstartup-startupconfig"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-sendablecontextmanager/js-apis-app-ability-sendablecontextmanager.md


const frontMatter = {
	title: '@ohos.app.ability.sendableContextManager (sendable上下文管理)',
	sidebar_position: 37,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-sendablecontextmanager',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-app-ability-sendablecontextmanager'
};
const contentTitle = '@ohos.app.ability.sendableContextManager (sendable上下文管理)';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "SendableContext",
  "id": "sendablecontext",
  "level": 2
}, {
  "value": "sendableContextManager.convertFromContext",
  "id": "sendablecontextmanagerconvertfromcontext",
  "level": 2
}, {
  "value": "sendableContextManager.convertToContext",
  "id": "sendablecontextmanagerconverttocontext",
  "level": 2
}, {
  "value": "sendableContextManager.convertToApplicationContext",
  "id": "sendablecontextmanagerconverttoapplicationcontext",
  "level": 2
}, {
  "value": "sendableContextManager.convertToAbilityStageContext",
  "id": "sendablecontextmanagerconverttoabilitystagecontext",
  "level": 2
}, {
  "value": "sendableContextManager.convertToUIAbilityContext",
  "id": "sendablecontextmanagerconverttouiabilitycontext",
  "level": 2
}, {
  "value": "sendableContextManager.setEventHubMultithreadingEnabled20+",
  "id": "sendablecontextmanagerseteventhubmultithreadingenabled20",
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
        id: "ohosappabilitysendablecontextmanager-sendable上下文管理",
        children: "@ohos.app.ability.sendableContextManager (sendable上下文管理)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["sendableContextManager模块提供Context与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-sendablecontext/js-apis-inner-application-sendablecontext",
        children: "SendableContext"
      }), "相互转换的能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(668641)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 12 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块接口仅可在Stage模型下使用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块主要用于ArkTS并发实例间（包括主线程、TaskPool&Worker工作线程）的数据传递。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，从主线程向子线程（如TaskPool或Worker工作线程）传递Sendable数据（符合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable#sendable%E5%8D%8F%E8%AE%AE",
        children: "Sendable协议"
      }), "的数据）时，需要通过Context与SendableContext之间的相互转换来实现。过程如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "主线程向子线程传递Sendable数据时，需要将Context转换为SendableContext。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "子线程使用Sendable数据时，需要将SendableContext转换为Context。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这里的Context与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-application/js-apis-app-ability-application#applicationcreatemodulecontext",
        children: "createModuleContext"
      }), "方法创建的Context不同，具体差异如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["与SendableContext相互转换的Context：ArkTS并发实例持有的应用侧Context是不同的实例，底层对应同一个Context对象。当一个实例中Context属性和方法被修改时，相关实例中的Context属性和方法将会同步修改。其中，Context实例中的eventHub属性比较特殊，不同实例中的eventHub是独立的对象，不支持跨ArkTS实例使用。如果需要使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-eventhub/js-apis-inner-application-eventhub",
          children: "EventHub"
        }), "跨实例传递数据，可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#sendablecontextmanagerseteventhubmultithreadingenabled20",
          children: "setEventHubMultithreadingEnabled"
        }), "启用跨线程数据传递功能。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-application/js-apis-app-ability-application#applicationcreatemodulecontext",
          children: "createModuleContext"
        }), "创建的Context：ArkTS并发实例持有的应用侧Context是不同的实例，底层对应不同的Context对象。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["“Context转换为SendableContext”和“SendableContext转换为Context”两个环节中的Context类型必须保持一致。例如，主线程使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablecontextmanagerconvertfromcontext",
        children: "convertFromContext"
      }), "将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
        children: "UIAbilityContext"
      }), "转换为SendableContext，子线程收到该SendableContext之后，需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#sendablecontextmanagerconverttouiabilitycontext",
        children: "convertToUIAbilityContext"
      }), "将SendableContext转换为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
        children: "UIAbilityContext"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["目前支持转换的Context包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
        children: "Context"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext",
        children: "ApplicationContext"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-abilitystagecontext/js-apis-inner-application-abilitystagecontext",
        children: "AbilityStageContext"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
        children: "UIAbilityContext"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { sendableContextManager } from '@kit.AbilityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sendablecontext",
      children: "SendableContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type SendableContext = _SendableContext"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sendable上下文，符合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable#sendable%E5%8D%8F%E8%AE%AE",
        children: "Sendable协议"
      }), "，继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-lang/js-apis-arkts-lang#langisendable",
        children: "lang.ISendable"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
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
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-sendablecontext/js-apis-inner-application-sendablecontext",
              children: "_SendableContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Sendable上下文，可以与Context对象相互转换，用于ArkTS并发实例间（包括主线程、TaskPool&Worker工作线程）的数据传递。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sendablecontextmanagerconvertfromcontext",
      children: "sendableContextManager.convertFromContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "convertFromContext(context: common.Context): SendableContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将Context转换为SendableContext对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Context对象。支持Context基类，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext",
              children: "ApplicationContext"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-abilitystagecontext/js-apis-inner-application-abilitystagecontext",
              children: "AbilityStageContext"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "UIAbilityContext"
            }), "子类。"]
          })]
        })
      })]
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
            children: "SendableContext"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-sendablecontext/js-apis-inner-application-sendablecontext",
              children: "SendableContext"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed."
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
        children: "import { AbilityConstant, UIAbility, Want, sendableContextManager } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { worker } from '@kit.ArkTS';\n\n@Sendable\nexport class SendableObject {\n  constructor(sendableContext: sendableContextManager.SendableContext) {\n    this.sendableContext = sendableContext;\n  }\n\n  sendableContext: sendableContextManager.SendableContext;\n  // other sendable object\n}\n\nexport default class EntryAbility extends UIAbility {\n  worker: worker.ThreadWorker = new worker.ThreadWorker('entry/ets/workers/Worker.ets');\n\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');\n\n    // convert and post\n    try {\n      let sendableContext: sendableContextManager.SendableContext =\n        sendableContextManager.convertFromContext(this.context);\n      let object: SendableObject = new SendableObject(sendableContext);\n      hilog.info(0x0000, 'testTag', '%{public}s', 'Ability post message');\n      this.worker.postMessageWithSharedSendable(object);\n    } catch (error) {\n      hilog.error(0x0000, 'testTag', `convertFromContext failed, error code: ${error.code}, error msg: ${error.message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sendablecontextmanagerconverttocontext",
      children: "sendableContextManager.convertToContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "convertToContext(sendableContext: SendableContext): common.Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将SendableContext对象转换为Context。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sendableContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-sendablecontext/js-apis-inner-application-sendablecontext",
              children: "SendableContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SendableContext对象。"
          })]
        })
      })]
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
            children: "common.Context"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主线程传递Context："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility, Want, common, sendableContextManager } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { worker } from '@kit.ArkTS';\n\n@Sendable\nexport class SendableObject {\n  constructor(sendableContext: sendableContextManager.SendableContext, contextName: string) {\n    this.sendableContext = sendableContext;\n    this.contextName = contextName;\n  }\n\n  sendableContext: sendableContextManager.SendableContext;\n  contextName: string;\n}\n\nexport default class EntryAbility extends UIAbility {\n  worker: worker.ThreadWorker = new worker.ThreadWorker('entry/ets/workers/Worker.ets');\n\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');\n\n    // convert and post\n    try {\n      let context: common.Context = this.context as common.Context;\n      let sendableContext: sendableContextManager.SendableContext = sendableContextManager.convertFromContext(context);\n      let object: SendableObject = new SendableObject(sendableContext, 'BaseContext');\n      hilog.info(0x0000, 'testTag', '%{public}s', 'Ability post message');\n      this.worker.postMessageWithSharedSendable(object);\n    } catch (error) {\n      hilog.error(\n        0x0000, 'testTag', `convertFromContext failed, error code: ${error.code}, error msg: ${error.message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Worker线程接收Context："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\nimport { common, sendableContextManager } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Sendable\nexport class SendableObject {\n  constructor(sendableContext: sendableContextManager.SendableContext, contextName: string) {\n    this.sendableContext = sendableContext;\n    this.contextName = contextName;\n  }\n\n  sendableContext: sendableContextManager.SendableContext;\n  contextName: string;\n}\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\nworkerPort.onmessage = (e: MessageEvents) => {\n  let object: SendableObject = e.data;\n  let sendableContext: sendableContextManager.SendableContext = object.sendableContext;\n  if (object.contextName == 'BaseContext') {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'convert to context.');\n    try {\n      let context: common.Context = sendableContextManager.convertToContext(sendableContext);\n      // 获取context后获取沙箱路径\n      hilog.info(0x0000, 'testTag', 'worker context.databaseDir: %{public}s', context.databaseDir);\n    } catch (error) {\n      hilog.error(\n        0x0000, 'testTag', `convertToContext failed, error code: ${error.code}, error msg: ${error.message}`);\n    }\n  }\n}\n\nworkerPort.onmessageerror = (e: MessageEvents) => {\n  hilog.info(0x0000, 'testTag', '%{public}s', 'onmessageerror');\n}\n\nworkerPort.onerror = (e: ErrorEvent) => {\n  hilog.info(0x0000, 'testTag', '%{public}s', 'onerror');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sendablecontextmanagerconverttoapplicationcontext",
      children: "sendableContextManager.convertToApplicationContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "convertToApplicationContext(sendableContext: SendableContext): common.ApplicationContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将SendableContext对象转换为ApplicationContext。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sendableContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-sendablecontext/js-apis-inner-application-sendablecontext",
              children: "SendableContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SendableContext对象。"
          })]
        })
      })]
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
            children: "common.ApplicationContext"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-applicationcontext/js-apis-inner-application-applicationcontext",
              children: "ApplicationContext"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主线程传递Context："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility, Want, common, sendableContextManager } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { worker } from '@kit.ArkTS';\n\n@Sendable\nexport class SendableObject {\n  constructor(sendableContext: sendableContextManager.SendableContext, contextName: string) {\n    this.sendableContext = sendableContext;\n    this.contextName = contextName;\n  }\n\n  sendableContext: sendableContextManager.SendableContext;\n  contextName: string;\n}\n\nexport default class EntryAbility extends UIAbility {\n  worker: worker.ThreadWorker = new worker.ThreadWorker('entry/ets/workers/Worker.ets');\n\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');\n\n    // convert and post\n    try {\n      let context: common.Context = this.context as common.Context;\n      let applicationContext = context.getApplicationContext();\n      let sendableContext: sendableContextManager.SendableContext =\n        sendableContextManager.convertFromContext(applicationContext);\n      let object: SendableObject = new SendableObject(sendableContext, 'ApplicationContext');\n      hilog.info(0x0000, 'testTag', '%{public}s', 'Ability post message');\n      this.worker.postMessageWithSharedSendable(object);\n    } catch (error) {\n      hilog.error(\n        0x0000, 'testTag', `convertFromContext failed, error code: ${error.code}, error msg: ${error.message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Worker线程接收Context："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\nimport { common, sendableContextManager } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Sendable\nexport class SendableObject {\n  constructor(sendableContext: sendableContextManager.SendableContext, contextName: string) {\n    this.sendableContext = sendableContext;\n    this.contextName = contextName;\n  }\n\n  sendableContext: sendableContextManager.SendableContext;\n  contextName: string;\n}\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\nworkerPort.onmessage = (e: MessageEvents) => {\n  let object: SendableObject = e.data;\n  let sendableContext: sendableContextManager.SendableContext = object.sendableContext;\n  if (object.contextName == 'ApplicationContext') {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'convert to application context.');\n    try {\n      let context: common.ApplicationContext = sendableContextManager.convertToApplicationContext(sendableContext);\n      // 获取context后获取沙箱路径\n      hilog.info(0x0000, 'testTag', 'worker context.databaseDir: %{public}s', context.databaseDir);\n    } catch (error) {\n      hilog.error(0x0000,\n        'testTag', `convertToApplicationContext failed, error code: ${error.code}, error msg: ${error.message}`);\n    }\n  }\n}\n\nworkerPort.onmessageerror = (e: MessageEvents) => {\n  hilog.info(0x0000, 'testTag', '%{public}s', 'onmessageerror');\n}\n\nworkerPort.onerror = (e: ErrorEvent) => {\n  hilog.info(0x0000, 'testTag', '%{public}s', 'onerror');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sendablecontextmanagerconverttoabilitystagecontext",
      children: "sendableContextManager.convertToAbilityStageContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "convertToAbilityStageContext(sendableContext: SendableContext): common.AbilityStageContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将SendableContext对象转换为AbilityStageContext。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sendableContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-sendablecontext/js-apis-inner-application-sendablecontext",
              children: "SendableContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SendableContext对象。"
          })]
        })
      })]
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
            children: "common.AbilityStageContext"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-abilitystagecontext/js-apis-inner-application-abilitystagecontext",
              children: "AbilityStageContext"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主线程传递Context："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility, sendableContextManager } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { worker } from '@kit.ArkTS';\n\n@Sendable\nexport class SendableObject {\n  constructor(sendableContext: sendableContextManager.SendableContext, contextName: string) {\n    this.sendableContext = sendableContext;\n    this.contextName = contextName;\n  }\n\n  sendableContext: sendableContextManager.SendableContext;\n  contextName: string;\n}\n\nexport default class EntryAbility extends UIAbility {\n  worker: worker.ThreadWorker = new worker.ThreadWorker('entry/ets/workers/Worker.ets');\n\n  onCreate(): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'AbilityStage onCreate');\n\n    // convert and post\n    try {\n      let sendableContext: sendableContextManager.SendableContext =\n        sendableContextManager.convertFromContext(this.context);\n      let object: SendableObject = new SendableObject(sendableContext, 'AbilityStageContext');\n      hilog.info(0x0000, 'testTag', '%{public}s', 'AbilityStage post message');\n      this.worker.postMessageWithSharedSendable(object);\n    } catch (error) {\n      hilog.error(\n        0x0000, 'testTag', `convertFromContext failed, error code: ${error.code}, error msg: ${error.message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Worker线程接收Context："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\nimport { common, sendableContextManager } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Sendable\nexport class SendableObject {\n  constructor(sendableContext: sendableContextManager.SendableContext, contextName: string) {\n    this.sendableContext = sendableContext;\n    this.contextName = contextName;\n  }\n\n  sendableContext: sendableContextManager.SendableContext;\n  contextName: string;\n}\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\nworkerPort.onmessage = (e: MessageEvents) => {\n  let object: SendableObject = e.data;\n  let sendableContext: sendableContextManager.SendableContext = object.sendableContext;\n  if (object.contextName == 'AbilityStageContext') {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'convert to abilitystage context.');\n    try {\n      let context: common.AbilityStageContext = sendableContextManager.convertToAbilityStageContext(sendableContext);\n      // 获取context后获取沙箱路径\n      hilog.info(0x0000, 'testTag', 'worker context.databaseDir: %{public}s', context.databaseDir);\n    } catch (error) {\n      hilog.error(0x0000,\n        'testTag', `convertToAbilityStageContext failed, error code: ${error.code}, error msg: ${error.message}`);\n    }\n  }\n}\n\nworkerPort.onmessageerror = (e: MessageEvents) => {\n  hilog.info(0x0000, 'testTag', '%{public}s', 'onmessageerror');\n}\n\nworkerPort.onerror = (e: ErrorEvent) => {\n  hilog.info(0x0000, 'testTag', '%{public}s', 'onerror');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sendablecontextmanagerconverttouiabilitycontext",
      children: "sendableContextManager.convertToUIAbilityContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "convertToUIAbilityContext(sendableContext: SendableContext): common.UIAbilityContext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将SendableContext对象转换为UIAbilityContext。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sendableContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-sendablecontext/js-apis-inner-application-sendablecontext",
              children: "SendableContext"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SendableContext对象。"
          })]
        })
      })]
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
            children: "common.UIAbilityContext"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "UIAbilityContext"
            }), "对象。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If the input parameter invalid. Possible causes: 1.Incorrect parameter types; 2.Parameter verification failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主线程传递Context："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AbilityConstant, UIAbility, Want, common, sendableContextManager } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { worker } from '@kit.ArkTS';\n\n@Sendable\nexport class SendableObject {\n  constructor(sendableContext: sendableContextManager.SendableContext, contextName: string) {\n    this.sendableContext = sendableContext;\n    this.contextName = contextName;\n  }\n\n  sendableContext: sendableContextManager.SendableContext;\n  contextName: string;\n}\n\nexport default class EntryAbility extends UIAbility {\n  worker: worker.ThreadWorker = new worker.ThreadWorker('entry/ets/workers/Worker.ets');\n\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');\n\n    // convert and post\n    try {\n      let sendableContext: sendableContextManager.SendableContext =\n        sendableContextManager.convertFromContext(this.context);\n      let object: SendableObject = new SendableObject(sendableContext, 'EntryAbilityContext');\n      hilog.info(0x0000, 'testTag', '%{public}s', 'Ability post message');\n      this.worker.postMessageWithSharedSendable(object);\n    } catch (error) {\n      hilog.error(\n        0x0000, 'testTag', `convertFromContext failed, error code: ${error.code}, error msg: ${error.message}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Worker线程接收Context："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\nimport { common, sendableContextManager } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Sendable\nexport class SendableObject {\n  constructor(sendableContext: sendableContextManager.SendableContext, contextName: string) {\n    this.sendableContext = sendableContext;\n    this.contextName = contextName;\n  }\n\n  sendableContext: sendableContextManager.SendableContext;\n  contextName: string;\n}\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\nworkerPort.onmessage = (e: MessageEvents) => {\n  let object: SendableObject = e.data;\n  let sendableContext: sendableContextManager.SendableContext = object.sendableContext;\n  if (object.contextName == 'EntryAbilityContext') {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'convert to UIAbility context.');\n    try {\n      let context: common.UIAbilityContext = sendableContextManager.convertToUIAbilityContext(sendableContext);\n      // 获取context后获取沙箱路径\n      hilog.info(0x0000, 'testTag', 'worker context.databaseDir: %{public}s', context.databaseDir);\n    } catch (error) {\n      hilog.error(0x0000,\n        'testTag', `convertToUIAbilityContext failed, error code: ${error.code}, error msg: ${error.message}`);\n    }\n  }\n}\n\nworkerPort.onmessageerror = (e: MessageEvents) => {\n  hilog.info(0x0000, 'testTag', '%{public}s', 'onmessageerror');\n}\n\nworkerPort.onerror = (e: ErrorEvent) => {\n  hilog.info(0x0000, 'testTag', '%{public}s', 'onerror');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sendablecontextmanagerseteventhubmultithreadingenabled20",
      children: "sendableContextManager.setEventHubMultithreadingEnabled20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setEventHubMultithreadingEnabled(context: common.Context, enabled: boolean): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
        children: "Context"
      }), "中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-eventhub/js-apis-inner-application-eventhub",
        children: "EventHub"
      }), "是否启用跨线程通信能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(521854)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当多个Context进行通信时，需要调用该接口设置每个Context都支持EventHub跨线程数据传递功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 20开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Context对象。其中，Eventhub支持传递的序列化数据类型参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkts-api/arkts-arkts/js-apis-taskpool/js-apis-taskpool#%E5%BA%8F%E5%88%97%E5%8C%96%E6%94%AF%E6%8C%81%E7%B1%BB%E5%9E%8B",
              children: "序列化支持的类型"
            }), "，数据大小不超过16MB。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示是否启用Context的EventHub跨线程通信能力。  - true：表示启用跨线程通信能力，数据将通过引用的方式传递。  - false：表示禁用跨线程通信能力，数据将通过序列化的方式传递，即发送端线程与接收端线程的数据相互独立。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["主线程启用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
        children: "Context"
      }), "中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-eventhub/js-apis-inner-application-eventhub",
        children: "EventHub"
      }), "的跨线程通信能力，并将Context转换为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-sendablecontext/js-apis-inner-application-sendablecontext",
        children: "SendableContext"
      }), "后发送到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker",
        children: "Worker"
      }), "线程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common, sendableContextManager } from '@kit.AbilityKit';\nimport { worker } from '@kit.ArkTS';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n@Sendable\nexport class SendableObject {\n  constructor(sendableContext: sendableContextManager.SendableContext, contextName: string) {\n    this.sendableContext = sendableContext;\n    this.contextName = contextName;\n  }\n\n  sendableContext: sendableContextManager.SendableContext;\n  contextName: string;\n}\n\n@Entry\n@Component\nstruct Index {\n  @State context: common.Context | undefined = this.getUIContext().getHostContext();\n  worker1: worker.ThreadWorker = new worker.ThreadWorker('entry/ets/workers/Worker.ets');\n\n  aboutToAppear(): void {\n    let context: common.Context = this.context as common.Context;\n    context.eventHub.on('event1', this.eventFunc);\n    context.eventHub.emit('event1', 'xingming', 22);\n  }\n\n  eventFunc(name: string, age: number) {\n    hilog.info(DOMAIN, 'testTag', 'name %{public}s age %{public}d', name, age);\n  }\n\n  build() {\n    Column() {\n      Row() {\n        Button('thread 1')\n          .size({ width: 100, height: 100 })\n          .onClick(() => {\n            if (this.context == undefined) {\n              return;\n            }\n            sendableContextManager.setEventHubMultithreadingEnabled(this.context, true);\n            let sendableContext: sendableContextManager.SendableContext =\n              sendableContextManager.convertFromContext(this.context);\n            let object: SendableObject = new SendableObject(sendableContext, 'BaseContext');\n            this.worker1.postMessageWithSharedSendable(object);\n          })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-worker/js-apis-worker",
        children: "Worker"
      }), "线程接收到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-sendablecontext/js-apis-inner-application-sendablecontext",
        children: "SendableContext"
      }), "后，将其转换为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
        children: "Context"
      }), "。然后，在Worker线程内，启用Context中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-eventhub/js-apis-inner-application-eventhub",
        children: "EventHub"
      }), "的跨线程通信能力，并通过该功能向主线程发送消息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ErrorEvent, MessageEvents, ThreadWorkerGlobalScope, worker } from '@kit.ArkTS';\nimport { common, sendableContextManager } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n@Sendable\nexport class SendableObject {\n  constructor(sendableContext: sendableContextManager.SendableContext, contextName: string) {\n    this.sendableContext = sendableContext;\n    this.contextName = contextName;\n  }\n\n  sendableContext: sendableContextManager.SendableContext;\n  contextName: string;\n}\n\nconst workerPort: ThreadWorkerGlobalScope = worker.workerPort;\n\nworkerPort.onmessage = (e: MessageEvents) => {\n  let object: SendableObject = e.data;\n  let sendableContext: sendableContextManager.SendableContext = object.sendableContext;\n  if (object.contextName == 'BaseContext') {\n    let context: common.Context = sendableContextManager.convertToContext(sendableContext);\n    sendableContextManager.setEventHubMultithreadingEnabled(context, true);\n    context.eventHub.emit('event1', 'xingming', 40);\n  }\n};\n\nworkerPort.onmessageerror = (e: MessageEvents) => {\n  hilog.error(DOMAIN, 'testTag', '%{public}s', 'onmessageerror');\n};\n\nworkerPort.onerror = (e: ErrorEvent) => {\n  hilog.error(DOMAIN, 'testTag', '%{public}s', 'onerror');\n};\n"
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
668641(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
521854(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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