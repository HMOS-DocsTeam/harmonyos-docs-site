"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["607745"], {
308737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_account_api_account_api_arkts_account_api_authentication_account_api_authentication_md_f2f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-account-api-account-api-arkts-account-api-authentication-account-api-authentication-md-f2f.json
var site_docs_ref_account_api_account_api_arkts_account_api_authentication_account_api_authentication_md_f2f_namespaceObject = JSON.parse('{"id":"account-api/account-api-arkts/account-api-authentication/account-api-authentication","title":"authentication (华为账号应用统一认证服务)","description":"本模块提供Account Kit（华为账号服务）认证能力，包括账号登录、授权、取消授权等功能。应用可以使用该能力实现应用账号的登录注册、获取华为账号登录状态、手机号一致性校验状态、用户授权信息等。","source":"@site/docs-ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication.md","sourceDirName":"account-api/account-api-arkts/account-api-authentication","slug":"/account-api/account-api-arkts/account-api-authentication/account-api-authentication","permalink":"/harmonyos-docs-site/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"authentication (华为账号应用统一认证服务)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-authentication","kit":"应用服务","last_updated":"2026-04-22","slug":"account-api-authentication"},"sidebar":"ref","previous":{"title":"XEG_TemporalUpscaleDescription","permalink":"/harmonyos-docs-site/ref/xengine-api/xengine-c/xengine-kit-total/xengine-kit-annotated/xengine-kit-xeg-temporalupscaledescription/xengine-kit-xeg-temporalupscaledescription"},"next":{"title":"extendService (华为账号增强服务)","permalink":"/harmonyos-docs-site/ref/account-api/account-api-arkts/account-api-extendservice/account-api-extendservice"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication.md


const frontMatter = {
	title: 'authentication (华为账号应用统一认证服务)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-authentication',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'account-api-authentication'
};
const contentTitle = 'authentication (华为账号应用统一认证服务)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "HuaweiIDProvider",
  "id": "huaweiidprovider",
  "level": 2
}, {
  "value": "createLoginWithHuaweiIDRequest",
  "id": "createloginwithhuaweiidrequest",
  "level": 3
}, {
  "value": "createAuthorizationWithHuaweiIDRequest",
  "id": "createauthorizationwithhuaweiidrequest",
  "level": 3
}, {
  "value": "createCancelAuthorizationRequest",
  "id": "createcancelauthorizationrequest",
  "level": 3
}, {
  "value": "getHuaweiIDState",
  "id": "gethuaweiidstate",
  "level": 3
}, {
  "value": "getMobileNumberConsistency",
  "id": "getmobilenumberconsistency",
  "level": 3
}, {
  "value": "LoginWithHuaweiIDRequest",
  "id": "loginwithhuaweiidrequest",
  "level": 2
}, {
  "value": "IdTokenSignAlgorithm",
  "id": "idtokensignalgorithm",
  "level": 2
}, {
  "value": "LoginWithHuaweiIDResponse",
  "id": "loginwithhuaweiidresponse",
  "level": 2
}, {
  "value": "LoginWithHuaweiIDCredential",
  "id": "loginwithhuaweiidcredential",
  "level": 2
}, {
  "value": "AuthorizationWithHuaweiIDRequest",
  "id": "authorizationwithhuaweiidrequest",
  "level": 2
}, {
  "value": "AuthorizationWithHuaweiIDResponse",
  "id": "authorizationwithhuaweiidresponse",
  "level": 2
}, {
  "value": "AuthorizationWithHuaweiIDCredential",
  "id": "authorizationwithhuaweiidcredential",
  "level": 2
}, {
  "value": "CancelAuthorizationRequest",
  "id": "cancelauthorizationrequest",
  "level": 2
}, {
  "value": "CancelAuthorizationResponse",
  "id": "cancelauthorizationresponse",
  "level": 2
}, {
  "value": "AuthenticationErrorCode",
  "id": "authenticationerrorcode",
  "level": 2
}, {
  "value": "AuthenticationController",
  "id": "authenticationcontroller",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "executeRequest",
  "id": "executerequest",
  "level": 3
}, {
  "value": "executeRequest",
  "id": "executerequest-1",
  "level": 3
}, {
  "value": "AuthenticationRequest",
  "id": "authenticationrequest",
  "level": 2
}, {
  "value": "AuthenticationResponse",
  "id": "authenticationresponse",
  "level": 2
}, {
  "value": "AuthenticationProvider",
  "id": "authenticationprovider",
  "level": 2
}, {
  "value": "IdType",
  "id": "idtype",
  "level": 2
}, {
  "value": "State",
  "id": "state",
  "level": 2
}, {
  "value": "StateRequest",
  "id": "staterequest",
  "level": 2
}, {
  "value": "StateResult",
  "id": "stateresult",
  "level": 2
}, {
  "value": "ConsistencyState",
  "id": "consistencystate",
  "level": 2
}, {
  "value": "ConsistencyRequest",
  "id": "consistencyrequest",
  "level": 2
}, {
  "value": "ConsistencyResult",
  "id": "consistencyresult",
  "level": 2
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
        id: "authentication-华为账号应用统一认证服务",
        children: "authentication (华为账号应用统一认证服务)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供Account Kit（华为账号服务）认证能力，包括账号登录、授权、取消授权等功能。应用可以使用该能力实现应用账号的登录注册、获取华为账号登录状态、手机号一致性校验状态、用户授权信息等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { authentication } from '@kit.AccountKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "huaweiidprovider",
      children: "HuaweiIDProvider"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类提供实现认证服务的方法，用于创建登录、授权、取消授权请求对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "继承："
        })
      }), " HuaweiIDProvider继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#authenticationprovider",
        children: "AuthenticationProvider"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createloginwithhuaweiidrequest",
      children: "createLoginWithHuaweiIDRequest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createLoginWithHuaweiIDRequest(): LoginWithHuaweiIDRequest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建默认scope和permission登录请求对象，可通过属性值设置请求参数。作为应用使用华为账号登录场景的请求参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
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
              href: "#loginwithhuaweiidrequest",
              children: "LoginWithHuaweiIDRequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用登录场景定义应用使用Account Kit登录请求获取UnionID、OpenID等数据的请求对象。华为账号登录场景请求对象参数请应用根据自身实际场景进行选择。"
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
        children: "import { authentication } from '@kit.AccountKit';\n\nconst huaweiIdProvider = new authentication.HuaweiIDProvider();\nconst loginWithHuaweiIDRequest = huaweiIdProvider.createLoginWithHuaweiIDRequest();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createauthorizationwithhuaweiidrequest",
      children: "createAuthorizationWithHuaweiIDRequest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createAuthorizationWithHuaweiIDRequest(): AuthorizationWithHuaweiIDRequest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个Account Kit授权请求对象，可通过属性值设置请求参数。作为应用使用华为账号登录场景的请求参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
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
              href: "#authorizationwithhuaweiidrequest",
              children: "AuthorizationWithHuaweiIDRequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义应用授权获取用户信息请求对象。"
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
        children: "import { authentication } from '@kit.AccountKit';\n\nconst huaweiIdProvider = new authentication.HuaweiIDProvider();\nconst request = huaweiIdProvider.createAuthorizationWithHuaweiIDRequest();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "createcancelauthorizationrequest",
      children: "createCancelAuthorizationRequest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createCancelAuthorizationRequest(): CancelAuthorizationRequest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个Account Kit取消授权请求对象，可通过属性值设置参数。作为应用取消华为账号授权场景的请求参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
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
              href: "#cancelauthorizationrequest",
              children: "CancelAuthorizationRequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义应用取消Account Kit授权请求对象。"
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
        children: "import { authentication } from '@kit.AccountKit';\n\nconst huaweiIdProvider = new authentication.HuaweiIDProvider();\nconst cancelAuthorizationRequest = huaweiIdProvider.createCancelAuthorizationRequest();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gethuaweiidstate",
      children: "getHuaweiIDState"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getHuaweiIDState(request: StateRequest): Promise<StateResult>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取华为账号登录状态，使用Promise异步回调。在应用需要判断账号是否已登录场景下使用，不依赖网络连接。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#staterequest",
              children: "StateRequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取华为账号登录状态请求对象，包含请求参数。"
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
              href: "#stateresult",
              children: "StateResult"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise对象，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#stateresult",
              children: "StateResult"
            }), "对象。"]
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-account/errorcode-account",
        children: "账号管理错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/account-api/account-api-error-code/account-api-error-code",
        children: "ArkTS错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-account/errorcode-account#section12300001-%E7%B3%BB%E7%BB%9F%E6%9C%8D%E5%8A%A1%E5%BC%82%E5%B8%B8",
              children: "12300001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service works abnormally."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502003-%E8%BE%93%E5%85%A5%E5%8F%82%E6%95%B0%E5%80%BC%E6%97%A0%E6%95%88",
              children: "1001502003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid input parameter value."
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
        children: "import { authentication } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 创建请求参数\nconst stateRequest: authentication.StateRequest = {\n  idType: authentication.IdType.UNION_ID,\n  idValue: '<可通过华为账号登录接口获取>' // 该值可以通过华为账号登录接口获取\n}\ntry {\n  // 执行获取华为账号登录状态请求，并处理结果\n  new authentication.HuaweiIDProvider().getHuaweiIDState(stateRequest).then((data: authentication.StateResult) => {\n    hilog.info(0x0000, 'testTag', 'Succeeded in getting huaweiIdState result.');\n    const state = data.state;\n    // 处理state\n  }).catch((error: BusinessError) => {\n    dealAllError(error);\n  })\n} catch (error) {\n  dealAllError(error);\n}\n\n// 错误处理\nfunction dealAllError(error: BusinessError): void {\n  hilog.error(0x0000, 'testTag', `Failed to get huaweiIdState, errorCode=${error.code}, errorMsg=${error.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getmobilenumberconsistency",
      children: "getMobileNumberConsistency"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getMobileNumberConsistency(request: ConsistencyRequest): Promise<ConsistencyResult>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取手机号一致性状态，使用Promise异步回调。在应用需要校验华为账号绑定的手机号是否与本机SIM卡一致场景下使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者在使用获取手机号一致性状态接口前，需要完成quickLoginMobilePhone（华为账号一键登录）的scope权限申请，详情参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-quick-login/account-phone-unionid-login#%E5%BC%80%E5%8F%91%E5%89%8D%E6%8F%90",
        children: "开发前提"
      }), "。scope权限申请审批未完成或未通过，将报错", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502014-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7scopes%E6%88%96permissions%E6%9D%83%E9%99%90",
        children: "1001502014 应用未申请scopes或permissions权限"
      }), "。"]
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
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、PC/2in1、Tablet中可正常调用，在其他设备类型中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#consistencyrequest",
              children: "ConsistencyRequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取手机号一致性状态请求对象，包含请求参数。"
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
              href: "#consistencyresult",
              children: "ConsistencyResult"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise对象，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#consistencyresult",
              children: "ConsistencyResult"
            }), "对象。"]
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/account-api/account-api-error-code/account-api-error-code",
        children: "ArkTS错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
              children: "401"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes:  1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section801-%E8%AF%A5%E8%AE%BE%E5%A4%87%E4%B8%8D%E6%94%AF%E6%8C%81%E6%AD%A4api",
              children: "801"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported. Function getMobileNumberConsistency can not work correctly due to limited device capabilities."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001500001-%E5%BA%94%E7%94%A8%E6%8C%87%E7%BA%B9%E8%AF%81%E4%B9%A6%E6%A0%A1%E9%AA%8C%E5%A4%B1%E8%B4%A5",
              children: "1001500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to check the fingerprint of the app bundle."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001500004-%E5%B7%B2%E7%99%BB%E5%BD%95%E7%9A%84%E5%8D%8E%E4%B8%BA%E8%B4%A6%E5%8F%B7%E4%B8%8D%E6%94%AF%E6%8C%81%E8%AF%A5%E5%8A%9F%E8%83%BD",
              children: "1001500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The account does not support this function."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001500005-%E8%AF%A5%E5%8A%9F%E8%83%BD%E8%A2%AB%E9%99%90%E5%88%B6%E8%B0%83%E7%94%A8",
              children: "1001500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This function is restricted from being called."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502001-%E7%94%A8%E6%88%B7%E6%9C%AA%E7%99%BB%E5%BD%95%E5%8D%8E%E4%B8%BA%E8%B4%A6%E5%8F%B7",
              children: "1001502001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502002-%E5%BA%94%E7%94%A8%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1001502002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The application is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502005-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1001502005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502009-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1001502009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502014-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7scopes%E6%88%96permissions%E6%9D%83%E9%99%90",
              children: "1001502014"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The app does not have the required scopes or permissions."
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
        children: "import { authentication } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 创建请求参数\nconst consistencyRequest: authentication.ConsistencyRequest = {\n  idType: authentication.IdType.UNION_ID,\n  idValue: '<可通过华为账号登录接口获取>', // 该值可以通过华为账号登录接口获取\n  mobileNumber: '+86xxxxxxxxxxx' // 通过华为账号一键登录功能获取到的明文手机号\n}\ntry {\n  // 执行获取手机号一致性状态请求，并处理结果\n  new authentication.HuaweiIDProvider().getMobileNumberConsistency(consistencyRequest)\n    .then((data: authentication.ConsistencyResult) => {\n      hilog.info(0x0000, 'testTag', `Succeeded in getting getMobileNumberConsistency result = ${data.state}`);\n      const state = data.state;\n      // 处理state\n    })\n    .catch((err: BusinessError) => {\n      dealAllError(err);\n    })\n} catch (error) {\n  dealAllError(error);\n}\n\n// 错误处理\nfunction dealAllError(error: BusinessError): void {\n  hilog.error(0x0000, 'testTag',\n    `Failed to get mobileNumberConsistency, errorCode=${error.code}, errorMsg=${error.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "loginwithhuaweiidrequest",
      children: "LoginWithHuaweiIDRequest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用登录场景定义应用使用Account Kit登录请求获取UnionID、OpenID等数据的请求对象。华为账号登录场景请求对象参数请应用根据自身实际场景进行选择。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "继承："
        })
      }), " LoginWithHuaweiIDRequest继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#authenticationrequest",
        children: "AuthenticationRequest"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "forceLogin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示是否需要强制拉起华为账号登录页。  如果该值为true，华为账号未登录时，则将拉起华为账号登录页。  如果该值为false，且华为账号未登录，调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#executerequest-1",
              children: "executeRequest"
            }), "将返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502001-%E7%94%A8%E6%88%B7%E6%9C%AA%E7%99%BB%E5%BD%95%E5%8D%8E%E4%B8%BA%E8%B4%A6%E5%8F%B7",
              children: "1001502001 用户未登录华为账号"
            }), "。  默认值：true。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请求体中的state参数，该参数与响应体中返回的state比较，校验是否是当前请求，可防止跨站攻击。  开发者可自定义，字符包含0-9、a-z、A-Z、英文点号、英文冒号、斜杠、下划线等，长度限制1-255，校验规则^[0-9a-zA-Z:/.-_]{1,255}$。  推荐开发者用随机数并做一致性校验。建议生成方式：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkts-api/arkts-arkts/js-apis-util/js-apis-util#utilgeneraterandomuuid9",
              children: "util.generateRandomUUID()"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nonce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请求体中的nonce参数，该参数会包含在返回的ID Token中，通过校验一致性，可用于防止重放攻击。  字符包含0-9、a-z、A-Z、点号、冒号、斜杠、下划线等，长度限制1-255，校验规则^[0-9a-zA-Z:/.-_]{1,255}$。  如该参数未传、传空，ID Token中nonce默认值：“default”。  推荐开发者用随机数并做一致性校验。建议生成方式：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkts-api/arkts-arkts/js-apis-util/js-apis-util#utilgeneraterandomuuid9",
              children: "util.generateRandomUUID()"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "idTokenSignAlgorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#idtokensignalgorithm",
              children: "IdTokenSignAlgorithm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于指定ID Token的签名算法。应用根据实际安全要求、性能、系统环境兼容性进行选择。  默认值：PS256。"
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
        children: "import { authentication } from '@kit.AccountKit';\nimport { util } from '@kit.ArkTS';\n\nconst loginRequest = new authentication.HuaweiIDProvider().createLoginWithHuaweiIDRequest();\n// 默认值为true，若账号未登录则强制拉起账号登录页\nloginRequest.forceLogin = true;\nloginRequest.idTokenSignAlgorithm = authentication.IdTokenSignAlgorithm.PS256; // 默认为PS256\nloginRequest.state = util.generateRandomUUID(); // 建议使用generateRandomUUID生成state\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "idtokensignalgorithm",
      children: "IdTokenSignAlgorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ID Token签名算法，该类型为枚举，根据IdTokenSignAlgorithm的不同类型，对ID Token进行不同方式的加密。请应用根据实际安全要求、性能、系统环境兼容性进行选择。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "PS256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSASSA-PSS使用SHA-256和基于SHA-256的MGF1。为保证安全性建议使用PS256。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RS256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSASSA-PKCS1-v1_5使用SHA-256。"
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
        children: "import { authentication } from '@kit.AccountKit';\n\nconst loginRequest = new authentication.HuaweiIDProvider().createLoginWithHuaweiIDRequest();\n// 默认值为true，若账号未登录则强制拉起账号登录页\nloginRequest.forceLogin = true;\nloginRequest.idTokenSignAlgorithm = authentication.IdTokenSignAlgorithm.PS256;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "loginwithhuaweiidresponse",
      children: "LoginWithHuaweiIDResponse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Account Kit登录请求响应对象，解析响应结果可得到OpenID、UnionID、Authorization Code、ID Token数据。作为华为账号登录成功的返回结果，用于获取或关联华为账号相关信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "继承："
        })
      }), " LoginWithHuaweiIDResponse继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#authenticationresponse",
        children: "AuthenticationResponse"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "只读"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#loginwithhuaweiidcredential",
              children: "LoginWithHuaweiIDCredential"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "登录结果数据，用于获取或关联华为账号相关信息。包含openID、unionID、authorizationCode、idToken字段。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应体中返回的state，账号服务将该字段与请求体中传入的state比较，防止跨站攻击。字符包含“0-9”、“a-z”、“A-Z”、英文点号、英文冒号、斜杠、下划线等，长度限制1-255。校验规则^[0-9a-zA-Z:/.-_]{1,255}$。"
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
        children: "import { authentication } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { util } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 创建登录请求，并设置参数\nconst loginRequest = new authentication.HuaweiIDProvider().createLoginWithHuaweiIDRequest();\n// 默认值为true，若账号未登录则强制拉起账号登录页\nloginRequest.forceLogin = true;\nloginRequest.idTokenSignAlgorithm = authentication.IdTokenSignAlgorithm.PS256;\nloginRequest.state = util.generateRandomUUID(); // 建议使用generateRandomUUID生成state\n\n// 执行登录请求，并处理结果\ntry {\n  // 此示例为代码片段，实际需在自定义组件实例中使用，并传入有效的Context上下文对象\n  const controller = new authentication.AuthenticationController(this.getUIContext().getHostContext());\n  controller.executeRequest(loginRequest, (error: BusinessError<Object>, data) => {\n    if (error) {\n      dealAllError(error);\n      return;\n    }\n    const loginWithHuaweiIDResponse = data as authentication.LoginWithHuaweiIDResponse;\n    const state = loginWithHuaweiIDResponse.state;\n    if (state && loginRequest.state !== state) {\n      hilog.error(0x0000, 'testTag', `Failed to login. The state is different, response state: ${state}`);\n      return;\n    }\n    hilog.info(0x0000, 'testTag', 'Succeeded in login.');\n    const loginWithHuaweiIDCredential = loginWithHuaweiIDResponse?.data;\n    const code = loginWithHuaweiIDCredential?.authorizationCode;\n    const idToken = loginWithHuaweiIDCredential?.idToken;\n    // 开发者处理code, idToken\n  });\n} catch (error) {\n  dealAllError(error);\n}\n\n// 错误处理\nfunction dealAllError(error: BusinessError<Object>): void {\n  hilog.error(0x0000, 'testTag', `Failed to login. Code: ${error.code}, message: ${error.message}`);\n  // 在应用登录涉及UI交互场景下，建议按照如下错误码指导提示用户\n  if (error.code === ErrorCode.ERROR_CODE_LOGIN_OUT) {\n    // 用户未登录华为账号，请登录华为账号并重试或者尝试使用其他方式登录\n  } else if (error.code === ErrorCode.ERROR_CODE_NETWORK_ERROR) {\n    // 网络异常，请检查当前网络状态并重试或者尝试使用其他方式登录\n  } else if (error.code === ErrorCode.ERROR_CODE_INTERNAL_ERROR) {\n    // 登录失败，请尝试使用其他方式登录\n  } else if (error.code === ErrorCode.ERROR_CODE_USER_CANCEL) {\n    // 用户取消授权\n  } else if (error.code === ErrorCode.ERROR_CODE_SYSTEM_SERVICE) {\n    // 系统服务异常，请稍后重试或者尝试使用其他方式登录\n  } else if (error.code === ErrorCode.ERROR_CODE_REQUEST_REFUSE) {\n    // 重复请求，应用无需处理\n  } else {\n    // 应用登录失败，请尝试使用其他方式登录\n  }\n}\n\nexport enum ErrorCode {\n  // 账号未登录\n  ERROR_CODE_LOGIN_OUT = 1001502001,\n  // 网络错误\n  ERROR_CODE_NETWORK_ERROR = 1001502005,\n  // 内部错误\n  ERROR_CODE_INTERNAL_ERROR = 1001502009,\n  // 用户取消授权\n  ERROR_CODE_USER_CANCEL = 1001502012,\n  // 系统服务异常\n  ERROR_CODE_SYSTEM_SERVICE = 12300001,\n  // 重复请求\n  ERROR_CODE_REQUEST_REFUSE = 1001500002\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "loginwithhuaweiidcredential",
      children: "LoginWithHuaweiIDCredential"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Account Kit登录成功返回的凭据，用于获取用户相关信息和关联华为账号（OpenID/UnionID）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "只读"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "authorizationCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization Code。临时凭据，用于获取Access Token，有效时间5分钟，并且只能使用1次。长度限制1-1024。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "idToken"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID Token。JWT格式的字符串，包含用户信息，用于应用获取部分用户相关信息及验证签名。长度限制1-2048。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OpenID。OpenID是华为账号用户在不同类型的产品的身份ID，同一个用户，不同应用，OpenID值不同。具体格式要求请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-faq/account-faq-9",
              children: "OpenID和UnionID的格式说明"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unionID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["UnionID。UnionID是华为账号用户在同一个开发者账号下产品的身份ID，同一个用户，同一个开发者账号下管理的不同应用，UnionID值相同。具体格式要求请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-faq/account-faq-9",
              children: "OpenID和UnionID的格式说明"
            }), "。"]
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
        children: "import { authentication } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { util } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 创建登录请求，并设置参数\nconst loginRequest = new authentication.HuaweiIDProvider().createLoginWithHuaweiIDRequest();\n// 默认值为true，若账号未登录则强制拉起账号登录页\nloginRequest.forceLogin = true;\nloginRequest.idTokenSignAlgorithm = authentication.IdTokenSignAlgorithm.PS256;\nloginRequest.state = util.generateRandomUUID(); // 建议使用generateRandomUUID生成state\n\n// 执行登录请求，并处理结果\ntry {\n  // 此示例为代码片段，实际需在自定义组件实例中使用，并传入有效的Context上下文对象\n  const controller = new authentication.AuthenticationController(this.getUIContext().getHostContext());\n  controller.executeRequest(loginRequest, (error: BusinessError<Object>, data) => {\n    if (error) {\n      dealAllError(error);\n      return;\n    }\n    const loginWithHuaweiIDResponse = data as authentication.LoginWithHuaweiIDResponse;\n    const state = loginWithHuaweiIDResponse.state;\n    if (state && loginRequest.state !== state) {\n      hilog.error(0x0000,\n        'testTag', `Failed to login. The state is different, response state: ${state}`);\n      return;\n    }\n    hilog.info(0x0000, 'testTag', 'Succeeded in login.');\n\n    const loginWithHuaweiIDCredential = loginWithHuaweiIDResponse?.data;\n    const code = loginWithHuaweiIDCredential?.authorizationCode;\n    const idToken = loginWithHuaweiIDCredential?.idToken;\n    // 开发者处理code, idToken\n  });\n} catch (error) {\n  dealAllError(error);\n}\n\n// 错误处理\nfunction dealAllError(error: BusinessError<Object>): void {\n  hilog.error(0x0000, 'testTag', `Failed to login. Code: ${error.code}, message: ${error.message}`);\n  // 在应用登录涉及UI交互场景下，建议按照如下错误码指导提示用户\n  if (error.code === ErrorCode.ERROR_CODE_LOGIN_OUT) {\n    // 用户未登录华为账号，请登录华为账号并重试或者尝试使用其他方式登录\n  } else if (error.code === ErrorCode.ERROR_CODE_NETWORK_ERROR) {\n    // 网络异常，请检查当前网络状态并重试或者尝试使用其他方式登录\n  } else if (error.code === ErrorCode.ERROR_CODE_INTERNAL_ERROR) {\n    // 登录失败，请尝试使用其他方式登录\n  } else if (error.code === ErrorCode.ERROR_CODE_USER_CANCEL) {\n    // 用户取消授权\n  } else if (error.code === ErrorCode.ERROR_CODE_SYSTEM_SERVICE) {\n    // 系统服务异常，请稍后重试或者尝试使用其他方式登录\n  } else if (error.code === ErrorCode.ERROR_CODE_REQUEST_REFUSE) {\n    // 重复请求，应用无需处理\n  } else {\n    // 应用登录失败，请尝试使用其他方式登录\n  }\n}\n\nexport enum ErrorCode {\n  // 账号未登录\n  ERROR_CODE_LOGIN_OUT = 1001502001,\n  // 网络错误\n  ERROR_CODE_NETWORK_ERROR = 1001502005,\n  // 内部错误\n  ERROR_CODE_INTERNAL_ERROR = 1001502009,\n  // 用户取消授权\n  ERROR_CODE_USER_CANCEL = 1001502012,\n  // 系统服务异常\n  ERROR_CODE_SYSTEM_SERVICE = 12300001,\n  // 重复请求\n  ERROR_CODE_REQUEST_REFUSE = 1001500002\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "authorizationwithhuaweiidrequest",
      children: "AuthorizationWithHuaweiIDRequest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类为应用创建的授权请求对象，使用Account Kit请求授权以申请更多的用户信息，包括scopes、permissions等属性。作为向华为账号申请授权的请求对象，应用根据实际场景按需获取。"
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
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "继承："
        })
      }), " AuthorizationWithHuaweiIDRequest继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#authenticationrequest",
        children: "AuthenticationRequest"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "scopes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["scope列表，用于获取用户数据。与permissions属性不能同时为空，否则会返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502003-%E8%BE%93%E5%85%A5%E5%8F%82%E6%95%B0%E5%80%BC%E6%97%A0%E6%95%88",
              children: "1001502003 输入参数值无效"
            }), "错误码。如果传入不合法的scope（例如空值等）则直接返回OpenID和UnionID。  默认值：['openid']。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。  scope取值范围：  - profile：华为账号用户的基本信息，如昵称头像等（元服务从5.1.1(19)开始，支持该scope，并需配合supportAtomicService参数使用）。  - openid：华为账号用户的OpenID、UnionID。具体格式要求请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-faq/account-faq-9",
              children: "OpenID和UnionID的格式说明"
            }), "。  - phone：华为账号快速验证手机号（元服务不能直接调用该接口获取手机号，可参考场景化控件", (0,jsx_runtime.jsx)(_components.a, {
              href: "/scenario-fusion-guide/scenario-fusion-button/scenario-fusion-button-getphonenumber",
              children: "快速验证手机号Button"
            }), "获取。儿童账号的手机号无法通过该scope获取），使用该scope前需要申请账号权限，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-get-user-info/account-get-phone/account-get-phonenumber#%E5%BC%80%E5%8F%91%E5%89%8D%E6%8F%90",
              children: "开发前提"
            }), "。  - quickLoginAnonymousPhone：获取华为账号绑定的匿名手机号（该scope只能与openid同时使用，Wearable设备以及海外账号无法获取到手机号，会报", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001500003-%E4%B8%8D%E6%94%AF%E6%8C%81%E8%AF%A5scopes%E6%88%96permissions",
              children: "1001500003 不支持该scopes或permissions"
            }), "），使用该scope前需要申请账号权限，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-quick-login/account-phone-unionid-login#%E5%BC%80%E5%8F%91%E5%89%8D%E6%8F%90",
              children: "开发前提"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）匿名手机号的返回格式不包含国际电话区号，其他国家和地区默认包含国际电话区号。  - riskLevel：获取用户风险等级，海外账号不支持获取用户风险等级。该scope 仅支持与openid、phone、profile组合使用，并且使用该scope前需要申请账号权限，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-on-demand-acquisition#%E5%BC%80%E5%8F%91%E5%89%8D%E6%8F%90",
              children: "开发前提"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 元服务场景下，此scope不支持与phone组合使用，如果需要同时获取手机号和风险等级可参见Scenario Fusion Kit的场景化控件", (0,jsx_runtime.jsx)(_components.a, {
              href: "/scenario-fusion-guide/scenario-fusion-button/scenario-fusion-button-get-risklevel",
              children: "获取手机号和风险等级Button"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["permission列表，用于获取用户授权临时凭据和用户身份认证信息。与scopes属性不能同时为空，否则会返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502003-%E8%BE%93%E5%85%A5%E5%8F%82%E6%95%B0%E5%80%BC%E6%97%A0%E6%95%88",
              children: "1001502003 输入参数值无效"
            }), "错误码。如果传入不合法的permission（例如空值等）则直接返回OpenID和UnionID。  默认值为空，不返回用户授权临时凭据和用户身份认证信息。  permission取值范围：  - serviceauthcode：用户授权临时凭据。  - idtoken：用户身份认证信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "forceAuthorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示华为账号未登录时，是否需要强制拉起华为账号登录页。  默认值：true。  如果该值为true且用户未登录或未授权，则会拉起用户登录或授权页面。  如果该值为false并且用户未登录，执行授权请求将返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502001-%E7%94%A8%E6%88%B7%E6%9C%AA%E7%99%BB%E5%BD%95%E5%8D%8E%E4%B8%BA%E8%B4%A6%E5%8F%B7",
              children: "1001502001 用户未登录华为账号"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请求体中的state参数，开发者可自定义，字符包含0-9、a-z、A-Z、点号、冒号、斜杠、下划线等，长度限制1-255，校验规则^[0-9a-zA-Z:/.-_]{1,255}$。该参数与响应体中返回的state比较，校验是否是当前请求，可防止跨站攻击。  推荐开发者用随机数并做一致性校验。建议生成方式：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkts-api/arkts-arkts/js-apis-util/js-apis-util#utilgeneraterandomuuid9",
              children: "util.generateRandomUUID()"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nonce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请求体中的nonce参数，字符包含0-9、a-z、A-Z、点号、冒号、斜杠、下划线等，长度限制1-255，校验规则^[0-9a-zA-Z:/.-_]{1,255}$。该参数会包含在返回的ID Token中，通过校验一致性，可用于防止重放攻击。如该参数未传、传空，ID Token中nonce默认值：“default”。  推荐开发者用随机数并做一致性校验。建议生成方式：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkts-api/arkts-arkts/js-apis-util/js-apis-util#utilgeneraterandomuuid9",
              children: "util.generateRandomUUID()"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "idTokenSignAlgorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#idtokensignalgorithm",
              children: "IdTokenSignAlgorithm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["默认值：PS256，用于指定ID Token的签名算法。应用根据实际安全要求、性能、系统环境兼容性进行选择。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "supportAtomicService"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在元服务场景下，当传入scopes包含profile时，是否支持获取用户头像昵称。  默认值：false。  如果该值为true，可以正常获取用户头像昵称。  如果该值为false，执行授权请求将返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001500003-%E4%B8%8D%E6%94%AF%E6%8C%81%E8%AF%A5scopes%E6%88%96permissions",
              children: "1001500003 不支持该scopes或permissions"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本"
              })
            }), "：5.1.1(19)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本5.1.1(19)开始，该接口支持在元服务中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 用于元服务场景调用。"]
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
        children: "import { authentication } from '@kit.AccountKit';\nimport { util } from '@kit.ArkTS';\n\nconst authRequest = new authentication.HuaweiIDProvider().createAuthorizationWithHuaweiIDRequest();\nauthRequest.scopes = ['profile']; // 元服务可传supportAtomicService值为true，以使用profile授权能力\nauthRequest.permissions = ['idtoken'];\nauthRequest.forceAuthorization = true;\nauthRequest.state = util.generateRandomUUID(); // 建议使用generateRandomUUID生成state\nauthRequest.idTokenSignAlgorithm = authentication.IdTokenSignAlgorithm.PS256;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "authorizationwithhuaweiidresponse",
      children: "AuthorizationWithHuaweiIDResponse"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该类封装", (0,jsx_runtime.jsx)(_components.a, {
        href: "#authorizationwithhuaweiidrequest",
        children: "AuthorizationWithHuaweiIDRequest"
      }), "授权请求对象获取的用户信息结果。作为华为账号授权成功的返回结果，用于获取或关联华为账号用户信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "继承："
        })
      }), " AuthorizationWithHuaweiIDResponse继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#authenticationresponse",
        children: "AuthenticationResponse"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "只读"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#authorizationwithhuaweiidcredential",
              children: "AuthorizationWithHuaweiIDCredential"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户授权结果数据，用于获取或关联华为账号用户信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应体中返回的state，字符包含0-9、a-z、A-Z、英文点号、英文冒号、斜杠、下划线等，长度限制1-255，校验规则^[0-9a-zA-Z:/.-_]{1,255}$。与请求体中传入的state比较，校验是否是当前请求，防止跨站攻击。"
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
        children: "import { authentication } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { util } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 创建授权请求，并设置参数\nconst authRequest = new authentication.HuaweiIDProvider().createAuthorizationWithHuaweiIDRequest();\n// 'openid'为默认值可不传，开发者若需要获取其他用户信息，可传入其他scope参数，具体请参考AuthorizationWithHuaweiIDRequest类说明\nauthRequest.scopes = ['openid'];\nauthRequest.permissions = ['idtoken', 'serviceauthcode'];\nauthRequest.forceAuthorization = true;\nauthRequest.state = util.generateRandomUUID(); // 建议使用generateRandomUUID生成state\nauthRequest.idTokenSignAlgorithm = authentication.IdTokenSignAlgorithm.PS256;\n\n// 执行授权请求，并处理结果\ntry {\n  // 此示例为代码片段，实际需在自定义组件实例中使用，并传入有效的Context上下文对象\n  const controller = new authentication.AuthenticationController(this.getUIContext().getHostContext());\n  controller.executeRequest(authRequest, (error: BusinessError<Object>, data) => {\n    if (error) {\n      dealAllError(error);\n      return;\n    }\n    const authorizationWithHuaweiIDResponse = data as authentication.AuthorizationWithHuaweiIDResponse;\n    const state = authorizationWithHuaweiIDResponse.state;\n    if (state && authRequest.state !== state) {\n      hilog.error(0x0000, 'testTag', `Failed to authorize. The state is different, response state: ${state}`);\n      return;\n    }\n    hilog.info(0x0000, 'testTag', 'Succeeded in authentication.');\n    const authorizationWithHuaweiIDCredential = authorizationWithHuaweiIDResponse?.data;\n    const idToken = authorizationWithHuaweiIDCredential?.idToken;\n    const code = authorizationWithHuaweiIDCredential?.authorizationCode;\n    // 开发者处理idToken, code等信息\n  });\n} catch (error) {\n  dealAllError(error);\n}\n\n// 错误处理\nfunction dealAllError(error: BusinessError<Object>): void {\n  hilog.error(0x0000, 'testTag', `Failed to obtain userInfo. Code: ${error.code}, message: ${error.message}`);\n  // 在涉及UI交互场景下，建议按照如下错误码指导提示用户\n  if (error.code === ErrorCode.ERROR_CODE_LOGIN_OUT) {\n    // 用户未登录华为账号，请登录华为账号并重试\n  } else if (error.code === ErrorCode.ERROR_CODE_NETWORK_ERROR) {\n    // 网络异常，请检查当前网络状态并重试\n  } else if (error.code === ErrorCode.ERROR_CODE_USER_CANCEL) {\n    // 用户取消授权\n  } else if (error.code === ErrorCode.ERROR_CODE_SYSTEM_SERVICE) {\n    // 系统服务异常，请稍后重试\n  } else if (error.code === ErrorCode.ERROR_CODE_REQUEST_REFUSE) {\n    // 重复请求，应用无需处理\n  } else {\n    // 获取用户信息失败，请稍后重试\n  }\n}\n\nexport enum ErrorCode {\n  // 账号未登录\n  ERROR_CODE_LOGIN_OUT = 1001502001,\n  // 网络错误\n  ERROR_CODE_NETWORK_ERROR = 1001502005,\n  // 用户取消授权\n  ERROR_CODE_USER_CANCEL = 1001502012,\n  // 系统服务异常\n  ERROR_CODE_SYSTEM_SERVICE = 12300001,\n  // 重复请求\n  ERROR_CODE_REQUEST_REFUSE = 1001500002\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "authorizationwithhuaweiidcredential",
      children: "AuthorizationWithHuaweiIDCredential"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Account Kit授权成功返回的凭据，用于获取用户相关信息（头像昵称、匿名手机号等）和关联华为账号（OpenID/UnionID）。"
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
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "只读"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "authorizationCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Authorization Code。临时凭据，用于获取Access Token。有效时间5分钟，并且只能使用1次。长度限制1-1024。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "返回场景"
              })
            }), "：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#authorizationwithhuaweiidrequest",
              children: "AuthorizationWithHuaweiIDRequest"
            }), "接口的permissions中传入'serviceauthcode'参数时返回。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "idToken"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ID Token。JWT格式的字符串，包含用户信息，用于应用获取部分用户相关信息及验证签名。长度限制1-2048。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "返回场景"
              })
            }), "：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#authorizationwithhuaweiidrequest",
              children: "AuthorizationWithHuaweiIDRequest"
            }), "接口的permissions中传入'idtoken'参数时返回。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OpenID。OpenID是华为账号用户在不同类型的产品的身份ID，同一个用户不同应用，OpenID值不同。具体格式要求请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-faq/account-faq-9",
              children: "OpenID和UnionID的格式说明"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "返回场景"
              })
            }), "：默认返回。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unionID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["UnionID。UnionID是华为账号用户在同一个开发者账号下产品的身份ID，同一个用户，同一个开发者账号下管理的不同应用，UnionID值相同。具体格式要求请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-faq/account-faq-9",
              children: "OpenID和UnionID的格式说明"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "返回场景"
              })
            }), "：默认返回。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "avatarUri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户头像链接，有效期较短，建议先将头像下载保存后再使用。  没有长度限制，格式例如：", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://xxx/xxx"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "返回场景"
              })
            }), "：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#authorizationwithhuaweiidrequest",
              children: "AuthorizationWithHuaweiIDRequest"
            }), "接口的scopes中传入'profile'参数时返回。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本6.0.0(20)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nickName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户昵称。长度限制2-20个字符。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "返回场景"
              })
            }), "：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#authorizationwithhuaweiidrequest",
              children: "AuthorizationWithHuaweiIDRequest"
            }), "接口的scopes中传入'profile'参数时返回。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本6.0.0(20)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "email"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户邮箱。长度限制4-254。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "返回场景"
              })
            }), "：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#authorizationwithhuaweiidrequest",
              children: "AuthorizationWithHuaweiIDRequest"
            }), "接口的scopes中传入'email'参数时返回。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 元服务不支持该字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "authorizedScopes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["本次授权成功的scope清单，通过设置对应scope授权成功后返回Authorization Code来获取对应用户信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "返回场景"
              })
            }), "：默认返回'openid'。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "extraInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record<string, Object>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["扩展信息。可能的key值有quickLoginAnonymousPhone和localNumberConsistency。  如果开发者开启了", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-guide",
              children: "代码混淆"
            }), "需要配置混淆白名单防止其中包含的属性被混淆。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "返回场景"
              })
            }), "：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#authorizationwithhuaweiidrequest",
              children: "AuthorizationWithHuaweiIDRequest"
            }), "接口的scopes中传入扩展请求参数（'quickLoginAnonymousPhone'等）时返回。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  1. 华为账号一键登录场景下，可通过\"localNumberConsistency\"字段获取华为账号绑定手机号和用户本机SIM卡手机号对比结果：  true：华为账号绑定的手机号和本机SIM卡手机号一致。  false：华为账号绑定的手机号和本机SIM卡手机号不一致。  2. 若用户本机无SIM卡，返回false。  若用户本机有SIM卡，只要其中有1张SIM卡手机号比对成功即返回true，否则返回false。"]
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
        children: "import { authentication } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { util } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 创建授权请求，并设置参数\nconst authRequest = new authentication.HuaweiIDProvider().createAuthorizationWithHuaweiIDRequest();\n// 'openid'为默认值可不传，开发者若需要获取其他用户信息，可传入其他scope参数，具体请参考AuthorizationWithHuaweiIDRequest类说明\nauthRequest.scopes = ['openid'];\nauthRequest.permissions = ['idtoken', 'serviceauthcode'];\nauthRequest.forceAuthorization = true;\nauthRequest.state = util.generateRandomUUID(); // 建议使用generateRandomUUID生成state\nauthRequest.idTokenSignAlgorithm = authentication.IdTokenSignAlgorithm.PS256;\n\n// 执行授权请求，并处理结果\ntry {\n  // 此示例为代码片段，实际需在自定义组件实例中使用，并传入有效的Context上下文对象\n  const controller = new authentication.AuthenticationController(this.getUIContext().getHostContext());\n  controller.executeRequest(authRequest, (error: BusinessError<Object>, data) => {\n    if (error) {\n      dealAllError(error);\n      return;\n    }\n    const authorizationWithHuaweiIDResponse = data as authentication.AuthorizationWithHuaweiIDResponse;\n    const state = authorizationWithHuaweiIDResponse.state;\n    if (state && authRequest.state !== state) {\n      hilog.error(0x0000, 'testTag', `Failed to authorize. The state is different, response state: ${state}`);\n      return;\n    }\n    hilog.info(0x0000, 'testTag', 'Succeeded in authentication.');\n    const authorizationWithHuaweiIDCredential = authorizationWithHuaweiIDResponse?.data;\n    const idToken = authorizationWithHuaweiIDCredential?.idToken;\n    const code = authorizationWithHuaweiIDCredential?.authorizationCode;\n    // 开发者处理idToken, code等信息\n  });\n} catch (error) {\n  dealAllError(error);\n}\n\n// 错误处理\nfunction dealAllError(error: BusinessError<Object>): void {\n  hilog.error(0x0000, 'testTag', `Failed to obtain userInfo. Code: ${error.code}, message: ${error.message}`);\n  // 在涉及UI交互场景下，建议按照如下错误码指导提示用户\n  if (error.code === ErrorCode.ERROR_CODE_LOGIN_OUT) {\n    // 用户未登录华为账号，请登录华为账号并重试\n  } else if (error.code === ErrorCode.ERROR_CODE_NETWORK_ERROR) {\n    // 网络异常，请检查当前网络状态并重试\n  } else if (error.code === ErrorCode.ERROR_CODE_USER_CANCEL) {\n    // 用户取消授权\n  } else if (error.code === ErrorCode.ERROR_CODE_SYSTEM_SERVICE) {\n    // 系统服务异常，请稍后重试\n  } else if (error.code === ErrorCode.ERROR_CODE_REQUEST_REFUSE) {\n    // 重复请求，应用无需处理\n  } else {\n    // 获取用户信息失败，请稍后重试\n  }\n}\n\nexport enum ErrorCode {\n  // 账号未登录\n  ERROR_CODE_LOGIN_OUT = 1001502001,\n  // 网络错误\n  ERROR_CODE_NETWORK_ERROR = 1001502005,\n  // 用户取消授权\n  ERROR_CODE_USER_CANCEL = 1001502012,\n  // 系统服务异常\n  ERROR_CODE_SYSTEM_SERVICE = 12300001,\n  // 重复请求\n  ERROR_CODE_REQUEST_REFUSE = 1001500002\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cancelauthorizationrequest",
      children: "CancelAuthorizationRequest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类为应用取消Account Kit授权的请求对象，作为华为账号取消授权的请求参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "继承："
        })
      }), " CancelAuthorizationRequest继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#authenticationrequest",
        children: "AuthenticationRequest"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请求体中的state参数，开发者可自定义，字符包含0-9、a-z、A-Z、英文点号、英文冒号、斜杠、下划线等，长度限制1-255，校验规则^[0-9a-zA-Z:/.-_]{1,255}$。  该参数与响应体中返回的state比较，校验是否是当前请求，可防止跨站攻击。  推荐开发者用随机数并做一致性校验。建议生成方式：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkts-api/arkts-arkts/js-apis-util/js-apis-util#utilgeneraterandomuuid9",
              children: "util.generateRandomUUID()"
            }), "。"]
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
        children: "import { authentication } from '@kit.AccountKit';\nimport { util } from '@kit.ArkTS';\n\nconst cancelRequest = new authentication.HuaweiIDProvider().createCancelAuthorizationRequest();\ncancelRequest.state = util.generateRandomUUID(); // 建议使用generateRandomUUID生成state\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cancelauthorizationresponse",
      children: "CancelAuthorizationResponse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类为应用取消华为账号授权的响应结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "继承："
        })
      }), " CancelAuthorizationResponse继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#authenticationresponse",
        children: "AuthenticationResponse"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "属性："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "只读"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应体中返回的state，字符包含0-9、a-z、A-Z、英文点号、英文冒号、斜杠、下划线等，长度限制1-255，校验规则^[0-9a-zA-Z:/.-_]{1,255}$。  与请求体中传入的state比较，校验是否是当前请求，防止跨站攻击。"
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
        children: "import { authentication } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { util } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 创建取消授权请求，并设置参数\nconst cancelRequest = new authentication.HuaweiIDProvider().createCancelAuthorizationRequest();\ncancelRequest.state = util.generateRandomUUID(); // 建议使用generateRandomUUID生成state\n\n// 执行取消授权请求，并处理结果\ntry {\n  // 此示例为代码片段，实际需在自定义组件实例中使用，并传入有效的Context上下文对象\n  const controller = new authentication.AuthenticationController(this.getUIContext().getHostContext());\n  controller.executeRequest(cancelRequest, (error: BusinessError<Object>, data) => {\n    if (error) {\n      dealAllError(error);\n      return;\n    }\n    const cancelAuthorizationResponse = data as authentication.CancelAuthorizationResponse;\n    const state = cancelAuthorizationResponse.state;\n    if (state && cancelRequest.state !== state) {\n      hilog.error(0x0000, 'testTag', `Failed to cancel. The state is different, response state: ${state}`);\n      return;\n    }\n    hilog.info(0x0000, 'testTag', 'Succeeded in canceling.');\n  });\n} catch (error) {\n  dealAllError(error);\n}\n\n// 错误处理\nfunction dealAllError(error: BusinessError<Object>): void {\n  hilog.error(0x0000, 'testTag', `Failed to cancel. Code: ${error.code}, message: ${error.message}`);\n  // 在应用登录涉及UI交互场景下，建议按照如下错误码指导提示用户\n  if (error.code === ErrorCode.ERROR_CODE_LOGIN_OUT) {\n    // 用户未登录华为账号，请登录华为账号并重试或者尝试使用其他方式登录\n  } else if (error.code === ErrorCode.ERROR_CODE_NETWORK_ERROR) {\n    // 网络异常，请检查当前网络状态并重试或者尝试使用其他方式登录\n  } else if (error.code === ErrorCode.ERROR_CODE_INTERNAL_ERROR) {\n    // 登录失败，请尝试使用其他方式登录\n  } else if (error.code === ErrorCode.ERROR_CODE_USER_CANCEL) {\n    // 用户取消授权\n  } else if (error.code === ErrorCode.ERROR_CODE_SYSTEM_SERVICE) {\n    // 系统服务异常，请稍后重试或者尝试使用其他方式登录\n  } else if (error.code === ErrorCode.ERROR_CODE_REQUEST_REFUSE) {\n    // 重复请求，应用无需处理\n  } else {\n    // 应用登录失败，请尝试使用其他方式登录\n  }\n}\n\nexport enum ErrorCode {\n  // 账号未登录\n  ERROR_CODE_LOGIN_OUT = 1001502001,\n  // 网络错误\n  ERROR_CODE_NETWORK_ERROR = 1001502005,\n  // 内部错误\n  ERROR_CODE_INTERNAL_ERROR = 1001502009,\n  // 用户取消授权\n  ERROR_CODE_USER_CANCEL = 1001502012,\n  // 系统服务异常\n  ERROR_CODE_SYSTEM_SERVICE = 12300001,\n  // 重复请求\n  ERROR_CODE_REQUEST_REFUSE = 1001500002\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "authenticationerrorcode",
      children: "AuthenticationErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该枚举为登录、授权、取消授权等接口的错误码。应用可根据如下错误码进行不同的处理。"
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
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "值"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PACKAGE_FINGERPRINT_CHECK_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001500001-%E5%BA%94%E7%94%A8%E6%8C%87%E7%BA%B9%E8%AF%81%E4%B9%A6%E6%A0%A1%E9%AA%8C%E5%A4%B1%E8%B4%A5",
              children: "1001500001"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用指纹证书校验失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DUPLICATE_REQUEST_REJECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001500002-%E9%87%8D%E5%A4%8D%E8%AF%B7%E6%B1%82",
              children: "1001500002"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["重复请求，当已有相同的请求在处理时，返回此错误码，此错误码不需要处理。你的应用需实现点击控制，防止连续点击发起相同请求。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCOPE_OR_PERRMISSION_UNSUPPORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001500003-%E4%B8%8D%E6%94%AF%E6%8C%81%E8%AF%A5scopes%E6%88%96permissions",
              children: "1001500003"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["不支持该scopes或permissions。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本"
              })
            }), "：5.0.0(12)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNSUPPORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001500004-%E5%B7%B2%E7%99%BB%E5%BD%95%E7%9A%84%E5%8D%8E%E4%B8%BA%E8%B4%A6%E5%8F%B7%E4%B8%8D%E6%94%AF%E6%8C%81%E8%AF%A5%E5%8A%9F%E8%83%BD",
              children: "1001500004"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["已登录的华为账号不支持该功能。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本"
              })
            }), "：5.0.0(12)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REQUEST_RESTRICTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001500005-%E8%AF%A5%E5%8A%9F%E8%83%BD%E8%A2%AB%E9%99%90%E5%88%B6%E8%B0%83%E7%94%A8",
              children: "1001500005"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该功能被限制调用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本"
              })
            }), "：5.0.0(12)  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCOUNT_NOT_LOGGED_IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502001-%E7%94%A8%E6%88%B7%E6%9C%AA%E7%99%BB%E5%BD%95%E5%8D%8E%E4%B8%BA%E8%B4%A6%E5%8F%B7",
              children: "1001502001"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户未登录华为账号。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "APP_NOT_AUTHORIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502002-%E5%BA%94%E7%94%A8%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1001502002"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用未授权。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PARAMETER_INVALID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502003-%E8%BE%93%E5%85%A5%E5%8F%82%E6%95%B0%E5%80%BC%E6%97%A0%E6%95%88",
              children: "1001502003"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输入参数值无效，接口传参异常等。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETWORK_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502005-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1001502005"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["网络异常。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INTERNAL_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502009-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1001502009"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["内部错误，如华为账号服务器错误或其他内部错误等。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USER_CANCELED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502012-%E7%94%A8%E6%88%B7%E5%8F%96%E6%B6%88%E6%8E%88%E6%9D%83",
              children: "1001502012"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户取消授权。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SCOPE_OR_PERMISSION_NOT_REQUESTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502014-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7scopes%E6%88%96permissions%E6%9D%83%E9%99%90",
              children: "1001502014"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["应用未申请scopes或permissions权限。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "authenticationcontroller",
      children: "AuthenticationController"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类为Account Kit登录授权、取消授权请求Controller。用于执行登录授权请求方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(context?: common.Context)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造器，构造Account Kit登录授权等请求Controller实例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
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
              href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-common/js-apis-app-ability-common#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Context上下文，当需要拉起华为账号登录、授权页面时必须传该参数，否则会报", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
              children: "401"
            }), "参数检查失败错误码。  应用可支持的Context有：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "UIAbilityContext"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiextensioncontext/js-apis-inner-application-uiextensioncontext",
              children: "UIExtensionContext"
            }), "。不支持应用在半模态、弹出框、子窗口等非全页面组件中使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiextensioncontext/js-apis-inner-application-uiextensioncontext",
              children: "UIExtensionContext"
            }), "调用。  元服务可支持的Context有：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "UIAbilityContext"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  - 在4.0.0(10)版本，参数类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext",
              children: "UIAbilityContext"
            }), "。  - 从4.1.0(11)版本开始，参数类型为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context",
              children: "Context"
            }), "。"]
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
        children: "import { authentication } from '@kit.AccountKit';\n\n// 此示例为代码片段，实际需在自定义组件实例中使用，并传入有效的Context上下文对象\nconst controller = new authentication.AuthenticationController(this.getUIContext().getHostContext());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "executerequest",
      children: "executeRequest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "executeRequest(request: AuthenticationRequest, callback: AsyncCallback<AuthenticationResponse, Record<string, Object>>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行Account Kit登录、授权等请求。使用callback异步回调。用于应用向华为账号请求登录、授权、取消授权等场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
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
            children: "request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#authenticationrequest",
              children: "AuthenticationRequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["登录授权认证请求体。  如该参数未正确传入，会抛出", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
              children: "401"
            }), "参数检查失败错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#authenticationresponse",
              children: "AuthenticationResponse"
            }), ", Record<string, Object>>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["登录授权回调函数。  当获取响应数据成功，err为undefined，data为获取到的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#authenticationresponse",
              children: "AuthenticationResponse"
            }), "对象；否则为错误对象。  如该参数未正确传入，会抛出", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
              children: "401"
            }), "参数检查失败错误码。"]
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-account/errorcode-account",
        children: "账号管理错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/account-api/account-api-error-code/account-api-error-code",
        children: "ArkTS错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
              children: "401"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-account/errorcode-account#section12300001-%E7%B3%BB%E7%BB%9F%E6%9C%8D%E5%8A%A1%E5%BC%82%E5%B8%B8",
              children: "12300001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service works abnormally."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502001-%E7%94%A8%E6%88%B7%E6%9C%AA%E7%99%BB%E5%BD%95%E5%8D%8E%E4%B8%BA%E8%B4%A6%E5%8F%B7",
              children: "1001502001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502002-%E5%BA%94%E7%94%A8%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1001502002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The application is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502003-%E8%BE%93%E5%85%A5%E5%8F%82%E6%95%B0%E5%80%BC%E6%97%A0%E6%95%88",
              children: "1001502003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid input parameter value."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502005-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1001502005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502009-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1001502009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001500001-%E5%BA%94%E7%94%A8%E6%8C%87%E7%BA%B9%E8%AF%81%E4%B9%A6%E6%A0%A1%E9%AA%8C%E5%A4%B1%E8%B4%A5",
              children: "1001500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to check the fingerprint of the app bundle."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502012-%E7%94%A8%E6%88%B7%E5%8F%96%E6%B6%88%E6%8E%88%E6%9D%83",
              children: "1001502012"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The user canceled the authorization."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502014-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7scopes%E6%88%96permissions%E6%9D%83%E9%99%90",
              children: "1001502014"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The app does not have the required scopes or permissions."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001500002-%E9%87%8D%E5%A4%8D%E8%AF%B7%E6%B1%82",
              children: "1001500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This error code is reported when a request is already being processed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001500003-%E4%B8%8D%E6%94%AF%E6%8C%81%E8%AF%A5scopes%E6%88%96permissions",
              children: "1001500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The scopes or permissions are not supported."
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
        children: "import { authentication } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { util } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 创建授权请求，并设置参数\nconst authRequest = new authentication.HuaweiIDProvider().createAuthorizationWithHuaweiIDRequest();\n// 'openid'为默认值可不传，开发者若需要获取其他用户信息，可传入其他scope参数，具体请参考AuthorizationWithHuaweiIDRequest类说明\nauthRequest.scopes = ['openid'];\nauthRequest.permissions = ['idtoken', 'serviceauthcode'];\nauthRequest.forceAuthorization = true;\nauthRequest.state = util.generateRandomUUID(); // 建议使用generateRandomUUID生成state\nauthRequest.idTokenSignAlgorithm = authentication.IdTokenSignAlgorithm.PS256;\n\n// 执行授权请求，并处理结果\ntry {\n  // 此示例为代码片段，实际需在自定义组件实例中使用，并传入有效的Context上下文对象\n  const controller = new authentication.AuthenticationController(this.getUIContext().getHostContext());\n  controller.executeRequest(authRequest, (error: BusinessError<Object>, data) => {\n    if (error) {\n      dealAllError(error);\n      return;\n    }\n    const authorizationWithHuaweiIDResponse = data as authentication.AuthorizationWithHuaweiIDResponse;\n    const state = authorizationWithHuaweiIDResponse.state;\n    if (state && authRequest.state !== state) {\n      hilog.error(0x0000, 'testTag', `Failed to authorize. The state is different, response state: ${state}`);\n      return;\n    }\n    hilog.info(0x0000, 'testTag', 'Succeeded in authentication.');\n    const authorizationWithHuaweiIDCredential = authorizationWithHuaweiIDResponse?.data;\n    const idToken = authorizationWithHuaweiIDCredential?.idToken;\n    const code = authorizationWithHuaweiIDCredential?.authorizationCode;\n    // 开发者处理idToken, code等信息\n  });\n} catch (error) {\n  dealAllError(error);\n}\n\n// 错误处理\nfunction dealAllError(error: BusinessError<Object>): void {\n  hilog.error(0x0000, 'testTag', `Failed to obtain userInfo. Code: ${error.code}, message: ${error.message}`);\n  // 在涉及UI交互场景下，建议按照如下错误码指导提示用户\n  if (error.code === ErrorCode.ERROR_CODE_LOGIN_OUT) {\n    // 用户未登录华为账号，请登录华为账号并重试\n  } else if (error.code === ErrorCode.ERROR_CODE_NETWORK_ERROR) {\n    // 网络异常，请检查当前网络状态并重试\n  } else if (error.code === ErrorCode.ERROR_CODE_USER_CANCEL) {\n    // 用户取消授权\n  } else if (error.code === ErrorCode.ERROR_CODE_SYSTEM_SERVICE) {\n    // 系统服务异常，请稍后重试\n  } else if (error.code === ErrorCode.ERROR_CODE_REQUEST_REFUSE) {\n    // 重复请求，应用无需处理\n  } else {\n    // 获取用户信息失败，请稍后重试\n  }\n}\n\nexport enum ErrorCode {\n  // 账号未登录\n  ERROR_CODE_LOGIN_OUT = 1001502001,\n  // 网络错误\n  ERROR_CODE_NETWORK_ERROR = 1001502005,\n  // 用户取消授权\n  ERROR_CODE_USER_CANCEL = 1001502012,\n  // 系统服务异常\n  ERROR_CODE_SYSTEM_SERVICE = 12300001,\n  // 重复请求\n  ERROR_CODE_REQUEST_REFUSE = 1001500002\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "executerequest-1",
      children: "executeRequest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "executeRequest(request: AuthenticationRequest): Promise<AuthenticationResponse>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行Account Kit登录授权等请求，使用Promise异步回调。用于应用向华为账号请求登录、授权、取消授权等场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
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
            children: "request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#authenticationrequest",
              children: "AuthenticationRequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["登录授权认证请求体。如该参数未正确传入，会抛出", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
              children: "401"
            }), "参数检查失败错误码。"]
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
              href: "#authenticationresponse",
              children: "AuthenticationResponse"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["登录授权Promise对象，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#authenticationresponse",
              children: "AuthenticationResponse"
            }), "对象。"]
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
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-account/errorcode-account",
        children: "账号管理错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/account-api/account-api-error-code/account-api-error-code",
        children: "ArkTS错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
              children: "401"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts-errcode/errorcode-account/errorcode-account#section12300001-%E7%B3%BB%E7%BB%9F%E6%9C%8D%E5%8A%A1%E5%BC%82%E5%B8%B8",
              children: "12300001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System service works abnormally."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502001-%E7%94%A8%E6%88%B7%E6%9C%AA%E7%99%BB%E5%BD%95%E5%8D%8E%E4%B8%BA%E8%B4%A6%E5%8F%B7",
              children: "1001502001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502002-%E5%BA%94%E7%94%A8%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1001502002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The application is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502003-%E8%BE%93%E5%85%A5%E5%8F%82%E6%95%B0%E5%80%BC%E6%97%A0%E6%95%88",
              children: "1001502003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid input parameter value."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502005-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1001502005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502009-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1001502009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001500001-%E5%BA%94%E7%94%A8%E6%8C%87%E7%BA%B9%E8%AF%81%E4%B9%A6%E6%A0%A1%E9%AA%8C%E5%A4%B1%E8%B4%A5",
              children: "1001500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to check the fingerprint of the app bundle."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502012-%E7%94%A8%E6%88%B7%E5%8F%96%E6%B6%88%E6%8E%88%E6%9D%83",
              children: "1001502012"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The user canceled the authorization."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502014-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7scopes%E6%88%96permissions%E6%9D%83%E9%99%90",
              children: "1001502014"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The app does not have the required scopes or permissions."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001500002-%E9%87%8D%E5%A4%8D%E8%AF%B7%E6%B1%82",
              children: "1001500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This error code is reported when a request is already being processed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001500003-%E4%B8%8D%E6%94%AF%E6%8C%81%E8%AF%A5scopes%E6%88%96permissions",
              children: "1001500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The scopes or permissions are not supported."
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
        children: "import { authentication } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { util } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 创建授权请求，并设置参数\nconst authRequest = new authentication.HuaweiIDProvider().createAuthorizationWithHuaweiIDRequest();\n// 'openid'为默认值可不传，开发者若需要获取其他用户信息，可传入其他scope参数，具体请参考AuthorizationWithHuaweiIDRequest类说明\nauthRequest.scopes = ['openid'];\nauthRequest.permissions = ['idtoken', 'serviceauthcode'];\nauthRequest.forceAuthorization = true;\nauthRequest.state = util.generateRandomUUID(); // 建议使用generateRandomUUID生成state\nauthRequest.idTokenSignAlgorithm = authentication.IdTokenSignAlgorithm.PS256;\n\n// 执行授权请求，并处理结果\ntry {\n  // 此示例为代码片段，实际需在自定义组件实例中使用，并传入有效的Context上下文对象\n  const controller = new authentication.AuthenticationController(this.getUIContext().getHostContext());\n  controller.executeRequest(authRequest).then((data) => {\n    const authorizationWithHuaweiIDResponse = data as authentication.AuthorizationWithHuaweiIDResponse;\n    const state = authorizationWithHuaweiIDResponse.state;\n    if (state && authRequest.state !== state) {\n      hilog.error(0x0000, 'testTag', `Failed to authorize. The state is different, response state: ${state}`);\n      return;\n    }\n    hilog.info(0x0000, 'testTag', 'Succeeded in authentication.');\n    const authorizationWithHuaweiIDCredential = authorizationWithHuaweiIDResponse?.data;\n    const idToken = authorizationWithHuaweiIDCredential?.idToken;\n    const code = authorizationWithHuaweiIDCredential?.authorizationCode;\n    // 开发者处理idToken, code等信息\n  }).catch((err: BusinessError) => {\n    dealAllError(err);\n  });\n} catch (error) {\n  dealAllError(error);\n}\n\n// 错误处理\nfunction dealAllError(error: BusinessError): void {\n  hilog.error(0x0000, 'testTag', `Failed to obtain userInfo. Code: ${error.code}, message: ${error.message}`);\n  // 在涉及UI交互场景下，建议按照如下错误码指导提示用户\n  if (error.code === ErrorCode.ERROR_CODE_LOGIN_OUT) {\n    // 用户未登录华为账号，请登录华为账号并重试\n  } else if (error.code === ErrorCode.ERROR_CODE_NETWORK_ERROR) {\n    // 网络异常，请检查当前网络状态并重试\n  } else if (error.code === ErrorCode.ERROR_CODE_USER_CANCEL) {\n    // 用户取消授权\n  } else if (error.code === ErrorCode.ERROR_CODE_SYSTEM_SERVICE) {\n    // 系统服务异常，请稍后重试\n  } else if (error.code === ErrorCode.ERROR_CODE_REQUEST_REFUSE) {\n    // 重复请求，应用无需处理\n  } else {\n    // 获取用户信息失败，请稍后重试\n  }\n}\n\nexport enum ErrorCode {\n  // 账号未登录\n  ERROR_CODE_LOGIN_OUT = 1001502001,\n  // 网络错误\n  ERROR_CODE_NETWORK_ERROR = 1001502005,\n  // 用户取消授权\n  ERROR_CODE_USER_CANCEL = 1001502012,\n  // 系统服务异常\n  ERROR_CODE_SYSTEM_SERVICE = 12300001,\n  // 重复请求\n  ERROR_CODE_REQUEST_REFUSE = 1001500002\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "authenticationrequest",
      children: "AuthenticationRequest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为账号登录授权认证请求父类对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "authenticationresponse",
      children: "AuthenticationResponse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为账号登录授权认证请求响应父类对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "authenticationprovider",
      children: "AuthenticationProvider"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为账号登录授权认证请求provider父类对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.0.0(10)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "idtype",
      children: "IdType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该枚举为ID类型枚举对象，作为华为账号登录状态请求参数传入。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "值"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USER_ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["华为账号用户的UID。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 该参数仅对系统应用开放。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPEN_ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["华为账号用户的OpenID。具体格式要求请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-faq/account-faq-9",
              children: "OpenID和UnionID的格式说明"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNION_ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["华为账号用户的UnionID。具体格式要求请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-faq/account-faq-9",
              children: "OpenID和UnionID的格式说明"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "state",
      children: "State"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该枚举为华为账号登录状态枚举对象。用于保存华为账号登录状态结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "值"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNLOGGED_IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "华为账号未登录。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUTHORIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "华为账号已登录且传入账号的UnionID/OpenID与当前账号一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNAUTHORIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "华为账号已登录且传入账号的UnionID/OpenID与当前账号不一致。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "staterequest",
      children: "StateRequest"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该类为获取华为账号登录状态请求对象，作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gethuaweiidstate",
        children: "getHuaweiIDState"
      }), "传参。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "idType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#idtype",
              children: "IdType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "属性idValue的ID类型，当前非系统应用只能传IdType.UNION_ID或IdType.OPEN_ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "idValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户获取的UnionID、OpenID值，传递的类型通过idType属性定义。不可为空，否则会报", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-error-code/account-api-error-code#section1001502003-%E8%BE%93%E5%85%A5%E5%8F%82%E6%95%B0%E5%80%BC%E6%97%A0%E6%95%88",
              children: "1001502003 输入参数值无效"
            }), "错误码。长度限制1-256。  UnionID、OpenID值可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#loginwithhuaweiidresponse",
              children: "LoginWithHuaweiIDResponse"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#authorizationwithhuaweiidresponse",
              children: "AuthorizationWithHuaweiIDResponse"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-loginpanel/account-api-loginpanel#loginpanel",
              children: "LoginPanel"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-huawei-id-button/account-api-huawei-id-button#loginwithhuaweiidbutton",
              children: "LoginWithHuaweiIDButton"
            }), "接口获取，具体方法参考其示例代码。"]
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
        children: "import { authentication } from '@kit.AccountKit';\n\n// 创建请求参数\nconst request: authentication.StateRequest = {\n  idType: authentication.IdType.UNION_ID,\n  idValue: '<可通过华为账号登录接口获取>' // 该值可以通过华为账号登录接口获取\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "stateresult",
      children: "StateResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类为获取华为账号登录状态结果对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本5.0.0(12)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#state",
              children: "State"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "华为账号登录状态枚举对象。用于保存华为账号登录状态结果。"
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
        children: "import { authentication } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 创建请求参数\nconst stateRequest: authentication.StateRequest = {\n  idType: authentication.IdType.UNION_ID,\n  idValue: '<可通过华为账号登录接口获取>' // 该值可以通过华为账号登录接口获取\n}\ntry {\n  // 执行获取华为账号登录状态请求，并处理结果\n  new authentication.HuaweiIDProvider().getHuaweiIDState(stateRequest).then((data: authentication.StateResult) => {\n    hilog.info(0x0000, 'testTag', 'Succeeded in getting huaweiIdState result.');\n    const state = data.state;\n    // 处理state\n  }).catch((err: BusinessError) => {\n    dealAllError(err);\n  })\n} catch (error) {\n  dealAllError(error);\n}\n\n// 错误处理\nfunction dealAllError(error: BusinessError): void {\n  hilog.error(0x0000, 'testTag', `Failed to getHuaweiIdState, errorCode=${error.code}, errorMsg=${error.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consistencystate",
      children: "ConsistencyState"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该枚举为手机号一致性状态枚举对象。应用可根据结果进行相应风控处理。"
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
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "值"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONSISTENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "华为账号已登录，传入的手机号与当前账号绑定的手机号一致，与当前设备任意一个SIM卡手机号一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INCONSISTENT_WITH_DEVICES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "华为账号已登录，传入的手机号与当前账号绑定的手机号一致，与当前设备SIM卡手机号不一致或当前设备无SIM卡。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INCONSISTENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "华为账号已登录，传入的手机号与当前账号绑定的手机号不一致。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consistencyrequest",
      children: "ConsistencyRequest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类为获取手机号一致性状态请求对象。"
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
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "idType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#idtype",
              children: "IdType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "属性idValue的ID类型，当前非系统应用只能传IdType.UNION_ID或IdType.OPEN_ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "idValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户的UnionID、OpenID值，不可为空，长度限制1-256，传递的类型通过idType属性定义。  UnionID、OpenID值可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "#loginwithhuaweiidresponse",
              children: "LoginWithHuaweiIDResponse"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#authorizationwithhuaweiidresponse",
              children: "AuthorizationWithHuaweiIDResponse"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-loginpanel/account-api-loginpanel#loginpanel",
              children: "LoginPanel"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-huawei-id-button/account-api-huawei-id-button#loginwithhuaweiidbutton",
              children: "LoginWithHuaweiIDButton"
            }), "接口获取，具体方法参考其示例代码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mobileNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-huawei-id-button/account-api-huawei-id-button#loginwithhuaweiidbutton",
              children: "LoginWithHuaweiIDButton"
            }), "组件的一键登录功能获取到的手机号，传入完整的手机号需要添加国家码，例如中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）为+86，值不可为空，长度限制1-256。  手机号示例：+86xxxxxxxxxxx（明文手机号）。"]
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
        children: "import { authentication } from '@kit.AccountKit';\n\n// 创建请求参数\nconst request: authentication.ConsistencyRequest = {\n  idType: authentication.IdType.UNION_ID,\n  idValue: '<可通过华为账号登录接口获取>', // 该值可以通过华为账号登录接口获取\n  mobileNumber: '+86xxxxxxxxxxx' // 通过华为账号一键登录功能获取到的明文手机号\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consistencyresult",
      children: "ConsistencyResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该类为获取手机号一致性状态结果对象。应用可根据结果进行相应风控处理。"
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
      }), " SystemCapability.AuthenticationServices.HuaweiID.Auth"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "名称"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#consistencystate",
              children: "ConsistencyState"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手机号一致性状态枚举对象。"
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
        children: "import { authentication } from '@kit.AccountKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 创建请求参数\nconst consistencyRequest: authentication.ConsistencyRequest = {\n  idType: authentication.IdType.UNION_ID,\n  idValue: '<可通过华为账号登录接口获取>', // 该值可以通过华为账号登录接口获取\n  mobileNumber: '+86xxxxxxxxxxx' // 通过华为账号一键登录功能获取到的明文手机号\n}\ntry {\n  // 执行获取手机号一致性状态请求，并处理结果\n  new authentication.HuaweiIDProvider().getMobileNumberConsistency(consistencyRequest)\n    .then((data: authentication.ConsistencyResult) => {\n      hilog.info(0x0000, 'testTag', `Succeeded in getting getMobileNumberConsistency result = ${data.state}`);\n      const state = data.state;\n      // 处理state\n    })\n    .catch((err: BusinessError) => {\n      dealAllError(err);\n    })\n} catch (error) {\n  dealAllError(error);\n}\n\n// 错误处理\nfunction dealAllError(error: BusinessError): void {\n  hilog.error(0x0000, 'testTag',\n    `Failed to get mobileNumberConsistency, errorCode=${error.code}, errorMsg=${error.message}`);\n}\n"
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