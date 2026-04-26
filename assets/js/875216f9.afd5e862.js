"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["938724"], {
358255(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_account_kit_guide_account_introduction_account_introduction_md_875_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-account-kit-guide-account-introduction-account-introduction-md-875.json
var site_docs_account_kit_guide_account_introduction_account_introduction_md_875_namespaceObject = JSON.parse('{"id":"account-kit-guide/account-introduction/account-introduction","title":"Account Kit简介","description":"场景介绍","source":"@site/docs/account-kit-guide/account-introduction/account-introduction.md","sourceDirName":"account-kit-guide/account-introduction","slug":"/account-kit-guide/account-introduction/","permalink":"/harmonyos-docs-site/account-kit-guide/account-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Account Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"空域AI超分的输出颜色附件是否需要通过OH_NativeBuffer创建","permalink":"/harmonyos-docs-site/xengine-kit-guide/xengine-kit-faq/xengine-kit-faq-4/"},"next":{"title":"开发者使用Account Kit的登录能力的管理细则","permalink":"/harmonyos-docs-site/account-kit-guide/account-detailedrules/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/account-kit-guide/account-introduction/account-introduction.md


const frontMatter = {
	title: 'Account Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Account Kit简介';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "能力范围",
  "id": "能力范围",
  "level": 2
}, {
  "value": "亮点/特征",
  "id": "亮点特征",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
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
        id: "account-kit简介",
        children: "Account Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Account Kit（华为账号服务）提供简单、快速、安全的登录功能，让用户快捷地使用华为账号登录应用。用户授权后，Account Kit可提供头像、昵称、手机号码等信息，帮助应用更了解用户。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/account-kit-guide/account-quick-login/account-quick-login-overview",
          children: "登录"
        }), "：提供登录服务，让用户使用华为账号快速登录应用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/account-kit-guide/account-get-user-info/account-get-user-info-overview",
          children: "获取华为账号用户信息"
        }), "：获取用户的基本开放信息，如头像、昵称、手机号、收货地址、发票抬头、风险等级。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/account-kit-guide/account-minorsprotection/account-overview-minorsprotection",
          children: "未成年人模式"
        }), "：获取未成年人模式的开启状态及年龄段信息以进行内容分级，调整未成年人相关设置时可增加家长验证，还可调用接口引导用户开启或关闭未成年人模式。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "亮点特征",
      children: "亮点/特征"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "一键登录"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可以通过华为账号一键登录功能获取手机号授权并完成登录，帮助应用建立用户体系或者打通原有的用户体系。优点如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "便捷性：一键完成登录和手机号授权，为用户提供更加便捷易用的登录体验。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "全场景：Phone、Tablet、PC/2in1设备登录体验一致，保障用户数据资产跨端延续。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "效率高：无需单独集成SDK，减少开发者开发和运营成本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "未成年人模式"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用可以通过未成年人模式的相关能力帮助家长快速开启未成年人模式，守护未成年人健康使用电子设备和应用。有以下优点："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "便捷性：统一管控未成年人模式入口，仅需一次设置，应用联动生效，避免各个应用内单独开启的繁琐操作，提升用户体验。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "全面守护：应用与系统联动，为孩子提供全面的守护措施，如仅允许访问适龄应用、增强隐私保护、限制设备使用时长等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Account Kit提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/accountkit-samplecode-clientdemo-arkts",
        children: "SampleCode示例工程"
      }), "体现了Account Kit的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-quick-login/account-phone-unionid-login",
        children: "华为账号一键登录"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-quick-login/account-silent-login",
        children: "静默登录"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-get-user-info/account-get-avatar-nickname",
        children: "获取头像昵称"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-get-user-info/account-get-phone/account-get-phonenumber",
        children: "快速验证手机号"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-get-user-info/account-choose-address-dev",
        children: "收货地址"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-get-user-info/account-select-invoice-title",
        children: "发票抬头"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-minorsprotection/account-overview-minorsprotection",
        children: "未成年人模式"
      }), "等特性，可参考该工程进行应用的相关内容开发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "OpenID"
          })
        }), "：应用维度用户标识符，是华为账号用户在应用/元服务的唯一标识。不同应用/元服务（不管是否在同一个开发者账号下）获取到用户的OpenID不同。OpenID严格区分大小写。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "UnionID"
          })
        }), "：开发者维度用户标识符，华为账号用户同一开发者账号下的唯一标识。开发者有多个应用/元服务时，同一个开发者账号下的应用/元服务获取到用户的UnionID相同。UnionID严格区分大小写。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "GroupUnionID"
          })
        }), "：关联主体账号组维度用户标识符，是华为账号用户在关联主体账号组内的唯一标识。不同开发者账号加入同一关联主体账号组后，其组内所有开发者的应用/元服务获取到用户的GroupUnionID相同。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "permission"
          })
        }), "：数据或接口权限，通过该权限判断应用是否能获取对应数据或调用对应接口。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "scopes"
          })
        }), "：scope列表，用于获取用户数据。开发者向华为账号服务申请不同类型用户数据的标识。比如头像昵称（profile）、匿名手机号（quickLoginAnonymousPhone）等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Authorization Code"
          })
        }), "：授权码，用户使用华为账号登录成功之后，可通过返回的凭据解析出授权码，通过授权码可获取Access Token、Refresh Token、ID Token等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Access Token"
          })
        }), "：访问凭证，是访问被权限管控资源的应用级凭证。可使用Access Token调用获取用户信息接口获取用户信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ID Token"
          })
        }), "：用户身份凭证，是OIDC（", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://openid.net/specs/openid-connect-core-1_0.html",
          children: "OpenID Connect"
        }), "）协议相对于OAuth 2.0协议扩展的一个用户身份凭证，包含用户信息。用户使用华为账号登录成功之后，可通过返回的凭据解析出Authorization Code、ID Token等数据。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Account Kit提供的能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持的设备类型"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-get-user-info/account-get-avatar-nickname",
              children: "获取头像昵称"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1、Wearable、TV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-get-user-info/account-get-phone/account-get-phone-overview",
              children: "获取手机号"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1、Wearable、TV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-get-user-info/account-choose-address-dev",
              children: "获取收货地址"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-get-user-info/account-select-invoice-title",
              children: "获取发票抬头"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-get-user-info/account-get-risklevel/account-get-risklevel-introduction",
              children: "获取风险等级"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1、Wearable、TV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-minorsprotection/account-overview-minorsprotection",
              children: "未成年人模式"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1、TV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-arkts-component/account-api-loginpanel/account-api-loginpanel",
              children: "华为账号登录组件"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1、TV"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/account-kit-guide/account-appendix/account-appendix-support-regions",
        children: "支持的国家/地区"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器，但与真机存在部分能力差异，具体差异如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通用差异：请参见“", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification#section1227613205203",
          children: "模拟器与真机的差异"
        }), "”。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["模拟器仅支持应用统一认证服务", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication",
          children: "authentication"
        }), "的登录和授权能力、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/account-api/account-arkts-component/account-api-huawei-id-button/account-api-huawei-id-button",
          children: "华为账号Button登录组件"
        }), "。"]
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