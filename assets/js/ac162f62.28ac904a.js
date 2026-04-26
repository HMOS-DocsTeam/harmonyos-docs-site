"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["624087"], {
157007(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ability_api_ability_arkts_both_models_js_apis_app_ability_wantagent_js_apis_app_ability_wantagent_md_ac1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ability-api-ability-arkts-both-models-js-apis-app-ability-wantagent-js-apis-app-ability-wantagent-md-ac1.json
var site_docs_ref_ability_api_ability_arkts_both_models_js_apis_app_ability_wantagent_js_apis_app_ability_wantagent_md_ac1_namespaceObject = JSON.parse('{"id":"ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent","title":"@ohos.app.ability.wantAgent (WantAgent模块)","description":"WantAgent模块封装了Want对象，允许应用程序在未来的某个时间点触发WantAgent实例执行指定操作（如启动Ability、发送公共事件等）。","source":"@site/docs-ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent.md","sourceDirName":"ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent","slug":"/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"@ohos.app.ability.wantAgent (WantAgent模块)","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-wantagent","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-app-ability-wantagent"},"sidebar":"ref","previous":{"title":"@ohos.app.ability.Want (Want)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want"},"next":{"title":"@ohos.app.ability.wantConstant (Want常量)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantconstant/js-apis-app-ability-wantconstant"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent.md


const frontMatter = {
	title: '@ohos.app.ability.wantAgent (WantAgent模块)',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-wantagent',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-app-ability-wantagent'
};
const contentTitle = '@ohos.app.ability.wantAgent (WantAgent模块)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "wantAgent.getWantAgent",
  "id": "wantagentgetwantagent",
  "level": 2
}, {
  "value": "wantAgent.getWantAgent",
  "id": "wantagentgetwantagent-1",
  "level": 2
}, {
  "value": "wantAgent.getBundleName",
  "id": "wantagentgetbundlename",
  "level": 2
}, {
  "value": "wantAgent.getBundleName",
  "id": "wantagentgetbundlename-1",
  "level": 2
}, {
  "value": "wantAgent.getUid",
  "id": "wantagentgetuid",
  "level": 2
}, {
  "value": "wantAgent.getUid",
  "id": "wantagentgetuid-1",
  "level": 2
}, {
  "value": "wantAgent.cancel",
  "id": "wantagentcancel",
  "level": 2
}, {
  "value": "wantAgent.cancel",
  "id": "wantagentcancel-1",
  "level": 2
}, {
  "value": "wantAgent.trigger",
  "id": "wantagenttrigger",
  "level": 2
}, {
  "value": "wantAgent.equal",
  "id": "wantagentequal",
  "level": 2
}, {
  "value": "wantAgent.equal",
  "id": "wantagentequal-1",
  "level": 2
}, {
  "value": "wantAgent.getOperationType",
  "id": "wantagentgetoperationtype",
  "level": 2
}, {
  "value": "wantAgent.getOperationType",
  "id": "wantagentgetoperationtype-1",
  "level": 2
}, {
  "value": "WantAgentFlags",
  "id": "wantagentflags",
  "level": 2
}, {
  "value": "OperationType",
  "id": "operationtype",
  "level": 2
}, {
  "value": "CompleteData",
  "id": "completedata",
  "level": 2
}, {
  "value": "TriggerInfo",
  "id": "triggerinfo",
  "level": 2
}, {
  "value": "WantAgentInfo",
  "id": "wantagentinfo",
  "level": 2
}, {
  "value": "WantAgent",
  "id": "wantagent",
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
        id: "ohosappabilitywantagent-wantagent模块",
        children: "@ohos.app.ability.wantAgent (WantAgent模块)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WantAgent模块封装了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
        children: "Want"
      }), "对象，允许应用程序在未来的某个时间点触发WantAgent实例执行指定操作（如启动Ability、发送公共事件等）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该模块提供了创建WantAgent实例、获取WantAgent实例所属应用的包名、获取WantAgent实例所属应用的UID、主动触发WantAgent实例、判断两个WantAgent实例是否相等等功能。WantAgent的一个典型应用场景是通知处理。例如，当用户点击通知时，会触发WantAgent的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#wantagenttrigger",
        children: "trigger"
      }), "接口，并拉起目标应用。具体使用请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/notification-kit/publish-notification/notification-with-wantagent",
        children: "通知模块"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(411633)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { wantAgent } from '@kit.AbilityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentgetwantagent",
      children: "wantAgent.getWantAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getWantAgent(info: WantAgentInfo, callback: AsyncCallback<WantAgent>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建WantAgent，使用callback异步回调。创建成功返回WantAgent对象，创建失败返回空值。"
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
            children: "info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/wantagent/js-apis-inner-wantagent-wantagentinfo/js-apis-inner-wantagent-wantagentinfo",
              children: "WantAgentInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示创建WantAgent所需的配置信息，包括目标UIAbility、操作类型、请求码等。三方应用在WantAgentInfo中只能设置本应用的UIAbility。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<WantAgent>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当创建WantAgent成功，err为undefined，data为创建的WantAgent；否则err为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts-errcode/errorcode-ability/errorcode-ability",
        children: "元能力子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service busy. There are concurrent tasks. Try again later."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid wantAgent object."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { wantAgent, Want } from '@kit.AbilityKit';\nimport type { WantAgent } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// wantAgent对象\nlet wantAgentData: WantAgent;\n// WantAgentInfo对象\nlet wantAgentInfo: wantAgent.WantAgentInfo = {\n  wants: [\n    {\n      deviceId: 'deviceId',\n      bundleName: 'com.example.myapplication',\n      abilityName: 'EntryAbility',\n      action: 'action1',\n      entities: ['entity1'],\n      type: 'MIMETYPE',\n      uri: 'key={true,true,false}',\n      parameters:\n      {\n        mykey0: 2222,\n        mykey1: [1, 2, 3],\n        mykey2: '[1, 2, 3]',\n        mykey3: 'ssssssssssssssssssssssssss',\n        mykey4: [false, true, false],\n        mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n        mykey6: true,\n      }\n    } as Want\n  ],\n  actionType: wantAgent.OperationType.START_ABILITY,\n  requestCode: 0,\n  wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n};\n\n// getWantAgent回调\nfunction getWantAgentCallback(err: BusinessError, data: WantAgent) {\n  if (err.code) {\n    console.error(`getWantAgent failed, code: ${JSON.stringify(err.code)}, message: ${JSON.stringify(err.message)}`);\n  } else {\n    wantAgentData = data;\n  }\n}\n\ntry {\n  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);\n} catch (err) {\n  console.error(`getWantAgent failed, error: ${JSON.stringify(err)}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentgetwantagent-1",
      children: "wantAgent.getWantAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getWantAgent(info: WantAgentInfo): Promise<WantAgent>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建WantAgent。使用Promise异步回调。创建成功返回WantAgent对象，创建失败返回空值。"
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
            children: "info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/wantagent/js-apis-inner-wantagent-wantagentinfo/js-apis-inner-wantagent-wantagentinfo",
              children: "WantAgentInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示创建WantAgent所需的配置信息，包括目标UIAbility、操作类型、请求码等。三方应用在WantAgentInfo中只能设置本应用的UIAbility。"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#wantagent",
              children: "WantAgent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回创建的WantAgent。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts-errcode/errorcode-ability/errorcode-ability",
        children: "元能力子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service busy. There are concurrent tasks. Try again later."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid wantAgent object."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { wantAgent, Want } from '@kit.AbilityKit';\nimport type { WantAgent } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet wantAgentData: WantAgent;\n// WantAgentInfo对象\nlet wantAgentInfo: wantAgent.WantAgentInfo = {\n  wants: [\n    {\n      deviceId: 'deviceId',\n      bundleName: 'com.example.myapplication',\n      abilityName: 'EntryAbility',\n      action: 'action1',\n      entities: ['entity1'],\n      type: 'MIMETYPE',\n      uri: 'key={true,true,false}',\n      parameters:\n      {\n        mykey0: 2222,\n        mykey1: [1, 2, 3],\n        mykey2: '[1, 2, 3]',\n        mykey3: 'ssssssssssssssssssssssssss',\n        mykey4: [false, true, false],\n        mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n        mykey6: true,\n      }\n    } as Want\n  ],\n  actionType: wantAgent.OperationType.START_ABILITY,\n  requestCode: 0,\n  wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n};\n\ntry {\n  wantAgent.getWantAgent(wantAgentInfo).then((data) => {\n    wantAgentData = data;\n  }).catch((err: BusinessError) => {\n    console.error(`getWantAgent failed, code: ${JSON.stringify(err.code)}, message: ${JSON.stringify(err.message)}`);\n  });\n} catch (err) {\n  console.error(`getWantAgent failed! ${err.code} ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentgetbundlename",
      children: "wantAgent.getBundleName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBundleName(agent: WantAgent, callback: AsyncCallback<string>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取WantAgent实例所属应用的包名，使用callback异步回调。"
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
            children: "agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当获取包名成功，err为undefined，data为创建的WantAgent；否则err为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts-errcode/errorcode-ability/errorcode-ability",
        children: "元能力子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service busy. There are concurrent tasks. Try again later."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid wantAgent object."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { wantAgent, Want } from '@kit.AbilityKit';\nimport type { WantAgent } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// wantAgent对象\nlet wantAgentData: WantAgent;\n// WantAgentInfo对象\nlet wantAgentInfo: wantAgent.WantAgentInfo = {\n  wants: [\n    {\n      deviceId: 'deviceId',\n      bundleName: 'com.example.myapplication',\n      abilityName: 'EntryAbility',\n      action: 'action1',\n      entities: ['entity1'],\n      type: 'MIMETYPE',\n      uri: 'key={true,true,false}',\n      parameters:\n      {\n        mykey0: 2222,\n        mykey1: [1, 2, 3],\n        mykey2: '[1, 2, 3]',\n        mykey3: 'ssssssssssssssssssssssssss',\n        mykey4: [false, true, false],\n        mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n        mykey6: true,\n      }\n    } as Want\n  ],\n  actionType: wantAgent.OperationType.START_ABILITY,\n  requestCode: 0,\n  wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n};\n\n// getWantAgent回调\nfunction getWantAgentCallback(err: BusinessError, data: WantAgent) {\n  if (err) {\n    console.error(`getWantAgent failed, code: ${JSON.stringify(err.code)}, message: ${JSON.stringify(err.message)}`);\n  } else {\n    wantAgentData = data;\n  }\n  // getBundleName回调\n  let getBundleNameCallback = (err: BusinessError, data: string) => {\n    if (err) {\n      console.error(`getBundleName failed! ${err.code} ${err.message}`);\n    } else {\n      console.info(`getBundleName ok! ${JSON.stringify(data)}`);\n    }\n  }\n  try {\n    wantAgent.getBundleName(wantAgentData, getBundleNameCallback);\n  } catch (err) {\n    console.error(`getBundleName failed! ${err.code} ${err.message}`);\n  }\n}\n\ntry {\n  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);\n} catch (err) {\n  console.error(`getWantAgent failed! ${err.code} ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentgetbundlename-1",
      children: "wantAgent.getBundleName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBundleName(agent: WantAgent): Promise<string>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取WantAgent实例所属应用的包名。使用Promise异步回调。"
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
            children: "agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent对象。"
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
            children: "Promise<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回获取WantAgent实例的包名。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts-errcode/errorcode-ability/errorcode-ability",
        children: "元能力子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service busy. There are concurrent tasks. Try again later."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid wantAgent object."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { wantAgent, Want } from '@kit.AbilityKit';\nimport type { WantAgent } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// wantAgent对象\nlet wantAgentData: WantAgent;\n// WantAgentInfo对象\nlet wantAgentInfo: wantAgent.WantAgentInfo = {\n  wants: [\n    {\n      deviceId: 'deviceId',\n      bundleName: 'com.example.myapplication',\n      abilityName: 'EntryAbility',\n      action: 'action1',\n      entities: ['entity1'],\n      type: 'MIMETYPE',\n      uri: 'key={true,true,false}',\n      parameters:\n      {\n        mykey0: 2222,\n        mykey1: [1, 2, 3],\n        mykey2: '[1, 2, 3]',\n        mykey3: 'ssssssssssssssssssssssssss',\n        mykey4: [false, true, false],\n        mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n        mykey6: true,\n      }\n    } as Want\n  ],\n  actionType: wantAgent.OperationType.START_ABILITY,\n  requestCode: 0,\n  wantAgentFlags:[wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n};\n\n// getWantAgent回调\nfunction getWantAgentCallback(err: BusinessError, data: WantAgent) {\n  if (err) {\n    console.error(`getWantAgent failed, code: ${JSON.stringify(err.code)}, message: ${JSON.stringify(err.message)}`);\n  } else {\n    wantAgentData = data;\n  }\n  try {\n    wantAgent.getBundleName(wantAgentData).then((data)=>{\n      console.info(`getBundleName ok! ${JSON.stringify(data)}`);\n    }).catch((err: BusinessError)=>{\n      console.error(`getBundleName failed! ${err.code} ${err.message}`);\n    });\n  } catch(err){\n    console.error(`getBundleName failed! ${err.code} ${err.message}`);\n  }\n}\ntry {\n  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);\n} catch(err) {\n  console.error(`getWantAgent failed! ${err.code} ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentgetuid",
      children: "wantAgent.getUid"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getUid(agent: WantAgent, callback: AsyncCallback<number>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取WantAgent实例所属应用的UID，使用callback异步回调。"
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
            children: "agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取WantAgent实例所属应用的UID的回调方法。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts-errcode/errorcode-ability/errorcode-ability",
        children: "元能力子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service busy. There are concurrent tasks. Try again later."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid wantAgent object."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { wantAgent, Want } from '@kit.AbilityKit';\nimport type { WantAgent } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// wantAgent对象\nlet wantAgentData: WantAgent;\n// WantAgentInfo对象\nlet wantAgentInfo: wantAgent.WantAgentInfo = {\n  wants: [\n    {\n      deviceId: 'deviceId',\n      bundleName: 'com.example.myapplication',\n      abilityName: 'EntryAbility',\n      action: 'action1',\n      entities: ['entity1'],\n      type: 'MIMETYPE',\n      uri: 'key={true,true,false}',\n      parameters:\n      {\n        mykey0: 2222,\n        mykey1: [1, 2, 3],\n        mykey2: '[1, 2, 3]',\n        mykey3: 'ssssssssssssssssssssssssss',\n        mykey4: [false, true, false],\n        mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n        mykey6: true,\n      }\n    } as Want\n  ],\n  actionType: wantAgent.OperationType.START_ABILITY,\n  requestCode: 0,\n  wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n};\n\n// getWantAgent回调\nfunction getWantAgentCallback(err: BusinessError, data: WantAgent) {\n  if (err) {\n    console.error(`getWantAgent failed, code: ${err.code}, message: ${err.message}.`);\n  } else {\n    wantAgentData = data;\n  }\n  // getUid回调\n  let getUidCallback = (err: BusinessError, data: number) => {\n    if (err) {\n      console.error(`getUid failed, err code: ${err.code}, err msg: ${err.message}.`);\n    } else {\n      console.info(`getUid ok, data: ${JSON.stringify(data)}.`);\n    }\n  }\n  try {\n    wantAgent.getUid(wantAgentData, getUidCallback);\n  } catch (err) {\n    let code = (err as BusinessError).code;\n    let msg = (err as BusinessError).message;\n    console.error(`getUid failed, err code: ${code}, err msg: ${msg}.`);\n  }\n}\n\ntry {\n  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);\n} catch (err) {\n  let code = (err as BusinessError).code;\n  let msg = (err as BusinessError).message;\n  console.error(`getWantAgent failed, err code: ${code}, err msg: ${msg}.`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentgetuid-1",
      children: "wantAgent.getUid"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getUid(agent: WantAgent): Promise<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取WantAgent实例所属应用的UID。使用Promise异步回调。"
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
            children: "agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent对象。"
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
            children: "Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回获取WantAgent实例所属应用的UID。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts-errcode/errorcode-ability/errorcode-ability",
        children: "元能力子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service busy. There are concurrent tasks. Try again later."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid wantAgent object."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { wantAgent, Want } from '@kit.AbilityKit';\nimport type { WantAgent } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// wantAgent对象\nlet wantAgentData: WantAgent;\n// WantAgentInfo对象\nlet wantAgentInfo: wantAgent.WantAgentInfo = {\n  wants: [\n    {\n      deviceId: 'deviceId',\n      bundleName: 'com.example.myapplication',\n      abilityName: 'EntryAbility',\n      action: 'action1',\n      entities: ['entity1'],\n      type: 'MIMETYPE',\n      uri: 'key={true,true,false}',\n      parameters:\n      {\n        mykey0: 2222,\n        mykey1: [1, 2, 3],\n        mykey2: '[1, 2, 3]',\n        mykey3: 'ssssssssssssssssssssssssss',\n        mykey4: [false, true, false],\n        mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n        mykey6: true,\n      }\n    } as Want\n  ],\n  actionType: wantAgent.OperationType.START_ABILITY,\n  requestCode: 0,\n  wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n};\n\n// getWantAgent回调\nfunction getWantAgentCallback(err: BusinessError, data: WantAgent) {\n  if (err) {\n    console.error(`getWantAgent failed, err code: ${err.code}, err msg: ${err.message}.`);\n  } else {\n    wantAgentData = data;\n  }\n  try {\n    wantAgent.getUid(wantAgentData).then((data) => {\n      console.info(`getUid ok, data: ${JSON.stringify(data)}.`);\n    }).catch((err: BusinessError) => {\n      console.error(`getUid failed, err code: ${err.code}, err msg: ${err.message}.`);\n    });\n  } catch (err) {\n    let code = (err as BusinessError).code;\n    let msg = (err as BusinessError).message;\n    console.error(`getUid failed, err code: ${code}, err msg: ${msg}.`);\n  }\n}\n\ntry {\n  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);\n} catch (err) {\n  let code = (err as BusinessError).code;\n  let msg = (err as BusinessError).message;\n  console.error(`getWantAgent failed, err code: ${code}, err msg: ${msg}.`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentcancel",
      children: "wantAgent.cancel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cancel(agent: WantAgent, callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消WantAgent实例，使用callback异步回调。"
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
            children: "agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当取消WantAgent实例成功，err为undefined，否则err为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts-errcode/errorcode-ability/errorcode-ability",
        children: "元能力子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service busy. There are concurrent tasks. Try again later."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid wantAgent object."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { wantAgent, Want } from '@kit.AbilityKit';\nimport type { WantAgent } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// wantAgent对象\nlet wantAgentData: WantAgent;\n// WantAgentInfo对象\nlet wantAgentInfo: wantAgent.WantAgentInfo = {\n  wants: [\n    {\n      deviceId: 'deviceId',\n      bundleName: 'com.example.myapplication',\n      abilityName: 'EntryAbility',\n      action: 'action1',\n      entities: ['entity1'],\n      type: 'MIMETYPE',\n      uri: 'key={true,true,false}',\n      parameters:\n      {\n        mykey0: 2222,\n        mykey1: [1, 2, 3],\n        mykey2: '[1, 2, 3]',\n        mykey3: 'ssssssssssssssssssssssssss',\n        mykey4: [false, true, false],\n        mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n        mykey6: true,\n      }\n    } as Want\n  ],\n  actionType: wantAgent.OperationType.START_ABILITY,\n  requestCode: 0,\n  wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n};\n\n// getWantAgent回调\nfunction getWantAgentCallback(err: BusinessError, data: WantAgent) {\n  if (err) {\n    console.error(`getWantAgent failed, err code: ${err.code}, err msg: ${err.message}.`);\n  } else {\n    wantAgentData = data;\n  }\n  // cancel回调\n  let cancelCallback = (err: BusinessError, data: void) => {\n    if (err) {\n      console.error(`cancel failed, err code: ${err.code}, err msg: ${err.message}.`);\n    } else {\n      console.info(`cancel sucecss.`);\n    }\n  }\n  try {\n    wantAgent.cancel(wantAgentData, cancelCallback);\n  } catch (err) {\n    let code = (err as BusinessError).code;\n    let msg = (err as BusinessError).message;\n    console.error(`cancel failed, err code: ${code}, err msg: ${msg}.`);\n  }\n}\n\ntry {\n  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);\n} catch (err) {\n  let code = (err as BusinessError).code;\n  let msg = (err as BusinessError).message;\n  console.error(`getWantAgent failed, err code: ${code}, err msg: ${msg}.`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentcancel-1",
      children: "wantAgent.cancel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cancel(agent: WantAgent): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消WantAgent实例。使用Promise异步回调。"
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
            children: "agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent对象。"
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
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts-errcode/errorcode-ability/errorcode-ability",
        children: "元能力子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service busy. There are concurrent tasks. Try again later."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid wantAgent object."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { wantAgent, Want } from '@kit.AbilityKit';\nimport type { WantAgent } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// wantAgent对象\nlet wantAgentData: WantAgent;\n// WantAgentInfo对象\nlet wantAgentInfo: wantAgent.WantAgentInfo = {\n  wants: [\n    {\n      deviceId: 'deviceId',\n      bundleName: 'com.example.myapplication',\n      abilityName: 'EntryAbility',\n      action: 'action1',\n      entities: ['entity1'],\n      type: 'MIMETYPE',\n      uri: 'key={true,true,false}',\n      parameters:\n      {\n        mykey0: 2222,\n        mykey1: [1, 2, 3],\n        mykey2: '[1, 2, 3]',\n        mykey3: 'ssssssssssssssssssssssssss',\n        mykey4: [false, true, false],\n        mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n        mykey6: true,\n      }\n    } as Want\n  ],\n  actionType: wantAgent.OperationType.START_ABILITY,\n  requestCode: 0,\n  wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n};\n\n// getWantAgent回调\nfunction getWantAgentCallback(err: BusinessError, data: WantAgent) {\n  if (err) {\n    console.error(`getWantAgent failed, err code: ${err.code}, err msg: ${err.message}.`);\n  } else {\n    wantAgentData = data;\n  }\n  try {\n    wantAgent.cancel(wantAgentData).then((data) => {\n      console.info('cancel success.');\n    }).catch((err: BusinessError) => {\n      console.error(`cancel failed, err code: ${err.code}, err msg: ${err.message}.`);\n    });\n  } catch (err) {\n    let code = (err as BusinessError).code;\n    let msg = (err as BusinessError).message;\n    console.error(`cancel failed, err code: ${code}, err msg: ${msg}.`);\n  }\n}\n\ntry {\n  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);\n} catch (err) {\n  let code = (err as BusinessError).code;\n  let msg = (err as BusinessError).message;\n  console.error(`getWantAgent failed, err code: ${code}, err msg: ${msg}.`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagenttrigger",
      children: "wantAgent.trigger"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "trigger(agent: WantAgent, triggerInfo: TriggerInfo, callback?: AsyncCallback<CompleteData>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触发WantAgent实例，执行指定的操作（启动Ability、发送公共事件等）。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这里所执行的操作类型，是在创建WantAgent实例时通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/wantagent/js-apis-inner-wantagent-wantagentinfo/js-apis-inner-wantagent-wantagentinfo",
        children: "WantAgentInfo"
      }), "参数中的actionType属性指定的。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "triggerInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/wantagent/js-apis-inner-wantagent-triggerinfo/js-apis-inner-wantagent-triggerinfo",
              children: "TriggerInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示触发WantAgent实例时携带的信息，如自定义的extraInfos。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#completedata",
              children: "CompleteData"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当主动触发WantAgent实例成功，err为undefined，data为主动触发返回的数据；否则err为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
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
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
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
        children: "import { wantAgent, Want } from '@kit.AbilityKit';\nimport type { WantAgent } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// wantAgent对象\nlet wantAgentData: WantAgent;\n// triggerInfo\nlet triggerInfo: wantAgent.TriggerInfo = {\n  code: 0 // 自定义结果码\n};\n// WantAgentInfo对象\nlet wantAgentInfo: wantAgent.WantAgentInfo = {\n  wants: [\n    {\n      deviceId: 'deviceId',\n      bundleName: 'com.example.myapplication',\n      abilityName: 'EntryAbility',\n      action: 'action1',\n      entities: ['entity1'],\n      type: 'MIMETYPE',\n      uri: 'key={true,true,false}',\n      parameters:\n      {\n        mykey0: 2222,\n        mykey1: [1, 2, 3],\n        mykey2: '[1, 2, 3]',\n        mykey3: 'ssssssssssssssssssssssssss',\n        mykey4: [false, true, false],\n        mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n        mykey6: true,\n      }\n    } as Want\n  ],\n  actionType: wantAgent.OperationType.START_ABILITY,\n  requestCode: 0,\n  wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n};\n\n// getWantAgent回调\nfunction getWantAgentCallback(err: BusinessError, data: WantAgent) {\n  if (err) {\n    console.info(`getWantAgent failed, code: ${err.code}, message: ${err.message}`);\n  } else {\n    wantAgentData = data;\n  }\n  // trigger回调\n  let triggerCallback = (err: BusinessError, data: wantAgent.CompleteData) => {\n    if (err) {\n      console.error(`trigger failed, code: ${err.code}, message: ${err.message}`);\n    } else {\n      console.info(`trigger success, data: ${JSON.stringify(data)}`);\n    }\n  }\n  try {\n    wantAgent.trigger(wantAgentData, triggerInfo, triggerCallback);\n  } catch (err) {\n    let code = (err as BusinessError).code;\n    let msg = (err as BusinessError).message;\n    console.error(`trigger failed, code: ${code}, message: ${msg}.`);\n  }\n}\n\ntry {\n  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);\n} catch (err) {\n  let code = (err as BusinessError).code;\n  let msg = (err as BusinessError).message;\n  console.error(`getWantAgent failed, code: ${code}, message: ${msg}.`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentequal",
      children: "wantAgent.equal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "equal(agent: WantAgent, otherAgent: WantAgent, callback: AsyncCallback<boolean>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断两个WantAgent实例是否相等，使用callback异步回调，以此来确定是否是来自同一应用的相同操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当两个WantAgent实例由当前用户下的同一应用使用相同的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/wantagent/js-apis-inner-wantagent-wantagentinfo/js-apis-inner-wantagent-wantagentinfo",
        children: "WantAgentInfo"
      }), "信息创建，并且实例未被", (0,jsx_runtime.jsx)(_components.a, {
        href: "#wantagentcancel",
        children: "cancel"
      }), "取消，这两个实例相等。在通知（携带WantAgent实例）场景，通知更新时会比较2个通知中的WantAgent实例，不相等时会把旧通知的WantAgent实例删除。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "otherAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断两个WantAgent实例是否相等的回调方法。返回true表示两个WantAgent实例相等，false表示两个WantAgent实例不相等。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
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
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
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
        children: "import { wantAgent, Want } from '@kit.AbilityKit';\nimport type { WantAgent } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// wantAgent对象\nlet wantAgent1: WantAgent;\nlet wantAgent2: WantAgent;\n// WantAgentInfo对象\nlet wantAgentInfo: wantAgent.WantAgentInfo = {\n  wants: [\n    {\n      deviceId: 'deviceId',\n      bundleName: 'com.example.myapplication',\n      abilityName: 'EntryAbility',\n      action: 'action1',\n      entities: ['entity1'],\n      type: 'MIMETYPE',\n      uri: 'key={true,true,false}',\n      parameters:\n      {\n        mykey0: 2222,\n        mykey1: [1, 2, 3],\n        mykey2: '[1, 2, 3]',\n        mykey3: 'ssssssssssssssssssssssssss',\n        mykey4: [false, true, false],\n        mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n        mykey6: true,\n      }\n    } as Want\n  ],\n  actionType: wantAgent.OperationType.START_ABILITY,\n  requestCode: 0,\n  wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n};\n\n// getWantAgent回调\nfunction getWantAgentCallback(err: BusinessError, data: WantAgent) {\n  if (err) {\n    console.error(`getWantAgent failed, code: ${JSON.stringify(err.code)}, message: ${JSON.stringify(err.message)}`);\n  } else {\n    wantAgent1 = data;\n    wantAgent2 = data;\n  }\n  // equal回调\n  let equalCallback = (err: BusinessError, data: boolean) => {\n    if (err) {\n      console.error(`equal failed! ${err.code} ${err.message}`);\n    } else {\n      console.info(`equal ok! ${JSON.stringify(data)}`);\n    }\n  }\n  try {\n    wantAgent.equal(wantAgent1, wantAgent2, equalCallback);\n  } catch (err) {\n    console.error(`equal failed! ${(err as BusinessError).code} ${(err as BusinessError).message}`);\n  }\n}\n\ntry {\n  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);\n} catch (err) {\n  console.error(`getWantAgent failed! ${(err as BusinessError).code} ${(err as BusinessError).message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentequal-1",
      children: "wantAgent.equal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "equal(agent: WantAgent, otherAgent: WantAgent): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断两个WantAgent实例是否相等，使用Promise异步回调，以此来确定是否是来自同一应用的相同操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当两个WantAgent实例由当前用户下的同一应用使用相同的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/wantagent/js-apis-inner-wantagent-wantagentinfo/js-apis-inner-wantagent-wantagentinfo",
        children: "WantAgentInfo"
      }), "信息创建，并且实例未被", (0,jsx_runtime.jsx)(_components.a, {
        href: "#wantagentcancel",
        children: "cancel"
      }), "取消，这两个实例相等。在通知（携带WantAgent实例）场景，通知更新时会比较2个通知中的WantAgent实例，不相等时会把旧通知的WantAgent实例删除。"]
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
            children: "agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "otherAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent对象。"
          })]
        })]
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
            children: "Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回获取判断两个WantAgent实例是否相等的结果。返回true表示两个WantAgent实例相等，false表示两个WantAgent实例不相等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
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
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
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
        children: "import { wantAgent, Want } from '@kit.AbilityKit';\nimport type { WantAgent } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// wantAgent对象\nlet wantAgent1: WantAgent;\nlet wantAgent2: WantAgent;\n// WantAgentInfo对象\nlet wantAgentInfo: wantAgent.WantAgentInfo = {\n  wants: [\n    {\n      deviceId: 'deviceId',\n      bundleName: 'com.example.myapplication',\n      abilityName: 'EntryAbility',\n      action: 'action1',\n      entities: ['entity1'],\n      type: 'MIMETYPE',\n      uri: 'key={true,true,false}',\n      parameters:\n      {\n        mykey0: 2222,\n        mykey1: [1, 2, 3],\n        mykey2: '[1, 2, 3]',\n        mykey3: 'ssssssssssssssssssssssssss',\n        mykey4: [false, true, false],\n        mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n        mykey6: true,\n      }\n    } as Want\n  ],\n  actionType: wantAgent.OperationType.START_ABILITY,\n  requestCode: 0,\n  wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n};\n\n// getWantAgent回调\nfunction getWantAgentCallback(err: BusinessError, data: WantAgent) {\n  if (err) {\n    console.error(`getWantAgent failed, code: ${JSON.stringify(err.code)}, message: ${JSON.stringify(err.message)}`);\n  } else {\n    wantAgent1 = data;\n    wantAgent2 = data;\n  }\n  try {\n    wantAgent.equal(wantAgent1, wantAgent2).then((data) => {\n      console.info(`equal ok! ${JSON.stringify(data)}`);\n    }).catch((err: BusinessError) => {\n      console.error(`equal failed! ${err.code} ${err.message}`);\n    })\n  } catch (err) {\n    console.error(`equal failed! ${(err as BusinessError).code} ${(err as BusinessError).message}`);\n  }\n}\n\ntry {\n  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);\n} catch (err) {\n  console.error(`getWantAgent failed! ${(err as BusinessError).code} ${(err as BusinessError).message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentgetoperationtype",
      children: "wantAgent.getOperationType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getOperationType(agent: WantAgent, callback: AsyncCallback<number>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取一个WantAgent实例的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#operationtype",
        children: "OperationType"
      }), "信息，使用callback异步回调。"]
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
            children: "agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当获取一个WantAgent的OperationType信息成功，err为undefined，data为OperationType；否则err为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts-errcode/errorcode-ability/errorcode-ability",
        children: "元能力子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service busy. There are concurrent tasks. Try again later."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000015"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service timeout."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid wantAgent object."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { wantAgent, Want } from '@kit.AbilityKit';\nimport type { WantAgent } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// wantAgent对象\nlet wantAgentData: WantAgent;\n// WantAgentInfo对象\nlet wantAgentInfo: wantAgent.WantAgentInfo = {\n  wants: [\n    {\n      deviceId: 'deviceId',\n      bundleName: 'com.example.myapplication',\n      abilityName: 'EntryAbility',\n      action: 'action1',\n      entities: ['entity1'],\n      type: 'MIMETYPE',\n      uri: 'key={true,true,false}',\n      parameters:\n      {\n        mykey0: 2222,\n        mykey1: [1, 2, 3],\n        mykey2: '[1, 2, 3]',\n        mykey3: 'ssssssssssssssssssssssssss',\n        mykey4: [false, true, false],\n        mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n        mykey6: true,\n      }\n    } as Want\n  ],\n  actionType: wantAgent.OperationType.START_ABILITY,\n  requestCode: 0,\n  wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n};\n\n// getWantAgent回调\nfunction getWantAgentCallback(err: BusinessError, data: WantAgent) {\n  if (err) {\n    console.error(`getWantAgent failed, code: ${JSON.stringify(err.code)}, message: ${JSON.stringify(err.message)}`);\n  } else {\n    wantAgentData = data;\n  }\n  // getOperationTypeCallback回调\n  let getOperationTypeCallback = (err: BusinessError, data: number) => {\n    if (err) {\n      console.error(`getOperationType failed! ${err.code} ${err.message}`);\n    } else {\n      console.info(`getOperationType ok! ${JSON.stringify(data)}`);\n    }\n  }\n  try {\n    wantAgent.getOperationType(wantAgentData, getOperationTypeCallback);\n  } catch (err) {\n    console.error(`getOperationTypeCallback failed! ${(err as BusinessError).code} ${(err as BusinessError).message}`);\n  }\n}\n\ntry {\n  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);\n} catch (err) {\n  console.error(`getWantAgent failed! ${(err as BusinessError).code} ${(err as BusinessError).message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentgetoperationtype-1",
      children: "wantAgent.getOperationType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getOperationType(agent: WantAgent): Promise<number>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取一个WantAgent实例的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#operationtype",
        children: "OperationType"
      }), "信息。使用Promise异步回调。"]
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
            children: "agent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent对象。"
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
            children: "Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回OperationType的结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts-errcode/errorcode-ability/errorcode-ability",
        children: "元能力子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service busy. There are concurrent tasks. Try again later."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000015"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Service timeout."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16000151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid wantAgent object."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { wantAgent, Want } from '@kit.AbilityKit';\nimport type { WantAgent } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// wantAgent对象\nlet wantAgentData: WantAgent;\n// WantAgentInfo对象\nlet wantAgentInfo: wantAgent.WantAgentInfo = {\n  wants: [\n    {\n      deviceId: 'deviceId',\n      bundleName: 'com.example.myapplication',\n      abilityName: 'EntryAbility',\n      action: 'action1',\n      entities: ['entity1'],\n      type: 'MIMETYPE',\n      uri: 'key={true,true,false}',\n      parameters:\n      {\n        mykey0: 2222,\n        mykey1: [1, 2, 3],\n        mykey2: '[1, 2, 3]',\n        mykey3: 'ssssssssssssssssssssssssss',\n        mykey4: [false, true, false],\n        mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n        mykey6: true,\n      }\n    } as Want\n  ],\n  actionType: wantAgent.OperationType.START_ABILITY,\n  requestCode: 0,\n  wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n};\n\n// getWantAgent回调\nfunction getWantAgentCallback(err: BusinessError, data: WantAgent) {\n  if (err) {\n    console.error(`getWantAgent failed, code: ${JSON.stringify(err.code)}, message: ${JSON.stringify(err.message)}`);\n  } else {\n    wantAgentData = data;\n  }\n  try {\n    wantAgent.getOperationType(wantAgentData).then((data) => {\n      console.info(`getOperationType ok! ${JSON.stringify(data)}`);\n    }).catch((err: BusinessError) => {\n      console.error(`getOperationType failed! ${err.code} ${err.message}`);\n    });\n  } catch (err) {\n    console.error(`getOperationType failed! ${(err as BusinessError).code} ${(err as BusinessError).message}`);\n  }\n}\n\ntry {\n  wantAgent.getWantAgent(wantAgentInfo, getWantAgentCallback);\n} catch (err) {\n  console.error(`getWantAgent failed! ${(err as BusinessError).code} ${(err as BusinessError).message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentflags",
      children: "WantAgentFlags"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示WantAgent行为控制标志，用于配置WantAgent的创建和触发行为。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ONE_TIME_FLAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent仅能使用一次，trigger触发后自动cancel取消。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NO_BUILD_FLAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果描述WantAgent对象不存在，则不创建它，直接返回null。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CANCEL_PRESENT_FLAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在生成一个新的WantAgent对象前取消已存在的一个WantAgent对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE_PRESENT_FLAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用新的WantAgent的额外数据替换已存在的WantAgent中的额外数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONSTANT_FLAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent是不可变的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REPLACE_ELEMENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前Want中的element属性可被WantAgent.trigger()中Want的element属性取代。当前版本暂不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REPLACE_ACTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前Want中的action属性可被WantAgent.trigger()中Want的action属性取代。当前版本暂不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REPLACE_URI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前Want中的uri属性可被WantAgent.trigger()中Want的uri属性取代。当前版本暂不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REPLACE_ENTITIES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前Want中的entities属性可被WantAgent.trigger()中Want的entities属性取代。当前版本暂不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REPLACE_BUNDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前Want中的bundleName属性可被WantAgent.trigger()中Want的bundleName属性取代。当前版本暂不支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "operationtype",
      children: "OperationType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示WantAgent支持的操作类型。"
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
            children: "UNKNOWN_TYPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不识别的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "START_ABILITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启一个有页面的Ability。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "START_ABILITIES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启多个有页面的Ability。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "START_SERVICE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开启一个无页面的Ability（仅在FA模型下生效）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SEND_COMMON_EVENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送一个公共事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "completedata",
      children: "CompleteData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示主动触发WantAgent返回的数据。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发的wantAgent。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "want"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
              children: "Want"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发wantAgent时实际使用的want信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "finalCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发wantAgent的返回码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "finalData"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发wantAgent的返回数据。返回\"canceled\"时表示触发失败，WantAgent实例已经被取消。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extraInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, Object>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "额外数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "triggerinfo",
      children: "TriggerInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type TriggerInfo = _TriggerInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TriggerInfo对象。"
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
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/wantagent/js-apis-inner-wantagent-triggerinfo/js-apis-inner-wantagent-triggerinfo",
              children: "_TriggerInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TriggerInfo对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentinfo",
      children: "WantAgentInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type WantAgentInfo = _WantAgentInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WantAgentInfo对象。"
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
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/wantagent/js-apis-inner-wantagent-wantagentinfo/js-apis-inner-wantagent-wantagentinfo",
              children: "_WantAgentInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgentInfo对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagent",
      children: "WantAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type WantAgent = object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WantAgent对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Ability.AbilityRuntime.Core"]
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
            children: "object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WantAgent对象。"
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
411633(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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