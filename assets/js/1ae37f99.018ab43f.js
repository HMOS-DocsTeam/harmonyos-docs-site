"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["488921"], {
575138(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_user_authentication_kit_user_authentication_dev_start_authentication_start_authentication_md_1ae_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-user-authentication-kit-user-authentication-dev-start-authentication-start-authentication-md-1ae.json
var site_docs_system_security_user_authentication_kit_user_authentication_dev_start_authentication_start_authentication_md_1ae_namespaceObject = JSON.parse('{"id":"system-security/user-authentication-kit/user-authentication-dev/start-authentication/start-authentication","title":"发起认证","description":"应用发起身份认证请求，获取身份认证结果，以访问受保护的系统、服务或应用的功能和数据，包括用户个人数据。","source":"@site/docs/system-security/user-authentication-kit/user-authentication-dev/start-authentication/start-authentication.md","sourceDirName":"system-security/user-authentication-kit/user-authentication-dev/start-authentication","slug":"/system-security/user-authentication-kit/user-authentication-dev/start-authentication/","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/start-authentication/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"发起认证","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-authentication","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"查询支持的认证能力","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/obtain-supported-authentication-capabilities/"},"next":{"title":"认证过程中取消认证","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/cancel-authentication/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/user-authentication-kit/user-authentication-dev/start-authentication/start-authentication.md


const frontMatter = {
	title: '发起认证',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-authentication',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '发起认证';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "统一用户认证控件介绍",
  "id": "统一用户认证控件介绍",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "发起认证",
        children: "发起认证"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用发起身份认证请求，获取身份认证结果，以访问受保护的系统、服务或应用的功能和数据，包括用户个人数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体参数、返回值、错误码等描述，请参考对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#userauthgetuserauthinstance10",
        children: "userAuth.getUserAuthInstance"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getUserAuthInstance(authParam: AuthParam, widgetParam: WidgetParam): UserAuthInstance"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取UserAuthInstance对象，用于执行用户身份认证，并支持使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%BB%9F%E4%B8%80%E7%94%A8%E6%88%B7%E8%AE%A4%E8%AF%81%E6%8E%A7%E4%BB%B6%E4%BB%8B%E7%BB%8D",
              children: "统一用户认证控件"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'result', callback: IAuthCallback): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅用户身份认证结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'result', callback?: IAuthCallback): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅用户身份认证结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "start(): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行用户认证。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "统一用户认证控件介绍",
      children: "统一用户认证控件介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统提供了统一用户认证控件供应用调用，使用统一用户认证控件的优势："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "统一用户认证服务将通过该控件完成信息的识别和认证，再将认证结果返回给应用，整体过程安全可控，可以更好地保护用户的生物特征信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "统一固定的UI组件样式，便于用户识别。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["认证控件的样式如图所示，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#widgetparam10",
        children: "WidgetParam"
      }), "配置对应参数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(441908)/* ["default"] */.A) + "",
        width: "2283",
        height: "1510"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "标注1：用户认证界面的标题（WidgetParam.title），不支持传空字串，最大长度为500字符。应用可在此配置符合场景的字符串，建议传入认证目的，例如用于支付、登录应用等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "标注2：当生物认证失败后，将显示一个按钮。点击该按钮，可以从生物认证切换到其他口令认证类型（AuthParam.authType）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者如需", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/user-authentication-kit/user-authentication-dev/apply-custom-authentication",
            children: "切换自定义认证"
          }), "，需要配置导航按键上显示的文本（WidgetParam.navigationButtonText），最大长度为60字符。API 10-17仅在单指纹、单人脸场景下支持配置。从API 18开始，增加支持人脸+指纹场景。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持使用认证控件的认证类型包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "锁屏口令认证"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "人脸认证"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指纹认证"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "人脸+锁屏口令认证"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指纹+锁屏口令认证"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "人脸+指纹+锁屏口令认证"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "人脸+自定义导航按键"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "指纹+自定义导航按键"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "人脸+指纹+自定义导航按键18+"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/user-authentication-kit/user-authentication-dev/prerequisites#%E7%94%B3%E8%AF%B7%E6%9D%83%E9%99%90",
          children: "申请权限"
        }), "：ohos.permission.ACCESS_BIOMETRIC。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["指定用户认证相关参数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#authparam10",
          children: "AuthParam"
        }), "（包括挑战值、认证类型", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#userauthtype8",
          children: "UserAuthType"
        }), "列表和认证等级", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#authtrustlevel8",
          children: "AuthTrustLevel"
        }), "）、配置认证控件界面", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#widgetparam10",
          children: "WidgetParam"
        }), "，调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#userauthgetuserauthinstance10",
          children: "getUserAuthInstance"
        }), "获取认证对象。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#onresult10-1",
          children: "UserAuthInstance.on('result')"
        }), "接口订阅认证结果。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#start10",
          children: "UserAuthInstance.start"
        }), "接口发起认证，通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#iauthcallback10",
          children: "IAuthCallback"
        }), "回调返回认证结果", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#userauthresult10",
          children: "UserAuthResult"
        }), "。当认证成功时返回认证通过类型（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#userauthtype8",
          children: "UserAuthType"
        }), "）和令牌信息（AuthToken）。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例1："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发起用户认证，采用认证可信等级≥ATL3的人脸+指纹+锁屏口令认证，获取认证结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "initiatingUserAuthentication1() {\n  try {\n    const randData = getRandData();\n    if (!randData) {\n      return;\n    }\n    // 设置认证参数\n    const authParam: userAuth.AuthParam = {\n      challenge: randData,\n      authType: [userAuth.UserAuthType.PIN, userAuth.UserAuthType.FACE, userAuth.UserAuthType.FINGERPRINT],\n      authTrustLevel: userAuth.AuthTrustLevel.ATL3,\n    };\n    // 配置认证界面\n    const widgetParam: userAuth.WidgetParam = {\n      title: resourceToString($r('app.string.title')),\n    };\n    // 获取认证对象\n    const userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);\n    Logger.info('get userAuth instance successfully');\n    // 订阅认证结果\n    userAuthInstance.on('result', {\n      onResult: (result: userAuth.UserAuthResult) => {\n        try {\n          Logger.info('userAuthInstance callback');\n          this.result[ResultIndex.EXAMPLE_1] = (`${result.result}`);\n          // 可在认证结束或其他业务需要场景，取消订阅认证结果。\n          userAuthInstance.off('result');\n        } catch (error) {\n          const err: BusinessError = error as BusinessError;\n          Logger.error(`onResult failed, code: ${err?.code}, Message: ${err?.message}`);\n        }\n      }\n    });\n    // 启动认证\n    userAuthInstance.start();\n    Logger.info('auth start successfully');\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    Logger.error(`auth failed, code is ${err?.code}, message is ${err?.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例2："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发起用户认证，采用认证可信等级≥ATL3的人脸+认证类型相关+复用设备解锁最大有效时长认证，获取认证结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "initiatingUserAuthentication2() {\n  // 设置认证参数\n  let reuseUnlockResult: userAuth.ReuseUnlockResult = {\n    reuseMode: userAuth.ReuseMode.AUTH_TYPE_RELEVANT,\n    reuseDuration: userAuth.MAX_ALLOWABLE_REUSE_DURATION,\n  };\n  try {\n    const randData = getRandData();\n    if (!randData) {\n      return;\n    }\n    const authParam: userAuth.AuthParam = {\n      challenge: randData,\n      authType: [userAuth.UserAuthType.PIN, userAuth.UserAuthType.FACE, userAuth.UserAuthType.FINGERPRINT],\n      authTrustLevel: userAuth.AuthTrustLevel.ATL3,\n      reuseUnlockResult: reuseUnlockResult,\n    };\n    // 配置认证界面\n    const widgetParam: userAuth.WidgetParam = {\n      title: resourceToString($r('app.string.title')),\n    };\n    // 获取认证对象\n    const userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);\n    Logger.info('get userAuth instance successfully');\n    // 订阅认证结果\n    userAuthInstance.on('result', {\n      onResult: (result: userAuth.UserAuthResult) => {\n        try {\n          Logger.info('userAuthInstance callback');\n          this.result[ResultIndex.EXAMPLE_2] = (`${result.result}`);\n          // 可在认证结束或其他业务需要场景，取消订阅认证结果。\n          userAuthInstance.off('result');\n        } catch (error) {\n          const err: BusinessError = error as BusinessError;\n          Logger.error(`onResult failed, code: ${err?.code}, Message: ${err?.message}`);\n        }\n      }\n    });\n    // 启动认证\n    userAuthInstance.start();\n    Logger.info('auth start successfully');\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    Logger.error(`auth failed, code is ${err?.code}, message is ${err?.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例3："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发起用户认证，采用认证可信等级≥ATL3的人脸+任意应用认证类型相关+复用任意应用最大有效时长认证，获取认证结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "initiatingUserAuthentication3() {\n  // 设置认证参数\n  let reuseUnlockResult: userAuth.ReuseUnlockResult = {\n    reuseMode: userAuth.ReuseMode.CALLER_IRRELEVANT_AUTH_TYPE_RELEVANT,\n    reuseDuration: userAuth.MAX_ALLOWABLE_REUSE_DURATION,\n  };\n  try {\n    const randData = getRandData();\n    if (!randData) {\n      return;\n    }\n    const authParam: userAuth.AuthParam = {\n      challenge: randData,\n      authType: [userAuth.UserAuthType.PIN, userAuth.UserAuthType.FACE, userAuth.UserAuthType.FINGERPRINT],\n      authTrustLevel: userAuth.AuthTrustLevel.ATL3,\n      reuseUnlockResult: reuseUnlockResult,\n    };\n    // 配置认证界面\n    const widgetParam: userAuth.WidgetParam = {\n      title: resourceToString($r('app.string.title')),\n    };\n    // 获取认证对象\n    const userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);\n    Logger.info('get userAuth instance successfully');\n    // 订阅认证结果\n    userAuthInstance.on('result', {\n      onResult: (result: userAuth.UserAuthResult) => {\n        try {\n          Logger.info('userAuthInstance callback');\n          this.result[ResultIndex.EXAMPLE_3] = (`${result.result}`);\n          // 可在认证结束或其他业务需要场景，取消订阅认证结果。\n          userAuthInstance.off('result');\n        } catch (error) {\n          const err: BusinessError = error as BusinessError;\n          Logger.error(`onResult failed, code: ${err?.code}, Message: ${err?.message}`);\n        }\n      }\n    });\n    // 启动认证\n    userAuthInstance.start();\n    Logger.info('auth start successfully');\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    Logger.error(`auth failed, code is ${err?.code}, message is ${err?.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例4："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以模应用弹窗方式拉起身份认证控件对用户进行身份认证："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(52029)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在PC/2in1设备上，应用如果使用模应用弹窗方式发起认证（即配置用户界面参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#widgetparam10",
        children: "widgetParam"
      }), "时传入了有效的uiContext），收到认证结果后，若需弹出其他窗口，应先获取控件弹窗释放的标志消息，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-security-api/user-authentication-api/user-authentication-arkts/js-apis-useriam-userauth/js-apis-useriam-userauth#onauthtip20",
        children: "on('authTip')"
      }), "接口订阅控件释放消息（authTipInfo.tipCode = UserAuthTipCode.WIDGET_RELEASED）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "initiatingUserAuthentication4() {\n  // 设置认证参数\n  try {\n    const randData = getRandData();\n    if (!randData) {\n      return;\n    }\n    const authParam: userAuth.AuthParam = {\n      challenge: randData,\n      authType: [userAuth.UserAuthType.PIN, userAuth.UserAuthType.FACE, userAuth.UserAuthType.FINGERPRINT],\n      authTrustLevel: userAuth.AuthTrustLevel.ATL3,\n    };\n    // 配置认证界面\n    const widgetParam: userAuth.WidgetParam = {\n      title: resourceToString($r('app.string.title')),\n      uiContext: this.getUIContext().getHostContext()\n    };\n    // 获取认证对象\n    const userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);\n    Logger.info('get userAuth instance successfully');\n    // 订阅认证结果\n    userAuthInstance.on('result', {\n      onResult: (result: userAuth.UserAuthResult) => {\n        try {\n          Logger.info('userAuthInstance callback');\n          this.result[ResultIndex.EXAMPLE_4] = (`${result.result}`);\n          // 可在认证结束或其他业务需要场景，取消订阅认证结果。\n          userAuthInstance.off('result');\n        } catch (error) {\n          const err: BusinessError = error as BusinessError;\n          Logger.error(`onResult failed, code: ${err?.code}, Message: ${err?.message}`);\n        }\n      }\n    });\n    // 启动认证\n    userAuthInstance.start();\n    Logger.info('auth start successfully');\n  } catch (error) {\n    const err: BusinessError = error as BusinessError;\n    Logger.error(`auth failed, code is ${err?.code}, message is ${err?.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/UserAuthentication",
          children: "发起认证"
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
52029(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
441908(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798768-6a660e102338090d13696dc86dbe734e.png");

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