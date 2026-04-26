"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["921029"], {
513427(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_account_api_account_arkts_component_account_api_loginpanel_account_api_loginpanel_md_426_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-account-api-account-arkts-component-account-api-loginpanel-account-api-loginpanel-md-426.json
var site_docs_ref_account_api_account_arkts_component_account_api_loginpanel_account_api_loginpanel_md_426_namespaceObject = JSON.parse('{"id":"account-api/account-arkts-component/account-api-loginpanel/account-api-loginpanel","title":"LoginPanel (华为账号Panel登录组件)","description":"本模块提供LoginPanel组件，应用通过集成该组件完成华为账号登录功能。","source":"@site/docs-ref/account-api/account-arkts-component/account-api-loginpanel/account-api-loginpanel.md","sourceDirName":"account-api/account-arkts-component/account-api-loginpanel","slug":"/account-api/account-arkts-component/account-api-loginpanel/account-api-loginpanel","permalink":"/harmonyos-docs-site/ref/account-api/account-arkts-component/account-api-loginpanel/account-api-loginpanel","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"LoginPanel (华为账号Panel登录组件)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-loginpanel","kit":"应用服务","last_updated":"2026-04-22","slug":"account-api-loginpanel"},"sidebar":"ref","previous":{"title":"realName (华为账号实名认证服务)","permalink":"/harmonyos-docs-site/ref/account-api/account-api-arkts/account-api-realname/account-api-realname"},"next":{"title":"LoginWithHuaweiIDButton (华为账号Button登录组件)","permalink":"/harmonyos-docs-site/ref/account-api/account-arkts-component/account-api-huawei-id-button/account-api-huawei-id-button"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/account-api/account-arkts-component/account-api-loginpanel/account-api-loginpanel.md


const frontMatter = {
	title: 'LoginPanel (华为账号Panel登录组件)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-loginpanel',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'account-api-loginpanel'
};
const contentTitle = 'LoginPanel (华为账号Panel登录组件)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "LoginPanel",
  "id": "loginpanel",
  "level": 2
}, {
  "value": "build",
  "id": "build",
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
        id: "loginpanel-华为账号panel登录组件",
        children: "LoginPanel (华为账号Panel登录组件)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供LoginPanel组件，应用通过集成该组件完成华为账号登录功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LoginPanel需要配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager",
        children: "loginComponentManager"
      }), "一起使用，用于实现华为账号登录功能。LoginPanel内的按钮文本默认支持多语言。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LoginPanel, loginComponentManager } from '@kit.AccountKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "loginpanel",
      children: "LoginPanel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类为用来展示登录面板的UI组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), " @Component"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.UIComponent"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "装饰器类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "show"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Link"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该参数用于控制LoginPanel组件是否展示。  false表示不展示该组件。  true表示展示该组件，当业务需要使用LoginPanel组件时设置值为true。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - 该参数必须是@State装饰的局部变量。  - LoginPanel仅支持在页面中使用，弹框、子窗口等场景暂不支持。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#loginpanelparams",
              children: "LoginPanelParams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LoginPanel组件参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-component-manager/account-api-component-manager#loginpanelcontroller",
              children: "LoginPanelController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LoginPanel组件控制器用来接收组件的点击事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build",
      children: "build"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "build(): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "#loginpanel",
        children: "LoginPanel"
      }), "对象的构造函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.UIComponent"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LoginPanel, loginComponentManager } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct PreviewLoginPanelPage {\n  // 是否展示LoginPanel组件\n  @State show: boolean = true;\n  // 定义LoginPanel展示的隐私文本，展示用户服务协议、隐私协议和华为账号用户认证协议\n  privacyText: loginComponentManager.PrivacyText[] = [{\n    text: '已阅读并同意',\n    type: loginComponentManager.TextType.PLAIN_TEXT\n  }, {\n    text: '《用户服务协议》',\n    tag: '用户服务协议',\n    type: loginComponentManager.TextType.RICH_TEXT\n  }, {\n    text: '《隐私协议》',\n    tag: '隐私协议',\n    type: loginComponentManager.TextType.RICH_TEXT\n  }, {\n    text: '和',\n    type: loginComponentManager.TextType.PLAIN_TEXT\n  }, {\n    text: '《华为账号用户认证协议》',\n    tag: '华为账号用户认证协议',\n    type: loginComponentManager.TextType.RICH_TEXT\n  }];\n  // 定义LoginPanel展示的其他方式登录Icon\n  iconArray: loginComponentManager.LoginIcon[] = [{\n    // 此处为示例资源，开发者可使用应用图标进行替换，以保证正常编译运行\n    icon: $r('app.media.app_icon'),\n    tag: '其他方式登录'\n  }];\n  // 构造LoginPanel组件的控制器\n  controller: loginComponentManager.LoginPanelController = new loginComponentManager.LoginPanelController()\n    // 当登录类型不是QUICK_LOGIN且未设置协议时，如果需要展示自定义协议弹框，需要设置协议状态为NOT_ACCEPTED\n    .setAgreementStatus(loginComponentManager.AgreementStatus.NOT_ACCEPTED)\n    // 用户点击其他方式登录展示隐私协议弹框\n    .setShowAgreementForOptionalLogin()\n    .onClickLoginWithHuaweiIDButton((error: BusinessError, response: loginComponentManager.HuaweiIDCredential) => {\n      hilog.info(0x0000, 'testTag', 'onClickLoginWithHuaweiIDButton');\n      if (error) {\n        this.dealAllError(error);\n        return;\n      }\n      if (response) {\n        // 获取到Authorization Code后，传给应用服务端\n        const authorizationCode = response.authorizationCode;\n        hilog.info(0x0000, 'testTag', 'Succeeded in getting response.');\n        this.show = false;\n        return;\n      }\n    })\n    .onClickOptionalLoginButton(() => {\n      hilog.info(0x0000, 'testTag', 'onClickOptionalLoginButton');\n      this.show = false;\n    })\n    .onClickOptionalLoginIcon((error: BusinessError, tag: string) => {\n      if (error) {\n        this.dealAllError(error);\n        return;\n      }\n      hilog.info(0x0000, 'testTag', `onClickOptionalLoginIcon tag: ${tag}`);\n      this.show = false;\n    })\n    .onClickPrivacyText((error: BusinessError, tag: string) => {\n      if (error) {\n        this.dealAllError(error);\n        return;\n      }\n      // 应用需要根据tag实现协议页面的跳转逻辑\n      hilog.info(0x0000, 'testTag', `onClickPrivacyText tag: ${tag}`);\n    })\n    .onClickCloseButton(() => {\n      hilog.info(0x0000, 'testTag', 'onClickCloseButton');\n      this.show = false;\n    })\n    .onChangeAgreementStatus((error: BusinessError, agreementStatus: loginComponentManager.AgreementStatus) => {\n      if (error) {\n        this.dealAllError(error);\n        return;\n      }\n      hilog.info(0x0000, 'testTag', `onChangeAgreementStatus agreementStatus: ${agreementStatus}`);\n    })\n    .onClickEvent((error: BusinessError, clickEvent: loginComponentManager.ClickEvent) => {\n      if (error) {\n        this.dealAllError(error);\n        return;\n      }\n      hilog.info(0x0000, 'testTag', `onClickEvent clickEvent: ${clickEvent}`);\n    });\n\n  // 错误处理\n  dealAllError(error: BusinessError): void {\n    hilog.error(0x0000, 'testTag', `Failed to login, errorCode=${error.code}, errorMsg=${error.message}`);\n    // 在应用登录涉及UI交互场景下，建议按照如下错误码指导提示用户\n    if (error.code === ErrorCode.ERROR_CODE_LOGIN_OUT) {\n      // 用户未登录华为账号，请登录华为账号并重试或者尝试使用其他方式登录\n    } else if (error.code === ErrorCode.ERROR_CODE_NETWORK_ERROR) {\n      // 网络异常，请检查当前网络状态并重试或者尝试使用其他方式登录\n    } else if (error.code === ErrorCode.ERROR_CODE_INTERNAL_ERROR) {\n      // 登录失败，请尝试使用其他方式登录\n    } else if (error.code === ErrorCode.ERROR_CODE_USER_CANCEL) {\n      // 用户取消授权\n    } else if (error.code === ErrorCode.ERROR_CODE_SYSTEM_SERVICE) {\n      // 系统服务异常，请稍后重试或者尝试使用其他方式登录\n    } else if (error.code === ErrorCode.ERROR_CODE_REQUEST_REFUSE) {\n      // 重复请求，应用无需处理\n    } else if (error.code === ErrorCode.ERROR_CODE_AGREEMENT_STATUS_NOT_ACCEPTED) {\n      // 用户未同意协议\n    } else {\n      // 应用登录失败，请尝试使用其他方式登录\n    }\n  }\n\n  build() {\n    if (this.show) {\n      Stack() {\n        LoginPanel({\n          show: this.show,\n          params: {\n            appInfo: {\n              // 此处为示例资源，开发者可使用应用图标进行替换，以保证正常编译运行\n              appIcon: $r('app.media.app_icon'),\n              appName: '应用名称',\n            },\n            privacyText: this.privacyText,\n            // 参考华为账号开发指南获取匿名手机号\n            anonymousPhoneNumber: '139******99',\n            loginType: loginComponentManager.LoginType.QUICK_LOGIN,\n            // optionalLoginAreaAttr和optionalLoginButtonAttr同时存在时优先展示optionalLoginAreaAttr\n            optionalLoginAreaAttr: { iconArray: this.iconArray },\n            optionalLoginButtonAttr: { text: '其他方式登录' }\n          },\n          controller: this.controller\n        })\n      }\n      .height('100%')\n      .width('100%')\n    }\n  }\n}\n\nexport enum ErrorCode {\n  // 账号未登录\n  ERROR_CODE_LOGIN_OUT = 1001502001,\n  // 网络错误\n  ERROR_CODE_NETWORK_ERROR = 1001502005,\n  // 内部错误\n  ERROR_CODE_INTERNAL_ERROR = 1001502009,\n  // 用户取消授权\n  ERROR_CODE_USER_CANCEL = 1001502012,\n  // 系统服务异常\n  ERROR_CODE_SYSTEM_SERVICE = 12300001,\n  // 用户未同意用户协议\n  ERROR_CODE_AGREEMENT_STATUS_NOT_ACCEPTED = 1005300001,\n  // 重复请求\n  ERROR_CODE_REQUEST_REFUSE = 1001500002\n}\n"
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