"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["396647"], {
78937(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ability_api_ability_arkts_ability_arkts_dep_js_apis_wantagent_js_apis_wantagent_md_6f2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ability-api-ability-arkts-ability-arkts-dep-js-apis-wantagent-js-apis-wantagent-md-6f2.json
var site_docs_ref_ability_api_ability_arkts_ability_arkts_dep_js_apis_wantagent_js_apis_wantagent_md_6f2_namespaceObject = JSON.parse('{"id":"ability-api/ability-arkts/ability-arkts-dep/js-apis-wantagent/js-apis-wantagent","title":"@ohos.wantAgent (WantAgent模块)","description":"WantAgent模块提供了创建WantAgent实例、获取实例的用户ID、获取want信息、比较WantAgent实例和获取bundle名称等能力。","source":"@site/docs-ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-wantagent/js-apis-wantagent.md","sourceDirName":"ability-api/ability-arkts/ability-arkts-dep/js-apis-wantagent","slug":"/ability-api/ability-arkts/ability-arkts-dep/js-apis-wantagent/js-apis-wantagent","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-wantagent/js-apis-wantagent","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"@ohos.wantAgent (WantAgent模块)","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-wantagent","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-wantagent"},"sidebar":"ref","previous":{"title":"@ohos.application.Want (Want)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-application-want/js-apis-application-want"},"next":{"title":"@ohos.bundle (Bundle模块)","permalink":"/harmonyos-docs-site/ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-bundle/js-apis-bundle"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ability-api/ability-arkts/ability-arkts-dep/js-apis-wantagent/js-apis-wantagent.md


const frontMatter = {
	title: '@ohos.wantAgent (WantAgent模块)',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-wantagent',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-wantagent'
};
const contentTitle = '@ohos.wantAgent (WantAgent模块)';

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
        id: "ohoswantagent-wantagent模块",
        children: "@ohos.wantAgent (WantAgent模块)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WantAgent模块提供了创建WantAgent实例、获取实例的用户ID、获取want信息、比较WantAgent实例和获取bundle名称等能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(139714)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块首批接口从API version 7开始支持，从API version 9废弃，替换模块为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-wantagent/js-apis-app-ability-wantagent",
        children: "@ohos.app.ability.wantAgent"
      }), "。后续版本的新增接口，采用上角标单独标记接口的起始版本。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import wantAgent from '@ohos.wantAgent';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentgetwantagent",
      children: "wantAgent.getWantAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getWantAgent(info: WantAgentInfo, callback: AsyncCallback<WantAgent>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建WantAgent。创建失败返回的WantAgent为空值。使用callback异步回调。"
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
            children: "WantAgent信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<WantAgent>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建WantAgent的回调方法。"
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
        children: "import wantAgent, { WantAgent as _WantAgent } from '@ohos.wantAgent';\nimport { BusinessError } from '@ohos.base';\n\n// getWantAgent回调\nfunction getWantAgentCallback(err: BusinessError, data: _WantAgent) {\n    if (err.code) {\n        console.info('getWantAgent Callback err:' + JSON.stringify(err));\n    } else {\n        console.info('getWantAgent Callback success');\n    }\n}\n\nwantAgent.getWantAgent({\n    wants: [\n        {\n            deviceId: 'deviceId',\n            bundleName: 'com.neu.setResultOnAbilityResultTest1',\n            abilityName: 'com.example.test.EntryAbility',\n            action: 'action1',\n            entities: ['entity1'],\n            type: 'MIMETYPE',\n            uri: 'key={true,true,false}',\n            parameters:\n            {\n                mykey0: 2222,\n                mykey1: [1, 2, 3],\n                mykey2: '[1, 2, 3]',\n                mykey3: 'ssssssssssssssssssssssssss',\n                mykey4: [false, true, false],\n                mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n                mykey6: true,\n            }\n        }\n    ],\n    operationType: wantAgent.OperationType.START_ABILITY,\n    requestCode: 0,\n    wantAgentFlags:[wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n}, getWantAgentCallback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentgetwantagent-1",
      children: "wantAgent.getWantAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getWantAgent(info: WantAgentInfo): Promise<WantAgent>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建WantAgent。创建失败返回的WantAgent为空值。使用Promise异步回调。"
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
            children: "WantAgent信息。"
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
            children: "Promise<WantAgent>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以Promise形式返回WantAgent。"
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
        children: "import wantAgent, { WantAgent as _WantAgent } from '@ohos.wantAgent';\n\nwantAgent.getWantAgent({\n    wants: [\n        {\n            deviceId: 'deviceId',\n            bundleName: 'com.neu.setResultOnAbilityResultTest1',\n            abilityName: 'com.example.test.EntryAbility',\n            action: 'action1',\n            entities: ['entity1'],\n            type: 'MIMETYPE',\n            uri: 'key={true,true,false}',\n            parameters:\n            {\n                mykey0: 2222,\n                mykey1: [1, 2, 3],\n                mykey2: '[1, 2, 3]',\n                mykey3: 'ssssssssssssssssssssssssss',\n                mykey4: [false, true, false],\n                mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n                mykey6: true,\n            }\n        }\n    ],\n    operationType: wantAgent.OperationType.START_ABILITY,\n    requestCode: 0,\n    wantAgentFlags:[wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n}).then((data: _WantAgent) => {\n    console.info('==========================>getWantAgentCallback=======================>');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentgetbundlename",
      children: "wantAgent.getBundleName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBundleName(agent: WantAgent, callback: AsyncCallback<string>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取WantAgent实例的Bundle名称。使用callback异步回调。"
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
            children: "获取WantAgent实例的包名的回调方法。"
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
        children: "import wantAgent, { WantAgent as _WantAgent } from '@ohos.wantAgent';\nimport { BusinessError } from '@ohos.base';\n\n// wantAgent对象\nlet wantAgentObj: _WantAgent;\n\n// getWantAgent回调\nfunction getWantAgentCallback(err: BusinessError, data: _WantAgent) {\n    console.info('==========================>getWantAgentCallback=======================>');\n    if (err.code == 0) {\n        wantAgentObj = data;\n    } else {\n        console.error('getWantAgent failed, error: ' + JSON.stringify(err));\n        return;\n    }\n\n    // getBundleName回调\n    let getBundleNameCallback = (err: BusinessError, data: string) => {\n        console.info('==========================>getBundleNameCallback=======================>');\n    }\n    wantAgent.getBundleName(wantAgentObj, getBundleNameCallback);\n}\n\nwantAgent.getWantAgent({\n    wants: [\n        {\n            deviceId: 'deviceId',\n            bundleName: 'com.neu.setResultOnAbilityResultTest1',\n            abilityName: 'com.example.test.EntryAbility',\n            action: 'action1',\n            entities: ['entity1'],\n            type: 'MIMETYPE',\n            uri: 'key={true,true,false}',\n            parameters:\n            {\n                mykey0: 2222,\n                mykey1: [1, 2, 3],\n                mykey2: '[1, 2, 3]',\n                mykey3: 'ssssssssssssssssssssssssss',\n                mykey4: [false, true, false],\n                mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n                mykey6: true,\n            }\n        }\n    ],\n    operationType: wantAgent.OperationType.START_ABILITY,\n    requestCode: 0,\n    wantAgentFlags:[wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n}, getWantAgentCallback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentgetbundlename-1",
      children: "wantAgent.getBundleName"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBundleName(agent: WantAgent): Promise<string>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取WantAgent实例的Bundle名称。使用Promise异步回调。"
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
            children: "以Promise形式返回获取WantAgent实例的Bundle名称。"
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
        children: "import wantAgent, { WantAgent as _WantAgent } from '@ohos.wantAgent';\n\n// wantAgent对象\nlet wantAgentObj: _WantAgent;\n\nwantAgent.getWantAgent({\n    wants: [\n        {\n            deviceId: 'deviceId',\n            bundleName: 'com.neu.setResultOnAbilityResultTest1',\n            abilityName: 'com.example.test.EntryAbility',\n            action: 'action1',\n            entities: ['entity1'],\n            type: 'MIMETYPE',\n            uri: 'key={true,true,false}',\n            parameters:\n            {\n                mykey0: 2222,\n                mykey1: [1, 2, 3],\n                mykey2: '[1, 2, 3]',\n                mykey3: 'ssssssssssssssssssssssssss',\n                mykey4: [false, true, false],\n                mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n                mykey6: true,\n            }\n        }\n    ],\n    operationType: wantAgent.OperationType.START_ABILITY,\n    requestCode: 0,\n    wantAgentFlags:[wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n}).then((data: _WantAgent) => {\n    console.info('==========================>getWantAgentCallback=======================>');\n    wantAgentObj = data;\n    if (wantAgentObj) {\n        wantAgent.getBundleName(wantAgentObj).then((data) => {\n            console.info('==========================>getBundleNameCallback=======================>');\n        });\n    }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentgetuid",
      children: "wantAgent.getUid"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getUid(agent: WantAgent, callback: AsyncCallback<number>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取WantAgent实例的用户ID。使用callback异步回调。"
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
            children: "获取WantAgent实例的用户ID的回调方法。"
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
        children: "import wantAgent, { WantAgent as _WantAgent } from '@ohos.wantAgent';\nimport { BusinessError } from '@ohos.base';\n\n// wantAgent对象\nlet wantAgentObj: _WantAgent;\n\n// getWantAgent回调\nfunction getWantAgentCallback(err: BusinessError, data: _WantAgent) {\n    console.info('==========================>getWantAgentCallback=======================>');\n    if (err.code == 0) {\n        wantAgentObj = data;\n    } else {\n        console.error('getWantAgent failed, error: ' + JSON.stringify(err));\n        return;\n    }\n\n    // getUid回调\n    let getUidCallback = (err: BusinessError, data: number) => {\n        console.info('==========================>getUidCallback=======================>');\n    }\n    wantAgent.getUid(wantAgentObj, getUidCallback);\n}\n\nwantAgent.getWantAgent({\n    wants: [\n        {\n            deviceId: 'deviceId',\n            bundleName: 'com.neu.setResultOnAbilityResultTest1',\n            abilityName: 'com.example.test.EntryAbility',\n            action: 'action1',\n            entities: ['entity1'],\n            type: 'MIMETYPE',\n            uri: 'key={true,true,false}',\n            parameters:\n            {\n                mykey0: 2222,\n                mykey1: [1, 2, 3],\n                mykey2: '[1, 2, 3]',\n                mykey3: 'ssssssssssssssssssssssssss',\n                mykey4: [false, true, false],\n                mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n                mykey6: true,\n            }\n        }\n    ],\n    operationType: wantAgent.OperationType.START_ABILITY,\n    requestCode: 0,\n    wantAgentFlags:[wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n}, getWantAgentCallback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentgetuid-1",
      children: "wantAgent.getUid"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getUid(agent: WantAgent): Promise<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取WantAgent实例的用户ID。使用Promise异步回调。"
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
            children: "以Promise形式返回获取WantAgent实例的用户ID。"
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
        children: "import wantAgent, { WantAgent as _WantAgent } from '@ohos.wantAgent';\n\n// wantAgent对象\nlet wantAgentObj: _WantAgent;\n\nwantAgent.getWantAgent({\n    wants: [\n        {\n            deviceId: 'deviceId',\n            bundleName: 'com.neu.setResultOnAbilityResultTest1',\n            abilityName: 'com.example.test.EntryAbility',\n            action: 'action1',\n            entities: ['entity1'],\n            type: 'MIMETYPE',\n            uri: 'key={true,true,false}',\n            parameters:\n            {\n                mykey0: 2222,\n                mykey1: [1, 2, 3],\n                mykey2: '[1, 2, 3]',\n                mykey3: 'ssssssssssssssssssssssssss',\n                mykey4: [false, true, false],\n                mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n                mykey6: true,\n            }\n        }\n    ],\n    operationType: wantAgent.OperationType.START_ABILITY,\n    requestCode: 0,\n    wantAgentFlags:[wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n}).then((data) => {\n    console.info('==========================>getWantAgentCallback=======================>');\n    wantAgentObj = data;\n    if (wantAgentObj) {\n        wantAgent.getUid(wantAgentObj).then((data) => {\n        console.info('==========================>getUidCallback=======================>');\n    });\n    }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentcancel",
      children: "wantAgent.cancel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cancel(agent: WantAgent, callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消WantAgent实例。使用callback异步回调。"
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
            children: "取消WantAgent实例的回调方法。"
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
        children: "import wantAgent, { WantAgent as _WantAgent } from '@ohos.wantAgent';\nimport { BusinessError } from '@ohos.base';\n\n// wantAgent对象\nlet wantAgentObj: _WantAgent;\n\n// getWantAgent回调\nfunction getWantAgentCallback(err: BusinessError, data: _WantAgent) {\n    console.info('==========================>getWantAgentCallback=======================>');\n    if (err.code == 0) {\n        wantAgentObj = data;\n    } else {\n        console.error('getWantAgent failed, error: ' + JSON.stringify(err));\n        return;\n    }\n\n    // cancel回调\n    let cancelCallback = (err: BusinessError) => {\n        console.info('==========================>cancelCallback=======================>');\n    }\n    wantAgent.cancel(wantAgentObj, cancelCallback);\n}\n\nwantAgent.getWantAgent({\n    wants: [\n        {\n            deviceId: 'deviceId',\n            bundleName: 'com.neu.setResultOnAbilityResultTest1',\n            abilityName: 'com.example.test.EntryAbility',\n            action: 'action1',\n            entities: ['entity1'],\n            type: 'MIMETYPE',\n            uri: 'key={true,true,false}',\n            parameters:\n            {\n                mykey0: 2222,\n                mykey1: [1, 2, 3],\n                mykey2: '[1, 2, 3]',\n                mykey3: 'ssssssssssssssssssssssssss',\n                mykey4: [false, true, false],\n                mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n                mykey6: true,\n            }\n        }\n    ],\n    operationType: wantAgent.OperationType.START_ABILITY,\n    requestCode: 0,\n    wantAgentFlags:[wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n}, getWantAgentCallback);\n"
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
            children: "以Promise形式获取异步返回结果。"
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
        children: "import wantAgent, { WantAgent as _WantAgent } from '@ohos.wantAgent';\nimport { BusinessError } from '@ohos.base';\n\n// wantAgent对象\nlet wantAgentObj: _WantAgent;\n\nwantAgent.getWantAgent({\n    wants: [\n    {\n        deviceId: 'deviceId',\n        bundleName: 'com.neu.setResultOnAbilityResultTest1',\n        abilityName: 'com.example.test.EntryAbility',\n        action: 'action1',\n        entities: ['entity1'],\n        type: 'MIMETYPE',\n        uri: 'key={true,true,false}',\n        parameters:\n        {\n            mykey0: 2222,\n            mykey1: [1, 2, 3],\n            mykey2: '[1, 2, 3]',\n            mykey3: 'ssssssssssssssssssssssssss',\n            mykey4: [false, true, false],\n            mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n            mykey6: true,\n        }\n    }\n],\n    operationType: wantAgent.OperationType.START_ABILITY,\n    requestCode: 0,\n    wantAgentFlags:[wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n}).then((data) => {\n    console.info('==========================>getWantAgentCallback=======================>');\n    wantAgentObj = data;\n    if (wantAgentObj) {\n        wantAgent.cancel(wantAgentObj).then((data) => {\n            console.info('==========================>cancelCallback=======================>');\n        });\n    }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagenttrigger",
      children: "wantAgent.trigger"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "trigger(agent: WantAgent, triggerInfo: TriggerInfo, callback?: Callback<CompleteData>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主动激发WantAgent实例。使用callback异步回调。"
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
            children: "TriggerInfo对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<CompleteData>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主动激发WantAgent实例的回调方法。"
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
        children: "import wantAgent, { WantAgent as _WantAgent } from '@ohos.wantAgent';\nimport { BusinessError } from '@ohos.base';\n\n// wantAgent对象\nlet wantAgentObj: _WantAgent;\n\n// getWantAgent回调\nfunction getWantAgentCallback(err: BusinessError, data: _WantAgent) {\n    console.info('==========================>getWantAgentCallback=======================>');\n    if (err.code == 0) {\n        wantAgentObj = data;\n    } else {\n        console.error('getWantAgent failed, error: ' + JSON.stringify(err));\n        return;\n    }\n\n    // trigger回调\n    let triggerCallback = (data: wantAgent.CompleteData) => {\n        console.info('==========================>triggerCallback=======================>');\n    };\n\n    wantAgent.trigger(wantAgentObj, {code:0}, triggerCallback);\n}\n\nwantAgent.getWantAgent({\n    wants: [\n        {\n            deviceId: 'deviceId',\n            bundleName: 'com.neu.setResultOnAbilityResultTest1',\n            abilityName: 'com.example.test.EntryAbility',\n            action: 'action1',\n            entities: ['entity1'],\n            type: 'MIMETYPE',\n            uri: 'key={true,true,false}',\n            parameters:\n            {\n                mykey0: 2222,\n                mykey1: [1, 2, 3],\n                mykey2: '[1, 2, 3]',\n                mykey3: 'ssssssssssssssssssssssssss',\n                mykey4: [false, true, false],\n                mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n                mykey6: true,\n            }\n        }\n    ],\n    operationType: wantAgent.OperationType.START_ABILITY,\n    requestCode: 0,\n    wantAgentFlags:[wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n}, getWantAgentCallback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentequal",
      children: "wantAgent.equal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "equal(agent: WantAgent, otherAgent: WantAgent, callback: AsyncCallback<boolean>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断两个WantAgent实例是否相等，以此来判断是否是来自同一应用的相同操作。使用callback异步回调。"
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
            children: "判断两个WantAgent实例是否相等的回调方法。返回true表示两个WantAgent实例相等；返回false表示不相等。"
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
        children: "import wantAgent, { WantAgent as _WantAgent } from '@ohos.wantAgent';\nimport { BusinessError } from '@ohos.base';\n\n// wantAgent对象\nlet wantAgentObj1: _WantAgent;\nlet wantAgentObj2: _WantAgent;\n\n// getWantAgent回调\nfunction getWantAgentCallback(err: BusinessError, data: _WantAgent) {\n    console.info('==========================>getWantAgentCallback=======================>');\n    if (err.code == 0) {\n        wantAgentObj1 = data;\n        wantAgentObj2 = data;\n    } else {\n        console.error('getWantAgent failed, error: ' + JSON.stringify(err));\n        return;\n    }\n\n    // equal回调\n    let equalCallback = (err: BusinessError, data: boolean) => {\n        console.info('==========================>equalCallback=======================>');\n    };\n    wantAgent.equal(wantAgentObj1, wantAgentObj2, equalCallback);\n}\n\nwantAgent.getWantAgent({\n    wants: [\n        {\n            deviceId: 'deviceId',\n            bundleName: 'com.neu.setResultOnAbilityResultTest1',\n            abilityName: 'com.example.test.EntryAbility',\n            action: 'action1',\n            entities: ['entity1'],\n            type: 'MIMETYPE',\n            uri: 'key={true,true,false}',\n            parameters:\n            {\n                mykey0: 2222,\n                mykey1: [1, 2, 3],\n                mykey2: '[1, 2, 3]',\n                mykey3: 'ssssssssssssssssssssssssss',\n                mykey4: [false, true, false],\n                mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n                mykey6: true,\n            }\n        }\n    ],\n    operationType: wantAgent.OperationType.START_ABILITY,\n    requestCode: 0,\n    wantAgentFlags:[wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n}, getWantAgentCallback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentequal-1",
      children: "wantAgent.equal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "equal(agent: WantAgent, otherAgent: WantAgent): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断两个WantAgent实例是否相等，以此来判断是否是来自同一应用的相同操作。使用Promise异步回调。"
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
            children: "以Promise形式返回获取判断两个WantAgent实例是否相等的结果。返回true表示两个WantAgent实例相等；返回false表示不相等。"
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
        children: "import wantAgent, { WantAgent as _WantAgent } from '@ohos.wantAgent';\n\n// wantAgent对象\nlet wantAgentObj1: _WantAgent;\nlet wantAgentObj2: _WantAgent;\n\nwantAgent.getWantAgent({\n    wants: [\n        {\n            deviceId: 'deviceId',\n            bundleName: 'com.neu.setResultOnAbilityResultTest1',\n            abilityName: 'com.example.test.EntryAbility',\n            action: 'action1',\n            entities: ['entity1'],\n            type: 'MIMETYPE',\n            uri: 'key={true,true,false}',\n            parameters:\n            {\n                mykey0: 2222,\n                mykey1: [1, 2, 3],\n                mykey2: '[1, 2, 3]',\n                mykey3: 'ssssssssssssssssssssssssss',\n                mykey4: [false, true, false],\n                mykey5: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],\n                mykey6: true,\n            }\n        }\n    ],\n    operationType: wantAgent.OperationType.START_ABILITY,\n    requestCode: 0,\n    wantAgentFlags:[wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]\n}).then((data) => {\n    console.info('==========================>getWantAgentCallback=======================>');\n    wantAgentObj1 = data;\n    wantAgentObj2 = data;\n    if (data) {\n        wantAgent.equal(wantAgentObj1, wantAgentObj2).then((data) => {\n            console.info('==========================>equalCallback=======================>');\n        });\n    }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wantagentflags",
      children: "WantAgentFlags"
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
            children: "WantAgent仅能使用一次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NO_BUILD_FLAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "如果指定WantAgent对象不存在，则不创建它，直接返回null。"
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
            children: "当前Want中的element属性可被WantAgent.trigger()中Want的element属性取代。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REPLACE_ACTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前Want中的action属性可被WantAgent.trigger()中Want的action属性取代。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REPLACE_URI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前Want中的uri属性可被WantAgent.trigger()中Want的uri属性取代。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REPLACE_ENTITIES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前Want中的entities属性可被WantAgent.trigger()中Want的entities属性取代。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REPLACE_BUNDLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前Want中的bundleName属性可被WantAgent.trigger()中Want的bundleName属性取代。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "operationtype",
      children: "OperationType"
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
            children: "开启一个无页面的ability。"
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
            children: "Want"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "存在的被触发的want。"
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
            children: "触发wantAgent的请求代码。"
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
            children: "公共事件收集的最终数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extraInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ [key: string]: any }"
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
      id: "wantagent",
      children: "WantAgent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type WantAgent = object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WantAgent对象。"
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
139714(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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