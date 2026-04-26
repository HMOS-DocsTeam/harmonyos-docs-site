"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["141780"], {
229983(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_stage_model_development_stage_model_application_components_uiability_uiability_cross_device_interaction_uiability_cross_device_interaction_md_96f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-stage-model-development-stage-model-application-components-uiability-uiability-cross-device-interaction-uiability-cross-device-interaction-md-96f.json
var site_docs_ability_kit_stage_model_development_stage_model_application_components_uiability_uiability_cross_device_interaction_uiability_cross_device_interaction_md_96f_namespaceObject = JSON.parse('{"id":"ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-cross-device-interaction/uiability-cross-device-interaction","title":"通过Call调用实现多端协同","description":"Call调用是UIAbility能力的扩展，它为UIAbility提供一种能够被外部调用并与外部进行通信的能力。Call调用支持前台与后台两种启动方式，使UIAbility既能被拉起到前台展示UI，也可以在后台被创建并运行。通过建立跨进程通信（IPC）链路，它在调用方与被调用方间构建起数据通道。当在分布式场景下使用时，Call调用可以跨设备发起，使得一个设备上的应用能够将任务迁移至另一个设备上的UIAbility继续执行，从而完成跨端迁移。","source":"@site/docs/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-cross-device-interaction/uiability-cross-device-interaction.md","sourceDirName":"ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-cross-device-interaction","slug":"/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-cross-device-interaction/","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-cross-device-interaction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"通过Call调用实现多端协同","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-cross-device-interaction","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"启动应用内的UIAbility组件","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-intra-device-interaction/"},"next":{"title":"UIAbility备份恢复","permalink":"/harmonyos-docs-site/ability-kit/stage-model-development/stage-model-application-components/uiability/ability-recover-guideline/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-cross-device-interaction/uiability-cross-device-interaction.md


const frontMatter = {
	title: '通过Call调用实现多端协同',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-cross-device-interaction',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '通过Call调用实现多端协同';

const assets = {

};



const toc = [{
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "运行机制",
  "id": "运行机制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "创建Callee被调用端",
  "id": "创建callee被调用端",
  "level": 3
}, {
  "value": "访问被调用端UIAbility",
  "id": "访问被调用端uiability",
  "level": 3
}, {
  "value": "向被调用端UIAbility发送约定序列化数据",
  "id": "向被调用端uiability发送约定序列化数据",
  "level": 3
}, {
  "value": "释放Caller通信接口",
  "id": "释放caller通信接口",
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
        id: "通过call调用实现多端协同",
        children: "通过Call调用实现多端协同"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Call调用是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "能力的扩展，它为UIAbility提供一种能够被外部调用并与外部进行通信的能力。Call调用支持前台与后台两种启动方式，使UIAbility既能被拉起到前台展示UI，也可以在后台被创建并运行。通过建立跨进程通信（IPC）链路，它在调用方与被调用方间构建起数据通道。当在分布式场景下使用时，Call调用可以跨设备发起，使得一个设备上的应用能够将任务迁移至另一个设备上的UIAbility继续执行，从而完成跨端迁移。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Call调用的核心接口是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startabilitybycall",
        children: "startAbilityByCall()"
      }), "方法，与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startability",
        children: "startAbility()"
      }), "接口的不同之处在于："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "startAbilityByCall支持前台与后台两种启动方式，而startAbility()仅支持前台启动。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用方可使用startAbilityByCall()所返回的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#caller",
          children: "Caller"
        }), "对象与被调用方进行通信，而startAbility()不具备通信能力。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " Call调用相关名词解释"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名词"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CallerAbility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "进行Call调用的UIAbility（调用方）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CalleeAbility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被Call调用的UIAbility（被调用方）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实际对象，由startAbilityByCall接口返回，CallerAbility可使用Caller与CalleeAbility进行通信。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Callee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实际对象，被CalleeAbility持有，可与Caller进行通信。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CalleeAbility的启动模式不支持指定实例模式。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前仅分布式迁移场景对第三方应用开放Call调用权限，其余所有Call调用场景均限定为系统内部调用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运行机制",
      children: "运行机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Call调用示意图如下所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " Call调用示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(650561)/* ["default"] */.A) + "",
        width: "799",
        height: "210"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CallerAbility调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startabilitybycall",
          children: "startAbilityByCall()"
        }), "接口获取", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#caller",
          children: "Caller"
        }), "，并使用Caller对象的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#call",
          children: "call"
        }), "方法向CalleeAbility发送数据。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CalleeAbility持有一个", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#callee",
          children: "Callee"
        }), "对象，通过Callee的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#on",
          children: "on"
        }), "方法注册回调函数，当接收到Caller发送的数据时将会调用对应的回调函数。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Call功能主要接口如下表所示。具体的API详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#caller",
        children: "Caller"
      }), "接口说明。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " Call功能主要接口"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startAbilityByCall(want: Want): Promise<Caller>"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["启动指定UIAbility并获取其Caller通信接口，默认为后台启动，通过配置want可实现前台启动，详见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startabilitybycall",
              children: "startAbilityByCall"
            }), "接口说明。AbilityContext与ServiceExtensionContext均支持该接口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(method: string, callback: CalleeCallBack): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用组件Callee注册method对应的callback方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(method: string): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用组件Callee解注册method的callback方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "call(method: string, data: rpc.Parcelable): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向通用组件Callee发送约定序列化数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callWithResult(method: string, data: rpc.Parcelable): Promise<rpc.MessageSequence>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向通用组件Callee发送约定序列化数据，并将Callee返回的约定序列化数据带回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "release(): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "释放通用组件的Caller通信接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: \"release\", callback: OnReleaseCallback): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册通用组件通信断开监听通知。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建callee被调用端",
      children: "创建Callee被调用端"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#callee",
        children: "Callee"
      }), "被调用端，需要实现指定方法的数据接收回调函数、数据的序列化及反序列化方法。在需要接收数据期间，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#on",
        children: "on"
      }), "接口注册监听，无需接收数据时通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#off",
        children: "off"
      }), "接口解除监听。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["需要申请ohos.permission.DISTRIBUTED_DATASYNC权限，配置方式请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["同时需要在应用首次启动时弹窗向用户申请授权，使用方式请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
            children: "向用户申请授权"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
            children: "UIAbility"
          }), "的启动模式。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["例如将CalleeAbility配置为单实例模式singleton，配置方式请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-launch-type",
            children: "UIAbility组件启动模式"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义约定的序列化数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用端及被调用端发送接收的数据格式需协商一致，如下示例约定数据由number和string组成。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rpc } from '@kit.IPCKit';\n\nclass MyParcelable {\n  num: number = 0;\n  str: string = '';\n\n  constructor(num: number, string: string) {\n    this.num = num;\n    this.str = string;\n  }\n\n  mySequenceable(num: number, string: string): void {\n    this.num = num;\n    this.str = string;\n  }\n\n  marshalling(messageSequence: rpc.MessageSequence): boolean {\n    messageSequence.writeInt(this.num);\n    messageSequence.writeString(this.str);\n    return true;\n  }\n\n  unmarshalling(messageSequence: rpc.MessageSequence): boolean {\n    this.num = messageSequence.readInt();\n    this.str = messageSequence.readString();\n    return true;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["实现", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#on",
            children: "Callee.on"
          }), "监听及", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#off",
            children: "Callee.off"
          }), "解除监听。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["被调用端", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#callee",
            children: "Callee"
          }), "的监听函数注册时机，取决于应用开发者。注册监听之前的数据不会被处理，取消监听之后的数据不会被处理。如下示例在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
            children: "UIAbility"
          }), "的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
            children: "onCreate"
          }), "注册'MSG_SEND_METHOD'监听，在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#ondestroy",
            children: "onDestroy"
          }), "取消监听，收到序列化数据后作相应处理并返回，应用开发者根据实际需要做相应处理。具体示例代码如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { AbilityConstant, UIAbility, Want, Caller } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { rpc } from '@kit.IPCKit';\n\nconst TAG: string = '[CalleeAbility]';\nconst MSG_SEND_METHOD: string = 'CallSendMsg';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\nclass MyParcelable {\n  num: number = 0;\n  str: string = '';\n\n  constructor(num: number, string: string) {\n    this.num = num;\n    this.str = string;\n  }\n\n  mySequenceable(num: number, string: string): void {\n    this.num = num;\n    this.str = string;\n  }\n\n  marshalling(messageSequence: rpc.MessageSequence): boolean {\n    messageSequence.writeInt(this.num);\n    messageSequence.writeString(this.str);\n    return true;\n  }\n\n  unmarshalling(messageSequence: rpc.MessageSequence): boolean {\n    this.num = messageSequence.readInt();\n    this.str = messageSequence.readString();\n    return true;\n  }\n}\n\nfunction sendMsgCallback(data: rpc.MessageSequence): rpc.Parcelable {\n  hilog.info(DOMAIN_NUMBER, TAG, '%{public}s', 'CalleeSortFunc called');\n\n  // 获取Caller发送的序列化数据\n  let receivedData: MyParcelable = new MyParcelable(0, '');\n  data.readParcelable(receivedData);\n  hilog.info(DOMAIN_NUMBER, TAG, '%{public}s', `receiveData[${receivedData.num}, ${receivedData.str}]`);\n  let num: number = receivedData.num;\n\n  // 作相应处理\n  // 返回序列化数据result给Caller\n  return new MyParcelable(num + 1, `send ${receivedData.str} succeed`) as rpc.Parcelable;\n}\n\nexport default class CalleeAbility extends UIAbility {\n  caller: Caller | undefined;\n\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {\n    try {\n      this.callee.on(MSG_SEND_METHOD, sendMsgCallback);\n    } catch (error) {\n      hilog.error(DOMAIN_NUMBER, TAG, '%{public}s', `Failed to register. Error is ${error}`);\n    }\n  }\n\n  // ...\n  releaseCall(): void {\n    try {\n      if (this.caller) {\n        this.caller.release();\n        this.caller = undefined;\n      }\n      hilog.info(DOMAIN_NUMBER, TAG, 'caller release succeed');\n    } catch (error) {\n      hilog.error(DOMAIN_NUMBER, TAG, `caller release failed with ${error}`);\n    }\n  }\n\n  // ...\n  onDestroy(): void {\n    try {\n      this.callee.off(MSG_SEND_METHOD);\n      hilog.info(DOMAIN_NUMBER, TAG, '%{public}s', 'Callee OnDestroy');\n      this.releaseCall();\n    } catch (error) {\n      hilog.error(DOMAIN_NUMBER, TAG, '%{public}s', `Failed to register. Error is ${error}`);\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "访问被调用端uiability",
      children: "访问被调用端UIAbility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["导入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
            children: "UIAbility"
          }), "模块。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIAbility } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取Caller通信接口。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ability的context属性实现了", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#startabilitybycall",
            children: "startAbilityByCall"
          }), "方法，用于获取指定通用组", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#caller",
            children: "Caller"
          }), "通信接口。如下示例通过this.context获取Ability实例的context属性，使用startAbilityByCall拉起", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#callee",
            children: "Callee"
          }), "被调用端并获取Caller通信接口，注册Caller的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onrelease",
            children: "onRelease"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#onremotestatechange10",
            children: "onRemoteStateChange"
          }), "监听。应用开发者根据实际业务需要做相应处理。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { Caller, common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { distributedDeviceManager } from '@kit.DistributedServiceKit';\nimport { promptAction } from '@kit.ArkUI';\n\nconst TAG: string = '[Page_CollaborateAbility]';\nconst DOMAIN_NUMBER: number = 0xFF00;\nlet caller: Caller | undefined;\nlet dmClass: distributedDeviceManager.DeviceManager;\n\nfunction getRemoteDeviceId(): string | undefined {\n  if (typeof dmClass === 'object' && dmClass !== null) {\n    let list = dmClass.getAvailableDeviceListSync();\n    hilog.info(DOMAIN_NUMBER, TAG, JSON.stringify(dmClass), JSON.stringify(list));\n    if (typeof (list) === 'undefined' || typeof (list.length) === 'undefined') {\n      hilog.error(DOMAIN_NUMBER, TAG, 'getRemoteDeviceId err: list is null');\n      return;\n    }\n    if (list.length === 0) {\n      hilog.error(DOMAIN_NUMBER, TAG, `getRemoteDeviceId err: list is empty`);\n      return;\n    }\n    return list[0].networkId;\n  } else {\n    hilog.error(DOMAIN_NUMBER, TAG, 'getRemoteDeviceId err: dmClass is null');\n    return;\n  }\n}\n\n@Entry\n@Component\nstruct Page_CollaborateAbility {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  build() {\n    Row() {\n      Column() {\n        // ...\n        List({ initialIndex: 0 }) {\n          // ...\n          ListItem() {\n            Button('test').onClick(() => {\n              let caller: Caller | undefined;\n              let context = this.context;\n\n              context.startAbilityByCall({\n                deviceId: getRemoteDeviceId(),\n                bundleName: 'com.samples.stagemodelabilityinteraction',\n                abilityName: 'CalleeAbility'\n              }).then((data) => {\n                if (data !== null) {\n                  caller = data;\n                  hilog.info(DOMAIN_NUMBER, TAG, 'get remote caller success');\n                  // 注册caller的release监听\n                  caller.onRelease((msg) => {\n                    hilog.info(DOMAIN_NUMBER, TAG, `remote caller onRelease is called ${msg}`);\n                  });\n                  hilog.info(DOMAIN_NUMBER, TAG, 'remote caller register OnRelease succeed');\n                  promptAction.openToast({\n                    message: 'CallerSuccess'\n                  });\n                  // 注册caller的协同场景下跨设备组件状态变化监听通知\n                  try {\n                    caller.onRemoteStateChange((str) => {\n                      hilog.info(DOMAIN_NUMBER, TAG, 'Remote state changed ' + str);\n                    });\n                  } catch (error) {\n                    hilog.error(DOMAIN_NUMBER, TAG, `Caller.onRemoteStateChange catch error, error.code: ${JSON.stringify(error.code)}, error.message: ${JSON.stringify(error.message)}`);\n                  }\n                }\n              }).catch((error: BusinessError) => {\n                hilog.error(DOMAIN_NUMBER, TAG, `get remote caller failed with ${error}`);\n              });\n            })\n          }\n          // ...\n        }\n        // ...\n      }\n      // ...\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "向被调用端uiability发送约定序列化数据",
      children: "向被调用端UIAbility发送约定序列化数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["向被调用端发送Parcelable数据有两种方式，一种是不带返回值，一种是获取被调用端返回的数据，method以及序列化数据需要与被调用端协商一致。如下示例调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#call",
            children: "Call"
          }), "接口，向", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#callee",
            children: "Callee"
          }), "被调用端发送数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIAbility, Caller } from '@kit.AbilityKit';\nimport { rpc } from '@kit.IPCKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[CalleeAbility]';\nconst DOMAIN_NUMBER: number = 0xFF00;\nconst MSG_SEND_METHOD: string = 'CallSendMsg';\n\nclass MyParcelable {\n  num: number = 0;\n  str: string = '';\n\n  constructor(num: number, string: string) {\n    this.num = num;\n    this.str = string;\n  }\n\n  mySequenceable(num: number, string: string): void {\n    this.num = num;\n    this.str = string;\n  }\n\n  marshalling(messageSequence: rpc.MessageSequence): boolean {\n    messageSequence.writeInt(this.num);\n    messageSequence.writeString(this.str);\n    return true;\n  }\n\n  unmarshalling(messageSequence: rpc.MessageSequence): boolean {\n    this.num = messageSequence.readInt();\n    this.str = messageSequence.readString();\n    return true;\n  }\n}\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n  caller: Caller | undefined;\n\n  async onButtonCall(): Promise<void> {\n    try {\n      let msg: MyParcelable = new MyParcelable(1, 'origin_Msg');\n      if (this.caller) {\n        await this.caller.call(MSG_SEND_METHOD, msg);\n      }\n    } catch (error) {\n      hilog.error(DOMAIN_NUMBER, TAG, `caller call failed with ${error}`);\n    }\n  }\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如下示例调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#callwithresult",
            children: "callWithResult"
          }), "接口，向Callee被调用端发送待处理的数据originMsg，并将CallSendMsg方法处理完毕的数据赋值给backMsg。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIAbility, Caller } from '@kit.AbilityKit';\nimport { rpc } from '@kit.IPCKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[CalleeAbility]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\nconst MSG_SEND_METHOD: string = 'CallSendMsg';\nlet originMsg: string = '';\nlet backMsg: string = '';\n\nclass MyParcelable {\n  num: number = 0;\n  str: string = '';\n\n  constructor(num: number, string: string) {\n    this.num = num;\n    this.str = string;\n  }\n\n  mySequenceable(num: number, string: string): void {\n    this.num = num;\n    this.str = string;\n  }\n\n  marshalling(messageSequence: rpc.MessageSequence): boolean {\n    messageSequence.writeInt(this.num);\n    messageSequence.writeString(this.str);\n    return true;\n  }\n\n  unmarshalling(messageSequence: rpc.MessageSequence): boolean {\n    this.num = messageSequence.readInt();\n    this.str = messageSequence.readString();\n    return true;\n  }\n}\n\nexport default class EntryAbility extends UIAbility {\n  // ...\n  caller: Caller | undefined;\n\n  async onButtonCallWithResult(originMsg: string, backMsg: string): Promise<void> {\n    try {\n      let msg: MyParcelable = new MyParcelable(1, originMsg);\n      if (this.caller) {\n        const data = await this.caller.callWithResult(MSG_SEND_METHOD, msg);\n        hilog.info(DOMAIN_NUMBER, TAG, 'caller callWithResult succeed');\n        let result: MyParcelable = new MyParcelable(0, '');\n        data.readParcelable(result);\n        backMsg = result.str;\n        hilog.info(DOMAIN_NUMBER, TAG, `caller result is [${result.num}, ${result.str}]`);\n      }\n    } catch (error) {\n      hilog.error(DOMAIN_NUMBER, TAG, `caller callWithResult failed with ${error}`);\n    }\n  }\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "释放caller通信接口",
      children: "释放Caller通信接口"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#caller",
        children: "Caller"
      }), "不再使用后，应用开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#release",
        children: "release"
      }), "接口释放Caller。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIAbility, Caller } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG: string = '[CalleeAbility]';\nconst DOMAIN_NUMBER: number = 0xFF00;\n\nexport default class EntryAbility extends UIAbility {\n  caller: Caller | undefined\n  releaseCall(): void {\n    try {\n      if (this.caller) {\n        this.caller.release();\n        this.caller = undefined;\n      }\n      hilog.info(DOMAIN_NUMBER, TAG, 'caller release succeed');\n    } catch (error) {\n      hilog.error(DOMAIN_NUMBER, TAG, `caller release failed with ${error}`);\n    }\n  }\n}\n"
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
650561(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437537-617d958b111d3cf64082eb116184eb88.png");

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