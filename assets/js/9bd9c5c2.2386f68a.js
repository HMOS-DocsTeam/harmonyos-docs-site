"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["756509"], {
47093(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_account_management_application_account_manage_application_account_manage_application_account_md_9bd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-account-management-application-account-manage-application-account-manage-application-account-md-9bd.json
var site_docs_system_basicfun_basic_services_kit_account_management_application_account_manage_application_account_manage_application_account_md_9bd_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/account-management/application-account/manage-application-account/manage-application-account","title":"管理应用账号","description":"应用开发者可以使用@ohos.account.appAccount管理本应用的账号数据。","source":"@site/docs/system-basicfun/basic-services-kit/account-management/application-account/manage-application-account/manage-application-account.md","sourceDirName":"system-basicfun/basic-services-kit/account-management/application-account/manage-application-account","slug":"/system-basicfun/basic-services-kit/account-management/application-account/manage-application-account/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/account-management/application-account/manage-application-account/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"管理应用账号","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/manage-application-account","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Emitter进行线程间通信","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/app-events/itc-with-emitter/"},"next":{"title":"USB服务开发概述","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/usb/usb-dev/usbhost-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/account-management/application-account/manage-application-account/manage-application-account.md


const frontMatter = {
	title: '管理应用账号',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/manage-application-account',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '管理应用账号';

const assets = {

};



const toc = [{
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}, {
  "value": "开发准备",
  "id": "开发准备",
  "level": 2
}, {
  "value": "创建应用账号",
  "id": "创建应用账号",
  "level": 2
}, {
  "value": "查询应用账号列表",
  "id": "查询应用账号列表",
  "level": 2
}, {
  "value": "存取账号的凭据",
  "id": "存取账号的凭据",
  "level": 2
}, {
  "value": "存取账号的自定义数据",
  "id": "存取账号的自定义数据",
  "level": 2
}, {
  "value": "存取账号的授权令牌",
  "id": "存取账号的授权令牌",
  "level": 2
}, {
  "value": "删除应用账号",
  "id": "删除应用账号",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "管理应用账号",
        children: "管理应用账号"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/account-management-arkts/js-apis-appaccount/js-apis-appaccount",
        children: "@ohos.account.appAccount"
      }), "管理本应用的账号数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "能力限制：应用卸载场景下，被卸载应用的账号数据会被删除；本地账号删除场景下，被删除本地账号下的所有应用的账号数据会被删除。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块支持模拟器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发准备",
      children: "开发准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "导入应用账号模块。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { appAccount, BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取应用账号的实例对象。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const appAccountManager = appAccount.createAppAccountManager();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建应用账号",
      children: "创建应用账号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在应用中登录后，开发者可以在系统中创建一个关联的应用账号，后续可以基于此账号进行数据管理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体开发实例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "参数准备，指定账号名和可选配置。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    let name: string = 'ZhangSan';\n    let options: appAccount.CreateAccountOptions = {\n      customData: {\n        age: '10'\n      }\n    };\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/account-management-arkts/js-apis-appaccount/js-apis-appaccount#createaccount9",
          children: "createAccount"
        }), "接口，根据名称和选项创建应用账号。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    appAccountManager.createAccount(name, options).then(()=>{\n      console.info('createAccount successfully');\n    // ···\n    }).catch((err: BusinessError)=>{\n       console.error(`createAccount failed, error: code is ${err.code}, message is ${err.message}`);\n    // ···\n    });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询应用账号列表",
      children: "查询应用账号列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体开发实例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/account-management-arkts/js-apis-appaccount/js-apis-appaccount#getallaccounts9",
        children: "getAllAccounts"
      }), "接口查询账号列表。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    appAccountManager.getAllAccounts().then((data: appAccount.AppAccountInfo[]) => {\n      console.info('getAllAccounts successfully, data: ' + JSON.stringify(data));\n    // ···\n    }).catch((err: BusinessError) => {\n      console.error(`getAllAccounts failed, code is ${err.code}, message is ${err.message}`);\n    // ···\n    });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "存取账号的凭据",
      children: "存取账号的凭据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体开发实例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "准备参数，指定账号名、凭据类型和凭据。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    let name: string = 'ZhangSan';\n    let credentialType: string = 'PIN_SIX';\n    let credential: string = 'xxxxxx';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/account-management-arkts/js-apis-appaccount/js-apis-appaccount#getcredential9",
          children: "getCredential"
        }), "接口，获取账号的凭据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    appAccountManager.getCredential(name, credentialType).then((data: string) => {\n      console.info('getCredential successfully, data: ' + data);\n    // ···\n    }).catch((err: BusinessError) => {\n      console.error(`getCredential failed, code is ${err.code}, message is ${err.message}`);\n    // ···\n    });\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/account-management-arkts/js-apis-appaccount/js-apis-appaccount#setcredential9",
          children: "setCredential"
        }), "接口，设置账号的凭据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    await appAccountManager.setCredential(name, credentialType, credential).then(() => {\n      console.info('setCredential successfully');\n    }).catch((err: BusinessError) => {\n      console.error(`setCredential failed: code is ${err.code}, message is ${err.message}`);\n    // ···\n    });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "存取账号的自定义数据",
      children: "存取账号的自定义数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体开发实例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "准备参数，指定账号名和自定义键值。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    let name: string = 'ZhangSan';\n    let key: string = 'age';\n    let value: string = '12';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/account-management-arkts/js-apis-appaccount/js-apis-appaccount#setcustomdata9",
          children: "setCustomData"
        }), "接口，设置账号的自定义数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    await appAccountManager.setCustomData(name, key, value).then(() => {\n      console.info('setCustomData successfully');\n    }).catch((err: BusinessError) => {\n      console.error(`setCustomData failed: code is ${err.code}, message is ${err.message}`);\n    // ···\n    });\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/account-management-arkts/js-apis-appaccount/js-apis-appaccount#getcustomdata9",
          children: "getCustomData"
        }), "接口，获取账号的自定义数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    appAccountManager.getCustomData(name, key).then((data: string) => {\n      console.info('getCustomData successfully, data: ' + data);\n    // ···\n    }).catch((err: BusinessError) => {\n      console.error(`getCustomData failed, code is ${err.code}, message is ${err.message}`);\n    // ···\n    });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "存取账号的授权令牌",
      children: "存取账号的授权令牌"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体开发实例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "准备参数，指定账号名、账号所有者、授权类型和授权令牌。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    let name: string = 'ZhangSan';\n    let owner: string = 'com.samples.managerapplicationaccount';\n    let authType: string = 'getSocialData';\n    let token: string = 'xxxxxx';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/account-management-arkts/js-apis-appaccount/js-apis-appaccount#setauthtoken9",
          children: "setAuthToken"
        }), "接口，设置指定授权类型的授权令牌。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    await appAccountManager.setAuthToken(name, authType, token).then(() => {\n      console.info('setAuthToken successfully');\n    }).catch((err: BusinessError) => {\n      console.error(`setAuthToken failed: code is ${err.code}, message is ${err.message}`);\n    // ···\n    });\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/account-management-arkts/js-apis-appaccount/js-apis-appaccount#getauthtoken9",
          children: "getAuthToken"
        }), "接口，获取指定授权类型的授权令牌。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    await appAccountManager.getAuthToken(name, owner, authType).then((data: string) => {\n      console.info('getAuthToken successfully, data: ' + data);\n    // ···\n    }).catch((err: BusinessError) => {\n      console.error(`getAuthToken failed, code is ${err.code}, message is ${err.message}`);\n    // ···\n    });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "删除应用账号",
      children: "删除应用账号"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户退出登录后，应用需及时将相应的应用账号从系统中删除。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体开发实例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["指定要删除的账号名称，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/account-management-arkts/js-apis-appaccount/js-apis-appaccount#removeaccount9",
        children: "removeAccount"
      }), "接口删除账号。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    let name: string = 'ZhangSan';\n    appAccountManager.removeAccount(name).then(() => {\n      console.info('removeAccount successfully');\n    // ···\n    }).catch((err: BusinessError) => {\n      console.error(`removeAccount failed, code is ${err.code}, message is ${err.message}`);\n    // ···\n    });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/app-account-manager",
          children: "应用账号管理"
        })
      }), "\n"]
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