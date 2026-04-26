"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["626437"], {
952947(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_stage_model_application_components_extensionability_overview_app_service_extension_ability_app_service_extension_ability_md_38f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-stage-model-application-components-extensionability-overview-app-service-extension-ability-app-service-extension-ability-md-38f.json
var site_docs_ability_kit_stage_model_development_stage_model_application_components_extensionability_overview_app_service_extension_ability_app_service_extension_ability_md_38f_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/app-service-extension-ability/app-service-extension-ability","title":"使用AppServiceExtensionAbility组件实现后台服务","description":"概述","source":"@site/docs/ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/app-service-extension-ability/app-service-extension-ability.md","sourceDirName":"ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/app-service-extension-ability","slug":"/ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/app-service-extension-ability/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/app-service-extension-ability/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用AppServiceExtensionAbility组件实现后台服务","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-service-extension-ability","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"EmbeddedUIExtensionAbility","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/embeddeduiextensionability/"},"next":{"title":"AbilityStage组件管理器","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/abilitystage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/stage-model-application-components/extensionability-overview/app-service-extension-ability/app-service-extension-ability.md


const frontMatter = {
	title: '使用AppServiceExtensionAbility组件实现后台服务',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-service-extension-ability',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用AppServiceExtensionAbility组件实现后台服务';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "设备限制",
  "id": "设备限制",
  "level": 3
}, {
  "value": "规格限制",
  "id": "规格限制",
  "level": 3
}, {
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}, {
  "value": "实现一个后台服务",
  "id": "实现一个后台服务",
  "level": 2
}, {
  "value": "启动一个后台服务",
  "id": "启动一个后台服务",
  "level": 2
}, {
  "value": "连接一个后台服务",
  "id": "连接一个后台服务",
  "level": 2
}, {
  "value": "客户端连接服务端",
  "id": "客户端连接服务端",
  "level": 3
}, {
  "value": "客户端与服务端通信",
  "id": "客户端与服务端通信",
  "level": 3
}, {
  "value": "服务端对客户端身份校验",
  "id": "服务端对客户端身份校验",
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
        id: "使用appserviceextensionability组件实现后台服务",
        children: "使用AppServiceExtensionAbility组件实现后台服务"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，支持开发者使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-appserviceextensionability/js-apis-app-ability-appserviceextensionability",
        children: "AppServiceExtensionAbility"
      }), "组件，为应用提供后台服务能力，其他三方应用可通过启动或连接该AppServiceExtensionAbility组件获取相应的服务。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，企业部署的数据防泄漏 (DLP) 软件需要能够长期无界面运行，持续监听文件操作、网络流量，并拦截违规行为，可以使用AppServiceExtensionAbility组件来实现其核心的后台监控服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(690164)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文将被启动或被连接的AppServiceExtensionAbility组件称为服务端，将启动或连接AppServiceExtensionAbility组件的应用组件（当前仅支持UIAbility）称为客户端。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设备限制",
      children: "设备限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AppServiceExtensionAbility组件当前仅支持2in1设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "规格限制",
      children: "规格限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用集成AppServiceExtensionAbility组件需要申请ACL权限（ohos.permission.SUPPORT_APP_SERVICE_EXTENSION）。该ACL权限当前只对企业普通应用开放申请。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["AppServiceExtensionAbility组件内不支持调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window/arkts-apis-window",
          children: "window"
        }), "相关API。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "中以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startappserviceextensionability20",
        children: "启动"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#connectappserviceextensionability20",
        children: "连接"
      }), "的方式来拉起AppServiceExtensionAbility组件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "启动："
          })
        }), " 客户端必须为AppServiceExtensionAbility所属应用或者在AppServiceExtensionAbility支持的应用清单（即", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#extensionabilities%E6%A0%87%E7%AD%BE",
          children: "extensionAbilities标签"
        }), "的appIdentifierAllowList属性）中的应用才能调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startappserviceextensionability20",
          children: "startAppServiceExtensionAbility()"
        }), "接口。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "连接："
          })
        }), " 如果", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-appserviceextensionability/js-apis-app-ability-appserviceextensionability",
          children: "AppServiceExtensionAbility"
        }), "实例未启动，客户端必须为AppServiceExtensionAbility所属应用或者在AppServiceExtensionAbility支持的应用清单（即", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#extensionabilities%E6%A0%87%E7%AD%BE",
          children: "extensionAbilities标签"
        }), "的appIdentifierAllowList属性）中的应用才能调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#connectappserviceextensionability20",
          children: "connectAppServiceExtensionAbility()"
        }), "接口。如果实例已启动，则没有上述限制。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下表展示了拉起和连接的几种场景："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(793926)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "“客户端是否可信”为是时，表示客户端属于服务端所属应用或已配置在appIdentifierAllowList中。为否时，表示客户端不属于服务端所属应用且未配置在appIdentifierAllowList中。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "客户端操作"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "服务端状态"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "客户端是否可信"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "结果说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startAppServiceExtensionAbility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未启动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功，服务端通过start方式启动，服务端状态变为已启动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startAppServiceExtensionAbility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未启动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "失败，客户端不在允许列表中，无法调用启动服务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startAppServiceExtensionAbility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已启动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功，服务端已经启动，start操作直接返回成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startAppServiceExtensionAbility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已启动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "失败，客户端不在允许列表中，无法调用启动服务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "connectAppServiceExtensionAbility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未启动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功，服务端通过connect方式启动，并建立连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "connectAppServiceExtensionAbility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未启动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "失败，客户端不在允许列表中，无法启动服务端。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "connectAppServiceExtensionAbility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已启动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功，服务端已启动，直接建立连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "connectAppServiceExtensionAbility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已启动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功，服务端已启动，直接建立连接。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现一个后台服务",
      children: "实现一个后台服务"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在DevEco Studio工程中手动新建一个AppServiceExtensionAbility组件，具体步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在工程Module对应的ets目录下，右键选择“New > Directory”，新建一个目录并命名为myappserviceextability。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在myappserviceextability目录，右键选择“New > ArkTS File”，新建一个文件并命名为MyAppServiceExtAbility.ets。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(258928)/* ["default"] */.A) + "",
            width: "705",
            height: "586"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其目录结构如下所示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "├── ets\n│ ├── myappserviceextability\n│ │   ├── MyAppServiceExtAbility.ets\n└\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在MyAppServiceExtAbility.ets文件中，增加导入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-appserviceextensionability/js-apis-app-ability-appserviceextensionability",
            children: "AppServiceExtensionAbility"
          }), "的依赖包，自定义类继承AppServiceExtensionAbility组件并实现生命周期回调。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AppServiceExtensionAbility, Want } from '@kit.AbilityKit';\nimport { rpc } from '@kit.IPCKit';\n// ···\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[MyAppServiceExtAbility]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\nclass StubTest extends rpc.RemoteObject {\n  constructor(des: string) {\n    super(des);\n  }\n\n  onRemoteMessageRequest(code: number,\n    data: rpc.MessageSequence,\n    reply: rpc.MessageSequence,\n    options: rpc.MessageOption): boolean | Promise<boolean> {\n    // 处理客户端发送的消息\n    return true;\n  }\n}\n\nexport default class MyAppServiceExtAbility extends AppServiceExtensionAbility {\n  onCreate(want: Want): void {\n    let appServiceExtensionContext = this.context;\n    hilog.info(DOMAIN_NUMBER, TAG, `onCreate, want: ${want.abilityName}`);\n    // ···\n  }\n\n  onRequest(want: Want, startId: number): void {\n    hilog.info(DOMAIN_NUMBER, TAG, `onRequest, want: ${want.abilityName}`);\n  }\n\n  onConnect(want: Want): rpc.RemoteObject {\n    hilog.info(DOMAIN_NUMBER, TAG, `onConnect, want: ${want.abilityName}`);\n    return new StubTest('test');\n  }\n\n  onDisconnect(want: Want): void {\n    hilog.info(DOMAIN_NUMBER, TAG, `onDisconnect, want: ${want.abilityName}`);\n  }\n\n  onDestroy(): void {\n    hilog.info(DOMAIN_NUMBER, TAG, 'onDestroy');\n  }\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在工程Module对应的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
            children: "module.json5配置文件"
          }), "中注册AppServiceExtensionAbility组件，type标签需要设置为“appService”，srcEntry标签表示当前ExtensionAbility组件所对应的代码路径。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\": {\n    // ···\n    \"extensionAbilities\": [\n    // ···\n      {\n        \"name\": \"MyAppServiceExtAbility\",\n        \"description\": \"appService\",\n        \"type\": \"appService\",\n        \"exported\": true,\n        \"srcEntry\": \"./ets/myappserviceextability/MyAppServiceExtAbility.ets\",\n        \"appIdentifierAllowList\": [\n          // 此处填写允许启动该后台服务的客户端应用的appIdentifier列表\n        ],\n      }\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "启动一个后台服务",
      children: "启动一个后台服务"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startappserviceextensionability20",
        children: "startAppServiceExtensionAbility()"
      }), "方法启动一个后台服务，服务的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-appserviceextensionability/js-apis-app-ability-appserviceextensionability#onrequest",
        children: "onRequest()"
      }), "回调就会被调用，并在该回调方法中接收到调用者传递过来的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
        children: "Want"
      }), "对象。后台服务启动后，其生命周期独立于客户端，即使客户端已经销毁，该后台服务仍可继续运行。因此，后台服务需要在其工作完成时通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/x-apis-inner-application-appserviceextensioncontext/x-apis-inner-application-appserviceextensioncontext",
        children: "AppServiceExtensionContext"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/x-apis-inner-application-appserviceextensioncontext/x-apis-inner-application-appserviceextensioncontext#terminateself",
        children: "terminateSelf()"
      }), "来自行停止，或者由另一个组件调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#stopappserviceextensionability20",
        children: "stopAppServiceExtensionAbility()"
      }), "来将其停止。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(268570)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AppServiceExtensionAbility组件以start方式启动，并且没有连接的时候，AppServiceExtensionAbility组件进程可能被挂起（请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/background-task-kit/background-task-overview",
        children: "Background Tasks Kit简介"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在应用中启动一个新的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-appserviceextensionability/js-apis-app-ability-appserviceextensionability",
            children: "AppServiceExtensionAbility"
          }), "组件。示例中的context的获取方式请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
            children: "获取UIAbility的上下文信息"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TAG: string = '[StartAppServiceExt]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\n@Entry\n@Component\nstruct StartAppServiceExt {\n  build() {\n    Column() {\n    // ···\n      List({ initialIndex: 0 }) {\n        ListItem() {\n          Row() {\n            // ···\n          }\n        // ···\n          .onClick(() => {\n            let context = this.getUIContext().getHostContext() as common.UIAbilityContext; // UIAbilityContext\n            let want: Want = {\n              deviceId: '',\n              bundleName: 'com.samples.appserviceextensionability',\n              abilityName: 'MyAppServiceExtAbility'\n            };\n            context.startAppServiceExtensionAbility(want).then(() => {\n              hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in starting AppServiceExtensionAbility.');\n              // 成功启动后台服务\n              this.getUIContext().getPromptAction().showToast({\n                message: 'SuccessfullyStartBackendService'\n              });\n            }).catch((err: BusinessError) => {\n              hilog.error(DOMAIN_NUMBER, TAG,\n                `Failed to start AppServiceExtensionAbility. Code is ${err.code}, message is ${err.message}`);\n            });\n          })\n        }\n\n        // ···\n      }\n    // ···\n    }\n\n    // ···\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在应用中停止一个已启动的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-appserviceextensionability/js-apis-app-ability-appserviceextensionability",
            children: "AppServiceExtensionAbility"
          }), "组件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TAG: string = '[StopAppServiceExt]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\n@Entry\n@Component\nstruct StopAppServiceExt {\n  build() {\n    Column() {\n    // ···\n      List({ initialIndex: 0 }) {\n        ListItem() {\n          Row() {\n            // ···\n          }\n        // ···\n          .onClick(() => {\n            let context = this.getUIContext().getHostContext() as common.UIAbilityContext; // UIAbilityContext\n            let want: Want = {\n              deviceId: '',\n              bundleName: 'com.samples.appserviceextensionability',\n              abilityName: 'MyAppServiceExtAbility'\n            };\n            context.stopAppServiceExtensionAbility(want).then(() => {\n              hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in stopping AppServiceExtensionAbility.');\n              this.getUIContext().getPromptAction().showToast({\n                message: 'SuccessfullyStoppedAStartedBackendService'\n              });\n            }).catch((err: BusinessError) => {\n              hilog.error(DOMAIN_NUMBER, TAG,\n                `Failed to stop AppServiceExtensionAbility. Code is ${err.code}, message is ${err.message}`);\n            });\n          })\n        }\n\n        // ···\n      }\n\n    // ···\n    }\n\n    // ···\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["已启动的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-appserviceextensionability/js-apis-app-ability-appserviceextensionability",
            children: "AppServiceExtensionAbility"
          }), "组件停止自身。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AppServiceExtensionAbility, Want } from '@kit.AbilityKit';\n// ···\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[MyAppServiceExtAbility]';\n// ···\n\nexport default class MyAppServiceExtAbility extends AppServiceExtensionAbility {\n  onCreate(want: Want): void {\n    // ···\n    // 执行业务逻辑\n    this.context.terminateSelf().then(() => {\n      hilog.info(0x0000, TAG, '----------- terminateSelf succeed -----------');\n    }).catch((error: BusinessError) => {\n      hilog.error(0x0000, TAG, `terminateSelf failed, error.code: ${error.code}, error.message: ${error.message}`);\n    });\n  }\n\n// ···\n};\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "连接一个后台服务",
      children: "连接一个后台服务"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "客户端连接服务端",
      children: "客户端连接服务端"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["客户端可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#connectappserviceextensionability20",
        children: "connectAppServiceExtensionAbility()"
      }), "连接服务端（在Want对象中指定连接的目标服务），服务端的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-appserviceextensionability/js-apis-app-ability-appserviceextensionability#onconnect",
        children: "onConnect()"
      }), "就会被调用，并在该回调方法中接收到客户端传递过来的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
        children: "Want"
      }), "对象。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["服务端的AppServiceExtensionAbility组件会在onConnect()中返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc#iremoteobject",
        children: "IRemoteObject"
      }), "对象给客户端", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-connectoptions/js-apis-inner-ability-connectoptions",
        children: "ConnectOptions"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-connectoptions/js-apis-inner-ability-connectoptions#onconnect",
        children: "onConnect()"
      }), "方法。开发者通过该IRemoteObject定义通信接口，实现客户端与服务端的RPC交互。多个客户端可以同时连接到同一个后台服务，客户端完成与服务端的交互后，客户端需要通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#disconnectappserviceextensionability20",
        children: "disconnectAppServiceExtensionAbility()"
      }), "来断开连接。如果所有连接到某个后台服务的客户端均已断开连接，则系统会销毁该服务。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#connectappserviceextensionability20",
            children: "connectAppServiceExtensionAbility()"
          }), "建立与后台服务的连接。示例中的context的获取方式请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
            children: "获取UIAbility的上下文信息"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common, Want } from '@kit.AbilityKit';\nimport { rpc } from '@kit.IPCKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[ConnectAppServiceExt]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\nlet connectionId: number;\nlet want: Want = {\n  deviceId: '',\n  bundleName: 'com.samples.appserviceextensionability',\n  abilityName: 'MyAppServiceExtAbility'\n};\n\nlet options: common.ConnectOptions = {\n  onConnect(elementName, remote: rpc.IRemoteObject): void {\n    hilog.info(DOMAIN_NUMBER, TAG, 'onConnect callback');\n    if (remote === null) {\n      hilog.info(DOMAIN_NUMBER, TAG, `onConnect remote is null`);\n      return;\n    }\n    // 通过remote进行通信\n  },\n  onDisconnect(elementName): void {\n    hilog.info(DOMAIN_NUMBER, TAG, 'onDisconnect callback');\n  },\n  onFailed(code: number): void {\n    hilog.info(DOMAIN_NUMBER, TAG, 'onFailed callback', JSON.stringify(code));\n  }\n};\n\n@Entry\n@Component\nstruct ConnectAppServiceExt {\n  build() {\n    Column() {\n    // ···\n      List({ initialIndex: 0 }) {\n        ListItem() {\n          Row() {\n            // ···\n          }\n        // ···\n          .onClick(() => {\n            let context = this.getUIContext().getHostContext() as common.UIAbilityContext; // UIAbilityContext\n            // 建立连接后返回的Id需要保存下来，在解绑服务时需要作为参数传入\n            connectionId = context.connectAppServiceExtensionAbility(want, options);\n            // 成功连接后台服务\n            this.getUIContext().getPromptAction().showToast({\n              message: 'SuccessfullyConnectBackendService'\n            });\n            hilog.info(DOMAIN_NUMBER, TAG, `connectionId is : ${connectionId}`);\n          })\n        }\n\n        // ···\n      }\n\n    // ···\n    }\n\n    // ···\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#disconnectappserviceextensionability20",
            children: "disconnectAppServiceExtensionAbility()"
          }), "断开与后台服务的连接。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TAG: string = '[DisConnectAppServiceExt]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\nlet connectionId: number;\n\n@Entry\n@Component\nstruct DisConnectAppServiceExt {\n  build() {\n    Column() {\n    // ···\n      List({ initialIndex: 0 }) {\n        ListItem() {\n          Row() {\n            // ···\n          }\n        // ···\n          .onClick(() => {\n            let context = this.getUIContext().getHostContext() as common.UIAbilityContext; // UIAbilityContext\n            // connectionId为调用connectServiceExtensionAbility接口时的返回值，需开发者自行维护\n            context.disconnectAppServiceExtensionAbility(connectionId).then(() => {\n              hilog.info(DOMAIN_NUMBER, TAG, 'disconnectAppServiceExtensionAbility success');\n              // 成功断连后台服务\n              this.getUIContext().getPromptAction().showToast({\n                message: 'SuccessfullyDisconnectBackendService'\n              });\n            }).catch((error: BusinessError) => {\n              hilog.error(DOMAIN_NUMBER, TAG, 'disconnectAppServiceExtensionAbility failed');\n            });\n          })\n        }\n\n        // ···\n      }\n\n    // ···\n    }\n\n    // ···\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "客户端与服务端通信",
      children: "客户端与服务端通信"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["客户端在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-connectoptions/js-apis-inner-ability-connectoptions#onconnect",
        children: "onConnect()"
      }), "中获取到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc#iremoteobject",
        children: "rpc.IRemoteObject"
      }), "对象后便可与服务端进行通信。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "客户端"
        })
      }), "：使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc#sendmessagerequest9",
        children: "sendMessageRequest"
      }), "接口向服务端发送消息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common, Want } from '@kit.AbilityKit';\nimport { rpc } from '@kit.IPCKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TAG: string = '[ClientServerExt]';\nconst DOMAIN_NUMBER: number = 0xFF00;\nconst REQUEST_CODE = 1;\nlet connectionId: number;\nlet want: Want = {\n  deviceId: '',\n  bundleName: 'com.samples.appserviceextensionability',\n  abilityName: 'MyAppServiceExtAbility'\n};\nlet options: common.ConnectOptions = {\n  onConnect(elementName, remote): void {\n    hilog.info(DOMAIN_NUMBER, TAG, 'onConnect callback');\n    if (remote === null) {\n      hilog.info(DOMAIN_NUMBER, TAG, `onConnect remote is null`);\n      return;\n    }\n    let option = new rpc.MessageOption();\n    let data = new rpc.MessageSequence();\n    let reply = new rpc.MessageSequence();\n\n    // 写入请求数据\n    data.writeInt(1);\n    data.writeInt(2);\n\n    remote.sendMessageRequest(REQUEST_CODE, data, reply, option).then((ret: rpc.RequestResult) => {\n      if (ret.errCode === 0) {\n        hilog.info(DOMAIN_NUMBER, TAG, `sendRequest got result`);\n        let sum = ret.reply.readInt();\n        hilog.info(DOMAIN_NUMBER, TAG, `sendRequest success, sum:${sum}`);\n      } else {\n        hilog.error(DOMAIN_NUMBER, TAG, `sendRequest failed`);\n      }\n    }).catch((error: BusinessError) => {\n      hilog.error(DOMAIN_NUMBER, TAG, `sendRequest failed, ${JSON.stringify(error)}`);\n    });\n  },\n  onDisconnect(elementName): void {\n    hilog.info(DOMAIN_NUMBER, TAG, 'onDisconnect callback');\n  },\n  onFailed(code): void {\n    hilog.info(DOMAIN_NUMBER, TAG, 'onFailed callback');\n  }\n};\n\n// 调用connectAppServiceExtensionAbility相关代码\n\n@Entry\n@Component\nstruct ClientServerExt {\n  build() {\n    Column() {\n    // ···\n      List({ initialIndex: 0 }) {\n        ListItem() {\n          Row() {\n            // ···\n          }\n        // ···\n          .onClick(() => {\n            let context = this.getUIContext().getHostContext() as common.UIAbilityContext; // UIAbilityContext\n            connectionId = context.connectAppServiceExtensionAbility(want, options);\n            hilog.info(DOMAIN_NUMBER, TAG, `connectionId is : ${connectionId}`);\n          })\n        }\n      }\n    // ···\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "服务端"
        })
      }), "：使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc#onremotemessagerequest9",
        children: "onRemoteMessageRequest"
      }), "接口接收客户端发送的消息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AppServiceExtensionAbility, Want } from '@kit.AbilityKit';\nimport { rpc } from '@kit.IPCKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[MyAppServiceExtAbility]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\n// 开发者需要在这个类型里对接口进行实现\nclass Stub extends rpc.RemoteObject {\n  onRemoteMessageRequest(code: number,\n    data: rpc.MessageSequence,\n    reply: rpc.MessageSequence,\n    options: rpc.MessageOption): boolean | Promise<boolean> {\n    hilog.info(DOMAIN_NUMBER, TAG, 'onRemoteMessageRequest');\n    let sum = data.readInt() + data.readInt();\n    reply.writeInt(sum);\n    return true;\n  }\n}\n\n// 服务端实现\nexport default class MyAppServiceExtAbility extends AppServiceExtensionAbility {\n  onCreate(want: Want): void {\n    hilog.info(DOMAIN_NUMBER, TAG, 'MyAppServiceExtAbility onCreate');\n  }\n\n  onDestroy(): void {\n    hilog.info(DOMAIN_NUMBER, TAG, 'MyAppServiceExtAbility onDestroy');\n  }\n\n  onConnect(want: Want): rpc.RemoteObject {\n    hilog.info(DOMAIN_NUMBER, TAG, 'MyAppServiceExtAbility onConnect');\n    return new Stub('test');\n  }\n\n  onDisconnect(): void {\n    hilog.info(DOMAIN_NUMBER, TAG, 'MyAppServiceExtAbility onDisconnect');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "服务端对客户端身份校验",
      children: "服务端对客户端身份校验"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分开发者需要使用AppServiceExtensionAbility组件提供一些较为敏感的服务，可以通过如下方式对客户端身份进行校验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "通过callerTokenId对客户端进行鉴权"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc#getcallingtokenid8",
        children: "getCallingTokenId()"
      }), "接口获取客户端的tokenID，再调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#verifyaccesstokensync9",
        children: "verifyAccessTokenSync()"
      }), "接口判断客户端是否有某个具体权限，由于当前不支持自定义权限，因此只能校验当前", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permissions",
        children: "系统所定义的权限"
      }), "。示例代码如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AppServiceExtensionAbility, Want } from '@kit.AbilityKit';\nimport { abilityAccessCtrl, bundleManager } from '@kit.AbilityKit';\nimport { rpc } from '@kit.IPCKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TAG: string = '[AppServiceExtImpl]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\n// 开发者需要在这个类里进行实现\n\nclass Stub extends rpc.RemoteObject {\n  onRemoteMessageRequest(\n    code: number,\n    data: rpc.MessageSequence,\n    reply: rpc.MessageSequence,\n    options: rpc.MessageOption): boolean | Promise<boolean> {\n    // 开发者自行实现业务逻辑\n    hilog.info(DOMAIN_NUMBER, TAG, `onRemoteMessageRequest: ${data}`);\n    let callerUid = rpc.IPCSkeleton.getCallingUid();\n    bundleManager.getBundleNameByUid(callerUid).then((callerBundleName) => {\n      hilog.info(DOMAIN_NUMBER, TAG, 'getBundleNameByUid: ' + callerBundleName);\n      // 对客户端包名进行识别\n      if (callerBundleName !== 'com.samples.stagemodelabilitydevelop') { // 识别不通过\n        hilog.info(DOMAIN_NUMBER, TAG, 'The caller bundle is not in trustlist, reject');\n        return;\n      }\n      // 识别通过，执行正常业务逻辑\n    }).catch((err: BusinessError) => {\n      hilog.error(DOMAIN_NUMBER, TAG, 'getBundleNameByUid failed: ' + err.message);\n    });\n\n    let callerTokenId = rpc.IPCSkeleton.getCallingTokenId();\n    let accessManager = abilityAccessCtrl.createAtManager();\n    // 所校验的具体权限由开发者自行选择，此处ohos.permission.GET_BUNDLE_INFO_PRIVILEGED只作为示例\n    let grantStatus = accessManager.verifyAccessTokenSync(callerTokenId, 'ohos.permission.GET_BUNDLE_INFO_PRIVILEGED');\n    if (grantStatus === abilityAccessCtrl.GrantStatus.PERMISSION_DENIED) {\n      hilog.error(DOMAIN_NUMBER, TAG, 'PERMISSION_DENIED');\n      return false;\n    }\n    hilog.info(DOMAIN_NUMBER, TAG, 'verify access token success.');\n    return true;\n  }\n}\n\nexport default class MyAppServiceExtAbility extends AppServiceExtensionAbility {\n  onConnect(want: Want): rpc.RemoteObject {\n    return new Stub('test');\n  }\n  // 其他生命周期\n}\n"
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
268570(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
258928(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437539-7b016e20071918154c94c4efbc58f4f6.png");

},
793926(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
690164(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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