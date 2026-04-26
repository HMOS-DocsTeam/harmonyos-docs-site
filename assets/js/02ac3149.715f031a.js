"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["28221"], {
426040(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_fa_model_development_fa_model_application_components_serviceability_connect_serviceability_connect_serviceability_md_02a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-fa-model-development-fa-model-application-components-serviceability-connect-serviceability-connect-serviceability-md-02a.json
var site_docs_ability_kit_fa_model_development_fa_model_application_components_serviceability_connect_serviceability_connect_serviceability_md_02a_namespaceObject = JSON.parse('{"id":"ability-kit/fa-model-development/fa-model-application-components/serviceability/connect-serviceability/connect-serviceability","title":"连接ServiceAbility","description":"如果ServiceAbility需要与PageAbility或其他应用的ServiceAbility进行交互，则须创建用于连接的Connection。ServiceAbility支持其他Ability通过connectAbility()方法与其进行连接。PageAbility的connectAbility()方法定义在featureAbility中，ServiceAbility的connectAbility()方法定义在particleAbility中。连接ServiceAbility的规则详见组件启动规则章节。在使用connectAbility()处理回调时，需要传入目标Service的Want与IAbilityConnection的实例。IAbilityConnection提供了以下方法供开发者实现。","source":"@site/docs/ability-kit/fa-model-development/fa-model-application-components/serviceability/connect-serviceability/connect-serviceability.md","sourceDirName":"ability-kit/fa-model-development/fa-model-application-components/serviceability/connect-serviceability","slug":"/ability-kit/fa-model-development/fa-model-application-components/serviceability/connect-serviceability/","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/serviceability/connect-serviceability/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"连接ServiceAbility","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/connect-serviceability","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"启动ServiceAbility","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/serviceability/start-serviceability/"},"next":{"title":"DataAbility组件概述","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/fa-model-development/fa-model-application-components/serviceability/connect-serviceability/connect-serviceability.md


const frontMatter = {
	title: '连接ServiceAbility',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/connect-serviceability',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '连接ServiceAbility';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
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
        id: "连接serviceability",
        children: "连接ServiceAbility"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果ServiceAbility需要与PageAbility或其他应用的ServiceAbility进行交互，则须创建用于连接的Connection。ServiceAbility支持其他Ability通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/fa-model/js-apis-ability-featureability/js-apis-ability-featureability#featureabilityconnectability7",
        children: "connectAbility()"
      }), "方法与其进行连接。PageAbility的connectAbility()方法定义在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/fa-model/js-apis-ability-featureability/js-apis-ability-featureability",
        children: "featureAbility"
      }), "中，ServiceAbility的connectAbility()方法定义在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/fa-model/js-apis-ability-particleability/js-apis-ability-particleability",
        children: "particleAbility"
      }), "中。连接ServiceAbility的规则详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/fa-model-development/fa-model-application-components/component-startup-rules-fa",
        children: "组件启动规则"
      }), "章节。在使用connectAbility()处理回调时，需要传入目标Service的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/both-models/js-apis-app-ability-want/js-apis-app-ability-want",
        children: "Want"
      }), "与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-connectoptions/js-apis-inner-ability-connectoptions",
        children: "IAbilityConnection"
      }), "的实例。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-connectoptions/js-apis-inner-ability-connectoptions",
        children: "IAbilityConnection"
      }), "提供了以下方法供开发者实现。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " IAbilityConnection接口说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "onConnect()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于处理连接Service成功的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDisconnect()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用来处理Service异常死亡的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onFailed()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用来处理连接Service失败的回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PageAbility创建连接本地ServiceAbility回调实例的代码以及连接本地ServiceAbility的示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import featureAbility from '@ohos.ability.featureAbility';\nimport common from '@ohos.app.ability.common';\nimport Want from '@ohos.app.ability.Want';\nimport promptAction from '@ohos.promptAction';\nimport rpc from '@ohos.rpc';\nimport hilog from '@ohos.hilog';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const TAG: string = 'PageServiceAbility';\nconst domain: number = 0xFF00;\n\n@Entry\n@Component\nstruct PageServiceAbility {\n  // ...\n  build() {\n    Column() {\n      // ...\n      List({ initialIndex: 0 }) {\n        ListItem() {\n          Row() {\n            // ...\n          }\n          .onClick(() => {\n            let option: common.ConnectOptions = {\n              onConnect: (element, proxy) => {\n                hilog.info(domain, TAG, `onConnectLocalService onConnectDone element:` + JSON.stringify(element));\n                if (proxy === null) {\n                  promptAction.showToast({\n                    message: 'connect_service_failed_toast'\n                  });\n                  return;\n                }\n                let data = rpc.MessageParcel.create();\n                let reply = rpc.MessageParcel.create();\n                let option = new rpc.MessageOption();\n                data.writeInterfaceToken('connect.test.token');\n                proxy.sendRequest(0, data, reply, option);\n                promptAction.showToast({\n                  message: 'connect_service_success_toast'\n                });\n              },\n              onDisconnect: (element) => {\n                hilog.info(domain, TAG, `onConnectLocalService onDisconnectDone element:${element}`);\n                promptAction.showToast({\n                  message: 'disconnect_service_success_toast'\n                });\n              },\n              onFailed: (code) => {\n                hilog.info(domain, TAG, `onConnectLocalService onFailed errCode:${code}`);\n                promptAction.showToast({\n                  message: 'connect_service_failed_toast'\n                });\n              }\n            };\n\n            let request: Want = {\n              bundleName: 'com.samples.famodelabilitydevelop',\n              abilityName: 'com.samples.famodelabilitydevelop.ServiceAbility',\n            };\n            let connId = featureAbility.connectAbility(request, option);\n            hilog.info(domain, TAG, `onConnectLocalService onFailed errCode:${connId}`);\n          })\n        }\n        // ...\n      }\n      // ...\n    }\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["同时，Service侧也需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability/js-apis-inner-ability-connectoptions/js-apis-inner-ability-connectoptions#onconnect",
        children: "onConnect()"
      }), "时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc#iremoteobject",
        children: "IRemoteObject"
      }), "，从而定义与Service进行通信的接口。onConnect()需要返回一个IRemoteObject对象。系统提供了IRemoteObject的默认实现，开发者可以通过继承", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ipc-api/ipc-arkts/js-apis-rpc/js-apis-rpc#remoteobject",
        children: "rpc.RemoteObject"
      }), "来创建自定义的实现类。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Service侧把自身的实例返回给调用侧的示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import type Want from '@ohos.app.ability.Want';\nimport rpc from '@ohos.rpc';\nimport hilog from '@ohos.hilog';\n\nconst TAG: string = '[Sample_FAModelAbilityDevelop]';\nconst domain: number = 0xFF00;\n\nclass FirstServiceAbilityStub extends rpc.RemoteObject {\n  constructor(des: Object) {\n    if (typeof des === 'string') {\n      super(des);\n    } else {\n      return;\n    }\n  }\n\n  onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel, option: rpc.MessageOption): boolean {\n    hilog.info(domain, TAG, 'ServiceAbility onRemoteRequest called');\n    if (code === 1) {\n      let string = data.readString();\n      hilog.info(domain, TAG, `ServiceAbility string=${string}`);\n      let result = Array.from(string).sort().join('');\n      hilog.info(domain, TAG, `ServiceAbility result=${result}`);\n      reply.writeString(result);\n    } else {\n      hilog.info(domain, TAG, 'ServiceAbility unknown request code');\n    }\n    return true;\n  }\n}\n// ...\n"
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